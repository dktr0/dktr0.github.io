---
layout: layout.njk
title: "MEDIAART 3D03: Terminal basics"
---

# [MEDIAART 3D03](../outline/index.html): Terminal basics

It's really useful to be able to manipulate folders and files, and edit text files, from a text-based "UNIX" terminal. This sometimes lets you do things you would otherwise be unable to do on your local machine, but just as importantly, it is a very common way of changing the configuration of, running software, etc on remotely located machines (e.g. servers in the "cloud" or computers elsewhere on your local network).

## Getting to a terminal for the first time (on 4 different operating systems)

On Mac OS, use the Spotlight/Search feature to look for "Terminal" and launch it (or find it directly in your Applications or Utilities folders).

On Windows, you'll want to install the "Windows Subsystem for Linux" or "WSL" for short, and for our class I recommend using the Debian distribution with WSL. That goes something like this:

- Search for "Powershell", right click on the result "Windows Powershell" that comes up and select Run as Administrator.
- at the PowerShell terminal that pops up, type the following and press enter: ```wsl --install```
- now to make Debian available, enter the following: ```wsl --install Debian```
- finally, now and in the future, you should be able to launch a WSL terminal with Debian linux by searching for WSL in the search bar and clicking the result that you get.

On a Chromebook, you'd also need to install a virtual Linux environment (similar to WSL). In the Chromebook's settings app you should be able to find a Linux development environment setting, which can be turned on and then "installed".

On Linux, there are many terminals available, so if you are Linux user I will leave you to figure out how to get to a terminal yourself!

## Some terminal commands to try out (and know by heart)

At the terminal you always have a "present working directory". Think of this like a folder (containing files and subfolders) on which the attention of the terminal is focused. Depending on how your terminal is configured, it is probably already telling you what the present working directory is. The tilde (~) is an abbreviation for the current user's home folder/directory.

The following command lets you verify most completely what the location of the present working directory is: ```pwd```

The following command lets you see the contents of the present working directory: ```ls```

If you are using a fresh WSL or Chromebook Linux installation, the previous command will probably show you an empty folder. On MacOS, you probably already have some stuff in that folder.

The following variation of ls gives you more details about each entry in the directory: ```ls -l```

You can make a new folder "under" the present folder with mkdir. For example the following will create a folder called test (try it out then use ls to see that something else is there): ```mkdir test```

And the following would remove a folder called test, but only if it is already empty: ```rmdir test```

To change the present working directory into another folder that is in/under the present folder use cd, for example: ```cd test```

To change the present working directory into the folder ABOVE your current present working directory use this idiom: ```cd ..```

(The two dots .. are an abbreviation for "the folder above the present one")

A common text editor that we can use to create simple text files is called nano. If, when we launch nano, we provide a filename that file will be loaded and displayed/edited as text if it already exists, or created if it doesn't exist (when we save in nano). Here's creating a file in the present working directory called test.txt: ```nano test.txt```

In Nano, you can use the arrow keys to move around, the number and letter keys (etc) to enter text characters, etc. When you are done editing the file, you press Ctrl-X to exit. A message will "pop up" (sort of) saying "Save modified buffer". Press Y (for yes) and then enter to confirm the name of the file that should be created/saved/modified.

You can check that the file you created has what you put in it by reloading it with Nano. Another way is to use cat to "dump" the contents of the file to the screen. If your file was called test.txt then this would be the way of dumping it with cat: ```cat test.txt```

You can delete a file with rm (but be very careful!), for example to delete a file called test.txt in your present working directory you would enter the following: ```rm test.txt```

You can close a terminal with: ```exit```






