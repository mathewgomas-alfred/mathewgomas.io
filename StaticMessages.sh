#!/usr/bin/env bash

EXPORTS_POT_DIR=1
FILE_PREFIX=docs_krita_org_

function export_pot_dir # First parameter will be the path of the directory where we have to store the pot files
{
    echo "Creating POT files"
    potdir=$1
    make gettext
    cd _build/gettext
    rm -rf untranslatable_pages.pot untranslatable_pages
    # Flatten the dir structure
    find * -type f -exec bash -c 'new=$(echo "{}" | sed s#/#___#g); mv "{}" "docs_krita_org_$new"' \;
    mv *.pot $potdir
    rm -rf *
}

function import_po_dirs # First parameter will be a path that will be a directory to the dirs for each lang and then all the .po files inside
{
    podir=$1
    mkdir -p locale
    # These are the language codes that sphinx supports.
    for lang in bn ca cs da de es et eu fa fi fr he hr hu id it ja ko lt lv mk nb_NO ne nl pl pt_BR pt_PT ru si sk sv tr uk_UA vi zh_CN zh_TW
    do
        if [ -d "$podir/$lang" ]; then
            rm -rf locale/$lang/LC_MESSAGES
            mkdir -p locale/$lang/LC_MESSAGES
            mv $podir/$lang/*.po locale/$lang/LC_MESSAGES
            cd locale/$lang/LC_MESSAGES
            # Recreate the dir structure
            find * -type f -exec bash -c 'new=$(echo "{}" | sed s#docs_krita_org_##g | sed s#___#/#g); mkdir -p `dirname $new`; mv {} $new' \;
            cd ../../..
        fi
    done
}
