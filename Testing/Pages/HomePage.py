from Pages.BasePage import BasePage
from Locators.HomePageLocators import HomePageLocators
from Locators.SearchPeopleLocator import SearchPeoplePageLocators
from Locators.SearchGroupsLocators import SearchGroupsPageLocators
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
import time


class HomePage(BasePage):
    #each go function goes to specific page and then waits 5s to load
    def go_upload(self):
        upload = self.driver.find_element(*HomePageLocators.UPLOAD_ICON)
        upload.click()
        time.sleep(5)

    def go_to_photostream(self):
        self.driver.implicitly_wait(10)
        you = self.driver.find_element(*HomePageLocators.YOU)
        you.click()
        time.sleep(5)
    
    def go_to_groups(self):
        self.driver.implicitly_wait(10)
        you = self.driver.find_element(*HomePageLocators.YOU)
        action = ActionChains(self.driver)
        action.move_to_element(you)
        groups = self.driver.find_element(*HomePageLocators.GROUPS_ICON)
        action.move_to_element(groups)
        action.click(groups)
        action.perform()
        time.sleep(5)

    def go_to_prints(self):
        self.driver.get("https://www.flickr.com/prints")

    def go_to_people(self):
        time.sleep(3)
        you = self.driver.find_element(*HomePageLocators.YOU)
        action = ActionChains(self.driver)
        action.move_to_element(you)
        people = self.driver.find_element(*HomePageLocators.PEOPLE)
        action.move_to_element(people)
        action.click(people)
        action.perform()
        time.sleep(5)
    
    def go_to_help(self):
        self.driver.get("https://help.flickr.com/")
        time.sleep(5)
        """
        help = self.driver.find_element(*HomePageLocators.HELP)
        action = ActionChains(self.driver)
        action.move_to_element(help)
        action.click(help)
        action.perform()
        time.sleep(5)
        """
        
    def check_push_notifications(self):
        time.sleep(5)
        push_notifications = self.driver.find_element(*HomePageLocators.PUSH_NOTIFICATION)
        return len(push_notifications.text) != 0 
        #if not zero => true then we got a notification
    
    def send_notification(self):
        search = self.driver.find_element(*HomePageLocators.SEARCH_FIELD)
        search.send_keys("karimamr9")
        search.send_keys(Keys.RETURN)
        time.sleep(5)
        search_people = self.driver.find_element(*HomePageLocators.SEARCH_PEOPLE)
        search_people.click()
        time.sleep(5)
        follow_button = self.driver.find_element(*SearchPeoplePageLocators.FOLLOW_BUTTON)
        follow_button.click()
        time.sleep(5)

    #enter in the search field a group name then switch to group search  
    def search_group(self, groupName):
        search = self.driver.find_element(*HomePageLocators.SEARCH_FIELD)
        search.send_keys(groupName)
        search.send_keys(Keys.RETURN)
        time.sleep(5)
        search_groups = self.driver.find_element(*SearchGroupsPageLocators.SEARCH_GROUPS)
        search_groups.click()
        time.sleep(5)

    #enter in the search field a profile name then switch to people search 
    def search_people(self, accountName):
        time.sleep(2)
        search = self.driver.find_element(*HomePageLocators.SEARCH_FIELD)
        search.send_keys(accountName)
        search.send_keys(Keys.RETURN)
        time.sleep(5)
        search_people = self.driver.find_element(*SearchPeoplePageLocators.SEARCH_PEOPLE)
        search_people.click()
        time.sleep(5)

    def open_notifications(self):
        time.sleep(5)
        push_notifications = self.driver.find_element(*HomePageLocators.NOTIFICATIONS_ICON)
        push_notifications.click()
        time.sleep(5)

    def open_msg(self):
        msg = self.driver.find_element(*HomePageLocators.MSG_RECIEVED)
        msg.click()
        time.sleep(5)




