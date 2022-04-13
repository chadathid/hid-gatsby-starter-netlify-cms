---
templateKey: component-post
title: Accordion
description: Accordions are composed of a list of longer blocks of text, with a
    summary button to toggle the visibility of each block.
featuredimage: /img/hid-accordion.svg
---

## Accessibility

Availability of accordion content to assistive technology requires the use of `aria-controls`and toggling `aria-expanded`as regions are expanded and collapsed.

Content visibility is toggled via the `.hid-accordion__button`in the H3 summary heading.

To make accordion content visible, the button is changed from `"aria-expanded="false"`to `"aria-expanded="true"`, and the content div within the accordion is changed from `"aria-hidden="true"`is changed to `"aria-hidden="false"`.

Focus state is available on keyboard tabbing to let users know there is content available that can be accessed by hitting the enter key.

https://codepen.io/etAmpersand/pen/xvjwNP/00f5c2740d473bb91089d7e5e7ace099
