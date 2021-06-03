from Pages.BasePage import BasePage
from Locators.PeoplePageLocators import PeoplePageLocators
import time

class PeoplePage(BasePage):
    def page_title_matches(self):
        result = self.driver.title
        return "people" in result

    # gets people that an account follows
    def get_followers(self):
        list_tab = self.driver.find_element(*PeoplePageLocators.FOLLOWERS)
        list_tab.click()
        time.sleep(5)
        following_list = self.driver.find_elements(*PeoplePageLocators.FOLLOWER_NAME) # get all followers and put them in list

        for i in range(0, len(following_list)):                                       # we only care abou text so our list is all texts
            following_list[i] = following_list[i].text
        return following_list

    # gets photos from people that you follow
    def get_photos_from_following(self):
        following_photos = self.driver.find_elements(*PeoplePageLocators.PHOTO_BY)  # get photos by in list
        for i in range(0, len(following_photos)):
            following_photos[i] = following_photos[i].text                          # filter only text
        return following_photos

    def all_photos_from_following(self):
        mismatch = False
        following_by_photos = self.get_photos_from_following()  # get all owner of photos by people you follow
        following_by_photos = list(set(following_by_photos))    # remove duplicates from following by photos
        following_list = self.get_followers()                   # get following list
        for i in range(0, len(following_list)):                 # compare two lists if there's a mismatch then retrun false
            for j in range(0, len(following_by_photos)):
                if following_list[i] not in following_by_photos[j]:
                    if j == len(following_list)-1:
                        mismatch = True
                else:
                    break

        return not mismatch
    
    def follow_is_updated(self, newFollow): #grab all followers then look for the account name that you just have followed
        following_list = self.get_followers()
        for i in range(0, len(following_list)):
            if newFollow in following_list[i]:
                return True
            else: return False

