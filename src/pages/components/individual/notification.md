---
templateKey: component-post
title: Notification
description: Notifications are messages that communicate information to the
  user. In all cases they are dismissable by the user and can provide links to
  further information about the information in the notification.
featuredimage: /img/hid-notification.svg
---
## **Guidelines**

* Use notifications to inform users of important status changes and updates
* Limit action labels to two words or less.
* Be descriptive and give users clear next steps. Keep the message under two lines.
* Do use clear and concise language.
* Do not use technical jargon or language unfamiliar to the user.
* An actionable notification should persist until user dismisses it, allowing users time to interact with the notification.
* Use only one Call to action button per notification.

**When to use**

**Line notification** - For notifications which are relevant to a piece of content on the page, use Inline Notifications.

**Toast** - For notifications which are temporary and need to provide visual feedback, use Toast Notifications.

![](/img/notification.png)

**Variants**

Notification status helps convey the information being communicated. These statuses correspond with a color and icon to provide a consistent, universal experience for users.\
\
**Informational** - When a relevant action happens in other parts of the application.

**Error** - When an action a user initiate has errors.

**Warning** - For information that the users must immediately be made aware of.

**Success** - When an action the user activated is successful.

## **Accessibility**

Notifications should contain role="dialog"to signal to assistive technology that they require the user’s immediate attention. You can also use role=alert but this is usually reserved for things that are important or time-sensitive like:\
\
An invalid value was entered into a form field\
The user’s login session is about to expire\
The connection to the server was lost, local changes will not be saved\
Do NOT use an alert role on all notifications.\
\
Success and info notifications can use aria-live="polite" which is a less aggressive method. As always, really analyse the urgency of the message to set the aria accessibility role.

![](blob:https://relaxed-davinci-16bcea.netlify.app/750b0ada-6f97-493e-a671-2277ecc657c6)