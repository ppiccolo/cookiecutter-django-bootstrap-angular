# -*- coding: utf-8 -*-
from cookiecutter import main
import unittest
import tempfile
import shutil
import os


class TestTemplate(unittest.TestCase):

    def setUp(self):
        self.tmpldir = os.path.dirname(os.path.abspath(__file__))
        self.binary = os.path.join(self.tmpldir, 'bin', 'cookiecutter')
        self.wd = tempfile.mkdtemp(prefix='cookiecutter')
        os.chdir(self.wd)
        self.addCleanup(shutil.rmtree, self.wd)

    def test_template(self):
        main.cookiecutter(self.tmpldir, checkout=False, no_input=True)
