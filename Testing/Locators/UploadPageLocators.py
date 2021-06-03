from selenium.webdriver.common.by import By
class UploadPageLocators(object):
    CHOOSE_PHOTO = (By.ID, "button-add-photos")
    DIALOG_BOX = (By.ID, "editr-publish-dialog")
    PUBLISH = (By.ID, "action-publish")
    CONFRIM_PUBLISH = (By.ID, "confirm-publish")
    USER_MESSAGING = (By.ID, "user-messaging")
    REMOVE_FILE_BUTTON = (By.ID, "action-remove-errors")
    PHOTOSTREAM_LINK = (By.CLASS_NAME, "gn-link")
    UPLOAD_BOX = (By.CLASS_NAME, "selected-wrapper")
