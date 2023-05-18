---
templateKey: widget-post
title: File Uploader
description: >
  File uploaders allow users to upload content of their own. A file uploader is
  commonly found in forms, but can also live as a standalone element. We have 3
  variants of file uploader buttons. A basic button, a button with text and an
  icon, and a button that is icon only.
featuredimage: /img/file-uploader-default-white-theme.png
---
# **Guidelines**

**When to use**

Plain text and text with icon buttons should be used in forms and in text. Icon-only buttons can be used in a text editor or other situations where space is limited.

There are two major components of the file uploader.

**Button** - These are the elements the user interacts with to initiate the upload of a file.

**Documents** - These are the files being uploaded. They have several states in which they can be displayed such as Loading, success, uploaded, and error.

![](/img/file-uploader-default-white-theme.png)

# **Accessibility**

  * ﻿File Upload Input allows a user to upload files via Input field.
 * File Upload can be set to be clearable with the close icon.
* In the file uploader the Progress component creating a full file upload form displays an area where the uploaded file name is visible.
 * File Upload inherits the status properties of Input — none, success, warning, error, loading.