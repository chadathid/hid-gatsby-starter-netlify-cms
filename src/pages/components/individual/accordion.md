---
templateKey: component-post
title: Accordion
description: The accordion component delivers large amounts of content in a
  small space through progressive disclosure. That is, the user gets key details
  about the underlying content and can choose to expand that content within the
  constraints of the accordion. Accordions work especially well on mobile
  interfaces or whenever vertical space is at a premium.
featuredimage: /img/hid-accordion.svg
---
# **G﻿uidelines**

An accordion is used to show and hide content. Make the entire title label area clickable to trigger expansion. It is ideal to use when you want to display more than 5-10 modules of content.

**When to use**

* Use an accordion to see an overview of multiple, related sections of content.
* Use an accordion to show and hide sections as needed.

**D﻿o not use**

* Don't use an accordion if users need to see most or all of the information on a page.
* Don't use an accordion if there is no enough content to display.

![](/img/accordian.png)

![](/img/states-accordian.png)

# **A﻿ccessibility**

An accordion displays vertically stacked sections of content, each of which can either be visible or hidden. They can help limit the amount of scrolling on a page.

# **Behavior**

There are two main parts of an accordion section:

- **The header** : which is used to control the display of the sections body
- **The body** : a container that holds any content associated to the section, which is either visible or hidden. 

Keyboard Interaction

- Each section header is focusable.﻿
- **Enter** and **Space**: when focused on a section header, should toggle the visibility of its body
- Recommended:
    - **Up** and **Down** arrows: when focused on a section header should navigate to the next/previous header.
    - This **should not** change the state of the section (if the section is hidden, it stays hidden).

##### Markup

The header should contain a `<button />` element that:
The header should contain a <button> <a href="https://www.w3schools.com">element that:</a> </button>

- Has the header text within it
- Has aria-controls with the value set to the id of the body container that it controls and is associated with
- When the content is hidden aria-expanded should be set to "false".
- When the content is visible aria-expanded should be set to "true".
- If the section cannot be closed set aria-disabled="true" along with aria-expanded="true"

