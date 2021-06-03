import unittest
import WebsiteMain
import HtmlTestRunner


Signup_test_suite = unittest.TestSuite()

# Test cases are added manually to ensure their execution order

Signup_test_suite.addTest(WebsiteMain.FlickerSignup('test_firstname'))
Signup_test_suite.addTest(WebsiteMain.FlickerSignup('test_lastname'))
Signup_test_suite.addTest(WebsiteMain.FlickerSignup('test_age'))
Signup_test_suite.addTest(WebsiteMain.FlickerSignup('test_email'))
Signup_test_suite.addTest(WebsiteMain.FlickerSignup('test_password'))
Signup_test_suite.addTest(WebsiteMain.FlickerSignup('test_valid_age'))
Signup_test_suite.addTest(WebsiteMain.FlickerSignup('test_valid_email'))
Signup_test_suite.addTest(WebsiteMain.FlickerSignup('test_valid_password'))

#runner = HtmlTestRunner.HTMLTestRunner(report_name="Flicker Signup tests",report_title="Signup test", combine_reports = True).run(Signup_test_suite)

# ===========================================================================================================================

#===========================================================================================================================


Login_test_suite = unittest.TestSuite()

Login_test_suite.addTest(WebsiteMain.FlickrLogin('test_wrong_email_format'))
Login_test_suite.addTest(WebsiteMain.FlickrLogin('test_no_email'))
Login_test_suite.addTest(WebsiteMain.FlickrLogin('test_right_email'))
Login_test_suite.addTest(WebsiteMain.FlickrLogin('test_no_password'))
Login_test_suite.addTest(WebsiteMain.FlickrLogin('test_wrong_password'))
Login_test_suite.addTest(WebsiteMain.FlickrLogin(
    'test_wrong_email_and_wrong_password'))
Login_test_suite.addTest(WebsiteMain.FlickrLogin(
    'test_right_email_and_right_password'))

#runner = HtmlTestRunner.HTMLTestRunner(report_name="Flicker Login tests",report_title="Login test", combine_reports = True).run(Login_test_suite)

# ===========================================================================================================================
Logout_test_suite = unittest.TestSuite()

Logout_test_suite.addTest(WebsiteMain.FlickerLogout('test_logout'))

#runner = HtmlTestRunner.HTMLTestRunner(report_name="Flicker Logout tests",report_title="Logout test", combine_reports = True).run(Logout_test_suite)

# ===========================================================================================================================

#===========================================================================================================================

upload_test_suite = unittest.TestSuite()

# Test cases are added manually to ensure their execution order

upload_test_suite.addTest(WebsiteMain.FlickerUpload('test_upload_page_title'))
upload_test_suite.addTest(WebsiteMain.FlickerUpload('test_upload_large_file'))
upload_test_suite.addTest(
    WebsiteMain.FlickerUpload('test_upload_invalid_type'))
upload_test_suite.addTest(WebsiteMain.FlickerUpload('test_disabled_upload'))
upload_test_suite.addTest(WebsiteMain.FlickerUpload('test_remove_invalid'))
upload_test_suite.addTest(WebsiteMain.FlickerUpload('test_upload_picture'))
upload_test_suite.addTest(WebsiteMain.FlickerUpload(
    'test_upload_multiple_pictures'))
upload_test_suite.addTest(WebsiteMain.FlickerUpload(
    'test_uploaded_picture_in_photostream'))
upload_test_suite.addTest(
    WebsiteMain.FlickerUpload('test_close_before_uploading'))


# configure HTMLTestRunner options
#runner = HtmlTestRunner.HTMLTestRunner(report_name="Flicker  Upload",report_title="Upload test", combine_reports=True).run(upload_test_suite)

# ===========================================================================================================================

#===========================================================================================================================

groups_test_suite = unittest.TestSuite()

# Test cases are added manually to ensure their execution order

groups_test_suite.addTest(
    WebsiteMain.FlickrGroupsTest("test_groups_page_title"))
