.. meta::
    :description:
        Introduction to hacking Krita.

.. metadata-placeholder

    :authors: - Michael Abrahams <miabraha@gmail.com>
              - Wolthera van Hövell tot Westerflier <griffinvalley@gmail.com>
    :license: GNU free documentation license 1.3 or later.
    
.. _intro_hacking_krita:

=============================
Introduction to Hacking Krita
=============================

.. contents::

Getting started with KDE Software
---------------------------------

Krita is a great place to start even if you are brand new to KDE development. We'd love to have you join!

KDE has undergone big changes since a major `2014 reorganization <https://www.kde.org/announcements/kde-frameworks-5.0.php>`_ . As a result, working with KDE software has never been easier.  Unfortunately, since the changes were so widespread, the documentation has not caught up at all.  If you are embarking on this journey, it would be very generous to share your discoveries with others and update pages.  (=

The KDE Techbase Wiki has instructions for new developers.  On top of basic tools like C++, git, and general notions such as building software libraries, some special tools that are particular to Krita are Qt, CMake, and KDE Frameworks.  It can be very helpful to get started by finding some of the articles discussing these tools and reading up. Here are some of the more useful pages to get you started:

* https://techbase.kde.org/Development
* https://techbase.kde.org/Contribute
* https://techbase.kde.org/Development/Git/Configuration
* https://techbase.kde.org/Development/Tutorials
* http://flossmanuals.net/kde-guide
* http://doc.qt.io/  Qt has some of the best documentation of any software library.

Building Krita
--------------

To get started, all you need to do is get a copy of Krita and build it! This is not all that much much different from building something off GitHub... except that Krita is a very large compared to most software.  There are :ref:`build guides <building_krita>` to get you going on various platforms, but of course Linux is easiest.

KDE Identity
------------

If you intend to be a regular contributor to Krita, the first thing you will want to do is register for a KDE Identity account.  This serves as your mostly-universal login to KDE code repositories and websites. 

https://identity.kde.org/

Contributing patches
--------------------
Patch review and issue tracking happens on `Phabricator <https://phabricator.kde.org/>`_. To log in, enter your KDE Identity in the LDAP login field. You can join the `Krita: Next <https://phabricator.kde.org/project/profile/8/>`_ and `Krita: Stable <https://phabricator.kde.org/project/profile/7/>`_ projects to receive alerts and track patch reviews, and you can install the `Krita Dashboard <https://phabricator.kde.org/dashboard/view/7/>`_ to get feeds when you log in.

If you are used to Github, the transition to Phabricator is not difficult, but it is slightly different.  The Techbase Wiki hosts an `introduction to Phabricator <https://techbase.kde.org/Development/Phabricator>`_ going over the basics. 

You can begin your first patch submission by clicking "Differential." Be sure to set the reviewer, or nobody will be alerted to your patch! For feature requests and most patches, choose `Krita: next` as the reviewer in the web interface.  If you use the Arcanist tool, add the hashtag ``#krita`` in the reviewers field.  For bug fixes, choose `Krita: stable`, or the arc hashtag ``#krita:_stable`` with an underscore.  (''note: ask boud to add a nicer hashtag for stable'')

Getting in touch
----------------

Other places to talk with devs are IRC, where a majority of talk happens, the mailing list, where formal announcements and meeting minutes are written, and the forums, generally more focused on responding to user posts. Wolthera put together a nice guide here.

https://forum.kde.org/viewtopic.php?f=288&t=125955

Debugging
---------

When you run a debug build of Krita, you may be surprised how little debug output you see. This is because most of Krita's debugging information is turned off by default.  The debug statements are grouped into categories such as ``dbgUI``, ``dbgKrita`` and so on.  The output categories are controlled by an environment variable ``QT_LOGGING_RULES``.

The list of Krita's debug categories is contained in ``kis_debug.h`` and ``main.cc``, and the rules for the environment variable are described in the `Qt reference for QLoggingCategory <http://doc.qt.io/qt-5/qloggingcategory.html>`_.

As an example, to enable most of Krita's debug output, you can run the following::
 export QT_LOGGING_RULES="krita*=true"; krita

Using the rule ``*=true`` will produce a firehose, if you want it.

Calligra and Krita
------------------

In October 2015, the Krita project separated from the rest of the Calligra office suite.  The new repository still clearly contains this history. Most source code files will have one of two prefixes. "Ko" stands for KOffice, the original name of Calligra office suite.  These files mostly comprise basic, lower-level libraries.  "Kis" stands for KImageShop, the original name of Krita. These files are where most of the painting-specific functionality is maintained.

Krita 2.9 stable is built from the Calligra repo.  Krita 3.x is built from the Krita repo.

Style guidelines
----------------

See ``HACKING`` in the codebase.

Development Philosophy
----------------------

Krita is nearly ten years old, consists of something like a million lines of code, and has had many individual contributors throughout the years. If you run into something in the code that doesn't make sense to you, it may very well not make sense to anyone.  Developing a codebase this large is an art form, you should feel confident in making risky changes even if you're not sure they'll work, you can always go back with ``git checkout -- *`` if you mess it up!
