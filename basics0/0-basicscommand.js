// CRT+SIFT+~    to OPEN A TERMINAL
// Cd to change folder
// cd basics0

//https://github.com/git-for-windows/git/releases/download/v2.52.0.windows.1/Git-2.52.0-64-bit.exe
//paste this link to install git bash
// git --version to check git version

// Install nodejs from https://nodejs.org/en/download/

// node -v to check nodejs version
// node try.js to run a js file

//navigate through terminal
// cd .. to go back
//cd foldername to go inside a folder
// ls to list files and folders
// mkdir foldername to make a new folder
// code . to open current folder in VS code

//basic git commands
// git init  => to initialize a git repository
// git status => to check status of repository
// git add filename => to stage a file
// git commit -m "message" => to commit changes
// git log => to see commit logs
// git push origin main => to push changes to remote repository
// git pull origin main => to pull changes from remote repository

//installing git bash and nodejs is required only once

//step 1 install chocolatey - windows package manager
// Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.SecurityProtocolType]::Tls12; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

//step 2 install git and nodejs using chocolatey
// choco install git
// choco install nodejs-lts

// step 3 verify installation
// git --version
// node -v
