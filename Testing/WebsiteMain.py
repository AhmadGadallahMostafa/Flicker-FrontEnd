from Pages.MessagePage import MessagePage
from Pages.ProfilePage import ProfilePage
import unittest
from selenium import webdriver
from Pages.MainPage import MainPage
from Pages.GroupsPage import GroupsPage
from Pages.HomePage import HomePage
from Pages.LoginPage import LoginPage
from Pages.LogoutPage import LogoutPage
from Pages.NotificationPage import NotificationPage
from Pages.PhotostreamPage import PhotoStreamPage
from Pages.PrintsPage import PrintsPage
from Pages.MainPage import MainPage
from Pages.SignupPage import SignupPage
from Pages.UploadPage import UploadPage
from Pages.SearchGroupPage import SearchGroupsPage
from Pages.SearchPeoplePage import SearchPeoplePage
from Pages.PeoplePage import PeoplePage
from Pages.ProfilePage import ProfilePage
from Pages.HelpPage import HelpPage
from Pages.MessagePage import MessagePage
from Pages.PhotoViewPage import PhotoViewPage
from selenium.webdriver.chrome.options import Options


import time


def login(driver, account):
    main_page = MainPage(driver)
    main_page.click_login_button()
    loginPage = LoginPage(driver)
    if (account == "k"):
        loginPage.email_text = "karimamr9@outlook.com"
        loginPage.go_next()
        loginPage.password_text = ",Q#8zUvxmSVJ-L^"
        loginPage.go_next()
        time.sleep(3)
    elif(account == "m"):
        loginPage.email_text = "mohamedamr866@gmail.com"
        loginPage.go_next()
        loginPage.password_text = "abcd12345678"
        loginPage.go_next()
        time.sleep(3)
    elif(account == "k2"):
        loginPage.email_text = "karim_nimo@yahoo.com"
        loginPage.go_next()
        loginPage.password_text = "AVZ7Xf!_SNRBQP2"
        loginPage.go_next()
        time.sleep(3)



class FlickerUpload(unittest.TestCase):
    @classmethod
    def setUpClass(inst):
        path = "chromedriver.exe"
        chrome_options = webdriver.ChromeOptions()
        chrome_options.headless = True
        chrome_options.add_argument('--window-size=1920,1080')
        inst.driver = webdriver.Chrome(
        executable_path=path, chrome_options=chrome_options)
        inst.driver.get("https://www.flickr.com/")
        inst.driver.maximize_window()
        login(inst.driver,"k")
        inst.titles = []
    
    def test_upload_page_title(self):
        home_page = HomePage(self.driver)
        self.driver.implicitly_wait(5)
        home_page.go_upload()
        upload_page = UploadPage(self.driver)
        self.assertTrue(upload_page.title_matches())

    def test_upload_picture(self):
        upload_age = UploadPage(self.driver)
        files = ["p1.jpg"]
        self.titles.append("p1")
        upload_age.choose_file(files)
        self.assertTrue(upload_age.confirm_upload())

    def test_upload_multiple_pictures(self):
        home_page = HomePage(self.driver)
        home_page.go_upload()
        upload_age = UploadPage(self.driver)
        files = ["p2.png", "p3.png", "p4.jpg"]
        self.titles.append("p2")
        self.titles.append("p3")
        self.titles.append("p4")
        self.titles.append("IMG_0009")
        upload_age.choose_file(files)
        self.assertTrue(upload_age.confirm_upload())

    # test edit photo info later

    def test_uploaded_picture_in_photostream(self):
        time.sleep(5)
        photo_stream_page = PhotoStreamPage(self.driver)
        self.assertTrue(photo_stream_page.picture_title_matches_upload(self.titles))
        
    def test_upload_invalid_type(self):
        upload_age = UploadPage(self.driver)
        files = ["invalid.pdf"]
        upload_age.choose_file(files)
        self.assertTrue(upload_age.detects_invalid())

    def test_upload_large_file(self):
        upload_age = UploadPage(self.driver)
        file = ["large.mp4"]
        upload_age.choose_file(file)
        self.assertTrue(upload_age.detects_invalid())
        upload_age.remove_invalid()

    def test_disabled_upload(self):
        upload_age = UploadPage(self.driver)
        time.sleep(5)
        with self.assertRaises(Exception) as context:
            upload_age.confirm_upload()

    def test_remove_invalid(self):
        upload_age = UploadPage(self.driver)
        upload_age.remove_invalid()
        self.assertFalse(upload_age.detects_invalid())

    def test_close_before_uploading(self):
        home = HomePage(self.driver)
        time.sleep(5)
        home.go_upload()
        upload_age = UploadPage(self.driver)
        upload_age.choose_file(["never.mkv"])
        upload_age.cancel_upload()
        self.setUpClass()
        self.driver.implicitly_wait(5)
        home = HomePage(self.driver)
        home.go_to_photostream()
        photo_stream_page = PhotoStreamPage(self.driver)
        title = ["never"]
        self.assertFalse(photo_stream_page.picture_title_matches_upload(title))

    @classmethod
    def tearDownClass(inst):
        inst.driver.close()


