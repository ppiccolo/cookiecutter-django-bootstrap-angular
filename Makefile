
DIRNAME=$(PWD)

test:
	$(DIRNAME)/bin/cookiecutter -v --no-input $(DIRNAME)
	cd repo_name; DJANGO_SETTINGS_MODULE=repo_name.settings bin/nosetests
	cd repo_name; tox
