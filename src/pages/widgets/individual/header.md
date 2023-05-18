---
templateKey: widget-post
title: Header
description: >-
  The global header is the anchor of any HID service, or platform, and spans all
  other parts of the UI.


  The functionality in the header is applicable across all contexts in the HID ecosystem and consists mainly of a logo element, the title of the service (which acts as a wayfaring cure for platforms with multiple services) and an action bar (icons) which groups platform-wide task that need to persist throughout the experience (i.e. - account, app launcher and platform settings)
featuredimage: /img/header-widget.svg
---
# **Guidelines**

A header helps users identify where they are and provides a quick, organized way to reach the main sections of a website. It provides a common set of interaction patterns that persist between and across products.

* Use short, clear link labels.
* Present links in priority order.
* Dropdowns are supported as global navigation if required. Include the down-pointing chevron after the link label in Header.
* Icons are not a required element of the header and a product may choose to use any set of icons for their UI. Icons should always be aligned to the right of the header with no gaps between icons.
* Search, if used in the global header, should always be positioned as the furthest left icon to allow for an expanding search field.

![](/img/header.png)

# **V﻿ariants**

![](/img/header-base-nav.png)

![](/img/header-sub-nav.png)

![](/img/header-global-search-1.png)

![](/img/header-states.png)

# **Accessibility**

* Header is used to inform a user about the overall content of a page.
* Navigation can be presented as a horizontal tab navigation or as a hamburger menu. Three levels of navigation are supported.
* Secondary and tertiary navigation items are displayed in menus when hovering on the parent item on large screens.
* Header navigation items have six possible interaction states — enabled, selected, hover, active, focus and disabled.
* Search can be included in the header. It can be collapsed or open.
* For Search, both the open and collapsed state can be expanded to take up a larger percentage area of the header container when active.