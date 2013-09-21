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

## Git Branches
```git checkout -b name-of-branch```
Whenever I'm working on stuff, we want to keep <em>master</em> (our perfect, working, not fucked up-at-any-point-branch) clean. This means that when you make changes, you shouldn't work on master. Instead, you should copy master, and work on the copy instead. That's what the thing above does. Like:

```git checkout -b updatingStyles```

Cool! Now we're on a new branch where we can't mess up master. If you really mess something up, it'll be fine. 

Once you're ready to put this stuff into master, here are the steps you take:

```git checkout master```
This is how you change in-between branches. 

``git pull```
Make sure that master is up-to-date!

```git checkout updatingStyles```
You're checking out your branch that you want to update with master.

```git rebase master```
This is making sure that master and your branch are up-to-date with one another. Sometimes, you run into trouble - this is where you can fix problems so you don't pollute master.

```git checkout master```
Okay, moving back to master

```git rebase updatingStyles```
Making sure that master is up-to-date with your branch. Kind of repetitive, but necessary for keeping master clean.

```git push```
Voilà! You can push your changes!

That was a lot of information, but don't worry. We'll go over it together Sunday.


# Other Useful Sublime Stuff
The reason Sublime is epic is because you can soup it up with packages. Basically, things that make it nicer/easier to use. There are a ton you can download (just go through the packages, you'll see there are <em>tons</em>) but the one I really want you to install is gitgutter. It will make it easier to use git because you can see which lines have been changed and which will be commited; also, it shows conflicts when we've both tried to edit the same line.

[Package Control](https://sublime.wbond.net/installation#st2)

After that, you'll need to restart Sublime. After that, type Shift + Command + p. It'll bring up this prompt where you can type. If you type 'install', it'll bring up all of these packages you can install. Type in gitgutter, and it will magically install gitgutter. If you type CSS and HTML and other things, you might find some other cool packages too, explore a bit.

# Other Useful Terminal Stuff
I have a terminal app that shows you the git branch you're on and whether or not you've made changes (it looks like a cloud and a lightning bolt; it's pretty useful). You should install it too. Here are the steps to get that working:

Install ZSH:
```curl -L https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh | sh```

Switch to your home directory:
```cd ~```

Open up the file named .zshrc. In there, there's something that looks like this:
```ZSH_THEME : something```

Rename ```something``` to ```cloud```. Restart the terminal; now you too should have lightning bolts and clouds. 

# CSS/SASS
We're not going to use CSS. SASS is better, and you can always just type in CSS if you want. However, there's some stuff you need to do to make it work. Here are the basics: we run a terminal command, and it will bundle up all of our SASS files and turn them into one, big, CSS file that we never touch because it's programmatically perfect. Instead, we only change the SASS (.scss) files. Unfortunately, you need to install some stuff to run the terminal command (like you needed to install git):

# Ruby
In your terminal:
```$ \curl -L https://get.rvm.io | bash -s stable --rails --autolibs=enabled # Or, --ruby=1.9.3```
This will install Ruby, which handles our SASS files. It takes a bit, so make sure you have a good internet connection.

# Other Useful Stuff
* [Responsive Bookmarklet](http://responsive.victorcoulon.fr/): Get this thing, it's super useful.