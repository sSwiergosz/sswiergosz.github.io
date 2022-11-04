---
layout: "../../layouts/BlogPost.astro"
title: "Astro, Islands & My blog"
description: "Some time ago I came across a very interesting article in a newsletter. At first glance it was nothing new - another frontend framework but the more..."
pubDate: "Jul 22 2022"
heroImage: "/placeholder-hero.jpg"
---

<!-- 1. Intro - how I found out about Astro -->
Some time ago I came across a very interesting article in a newsletter. At first glance it was nothing new - another frontend framework but the more I read, the more I became curious. An author was describing that this new tool doesn't have a stable version, but is already used by Google, Ikea or The Guardian. Going further I found out that aformentioned framework works based on a design pattern called **Island architecture**. That was something new for me - I've never heard of something similar. I finished my reading and decided that I will give this tool a try - this tool is [Astro](https://astro.build/). Let me tell you more about it - how does it work, why do I think it's super cool and why you should give it a try!

Astro is a meta-framework & static site builder which was developed to create fast and content-focused websites. It uses **Astro Islands** which are special implementation of [Island architecture](https://www.patterns.dev/posts/islands-architecture/). The main idea behind Astro Islands is to render individual, non-blocking, interactive components among static HTML elements. By default Astro generates website with **no** client-side JavaScript. It also renders islands in parallel and hydrate them in isolation. By doing that the "more important" components don't have to wait for the other ones to render. By default Astro progressively loads only components that are necessery in a given moment e.g. user scrolled to the element that wasn't visible during an initial render. What's more you can directly describe how Astro should render these components - if it should be only on client/server side, what should be priority during loading or if it should load when certain CSS criterias are met. That's really convinient given current state of the web and a huge amount of JavaScript that we ship to the browser. Having a choice in that matter is always a nice feature.

2. What is an Island Architecture
- pros & cons
3. What is Astro framework?
- how does it work
- bundle size
- islands in Astro
- optimization
- integration with other frameworks like React, Vue, Angular
- styling
4. Summary
