.. meta::
   :description:
        Overview of the storyboard docker.

.. metadata-placeholder

   :authors: - Saurabh Kumar <saurabhk660@gmail.com>
   :license: GNU free documentation license 1.3 or later.

.. index:: ! Storyboard, Storyboarding
.. _storyboard_docker:

=================
Storyboard Docker
=================

.. image:: /images/dockers/Storyboard_thumbnailonly_view.png

A storyboard is a visual representation of an animation sequence and breaks down the 
action into individual panels. It is a series of ordered drawings, with dialogue, 
action or other pertinent details. Storybaording is used extensively during the 
planning phase of animation to discuss and keep a record of how the story and animation 
would actually playout. It is similar to a trial-run for your finished animation. It looks 
like a comic-book, but unlike a comic-book, storyboard is not the end result but rather an 
intermediate planning step. 

The Storyboard docker makes creating and managing storyboards easier in Krita. You can 
add, remove and edit panels and the comments in them. It is interactive with the timeline
docker and the layer stack of krita. It consists of a list of panels that can be arranged 
in different arrangements. It also supports exporting the storyboard to document formats 
such as PDF and SVG.

Upper buttons
-------------

.. image:: /images/dockers/Storyboard_uper_buttons.png

Export
    A drop down menu which consists of the export options available for the storyboard.
    This option can be used to export the storyboard to PDF or SVG documents. You can specify
    the layout of the exported file using the Export dialog's options. This might be useful 
    when discussing ideas and planning the animation with teammates or if you want to show 
    your animation's idea to some potential employer.

.. _Comment Menu:

Comment
    A drop down menu which consists of a list of comments for storyboard items, a Delete 
    Comment button and an Add Comment button. You can add comments to all panels, remove them
    or change their visiblity from the drop down menu. Order of comments can also be changed by 
    drag and drop This menu changes things for every panel in the storyboard docker.

    .. image:: /images/dockers/Storyboard_comment.png

Lock
    This option is used to stop adding items when keyframes are added in the Timeline docker.
    This might be useful when tweening where you might not want the detailed frames in the storyboard docker.  

.. _Arrange Menu:

Arrange
    A properties icon. It consists of View and Mode options which can be used to change the arrangement of items in the docker.
    For details about views and modes see :ref:`Storyboard Views and Modes`

    .. image:: /images/dockers/Storyboard_arrange.png

Storyboard Item
--------------------

Here, you can select the active item. You can also edit some of the fields such as name, duration and comments. Storyboard items can be added or removed before or after any other item. The order of items can be changed using Drag and Drop.

Frame Number 
    This shows the frame number for this item in the timeline docker. This field cannot be edited.
Name
    The item name, use double- |mouseleft| to make it editable, and press the :kbd:`Enter` key to finish editing.
Duration in second
    A spin-box. This will set the duration of the storyboard item in seconds.
Duration in frames
    A spin-box. This will set the duration of the storyboard item in frames.

.. note::
    The total duration will be equal to number of frames between the current item's frame and next keyframe in the timeline in any layer.

Thumbnail
    A thumbnail version of the canvas. Unlike the comments, it cannot be edited inside the docker, rather it shows the changes made to the canvas with some delay.
Add Item
    A plus icon on the lower left corner of the thumbnail. Adds a storyboard item after the duration of the current item. The new item will have the minimal possible duration.
Delete Item
    A bin icon on the lower right corner of the thumbnail. Deletes the current storyboard item.

.. note::
    Deleting item in storyboard does not delete the keyframes at the item's frame.

Comment Name
    Name of the comment field. This field is uneditable directly but can be edited from the :ref:`Comment menu <Comment Menu>`.
Comment Field
    The comment's content. Do double- |mouseleft| to make it editable, and press the :kbd:`Enter` key to finish editing.


.. _Storyboard Views and Modes:

Storyboard View and Modes
=========================
The View and Mode options are available in storyboard docker in the :ref:`Arrange menu <Arrange Menu>`.
These options allow you to arrange the panels in the storyboard.

View
    These options allow you to choose which parts of the panel to show in the docker.

    * Thumbnail Only : Only the thumbnail part of the panel is visible.

    .. image:: /images/dockers/Storyboard_thumbnailonly_view.png

    * Comments Only : Only the comments part of the panel are visible.

    .. image:: /images/dockers/Storyboard_commentonly_view.png

    * All : All of the panel is visible.

    .. image:: /images/dockers/Storyboard_grid_mode.png

Mode
    These options allow you to choose the orientation of the items in the docker.

    * Row : Panels are arranged in a row-wise fashion. The panels' orientation is horizontal in this mode. That means panels are on the sides of thumbnails rather than below.

    .. image:: /images/dockers/Storyboard_row_mode.png

    * Column : Panels are arranged in column-wise fashion. The panels' orientation is vertical.

    .. image:: /images/dockers/Storyboard_column_mode.png

    * Grid : Panels are arranged in a grid. Also if you change the size of the docker, the grid is rearranged to accomodate more panels in the docker.

    .. image:: /images/dockers/Storyboard_grid_mode.png