class FlickrLogin(unittest.TestCase):
    @classmethod
    def setUpClass(inst):
        path = "chromedriver.exe"
        chrome_options = webdriver.ChromeOptions()
        chrome_options.headless = True
        chrome_options.add_argument('--window-size=1920,1080')
        inst.driver = webdriver.Chrome(
        executable_path=path, chrome_options=chrome_options)
        inst.driver.get("https://www.flickr.com/")
        login = inst.driver.find_element_by_link_text("Log In")
        login.click()

    def test_wrong_email_format(self):
        login_page = LoginPage(self.driver)
        self.assertTrue(login_page.wrong_email_format())

    def test_no_email(self):
        login_page = LoginPage(self.driver)
        self.assertTrue(login_page.no_email())

    def test_right_email(self):
        login_page = LoginPage(self.driver)
        self.assertTrue(login_page.right_email())

    def test_no_password(self):
        login_page = LoginPage(self.driver)
        self.assertFalse(login_page.no_password())

    def test_wrong_password(self):
        login_page = LoginPage(self.driver)
        self.assertTrue(login_page.wrong_password())

    def test_wrong_email_and_wrong_password(self):
        login_page = LoginPage(self.driver)
        self.assertTrue(login_page.wrong_email_and_wrong_password())

    def test_right_email_and_right_password(self):
        login_page = LoginPage(self.driver)
        self.assertTrue(login_page.right_email_and_right_password())


    @classmethod
    def tearDownClass(inst):
        inst.driver.close()


class FlickerLogout(unittest.TestCase):
    @classmethod
    def setUpClass(inst):
        path = "chromedriver.exe"
        chrome_options = webdriver.ChromeOptions()
        chrome_options.headless = True
        chrome_options.add_argument('--window-size=1920,1080')
        inst.driver = webdriver.Chrome(
        executable_path=path, chrome_options=chrome_options)
        inst.driver.get("https://www.flickr.com/")
        login = inst.driver.find_element_by_link_text("Log In")
        login.click()
        email = inst.driver.find_element_by_id("login-email")
        email.send_keys("mohamedamr866@gmail.com")
        login = inst.driver.find_element_by_xpath("//button")
        login.click()
        time.sleep(3)
        password = inst.driver.find_element_by_id("login-password")
        password.send_keys("abcd12345678")
        signin = inst.driver.find_element_by_xpath("//button")
        signin.click()
        time.sleep(3)

    def test_logout(self):
        logout_page = LogoutPage(self.driver)
        self.assertTrue(logout_page.logout())

    @classmethod
    def tearDownClass(inst):
        inst.driver.close()


class FlickerSignup(unittest.TestCase):
    @classmethod
    def setUpClass(inst):
        path = "chromedriver.exe"
        chrome_options = webdriver.ChromeOptions()
        chrome_options.headless = True
        chrome_options.add_argument('--window-size=1920,1080')
        inst.driver = webdriver.Chrome(
        executable_path=path, chrome_options=chrome_options)
        inst.driver.get("https://www.flickr.com/")
        signup = inst.driver.find_element_by_link_text("Sign Up")
        signup.click()

    def test_firstname(self):
        signup_page = SignupPage(self.driver)
        self.assertTrue(signup_page.firstname())

    def test_lastname(self):
        signup_page = SignupPage(self.driver)
        self.assertTrue(signup_page.lastname())

    def test_age(self):
        signup_page = SignupPage(self.driver)
        self.assertTrue(signup_page.age())

    def test_email(self):
        signup_page = SignupPage(self.driver)
        self.assertTrue(signup_page.email())

    def test_password(self):
        signup_page = SignupPage(self.driver)
        self.assertTrue(signup_page.password())

    def test_valid_age(self):
        signup_page = SignupPage(self.driver)
        self.assertTrue(signup_page.valid_age())

    def test_valid_email(self):
        signup_page = SignupPage(self.driver)
        self.assertTrue(signup_page.valid_email())

    def test_valid_password(self):
        signup_page = SignupPage(self.driver)
        self.assertTrue(signup_page.valid_password())

    @classmethod
    def tearDownClass(inst):
        inst.driver.close()


