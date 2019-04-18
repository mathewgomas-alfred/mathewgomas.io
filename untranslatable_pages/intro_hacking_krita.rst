.. meta::
    :description:
        Introduction to hacking Krita.

.. metadata-placeholder

    :authors: - Michael Abrahams <miabraha@gmail.com>
              - Wolthera van Hövell tot Westerflier <griffinvalley@gmail.com>
              - Boudewijn Rempt <boud@valdyas.org>
    :license: GNU free documentation license 1.3 or later.

.. _gitlab : https://invent.kde.org
.. _repository : https://invent.kde.org/kde/krita
.. _bugzilla : https://bugs.kde.org/
.. _Krita developer IRC : https://krita.org/irc/
.. _API guide : https://api.kde.org/extragear-api/graphics-apidocs/krita/html/index.html

.. _intro_hacking_krita:

=============================
Introduction to Hacking Krita
=============================

.. contents::

Getting started with KDE Software
---------------------------------

Krita is a great place to start even if you are brand new to KDE development. We'd love to have you join! You'll be able to work on one of the coolest and fastest-growing open source painting programs out there. Krita also benefits from a modular architecture and the use of the KDE Frameworks and Qt libraries, which makes it easier to focus on new features instead of reinventing the wheel. And it makes coding fun! To work on Krita, you have to use C++ and Qt. It's a good way to learn both, actually!

