# Use bearer:expected python_lang_os_command_injection to flag expected findings

my_os = __import__("os")
# bearer:expected python_lang_os_command_injection
getattr(my_os, "system")(input())

def bad():
  unsafe = input("what hack today?")
  # bearer:expected python_lang_os_command_injection
  subprocess.run([unsafe, "exit 0"], shell=True, capture_output=True)
  # bearer:expected python_lang_os_command_injection
  os.system(unsafe)
  
  # bearer:expected python_lang_os_command_injection
  subprocess.check_output(
    unsafe,
    stderr=subprocess.STDOUT,
    shell=True)

def bad2():
  unsafe = sys.argv[1]
  # bearer:expected python_lang_os_command_injection
  os.spawnlp(os.P_WAIT, unsafe)
  # bearer:expected python_lang_os_command_injection
  os.spawnve(os.P_WAIT, "/bin/bash", ["-c", unsafe], os.environ)
 
def ok():
  os.spawnve(os.P_WAIT, "/bin/ls", ["-a"], os.environ)
  subprocess.run(["dir"], shell=False)