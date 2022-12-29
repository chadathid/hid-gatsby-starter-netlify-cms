---
templateKey: ui-shell-page
path: /ui-shell
title: UI Shell Page
---
# **Grid**

A grid system is a series of evenly spaced containers, rows and columns that help organize and structure designs in a way that is optimized for the visual flow of information.
Grid gives meaning to design and helps us achieve uniformity, readability and visual consistency.

## **G﻿uidelines**

Grid is made of Three important elements - Columns, Gutter and Margin

**Columns** - are placed following the vertical blocks that fit fully from the top to the bottom margin.\
The grid system follows 12 column across the page for web and 4 column across Mobile and Tablet.\
\
**Gutters** - are the spaces between the columns. Gutters help to separate the content. The Gutter width for Web is 24 px, 18 px for Mobile and 40 px for Tablet.

\
**Margins** -Margins are the space between content and the edges of the screen.The Margin width for Web is 24 px, 24 px for Mobile and 69 px for Tablet. The margins change as per different screen sizes.

Following this methodology will keep layouts uniform and prevent unreliable responsive behaviour.

![](/img/grid-full-layout.png)

## **Variants**

A grid can function in three different ways across different Screen sizes.

* Full Width Layout
* Layout with Expanded Nav
* Layout with Compact Nav

![](/img/grid-compact-nav.png)

![](/img/grid-expanded-nav.png)

![](/img/grid-mobile-and-tablet.png)

# **Header**

The global header is the anchor of any HID service, or platform, and spans all other parts of the UI.The functionality in the header is applicable across all contexts in the HID ecosystem and consists mainly of a logo element, title of the service (which acts as a wayfaring cures for platforms with multiple services) and action bar (icons) which groups platform wide tasks that need to persist throughout the experience (i.e - account, app launcher and platform settings)

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

![](/img/header-sub-nav.png)

![](/img/header-states.png)

# **Side Navigation**

Side Drawer Navigation provides users access to destinations in an interface. Side sheets are interface surfaces containing additional content that are attached to the left edge of the screen. 

## **G﻿uidelines**

Side drawer navigations provide users quick access to important sections of the interface . They can either be permanently on-screen or controlled by a navigation menu icon. The shell of this system is made up of the header and a left panel.

Navigation drawers are recommended for:

* Interface with five or more top-level destinations
* Interface with two or more levels of navigation hierarchy
* Quick navigation between unrelated destinations
* The left panel does not support three tiers of navigation. If you have additional content to display beneath a sub-menu, use tabs within the page.

The left side drawer navigation contains secondary navigation and is positioned below the header and fixed to the left. Both links and sub-menus can be used in the side-nav and may be mixed together.

## **V﻿ariants**

\
**Expanded** - Navigation style with icons and their corresponding text giving greater clarity to the purpose of the menu items.\
**Collapsed** - Navigation style where only icons are visible making the greatest use of space for content.

![](/img/side-nav-collapsed-and-expanded.png)

![](/img/o-icons.png)

![](/img/side-nav-with-links.png)

![](/img/side-nav-with-tooltip.png)

# **Footer**

A footer serves site visitors who arrive at the bottom of a page without finding what they want.
Sometimes used for additional navigation items which are significantly less important global items but yet need to be there (i.e. terms of service or privacy policies).

## **General Guidance**

Footer guidance will change dependant on the product being developed For example a external website user will have different needs from a footer than an internal web application. Generally, the footer is NOT a catch all for anything you do not know where else to put. Since users rarely make it to the end of pages, it should be minimised to only the things users expect to find as in the items below.

* Copyright (Be sure this is updated programatically to display the correct date at all times)
* Link to Terms of Service
* Link to Privacy Policy
* Software version

Less frequently used because it depends on platform and audience

* Contact
* Sitemap
* Navigation
* Mission Vision

![](/img/footer-base.png)

## **Variants**

![](/img/footer-variant.png)