from selenium.webdriver.common.by import By

class PeoplePageLocators:
    FOLLOWERS = (By.XPATH, "//p[@id='contacts-subnav']/span/span[3]")#locator of tab that contains list of people that you follow
    FOLLOWER_NAME = (By.XPATH, "//td[@class='contact-list-name']/span") #locator for name of account
    PHOTO_BY = (By.XPATH, "//span[@class='attribution']/a")