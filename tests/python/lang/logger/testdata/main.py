import logging

myLogger = logging.getLogger(__name__)

def bad(user):
  # bearer:expected python_lang_logger
  myLogger.info(f"User '{user.email}' logged")

def bad2(user):
  # bearer:expected python_lang_logger
  myLogger.debug(f"Some debug info about '{user.email}'")

import logging as something_else

def bad3(user):
  myOtherLogger = something_else.getLogger(__name__)
  # bearer:expected python_lang_logger
  myOtherLogger.debug(f"User '{user.email}' logged")
  
  
import my_custom
def custom_bad():
  logger = my_custom.get_logger()
  # bearer:expected python_lang_logger
  logger.info("changing password for %s", user.username)
  
def custom_bad2(self):
    form = ResetPasswordEmailForm()
    if form.validate_on_submit():
        user = form.user
        # bearer:expected python_lang_logger
        logger.info('Password reset requested for user %s', user)
        return redirect(url_for('.resetpass'))
    return WPAuth.render_template('reset_password.html', form=form, identity=None, widget_attrs={},
                                  email_sent=session.pop('resetpass_email_sent', False))
  
