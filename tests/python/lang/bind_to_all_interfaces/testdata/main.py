import socket

def bad():
  my_socket = socket.socket()
  # bearer:expected python_lang_bind_to_all_interfaces
  my_socket.bind("0.0.0.0")
  # bearer:expected python_lang_bind_to_all_interfaces
  my_socket.bind("::")
  # bearer:expected python_lang_bind_to_all_interfaces
  my_socket.bind('')
  
 
 KNOWN_SOCKET = "123.123.123" 
 def ok():
  my_safe_socket = socket.socket()
  my_safe_socket.bind("123.456.789")
  my_safe_socket.bind(KNOWN_SOCKET)