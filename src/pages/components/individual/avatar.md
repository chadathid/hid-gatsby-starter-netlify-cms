---
templateKey: component-post
title: Avatar
description: The avatar is a control that has various display options for
  representing images, icons, and initials.
featuredimage: /img/hid-avatar.svg
---
# **Guidelines**

Avatars are always paired with additional information, such as a user's name, for better clarity. It's important to use descriptive alternative text . Doing this is important for accessibility.

The default icon size is 24px. The icon is mostly used to accompany some sort of title text or label. They are generally used in the main navigation and the Global Header Navigation.

**Best Practices**

* Use XS and small size avatar in navigation and data table, lists.
* Small and medium size avatars are used in card header's main page titles, like a user's account settings.
* The large and extra-large size avatar is recommended for use in account detail view pages with the edit function.

![](/img/avatar.png)

![](/img/avatar-photo-upload.png)

# **A﻿ccessibility**

* Use the **name** prop to ensure there is an alternative text equivalent for screen readers.
* To avoid confusion, do not use a **tooltip with an avatar** when it is non-interactive or disabled, as the tooltip may not work consistently for keyboard users and screen readers.