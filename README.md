Hey Rebecca! I figure I might as well put some of the terminal commands and stuff in here. So, using git:

# How to Use Git
## Terminal Stuff
I always open terminal from Spotlight, so open that.

Here's some stuff I use a lot:

```cd name-of-directory```
```cd``` stands for change directory. It's what moves you around in the terminal.

```ls -l``` 
This lets you see the files that are in the current directory. This helps if you don't know where you are.

## Git Stuff
This is for when you actually want to <em>push</em> and <em>pull</em> files (meaning, send the changes to me and get changes I've made).

```git add .```
This adds all of the files to git to be pushed. You add, then you give it a message, and then you finally say push. So, this is the first step. 

The period mark adds everything; you can alternatively just add single files by typing the name of that file, like this:

```git add README.md```

```git commit -m “My message!”```
This is how you give messages to a commit. You can literally write anything here, but it will help both of us if you're descriptive.

```git push```
This will send the changes to me so I can get them. To make sure it's worked, go to [Perfect Day](http://github.com/helenvholmes/perfectday). If you see your commit message up top, you'll know it worked.

```git pull```
This will get changes from me. You should try and do this before you start working. 

## Other Useful Git Stuff
```git checkout -b name-of-branch```
Whenever I'm working on stuff, we want to keep <em>master</em> (our perfect, working, not fucked up-at-any-point-branch) clean. This means that when you make changes, you shouldn't work on master. Instead, you should copy master, and work on the copy instead. That's what the thing above does. Like:

```git checkout -b updatingStyles```

Cool! Now we're on a new branch where we can't mess up master. If you really mess something up, it'll be fine. 


# Other Useful Sublime Stuff



