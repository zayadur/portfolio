---
title: 'Neo Politico'
date: '2016'
stack: 'Bootstrap, jQuery, Gulp'
---

***

### The Youth Journal for Applied Politics

[project](https://zayadur.github.io/neopolitico) | [source](https://github.com/zayadur/neopolitico)

## What is Neo Politico?
Neo Politico is a space where any student, regardless of their prior experience, can voice their opinions on certain issues. Every opinion matters because everyone matters. We only hope that more students across the entire world can join us in increasing political engagement and producing a critical consciousness of the world.

We hope to achieve our goal by creating a monthly journal with a certain topic for each journal where pre-college students can voice their opinion through a well-thought out research paper. Furthermore, we hope to create a medium to help students express their agency and discuss with other students. We believe that students opinions can go a long way towards revealing their relation to the world.

***

## Website development
### Purpose
The primary purpose of the website is to display and distribute articles and journals published by the organization. Due to the simplistic nature of the purpose, a simple approach was taken in order to achieve this goal.

### Foundation
[Google Cloud Platform](https://cloud.google.com)'s [Cloud Storage](https://cloud.google.com/storage/) service was the ideal candidate for hosting the both the static files and the website.

The [Bootstrap](http://getbootstrap.com/) framework was used to allow for quick and easy development of the site, while implementing responsive design automatically.

Keeping in mind that there are multiple articles and journals to be displayed, a way to organize all the information was of great importance. The [DataTables](https://datatables.net/) jQuery plugin was the best solution to organize all the articles, while keeping logic off of the site.

### Design
Due to the minimal purpose of the website, it was decided to keep the design of the website minimal as well. Following the conventional block-method, the website would feature a navigation menu, a small body, and a footer, emulating a landing page. Hidden behind the landing page, there would be JavaScript modals displaying the collections of articles and journals, as well as smaller modals to display meta information. Essentially, the whole website rests on one HTML file: ``index.html``.

***

## Development roadmap

### General fixes

Improve ``error.html``

### Responsive design
Although Bootstrap took care of the basic responsive design elements, there are still responsive design techniques that can be used to lessen the impact the site has on users.

#### Minification

Currently, all image files are rasters with Bootstrap's ``img-responsive`` class. The next steps are to implement code to replace or resize image files based on resolution, and implement more vector graphics.