---
layout: layout.njk
title: "MEDIAART 3L03: git, github, and project structure guidance"
---

# git, github, and project structure guidance

Using git to manage our contributions to the shared, [collective game project in MEDIAART 3L03](../collective-game/index.html)  will bring tremendous advantages in terms of (a) getting other people's contributions into our own copies of the game as quickly as possible, and (b) avoiding problems of accidentally breaking other people's contributions (and also making repair of such problems much, much easier). It takes a bit of getting used to, but it is 100% absolutely totally worth it.

You need to do the following two things JUST ONCE before doing anything else:

- Create an account on github.com (if you don't already have one) and add your github ID to the collective project's task tracking spreadsheet (link in the links channel on discord)
- While you are logged in on github.com, "fork" Dr.0's github repository for the project by navigating to [https://github.com/dktr0/3L03-2025](https://github.com/dktr0/3L03-2025) and clicking the Fork button.

Then, you also need to do the following ALL of the following five things in order everytime you sit down to work on the project:

## 1A. Making sure git is installed and cloning project to local machine

You only have to do the two things in step 1A the first time you are working on a new machine (after the first time you would do step 1B to update your local copy of the project rather than clone it anew).

Install a git client on the machine (if it doesn't already have one), following [github's instructions here](https://github.com/git-guides/install-git). For most of you, you will probably want to install the thing called "GitHub Desktop" which is a graphical interface to using git and github.

Now use your git client to clone YOUR forked repository on github.com to the local computer you are working on. If you installed "Git desktop", you can follow [these instructions](https://docs.github.com/en/desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop) to clone your forked repository to a local repository on your computer. It is very important that you clone your forked repository and not Dr. 0's original repository (hint: the correct URL will include your github user ID and NOT Dr. 0's user id).

## 1B. Getting an updated version of the project from Dr. 0

If it's not the first time you're working on the project on a given computer/machine, you don't need to install git and clone the project (because you will have already done both of those things). Instead, you need to make sure you have an up to date version of the project that includes all of the changes other people have made to the project. Here's how you do that...

Go to the URL for your copy/fork of the project on github.com. If the "parent" (Dr. 0's copy) has changes that your copy on github doesn't have, you should see a button labelled "Sync fork" - click it, then click the button that says "Update branch". (If you can't do this for some reason, reach out for assistance from Dr. 0 or one of the programmer members of our team.)

Now to get those changes onto the local machine you are working on, launch GitHub Desktop and click "Fetch Origin" and then "Pull Origin" (or just "Pull Origin" if you already see "Pull Origin"). After that, your local copy should include changes ("pull requests") made by others that Dr. 0 has already accepted into the project.

## 2. Making changes to the project

Before you work and make any changes to the project, you need to be sure that you are working in a "clean" copy of the project (either freshly cloned, updated from Dr. 0's repository, or the result of committing your changes in step 3 below). 

Import and open the shared project using the Godot editor.

IMPORTANT: In this project we are going to be individually responsible for specific files in folders with our names on them, which will help us not break things that others make. If this is the first time you are contributing to the project, you should make a folder in the Godot filesystem with your name. Anything you add to the project should be saved/placed in this folder. For example, if you add a .glb asset to the project, add it in the folder with your name in it. If you make an independent scene (.tscn file) for a 3D asset, level, UI element, etc make sure to save it in the folder with your name on it. And then please DO NOT change/edit files in other people's folders (reach out to consult if you have a problem that tempts you to do this - there is almost certainly another way to solve it...).

Once you are done making some changes that advance the project, close the Godot editor completely before going on to step 3.

## 3. Committing your changes

Open Github Desktop and make sure the current repository is your local copy of our collective project.

If you've made any changes, on the left where it says "Changes" you should see a list of any files that have changed (and they should pretty much only be in the folder with your name on it, as per the comment in the section above).

If you don't want to commit (i.e. don't want to "save") the changes to specific files you can discard those changes by right-clicking on the files in GitHub Desktop and selecting "Discard Changes".

When you are sure the list of changed files matches the meaningful changes you have made to our project, enter a short message to describe the change near the bottom left of the GitHub Desktop interface (it will suggest a default message like "Update filename.tscn"), and then press the button that says "Commit to main". The list of changed files will disappear because now the files on the disk match the latest official stage of your local copy of the project according to git.

## 4. Pushing changes to github

If you've just committed some changes (step 3 above), then you should see a button near the top middle of the GitHub Desktop interface labelled "Push Origin". Click this button to push your committed changes to github (in the cloud). After this, if you use a web browser to go to the URL of your copy of the repository on github.com, you should be able to see your changes reflected in what you see there.

## 5. Pull request (asking Dr. 0 to include your changes)

If you've pushed some changes to github (see step 4 above), then you probably want to have those changes go somewhere where other people will get them and benefit from them - we're using Dr. 0's copy of the repository for that purpose.

In Github Desktop, on the Branch menu, click the button labelled "Create pull request". Enter a title and description (e.g. "update to box model" for both title and description) and then click the (additional) button labelled "Create pull request".

What will happen now is that the changes you've requested will be sent to me (Dr. 0) for review. If I can see that you are only changing files that "belong" to you I will approve this request as soon as I see it (and have the 30 seconds of attention it takes me to review it). Now my (Dr. 0's) copy of the repository on github will include your changes, which will make it easier for other people to get them as well.

Note: You don't necessarily have to issue a pull request every time you make, commit, and push changes to the project. If you make several commits and then issue a pull request, the changes from all of these commits will be part of the pull request "all at once". Nonetheless, in a project like ours where we are working together relatively quickly, doing pull requests quite frequently (i.e. at least every day that we've made an improvement of some sort to the project) will help us all see and test the project as it comes together.

