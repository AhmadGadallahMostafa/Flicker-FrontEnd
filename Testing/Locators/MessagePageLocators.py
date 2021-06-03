from selenium.webdriver.common.by import By
class MessagePageLocators(object):
    SUBJECT = (By.ID, "subject")
    MESSAGE_TEXT = (By.ID, "message")
    SEND = (By.XPATH, "//div[@id='preview-or-send']//input[2]")
    SENT_TAB = (By.XPATH, "//h3[@class='Tab']//span[4]")
    LAST_MAIL = (By.XPATH, "//table[@id='mail']//tr[2]")
    SUBJECT_RECIEVED = (By.XPATH, "//tr[2]")
    MSG_RECEIVED = (By.XPATH, "//tr[3]")

