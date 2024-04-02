---
title: Team
nav:
  order: 3
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

{% include section.html %}
# Principal Investigator
{% include list.html data="members" component="portrait" filters="role: pi" %}
{% include section.html %}
# Current Lab Members
{% include list.html data="members" component="portrait" filters="role: labmanager" %}
{% include list.html data="members" component="portrait" filters="role: postdoc" %}
{% include list.html data="members" component="portrait" filters="role: phd" %}
{% include list.html data="members" component="portrait" filters="role: undergrad, group: ^(?!alum$)" %}


{% include section.html %}
# Alumni
{% include list.html data="members" component="portrait" style="small" filters="group: alum" %}
