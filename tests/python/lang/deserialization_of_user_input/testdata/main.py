import pickle

unsafe_file = request.FILES["user_file"]
# bearer:expected python_lang_deserialization_of_user_input
pickle.load(unsafe_file)

unsafe_bytes = input().encode()
# bearer:expected python_lang_deserialization_of_user_input
pickle.loads(unsafe_bytes)

unpickler = pickle.Unpickler(unsafe_file) 
# bearer:expected python_lang_deserialization_of_user_input
unpickler.load()
# bearer:expected python_lang_deserialization_of_user_input
unpickler.persistent_load()

import _pickle as P
# bearer:expected python_lang_deserialization_of_user_input
P.load(unsafe_file)

from yaml import load, Loader
# bearer:expected python_lang_deserialization_of_user_input
data = load(unsafe_file, Loader=Loader)

unsafe_filepath = request.GET.get("ext_filepath")
stream = file(unsafe_filepath)
# bearer:expected python_lang_deserialization_of_user_input
data = load(stream)

import jsonpickle
unsafe_string = request.GET.get("external_json_tr")
# bearer:expected python_lang_deserialization_of_user_input
danger = jsonpickle.decode(unsafe_string, safe=True)

import dill
# bearer:expected python_lang_deserialization_of_user_input
dill.load(unsafe_file)

import shelve
# bearer:expected python_lang_deserialization_of_user_input
shelve.open(unsafe_file, flag="c")

from ruamel.yaml import YAML
yaml = YAML(typ="base")
# bearer:expected python_lang_deserialization_of_user_input
yaml.load(unsafe_file)

import marshal
# bearer:expected python_lang_deserialization_of_user_input
res = marshal.load(unsafe_file)
# bearer:expected python_lang_deserialization_of_user_input
res2 = marshal.loads(unsafe_bytes)

# ok 
safe_file = "/some/known/file.txt"
pickle.load(safe_file)
safe_bytes = "hello".encode()
pickle.loads(safe_bytes)

unpickler = pickle.Unpickler(safe_file) 
unpickler.load()
unpickler.persistent_load()

data = load(safe_file, Loader=Loader)

jsonpickle.decode("hello")

yaml = YAML(typ="safe")
yaml.load(unsafe_file) # fine - type is safe

yaml2 = YAML()
yaml2.load(unsafe_file) # fine - default is rt (round-trip)

marshal.load(safe_file)
