---
templateKey: component-post
title: Select
description: Select is a type of input that is used in forms, in cases where a
  user has to choose an option from a list of options
featuredimage: /img/hid-select.svg
---
## **Guidance**

The select component is typically used inside a form where users are selecting from a list of options and submitting data whereas the dropdown component is used to filter or sort content on a page.

The select component’s appearance is decided by the browser that is being used while the dropdown component can be styled as needed.

**Do's**

* Always organize the list of options in a way that will make the most sense to the user based on the scenario. The list of options can be sorted alphabetically, numerically or by most commonly selected option
* Don’t overwhelm the user with too many options, try to avoid options that rarely get used.
* Use concise, descriptive labels so that users clearly know the purpose of the selection. For example, use a “Save to…” label for a list containing options such as “Cloud, Local drive, CD”.

**Dont's**

* A Select is not a Dropdown, the select and dropdown components may behave similarly but in fact, they have different functions.

## **Behaviour**

![](/img/select.png)

**Variant**

![](/img/inline-select.png)



## **Accessibility**

Inputs with errors should have aria-describedbyto insure that the associated field level error message is read by assistive technology. If the error message has an id="my-error-message", then the input should have aria-describedby="my-error-message”.\
\
If you need some type of field level help and if your tooltips are available on hover, make sure they’re also available on keyboard focus. The help icon needs to be associated to the tooltip so that when the user focuses on the icon, assistive technology reads out the content of the tooltip. If the tooltip has an id="help", then the <button> containing the icon should have aria-describedby="help”.\
\
In some cases, the read-only field state is swapped and has no <input>. This is called static in the examples. In that case, don’t use a <label>. This provides better accessibility for screen readers and keyboard navigators. Instead, use a <span> with the .hid-form-element__labelclass. Instead of an <input>, use the .hid-form-element\_\_staticclass inside the .hid-form-element\_\_control-wrapper.