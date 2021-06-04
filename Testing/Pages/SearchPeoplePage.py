from Pages.BasePage import BasePage
from Locators.SearchPeopleLocator import SearchPeoplePageLocators
import  time

class SearchPeoplePage(BasePage):
    def open_profile(self):
        time.sleep(3)
        profile = self.driver.find_element(*SearchPeoplePageLocators.PROFILE_BOX)
        profile.click()
        time.sleep(5)