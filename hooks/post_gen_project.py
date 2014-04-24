#!/usr/bin/env python
# -*- coding: utf-8 -*-

import subprocess
import os

if not os.path.isfile('bin/buildout'):
    subprocess.call('python bootstrap.py && bin/buildout', shell=True)

if not os.path.isdir('node_modules'):
    subprocess.call('bin/bower install .')
    subprocess.call('bin/npm install grunt')
