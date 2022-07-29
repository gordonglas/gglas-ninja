---
title: "How to setup oh-my-posh in Windows Terminal"
date: "2022-07-28"
tags: ["Dev", "Dev Setup"]
---

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