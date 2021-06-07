from selenium.webdriver.common.by import By
class SearchGroupsPageLocators(object):
    SEARCH_GROUPS = (By.PARTIAL_LINK_TEXT, "Groups")
    GROUP_BOX = (By.XPATH, "//a[@class='click-anywhere']")
    JOIN_BUTTON = (By.XPATH, "//button[@class='join ']")