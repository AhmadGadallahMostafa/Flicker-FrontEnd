from Pages.BasePage import BasePage
from Locators.SearchGroupsLocators import SearchGroupsPageLocators
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
import time

class SearchGroupsPage(BasePage):
    def open_group(self): #opens first group in search paage and watis 5s 
        group = self.driver.find_element(*SearchGroupsPageLocators.GROUP_BOX)
        group.click()
        time.sleep(5)



