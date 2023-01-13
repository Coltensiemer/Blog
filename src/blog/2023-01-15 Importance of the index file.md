---
title: Importance of index
author: Colten Siemer
date: 2023-01-15
tags: [post, other] 
image: 
imageAlt: Index file 
description: What is an index file? 

---

When I started building my own website... this website. It was my first website. The learning curve was a little steep, but I figure hard coding my own portfilio and blog would give be great for my learning. 


Once I built my website and had a few pages, I pushed it to github, published on Netlify, and then ERROR. 'Page not found'. 

What happen?! 


So I investgated and learned some. I found that my index file was not in my root - instead, I have apart of some other folders. 


Here is what I learned about the importance of the Index file. 


1. Index is the default page that your browser searchs for. 
3. Your index file needs to be located in the root. 
4. Index file allows more security over your website. 



(1). 
When you put your website live (or on a local host), your browser searches for a file called 'index'. 


(2). 

The index file can not be placed in a folder. Folders may be used to organize different pages, but if the index file is inside a folder, the browser can not locate the folder. 







(3). 
Index file allows more security over your website. 

We learned that the index needs to be located at the root so your browser can find it. However, if the browser can not find an 'index' file, it could display a directory structure of your website once your website is live. 

So by having a 'index' file closes the chance of a live browser showing the website's directory. Ergo: sercuity! 



