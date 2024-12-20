.. meta::
    :description:
        Guide to building Krita from source.

.. metadata-placeholder

    :authors: - Halla Rempt <boud@valdyas.org>
              - Wolthera van Hövell tot Westerflier <griffinvalley@gmail.com>
              - Alvin Wong
              - images and latter parts by David Revoy <info@davidrevoy.com>
    :license: GNU free documentation license 1.3 or later.
    
.. _building_krita:

==========================
Building Krita from Source
==========================

If you want to help developing Krita, you need to know how to build Krita yourself. If you merely want to run the latest version of Krita, to test a bug or play with, you can use the `nightly build for Windows <https://binary-factory.kde.org/job/Krita_Nightly_Windows_Build/>`_ the `nightly build for Linux <https://binary-factory.kde.org/job/Krita_Nightly_Appimage_Build/>`_, or the `nightly build for macOS <https://binary-factory.kde.org/job/Krita_Nightly_MacOS_Build/>`_.

.. contents::


You can build Krita on Linux, Windows, macOS and on Linux for Android. The libraries Krita needs (for instance to load and save various image types) are called dependencies.

Linux is the easiest operating system to build Krita on because all the libraries that Krita needs are available on most recent Linux distributions. For an easy guide to building Krita see `Building Krita on Linux for Cats <https://www.davidrevoy.com/article193/compil-krita-from-source-code-on-linux-for-cats>`_.

On macOS you can use tools like homebrew to get the dependencies, or build the dependencies manually. Building the dependencies manually is recommended because we have a number of changes to the source for libraries to make them function better with Krita.

On Windows you can either reuse the dependencies from the KDE Binary Factory, or build the dependencies yourself.

On all operating systems, you need to be familiar with using a terminal. Building Krita is a technical task and demands accuracy in following instructions and intelligence in understanding what happens.

Building on Linux
-----------------

In general, there are two options for building Krita on Linux. One using the docker environment (recommended) and the other is by manually building all the Krita dependencies on the host linux system (unsupported).

* :ref:`building in the Docker environment (recommended) <building_krita_with_docker>`
* :ref:`building on the host Linux (unsupported) <building_krita_on_host_linux_system>`

Building on Windows
-------------------

On Windows, you can either reuse the dependencies from the KDE Binary Factory, or build the dependencies yourself. If you decide to build all the dependencies yourself, this will take a long time. Note that you will do all your work in a CMD command window.

This is also more difficult than building Krita on Linux, so you need to pay attention to details. If you follow the guide closely, install correct dependencies and make sure your PATH doesn't contain anything unwanted, there should be no issues.

Prerequisites
~~~~~~~~~~~~~

1. Git - https://git-scm.com/downloads
2. CMake 3.21.0 or later, the latest is usually fine - https://cmake.org/download/
3. Ninja build system - https://github.com/ninja-build/ninja/releases

    - Since Ninja is a single executable, you can place it in the bin folder of CMake, next to ``cmake.exe`` for convenience.

4. LLVM MinGW compiler toolchain

    .. note::

        On 17.10.2024 we updated our Windows toolchain from clang-15 ("llvm-mingw-20220906-ucrt") to clang-18 ("llvm-mingw-20240619-ucrt"). One of the reasons was ASAN support on Windows 11.

    - Can be downloaded here: https://github.com/mstorsjo/llvm-mingw/releases/download/20240619/llvm-mingw-20240619-ucrt-x86_64.zip
    - Unzip the archive with `7zip <https://www.7-zip.org/>`_ into a folder like :file:`C:\\llvm-mingw`; the full path must not contain any spaces.
    - We are using the tagged release 20240619 with LLVM 18.1.8 on the CI workers. In theory a newer version should be compatible, but use at your own risk.
    - If you really want to use other compilers, see below.


5. You will also need a release of Python 3.10 (not 3.7, not 3.8, not 3.9, not 3.11) - https://www.python.org.

    - Make sure to have that version of python.exe in your path. This version of Python will be used for two things to configure Qt and to build the Python scripting module.  Do not set PYTHONHOME or PYTHONPATH.
    - Make sure that your Python will have the correct architecture for the version you are trying to build. If building for 32-bit target, you need the 32-bit release of Python.

