cookiecutter-django-bootstrap-angular
==========================

A cookiecutter_ template for Django - Twitter Bootstrap - AngularJS - Buildout.

.. _cookiecutter: https://github.com/audreyr/cookiecutter

Description
-----------

It uses the latest stable versions and it only defines a skeleton which can be extended as needed.

Usage
------

* If not, install cookiecutter
* cookiecut this repo (it launches the buildout/bower processes)
```
cookiecutter https://github.com/em-squared/cookiecutter-django-bootstrap-angular
cd your_freshly_cookiecut_project
bin/django-manage syncdb --migrate
bin/django-serve
```
* You're done !

To launch angularjs tests, at the project root:
```
npm test
```