.. meta::
   :description:
        Creating and managing gradients in Krita.

.. metadata-placeholder

   :authors: - Wolthera van Hövell tot Westerflier <griffinvalley@gmail.com>
             - Scott Petrovic
             - Peter Schatz
   :license: GNU free documentation license 1.3 or later.

.. index:: Resources, Gradients
.. _resource_gradients:

=========
Gradients
=========

Accessing a Gradient
--------------------

The Gradients configuration panel is accessed by clicking the Gradients icon (usually the icon next to the disk).  

.. image:: /images/gradients/Gradient_Toolbar_Panel.png

Gradients are configurations of blending between colors.  Krita provides over a dozen preset dynamic gradients for you to choose from.  In addition, you can design and save your own.

Some typical uses of gradients are:

* Fill for vector shapes.
* Gradient tool
* As a source of color for the pixel brush.

There is no gradients docker. They can only be accessed through the gradient "quick-menu" in the toolbar.

Editing a Gradient
------------------

Krita has two gradient types:

#. Segmented Gradients, which are compatible with GIMP, have many different features but are also a bit complicated to make.
#. Stop Gradients, which are saved as SVG files and similar to how most applications do their gradients, but has less features than the segmented gradient.

Initially we could only make segmented gradients in Krita, but in 3.0.2 we can also make stop gradients.

.. image:: /images/gradients/Krita_new_gradient.png
   :align: center

You can make a new gradient by going into the drop-down and selecting the gradient type you wish to have. By default Krita will make a stop-gradient.

Stop Gradients
~~~~~~~~~~~~~~

.. image:: /images/gradients/Krita_stop_gradient.png
   :align: center

Stop gradients are very straight forward:

* |mouseleft| on the gradient to add a stop.
* |mouseleft| on the stops to select them, and drag to move them.
* Drag stops outside of the bar (further than the way to the left or right) to remove them.

.. image:: /images/gradients/Krita_move_stop.png
   :align: center

A selected stop can have its color and transparency changed using the color button and the opacity slider below.

.. image:: /images/gradients/Krita_stop_sudden_change.png
   :align: center

As per SVG spec, you can make a sudden change between stops by moving them close together. The stops will overlap, but you can still drag them around.

.. versionadded:: 4.4
    Gradients can have stops that use the currently selected Foreground or Background colors

.. image:: /images/gradients/Krita_Stop_Gradient_Editor_Popup.png

Segmented Gradients
~~~~~~~~~~~~~~~~~~~~

.. image:: /images/gradients/Krita_Editing_Custom_Gradient.png

Segmented gradients are a bit more tricky. Instead of going from color to color, it allows you to define segments, which each can have a begin and end color.

|mouseright| the gradient to call up this menu:

.. image:: /images/gradients/Krita_segment_gradient_options.png
   :align: center

Split Segment
    This splits the current segment in two, using the white arrow, the segment middle as the place to split. It will also use the color at the white arrow to define the new colors in place in the new segments.
Duplicate segment
    Similar to split, but instead the two new segments are copies of the old one.
Mirror segment
    Mirrors the segment colors.
Remove segment
    Removes the segment.

|mouseleft| + dragging the black arrows will resize the segments attaching to those arrows. |mouseleft| + dragging the white arrows will change the mid point of that segment, changing the way how the mixture is made.

At the bottom, you can set the color and transparency of either part of the segment.

You can also set the blending. The first is the interpolation mode:

.. image:: /images/gradients/Krita_gradient_segment_blending.png
   :align: center

#. Linear - Does a linear blending between both segments.
#. Curved - This causes the mix to ease-in and out faster. 
#. Sine - Uses a sine function. This causes the mix to ease in and out slower.
#. Sphere, increasing - This puts emphasis on the later color during the mix.
#. Sphere, decreasing - This puts emphasis on the first color during the mix.

Finally, there's the model:

.. image:: /images/gradients/Krita_gradient_hsv_cw.png
   :align: center

RGB
    Does the blending in RGB model.
HSV clockwise
    Blends the two colors using the HSV model, and follows the hue clockwise (red-yellow-green-cyan-blue-purple). The above screenshot is an example of this.
HSV counter-clock wise.
    Blends the color as the previous options, but then counter-clockwise.
    
.. versionadded:: 4.4
    Gradients can have segment endpoints that use the currently selected Foreground or Background colors, and those endpoints can be transparent.  These features allow full compatibility with GIMP gradients.

.. image:: /images/gradients/Krita_Segment_Gradient_Editor_Popup.png

Generic Gradient Editor
-----------------------
In some places you will find that the previously mentioned gradient preset
chooser and editors are shown together and that they are interconnected. When
this happens, you are probably using the generic gradient editor, that was
introduced to ease the creation and manipulation of gradients.

It's main features are:

* Allows you to load/save gradients from/to the gradient resources to/from the
  editor.
* Allows to overwrite an existing gradient resource.
* A specific editor is shown automatically depending on the type of the
  gradient (stop gradient or segmented gradient).
* Allows to convert between gradient types

Following is a breakdown of the interface of the editor:

.. image:: /images/gradients/generic_gradient_editor_breakdown.png

1. **Add gradient button** - Pressing this button you can add the current gradient to
   the resources.
2. **Update gradient button** - Pressing this button you can overwrite the gradient
   resource that is currently selected in the gradient chooser. Keep in mind
   that the type of the gradient resource and the type of the gradient that is
   currently being edited must match.
3. **Convert gradient button** - Pressing this button you can convert the current
   gradient to a stop gradient if it is a segmented gradient or to a segmented
   gradient if it is a stop gradient.
4. **Convert gradient warning** - This icon will appear when pressing the convert
   button means that some data or info will be lost in the conversion. This can
   happen when converting from a segmented gradient to a stop gradient.
5. **Gradient presets button** - Pressing this button will pop-up a gradient preset
   chooser to let you choose a gradient and edit it. This button is only
   available if the "use a pop-up gradient preset chooser" is checked.
6. **Options button** - Pressing this button will show an options menu.
7. Specific editor area. Here the stop or segmented gradient editor will be
   shown when a gradient is selected. The specific gradient editors are
   documented in the previous sections.
8. **Gradient preset chooser** - This widget shows a collection of gradient resources
   and allows you to load one of those gradients into the editor.
9. **"Use a pop-up gradient preset chooser" option** - If this option is checked, the
   gradient preset chooser will be accessed through a pop-up window that is
   shown by clicking the "choose gradient preset" button; If this option is not
   checked then the gradient preset chooser is shown inline above all the other
   widgets.
10. **"Show compact gradient preset chooser" option** - If this option is checked,
    then only the collection of gradient resources is shown, without any
    surrounding buttons or options. If it is not checked then the gradient
    preset chooser will also show some extra buttons, like tag filtering or
    viewing options.
