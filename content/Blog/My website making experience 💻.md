---
title: My website making experience 💻
draft: 
tags:
  - Coding
  - Blog
created: 2025-04-01T02:17
modified: 2025-04-08T17:09
---
My setup for generating this website is a combination of 

- Writing custom HTML scripts for my main page at [treycole.me](treycole.me)
- Using the `Quartz 4` package for generating [notes.treycole.me](notes.treycole.me)
- Using Obsidian to edit my markdown files that generate the notes on [notes.treycole.me](notes.treycole.me) 
- Using Netlify as a DNS host
- Using GitHub to store the code for my website, with my Obsidian vault as a folder in the repository.

Netlify will generate and manage a subdomain for your primary domain. This page [notes.treycole.me](notes.treycole.me) is a subdomain of the primary domain [treycole.me](treycole.me). When clicking the "Notes" link in the navigation bar, it directs you to this subdomain.
### Using Quartz

`Quartz` is a very nice package that makes it convenient to generate HTML webpages from your Obsidian notes. My main goal in using Quartz was to incorporate the 'graph view' in my webpage to visualize the relationship between the notes in my vault. 

However, editing the resulting webpage to look how you want can be a bit of a pain. `Quartz` is highly modular. It has bash scripts that take your markdown files and generates the HTML that is served as the webpage. The rest of the package has separate files for defining custom `css` themes and different files for each `JavaScript` object that renders the different parts of the webpage. These are all scattered in directories and subdirectories throughout the package. 
The `Quartz` documentation does help quite a bit in this process, but still is somewhat limited.

For example, to implement the navigation bar at the top of the webpage, I had to create a custom 'component' with `LinksHeader.tsx`. This object simply mimics the other components already defined, and at its core is just the HTML code to make a navigation bar with the "links-header" class and have the appropriate links attached. Now how to get it rendered in the webpage? To do this I added

```tsx
<div class="center">
	<div class="links-header">
		<Nav {...componentData}>
			{nav.map((NavComponent) => (
			<NavComponent {...componentData} />
			))}
		</Nav>
	</div>
```


to the `doc` object in `quartz/components/renderPage.tsx`. It was not at first obvious where to put my `LinksHeader` object to render in the page. Through trial and error I eventually figured it out by looking at how the `Header` object was implemented. In `quarts/cfg.ts` you must add an additional `QuartzComponent` to what appears to be the page layout. For this I added a `nav` container where the `LinksHeader` navigation bar would be:

```ts
export interface FullPageLayout {

head: QuartzComponent
/** Added nav here */
nav: QuartzComponent[]
header: QuartzComponent[]
beforeBody: QuartzComponent[]
pageBody: QuartzComponent
afterBody: QuartzComponent[]
left: QuartzComponent[]
right: QuartzComponent[]
footer: QuartzComponent
}

export type PageLayout = Pick<FullPageLayout, "beforeBody" | "left" | "right">
/** Added nav here */
export type SharedLayout = Pick<FullPageLayout, "head" | "nav" | "header" | "footer" | "afterBody">
```

What if I want to change the color scheme of the webpage? For this we need to make add the `css` to the `quarts/styles/custom.scss`. To make the colors match my homepage, I added

```scss
nav.links-header {
background-color: var(--light);
padding: 10px 30px;
display: flex;
align-items: center;
justify-content: space-between;
border-bottom: 1px solid var(--lightgray);
transition: background-color 0.4s, color 0.4s, border-color 0.4s;
font-size: 1.2rem;
font-weight: 500;
}

nav.links-header > div {
display: flex;
gap: 30px;
}

nav.links-header a {
color:var(--dark);
font-weight: 500;
font-size: 1.2rem;
line-height: 1;
display: inline-block;
padding: 10px 0;
}

nav.links-header a:hover {
color: #007bff;
}

nav.links-header ul {
list-style: none;
display: flex;
gap: 40px;
font-size: 1rem;
margin: 0 auto;
}

nav.links-header ul li {
display: inline;
}

hr.links-hr {
background-color: var(--lightgray);
border-top: 1px solid var(--lightgray);
margin-top: 1.9rem;
}
```

The variables `lightgray`, `gray`, `dark`, and are colors defined in `quartz.config.ts`. I edited these to the colors I like.

I will learn more as I go, but for now it is functional and looks approximately how I would like. 