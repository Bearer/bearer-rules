def ftplib():
    from ftplib import FTP, FTP_TLS

    ftp = FTP_TLS('ftp.example.com')
    # bearer:expected python_lang_insecure_ftp
    ftp = FTP('ftp.example.com') 


def aioftp():
    import ssl
    import aioftp
    
    client = aioftp.Client("ftp.example.com", ssl=True)
    client = aioftp.Client("ftp.example.com", ssl=ssl.SSLContext())
    # bearer:expected python_lang_insecure_ftp
    client = aioftp.Client("ftp.example.com")
    # bearer:expected python_lang_insecure_ftp
    client = aioftp.Client("ftp.example.com", ssl=False)
    # bearer:expected python_lang_insecure_ftp
    client = aioftp.Client("ftp.example.com", ssl=unknown)

    aioftp.Client.context("ftp.example.com", ssl=True)
    aioftp.Client.context("ftp.example.com", ssl=ssl.SSLContext())
    # bearer:expected python_lang_insecure_ftp
    aioftp.Client.context("ftp.example.com")
    # bearer:expected python_lang_insecure_ftp
    aioftp.Client.context("ftp.example.com", ssl=False)
    # bearer:expected python_lang_insecure_ftp
    aioftp.Client.context("ftp.example.com", ssl=unknown)
    