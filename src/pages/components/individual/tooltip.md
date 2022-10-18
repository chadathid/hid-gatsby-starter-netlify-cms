---
templateKey: component-post
title: Tooltip
description: >-
  The tooltip is displayed when the user hovers the mouse cursor over the
  element. Tooltips can be attached to any active element (icons, text links,
  buttons, etc.) 

  on a page. They provide descriptions or explanations for their paired element. 
featuredimage: /img/tooltip.png
---
![](/img/tooltip.png)

## **Guidance**

* Use Tooltip to further clarify a label or element.
* To help explain why the system needs to collect their data.
* To help the user complete a task.
* To guide the user through a new flow or feature which they have not used before.

**Usage**

* Tooltips appear on hover, focus, or touch, and disappear after a short duration.
* Tooltips should include short and descriptive text.
* If the tooltip includes a title, set it in sentence case. Titles can wrap as needed.
* Tooltips should only appear when user hovers over the element and should not immediatly disappear unless the user hovers over another element.
* When the tooltip appears on the page, make sure the focus is on the tooltip, this helps users of assistive technology read the content.



## **Accessibility**



* Use as `title` attribute. Tooltips are progressive enhancements for the `title` attribute, and will display as the `title` attribute if the component doesn’t initialize.
* Keyboard accessibility. Tooltips make `title` attributes keyboard accessible.