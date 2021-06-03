from selenium.webdriver.common.by import By
class HelpPlageLocator(object):
    SELECTED_ARTICLE = (By.XPATH, "//div[@class='category-item selected']")
    HELP_CATEGORIES = (By.CLASS_NAME, "category-item")
    ARTICLE_TITLE_OUTSIDE = (By.XPATH, "//div[@class='category-article-item']/a/div/span") #article title that appears on help page
    ARTICLE_TITLE = (By.XPATH, "//div[@class='article-page-title']") #article after we open it
    
    
    