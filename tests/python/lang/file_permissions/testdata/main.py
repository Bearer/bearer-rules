import os
import stat
from pathlib import Path

def bad():
  p = Path("sensitive_file.py")
  # bearer:expected python_lang_file_permissions
  p.chmod(0o777)
  
  # bearer:expected python_lang_file_permissions
  os.umask(0)
  
  # bearer:expected python_lang_file_permissions
  os.lchmod("sensitive_file.py", stat.S_IWOTH)
  
def ok():
  p = Path("sensitive_file.py")
  p.chmod(0o600)
  
  os.umask(18)
  
  os.lchmod("sensitive_file.py", stat.S_IXUSR)