class FlickrGroupsTest(unittest.TestCase):

    def setUp(self):
        path = "chromedriver.exe"
        chrome_options = webdriver.ChromeOptions()
        chrome_options.headless = True
        chrome_options.add_argument('--window-size=1920,1080')
        self.driver = webdriver.Chrome(
        executable_path=path, chrome_options=chrome_options)
        self.driver.get("https://www.flickr.com/")
        self.driver.maximize_window()

    #Groups page opened correctly and its title matches "group"
    def test_groups_page_title(self):
        login(self.driver, "k")
        home_page = HomePage(self.driver)
        home_page.go_to_groups()
        groups_page = GroupsPage(self.driver)
        self.assertTrue(groups_page.title_matches())

    #Create a group without entering a name 
    #We should detect a warning and the group isn't created
    def test_create_group_no_name(self):
        login(self.driver, "k")
        home_page = HomePage(self.driver)
        home_page.go_to_groups()
        groups_page = GroupsPage(self.driver)
        self.assertTrue(groups_page.create_group_no_name())
    
    #Create a group 
    #We should get a new group page with title being name that is named inside create_group
    def test_create_group(self):
        login(self.driver, "k")
        home_page = HomePage(self.driver)
        home_page.go_to_groups()
        groups_page = GroupsPage(self.driver)
        self.assertTrue(groups_page.create_group())

    #Try to create a group with the same name of the group we just created
    # We should get a warning that this group already exsits
    def test_create_group_that_exists(self):
        login(self.driver, "k")
        home_page = HomePage(self.driver)
        home_page.go_to_groups()
        groups_page = GroupsPage(self.driver)
        self.assertTrue(groups_page.create_group_that_exists())

    #Test 18+ group creation
    #we should get a page with 18+ warning
    def test_create_18_group(self):
        login(self.driver, "k")
        home_page = HomePage(self.driver)
        home_page.go_to_groups()
        groups_page = GroupsPage(self.driver)
        self.assertTrue(groups_page.create_18_age_group())

    #add a photo to a group 
    #we verify title of the photo matches 
    def test_add_photo_to_group(self):
        login(self.driver, "k")
        home_page = HomePage(self.driver)
        home_page.go_to_groups()
        groups_page = GroupsPage(self.driver)
        home_page.go_to_groups()
        self.assertTrue(groups_page.add_photo_to_group())

    #check that a group turns up when searched for
    def test_group_is_created(self):
        login(self.driver,"m")
        home_page = HomePage(self.driver)
        home_page.search_group("TESTGROUP-SE-7")
        search_group = SearchGroupsPage(self.driver)
        search_group.open_group()
        group_page = GroupsPage(self.driver)
        self.assertTrue(group_page.group_name_matches("TESTGROUP-SE-7"))

    #try to join a group
    #then open group list and verify that it exists
    def test_join_group(self):
        login(self.driver,"m")
        home_page = HomePage(self.driver)
        home_page.search_group("TESTGROUP-SE-7")
        search_group = SearchGroupsPage(self.driver)
        search_group.open_group()
        group_page = GroupsPage(self.driver)
        group_page.join_group()#joins opened group and waits 5s
        home_page.go_to_groups()
        self.assertTrue(group_page.group_in_joined_groups("TESTGROUP-SE-7"))

    def tearDown(self):
        self.driver.close()
    

