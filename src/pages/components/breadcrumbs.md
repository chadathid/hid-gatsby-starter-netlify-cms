---
templateKey: component-post
title: Breadcrumbs
description: The breadcrumb component is a well-known secondary navigation
    pattern that shows hierarchy among content or traces a user’s path.
    Breadcrumbs enable users to move quickly up to a parent level or previous
    step. All links in a breadcrumb should be clickable.
featuredimage: /img/hid-breadcrumb.svg
---

## About Breadcrumbs

Breadcrumbs are typically constructed with an ol because their order matters. You mark up breadcrumbs with classes from the horizontal list utility. When you add the `.hid-breadcrumb`class, the separators are automatically generated.

https://codepen.io/etAmpersand/pen/jOOLYEZ/d1284ecff2c79cc9de9059156a7ea1fb

## Accessibility

Place the breadcrumb in a nav element with `role="navigation"`. The nav element is also marked-up with `aria-label="Breadcrumbs"`to describe the type of navigation.
