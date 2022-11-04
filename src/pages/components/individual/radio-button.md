---
templateKey: component-post
title: Radio Button
description: "Radio buttons are shown in a group of two or more. The user can
  only select one radio button at a time. "
featuredimage: /img/hid-radio-button.svg
---
![](/img/radio-button.png)

## **G﻿uidelines**

Radio buttons are used for individual, not multiple selections from a list of choices. Only one radio button can be selected at a time. When a new item is selected, the previous choice is automatically deselected.

**When to use**\
​​Radio buttons should be used instead of checkboxes if only one item can be selected from a list.\
\
**Form**\
Can be used in forms on a full page, in modals, or on side panels.\
\
**Selection in List**\
Used to choose a single item within a data table or list.

## **Behaviour**

![](/img/radio-button-states.png)

## **Accessibility**

* All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases, this is done by using the <label> element (FormControlLabel).
* When a label can't be used, it's necessary to add an attribute directly to the input component. In this case, you can apply the additional attribute (e.g. aria-label, aria-labelledby, title) via the inputProps property.