class FlickrNotifications(unittest.TestCase):
    
    @classmethod
    def setUpClass(inst):
        #first send open second account and send notification to main account
        path = "chromedriver.exe"
        chrome_options = webdriver.ChromeOptions()
        chrome_options.headless = True
        chrome_options.add_argument('--window-size=1920,1080')
        inst.driver = webdriver.Chrome(
        executable_path=path, chrome_options=chrome_options)
        inst.driver.get("https://www.flickr.com/")
        inst.driver.maximize_window()
        login(inst.driver, "k2")
        home_page = HomePage(inst.driver)
        time.sleep(5)
        home_page.send_notification()       #follows account karimamr9 to send a notification
        inst.driver.close()
        path = "chromedriver.exe"
        chrome_options = webdriver.ChromeOptions()
        chrome_options.headless = True
        chrome_options.add_argument('--window-size=1920,1080')
        inst.driver = webdriver.Chrome(
        executable_path=path, chrome_options=chrome_options)
        inst.driver.get("https://www.flickr.com/")
        inst.driver.maximize_window()
        login(inst.driver, "k")             #opens main account

    #check that the follow sent a notification and that it appeared correctly
    def test_push(self): 
        home_page = HomePage(self.driver)
        self.assertTrue(home_page.check_push_notifications())

    #check last follow is in notification history
    def test_notifications(self):
        notification_page = NotificationPage(self.driver)
        self.assertTrue(notification_page.check_last_notficiation())

    @classmethod
    def tearDownClass(inst):
        inst.driver.close()


class FlikcrPrints(unittest.TestCase):
    @classmethod
    def setUpClass(inst):
        path = "chromedriver.exe"
        chrome_options = webdriver.ChromeOptions()
        chrome_options.headless = True
        chrome_options.add_argument('--window-size=1920,1080')
        inst.driver = webdriver.Chrome(
        executable_path=path, chrome_options=chrome_options)
        inst.driver.get("https://www.flickr.com/")
        inst.driver.maximize_window()
        login(inst.driver,"k")
        home_page = HomePage(inst.driver)
        time.sleep(5)
        home_page.go_to_prints()
    
    def test_prints_title(self):
        prints_page = PrintsPage(self.driver)
        self.assertTrue(prints_page.title_matches())

    def test_choose_photo(self):
        prints_page = PrintsPage(self.driver)
        self.assertTrue(prints_page.choose_photo())

    @classmethod
    def tearDownClass(inst):
        inst.driver.close()

class FlickrViewPhoto(unittest.TestCase):
    @classmethod
    def setUpClass(inst):
        path = "chromedriver.exe"
        chrome_options = webdriver.ChromeOptions()
        chrome_options.headless = True
        chrome_options.add_argument('--window-size=1920,1080')
        inst.driver = webdriver.Chrome(
        executable_path=path, chrome_options=chrome_options)
        inst.driver.get("https://www.flickr.com/")
        inst.driver.maximize_window()
        login(inst.driver, "m")
        home_page = HomePage(inst.driver)
        time.sleep(5)
        home_page.go_to_photostream()

    def test_opened_photo(self):
        photo_stream_page = PhotoStreamPage(self.driver)
        self.assertTrue(photo_stream_page.opened_photo())

    @classmethod
    def tearDownClass(inst):
        inst.driver.close()


class FlickrComments(unittest.TestCase):
    @classmethod
    def setUpClass(inst):
        path = "chromedriver.exe"
        chrome_options = webdriver.ChromeOptions()
        chrome_options.headless = True
        chrome_options.add_argument('--window-size=1920,1080')
        inst.driver = webdriver.Chrome(
        executable_path=path, chrome_options=chrome_options)
        inst.driver.get("https://www.flickr.com/")
        inst.driver.maximize_window()
        login(inst.driver, "m")
        time.sleep(5)

    def test_comment(self):
        home_page = HomePage(self.driver)
        home_page.search_people("karimamr9")
        search_people = SearchPeoplePage(self.driver)
        search_people.open_profile()
        photo_stream_page = PhotoStreamPage(self.driver)
        photo_stream_page.open_photo()
        photo_view_page = PhotoViewPage(self.driver)
        photo_view_page.comment()
        self.driver.close()
        path = "chromedriver.exe"
        chrome_options = webdriver.ChromeOptions()
        chrome_options.headless = True
        chrome_options.add_argument('--window-size=1920,1080')
        self.driver.get("https://www.flickr.com/")
        self.driver.maximize_window()
        login(self.driver, "k")
        time.sleep(5)
        home_page = HomePage(self.driver)
        home_page.go_to_photostream()
        photo_stream_page = PhotoStreamPage(self.driver)
        photo_stream_page.open_photo()
        photo_view_page = PhotoViewPage(self.driver)
        self.assertTrue(photo_view_page.check_comment())

    def tearDown(self):
        self.driver.close()


