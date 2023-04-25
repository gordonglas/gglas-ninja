#!/usr/bin/env python3

# Inserts html into the head tag of Gatsby's "public/index.html" file.
# It inserts it after the '<meta name="viewport"' tag, which is configurable.
#
# I couldn't find a way to do this built-in to gatsby,
# as gatsby only seems to be able to do inject html at runtime,
# and some things need it to exist in the html from the get-go.
#
# Assumes this script is under a "scripts" folder under
# the gatsby project root, like so: "scripts/post-build.py"
#
# Run it after "gatsby build" by running:
#   npm run postbuild
#   (Requires postbuild script in package.json)
# or run it directly:
#   python scripts/post-build.py
# Then you can test locally by running "gatsby serve".
#
# Tested on Windows, but should work cross-platform.

import os
import sys

# Your html to be inserted. One item per line.
html_to_insert = [
  '<link rel="apple-touch-icon" sizes="96x96" href="/img/gn/touch-icon-96-96.png" />',
  '<link href="https://mastodon.gamedev.place/@kefka" rel="me" />',
]

# This script will look for this html tag,
# and insert your html after "find_tag_end".
find_tag_start = '<meta name="viewport"'
find_tag_end = '/>'

head_end = '</head>'

# Determine the end-line character(s) in a file by looking
# at a single line. Returns the character(s), else empty string.
def find_end_line_type(line) -> str:
  if line.endswith('\r\n'): # Windows
    return '\r\n'
  elif line.endswith('\n'): # Unix
    return '\n'
  elif line.endswith('\r'): # Mac
    return '\r'
  return ''                 # No end-line characters

# Get path containing this script,
# regardless of current working directory
def get_script_path() -> str:
    return os.path.dirname(os.path.realpath(__file__))

def main() -> int:
  script_path = get_script_path()

  # Read file into memory, line by line.
  input_file = os.path.abspath(os.path.join(script_path, '../public/index.html'))
  if not os.path.isfile(input_file):
     print(f'Error: Input file not found at {input_file}.\nYou must first run "gatsby build" to generate the site files.')
     return 0
  print(f'Reading file: {input_file}')
  lines = []
  # newline='' means don't do newline translation
  with open(input_file, 'r', encoding='UTF-8', newline='') as input_stream:
     for line in input_stream:
        lines.append(line)

  if len(lines) == 0:
    print(f'Error: Empty input file: {input_file}')
    return 0

  end_line = find_end_line_type(lines[0])

  # Make first pass through lines (until closing head tag)
  # to make sure the html wasn't already inserted.
  # Only checks for first line we want to insert.
  for line in lines:
    if html_to_insert[0] in line:
      print('Error: First line of html_to_insert already found in html')
      return 1
    if head_end in line:
      break

  # Now attempt to modify the html.
  # Use while loop (instead of for-each),
  # so we can modify "lines" in-place.
  i = 0
  while i < len(lines):
    line = lines[i]

    if find_tag_start in line:
      print(f'Found "find_tag_start": {find_tag_start}')
      start = line.find(find_tag_start)
      end = line.find(find_tag_end, start + len(find_tag_start))
      if end == -1:
         print(f'Error: failed to find "find_tag_end": \'{find_tag_end}\'.\nDid gatsby\'s html format change?')
         return 1

      before = line[:(end+len(find_tag_end))]
      after = ''
      if len(line) >= end+len(find_tag_end):
        after = line[(end+len(find_tag_end)):]
      #print(f'before: [{before}]')
      #print(f'after: [{after}]')

      # Rewrite line i with start of the line
      lines[i] = before + end_line
      # Insert our new lines of html
      for new_line in html_to_insert:
        i += 1
        lines.insert(i, new_line + end_line)
      # Insert remaining part of the line
      if after != '':
        i += 1
        # "after" should already have the end-line character(s)
        lines.insert(i, after)
      print('HTML inserted successfully in memory')
      break

    # if we reached </head>, we failed to find 'find_tag'
    if head_end in line:
      print(f'Error: Found end </html> tag before finding \'{find_tag_start}\'.\nDid gatsby\'s html format change?')
      return 1

    i += 1

  # Print out the modified lines for debugging
  #num_lines_print = i + 1
  #print('Modified first lines...')
  #i = 0
  #while i < num_lines_print:
  #  print(lines[i], end='')
  #  i += 1

  # Overwrite the file with the modified data.
  # newline='' means don't do newline translation
  with open(input_file, 'w', encoding='UTF-8', newline='') as output_stream:
    for line in lines:
      output_stream.write(line)

  print(f'File updated successfully')
  return 0

if __name__ == '__main__':
  sys.exit(main())
