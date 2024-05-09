user_upload_path = form.cleaned_data["filepath"]
# bearer:expected python_lang_path_using_user_input
os.mkdir(user_upload_path)

print("What file would you like to read?")
filepath = input() 
# bearer:expected python_lang_path_using_user_input
open(filepath)

# bearer:expected python_lang_path_using_user_input
with fileinput.input(files=(filepath), encoding="utf-8") as f:
    for line in f:
        process(line)

my_path = Path(filepath)
# bearer:expected python_lang_path_using_user_input
my_path.open()

