from Pages.BasePage import BasePage
from Locators.HomePageLocators import HomePageLocators
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
import time

class NotificationPage(BasePage):
    def check_last_notficiation(self):
        notification_icon = self.driver.find_element(*HomePageLocators.NOTIFICATIONS_ICON)
        notification_icon.click()
        time.sleep(1)
        last_notification = self.driver.find_element(*HomePageLocators.NOTIFICATION)
        return "karim amr is now following you" in last_notification.text
        