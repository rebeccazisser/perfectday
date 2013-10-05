# Perfect Day
## Journeys that delight

# Documentation
Since we're using Ratchet, we should both read over the documentation. It looks like they've anticipated everything we'll need, we just need to go over all of it.

* [Ratchet Documentation](http://maker.github.io/ratchet/two.html#gettingStarted)

# Files
According to the Ratchet Documentation, the structure for making the pages transition properly is pretty much set in stone. When you go to make a new page, just cop over the template from index.html and go from there.

# How to Use the Terminal/iTerm2

Here's some stuff I use a lot:

```cd name-of-directory```
```cd``` stands for change directory. It's what moves you around in the terminal.

```ls -l``` 
This lets you see the files that are in the current directory. This helps if you don't know where you are.

```cd ../```
This is how you move up a directory.

```touch index.html```
You can make files really quickly with the touch command. This will make a new empty file named index.html.

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

```git log```
This is where you can see the commit messages. You press 'q' to get out of the viewing window.

```git status```
This is how you can see what files you've changed.

## Git Branches
```git checkout -b name-of-branch```
Whenever I'm working on stuff, we want to keep <em>master</em> (our perfect, working, not fucked up-at-any-point-branch) clean. This means that when you make changes, you shouldn't work on master. Instead, you should copy master, and work on the copy instead. That's what the thing above does. Like:

```git checkout -b updatingStyles```

Cool! Now we're on a new branch where we can't mess up master. If you really mess something up, it'll be fine. 

Once you're ready to put this stuff into master, here are the steps you take:

```git checkout master```
This is how you change in-between branches. 

```git pull```
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

# Github Pages
So, github pages are super cool! Github probably explains it better than I do, but the gist of it is that I'm going to set up a service hook so that when you push to master, you can view the app hosted online here: [Perfect Day](http://helenvholmes.github.io/perfectday/). This is important, because the app is probably going to act differently on our phones than it will sized down on our computers. This way, you can check to make sure that your changes made on master are still working on mobile. 

Also, if you're paying for hosting, you should look into github pages because they're free. I host my portfolio here, and it's awesome. They do a lot of optimization on your files that I always forget to do to make your website faster. 

* [What are Github Pages?](https://help.github.com/articles/what-are-github-pages)
* [Github Pages Documentation](https://help.github.com/categories/20/articles)

# Sublime Package Control
Anytime you there might be something useful, type Shift + Command + p and see if there's a package for it. SASS is one, GitGutter is another, but there are <em>tons</em>, you just gotta look for them.

# Other Useful Terminal Stuff
I have a terminal app that shows you the git branch you're on and whether or not you've made changes (it looks like a cloud and a lightning bolt; it's pretty useful). You should install it too. Here are the steps to get that working:

# SASS
```rake sass```
Whenever you make changes to the sass files, run this and the terminal will update the css file for you on the fly. When you are ready to get out of the watching window, press control + c. Remember though, iTerm2 has tabs...

# Git Config
	[core]
		repositoryformatversion = 0
		filemode = true
		bare = false
		logallrefupdates = true
		ignorecase = true
	[remote "origin"]
		url = https://github.com/helenvholmes/perfectday.git
		fetch = +refs/heads/*:refs/remotes/origin/*
		push = +refs/heads/master:refs/heads/gh-pages
		push = +refs/heads/master:refs/heads/master
	[branch "master"]
		remote = origin
		merge = refs/heads/master
	[branch "gh-pages"]
		remote = origin
		merge = refs/heads/gh-pages

