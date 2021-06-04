from Pages.BasePage import BasePage
from Locators.PrintsPageLocators import PrintsPageLocators
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
import time

class PrintsPage(BasePage):
    # Tester: Mohamed Amr
    #In this function when we click on the choose photos button "Drag and drop your photo to upload or browse." will appear
    def choose_photo(self):
        choose_photo = self.driver.find_element(*PrintsPageLocators.CHOOSE_PHOTO)
        choose_photo.click()
        time.sleep(2)
        get_started = self.driver.find_element(*PrintsPageLocators.GET_STARTED)
        get_started.click()
        time.sleep(5)
        result = self.driver.find_element(*PrintsPageLocators.RESULT)
        return "Drag and drop your photo to upload or browse." in result.text
    
    def title_matches(self):
        time.sleep(2)
        result = self.driver.title
        return "Prints" in result