KDE has undergone big changes since a major `2014 reorganization <https://www.kde.org/announcements/kde-frameworks-5.0.php>`_ . As a result, working with KDE software has never been easier.  Unfortunately, since the changes were so widespread, the documentation has not caught up at all.  If you are embarking on this journey, it would be very generous to share your discoveries with others and update pages.  (=

Getting Started
---------------
Here's some links to get your started.

#. Most important, the `repository`_. There is a `mirror on Github <https://github.com/KDE/krita>`_, however note that we do not use Github for development, do not create pull requests or file issues on github.
#. KDE Developer wiki - The KDE Techbase Wiki has instructions for new developers.  On top of basic tools like C++, git, and general notions such as building software libraries, some special tools that are particular to Krita are Qt, CMake, and KDE Frameworks.  It can be very helpful to get started by finding some of the articles discussing these tools and reading up. Here are some of the more useful pages to get you started:

    * https://techbase.kde.org/Development
    * https://techbase.kde.org/Contribute
    * https://techbase.kde.org/Development/Git/Configuration
    * https://techbase.kde.org/Development/Tutorials
    * http://flossmanuals.net/kde-guide
    * http://doc.qt.io/  Qt has some of the best documentation of any software library.

#. Set up your development environment and build Krita!
#. Find a few bugs to fix in `KDE's Bugtracking system <https://bugs.kde.org/>`_. It's often a good idea to get some experience with the code through fixing bugs, to get familiar with the development process without being overwhelmed. Though there's nothing against working on that cool feature that scratches your itch!
#. If you intend to be a regular contributor to Krita, even just for bugreports and feature discussion, the first thing you will want to do is register for a `KDE Identity account <https://identity.kde.org/>`_.  This serves as your mostly-universal login to KDE code repositories and websites. 

Building Krita
--------------

.. image:: /images/en/cat_guide/Krita-building_for-cats_intro_by-deevad.jpg

To get started, all you need to do is get a copy of Krita and build it! This is not all that much much different from building something off GitHub... except that Krita is a very large compared to most software.  There are :ref:`build guides <building_krita>` to get you going on various platforms, but of course Linux is easiest.

Working with the Krita codebase
-------------------------------

Here's some pointers for working with our codebase.

Architecture
    The code base changes all the time with Krita, we're not afraid of big refactorings, so there is no up to date documentation on the code architecture. There have been some written in the past, but they quickly became outdated and of little use. There is a fairly up to date `API guide`_ if you want to look at how the code is structured.
    
Integrated Development Environment (IDE)
    The most popular IDEs that we use are Qt Creator, Emacs, KDevelop, or vim. Qt Creator has the advantage of the ctrl-k menu, which lets you leap to classes, lines, everywhere. You don't have to build with Qt Creator though! It can be easier to jump to the terminal, do a 'make', check what's up, and then jump back to the IDE.
    
Resources
    The most important step to learning the code is to really understand memory management: pointers, smart pointers and pointer arithmetic. This is something that Java and C# developers will need to spend a little more time understanding. Here are a couple resources to get you more familiar with C++ and Qt:
    
        * `Qt Concepts <http://qt-project.org/doc/qt-4.8/how-to-learn-qt.html>`_
        * `Design Patterns with Qt <http://www.ics.com/designpatterns/book/index.html>`_
        * C++ in a Nutshell by O'Reilly (book)

Debugging
~~~~~~~~~

There are large and small problems. For small problems the debugger in Qt Creator (run external application) or adding qDebug messages to the code is fine. If the problem is difficult, the first step should always be to write a unit test. A small bit of code that follows a set pattern and exercises the faulty code and shows the problem. That helps so much figuring out a fix and keeping it fixed.

When you run a debug build of Krita, you may be surprised how little debug output you see. This is because most of Krita's debugging information is turned off by default.  The debug statements are grouped into categories such as ``dbgUI``, ``dbgKrita`` and so on.  The output categories are controlled by an environment variable ``QT_LOGGING_RULES``.

The list of Krita's debug categories is contained in ``kis_debug.h`` and ``main.cc``, and the rules for the environment variable are described in the `Qt reference for QLoggingCategory <http://doc.qt.io/qt-5/qloggingcategory.html>`_.

As an example, to enable most of Krita's debug output, you can run the following:

``export QT_LOGGING_RULES="krita*=true"; krita``

Using the rule ``*=true`` will produce a firehose, if you want it.

Tips when Tackling Issues
~~~~~~~~~~~~~~~~~~~~~~~~~

Features and Refactorings
    Sometimes you just know that a lot of work is going to be needed to reach a particular goal. These will go in separate feature branches off 'master'.
Performance Improvements
    Sometimes you don't feel like working on a feature -- or someone mentioned something being particularly slow. The first thing to do then is carry out that scenario when Krita runs under `callgrind <http://c.learncodethehardway.org/book/ex41.html>`_ and `vtune <http://en.wikipedia.org/wiki/VTune>`_. These tools show bottlenecks at the end of a run. It's important to use both, since both give different insights!
Bugs
    Sometimes you rummage around the bugs on b.k.o to see what looks like a nice Saturday morning fix. Sometimes a bug is really urgent (like all data loss bugs). Sometimes someone on IRC or the forum mentions a bug. The first thing to do is reproduce it. The second thing is to look in the code to see what is going on. If it's a crash bug, especially one that seems mysterious, it might help to google for a few of the key lines in the backtrace. Sometimes it's a distribution issue!
Blockers
    If you are helping with Krita and your progress is being blocked by something - let us know! Talk with us on the `Krita developer IRC`_ and we will see what we can do to help!

Calligra and Krita
~~~~~~~~~~~~~~~~~~

In October 2015, the Krita project separated from the rest of the Calligra office suite.  The new repository still clearly contains this history. Most source code files will have one of two prefixes. "Ko" stands for KOffice, the original name of Calligra office suite.  These files mostly comprise basic, lower-level libraries.  "Kis" stands for KImageShop, the original name of Krita. These files are where most of the painting-specific functionality is maintained.

Krita 2.9 stable is built from the Calligra repo.  Krita 3.x and above is built from the Krita repo.

Style guidelines
~~~~~~~~~~~~~~~~

See ``HACKING`` in the codebase.

Development Philosophy
~~~~~~~~~~~~~~~~~~~~~~

Krita is nearly ten years old, consists of something like a million lines of code, and has had many individual contributors throughout the years. If you run into something in the code that doesn't make sense to you, it may very well not make sense to anyone.  Developing a codebase this large is an art form, you should feel confident in making risky changes even if you're not sure they'll work, you can always go back with ``git checkout -- *`` if you mess it up!


Getting in Touch
----------------

If you're working on a bug fix, or maybe a bit of GUI polish, you might get stumped. The best thing to do then is to get in touch with the rest of the Krita team. Part of the fun of working on an open source application is the community, after all! Join us on ``#krita on irc.freenode.net`` (keep in mind that most people are in Europe or India) and just ask your question. Stay around, especially if you don't get an answer immediately. Some of the developers have their irc client open permanently and will often answer questions hours later!

You can also send mail to the mailinglist: ``kimageshop@kde.org``. It's better not to send mail to individual developers directly, you might accidentally pick someone who hasn't got the answer, and miss the chance of getting your question answered by another Krita developer.

Contributing Patches
--------------------

.. edit me!
    add links to techbase for gitlab, not sure if they're written yet.


Patch review and development tracking happens on `gitlab`_. To log in, enter your KDE Identity in the LDAP login field. You can join the `Krita: Next <https://phabricator.kde.org/project/profile/8/>`_. If you are used to Github, `the transition to gitlab is not difficult <https://invent.kde.org/help/#new-to-git-and-gitlab>`_, but it is slightly different.

To push to invent.kde.org, you will not need to have SSH access setup, but you do KDE identity account. If several of your merge requests are accepted, you can get a commiter's account, which will allow you to push directly to the repositories.  You can read more about that here: `Getting a developer account <https://community.kde.org/Infrastructure/Get_a_Developer_Account>`_

.. attention::

    Since moving to the gitlab instance, we don't use ``git@git.kde.org:krita`` but rather ``git@invent.kde.org:kde/krita``. Gitlab will not be able to see your commits if you push to the former. You can use ``git remote set-url origin git@invent.kde.org:kde/krita`` to get everything pointing correctly.

So then, how does an aspiring contributor submit patches?:

Forking on Gitlab
~~~~~~~~~~~~~~~~~

.. note::

    Work In Progress.

#. Forking on gitlab is done by going to the `repository`_ and pressing :guilabel:`fork`. You will then make a personal fork of the repository.
#. In your fork, you press :guilabel:`clone` to get the git urls to do the ``git clone`` from. You can then pull and push your commits from these.
   
   You can also use the :guilabel:`Web IDE` to make your changes on invent.kde.org, but because Krita is a cpp program, we don't recommend this outside of typo fixes and doxygen. You wouldn't be able to see the effect of your changes, after all!

#. Make your first fix, push everything to your fork.
#. Once you're done, go to :menuselection:`merge requests` and press :guilabel:`new merge request`
#. Tell us what you've done in detail.

The Krita developers be informed of new merge requests, and will try to review your request as soon as possible. If you suspect your patch slipped through the cracks, don't hesitate to make contact us through the means described above.

.. https://forum.kde.org/viewtopic.php?f=288&t=125955
