from Pages.BasePage import BasePage
from Locators.LogoutPageLocators import LogoutPageLocators
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
import time


class LogoutPage(BasePage):
    # Tester: Mohamed Amr
    # In this function when we choose the log out button a block contains "Choose an account" will appear
    def logout(self):
        account = self.driver.find_element(*LogoutPageLocators.ACCOUNT)
        account.click()
        logout = self.driver.find_element(*LogoutPageLocators.LOGOUT)
        logout.click()
        time.sleep(5)
        result = self.driver.find_element(*LogoutPageLocators.CHOOSE_AN_ACCOUNT)
        return "Choose an account" in result.text