class FlickrPeople(unittest.TestCase):
    def setUp(self):
        path = "chromedriver.exe"
        chrome_options = webdriver.ChromeOptions()
        chrome_options.headless = True
        chrome_options.add_argument('--window-size=1920,1080')
        self.driver = webdriver.Chrome(
        executable_path=path, chrome_options=chrome_options)
        self.driver.get("https://www.flickr.com/")
        self.driver.maximize_window()
    
    #People page loads and its title is correct
    def test_people_title(self):
        login(self.driver,"k")
        home_page = HomePage(self.driver)
        home_page.go_to_people()
        people_page = PeoplePage(self.driver)
        self.assertTrue(people_page.page_title_matches())
    
    #test all photos are from people that you follow
    #no photos from an account that you don't follow should appear
    def test_all_photos_from_follwing(self):
        login(self.driver,"k")
        home_page = HomePage(self.driver)
        home_page.go_to_people()
        people_page = PeoplePage(self.driver)
        self.assertTrue(people_page.all_photos_from_following())
    
    def test_following_list_updates(self):
        login(self.driver,"k")                          #login to karim's account and search for a profile
        home_page = HomePage(self.driver)
        home_page.search_people("Abdallah Shedid")
        search_people = SearchPeoplePage(self.driver)
        search_people.open_profile()                    #open first matching result
        profile_page = ProfilePage(self.driver)
        profile_page.follow_opened_profile()            #follow this account
        home_page.go_to_people()
        people_page = PeoplePage(self.driver)           #redirect to people see if the following list is updated
        self.assertTrue(people_page.follow_is_updated("Abdallah Shedid"))

    def tearDown(self):
        self.driver.close()
    

class FlikcrHelp(unittest.TestCase):
    def setUp(self):
        option = Options()
        path = "chromedriver.exe"
        chrome_options = webdriver.ChromeOptions()
        chrome_options.headless = True
        chrome_options.add_argument('--window-size=1920,1080')
        self.driver = webdriver.Chrome(
        executable_path=path, chrome_options=chrome_options)
        self.driver.get("https://www.flickr.com/")
        self.driver.maximize_window()

    #help page is loaded and its tilte is Help
    def test_help_title(self):
        login(self.driver, "k")
        home_page = HomePage(self.driver)
        time.sleep(5)
        home_page.go_to_help()
        help_page = HelpPage(self.driver)
        self.assertTrue(help_page.title_matches_help())
    
    #help page categories are appearing correctly (in HelpPage=> categories_appearing() we specify what categories we are expecting )
    def test_help_all_categories(self):
        login(self.driver, "k")
        home_page = HomePage(self.driver)
        time.sleep(5)
        home_page.go_to_help()
        help_page = HelpPage(self.driver)
        self.assertTrue(help_page.categories_appearing())

    #help articles are consistent with their titles and they are all accessable
    #any article causing error would be printed in report after test
    def test_all_articles_content(self):
        login(self.driver, "k")
        home_page = HomePage(self.driver)
        time.sleep(5)
        home_page.go_to_help()
        help_page = HelpPage(self.driver)
        errors = help_page.articles_content_match()
        self.assertEqual(len(errors), 0)
        if len(errors) != 0:
            print("errors in: ", errors)
        


    def tearDown(self):
        self.driver.close()


class FlickrMsg(unittest.TestCase):
    def setUp(self):
        path = "chromedriver.exe"
        chrome_options = webdriver.ChromeOptions()
        chrome_options.headless = True
        chrome_options.add_argument('--window-size=1920,1080')
        self.driver = webdriver.Chrome(
        executable_path=path, chrome_options=chrome_options)
        self.driver.get("https://www.flickr.com/")
        self.driver.maximize_window()
    
    def test_send_msg(self):
        login(self.driver, "m")
        home_page = HomePage(self.driver)
        home_page.search_people("karimamr9")
        search_people = SearchPeoplePage(self.driver)
        search_people.open_profile()
        profile_page = ProfilePage(self.driver)
        profile_page.send_message()
        msg_page = MessagePage(self.driver)
        self.assertTrue(msg_page.send_message())
    
    def test_receive_msg(self):
        login(self.driver, "k")
        home_page = HomePage(self.driver)
        home_page.open_notifications()
        home_page.open_msg()
        msg_page = MessagePage(self.driver)
        self.assertTrue(msg_page.receive_message())
    
    def tearDown(self):
        self.driver.close()



if __name__ == "__main__":
    unittest.main()


