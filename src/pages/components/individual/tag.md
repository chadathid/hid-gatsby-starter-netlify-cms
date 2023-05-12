---
templateKey: component-post
title: Tag
description: Tags are used for web content that needs to be labeled,
  categorized, or organized using keywords that describe them. Tags are often
  used as a filter where all tags are in the same color, or used when content is
  mapped to multiple categories, where color is used to differentiate between
  categories
featuredimage: /img/tags.png
---
# **Guidelines**

* Multiple or single tags can be used to categorize items.
* Use short labels for easy scanning. Use two words only if necessary to describe the status and differentiate it from other tags.
* Use tags when content is mapped to multiple categories, and the user needs a way to differentiate between them.
* Tags can also be used as a method of filtering data, to show only items within that particular category.

**Type Style**

Tag text should be set in sentence case, and should only have one word. However, if more than one is necessary, then connect the words using a hyphen with no spaces.

**Structure**

All tags have the same height. However, the width of tags varies based on the amount of content. All four corners of a tag are rounded with a 24px radius.

# **Behavior**

![](/img/tags.png)

# **Accessibility**

* Use a tag to perform an action
* A chip that performs an action should present the same semantics as a button to a platform's accessibility API.
* The accessibility label for a chip ideally comes from the visible label text on the chip.
* While multiple chips can be selected, only one can be in focus
* If a chip can be deleted, it’s recommended to display the X delete icon.
* Each chip is a focusable element. If a chip has a delete icon and no other action the entire chip and X icon are one focusable element. If a chip has another action, like select, then the chip content and X icon are two separate focusable elements.