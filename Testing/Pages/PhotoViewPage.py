from Pages.BasePage import BasePage
from Locators.PhotoviewPageLocators import PhotoViewLocators
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium import webdriver
import time

class PhotoViewPage(BasePage):
    def comment(self):
        comment = self.driver.find_element(*PhotoViewLocators.COMMENT_TEXTBOX)
        comment.send_keys("Nice pic")
        time.sleep(3)
        comment_button = self.driver.find_element(*PhotoViewLocators.COMMENT_BUTTON)
        comment_button.click()
        time.sleep(3)

    def check_comment(self):
        comment = self.driver.find_element(*PhotoViewLocators.COMMENT_TEXT)
        result = "Nice pic" in comment.text
        return result

