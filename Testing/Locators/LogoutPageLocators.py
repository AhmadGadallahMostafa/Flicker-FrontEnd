from selenium.webdriver.common.by import By

class LogoutPageLocators(object):
    ACCOUNT = (By.XPATH, "//div[contains(@class,'avatar person tiny')]")
    LOGOUT = (By.LINK_TEXT, "Log out")
    CHOOSE_AN_ACCOUNT = (By.XPATH, "//h6")
    ANOTHER_ACCOUNT = (By.XPATH, "//div[@class='bg-hover-grey c-hover-black flex align-center px-3 py-2 cursor-pointer b-rad-1 pos-relative c-grey-dark']")
