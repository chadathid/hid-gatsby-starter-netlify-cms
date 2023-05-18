---
templateKey: component-post
title: Tabs
description: >-
  Tabs are used as a way to navigate between the different sections of content
  displayed within a page or view.

  The content of the tab should be related to each other and only one section should be active at a time. 
featuredimage: /img/tabs.png
---
# **Guidelines**

* The first tab is the default or selected tab. They should be listed in a logical order of hierarchy or sequence based on user needs. Only one tab should be active at a time.
* Keep the labels short and scannable. It should indicate what is in the related tab section.
* Use tabs when there are 2 – 6 tab items and not more than that.

**Do not use**

* Avoid tabs when the user wants to compare and see multiple contents at the same time. Use the accordion instead.
* Do not use the tab component as a form of primary page navigation.
* Do not use tabs to break user interaction into a series of steps. Instead, use stepper.
* Don’t use tabs to group content that is dissimilar.
* Do not nest tab group within another tab group.

![](/img/tabs-default.png)

# **Accessibility**

* When a user taps on an icon button, a touch ripple appears, indicating interaction feedback
* The selected indicator becomes active and shifts into position once the touch has been engaged
* When hovered, the hover state appears, providing a visual cue that the icon button is interactive. 
* When clicked (in both active and inactive states), a ripple appears and the indicator shifts into position, showing the user feedback.
* When a set of tabs cannot fit on screen, scrollable tabs are used. They are best used for browsing on touch interfaces.
* To navigate between scrollable tabs, users swipe the set left or right. Users can also use arrow/tab to navigate through.