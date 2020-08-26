.. meta::
   :description:
        The MyPaint Brush Engine manual page.

.. metadata-placeholder

   :authors: - Ashwin Dhakaita <ashwingpdhakaita@gmail.com>
   
   :license: GNU free documentation license 1.3 or later.

.. index:: Brush Engine, MyPaint Brush Engine
.. _mypaint_brush_engine:

===================
MyPaint Brush Engine
===================

.. image:: /images/icons/mypaintbrush.png


MYPAINT is a free painting program that comes with a lot of specific brushes. Krita can use those brushes for painting using the MyPaint brush engine.

Parameters
----------


Has the following parameters:

* :ref:`basic`
* :ref:`color`
* :ref:`speed`
* :ref:`dabs`
* :ref:`opacity`
* :ref:`tracking`
* :ref:`smudge`
* :ref:`stroke`
* :ref:`custom`


.. _basic:

Basic
-----

Radius
^^^^^^
    This is to set the radius of the brush. Please note that all of the mypaint radii are logarithmic.

Hardness
^^^^^^^^
    Hardness define the sharpness of the brushes. 

.. image:: /images/brushes/mypaint/hardness.png

Eraser
^^^^^^
    If this option is checked the brush starts to act as an eraser.
    
Radius by Random
^^^^^^^^^^^^^^^^
    This option is used to generate a brush preset whose radii and opacity changes randomly during the stroke. This should not be confused with random dynamic option in radius setting.
    
Anti Aliasing
^^^^^^^^^^^^^
    This option is used to smoothen the edges of the brush and remove the jagging effect. Though this only for very small presets.
        
Elliptical Dab: Angle
^^^^^^^^^^^^^^^^^^^^^
    This option is used to set the angle of dab for the brush. At times we might want to have rather straight brushes, this setting combined with elliptical dab ratio and direction filter helps us achieve that.
    
Elliptical Dab: Ratio
^^^^^^^^^^^^^^^^^^^^^
    This option is used to change the aspect ratio of dab.
    
.. image:: /images/brushes/mypaint/elliptical_dab_ratio.png

Direction Filter
^^^^^^^^^^^^^^^^
    This option is used to make the dabs adhere to a specific vector direction. In simple words, at times you might find the dabs not following the vector path of your strokes, this setting helps us rectify that.

.. _color:

Color
-----

Change color Hue
^^^^^^^^^^^^^^^^
    This option is used to shift the hue in clockwise or anti-clockwise direction.

Change color Lightness
^^^^^^^^^^^^^^^^^^^^^^
    This option is used to change the color luminance using the HSL color model.
    
Change color Value
^^^^^^^^^^^^^^^^^^
    This option is used to change the color value (brightness, intensity) in HSV color model.
    
Change color Saturation HSL
^^^^^^^^^^^^^^^^^^^^^^^^^^^
    This option is used to change the color saturation using HSL color model.
    
Change color Saturation HSV
^^^^^^^^^^^^^^^^^^^^^^^^^^^
    This option is used to change the color saturation using HSV color model.
    
.. _speed:

Speed
-----

Fine Speed Gamma
^^^^^^^^^^^^^^^^
    This option is used to change the reaction of the fine speed input to extreme physical speed.

Gross Speed Gamma
^^^^^^^^^^^^^^^^^
    This option is used to change the reaction of gross speed to extreme physical speed.
    
Fine Speed Slowness / Fine Speed Filter
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    This option describe how slow the input fine speed is following the real speed.

Gross Speed Slowness / Gross Speed Filter
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    This option describes how slow the input gross speed is following the real speed.
    
Offset by Speed
^^^^^^^^^^^^^^^
    This option is used to change the position of dabs based on stroke speed.
    
Offset By Random [Jitter]
^^^^^^^^^^^^^^^^^^^^^^^^^
    This option adds a random offset to the position where each dab is drawn.
    
.. _dabs:

Dabs
----

Dabs per Actual Radius
^^^^^^^^^^^^^^^^^^^^^^
    This option describes how many dabs to draw when the pointer moves the distance of brush radius.
    
Dabs per Second
^^^^^^^^^^^^^^^
    This option describes how many dabs to draw per second irrespective of any other parameter.
    
.. _opacity:

Opacity
-------

Opaque
^^^^^^^
    Opaque describe the translucency or transparency of mypaint brushes.

Opaque Linearize
^^^^^^^^^^^^^^^^
    This option lets you correct the nonlinearity introduced by blending multiple dabs on top of each other.

Opaque Multiply
^^^^^^^^^^^^^^^
    This makes opacity depend on pressure.

.. _tracking:

Tracking
--------

Slow Tracking
^^^^^^^^^^^^^
    Slow pointer tracking speed. Higher values remove jitter in cursor movements. Useful for drawing smooth outlines.
    
Slow Tracking per Dab
^^^^^^^^^^^^^^^^^^^^^
    Similar to above but at a brushdab level.

Tracking Noise
^^^^^^^^^^^^^^
    Add randomness to mouse pointer. This usually generates many small lines in random directions.
    
.. _smudge:

Smudge
------

Smudge
^^^^^^
    This option lets you paint with smudge color instead of brush color. The smudge color slowly changes to the color you are painting on.

Smudge Length
^^^^^^^^^^^^^
    This option controls how fast the smudge color becomes the color you are painting on.

Smudge Radius logarithmic
^^^^^^^^^^^^^^^^^^^^^^^^^
    This option modifier the radius of the circle where the color is picked up for smudging.

.. _stroke:

Stroke
------

Stroke Duration logarithmic
^^^^^^^^^^^^^^^^^^^^^^^^^^^
    This option describes how far you have to move until the stroke input becomes 1.0

Stroke Holdtime
^^^^^^^^^^^^^^^
    This option defines how long the stroke input stays at 1.0. After that is will go back towards 0.0 and then start increasing again.

Stroke Threshold
^^^^^^^^^^^^^^^^
    This option defines how much pressure is needed to start the stroke. This affects stroke input only. Mypaint doesnot need any minimum pressure level to start drawing.

.. _custom:

Custom Input
------------
    
Custom Input
^^^^^^^^^^^^
    The idea of this input is that you make this input depend on a mixture of pressure/speed/whatever, and then make other settings depend on this 'custom input' instead of repeating this combination everywhere you need.

Custom Input Slowness
^^^^^^^^^^^^^^^^^^^^^
    This option defines how slow the custom input setting actually follows the desired value.

    

    
    
    
    
    
    

    
    
    
    
    
    
    
    




