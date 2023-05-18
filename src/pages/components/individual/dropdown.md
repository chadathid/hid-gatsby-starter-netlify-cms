---
templateKey: component-post
title: Dropdown
description: >-
  
  The Dropdown allows the selection of single or multiple items from a list, which allows the users to choose an option and execute the relevant action.
featuredimage: /img/dropdown-white-background.png
---
# **Guidelines**

* Include a label associated with the content of the dropdown to guide the user in choosing the appropriate value from the list.
* The values within a dropdown list should be sorted in a logical order that is easily scannable.
* Use a dropdown menu when you need to give users 3 or more options to choose from.

  **Do not use**

  When there are fewer than 3 options to display, use radio buttons or checkboxes instead.

# **Behavior**

![](/static/img/dropdown.png)

# **Accessibility**

* A dropdown with a simple list is a menu with a set of options.
* A dropdown with a multi-select list includes tags to indicate that the user can select any number of options.
* Displaying a list of actions, options, or links. Usually displays 3 or more options.
* Taking immediate action or navigating users to another view.
* The accessibility label should align with each list item’s text label. 
* If a tag can be deleted, it’s recommended to display the X delete icon.
* Each tag is a focusable element. If a tag has a delete icon and no other action the entire tag and X icon are one focusable element. If a tag has another action, like select, then the tag content and X icon are two separate focusable elements.