6. It is useful to install Qt Creator - https://download.qt.io/official_releases/qtcreator/

.. attention::

    **Make double plus sure you do not have any other compilers or development environments or Python installation in your PATH!**


Other Compilers
^^^^^^^^^^^^^^^

- In the past we used mingw-w64 gcc 7.3.0 (mingw-builds). This version is no longer supported because our dependencies started requiring a more updated compiler to work.
- It is possible to build Krita with a newer mingw-w64 gcc toolchain, for example gcc 11.2.0 by niXman on GitHub (mingw-builds), or the one from MSYS2.
- MSYS2 can build Krita with the MINGW64, UCRT64 or CLANG64 environments.
- Krita can also be built with MSVC (check the batch file in ``build-tools\windows``). Krita built with MSVC has suboptimal performance due to codegen issues so we can't use it.

.. attention::
    
    If you use these compilers, you must build the dependencies yourself. Trying to mix dependencies built with a different compiler may outright fail to configure, or Krita may appear to build successfully but you get random crashes wuen running it.


Preparation
~~~~~~~~~~~

.. image:: /images/untranslatable/cat_guide/Krita-building_for-cats_001-init-dir_001_by-deevad.jpg

After installing the Prerequisites, prepare your working directory somewhere, like ``C:\krita-dev``. Keep this short (30 characters in the prefix path is fine, but longer than this and you may get build errors). Makes sure the path does not contain whitespace. If you use a different path, remember to adjust the paths in the later steps.

.. code:: batch

    mkdir C:\krita-dev
    cd /d C:\krita-dev

