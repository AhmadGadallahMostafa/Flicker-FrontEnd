from Locators.MessagePageLocators import MessagePageLocators
from Pages.BasePage import BasePage
import time


class MessagePage(BasePage):
    #send a message from flickr
    
    def send_message(self):
        subject = "this is a test message"
        message = "content of the message that was sent for testing purposes"
        subject_text = self.driver.find_element(*MessagePageLocators.SUBJECT)       #we write subject
        subject_text.clear()                                                        #we clear first incase
        subject_text.send_keys(subject)
        message_text = self.driver.find_element(*MessagePageLocators.MESSAGE_TEXT)  #we write message
        message_text.clear()                                                        #we clear first incase
        message_text.send_keys(message)  
        send = self.driver.find_element(*MessagePageLocators.SEND)      
        send.click() 
        time.sleep(2)      
        sent_tab = self.driver.find_element(*MessagePageLocators.SENT_TAB)
        sent_tab.click()
        time.sleep(2)
        last_mail = self.driver.find_element(*MessagePageLocators.LAST_MAIL).text   #verify that email shows
        return subject in last_mail

    def receive_message(self):
        subject = "this is a test message"
        message = "content of the message that was sent for testing purposes"
        subject_recived = self.driver.find_element(*MessagePageLocators.SUBJECT_RECIEVED)
        subject_text = subject_recived.text
        msg_recived = self.driver.find_element(*MessagePageLocators.MSG_RECEIVED)
        msg_text = msg_recived.text
        return subject in subject_text and message in msg_text
