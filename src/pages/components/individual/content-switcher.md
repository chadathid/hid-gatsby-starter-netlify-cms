---
templateKey: component-post
title: Content switcher
description: "Content switcher is a linear set of two or more sections which
  allows users to choose one out of a range of available options and\ 

  generaly contains two or more options to select from.

  \ "
featuredimage: /img/content-switcher-iterated.png
---
# **G﻿uidelines**

Content switchers are frequently used to let users switch between a content group. They are used to narrow content groups, for example, switching between a day, week or month view in a calendar UI.\
\
A Content Switcher should only be used for up to 5 options. It is ideal when there are 2 or 3 because they visually expose the options available to a user.\
\
Only one content tab can be selected at a time and the first content tab in the switcher should be determined based on usage and should always be the default selection.\
\
Text labels should be clear and concise and avoid the usage of mixing text and images in a single content tab to avoid confusing the users. This is particularly helpful for users of assistive technologies so they have the necessary information to efficiently navigate the content.\
\
Try to keep segment content size consistent.

**W﻿hen to use**

Use the Content switcher to toggle between or Narrow down a content group. For example, switching between dark or Light Themes in a Page.\
\
**Do not use**

Do not use Content switcher to navigate between related sections of content, use Tabs instead. Tabs divide and categorize large amounts of content on a page, displaying one section at a time.

![](/img/content-switcher.png)

# **Behavior**

**Enabled** - This is how the enabled state of the content switcher usually appears and the first content tab should always be the default selection.

**Selected** - The selected state uses a high-contrast color when a user clicks a particular content tab.

**Hover** - The hover state is when a user uses the mouse over the link and it changes state to let the user know that the link is clickable.\
\
**Focus** - The focus state is when the user uses the tab key to navigate the content switcher.

# **A﻿ccessibility**

* The automatic and manual switchers are visually indistinguishable in a wireframe, so designers should annotate which variant the team has decided to implement. Since the choice largely concerns technical considerations about potential latency when updating the content section’s information, architects or developers should be involved in the discussion.
* Annotate whether the switcher should be implemented as automatic or manual.