
DIRNAME=$(PWD)

test:
	$(DIRNAME)/bin/cookiecutter -v --no-input $(DIRNAME)
	cd repo_name; ../bin/tox
