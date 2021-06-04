from Pages.BasePage import BasePage
from Locators.HelpPageLocators import HelpPlageLocator
import time
import collections


class HelpPage(BasePage):
    def title_matches_help(self):
        result = self.driver.title
        return "Help" in result

    # we get all articles that appear in help page
    def get_categories_names(self):
        first_category = self.driver.find_element(
            *HelpPlageLocator.SELECTED_ARTICLE).text
        categories = self.driver.find_elements(
            *HelpPlageLocator.HELP_CATEGORIES)
        for i in range(0, len(categories)):
            categories[i] = categories[i].text
        categories = [first_category] + categories
        return categories

    def categories_appearing(self):
        categories_from_page = self.get_categories_names()
        categories = ["Get Started", "Billing", "Flickr Prints", "Manage Content",
                      "Flikc App", "Sharing and Social", "Settings and Perferences", "Upload and Download Photos",
                      "Trust and Saftey", "Privacy and Security", "Third-Party Apps", "FAQs"]
        if collections.Counter(categories_from_page) == collections.Counter(categories):
            return True
        else:
            return False

    def test(self):
        time.sleep(5)
        a = self.driver.find_element(*HelpPlageLocator.ARTICLE_TITLE_OUTSIDE)
        print(a.text)

    #go through all articles in help and make sure they are all correct
    def articles_content_match(self):
        errors_in_article = []
        # for each category open all related articles and make sure content matches
        categories = self.driver.find_elements(
            *HelpPlageLocator.HELP_CATEGORIES)

        for i in range(0, len(categories)): #i loop for each category

            
            categories = self.driver.find_elements(                 #gets categories in list
                *HelpPlageLocator.HELP_CATEGORIES)
            categories[i].click()
            articles_in_category = self.driver.find_elements(       #get articles in a single category
                *HelpPlageLocator.ARTICLE_TITLE_OUTSIDE)
            article_titles = []

            for m in range(0, len(articles_in_category)):           #filters title names from each article
                article_titles.append(articles_in_category[m].text)

            for j in range(0, len(articles_in_category)):           #j loop for each article in a single category
                categories = self.driver.find_elements(             #we have to find elements again as elements become stale after existing from article
                    *HelpPlageLocator.HELP_CATEGORIES)
                categories[i].click()
                articles_in_category = self.driver.find_elements(
                    *HelpPlageLocator.ARTICLE_TITLE_OUTSIDE)
                articles_in_category[j].click()
                time.sleep(1)
                title_in_page = self.driver.find_element(           # we get title of the article opened
                    *HelpPlageLocator.ARTICLE_TITLE).text                             
                if article_titles[j] not in title_in_page:          # we check if both titles are the same
                    error_in_article = article_titles[j]            # if an article doesn't match its title we get its name
                    errors_in_article.append(error_in_article)
         
                self.driver.get("https://help.flickr.com/")           # if article matches its title we go back to go to the next article
                time.sleep(1)
                result = self.driver.title
                if "Help" not in result:                              # after we go to help page if for any reason help page isnt loaded
                    error_in_article = "Help Page didn't load"        # we get error
                    errors_in_article.append(error_in_article)
        return errors_in_article
