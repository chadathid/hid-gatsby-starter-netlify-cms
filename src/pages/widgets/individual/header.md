---
templateKey: widget-post
title: Header
description: >-
  The global header is the anchor of any HID service, or platform, and spans all
  other parts of the UI.


  The functionality in the header is applicable across all contexts in the HID ecosystem and consists mainly of a logo element, title of the service (which acts as a wayfaring cures for platforms with multiple services) and action bar (icons) which groups platform wide tasks that need to persist throughout the experience (i.e - account, app launcher and platform settings)
featuredimage: /img/header-widget.svg
---
## **General Guidance**

A header helps users identify where they are and provides a quick, organised way to reach the main sections of a website. It provides a common set of interaction patterns that persist between and across products.

* Use short, clear link labels.
* Present links in priority order.
* Dropdowns are supported as global navigation, if required. Include the down-pointing chevron after the link label in Header.
* Icons are not a required element of the header and a product may choose to use any set of icons for their UI. Icons should always be aligned to the right of the header with no gaps between icons.
* Search, if used in the global header, should always be positioned as the furthest left icon to allow for a expanding search field.

![](/img/header.png)

## **V﻿ariants**

![](/img/header-base-nav.png)



![](/img/header-sub-nav.png)

![](/img/header-global-search-1.png)



![](/img/header-states.png)



## **A﻿ccessibility**

For screen reading users, we need to provide a way to navigate over a persistant element like the global header which allows users to skip directly to content regions. For this scenario, we need to provide two links above the global header that provides navigation to landmarks within the app. These links are visually hidden by default but can become visible when focused.

\
Menu nav should have an aria-label that matches the label on the menubar since it is a site navigation system Verify that the icons are compatible in high contrast mode\
\
When a menu opens, or when a menubar receives focus, keyboard focus is placed on the first item. All items are focusable as described in 5.6 Keyboard Navigation Inside Components.