from Pages.BasePage import BasePage
from Locators.LoginPageLocators import LoginPageLocators
from Pages.WebsiteElement import *

import time


class LoginTextElement(BasePageElement):
    def __init__(self, element_id):
        self.locator = element_id

class LoginPage(BasePage):
    email_text = LoginTextElement("login-email")
    password_text = LoginTextElement("login-password")

    def go_next(self):
        next_button = self.driver.find_element(*LoginPageLocators.NEXT_BUTTON)
        next_button.click()

    # Tester: Mohamed Amr
    # In this function if we try to log in with an email in a wrong format an error message will appear to the user "Hmm… that's not an email address"
    def wrong_email_format(self):
        email = self.driver.find_element(*LoginPageLocators.EMAIL_TEXTBOX)
        email.send_keys("aaaa")
        login = self.driver.find_element(*LoginPageLocators.LOGIN_BUTTON)
        login.click()
        time.sleep(2)
        email_warning = self.driver.find_element(*LoginPageLocators.EMAIL_WARNING)
        result = "Hmm… that's not an email address" in email_warning.text
        return result

    # Tester: Mohamed Amr
    # In this function if we try to log in without an email the word "Required" will appear
    def no_email(self):
        self.driver.refresh()
        login = self.driver.find_element(*LoginPageLocators.LOGIN_BUTTON)
        login.click()
        time.sleep(2)
        email_required = self.driver.find_element(*LoginPageLocators.EMAIL_REQUIRED)
        return "Required" in email_required.text 

    # Tester: Mohamed Amr
    # In this function if we try to log in with an email in a right format the password text box will appear
    def right_email(self):
        self.driver.refresh()
        email = self.driver.find_element(*LoginPageLocators.EMAIL_TEXTBOX)
        email.send_keys("mohamedamr866@gmail.com")
        login = self.driver.find_element(*LoginPageLocators.LOGIN_BUTTON)
        login.click()
        time.sleep(2)
        result = self.driver.find_element(*LoginPageLocators.PASSWORD_TEXTBOX)
        return result

    # Tester: Mohamed Amr
    # In this function if we try to log in without the password we will check that the page isn't the home pag
    def no_password(self):
        self.driver.refresh()
        email = self.driver.find_element(*LoginPageLocators.EMAIL_TEXTBOX)
        email.send_keys("mohamedamr866@gmail.com")
        login = self.driver.find_element(*LoginPageLocators.LOGIN_BUTTON)
        login.click()
        self.driver.implicitly_wait(2)
        login.click()
        time.sleep(5)
        result = self.driver.title
        return "Home" in result

    # Tester: Mohamed Amr
    # In this function if we try to log in with a wrong password "Invalid password" will appear
    def wrong_password(self):
        self.driver.refresh()
        email = self.driver.find_element(*LoginPageLocators.EMAIL_TEXTBOX)
        email.send_keys("mohamedamr866@gmail.com")
        login = self.driver.find_element(*LoginPageLocators.LOGIN_BUTTON)
        login.click()
        self.driver.implicitly_wait(2)
        password = self.driver.find_element(*LoginPageLocators.PASSWORD_TEXTBOX)
        password.send_keys("aaaaaaaaaaaa")
        login.click()
        time.sleep(2)
        password_required = self.driver.find_element(*LoginPageLocators.PASSWORD_REQUIRED)
        return "Invalid password" in password_required.text

    # Tester: Mohamed Amr
    # In this function if we try to log in with a wrong email and wrong password "Invalid email or password." will appear
    def wrong_email_and_wrong_password(self):
        self.driver.refresh()
        email = self.driver.find_element(*LoginPageLocators.EMAIL_TEXTBOX)
        email.send_keys("karimamr3009@gmail.com")
        login = self.driver.find_element(*LoginPageLocators.LOGIN_BUTTON)
        login.click()
        self.driver.implicitly_wait(2)
        password = self.driver.find_element(*LoginPageLocators.PASSWORD_TEXTBOX)
        password.send_keys("abcd12345678")
        login.click()
        time.sleep(2)
        invalid_email_or_password = self.driver.find_element(*LoginPageLocators.INVALID_EMAIL_OR_PASSWORD)
        return "Invalid email or password." in invalid_email_or_password.text

    # Tester: Mohamed Amr
    # In this function if we try to log in with a right email and right password the home page will be reached
    def right_email_and_right_password(self):
        self.driver.refresh()
        email = self.driver.find_element(*LoginPageLocators.EMAIL_TEXTBOX)
        email.send_keys("mohamedamr866@gmail.com")
        login = self.driver.find_element(*LoginPageLocators.LOGIN_BUTTON)
        login.click()
        self.driver.implicitly_wait(2)
        password = self.driver.find_element(*LoginPageLocators.PASSWORD_TEXTBOX)
        password.send_keys("abcd12345678")
        login.click()
        time.sleep(5)
        result = self.driver.title
        return "Home" in result
