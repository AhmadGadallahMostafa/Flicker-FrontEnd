from selenium.webdriver.common.by import By
class LoginPageLocators(object):
    NEXT_BUTTON = (By.CSS_SELECTOR, "button")
    EMAIL_TEXTBOX = (By.ID,"login-email")
    LOGIN_BUTTON = (By.XPATH,"//button")
    EMAIL_WARNING = (By.XPATH, "//div[contains(@class,'flickr-modal bg-white elevation-2 b-rad-1 flex column pa-3')]")
    EMAIL_REQUIRED = (By.XPATH, "//form[@id='login-form']//div[2]//div[2]")
    PASSWORD_TEXTBOX = (By.ID, "login-password")
    PASSWORD_REQUIRED = (By.XPATH, "//form[@id='login-form']//div[3]//div[1]//div[2]")
    INVALID_EMAIL_OR_PASSWORD = (By.XPATH, "//p")