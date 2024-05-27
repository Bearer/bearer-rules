import smtplib

smtp = smtplib.SMTP_SSL('smtp.example.com')
# bearer:expected python_lang_insecure_smtp
smtp = smtplib.SMTP('smtp.example.com') 
# bearer:expected python_lang_insecure_smtp
smtp = smtplib.LMTP('smtp.example.com') 