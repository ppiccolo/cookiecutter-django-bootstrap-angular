from setuptools import setup
from setuptools import find_packages
import os

version = '{{cookiecutter.version}}'

install_requires = [
    'Sphinx',
    'Django>=1.6',
    'DjangoDevKit',
    'django-registration',
    'django-autoslug',
]

test_requires = [
    'django-webtest',
]


def read(*rnames):
    return open(os.path.join(os.path.dirname(__file__), *rnames)).read()


setup(
    name='{{cookiecutter.repo_name}}',
    version=version,
    description="{{cookiecutter.description}}",
    long_description=read('README.rst'),
    classifiers=[],
    keywords='',
    author='{{cookiecutter.author}}',
    author_email='{{cookiecutter.email}}',
    url='',
    license='',
    packages=find_packages(exclude=['tests']),
    include_package_data=True,
    install_requires=install_requires,
    extras_require={
        'test': test_requires,
    },
    zip_safe=False,
    entry_points="""
    # -*- Entry points: -*-
    [console_scripts]
    """,
    )
