.. meta::
   :description:
        The select menu in Krita.

.. metadata-placeholder

   :authors: - Wolthera van Hövell tot Westerflier <griffinvalley@gmail.com>
             - Scott Petrovic
   :license: GNU free documentation license 1.3 or later.

.. index:: Selection
.. _select_menu:

===========
Select Menu
===========

.. glossary::

    Select All
        Selects the whole layer.

    Deselect
        Deselects everything(except for active Selection Mask)

    Reselect
        Reselects the previously deselected selection.

    Invert Selection
        Inverts the selection.

    Convert to Vector Selection.
        This converts a raster selection to a vector selection. Any layers of transparency there might have been are removed.
        
    Convert to Raster Selection.
        This converts a vector selection to a raster selection.
        
    Convert Shapes to Vector Selection
        Convert vector shape to vector selection

    Convert to shape
        Converts vector selection to vector shape.

    Display Selection
        Display the selection. If turned off selections will be invisible.

    Show Global Selection Mask.
        Shows the global selection as a selection mask in the layers docker. This is necessary to be able to select it for painting on.

    Scale
        Scale the selection

    Select from Colour Range
        Select from a certain color range.

    Select Opaque
        Select all opaque(non-transparent) pixels in the current active layer. Semi-transparent(or semi-opaque) pixels will be semi-selected. Has the following subactions:
        
        .. versionadded:: 4.2
        
        Select Opaque (Replace)
            Replaces the current selection with a selection of the layer transparency.
        Select Opaque (Add)
            Adds a selection of the layer transparency to the current selection.
        Select Opaque (Subtract)
            Removes a selection of the layer transparency from the current selection.
        Select Opaque (Intersect)
            Intersects the current selection with a selection of the layer transparency. The new selection is where there is an overlap between the two.

    Feather Selection
        Feathering in design means to soften sharp borders. So this adds a soft border to the existing selection.

    Grow Selection
        Make the selection a few pixels bigger.

    Shrink Selection
        Make the selection a few pixels smaller.

    Border Selection
        Take the current selection and remove the insides so you only have a border selected.

    Smooth
        Make the selection a little smoother. This removes jiggle.
