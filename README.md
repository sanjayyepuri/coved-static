---
description: There are three different repositories, what gives?
---

# A bit of history.

## The first iteration

&#x20;The first version of the website was made in late March 2020. It was made **as quickly as possible.** It featured:

* User accounts
* Sending emails to mentors
* User analytics
* A somewhat usable mentor searching experience.

It was usable, but it was hard to develop new additions to the site. It was built for speed, not maintainability. Once the semester ended and we all had more time on our hands, version 2.0 began.&#x20;



## The second Iteration

Upon the start of summer 2020, we began developing the second version of the site. The main goals were roughly:

* Better user experience
* Be maintainable
* Allow mentors / mentees to manage, log, update mentorships.

During the summer, a good amount of progress was made:&#x20;

* There was [a legit Figma design](https://www.figma.com/file/3IPF991kTgpLJ3LDyyzAgL/CovEd-Web-Redesign?node-id=3%3A2)
* Over 20 people contributed to the frontend design
* The sign up experience was smoother (it wasn't one long form!)

The site was not finished by the time the summer ended. We might have been too ambitious. Shortly after the semester started we hired a third party to pick up were we left off.&#x20;

In late November, the third party showed us the work that had been done so far.  Some UI components looked good and some of the mentor-specific functionality was in place. However, it was not fully functional. The actual code behind the site was, at best, **somewhat** readable.

By the end of January 2021, the second iteration of the site was functional.&#x20;

It featured:

* An extensible [automated messaging system](https://github.com/CovEducation/Website/blob/9652e4fb77d87ff01d29391f243d366a4acd8a25/packages/server/src/services/CommunicationService/CommunicationService.ts) for mentors <-> parents.
  * It supported both email & SMS
* Over >100 tests
* Ability to reject, accept, an archive mentorships within the app itself.
* A nice view of everyone on the team

## The third iteration (current)

Sometime after the second iteration of the website was launched, we made the decision to transition to partnership-based model. This meant that we were to shutdown the mentor matching functionality from the site, including user accounts.&#x20;

The current iteration of the site is the second iteration of the site minus any dynamic content. There are no user accounts, automated emails, nor mentor searching functionality.&#x20;



