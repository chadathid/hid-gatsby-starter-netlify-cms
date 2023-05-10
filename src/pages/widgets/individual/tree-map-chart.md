---
templateKey: widget-post
title: Tree Map chart
description: >-
  Treemap chart is used for displaying hierarchical data. Information in a
  treemap is represented by a rectangular shape, where smaller rectangles
  represent the sub-groups. 

  The color and size of rectangles highlight the contribution of each item to the whole, within the hierarchy.
featuredimage: /img/treemap.png
---
# Guidelines

Tree maps are one of the most compact and space-efficient options for displaying hierarchies and are also great for comparing the proportions between categories via their size. When there is a correlation between color and size in the tree structure, the user is able to see patterns that would be difficult to spot in other charts.

* Use Tree map if you want to make efficient use of space and give users an overview of large hierarchical data.
* Tree map delivers information at a glance, helps with quick data analysis, as the size of the rectangles help identify patterns.
* It helps in making quantitative comparisons between multiple categories (Rectangle) and sub categories(Nested rectangles) at a high level.
* You want to enable part-to-whole comparisons.

**Do not use a tree map**

* If your data is similar in size and not hierarchical: In this case, use donut chart.
* You want to enable precise quantitative comparisons. In this case, use the bar chart instead.
* If dataset contains only a small number of categories. In this case, use bar chart.
* You would like to display negative values. They cannot be displayed in tree maps.

![](/img/treemap.png)

**Utility**

**Legend** - Display maximum of 3 legends and if it exceeds consider using a tree map with the header variation.

**Color** - HID Brand Colors

**Tree map Chart Label** - Varies based on use case

**Hover on Title bar**- Highlight the respective title bar and present a tooltip with a label and total value of the respective groups.

**Hover on rectangle** - Highlight the respective rectangle by lowering its opacity and present a tooltip with the complete label and associated value.

**Responsiveness** - The tree map chart is fully responsive. When the size of the screen gets smaller, the labels start to truncate and hide if there is not enough space.

# **Accessibility**

"Coming soon"