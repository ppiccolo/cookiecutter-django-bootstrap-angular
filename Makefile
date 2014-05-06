
DIRNAME=$(PWD)

test:
	$(DIRNAME)/bin/cookiecutter -v --no-input $(DIRNAME)
	cd project_name; ../bin/tox
