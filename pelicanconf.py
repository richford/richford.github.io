#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals
from datetime import datetime
import os

AUTHOR = 'Adam Richie-Halford'
SITENAME = 'Adam\nRichie-Halford'
SITEURL = 'http://localhost:8000'
THEME = '/Users/richford/Documents/website/pelican-subtle'
USER_LOGO_URL = '/images/site_logo.jpg'
PAGE_ORDER_BY = 'sortorder'
LOAD_CONTENT_CACHE = False
MANGLE_EMAILS = True
PLUGIN_PATHS = [os.path.join(THEME, 'plugins')]
PLUGINS = ['assets']


STATIC_PATHS = ['images', "files"]
EXTRA_PATH_METADATA = {
    'files/favicon.ico': {'path': 'favicon.ico'},
}

PATH = 'content'

TIMEZONE = 'America/Los_Angeles'

DEFAULT_LANG = 'en'

COPYRIGHT_NAME = 'Adam Richie-Halford'
COPYRIGHT_YEAR = datetime.now().year
CC_LICENSE = {
    'name': 'Creative Commons Attribution-ShareAlike',
    'version': '4.0',
    'slug': 'by-sa'
}

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = ()

# Social widget
SOCIAL = (
        ('envelope', 'mailto:richiehalford@gmail.com'),
        ('github', 'https://github.com/richford'),
        ('linkedin', 'https://www.linkedin.com/in/richiehalford/'),
        ('mastodon', 'https://scholar.social/@richford'),
        ('twitter', 'https://twitter.com/richiehalford'),
)

MAIN_MENU = True
DISPLAY_CATEGORIES_ON_MENU = False
DISPLAY_PAGES_ON_MENU = True

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True
