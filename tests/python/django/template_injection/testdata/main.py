# this file is also testing the shared import rules

import django
import django as d
import django.template as t
from django import template as t2
from django import template
from django.template import Template
from django.template import Template as Tpt


dt = d.template
dt.Template(ok)
# bearer:expected python_django_template_injection
dt.Template(form.data["oops"])

# bearer:expected python_django_template_injection
django.template.Template(form.data["oops"])

# bearer:expected python_django_template_injection
template.Template(form.data["oops"])

# bearer:expected python_django_template_injection
t.Template(form.data["oops"])

# bearer:expected python_django_template_injection
t2.Template(form.data["oops"])

# bearer:expected python_django_template_injection
Template(form.data["oops"])

# bearer:expected python_django_template_injection
Tpt(form.data["oops"])

from other import Template
Template(form.data["ok"])

import django.template
# bearer:expected python_django_template_injection
django.template.Template(form.data["oops"])
