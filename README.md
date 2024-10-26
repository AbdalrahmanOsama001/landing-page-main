# Landing Page Project - Documentation

## Project Overview

This project is a simple, yet stylish, single-page website designed to showcase the power of smooth scrolling, dynamic navigation, and sleek design principles. It's built with the core front-end technologies: HTML, CSS, and JavaScript. 

## Key Features

### 1. Dynamic Navigation Menu

- The navigation menu is not hardcoded! It's dynamically generated using JavaScript, pulling the section names directly from the HTML. This means adding or removing sections automatically updates the navigation.
- **How it works:**
    1. The JavaScript code selects all elements with the `section` tag.
    2. For each section, it extracts the text content from the `data-nav` attribute (which you'll find in the `index.html`).
    3. It then creates navigation links (`<a>` elements) within list items (`<li>` elements) and inserts them into the navigation menu (`<ul>` element with the id `navbar__list`).

### 2. Smooth Scrolling

- Clicking on a navigation link doesn't just jump to the section — it smoothly scrolls you there, creating a more pleasant user experience. 
- **How it works:**
    1. An event listener is attached to the document to detect clicks.
    2. When a click happens, the code checks if the clicked element is a navigation link (`<a>` element with the class `menu__link`).
    3. If it is, the default link behavior (jumping) is prevented.
    4. The code then uses `scrollIntoView()` with the `behavior: 'smooth'` option to initiate the smooth scroll to the target section.

### 3. Active Section Highlighting

- As you scroll, the navigation link corresponding to the currently visible section gets highlighted, providing clear visual feedback to the user.
- **How it works:**
    1. An event listener on the `scroll` event constantly monitors the scroll position.
    2. For each section, the code calculates its position relative to the top of the viewport using `getBoundingClientRect()`.
    3. If a section is more than 50% in view, it's considered the "active" section.
    4. The code then adds the class `active` to the corresponding navigation link and removes it from others.

### 4. Fixed/Sticky Navigation Bar

- The navigation bar stays fixed at the top of the page even as the user scrolls down, ensuring easy navigation throughout the website.
- **How it works:**
    - The `navbar__menu` element in the CSS is given the `position: fixed;` property. This takes it out of the normal document flow and fixes it to the viewport.

## Usage

You can check out this landing page in two ways:

1. **The Easy Way:**  I've put this project up on GitHub Pages so you can see it live! Just click [this link](https://abdalrahmanosama001.github.io/landing-page-project/). 
2. **The Code-Savvy Way:**
    1. **Clone the Repository:** 
        ```bash
        git clone https://github.com/abdalrahmanosama001/landing-page-project.git
        ```
    2. **Open index.html:**  Open the `index.html` file in your web browser. 
