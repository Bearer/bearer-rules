# Use bearer:expected python_lang_os_command_injection to flag expected findings

my_os = __import__("os")
# bearer:expected python_lang_os_command_injection
getattr(my_os, "system")(input())

import os
import subprocess as subproc
def bad():
  unsafe = input("what hack today?")
  # bearer:expected python_lang_os_command_injection
  subproc.run([unsafe, "exit 0"], shell=True, capture_output=True)
  # bearer:expected python_lang_os_command_injection
  os.system(unsafe)
  
  # bearer:expected python_lang_os_command_injection
  subproc.check_output(
    unsafe,
    stderr=subprocess.STDOUT,
    shell=True)

import sys
def bad2():
  unsafe = sys.argv[1]
  # bearer:expected python_lang_os_command_injection
  os.spawnlp(os.P_WAIT, unsafe)
  # bearer:expected python_lang_os_command_injection
  os.spawnve(os.P_WAIT, "/bin/bash", ["-c", unsafe], os.environ)
 
def ok():
  os.spawnve(os.P_WAIT, "/bin/ls", ["-a"], os.environ)
  subproc.run(["dir"], shell=False)