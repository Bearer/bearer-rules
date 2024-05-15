# Use bearer:expected python_lang_path_traversal to flag expected findings

import os

# bearer:expected python_lang_path_traversal
os.mkdir(sys.argv[2])

import os.path

# ok (sanitized)
normalized = os.path.normpath(sys.argv[1])
os.mkdir(normalized)