Set up python environment (you don't need to hand-craft the bat file with the predefined PATH variables):

.. code:: batch

    git clone https://invent.kde.org/dkazakov/krita-deps-management.git
    git clone https://invent.kde.org/dkazakov/ci-utilities.git krita-deps-management/ci-utilities

    c:\Python310\python.exe -m venv PythonEnv --upgrade-deps
    PythonEnv\Scripts\activate.bat
    python -m pip install -r krita-deps-management\requirements.txt

Getting the dependencies
~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: /images/untranslatable/cat_guide/Krita-building_for-cats_003-get-libs_001_by-deevad.jpg

Download the dependencies and generate the environment file. Make sure you replace the paths to llvm-mingw and ninja:


.. code:: batch

    python krita-deps-management\tools\setup-env.py --full-krita-env -v PythonEnv -p c:\deps\llvm-mingw-20240619-ucrt-x86_64\bin\ -p c:\deps\llvm-mingw-20240619-ucrt-x86_64\x86_64-w64-mingw32\bin\ -p c:\deps\Ninja\


.. attention::
    If you happen to decide to hand-craft the ``PATH`` variable, make sure your ``PATH`` variable does **not** have double backslash symbols ``\\``. Especially as a result of multiple path variables concatenation.

    If it has, ASAN symbolizer will crash when parsing error-reports.

Every time you want to build or run your home-grown Krita, open the CMD window, change to the ``C:\krita-dev`` folder and run the ``env.bat`` file generated by the script above:

.. code:: batch

    cd /d C:\krita-dev
    env.bat

You will note that most command samples below contain these two lines, but the truth is you only need to run ``env.bat`` once for each CMD window.

Then get the source code of Krita:

.. image:: /images/untranslatable/cat_guide/Krita-building_for-cats_002-git-clone_001_by-deevad.jpg

.. code:: batch

    cd /d C:\krita-dev
    git clone https://invent.kde.org/graphics/krita.git
    
.. attention::
    If you build Krita with ASAN, make sure you don't use prebuilt deps, or at least manually rebuild Qt with
    ASAN support as well (``-DQT_ENABLE_ASAN=ON``). There is a `know issue in LLVM's linker <https://github.com/llvm/llvm-project/issues/61685>`_,
    which causes Qt be loaded before ASAN and, therefore, causing some allocations confuse ASAN. Until this issue is fixed,
    build Qt with ASAN as a workaround.

Building Krita
~~~~~~~~~~~~~~


.. image:: /images/untranslatable/cat_guide/Krita-building_for-cats_005-build_001_by-deevad.jpg



Again, on the command line, configure the build:

.. code:: batch

    cd /d C:\krita-dev
    env.bat
    mkdir -p C:\krita-dev\b_krita
    cd b_krita

    cmake C:\krita-dev\krita ^
        -DCMAKE_INSTALL_PREFIX=C:/krita-dev/_install ^
        -DBUILD_TESTING=ON ^
        -DINSTALL_BENCHMARKS=ON ^
        -DKRITA_ENABLE_PCH=OFF ^
        -DHIDE_SAFE_ASSERTS=OFF ^
        -G Ninja ^
        -DCMAKE_BUILD_TYPE=RelWithDebInfo

    ninja -j8 install
    
    
If you are hacking on Krita, you can rebuild Krita without running the full build by entering the build directory and running ``mingw32-make -j8 install`` or ``ninja -j8 install``.

.. code:: batch

    cd /d C:\krita-dev
    env.bat
    cd b_krita
    ninja -j8 install

.. image:: /images/untranslatable/cat_guide/Krita-building_for-cats_006-installing_by-deevad.jpg

    
Running Krita
~~~~~~~~~~~~~

You must start Krita from the command prompt, after having run ``env.bat``:

.. code:: batch

    cd /d C:\krita-dev
    env.bat
    _install\bin\krita
    :: or
    _install\bin\krita.exe

.. image:: /images/untranslatable/cat_guide/Krita-building_for-cats_008-running-success_by-deevad.jpg

Building on macOS
-----------------

We will build Krita on macOS with the same scripts that are used to build the nightly builds and the releases. We will *NOT* be building krita from within XCode, but from within the terminal.

Prequisites
~~~~~~~~~~~

You will need to install:

* CMake: https://cmake.org
* Python 3.10 or higher
* XCode: get it from the app store
* Qt Creator: https://download.qt.io/official_releases/qtcreator/

Preparation
~~~~~~~~~~~

.. image:: /images/untranslatable/cat_guide/Krita-building_for-cats_002-git-clone_001_by-deevad.jpg

Open Terminal.app. First you need to create buildroot folder:

.. code:: bash

    export BUILDROOT=$HOME/dev

    mkdir -p $BUILDROOT
    cd $BUILDROOT 

Now fetch Krita sources, build scripts and set up virtual environment for Python:

.. code:: bash

    cd $BUILDROOT
    git clone https://invent.kde.org/graphics/krita.git

    # fetch environment scripts under Krita's source directory
    cd krita
    git clone https://invent.kde.org/dkazakov/krita-deps-management.git krita-deps-management --depth=1
    git clone https://invent.kde.org/dkazakov/ci-utilities.git krita-deps-management/ci-utilities --depth=1

    # create venv environemnt for running build scripts
    python3 -m venv $BUILDROOT/venv --upgrade-deps
    source $BUILDROOT/venv/bin/activate
    pip install -r krita-deps-management/requirements.txt

Install build tools (CMake, Ninja, CCache) that we use for Krita builds 
on CI. If you have these tools installed separately, then you can skip this step:

.. code:: bash

    cd $BUILDROOT
    python3 $BUILDROOT/krita/krita-deps-management/tools/download-macos-tools.py
    source $BUILDROOT/_krita-tools/activate

Fetching prebuilt dependencies
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: /images/untranslatable/cat_guide/Krita-building_for-cats_003-get-libs_001_by-deevad.jpg

Now set up the environment for building Krita and download all the dependencies in a prebuilt form:

.. code:: bash

    cd $BUILDROOT/krita
    source $BUILDROOT/venv/bin/activate
    source $BUILDROOT/_krita-tools/activate # if you used CI build tools

    python krita-deps-management/tools/setup-env.py --full-krita-env -v $BUILDROOT/venv -p $BUILDROOT/$KDECI_CRAFT_PLATFORM/dev-utils/bin/

The script will generate the following environment for you:

    * ``$BUILDROOT/krita/_install`` --- the install prefix for Krita with all the deps preinstalled
    * ``$BUILDROOT/krita/_build`` --- the build folder for Krita
    * ``$BUILDROOT/krita/env`` --- a script for build environment activation
    * ``$BUILDROOT/krita/env_deactivate`` --- a script for build environment de-activation

The steps above should be done only once when you set up the environement for the first time. Next time
you open the console you should just source the env-file at ``$BUILDROOT/krita/env``, you don't have to 
repeat all these steps with craft and python's environment.

Building Krita
~~~~~~~~~~~~~~

.. image:: /images/untranslatable/cat_guide/Krita-building_for-cats_006-installing_by-deevad.jpg

Building Krita is straightforward, just activate the environment and do the build. Everything 
will be activated automatically.

.. code:: bash

    # go to the Krita source directory
    cd $BUILDROOT/krita

    # activate the build environment (you don't need to activate 
    # any previous environments, like Python's venv environment; 
    # everything is included in this ``env`` file)
    source $BUILDROOT/krita/env
    source $BUILDROOT/_krita-tools/activate # if you used CI build tools

    mkdir -p _build
    cd _build

    # configure Krita as usual
    cmake -DCMAKE_BUILD_TYPE=RelWithDebInfo \
          -DHIDE_SAFE_ASSERTS=OFF \
          -DBUILD_TESTING=ON \
          -DCMAKE_INSTALL_PREFIX=$BUILDROOT/krita/_install \
          -DCMAKE_TOOLCHAIN_FILE=$BUILDROOT/krita/krita-deps-management/tools/macos-toolchain-krita.cmake \
          $BUILDROOT/krita

    # build and install
    ninja -j8 install
     
This will build and install Krita to ``$BUILDROOT/krita/_install/bin/krita.app``

Running Krita
~~~~~~~~~~~~~

You can run krita in the same terminal window:

.. code:: bash

    $BUILDROOT/krita/_install/bin/krita.app/Contents/MacOS/krita
    
If you want to debug krita with lldb:

.. code:: bash

    cd $BUILDROOT/krita
    lldb ./_install/bin/krita.app/Contents/MacOS/krita
    (lldb) target create "./_install/bin/krita.app/Contents/MacOS/krita"
    Current executable set to './_install/bin/krita.app/Contents/MacOS/krita' (x86_64).
    (lldb) r
    
.. image:: /images/untranslatable/cat_guide/Krita-building_for-cats_008-running-success_by-deevad.jpg

Troubleshooting
~~~~~~~~~~~~~~~

Testing code signing with ``rcodesign``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Our CI system uses ``rcodesign`` to sign the binaries instead of the official tool provided
by Apple. The reason is, official ``codesign`` tool requires MacOS to run, but KDE's signing
service uses a dedicated machine with security keys that runs Linux. Hence it can sign our
binaries with ``rcodesign`` only.

To test signing with ``rcodesign`` use our standard docker container:

.. code:: bash

    # install Rust as a superuser
    ./bin/sudoenter
    apt install rust-1.80-all

    # install rcodesign as non-priviliged `appimage` user
    ./bin/enter
    cargo-1.80 install apple-codesign
    prepend PATH /home/appimage/.cargo/bin

    # generate self-signed certificates
    echo 123456 > test-cert.pass
    rcodesign generate-self-signed-certificate --p12-file test-cert.p12 --p12-password `cat test-cert.pass` --person-name "TestDevXX"

    # sign the .app bundle
    rcodesign sign -v --code-signature-flags runtime --p12-file test-cert.p12 --p12-password-file test-cert.pass ~/persistent/krita.app/ ./signed.app

Now ``./signed.app`` has all the files signed. In the next step our CI copies the signed data **over the original package**

.. code:: bash

    cp -r ./signed.app ~/persistent/krita.app/

I don't really know why it was originaly planned, but it allows catching cases when ``rcodesign`` silently drops the files from the signed package
(copying the files back will leave some files unsigned, and therefore fail the following verification step).

To verify the final package you need to use a real MacOS device:

.. code:: bash

    # on MacOS!
    codesign --verify --deep --strict --verbose=2 ./krita.app

Building on Android
-------------------

See a dedicated page for :ref:`building Krita on Android <building_krita_for_android>`


Building Krita's dependencies manually
--------------------------------------

See a dedicated page for :ref:`building Krita's dependencies manually <working_on_krita_deps>`


.. toctree::
   :maxdepth: 1
   :caption: Contents:
   :glob:

   building/*
   
