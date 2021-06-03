from selenium.webdriver.common.by import By

class PrintsPageLocators(object):
    GET_STARTED = (By.XPATH, "//button[@class='button accept-button']")
    CHOOSE_PHOTO = (By.XPATH, "//div[@class='content-container']/button")
    RESULT = (By.XPATH, "//div[@class='view photo-selector-view flickr-view-root-view']/div[4]/div/div/p[1]")