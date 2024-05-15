import os
user_upload_path = form.cleaned_data["filepath"]
# bearer:expected python_lang_path_using_user_input
os.mkdir(user_upload_path)

print("What file would you like to read?")
filepath = input()
# bearer:expected python_lang_path_using_user_input
open(filepath)

import fileinput as fi
# bearer:expected python_lang_path_using_user_input
with fi.input(files=(filepath), encoding="utf-8") as f:
    for line in f:
        process(line)

from pathlib import Path
my_path = Path(filepath)
# bearer:expected python_lang_path_using_user_input
my_path.open()

my_other_path = Path("some/known/path")
# bearer:expected python_lang_path_using_user_input
my_other_path.joinpath(filepath)

