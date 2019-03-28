.. meta::
    :description:
        Guide to building Krita from source.

.. metadata-placeholder

    :authors: - Boudewijn Rempt <boud@valdyas.org>
              - Wolthera van Hövell tot Westerflier <griffinvalley@gmail.com>
              - images by David Revoy
    :license: GNU free documentation license 1.3 or later.
    
.. _building_krita:

==========================
Building krita from Source
==========================

If you want to help developing Krita, or if you want to run the latest version of Krita on macOS, you need to know how to build Krita yourself. If you merely want to run the latest version of Krita on Windows or Linux, to test a bug or play with, you can use the `nightly build for Windows <https://binary-factory.kde.org/job/Krita_Nightly_Windows_Build/>`_ or the `nightly build for Linux <https://binary-factory.kde.org/job/Krita_Nightly_Appimage_Build/>`_

.. contents::


You can build Krita on Linux, Windows and OSX. The libraries Krita needs (for instance to load and save various image types) are called dependencies.

Linux is the easiest operating system to build Krita on because all the libraries that Krita needs are available on most recent Linux distributions. For an easy guide to building Krita see `Building Krita on Linux for Cats <http://www.davidrevoy.com/article193/guide-building-krita-on-linux-for-cats>`_ 

On OSX you can use tools like homebrew to get the dependencies, or build the dependencies manually. Building the dependencies manually is recommended because we have a number of changes to the source for libraries to make them function better with Krita.

On Windows you will have to build the dependencies yourself. 

The build instructions for OSX/macOS and Windows are maintained as part of `Krita's source code repository <https://phabricator.kde.org/source/krita/browse/master/3rdparty/README.md>`__. You will need to VERY carefully follow these instructions.

Building on Linux
-----------------

This page only deals with building Krita on Linux. However, some remarks are the same for all operating systems, especially when it comes to running cmake and dealing with errors. You need to be familiar with using a terminal. 

There are two options: you can either build Krita in your home directory, or use `Docker <https://cgit.kde.org/scratch/dkazakov/krita-docker-env.git/tree/README.md">`_, which makes setting up a development environment easier. 

Preparing your development environment
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: /images/en/cat_guide/Krita-building_for-cats_001-init-dir_001_by-deevad.jpg

The most convenient layout is as follows:

* $HOME/kritadev/krita -- the source code
* $HOME/kritadev/build -- the location where you compile krita
* $HOME/kritadev/install -- the location where you install krita to and run krita from

we will call the "kritadev" folder your build root.

Note: type in what's shown after '>' in the following commands

.. code:: console

    you@yourcomputer:~>mkdir kritadev
    you@yourcomputer:~/>cd kritadev
    you@yourcomputer:~/kritadev> mkdir build
    you@yourcomputer:~/kritadev> mkdir install

Getting the Source Code
~~~~~~~~~~~~~~~~~~~~~~~

.. image:: /images/en/cat_guide/Krita-building_for-cats_002-git-clone_001_by-deevad.jpg

Open a terminal and enter the build root. Clone Krita from kde's git infrastructure (not github):

.. code:: console

    you@yourcomputer:~/kritadev> git clone git://anongit.kde.org/krita.git

Configuring the Build
~~~~~~~~~~~~~~~~~~~~~

.. image:: /images/en/cat_guide/Krita-building_for-cats_004-configure_001_by-deevad.jpg

.. code:: console

    you@yourcomputer:~/kritadev> cd build

Krita uses cmake (https://cmake.org) to define how Krita is built on various platforms. You first need to run cmake to generate the build system, in the kritadevs/build directory, then run make to make Krita, then run make install to install krita.

.. code::

    you@yourcomputer:~/kritadev/build>cmake ../krita -DCMAKE_INSTALL_PREFIX=/path/to/kritadev/install  -DCMAKE_BUILD_TYPE=RelWithDebInfo
    
.. image:: /images/en/cat_guide/Krita-building_for-cats_003-get-libs_001_by-deevad.jpg

Unless you have installed all the dependencies Krita needs, on first running cmake, cmake will complain about missing dependencies. For instance:

.. code::

    -- The following RECOMMENDED packages have not been found:

    * GSL , <http://www.gnu.org/software/gsl>
    Required by Krita's Transform tool.

    
This is not an error, and you can fix this by installing the missing package using your distribution's package manager. Do not download these packages manually from the source website and build them manually. Do use your distribution's package manager to find the right packages.

For example, for Ubuntu, you can start with:

.. code::

    you@yourcomputer:~/kritadev/build>apt-get build-dep krita
    
Which will install all the depedancies of the version of Krita in the repositories.

However, the development version might use different dependancies, to find these, you can use the apt-cache search:

.. code:: console

    you@yourcomputer:~/kritadev/build>apt-cache search quazip
    libquazip-dev - C++ wrapper for ZIP/UNZIP (development files, Qt4 build)
    libquazip-doc - C++ wrapper for ZIP/UNZIP (documentation)
    libquazip-headers - C++ wrapper for ZIP/UNZIP (development header files)
    libquazip1 - C++ wrapper for ZIP/UNZIP (Qt4 build)
    libquazip5-1 - C++ wrapper for ZIP/UNZIP (Qt5 build)
    libquazip5-dev - C++ wrapper for ZIP/UNZIP (development files, Qt5 build)
    libquazip5-headers - C++ wrapper for ZIP/UNZIP (development header files, Qt5 build)

You will want to get the 'dev' library here, because you're doing dev, and then Krita is using Qt5, so select that one. If this doesn't help, check the `Ubuntu packages search <https://packages.ubuntu.com/>`_.

If all dependencies have been installed, cmake will output something like this:

.. code:: console

    -- Configuring done
    -- Generating done
    -- Build files have been written to: /home/boud/dev/b-krita

Until that is shown, cmake has not succeeded and you cannot build Krita. When this is shown, you can build Krita:

.. image:: /images/en/cat_guide/Krita-building_for-cats_005-build_001_by-deevad.jpg

.. code:: console

    you@yourcomputer:~/kritadev/build> make
    you@yourcomputer:~/kritadev/build> make install

.. image:: /images/en/cat_guide/Krita-building_for-cats_006-installing_by-deevad.jpg

When these commands have succeeded, you can run Krita:

.. code::

    you@yourcomputer:~/kritadev/build>../install/bin/krita

.. image:: /images/en/cat_guide/Krita-building_for-cats_008-running-success_by-deevad.jpg

Common problems
~~~~~~~~~~~~~~~
.. image:: /images/en/cat_guide/Krita-building_for-cats_012-git-update-fail_by-deevad.jpg

* The most common problem is a missing dependency. Install it. A missing dependency is not an "error" that you need to report to the other Krita developers.

* A dependency can also be too old. CMake will report when the version of a dependency is too old. That is also not an "error". You might need to update your Linux installation to a newer version.

* You can also have a successful build, then update your linux installation, and then find that Krita no longer builds. A library got updated, and you need to remove the ``CMakeCache.txt`` file in your build dir and run cmake again.

* Sometimes, changes in Krita's source code from git revision to git revision make it necessary to make your installation and/or build dir empty and build from scratch. One example is where a plugin is removed from Krita; the plugin will be in your install dir, and won't get updated when Krita's internals change.
