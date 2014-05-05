# -*- coding: utf-8 -*-
from cookiecutter import main
import subprocess
import unittest
import tempfile
import shutil
import os


class TestTemplate(unittest.TestCase):

    scripts = [
        'bin/bower',
        'bin/django-manage',
        'bin/django-serve',
    ]

    filenames = [
        'parts/wsgi/wsgi',
        'repo_name.egg-info/entry_points.txt',
    ]

    def setUp(self):
        self.tmpldir = os.path.dirname(os.path.abspath(__file__))
        self.binary = os.path.join(self.tmpldir, 'bin', 'cookiecutter')
        self.wd = tempfile.mkdtemp(prefix='cookiecutter')
        self.addCleanup(os.chdir, os.getcwd())
        self.addCleanup(shutil.rmtree, self.wd)
        os.chdir(self.wd)

    def test_template(self):
        main.cookiecutter(self.tmpldir, checkout=False, no_input=True)
        os.chdir(os.path.join(self.wd, 'repo_name'))
        for filename in self.scripts:
            self.assertTrue(os.path.isfile(filename),
                            filename + ' not generated')
        for filename in self.filenames:
            self.assertTrue(os.path.isfile(filename),
                            filename + ' not generated')

        ret = subprocess.call(
            'bin/django-manage syncdb --noinput --migrate',
            shell=True)
        self.assertEqual(ret, 0)
