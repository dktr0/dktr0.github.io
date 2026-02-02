---
layout: layout.njk
title: "MEDIAART 3D03: IP addresses, URLs, and host/domain names"
---

# [MEDIAART 3D03](../outline/index.html): IP addresses, URLs, and host/domain names

## IPv4 addresses

Once upon a time (and still), computers (etc, i.e. "devices") on computer networks all had a unique address that 
consisted of four 8-bit numbers (i.e. numbers between 0 and 255). In this system (part of IPv4 or "Internet Protocol version 4") only 32 bits are required to uniquely identify a destination/location on the network.

If you are connected to a wired or wireless network right now (as you probably are), you can probably find your IPv4 address on that network. For example in Windows, I can search for the Network Connections settings panel, then right click on my Wifi connection, select Status, then Details, and right there near the top there's an entry that says IPv4 address. Mine is currently 172.17.210.38 (this is temporary and random, tomorrow it will likely be something else).

Right below that there is another set of four 8-bit numbers and it is labelled "netmask". This is an indication of how much of the address is shared with other computers on this same local network, versus how much of the address is specific to just my device. A netmask of 255.255.255.0, for example, would mean that the first three numbers in my address are common to all computers on this network, while the last number is specific to just my device.

Don't worry if the concept of the netmask is a bit unclear though - the important point is really just that it is very common for devices on networks to be identified by an "IPv4 address" that consists of 4 8-bit numbers.

## URLs

We're probably already familar with the basic use of a "URL" - as an "address" that we stick into a web browser to identify some unique place on the web.

URL is short for "uniform resource locator" and it is a more specific example of a more general class of things known as URIs (uniform resource identifier). These notes focus on the more specific web URLs.

A web URL will start with a "protocol" that will be either "http:" or "https:". That will tell, for example, a web browser how it needs to go about sending the detailed request that follows, since http and https are gone about in very different ways.

Usually (there are some exceptions) the next part is the "host" which identifies the computer/web server from which a web file should be requested. This can be an IP address but it's much more common for it to be a "hostname" that gets decoded by the "domain name" system into the actual IP address (more about that below). The host normally starts with two slashes.
The next part, after a single slash / is the path, which is a series of names separated by slashes that is conceptually similar to a filepath in an operating system (such as those we're starting to get used to in our [devops practice about filepaths](../filepaths/index.html).

The next part (not always present) is the "query" - which starts with a ? and then consists of a series of pairs of keys and values, e.g. ```?mode=display&columns=40```. These might be "options" that change the nature of the response from the web server, or they might be options that are interpreted and used by the interactive JavaScript in a page.

The last part (also not always present) is the "fragment" which is a way of telling the browser to jump to a specific marked section of a web document. This fragment: ```#sectionA``` at the end of a web URL would tell the browser to jump to the section identified in the web document as sectionA (by giving some HTML element the id sectionA).

In practice some of the elements of a URL can be omitted. Browsers will assume http (or sometimes https) if the protocol is omitted. If there's no host (preceded by //) browsers will assume that whatever you are requesting comes from the same place as the thing you are currently looking at.

So a URL like this means get the file called "myOtherFile.html" from wherever the thing I am currently looking at is: ```myOtherFile.html```. 

And a URL like this means get the file called "yetAnotherFile.html" from a folder below wherever the thing I am currently looking at is: ```myFolder/myOtherFile.html```

Knowing about this becomes really useful as your projects start to get bigger and you want to use folders to organize them (e.g. different folders for different sections of a website, or sometimes people like to put images and such in a special folder separate from HTML-CSS-JavaScript).

## Host/Domain Names

The name www.mcmaster.ca is a "hostname" that uses text to identify a specific computer/device on the Internet.
These addresses are managed by a series of "authorities". When our computer attempts to figure out the real (i.e. numeric) address it starts by consulting an authority for the "top level domain" - the most general one, and it asks it where it should ask about the next part. So a top level authority is consulted for .ca about where to ask about .mcmaster. Then THAT authority is asked about the next part and so on and so on until we have a final, complete numeric address.

We can use the "dig" utility to kind of inspect this up a little closer. On Mac, this is already installed and usable through the Terminal. We'll need to install it once which on WSL/Debian/Ubuntu would look like this: ```sudo apt install dnsutils```

Then we can issue this at the terminal to get some information about a particular host: ```dig www.mcmaster.ca```
Note: If we enter the IP address of a webserver directly into a web browser we'll sometimes get a different website than we expect, because many large web servers serve different websites from exactly the same address - basically they give a different response depending on the "name" one uses to make a request of them.

As a final note, on many systems the name "localhost" is set up to be the name of "this computer itself" so a URL like this "http://localhost/myFile.html" is a request for the file myFile.html being served by a web server running on this computer itself and not somewhere else on the Internet. On many systems the IP address 127.0.0.1 is also a way of pointing to this computer itself (but note that all of this depends on how the machine is configured: some won't respond to 127.0.0.1 and some won't respond to localhost...).

