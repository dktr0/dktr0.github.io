---
layout: layout.njk
title: "MEDIAART 3D03: Relative and absolute filepaths, and copying, moving, renaming files"
---

# [MEDIAART 3D03](../outline/index.html): Relative and absolute filepaths, and copying, moving, renaming files

Note: It could be useful to review the [first devops module about terminal basics](../terminal-basics/index.html) before undertaking this one.

## Relative Filepaths

Many of the commands we issue at the terminal involve pointing to the name and/or location of one or more files. For example, the following command launches the nano editor while also pointing nano towards a file called myFile.js in the present working directory: ```nano myFile.js```

The "myFile.js" part of the previous example is technically a "filepath" - a notation for identifying a specific file in a specific location in a filesystem. This example is also the simplest kind of filepath, identifying a file by that name in the present working folder.

This example is also an example of one of two kinds of filepath - it is a "relative" filepath because what we get (what it points to) is relative to our present location. If we issue the same command in a different working directory, we'd get a different result.

We could also write that example a little more explicitly. If a filepath begins with ./ (a period and a slash) then that is a synonym for saying whatever comes after is in the present working directory. Thus, this is another way of writing the example above (try it out!): ``` nano ./myFile.js```

What if we are in one directory/folder, and want to open or do something to a file in a directory/folder beneath it? Let's imagine our present working directory has a directory in/beneath it called "myFolder" and that inside myFolder there is a file called myFile.js. Here are two ways we could reference that file in that location:

```
nano myFolder/myFile.js
nano ./myFolder/myFile.js
```

In both of the examples above, the slash in the middle of the filepath are a way of saying "and look for this thing inside the thing before it".
We could go severaly directories down if necessary. For example, the following would access a file called myFile.js in a folder called yetAnother that is a child of another folder called anotherSubFolder that is a child of a folder called folder1 that is a child of our present working directory... ```nano folder1/anotherSubFolder/yetAnother/myFile.js```

What if we want to access files that are not in our present folder or somewhere beneath it? There are two ways of doing this, a "relative" way and an "absolute" way. We'll deal with the relative way right here, and the absolute way in the next section of this page. The "relative" way involves putting something in the path that goes "up" to the folder/directory above, using the abbreviation .. (two periods directly in a row). For example, this would open a file called in myFile.js in the folder above our present working directory: ```nano ../myFile.js```

We can go up and down! The following example would open a file called myFile.js in a folder called myFolder that is a child of the folder above our present working directory: ```nano ../myFolder/myFile.js```

## Absolute Filepaths

Absolute filepaths involving specifying a file starting from a "top" or "root" location on a computer system. This top location is specified by having a filepath that starts with a / (a slash). We saw earlier that the command pwd will tell us what the present working directory is. When I issue that command I get the following result: ```/home/dktr0```

So, notice that result is a filepath and that it start with a / (not a ., not a .., not some other character). So that result is telling me that my present working directory is a folder called dktr0 which is in/under a folder called home which is in/under the top/root of the filesystem. (And it just happens to be my user folder on this Debian/Linux setup.)

If I had a folder called myFolder in that folder, and it had a file called myFile.js in it, then this would be a way of opening that file - and because it is an absolute path it would open that file regardless of what my present working directory is: ```nano /home/dktr0/myFolder/myFile.js```

We'll probably find that absolute paths are less common in our work than relative paths, though. Most of our work takes the form of "projects" that have their own folder and have all they stuff they need in/under that folder. So any references to files in that project can be made relative to the folder of the project rather than relative to the system as all. Still, absolute paths are occasionally necessary, you'll see them "in the wild", and so it's important to understand what they mean.

As a final comment on filepaths, I'll just point out that a bunch of the commands we learned in the earlier module all take filepaths - so we can use absolute and relative file paths with "cd" "rm" "ls" "mkdir" "rmdir", among many other commands.

## Copying, Moving, Renaming Files

We can copy files with the cp command, providing two filepaths - the first is the source for the copy and the second is the destination. The following will copy a file called myFile.js in our present working directory to a second one called myFile2.js: ```cp myFile.js myFile2.js```
And both of the following would copy a file called myFile.js to the folder above the present working directory:

```
cp myFile.js ../myFile.js
cp myFile.js ..
```

If instead of cp I use the command mv (short for "move") I can move or rename files (as it turns out these are kind of the same thing). The following would rename a file called myFile.js to being called newName.js: ```mv myFile.js newName.js```
And the following would move a file called myFile.js in the present folder into a folder called myFolder under the present folder: ```mv myFile.js myFolder```
