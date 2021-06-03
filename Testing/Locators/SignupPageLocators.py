from selenium.webdriver.common.by import By

class SignupPageLocators(object):
    FIRST_NAME = (By.ID, "sign-up-first-name")
    LAST_NAME = (By.ID, "sign-up-last-name")
    AGE = (By.ID, "sign-up-age")
    EMAIL = (By.ID, "sign-up-email")
    PASSWORD = (By.ID, "sign-up-password")
    SIGNUP = (By.XPATH, "//button")
    FIRST_NAME_REQUIRED = (By.XPATH, "//form[@id='sign-up-form']//div[1]//div[2]")
    LAST_NAME_REQUIRED = (By.XPATH, "//form[@id='sign-up-form']//div[2]//div[2]")
    AGE_REQUIRED = (By.XPATH, "//form[@id='sign-up-form']//div[3]//div[2]")
    EMAIL_REQUIRED = (By.XPATH, "//form[@id='sign-up-form']//div[4]//div[2]")
    PASSWORD_REQUIRED = (By.XPATH, "//form[@id='sign-up-form']//div[5]//div[2]")
    AGE_WARNING = (By.XPATH, "//form[@id='sign-up-form']//div[3]//div[2]")
    EMAIL_WARNING = (By.XPATH, "//form[@id='sign-up-form']//div[4]//div[2]")
    PASSWORD_WARNING = (By.XPATH, "//form[@id='sign-up-form']//div[5]//div[2]")

