from Pages.BasePage import BasePage
from Locators.SignupPageLocators import SignupPageLocators
import time

class SignupPage(BasePage):
    # Tester: Mohamed Amr
    # This function tests if we try to signup without the first name it must show the word required to the user
    def firstname(self):
        lastname = self.driver.find_element(*SignupPageLocators.LAST_NAME)
        lastname.send_keys("Amr")
        age = self.driver.find_element(*SignupPageLocators.AGE)
        age.send_keys("20")
        email = self.driver.find_element(*SignupPageLocators.EMAIL)
        email.send_keys("mohamedamr866@gmail.com")
        password = self.driver.find_element(*SignupPageLocators.PASSWORD)
        password.send_keys("aaaaaaaaaaaa")
        signup = self.driver.find_element(*SignupPageLocators.SIGNUP)
        signup.click()
        time.sleep(5)
        firstname_required = self.driver.find_element(*SignupPageLocators.FIRST_NAME_REQUIRED)
        return firstname_required.text == "Required"

    # Tester: Mohamed Amr
    # This function tests if we try to signup without the last name it must show the word required to the user
    def lastname(self):
        self.driver.refresh()
        firstname = self.driver.find_element(*SignupPageLocators.FIRST_NAME)
        firstname.send_keys("Mohamed")
        age = self.driver.find_element(*SignupPageLocators.AGE)
        age.send_keys("20")
        email = self.driver.find_element(*SignupPageLocators.EMAIL)
        email.send_keys("mohamedamr866@gmail.com")
        password = self.driver.find_element(*SignupPageLocators.PASSWORD)
        password.send_keys("aaaaaaaaaaaa")
        signup = self.driver.find_element(*SignupPageLocators.SIGNUP)
        signup.click()
        time.sleep(5)
        lastname_required = self.driver.find_element(*SignupPageLocators.LAST_NAME_REQUIRED)
        return lastname_required.text == "Required"

    # Tester: Mohamed Amr
    # This function tests if we try to signup without the age it must show the word required to the user
    def age(self):
        self.driver.refresh()
        firstname = self.driver.find_element(*SignupPageLocators.FIRST_NAME)
        firstname.send_keys("Mohamed")
        lastname = self.driver.find_element(*SignupPageLocators.LAST_NAME)
        lastname.send_keys("Amr")
        email = self.driver.find_element(*SignupPageLocators.EMAIL)
        email.send_keys("mohamedamr866@gmail.com")
        password = self.driver.find_element(*SignupPageLocators.PASSWORD)
        password.send_keys("aaaaaaaaaaaa")
        signup = self.driver.find_element(*SignupPageLocators.SIGNUP)
        signup.click()
        time.sleep(5)
        age_required = self.driver.find_element(*SignupPageLocators.AGE_REQUIRED)
        return age_required.text == "Required"

    # Tester: Mohamed Amr
    # This function tests if we try to signup without the email it must show the word required to the user
    def email(self):
        self.driver.refresh()
        firstname = self.driver.find_element(*SignupPageLocators.FIRST_NAME)
        firstname.send_keys("Mohamed")
        lastname = self.driver.find_element(*SignupPageLocators.LAST_NAME)
        lastname.send_keys("Amr")
        age = self.driver.find_element(*SignupPageLocators.AGE)
        age.send_keys("20")
        password = self.driver.find_element(*SignupPageLocators.PASSWORD)
        password.send_keys("aaaaaaaaaaaa")
        signup = self.driver.find_element(*SignupPageLocators.SIGNUP)
        signup.click()
        time.sleep(5)
        email_required = self.driver.find_element(*SignupPageLocators.EMAIL_REQUIRED)
        return email_required.text == "Required"

    # Tester: Mohamed Amr
    # This function tests if we try to signup without the password it must show the word required to the user
    def password(self):
        self.driver.refresh()
        firstname = self.driver.find_element(*SignupPageLocators.FIRST_NAME)
        firstname.send_keys("Mohamed")
        lastname = self.driver.find_element(*SignupPageLocators.LAST_NAME)
        lastname.send_keys("Amr")
        age = self.driver.find_element(*SignupPageLocators.AGE)
        age.send_keys("20")
        email = self.driver.find_element(*SignupPageLocators.EMAIL)
        email.send_keys("mohamedamr866@gmail.com")
        signup = self.driver.find_element(*SignupPageLocators.SIGNUP)
        signup.click()
        time.sleep(5)
        password_required = self.driver.find_element(*SignupPageLocators.PASSWORD_REQUIRED)
        return password_required.text == "Required"

    # Tester: Mohamed Amr
    # This function tests if we try to signup with age less than 13 years it must show "In order to use Flickr, you must be 13 or older"  to the user
    def valid_age(self):
        self.driver.refresh()
        age = self.driver.find_element(*SignupPageLocators.AGE)
        age.send_keys("9")
        signup = self.driver.find_element(*SignupPageLocators.SIGNUP)
        signup.click()
        time.sleep(5)
        age_warning = self.driver.find_element(*SignupPageLocators.AGE_WARNING)
        return age_warning.text == "In order to use Flickr, you must be 13 or older"

    # Tester: Mohamed Amr
    # This function tests if we try to signup with an email in a wrong format it must show "Invalid email"  to the user
    def valid_email(self):
        self.driver.refresh()
        email = self.driver.find_element(*SignupPageLocators.EMAIL)
        email.send_keys("mohamedamr866gmail.com")
        signup = self.driver.find_element(*SignupPageLocators.SIGNUP)
        signup.click()
        time.sleep(5)
        email_warning = self.driver.find_element(*SignupPageLocators.EMAIL_WARNING)
        return email_warning.text == "Invalid email"

    # Tester: Mohamed Amr
    # This function tests if we try to signup with a password less than 12 charachters  it must show "Invalid password"  to the user
    def valid_password(self):
        self.driver.refresh()
        password = self.driver.find_element(*SignupPageLocators.PASSWORD)
        password.send_keys("aaaaaaaaaaa")
        signup = self.driver.find_element(*SignupPageLocators.SIGNUP)
        signup.click()
        time.sleep(5)
        password_warning = self.driver.find_element(*SignupPageLocators.PASSWORD_WARNING)
        return password_warning.text == "Invalid password"
