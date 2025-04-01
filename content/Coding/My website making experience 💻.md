---
title: My website making experience 💻
draft: 
tags:
  - Coding
  - Blog
---
My setup for generating this website is a combination of 

- Writing custom HTML scripts for my main page at [treycole.me](treycole.me)
- Using the `Quartz 4` package for generating [notes.treycole.me](notes.treycole.me)
- Using Obsidian to edit my markdown files that generate the notes on [notes.treycole.me](notes.treycole.me) 
- Using Netlify as a DNS host
- Using GitHub to store the code for my website, with my Obsidian vault as a folder in this repo

Netlify will generate and manage a subdomain for your primary domain. This page [notes.treycole.me](notes.treycole.me) is a subdomain of the primary domain [treycole.me](treycole.me). When clicking the "Notes" link in the navigation bar, it directs you to the subdomain.
### Challenges

One point of frustration is that this page does not exactly mimic the custom HTML I've written on my primary domain. `Quartz` has bash scripts that take the markdown files and generates the HTML script that is served. However, their code is highly modulated, and defines custom CSS themes and JavaScript objects that use properties imported from numerous files hidden throughout their directory. This makes editing the resulting HTML somewhat difficult, especially it being a side project that I don't have an abundance of time to dedicate towards. I've managed to match the color scheme of my homepage, and hardcode in the navigation bar so that one can get back to the primary directory and my other links.
