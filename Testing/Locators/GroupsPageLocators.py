from selenium.webdriver.common.by import By

class GroupsPageLocators(object):
    CREATE_GROUP = (By.PARTIAL_LINK_TEXT, "Create Group")
    NEXT = (By.XPATH, "//button[@class='mini action button-action']")
    ERROR_TEXT = (By.XPATH, "//div[@class='error-message title-error']")
    GROUP_NAME_TEXT = (By.XPATH, "//input[@class='input-field group-name']")
    AGE_18_TEXT = (By.PARTIAL_LINK_TEXT, "This group is 18+")
    ADULT_GROUP_SELECTOR = (By.XPATH, "//label[@for='adult-group']/div")
    GROUP_MESSAGE = (By.XPATH, "//div[@role='main']")
    PHOTO_POOL = (By.ID, "pool")
    GROUP_LINK = (By.XPATH, "//div[@class='view sortable-table-view']/div/table/tbody/tr[2]/td[1]/a")
    ADD_PHOTO = (By.PARTIAL_LINK_TEXT, "Add photo")
    PHOTO_BOX = (By.XPATH, "//div[@id='pp-source']/ul/li[1]")
    PHOTO_BOX_SELECTED = (By.XPATH, "//div[@id='pp-source']/ul/li[1]")
    ADD_TO_GROUP = (By.ID, "pp-add-photos")
    PHOTO_UPLOADED_TITLE = (By.CLASS_NAME, "interaction-bar")
    JOIN_GROUP_BUTTON = (By.XPATH, "//div[@class='view join-group-view']/button")
    JOINED_GROUPS = (By.XPATH, "//td[@class='show-after-locked ']")
