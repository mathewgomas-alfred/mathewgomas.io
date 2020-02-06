.. meta::
    :description:
        Guide to building Krita with docker.

.. metadata-placeholder

    :authors: - Boudewijn Rempt <boud@valdyas.org>
    :license: GNU free documentation license 1.3 or later.
    
.. _building_krita_with_docker:

==========================
Building krita with Docker
==========================

The *Dockerfile* is based on the official KDE build environment
that is used on KDE CI for building official AppImage packages. This guide is valid for Ubuntu and Ubuntu-based Linux distributions.

.. contents::

Prerequisites
-------------

First make sure you have Docker installed

.. code::

    sudo apt install docker docker.io


Then you need to download deps and Krita source tree. These steps are not included into the *Dockerfile* to save internal bandwidth 

.. code::

    # create directory structure for container control directory
    git clone git://anongit.kde.org/scratch/dkazakov/krita-docker-env.git krita-auto-1

    cd krita-auto-1
    mkdir persistent

    # copy/checkout Krita sources to 'persistent/krita'
    cp -r /path/to/sources/krita ./persistent/krita

    ## or ...
    # git clone kde:krita persistent/krita

    # download the deps archive
    ./bin/bootstrap-deps.sh


Build the docker image and run the container
--------------------------------------------

.. code::

    ./bin/build_image krita-deps
    ./bin/run_container krita-deps krita-auto-1


Enter the container and build Krita
-----------------------------------

.. code::

    # enter the docker container (the name will be
    # fetched automatically from '.container_name' file)

    ./bin/enter

... now you are inside the container with all the deps prepared ...

.. code::

    # build Krita as usual
    cd appimage-workspace/krita-build/
    run_cmake.sh ~/persistent/krita
    make -j8 install

    # start Krita
    ../appimage-workspace/krita-inst/bin/krita


Extra developer tools
---------------------

To install QtCreator, enter the container and start the installer, downloaded while fetching dependencies. Make sure you install it into '~/qtcreator' directory without any version suffixes, then you will be able to use the script below:

.. code::

    # inside the container
    ./persistent/qt-creator-opensource-linux-x86_64.run


To start QtCreator:

.. code::

    # from the host
    ./bin/qtcreator


Stopping the container and cleaning up
--------------------------------------

When not in use you can stop the container. All your filesystem state is saved, but all the currently running processes are killed (just ensure you logout from all the terminals before stopping).

.. code::

    # stop the container
    ./bin/stop

    # start the container
    ./bin/start


If you don't need your container/image anymore, you can delete them from the docker

.. code::

    # remove the container
    sudo docker rm krita-auto-1

    # remove the image
    sudo docker rmi krita-deps


Troubleshooting
---------------

Krita binary is not found after the first build
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Either relogin to the container or just execute `source ~/.devenv.inc`

OpenGL doesn't work on NVidia GPU with proprietary drivers
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The docker run script automatically forwards the GPU devices into the container, but it doesn't install the drivers for the GPU. You should install exactly the same version of the driver that is installed on your host system. Just run the following script when you are on host:

.. code::

    ./bin/install_nvidia_drivers.sh


Not enough space on root partition
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

All the docker images and containers are stored in a special docker-daemon controlled folder under */var* directory. You might not have enough space there for building Krita (it needs about 10 GiB). In such a case it is recommended to move the docker images
folder into another location, where there is enough space.

.. code::

    echo 'DOCKER_OPTS="-g /home/devel5/docker"' >> /etc/default/docker
