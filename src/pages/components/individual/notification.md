---
templateKey: component-post
title: Notification
description: Notifications are messages that communicate information to the
  user. In all cases, they are dismissible by the user and can provide links to
  further information about the information in the notification.
featuredimage: /img/hid-notification.svg
---
# **Guidelines**

* Use notifications to inform users of important status changes and updates
* Limit action labels to two words or less.
* Be descriptive and give users clear next steps. Keep the message under two lines.
* Do use clear and concise language.
* Do not use technical jargon or language unfamiliar to the user.
* An actionable notification should persist until the user dismisses it, allowing users time to interact with the notification.
* Use only one Call to action button per notification.

**When to use**

**Line notification** - For notifications that are relevant to a piece of content on the page, use Inline Notifications.

**Toast** - For notifications that are temporary and need to provide visual feedback, use Toast Notifications.

![](/img/notification.png)



# **Variants**

Notification status helps convey the information being communicated. These statuses correspond with color and icon to provide a consistent, universal experience for users.

**Informational** - When a relevant action happens in other parts of the application.

**Error** - When an action a user initiate has errors.

**Warning** - For information that the users must immediately be made aware of.

**Success** - When an action the user activated is successful.

# **Accessibility**

* Notification Icons must accurately describe the meaning and purpose of the notification. 
* Avoid timed notifications.
* Provide users with settings to turn off nonessential notifications or change the frequency
* Avoid using icons alone to convey meaning.
* Make sure icons are universally recognizable.
* Avoid using a toast notification for critical alerts or long messages because they are timed and will disappear automatically making it difficult for people with various disabilities to get the entire message.
* Provide a means to turn off nonessential alerts to enhance usability for people with visual and cognitive disabilities.
* Ensure the use of color and hidden icons are not used as the only means of conveying the importance of the notification.
