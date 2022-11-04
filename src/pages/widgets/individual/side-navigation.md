---
templateKey: widget-post
title: Side Navigation
description: "Side Drawer Navigation provides users access to destinations in an
  interface. Side sheets are interface surfaces containing additional content
  that are attached to the left edge of the screen. "
featuredimage: /img/side-nav-collapsed-and-expanded.png
---
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
**Collapsed** - Navigation style where only icons are visible making the greatest use of space for content

![](/img/side-nav-collapsed-and-expanded.png)

![](/img/o-icons.png)

![](/img/side-nav-with-links.png)

![](/img/side-nav-with-tooltip.png)

## **A﻿ccessibility**

For screen reading users, we need to provide a way to navigate over a persistant element like the side drawer nav which allows users to skip directly to content regions. For this scenario, we need to provide two links above the global header that provides navigation to landmarks within the app. These links are visually hidden by default but can become visible when focused.\
\
To better understand the latest nuances and complexity of aria practices for menu and menu bar (including keyboard support), please refer to the links below.\
menu nav should have an aria-label that matches the label on the menubar since it is a site navigation system Verify that the icons are compatible in high contrast mode\
\
When a menu opens, or when a menubar receives focus, keyboard focus is placed on the first item. All items are focusable as described in 5.6 Keyboard Navigation Inside Components.