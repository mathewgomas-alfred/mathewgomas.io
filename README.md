
# Documentation Site for Krita
A Sphinx based documentation system with a custom Krita theme. The instructions and batch files were originally written from a Windows 10 machine, but it should be able to work with any operating system. 


Setting up Development Environment
----------------------------------
You will need Python. I have version 3.10.16 Make sure to install PIP along with the installation. PIP is a manager that is used to install external packages. We will use PIP to install Sphinx. Sphinx is a static site generation tool used for documentation purposes. 

After you install Python bring up a command prompt and type: `python3 --version`

It should tell you the version and verify that Python is installed. Mine says `Python 3.6.3`. If it says `Python 2.7.15` try replacing `python` with `python3`.

Next you will need to install Sphinx so you can use it in projects:

```bash

# create the directories Text2Speech and docs-krita-org

mkdir -p ~/Text2Speech/docs-krita-org

# change to the newly created docs-krita-org directory

cd ~/Text2Speech/docs-krita-org

# set up virtual environment
python3 -m venv PythonEnvTesting

source PythonEnvTesting/bin/activate

# install Sphinx and its dependencies
pip install -r requirements.txt

# Install the sphinx-autobuild package inside your virtual environment

```
pip install sphinx-autobuild

 # Uninstall the incompatible sphinx version
```
pip uninstall sphinx

# Install a compatible sphinx version
```
pip install sphinx==7.0.0

# If you want the autorebuild feature, install sphinx-autorebuild
pip install sphinx-autobuild
```
# Need to run the sphinx-build command to generate the HTML files, Ensure that the dist/de/ directory exists or create it

mkdir -p dist/de

sphinx-build -b html . _build/html

# Copy the Files
```
cp -R _build/html dist/de/

# Start auto-rebuild script
sphinx-autobuild . _build/autohtml --open-browser

