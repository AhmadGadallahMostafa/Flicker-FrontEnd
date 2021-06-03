from Locators.ProfilePageLocators import ProfilePageLocators
from Pages.BasePage import BasePage
import time

class ProfilePage(BasePage):
    def profile_name_matches_search(self, searchedString):
        result = self.driver.title
        return searchedString in result
    
    #follow an account and make sure status is changed
    def follow_opened_profile(self):
        follow_button = self.driver.find_element(*ProfilePageLocators.FOLLOW_BUTTON)
        follow_button.click()
        time.sleep(3)
        follow_status = self.driver.find_element(*ProfilePageLocators.FOLLOW_TEXT)
        follow_status = follow_status.text
        return "Following" in follow_status
    
    #unfollow an account and make sure status is changed
    def unfollow_opened_profile(self):
        unfollow_button = self.driver.find_element(*ProfilePageLocators.FOLLOW_BUTTON)
        unfollow_button.click()
        time.sleep(2)
        confirm_unfollow = self.driver.find_element(*ProfilePageLocators.UNFOLLOW_BUTTON)
        confirm_unfollow.click()
        time.sleep(1)
        follow_status = self.driver.find_element(*ProfilePageLocators.FOLLOW_TEXT)
        follow_status = follow_status.text
        return "Follow" in follow_status

    def send_message(self):
        time.sleep(2)
        send_msg = self.driver.find_element(*ProfilePageLocators.SEND_MSG)
        send_msg.click()
        time.sleep(5)
        


    
    
    
