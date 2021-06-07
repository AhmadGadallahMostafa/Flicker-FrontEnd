from Pages.BasePage import BasePage
from Locators.UploadPageLocators import UploadPageLocators
from selenium.webdriver.common.action_chains import ActionChains
import time


class UploadPage(BasePage):
    def title_matches(self):
        return "Upload" in self.driver.title

    def choose_file(self, files):
        choose_button = self.driver.find_element(*UploadPageLocators.CHOOSE_PHOTO)
        for i in range(0, len(files)):
            choose_button.send_keys("D:\\TV & Movies\\" + files[i])

    def confirm_upload(self):
        photostream_link = self.driver.find_element(*UploadPageLocators.PHOTOSTREAM_LINK).get_attribute("href")
        time.sleep(1)
        publish = self.driver.find_element(*UploadPageLocators.PUBLISH)
        action = ActionChains(self.driver)
        action.move_to_element(publish)
        action.click(publish)
        action.perform()
        self.driver.implicitly_wait(3)
        confirm_publish = self.driver.find_element(*UploadPageLocators.CONFRIM_PUBLISH)
        confirm_publish.click()
        self.driver.implicitly_wait(5)
        time.sleep(5)
        url = self.driver.current_url
        return photostream_link in url

    def detects_invalid(self):
        user_messaging = self.driver.find_element(*UploadPageLocators.USER_MESSAGING)
        return "has-failed-files" in user_messaging.get_attribute("class")

    def remove_invalid(self):
        remove_button = self.driver.find_element(*UploadPageLocators.REMOVE_FILE_BUTTON)
        remove_button.click()

    def cancel_upload(self):
        publish = self.driver.find_element(*UploadPageLocators.PUBLISH)
        action = ActionChains(self.driver)
        action.move_to_element(publish)
        action.click(publish)
        action.perform()
        self.driver.implicitly_wait(3)
        confirm_publish = self.driver.find_element(*UploadPageLocators.CONFRIM_PUBLISH)
        confirm_publish.click()
        time.sleep(5)
        self.driver.close()