```

Windows: If "pip" is not found, you will need to add the folder to your environment variables. This should be in C:\Users\<username>\AppData\Local\Programs\Python\Python<version>\Scripts

Linux: On some distributions, `pip` might not be installed by default with python, for that you need to run 

```bash
$ sudo apt-get install python3-pip python3-venv  # Ubuntu/Debian based
$ sudo dnf install python3                       # Fedora based
$ sudo pacman -S python-pip                      # Arch based
$ sudo zypper install python3-pip                # OpenSuse based
```

After it is done you can make sure it is installed. Type this in the command line: `sphinx-build --version`

You should get a message telling you what version you have installed. Mine is 1.7.2



Running Sphinx
-------
Now in your command prompt change your location to where this readme.md file is at. This is your project root. All of the commands we will be using will be done in the command prompt.

For a normal HTML build you can just type this in the command line: `make html`
This will generate the HTML files from all the source files (located where we are now) and place everything in the _build directory.

You can also export out the files in EPUB format: `make epub`
This will generate the EPUB files in an epub folder in the _build directory.

Install Specific MiKTeX Packages: Instead of using --install=all, you can try installing the specific missing packages, such as pdflatex, latex, or other necessary TeX packages



# Creating and Updating New Languages
Sphinx can only generate one language at a time. Having multiple languages needs a bit of extra work. This section discussed adding more languages and configuring it.


Updating POT files from English version
---------------------------------------
To take your base English files (in RST files) and generate POT files for other languages,  type this in the command prompt: `make gettext`

The POT files will be generated in your _build directory under a new "gettext" folder. POT files are the base files that other translations will use. You will need to run this again if you make changes to your English (RST) files to have an up to date POT file. 


Updating PO files with new translations
---------------------------------------
From the POT files we can generate/update PO files for the translators to use: `sphinx-intl update --pot-dir _build/gettext -l de -l ja`

This will take the information from the POT files and output the PO files in a locale folder. The above example creates a german and japanese PO files at the same time. You can add as many languages as needed


Send translation to editor
--------------------------
You can use a free translation tool like https://localise.biz/free/poeditor to edit PO files.
Watch out. This program might add a 'zxx' as the language to the outputted PO file. That will need to be corrected if that happens. Translators can send you back the PO files when they are done. We have a command that can turn them into MO files later, so translators don't have to worry about that.

Images can be translated if a translation team wants to provide their own images. All images in the image folder are by default for 'en'. When you want to translate a specific image, go into that folder and add another folder with your language code to add in the translated versions of images. So Sphinx will search for a dutch version of `/images/Pixels-brushstroke.png` at `/images/nl/Pixels-brushstroke.png` and for a dutch version of `/images/dockers/Krita-tutorial2-I.1-2.png` in `/images/dockers/nl/Krita-tutorial2-I.1-2.png`.

Many images won't need a translation, so images can be left untranslated or just the alternate text can be translated.



Turning the PO files to MO Files
--------------------------------
Websites read MO files, not PO files. We need to convert the translated PO files when we are ready. To do this we need to run the make command like normal, but specify a language option: `sphinx-intl build`

This will take everything inside the locale directory and create MO files from them.


Build out changes to language  (en and de)
-------------------------------


To build out a specific language we need to specify which language to output and then build. This can be done with the following commands:

On Windows:

```
set currentLanguage = 'de'
set SPHINXOPTS=-D language="%currentLanguage%"
make.bat html
```

or

```
set SPHINXOPTS=-D language="de"
.\make.bat html
```

On Linux:

`make -e SPHINXOPTS="-D language='de'" html`

In this example we changed the language to German and built out HTML files. Everything in the _build directory should be using the German translations.



Using multiple languages at once
--------------------------------
To be able to have multiple languages at once, we will start to use a "dist" folder. The basic idea is that after Sphinx builds out the documentation for a language, it will copy the files out to a new location that is in its language code.

To copy the files to the dist folder use the following command:

Windows:

`robocopy ./_build/html ./dist/%currentLanguage%/ /E`

Linux:
```
mkdir dist
mkdir dist/de/
cp -R _build/html dist/de/
```

You should see all the documentation files in the dist folder inside its language folder. We only need the stuff inside the html folder as the other folders are for helping with translation. Change the language like in the above step and do the same process for all languages.

Switching languages for the site
--------------------------------
The theme has a built-in language switcher. It works by looking at the URL for the existing language, and then looking at the HTML select tag with the language drop down. It just swaps out the language code in the URL if it finds out they are different.

You will need to update the theme file to include all the languages you support. This is in the Theme > layout.html file. If you do a search for `language-selector-container` you should find out how this list is populated. Themes cannot be translated, so whatever text is used will appear for all languages.

You will need to output all the languages again to see the updated language selector

# Theme notes
The theme is a customized version of the rtd theme. You can change out the logo image from the Theme > static > images folder. The custom language switcher logic is also custom. That is found in the Theme > static > js > theme.js file at the bottom.

Note: On Kubuntu, the `html_static_path` had to be set to `['theme/static']`


# Re-building faster
It can be tedious making tweaks and having to run a bunch of steps over and over. There is an included `rebuild-all.bat` script that you can run from your project root directory. It clears out the build and dist directories, then rebuilds the different languages. You will probably have to modify this to output whatever languages you want. It also generates EPUB versions for each language and puts it in each language.

Once you have set up the languages you can just run this command: `rebuild-all.bat`

After a few seconds all the languages should be updated in the dist folder for you to test. 


# Optional: Exporting to PDF
Sphinx cannot export out to PDF, but it can output an intermediate format called latex. This latex format can be used by other programs to generate the PDF files for the documentation. To export out the documentation in latex format run this command from your project root: `make latex`

A new latex folder will be created in your _build directory that has the content in latex format.

We need to download another program now to convert those files to PDF.

#### Windows:

On Windows 10 I used MikTex (200MB): https://miktex.org/

When you install that it will add a command line function. Open a command prompt and type this: `pdflatex --version`

Mine says MiKTeX-pdfTeX 2.9.6642 (1.40.19). If you don't see it you either didn't install it or you need to open a new command prompt window for Windows to see the newly installed tool.

Still in your command prompt, go into your _build directory, then the latex folder. Run this command to generate the PDF: `pdflatex --output-directory=./output kritaManual.tex'

The "kritaManual.tex" is the file in your latex folder.

#### Linux:

The linux latex installation requires 1 gb to be spent on latex... I kid you not.

Kubuntu 17.10:
```
sudo apt-get install texlive-latex-recommended texlive-fonts-recommended  texlive-latex-extra latexmk texlive-luatex texlive-xetex
mkdir _build/output

make latexpdf
```
For quiet mode:

`make latexpdf LATEXMKOPTS="-silent"`

The latex packages do not like unicode characters, nor svgs, nor gifs. The manual is utterly unprepared for it...

Depending on what options you chose for installation, there might be a number of warnings about 'packages' needing to be installed. Those are just extra tools to help with the PDF conversion and are ok to install. After you hit confirm a number of times you should see the PDF in the output folder.

Install Specific MiKTeX Packages: Instead of using --install=all, you can try installing the specific missing packages, such as pdflatex, latex, or other necessary TeX packages.
```
docker run -ti -v miktex:/var/lib/miktex -v $(pwd):/miktex/work -e MIKTEX_UID=$(id -u) miktex/miktex:essential mpm --install package_name

Check for Available MiKTeX Packages: To identify what packages are available for installation, you can list all the available packages in the MiKTeX container using:
```
docker run -ti -v miktex:/var/lib/miktex -v $(pwd):/miktex/work -e MIKTEX_UID=$(id -u) miktex/miktex:essential mpm --list

```
