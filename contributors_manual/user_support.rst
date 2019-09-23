.. meta::
    :description:
        Introduction to user support.

.. metadata-placeholder

    :authors: - Agata Cacko <cacko.azh@gmail.com>
    :license: GNU free documentation license 1.3 or later.

.. _gitlab : https://invent.kde.org
.. _repository : https://invent.kde.org/kde/krita
.. _bugzilla : https://bugs.kde.org/
.. _Krita developer IRC : https://krita.org/irc/
.. _API guide : https://api.kde.org/extragear-api/graphics-apidocs/krita/html/index.html

.. _intro_user_support:

============================
Introduction to User Support
============================


.. requirements (aka just know a bit of Krita, the more you know, the more you'd be able to help)  (+ if you don't know the answer, come to IRC)
.. general philosophy
.. + tablet support
  .. + quick solutions
  .. + important information needed
.. + animation (how to debug)

.. + crashes
.. + advices
.. useful links to quickly answer people


.. contents::

Tablet Support
--------------

The majority of help requests are about pen pressure and tablet support in general.


Quick solutions
~~~~~~~~~~~~~~~

#. On Windows: reinstall your driver (Windows Update often breaks tablet driver settings, reinstallation helps).

#. Change API in :menuselection:`Settings --> Configure Krita --> Tablet Settings` (for some devices, especially N-trig ones, Windows Ink work better, for some it's Wintab).

#. On Windows, Wacom tablets: if you get straight lines at the beginnings of the strokes, disable/minimize "double-click distance" in Wacom settings.

Gathering information
~~~~~~~~~~~~~~~~~~~~~

#. Which OS do you use?

#. Which tablet do you have?

#. What is the version of the tablet driver?

#. Please collect Tablet Tester (:menuselection:`Settings --> Configure Krita --> Tablet Settings`) output, paste it to `Pastebin <https://pastebin.com/>`_ or similar website and give us a link.


Additional information for supporters
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#. Except for the issue with beginnings of the strokes, Wacom tablets usually work no matter the OS.

#. Huion tablets should work on Windows and on Linux, on Mac there might be issues.

#. XP-Pen tablets and other brands can have issues everywhere.

#. If someone asks about a tablet to buy, generally a cheaper Wacom or a Huion are the best options as of 2019, if they want to work with Krita. :ref:`list_supported_tablets`.

#. `Possibly useful instruction in case of XP-Pen tablet issues <https://www.reddit.com/r/krita/comments/btzh72/xppen_artist_12s_issue_with_krita_how_to_fix_it/>`_.


Animation
---------

Issues with rendering animation can be of various shapes and colors. First thing to find out is whether the issue happens on Krita's or FFmpeg's side (Krita saves all the frames, then FFmpeg is used to render a video using this sequence of images). To learn that, instruct the user to render as "Image Sequence". If the image sequence is correct, FFmpeg (or more often: render options) are at fault. If the image sequence is incorrect, either the options are wrong (if for example not every frame got rendered), or it's a bug in Krita.

.. note::

        If the user opens the Log Viewer docker, turns on logging and then tries to render a video, Krita will print out the whole ffmpeg command to Log Viewer so it can be easily investigated.

There is a log file in the directory that user tries to render to. It can contain information useful to investigation of the issue.

Onion skin issues
-----------------

The great majority of issues with onion skin are just user errors, not bugs. Nonetheless, you need to find out why it happens and direct the user how to use onion skin properly.


Crash
-----

In case of crash try to determine if the problem is known, if not, instruct user to create a bug report (or create it yourself) with following information:

#. What happened, what was being done just before the crash.

#. Is it possible to reproduce (repeat)? If yes, provide a step-by-step instruction to get the crash.

#. Backtrace (crashlog) -- the instruction is here: :ref:`dr_minw`, and the debug symbols can be found in the annoucement of the version of Krita that the user has. But it could be easier to just point the user to `https://download.kde.org/stable/krita <https://download.kde.org/stable/krita>`_.


Other possible questions with quick solutions
---------------------------------------------

#. When the user has trouble with anything related to preview or display, ask them to change :guilabel:`Canvas Graphics Acceleration` in :menuselection:`Settings --> Configure Krita --> Display`.

    .. note: 
    
         Telling people to disable canvas acceleration to get better performance is something we shouldn't do, ever.

#. When the user has any weird issue, something you've never heard about, ask them to reset the configuration: :ref:`faq_reset_krita_configuration`.


Advices for supporters
----------------------

#. If you don't understand the question, ask for clarification -- asking for a screen recording or a screenshot is perfectly fine.

#. If you don't know the solution but you know what information will be needed to investigate the issue further, don't hesitate to ask. Other supporters may know the answer, but have too little time to move the user through the whole process, so you're helping a lot just by asking for additional information. This is very much true in case of tablet issues, for example.

#. If you don't know the answer/solution and the question looks abandoned by other supporters, you can always ask for help on Krita IRC channel. It's #krita on freenote.net: :ref:`the_krita_community`.

#. Explain steps the user needs to make clearly, for example if you need them to change something in settings, clearly state the whole path of buttons and tabs to get there.

#. Instead of :menuselection:`Settings --> Configure Krita` use just :menuselection:`Configure Krita` -- it's easy enough to find and Mac users (where you need to select :menuselection:`Krita --> Settings`) won't get confused.

#. If you ask for an image, mention usage of `Imgur <https://imgur.com>`_ or `Pasteboard <https://pasteboard.co>`_, otherwise Reddit users might create a new post with this image instead of including it to the old conversation.

#. If you want to quickly answer someone, just link to the appropriate place in this manual page -- you can click on the little link icon next to the section or subsection title and give the link to the user so they for example know what information about their tablet issue you need.

#. If the user access the internet from the country or a workplace with some of the websites blocked (like imgur.com or pastebin.com), here is a list of alternatives that works:
   
   * Images (e.g. screenshots): `Pasteboard <https://pasteboard.co>`_
   
   * Text only: `BPaste <https://bpaste.net>`_, `paste.ubuntu.org.cn <paste.ubuntu.org.cn>`_, `paste.fedoraproject.org <https://paste.fedoraproject.org/>`_ or `https://invent.kde.org/dashboard/snippets (needs KDE Identity) <https://invent.kde.org/dashboard/snippets>`_.
   
   * ``.kra`` and other formats: by mail? Or encode the file using `base64` command on Linux, send by mail or on Pastebin, then decode using the same command.

  .. attention::
      
      
      If you ask user to store their log or other data on a website, make sure it stays there long enough for you to get it -- for example bpaste.net stores files by default only for a day! And you can extend it only to one week.
      
      Make sure they don't post their personal data. Tablet Tester log is safe, log from the :menuselection:`Help -> Show system information for bug reports` might not be that safe. Maybe you could ask them to send it to you by mail?

