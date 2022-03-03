---
templateKey: component-post
title: Alert
description: Alert banners communicate a state that affects the entire system,
    not just a feature or page. It persists over a session and appears without the
    user initiating the action.
featuredimage: /img/hid-alert.svg
---

## About System Alert

Alert banners communicate a state that affects the entire system. System alerts are not triggered for a single or multiple features and/or pages. It will persists over a session and appears without the user initiating the action. System alerts should display **ONE at a time** so not to overwhelm the user and provide action to remedy easily, if able.

https://codepen.io/etAmpersand/pen/MWgeJGM/581bc6e951e4b52753382a5d83093832

If more than one alert is set to display in the UI, the most critical will override less important. If user dismisses the most critical, the next one can animate in to display until all queued alerts display and are dismissed. No more than 3 alerts can be queued up for display at any given time. The optional link in the more expanded section can be sure to direct users to a system status page, if available, to handle additional system alerts and/or history of service outages.
