#!/usr/bin/env python
# -*- coding: utf-8 -*-

import subprocess
import sys
import os


def run(cmd):
    p = subprocess.Popen(cmd, shell=True,
                         stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
    p.wait()
    if p.returncode:
        print(p.stdout.read())
        sys.exit(p.returncode)

if not os.path.isfile('bin/buildout'):
    run('%s bootstrap.py' % sys.executable)
    run('bin/buildout')
