.. meta::
   :description:
        Detailed steps on how to install Krita

.. metadata-placeholder

   :authors: - Wolthera van Hövell tot Westerflier <griffinvalley@gmail.com>
             - Raghavendra Kamath <raghu@raghukamath.com>
             - Scott Petrovic
             - Boudewijn Rempt <boud@valdyas.org>
             - Dmitry Kazakov <dimula73@gmail.com>
   :license: GNU free documentation license 1.3 or later.

.. index:: Installation
.. _installation:

Installation
============

Windows
-------
Windows users can download the latest releases from our
`website. <https://krita.org/download/>`_ Click on the **All Download Versions**
link in the download page to get either 64bit or 32bit according to the architecture of your OS. To determine the achitecture
go to **Windows Control Panel** then click on the **System Icon**, your system type will be listed under the system section.

We also provide paid versions of Krita for windows platform. You will get automatic updates when new versions of Krita comes out.
After deduction of the Store fee, the money will support Krita development. For the Windows store version you will need Windows 10.
Please check these links for windows as well as steam stores —

- `Windows Store <https://www.microsoft.com/en-us/store/p/krita/9n6x57zgrw96>`_
- `Steam Store <https://store.steampowered.com/app/280680/Krita_Gemini/>`_


To download a portable version of Krita go to the `KDE <http://download.kde.org/stable/krita/>`__ download directory
and get the zip-file instead of the setup.exe installer.

.. warning::
   Krita requires Windows Vista or newer.
   INTEL GRAPHICS CARD USERS: IF YOU SEE A BLACK OR BLANK WINDOW: UPDATE YOUR DRIVERS!

Linux
-----

Many Linux distributions package the latest version of Krita. Sometimes
you will have to enable an extra repository. Krita runs fine under most
desktop enviroments such as KDE, Gnome, LXDE, XFCE etc -- even though it
is a KDE application and needs the KDE libraries. You might also want to
install the KDE system settings module and tweak the gui theme and fonts used,
depending on your distributions

Nautilus/Nemo file extensions
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Since April 2016, KDE's Dolphin file manager shows kra and ora thumbnails by
default, but Nautilus and it's derivatives need an extension. `We
recommend Moritz Molch's extensions for XCF, KRA, ORA and PSD
thumbnails <http://moritzmolch.com/1749>`__.

Appimages
~~~~~~~~~

For Krita 3.0 and later, first try out the appimage from the website.
**90% of the time this is by far the easiest way to get the
latest Krita.** Just download the appimage, and then use the file
properties or the bash command chmod to make the appimage executable.
Double click it, and enjoy Krita. (Or run it in the terminal with
./appimagename.appimage)

- Open the terminal into the folder you have the appimage.
- Make it executable

::

 chmod a+x krita-3.0-x86_64.appimage

- Run Krita!

::

 ./krita-3.0-x86_64.appimage

Appimages are ISOs with all the necessary libraries bundled inside, that means no
fiddling with repositories and dependencies, at the cost of a slight bit
more diskspace taken up (And this size would only be bigger if you were
using Plasma to begin with).

Ubuntu and Kubuntu
~~~~~~~~~~~~~~~~~~

It does not matter which version of Ubuntu you use, Krita will run just
fine. However, by default, only a very old version of Krita is
available. You should either use the appimage, flatpak or the snap available
from Ubuntu's app store. We also maintain a ppa for getting latest builds of Krita,
you can read more about the ppa and install instructions `here <https://launchpad.net/~kritalime/+archive/ubuntu/ppa>`_.

OpenSUSE
~~~~~~~~

The latest stable builds are available from KDE:Extra repo:

-  http://download.opensuse.org/repositories/KDE:/Extra/

.. note::
   Krita is also in the official repos, you can install it from Yast.

Fedora
~~~~~~

Krita is in the official repos, you can install it by using packagekit (Add/Remove Software) or by writing the following command in terminal.

``dnf install krita``

You can also use the software center such as gnome software center or Discover to install Krita

Debian
~~~~~~

The latest version of Krita available in Debian is 3.1.1.
To install Krita type the following line in terminal

``apt install krita``


Arch
~~~~

Arch Linux provides krita package in the Extra repository. You can
install Krita by using the following command

``pacman -S krita``

You can also find Krita pkgbuild in arch user repositories but it is not guaranteed to contain 
the latest git version.

OS X
----

.. warning::
   Mac OSX is very experimental right now and unstable, don't use it for production purpose

You can download the latest binary if you want from our
`website <https://krita.org/download/krita-desktop/>`__. It has only
been reported to work with Mac OSX 10.9.

Source
------

While it is certainly more difficult to compile Krita from source than
it is to install from prebuilt packages, there are certain advantages
that might make the effort worth it:

-  You can follow the development of Krita on the foot. If you compile
   Krita regularly from the development repository, you will be able to
   play with all the new features that the developers are working on.
-  You can compile it optimized for your processor. Most pre-built packages
   are built for the lowest-common denominator.
-  You will be getting all the bug fixes as soon as possible as well.
-  You can help the developers by giving us your feedback on features as
   they are being developed and you can test bug fixes for us. This is
   hugely important, which is why our regular testers get their name in
   the about box just like developers.

Of course, there are also some disadvantages: when building from the current
development source repository you also get all the unfinished features.
It might mean less stability for a while, or things shown in the user
interface that don't work. But in practice, there is seldom really bad
instability, and if it is, it's easy for you to go back to a revision
that does work.

So... If you want to start compiling from source, begin with the latest
build instructions from the guide :ref:`here <building_krita>`.

If you encounter any problems, or if you are new to compiling software,
don't hesitate to contact the Krita developers. There are three main
communication channels:

-  irc: irc.freenode.net, channel #krita
-  `mailing list <https://mail.kde.org/mailman/listinfo/kimageshop>`__
-  `forums <http://forum.kde.org/viewforum.php?f=136>`__
