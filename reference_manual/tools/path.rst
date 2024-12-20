.. meta::
   :description:
        Krita's path tool reference.

.. metadata-placeholder

   :authors: - Wolthera van Hövell tot Westerflier <griffinvalley@gmail.com>
             - Scott Petrovic
   :license: GNU free documentation license 1.3 or later.

.. index:: Tools, Vector, Path, Bezier Curve, Pen
.. _path_tool:
.. _bezier_curve_tool:

=================
Bezier Curve Tool
=================

|toolbeziercurve|

You can draw curves by using this tool. Click |mouseleft| to indicate the starting point of the curve, then click again for consecutive control points of the curve. While creating a control point, drag to create the handles, they will show as red lines.

With an intermediate control point (i.e. a point that is not the starting point and not the ending point), you can move the direction handles separately to have the curve enter and leave the point in different directions. After editing a point, you can just click on the canvas to continue adding points to the curve. When creating a path on a vector layer, the resulting path can be further edited with the :ref:`shape_edit_tool`.

.. figure:: /images/tools/path_tool_usage.png
   
   The path preview that shows while drawing a path. The start of the path is indicated with a white square, the preview for the path itself in black, and the red dotted lines being the control points for the current handle.

Double-click |mouseleft| on any point of the curve or press the :kbd:`Enter` key to finish drawing, or press the :kbd:`Esc` key to cancel the entire curve.

While drawing a curve, pressing the :kbd:`Ctrl` key while dragging will push the handles both ways. The :kbd:`Alt` key will create a sharp corner, and the :kbd:`Shift` key will allow you to make a handle while at the end of the curve. |mouseright| will undo the last added point.

Tool Options
------------

.. versionadded:: 4.1.3

   Autosmooth Curve
        Toggling this will have nodes initialize with smooth curves instead of angles. Untoggle this if you want to create sharp angles for a node. This will affect curve sharpness from dragging after clicking.

Angle Snapping Delta
    The angle to snap to.
Activate Angle Snap
    Angle snap will make it easier to have the next line be at a specific angle of the current. The angle is determined by the :guilabel:`Angle Snapping Delta`.
