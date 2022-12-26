---
templateKey: fundamentals-page
title: Fundamentals
path: /fundamentals
---










# **C﻿olors**

The HID Design System uses a set of colors from the color system to achieve consistency and convey hierarchy in often UI applications. The color system serves as a foundation to achieve balance and harmony throughout our applications.



**B﻿rand Colors**

These are usually the colors that a brand sets as their identity. These colors are primarily used in headers, links, buttons and other elements. These baseline UI color are used for the most primary interactions, this palette also includes colors for hover, focus, select, and active states.

![](/img/brand.png)

**G﻿reyscale**

These include shades of grey, all the way from White to Black. These are used for backgrounds, text colors, elevation and depth, and form the majority of your UI.

![](/img/greyscale.png)

**S﻿tatus** 

These are the status colors, which will help users with wayfinding, identifying status, understanding actions, and locating help. These are the colors that communicate purpose. They help users convey messages. For example, Green has a positive connotation. We use Green to convey success, confirmation messages, etc.\
Always use text and/or icons to help clarify the context for color blind users and for those who rely on assistive technology.

![](/img/status.png)

**S﻿tatus** 

These are the status colors, which will help users with wayfinding, identifying status, understanding actions, and locating help. These are the colors that communicate purpose. They help users convey messages. For example, Green has a positive connotation. We use Green to convey success, confirmation messages, etc.\
Always use text and/or icons to help clarify the context for color blind users and for those who rely on assistive technology.

**These are some typical situations in which each color could be used:**\
**Red** - Error status is used to alert a failed process or emergency alerts\
**Orange** - Warning status is used to notify the user of an expiring license or process\
**Green** - Success status is used to communicate that an update has been successfully completed\
**Blue** - Info status is used to communicate a process in progress or current status or update\
**Grey** - None status is used to notify users regarding a basic, general status where no further action required.



# **Typography**

\
Typography is extremely important to help create clear informational hierarchies, organise content, and guide users through a product or experience.\
Typography helps to create clear visual hierarchy in designs. The typeface supported in HID Design System is Roboto.



![](/img/body.png)

![](/img/heading.png)

![](/img/supporting.png)



**T﻿ypography Case - When to use**

**Sentence case** - Input field label, drop down text, placeholder texts, links, checkbox, radio buttons, content switcher, notifications, tags, tooltip, toggle label and all sentences

**Title case** -Page titles, modal title, card titles, tabs, accordions, tagline and  side navigation. (Exemption for prepositions)

**UPPER CASE** - All Buttons 

**lower case, pascal case, toGGLe caSe** -   Text editor - User specific



# **Iconography**

Icons are visual symbols used to represent ideas, objects or actions. They communicate messages at a glance, afford interactivity, and draw attention to important information.



![](/img/frame-16.png)



**Usage and Guidlines**

\
**Simple and Communicative**\
Design icons to be simple, symbolic and representative, an icon should be something a user can easily interact with. It should be intuitive. It should concisely capture the idea it represents. \
Design Icons such a way that it communicates their “use” to the user without any assistance such as text or label. The goal should be that users must understand an icon instantly when they lay their eyes on it, without much cognitive load.

**Consistency**\
Use the right amount of detail for your icons and adding lot of elements can make an icon appear heavy and noisy.\
Build consistency across the Icon family by staying consistent with the parameters such as style, fill, stroke thickness, size, shape, border radius and perspective to maintain the same stylistic rules throughout the icon set.

* Use icons to efficiently communicate important actions to users
* Use icons to indicate navigation actions to other screens
* Make use of icons in order to make effective use of screen real estate
* Create 4 sizes for each custom icon such as (18x18, 24x24, 48x48, 64x64)

**S﻿ize**

![](/img/size.png)

\
**When to Use**\
**18x18px** - List and Small Indicators\
**24x24px** - Basic Utility Icons\
**48x48px** - Tiles\
**64x64px** - Content Heading, Fab button

18px and 24px icons are optimised to feel balanced when paired with 14pt and 16pt font size.\
Use 48px and 64px for headlines and/or specially handled cases called out in the HID Design System.



**Grid**\
The icon grid provides a structured base for the icon and act as a canvas to draw from. Working with grids makes it easier to align objects to the pixel grid and stay consistent in placement and spacing, this makes icon look more balanced and visually more appealing.

**24 pixel grid**\
The 24px icon size is the default, and most icons are created at this size. Icons that use a 24×24 pixel base grid have a 20px live area surrounded on all sides by 2px for padding and optical sizing.

![](/img/frame-17.png)

**Padding**\
Icon should remain inside the padding.\
Recommended padding to use for each of the icon sizes.

![](/img/frame-18.png)

**Color**\
Icons are always a solid, monochromatic color and need to pass the same color contrast ratio as typography (4.5:1). The color of the icon should reflect the importance of the icon’s action which should always be to help guide a user.\
\
It’s also important to note that icons themselves do not have interaction states, only their backgrounds do.

![](/img/frame-19.png)



**Alignment**\
When used next to text, icons should always be centre aligned.

![](/img/frame-20.png)



**N﻿ote to Designers**

**Adding Icons from the Icon Library**

* Select the SVG icons you need from the Icon Set Page. Add the icons by downloading or dragging and dropping them into your figma file.
* Since its an SVG file this allows you to edit the icon's vector color and size according to your use case.



**Creating a new Icon**

* Start the icon design process with research. Consider the common symbolic metaphor used to describe the icon you're looking to make.
* Ideally start designing with 24px icon size, since it is the most utilised size and you may scale it to different sizes if needed.
* Ensure internal padding of 2px on all sides.
* Create an icon by using basic geometric shapes (such as circles, squares, and rectangles) by overlapping the shapes and using Pathfinder operations to add, subtract, merge, and so on.
* Use the same line weights.
* Use rounded end caps.
* Expand All Strokes to Paths. These icons are created from one single path. If your icon is comprised of multiple paths, you’ll need to join them into one compound path.
* Match the same style of elements used in other family icons.
* Centred or rotated elements should use a 45-degree angle.
* Keep a limited perspective — all icons should appear from the same perspective.
* Keep the icons monochromatic.



**Exporting Icons**

* Once you are finished with the icon design, export it as a SVG, add it to the Icon Library file and turn them into a main component .