---
title: How to setup oh-my-posh in Windows Terminal
slug: 2022/07/how-to-setup-oh-my-posh-in-windows-terminal
date: 2022-07-28
tags:
  - Dev
  - Dev
  - Setup
  - VSCode
published: true
---

*Updated 10/5/2023: Added instructions for oh-my-posh in git-bash in Visual Studio.*

While surfing the web (do people still say that?) I've seen several programmers have their shell decorated in a neat way, such as:

![oh-my-posh screenshot](oh-my-posh-ex1.jpg)

I think this looks great, so I wanted to learn how to set it up.

I've tried several multi-tabbed terminal emulators over the years... mostly ConEmu, Cmder. But I've been using `Windows Terminal` for awhile now. Microsoft has iterated on it very fast recently, and it has some nice features that are fairly easy to configure. I also mostly do my work in the `git-bash` shell in Windows Terminal.

So this post will show you how to setup `oh-my-posh` in git-bash (and further down, PowerShell) in Windows Terminal in Windows 10 and up. Let's get started:  <br/><br/> 
## Oh-my-posh in git-bash in Windows Terminal

* Install [Windows Terminal from the Microsoft Store](https://www.microsoft.com/store/productId/9N0DX20HK701)
* Install [Git for Windows](https://gitforwindows.org). This installs `git-bash`. During install, include the option to add git-bash to Windows Terminal settings.
* Install Nerd Font [MesloLGM NF](https://github.com/ryanoasis/nerd-fonts/releases/download/v2.1.0/Meslo.zip)  (or something else from [www.nerdfonts.com](https://www.nerdfonts.com))
    * Extract `Meslo LG M Regular Nerd Font Complete Windows Compatible.ttf`
    * Right click the ttf file -> `Install for all users`
* Open Windows Terminal -> Click the down-arrow in the title bar -> Settings -> click `Open JSON file`  in lower-left -> Add the following within `profiles` section:
```json
"defaults": {
  "font":
  {
    "face": "MesloLGM NF"
  }
},
```
* You can also add `"size": 10` under the `font` section to set the font size.
* Save `settings.json`
* You may get a message saying it can't find the font file. Try restarting Windows Terminal. If still an issue, make sure the correct "face" name string is set by opening the Windows `Font settings` and search for `meslo` to see the correct face name.
* Install `oh-my-posh` by running the following, which installs oh-my-posh.exe and adds it to your PATH, and adds `POSH_THEMES_PATH` environment var:
```bash
winget install oh-my-posh
```

* In the future, to update oh-my-posh, run:
```bash
winget upgrade oh-my-posh
```
* Restart Windows Terminal so it sees the new environment vars.
* Tell git-bash to use oh-my-posh along with a specific theme:
	* oh-my-posh themes are installed to `%localappdata%/Programs/oh-my-posh/themes`
		* You can preview these themes here: https://ohmyposh.dev/docs/themes
	* In git-bash, run `nano ~/.bash_profile` and add the following (change the theme file if you wish):
```bash
eval "$(oh-my-posh --init --shell bash --config ~/AppData/Local/Programs/oh-my-posh/themes/powerline.omp.json)"
```  
* Save, exit nano, and run `source ~/.bash_profile` then you should be able to see the new prompt.  

 <br/>
## Oh-my-posh in PowerShell in Windows Terminal

Same as above instructions for git-bash, but we need to add the oh-my-posh command and theme to our user's PowerShell `$PROFILE`.

To see the location of your $PROFILE file (which may not actually be created yet even though it returns a path):
```powershell
echo $PROFILE
```

You can create the profile (it won't overwrite if it already exists), by running:
```powershell
if (!(Test-Path -Path $PROFILE)) {
  New-Item -ItemType File -Path $PROFILE -Force
}
```

Open your $PROFILE file with `notepad $PROFILE` and add the following, save, and reopen PowerShell:
```powershell
oh-my-posh --init --shell pwsh --config ~/AppData/Local/Programs/oh-my-posh/themes/powerline.omp.json | Invoke-Expression
```

If you get an error message saying you can't run your profile script, run powershell as admin, and run:
```powershell
Set-ExecutionPolicy RemoteSigned
```

<br/><br/>

## Visual Studio Code - Terminal Font Setup

If you use Visual Studio Code, you'll probably notice that some of the characters in the prompt don't display correctly in it's integrated bash terminal. You can easily fix this by setting the terminal font to the same font we used above:
* Opening settings by pressing `ctrl-shift-p` to open the command panel and type settings and open the settings UI.
* Search the settings UI for `terminal font` and find the `Terminal > Integrated: Font Family` setting.
* Set it to the same font face name you used above, which is `MesloLGM NF` in this case.
* It should update immediately and you should be good to go.

<br/><br/>

## Visual Studio - git-bash Terminal Setup

If you use Visual Studio and you've followed the instructions above to get oh-my-posh working in Git Bash, you can easily get it working in Visual Studio by following these steps (This was done in Visual Studio 2022):
* Go to the `Tools menu > Options`.
* Under `Environment > Terminal`, click `Add`.
* Give it a Name. Something like `Git Bash`.
* Shell Location will most likely be `C:\Program Files\Git\bin\sh.exe`, but maybe you installed Git Bash to a different volume/folder.
* Set Arguments to `--login -i`
* Optionally set `Git Bash` as the default Terminal by clicking `Set as Default`.
* Click `Apply` and `OK`.
* Under `Environment > Fonts and Colors`, in the `Show settings for` drop-down, select `Terminal`.
* In the `Font` drop-down, select the nerd-font that you used with Git Bash above. I'm using `MesloLGM NF`.
* Click `OK`.
* Open a Terminal: Go to the `View menu > Terminal`. Open a Git Bash terminal (if it's not already default).