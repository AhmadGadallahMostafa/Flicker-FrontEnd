class BasePage(object):
    driver = None

    def __init__(self, d):
        self.driver = d
