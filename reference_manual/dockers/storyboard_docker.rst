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
would actually playout. It is similar to a trial-run for your finished animation.

The Storyboard docker makes creating and managing storyboards easier in Krita. You can 
add, remove and edit panels and the comments in them. It is interactive with the timeline
docker and the layer stack of krita. It consists of a list of panels that can be arranged 
in different arrangements. It also supports exporting the storyboard to document formats 
such as PDF and SVG.

Upper buttons
-------------

.. image:: /images/dockers/Storyboard_uper_buttons.png

.. _Export Menu:

Export
    A drop down menu which consists of the export options available for the storyboard.
    This option can be used to export the storyboard to PDF or SVG documents. You can specify
    the layout of the exported file using the Export dialog's options. This might be useful 
    when discussing ideas and planning the animation with teammates or if you want to show 
    your animation's idea to some potential employer. For details about exporting see :ref:`Exporting Storyboards`

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
----------------

A storyboard item represents a single panel in the storyboard. It shows the thumbnail and other related information related to the panel. Here, you can edit the fields such as name, duration and comments. Storyboard items can be added or removed before or after any other item. The order of items can be changed using Drag and Drop.

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
    A thumbnail version of the canvas. Unlike the comments, it cannot be edited inside the docker, instead it shows the changes made to the canvas with some delay.
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
-------------------------

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

.. _Using Storyboard docker:

Using Storyboard docker
-----------------------

Adding Panels
    There are 3 ways to add panels :

    * |mouseright| and :guilabel:`Add Storyboard Item After` or :guilabel:`Add Storyboard Item Before`

    * Plus button at the lower left corner of thumbnail of panel, this is the same as :guilabel:`Add Storyboard Item After`.

    * Adding keyframes in the timline docker. If there are no storyboard panels for the time, a new panel will be added to storyboard docker. 

Deleting Panels
    There are 3 ways to delete panels :

    * |mouseright| and :guilabel:`Remove Storyboard Item`.

    * Bin(delete) button at the lower right corner of thumbnail of panel, this is the same as :guilabel:`Remove Storyboard Item`.

    * Removing keyframes in the timline docker. If there are no other keyframes at that time, the panel for that time will be deleted from storyboard docker.

    .. note::
        Deleting item in storyboard does not delete the keyframes at the item's frame. So the last action here is not the same as the first two.

Managing Comment Fields
    * To add Comment fields, e.g. Action or Dialogue, go to :ref:`Comment menu <Comment Menu>` and click on the plus button at the bottom-left. A new comment field will be added to the list of comments. Change its name and press :kbd:`Enter`. This will add a comment field to all panels in the docker. 
    * To delete a comment field, select it and press the Delete button at the bottom-corner of :ref:`Comment menu <Comment Menu>`.
    * To toggle visiblity of a comment field click on the eye icon.
    * To rearrange order of comment fields use drag and drop in the :ref:`Comment menu <Comment Menu>`.

Adding Comments
    To add a comment to a comment field in a panel, double click on the comment's area to make it editable and then after adding comment click outside of the area to save it.

Changing duration
    Use the spin-box's up and down button to change duration by one. Double click to make the field editable by typing.

Working with multiple layers
    When working with multiple layers, if you want to change only one of the panels' thumbnail when drawing on canvas, you should insert keyframes at panel's time. 
    An easy way to do this is to turn the :guilabel:`Auto Frame` mode on in the :ref:`animation docker <animation_docker>`. That way any chagnes that you make with the panel selected would insert a keyframe at the panel's time in the current layer and thus would change the thumbnail for that panel.

.. _Exporting Storyboards:

Exporting Storyboard
--------------------

The storyboard created using the docker can be exported to PDF or SVG documents. The :ref:`Export menu <Export Menu>` offers options to export storyboard.
It has options to export as either PDF or SVG document. Choosing any of the option will take you to the Export Dialog where you can choose the layout, that is, how panels of the storyboard are arranged in the exported document.
You can either choose the layout using custom options provided or using an SVG file. The Export dialog also provides options to choose the panels to export.

You can choose the range using the frame number of storyboard panel. The first two options in the dialog let you choose the first and last frame to export. All panels that have frame number in that range(inclusive of both the first and last) would be exported.
There is also an option to choose the font size of any text on the document, such as panels' name, duration or the comments.

Specifying layout using custom options
    The following options are provided to specify layout :

    * Rows per page 
    * Columns per page 
    * Page Size 
    * Page Orientation 

    .. image:: /images/dockers/storyboard_custom_options.png

Specifying Layout using SVG file
    For specifying layout using an SVG file you have to upload an SVG file. The file should have one or more non-overlapping rectangles.

    .. image:: /images/dockers/storyboard_SVG_layout.png

File name for Export document
    * PDF : Choose the filename of the export document.
    * SVG : Choose the directory where you want to save the exported files and a base name. The exported files will be named baseName followed by a numerical suffix. e.g. base0, base1 etc.

    .. image:: /images/dockers/storyboard_export_file.png

