.. meta::
   :description:
        Overview of the artistic color selector docker.

.. metadata-placeholder

   :authors: - Wolthera van Hövell tot Westerflier <griffinvalley@gmail.com>
             - Scott Petrovic
             - Anna Medonosova <anna.medonosova@gmail.com>
   :license: GNU free documentation license 1.3 or later.

.. index:: Color, Color Selector, ! Artistic Color Selector
.. _artistic_color_selector_docker:

============================
Artist Color Selector Docker
============================

.. image:: /images/en/Krita_Artistic_Color_Selector_Docker.png

A round selector that tries to give you the tools to select colors ramps efficiently.

Usage
-----

Select hue and saturation on the wheel (5) and value on the value scale (4). |mouseleft| changes foreground color (6). |mouseright| changes background color (7).

Last selected swatches are outlined with red.

The blip shows the position of current foreground color on the wheel (black and white circle) and on the value scale (black and white line).

This selector does not update on change of foreground color.

The selector
------------

.. image:: /images/en/Krita_Artistic_Color_Selector_Docker_2.png


1 - gamut masking toolbar
    The toolbar consists of a toggle button to turn the mask off and on (left) and current mask title (right).

    Masks are selected and managed in the “Gamut Masks” docker. (Link)
2 - color wheel preferences menu (link to section)
3 - selector settings menu (link to section)
4 - value scale
    * Optional comparative gray scale with lightness percentage on the left
    * The black and white line (the blip) shows current foreground color’s value
    * For HSY model, the value scale can be adjusted by user-defined gamma

5 - the wheel
    * The wheel is divided into color swatches by hue sectors and saturation rings.
    * The black and white circle (the blip) shows current foreground color’s hue and saturation.
6 - current foreground color
7 - current background color

Wheel preferences
-----------------

.. image:: /images/en/Krita_Artistic_Color_Selector_Docker_3.png


Sliders 1, 2, and 3 
    adjust the number of steps of the value scale, number of hue sectors and saturation rings on the wheel, respectively.

Continuous Mode
    The value scale and hue sectors can also be set to continuous mode (with the infinity icon on the right of the slider). If toggled on, the respective area shows a continuous gradient instead of the discreet swatches.

Invert saturation (4)
    changes the order of saturation rings within the the hue sectors. By default, the wheel has gray in the center and most saturated colors on the perimeter. “Inverted saturation” puts gray on the perimeter and most saturated colors in the center.

Reset to default (5)
    loads default values for the sliders 1,2 and 3. These default values are configured in selector settings. 
