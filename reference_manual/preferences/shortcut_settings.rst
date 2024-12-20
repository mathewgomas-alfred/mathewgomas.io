.. meta::
   :description property=og\:description:
        Configuring shortcuts in Krita.

.. metadata-placeholder

   :authors: - Micheal Abrahams
             - Scott Petrovic
   :license: GNU free documentation license 1.3 or later.

.. index:: Preferences, Settings, Shortcuts
.. _shortcut_settings:

=================
Shortcut Settings
=================

Configuring shortcuts is another way to customize the application to fit you.  Whether you are transitioning from another app, like Photoshop or MyPaint, or you think your own shortcut keys make more sense for you then Krita has got you covered.  You get to the shortcuts interface through :menuselection:`Settings --> Configure Krita...` and by choosing the :menuselection:`Keyboard Shortcuts` tab.

Most of Krita's shortcuts are configured in the menu section :menuselection:`Settings --> Configure Krita... --> Shortcuts`. The shortcuts configured here are simple key combinations, for example the :kbd:`Ctrl + X` shortcut to cut. Shortcuts can also be sequences of key combinations (e.g. :kbd:`Shift + S` shortcut then the :kbd:`B` key). Krita also has a special interface for configuring the mouse and stylus events sent to the canvas, found under :ref:`canvas_input_settings`.

To use, just type the :guilabel:`Action` into the Search box you want to assign/reassign the shortcut for.  Suppose we wanted to assign the shortcut :kbd:`Ctrl + G` to the :guilabel:`Action` of Group Layers so that every time we pressed the :kbd:`Ctrl + G` shortcut a new Layer Group would be created.  Use the following steps to do this:

#. Type "Group Layer".
#. Click on Group Layer and a small inset box will open.
#. Click the Custom radio button.
#. Click on the first button and type the :kbd:`Ctrl + G` shortcut.
#. Click OK.

From this point on, whenever you press the :kbd:`Ctrl + G` shortcut you'll get a new :guilabel:`Group Layer`.

.. tip::
    Smart use of shortcuts can save you significant time and further streamline your workflow.

.. versionadded:: 5.0

   Actions, which includes everything that can be assigned a shortcut, can now be searched with :kbd:`Ctrl + Enter`, reducing the need to assign a shortcut to every single action. This itself is called the :guilabel:`Search Actions` shortcut, and can also be reassigned if desired.

Menu Items
----------

Search bar
    Entering text here will search for matching shortcuts in the shortcut list.
Shortcut List
    Shortcuts are organized into sections. Each shortcut can be given a primary and alternate key combination.
Load/Save Shortcuts Profiles
    The bottom row of buttons contains commands for exporting and import keyboard shortcuts.

.. image:: /images/preferences/Krita_Configure_Shortcuts.png

Configuration
-------------

Primary and alternate shortcuts
    Each shortcut is assigned a default, which may be empty. The user can assign up to two custom shortcuts, known as primary and alternate shortcuts. Simply click on a "Custom" button and type the key combination you wish to assign to the shortcut. If the key combination is already in use for another shortcut, the dialog will prompt the user to resolve the conflict.

Shortcut schemes
    Many users migrate to Krita from other tools with different default shortcuts. Krita users may change the default shortcuts to mimic these other programs.  Currently, Krita ships with defaults for Photoshop and Paint Tool Sai. Additional shortcut schemes can be placed in the ~/.config/krita/input/ folder.

Saving, loading and sharing custom shortcuts
    Users may wish to export their shortcuts to use across machines, or even share with other users. This can be done with the save/load drop-down. Note: the shortcuts can be saved and overridden manually by backingup the text file kritashortcutsrc located in ~/.config/krita/.  Additionally, the user can export a custom shortcut scheme file generated by merging the existing scheme defaults with the current customizations.
