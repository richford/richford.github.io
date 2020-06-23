#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals
from datetime import datetime
import os

AUTHOR = 'Adam Richie-Halford'
SITENAME = 'Adam\nRichie-Halford'
SITEURL = 'http://localhost:8000'
THEME = '../pelican-subtle'
USER_LOGO_URL = '/images/site_logo.jpg'
PAGE_ORDER_BY = 'sortorder'
LOAD_CONTENT_CACHE = False
MANGLE_EMAILS = True
PLUGIN_PATHS = [
    os.path.join(THEME, 'plugins'),
    '../pelican-plugins/',
]

PLUGINS = ['assets', 'photos']

MARKDOWN = {
    'extension_configs': {
        'markdown.extensions.codehilite': {
            'css_class': 'highlight',
        },
        'markdown.extensions.extra': {},
        # optionally, more extensions,
        # e.g. markdown.extensions.meta
    },
    'output_format': 'html5',
}

TYPOGRIFY = True

# Photo options
PHOTO_LIBRARY = '/Users/richford/Documents/website/richiehalford.com/content/images/'
PHOTO_GALLERY = (4096, 4096, 100)
PHOTO_ARTICLE = (768, 768, 80)
PHOTO_THUMB = (512, 512, 60)
PHOTO_EXIF_REMOVE_GPS = True
PHOTO_EXIF_COPYRIGHT = 'CC-BY-NC-ND'

READERS = {'html': None}
STATIC_PATHS = ['images', 'files', 'extra/CNAME', 'extra/cloudknot.html']
EXTRA_PATH_METADATA = {
    'files/favicon.ico': {'path': 'favicon.ico'},
    'extra/CNAME': {'path': 'CNAME'},
    'extra/cloudknot.html': {'path': 'cloudknot.html'},
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
# LINKS = (('Pelican', 'http://getpelican.com/'),
#          ('Python.org', 'http://python.org/'),
#          ('Jinja2', 'http://jinja.pocoo.org/'),
#          ('You can modify those links in your config file', '#'),)
LINKS = ()

# Social widget
SOCIAL = (
    ('envelope', 'mailto:richiehalford@gmail.com'),
    ('github', 'https://github.com/richford'),
    ('linkedin', 'https://www.linkedin.com/in/richiehalford/'),
    ('mastadon', 'https://scholar.social/@richford'),
    ('twitter', 'https://twitter.com/richiehalford'),
)

MAIN_MENU = True
DISPLAY_CATEGORIES_ON_MENU = True
DISPLAY_PAGES_ON_MENU = True

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True
