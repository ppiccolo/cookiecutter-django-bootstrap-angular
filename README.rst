======================================
cookiecutter-django-bootstrap-angular
======================================

.. image:: https://travis-ci.org/bearstech/cookiecutter-django-bootstrap-angular.svg
   :target: https://travis-ci.org/bearstech/cookiecutter-django-bootstrap-angular

A cookiecutter_ template for Django - Twitter Bootstrap - AngularJS - Buildout.

.. _cookiecutter: https://github.com/audreyr/cookiecutter

Description
===========

It uses the latest stable versions and it only defines a skeleton which can be extended as needed.

Usage
=====

- If not, install cookiecutter::

    $ pip install cookiecutter

- cookiecut this repo (it launches the buildout/bower processes)::

    $ cookiecutter https://github.com/bearstech/cookiecutter-django-bootstrap-angular
    $ cd your_freshly_cookiecut_project
    $ bin/django-manage syncdb --migrate
    $ bin/django-serve

- You're done !

You can use `gulp <http://gulpjs.com/>`_ to:

- launch angularjs tests, at the project root::

    $ bin/gulp test

- recompile less files::

    $ bin/gulp less

- watch css/js files modification and recompile/tests them on the fly::

    $ bin/gulp
