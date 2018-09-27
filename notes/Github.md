# WHAT IS GIT?

Git is a free and open source version control system/software. Once you initialize git in a directory, it tracks changes in your code. This is called initializing a repository.

Their are severial ways you can use git:

* command line
* gui interface / Github Desktop for Mac/PC
 * Note: When installing Github Desktop make sure you install command line tools.
 * Under the programs preferences you will need to add your github credentials.
* [Atom Text Editor has git/github support built in](https://atom.io/)

### WHAT IS GITHUB?

Github is a service that hosts git repositories remotely. It is like a Dropbox or Google Drive for code. Once you initialize your repository you can link it with a github repository. The easiest way to create a repository and link it is with the Github Desktop app. Below you’ll see how to create a local repo and upload it to Github.

### CREATING A REPO

#### [Creating a repository with Github Desktop](https://vimeo.com/251362770)

Also see https://help.github.com/articles/create-a-repo/

### Common Git Terminal Commands

#### git init

When creating a repository from scratch you need to call git init to start git

#### git status

Tells you the current status of you repository
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git

If you have already created a repository you can use git clone to copy that repository from github to your computer
Your general workflow when using git, will be navigating to your repo folder and executing these commands.

#### git add .

Will add all the changes you have made since your last commit.

#### git commit -m “your commit”

This will save your changes

#### git push origin master

If configured correctly, will upload your changes to github.

## Markdown

[Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
