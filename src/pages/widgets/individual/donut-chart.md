---
templateKey: widget-post
title: Donut Chart
description: A standard donut chart is a stacked bar chart mapped onto a polar
  coordinate plane (a circle). The space in the center of the chart is used to
  provide a total of the displayed metric. A legend or direct labels are
  required.
featuredimage: /img/donut-chart.png
---
# **Guidelines**

A Doughnut Chart is an improved version of Pie Charts to eliminate the trickiness of reading pie charts. These charts are known to express the relationship of ‘part-to-whole’ where all parts represent 100% when collected together. It displays survey questions or data with a small number of comparing categories.

They enable compact and simple representation as compared to pie charts. Furthermore, the center hole can help display related information. You can use them in segments where each arc represents the proportional value connected with each piece of data.

* **Use categorical color**

  Each segment of a donut chart should have a unique, categorical color.
* **Legend**

  When constraints make it impossible to use direct labels, show a categorical color legend. A legend should be positioned to the right of a donut chart, but if there is not enough horizontal space, it can be placed below the chart.
* **Show the whole**

  The segments of a donut chart should always add up to 100%. Roll up any excluded values into an “other” segment.
* **Sort segments by metric**

  Segments of donut charts should be sorted with the largest value starting in the twelve o’clock position, followed by each smaller value in succession moving in the clockwise direction.
* Try to use 2 - 3 segments if possible, and no more than 5

![](/img/donut-chart.png)

**Utility**

**Legend** - Present the top 5 groups and the rest if any will be presented and grouped as “Other”.

**Color** - HID Brand Colors

**Donut Chart Label** - Varies based on the use case

**Default State** - Always present the highest categorical group.

**Hover State** - On hover, present the respective category with a highlighted arc and the respective metric, category name and % as per use case.

**Empty state** - When there is no data available, a chart should indicate as such and give direction as to how to make data appear there. Do not render an empty chart.

**Error state** - There are occasionally errors with fetching data. When this happens, give users a helpful, actionable explanation of what happened and what they can do to fix things. Do not render an empty chart.

**Selection State** - When a user clicks on an arc, a detailed view of the respective metric opens up in a table format.

# **Accessibility**

* Donut charts are ideal for comparing part-to-whole and display the data in a circular format with each section representing one series in the data.
* Donut charts are best suited for just a few data points (around 5) to give a quick idea of composition, but become more difficult to read and understand with a large number of series.