# -*- coding: utf-8 -*-
from django_webtest import WebTest


class TestHomePage(WebTest):

    def test_home_page(self):
        resp = self.app.get('/')
        resp.mustcontain('<div class="container">')
