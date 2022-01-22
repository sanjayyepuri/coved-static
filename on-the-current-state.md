---
description: Johan Cervantes - December 17, 2021
---

# On the current state

Although there are no plans to reinstate the dynamic content of the site, there are a several areas of improvement:&#x20;

* Documentation
  * Although our README includes **some** instructions, most of the implementation, deployment details, and setup guidelines are not documented. This is an attempt to change that :)
* UI Fixes
  * There are **a lot** of UI nits that can be fixed.
  * Mobile UI is non-existent.&#x20;
* Smoother Update Experience
  * The critical path to change anything on the site is too long at the moment. Aside from knowing what to change, someone also needs to build, deploy, and verify the changes to the site. **As far as I know, only @sanjay, @dheekshu, and I know how to do this.**&#x20;
  * Ideally we should use a Content Management System to update the information on the site These systems allow anyone to update the content without knowing how to the site works or having to re-build and re-deploy the website.&#x20;
    * The current iteration of the site uses GraphQL to load some of the content, so migrating to a CMS won't be \~terrible.
    * &#x20;There was some discussion on using [Contentful](https://www.contentful.com), although I don't believe that has gone anywhere.
