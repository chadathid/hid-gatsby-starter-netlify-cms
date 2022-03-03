---
templateKey: component-post
title: Checkbox
description: The ability to style checkboxes with CSS varies across browsers. To
    ensure that checkboxes look the same everywhere, we use a custom DOM.
featuredimage: /img/hid-checkbox.svg
---

## General Guidance

Checkboxes are a fundamental input component typically represented by an empty box in the unselected state and a box with a checkmark (hence the checkbox name) when selected. They are used to represent a boolean choice, each correlating to a value choice.

Checkboxes are good to use when you need to collect either a true/false (boolean) choice or multiple values from a list of options.

**Checkbox states** The checkbox control allows for three states: selected, unselected, and indeterminate. The indeterminate state comes into play when the checkbox contains a sublist of selections, some of which are selected, and some unselected.

**Click target** Users should be able to select the checkbox by clicking on the box directly or by clicking on its label.

**Default selection** The default view of a set of checkboxes is having no option selected.
