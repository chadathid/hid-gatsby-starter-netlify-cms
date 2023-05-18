---
templateKey: widget-post
title: Modal
description: >-
  
  A modal disables page content and focuses the user’s attention on a single task or message. Modals are effective in breaking user flow by design. They are most effective when a task must be completed before a user can continue. 
featuredimage: /img/modal-widget.svg
---
# **Guidelines**

**When to use**

* Use when you want to interrupt a user’s current task to catch the user’s full attention to something more important.
* Use it when you want to get information from the user. Ex. sign up or login form.
* Use it when you want to show additional information without losing the context of the parent page. Ex. showing larger images or videos.
* Use it when you want to show information that is not directly related to the parent page or other options that are “independent” from other pages. Ex. notifications.
* When the modal is open, use a lightbox effect (darken the background). This draws attention to the modal and indicates that the user cannot interact with the parent page.

  A modal window should not be too big or too small. We follow 3 sizes for desktop usage based on the purpose and content.

  **Small** - 300 wide

  **Medium** - 500 wide

  **Large** - 800 wide

  **Size** — Don’t use more than 50% of the screen for the overlay. The goal of a modal is to keep context, therefore it should not take up the whole screen view. Content should fit the modal. If a scrollbar is needed, you should consider a new page instead.

  **Location** — Upper half of the screen, preferably center aligned because in mobile view modal may be lost if placed lower.

  **Appearance** — A modal will have a clear title, precise content and definite action to move on with the main flow. When opening an overlay, it’s important that the page behind is slightly darkened.  

![](/img/modal.png)

# **Accessibility**

* Interrupting users to get confirmation on a user-triggered action.
* Requesting minimal amounts of information from a user (1-2 fields only).
* Capturing user's full attention for something important.
* Use Modal when a response is required from the user.
* Clearly communicate what response is expected and make the action simple and straight forward, such as clicking a button to confirm. The most common responses will be related to confirming or canceling.
* Limit the number of actions in a Modal. A primary and secondary action should be used for Modals.