groups_test_suite.addTest(
    WebsiteMain.FlickrGroupsTest("test_create_group_no_name"))
groups_test_suite.addTest(WebsiteMain.FlickrGroupsTest("test_create_group"))
groups_test_suite.addTest(
    WebsiteMain.FlickrGroupsTest("test_add_photo_to_group"))
groups_test_suite.addTest(WebsiteMain.FlickrGroupsTest(
    "test_create_group_that_exists"))
groups_test_suite.addTest(WebsiteMain.FlickrGroupsTest("test_create_18_group"))
groups_test_suite.addTest(
    WebsiteMain.FlickrGroupsTest("test_group_is_created"))
groups_test_suite.addTest(WebsiteMain.FlickrGroupsTest("test_join_group"))


# configure HTMLTestRunner options
#runner = HtmlTestRunner.HTMLTestRunner(report_name="Flicker group test",report_title="Groups test",combine_reports=True).run(groups_test_suite)

# ===========================================================================================================================

#===========================================================================================================================

notification_test_suite = unittest.TestSuite()

# Test cases are added manually to ensure their execution order
notification_test_suite.addTest(WebsiteMain.FlickrNotifications("test_push"))
notification_test_suite.addTest(
    WebsiteMain.FlickrNotifications("test_notifications"))

# configure HTMLTestRunner options
#runner = HtmlTestRunner.HTMLTestRunner(report_name="Flicker notification test",report_title="Notifications test",combine_reports=True).run(notification_test_suite)

# ===========================================================================================================================

#===========================================================================================================================

prints_test_suite = unittest.TestSuite()

prints_test_suite.addTest(WebsiteMain.FlikcrPrints('test_prints_title'))
prints_test_suite.addTest(WebsiteMain.FlikcrPrints("test_choose_photo"))

#runner = HtmlTestRunner.HTMLTestRunner(report_name="Prints",report_title="Prints test",combine_reports=True).run(prints_test_suite)


# ===========================================================================================================================
people_test_suite = unittest.TestSuite()

people_test_suite.addTest(WebsiteMain.FlickrPeople("test_people_title"))
people_test_suite.addTest(WebsiteMain.FlickrPeople("test_all_photos_from_follwing"))
people_test_suite.addTest(WebsiteMain.FlickrPeople("test_following_list_updates"))

#runner = HtmlTestRunner.HTMLTestRunner(report_name="People",report_title="People test",combine_reports=True).run(people_test_suite)

#==============================================================================================================================
help_test_suite = unittest.TestSuite()

help_test_suite.addTest((WebsiteMain.FlikcrHelp("test_all_articles_content")))

#runner = HtmlTestRunner.HTMLTestRunner(report_name="Help Page",report_title="Help test",combine_reports=True).run(help_test_suite)

#===========================================================================================================================
view_photo_test_suite = unittest.TestSuite()
view_photo_test_suite.addTest(WebsiteMain.FlickrViewPhoto('test_opened_photo'))
#runner = HtmlTestRunner.HTMLTestRunner(report_name="Flicker view photo tests",report_title="View photo test", combine_reports = True).run(view_photo_test_suite)
#===========================================================================================================================
comment_test_suite = unittest.TestSuite()
comment_test_suite.addTest(WebsiteMain.FlickrComments('test_comment'))
#comment_test_suite.addTest(WebsiteMain.FlickrComments('test_edit_comment'))
runner = HtmlTestRunner.HTMLTestRunner(report_name="Flicker comment tests",report_title="Comment test", combine_reports = True).run(comment_test_suite)

msg_test_suite = unittest.TestSuite()

msg_test_suite.addTest((WebsiteMain.FlickrMsg("test_send_msg")))
msg_test_suite.addTest((WebsiteMain.FlickrMsg("test_receive_msg")))

runner = HtmlTestRunner.HTMLTestRunner(report_name="MSG Page",report_title="MSG test",combine_reports=True).run(msg_test_suite)

