from selenium.webdriver.common.by import By
class SearchPeoplePageLocators(object):
    SEARCH_PEOPLE = (By.PARTIAL_LINK_TEXT, "People")
    PROFILE_BOX = (By.XPATH, "//a[@class='click-anywhere']")
    FOLLOW_BUTTON = (By.XPATH, "//button[@class='follow ']")

