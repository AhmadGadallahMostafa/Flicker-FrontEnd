from selenium.webdriver.common.by import By
class PhotoViewLocators(object):
    COMMENT_TEXTBOX = (By.NAME, "comment")
    COMMENT_BUTTON = (By.XPATH,"//button[@class='ui-button ui-button-cta comment']")
    COMMENT_TEXT = (By.XPATH, "//div[@class='comment-content']")
    EDIT_BUTTON = (By.XPATH, "//span[@class='comment-actions']//a")
    DONE_BUTTON = (By.XPATH, "//button[@class='ui-button ui-button-cta done-editing-comment no-outline']")
