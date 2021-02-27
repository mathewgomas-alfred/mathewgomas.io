.. meta::
   :description:
        Overview of the Animation Curves docker.

.. metadata-placeholder

   :authors: - Wolthera van Hövell tot Westerflier <griffinvalley@gmail.com>
   :license: GNU free documentation license 1.3 or later.

.. index:: Animation, ! Animation Curves, Interpolation, Tweening
.. _animation_curves_docker:

=======================
Animation Curves Docker
=======================

Krita's Animation Curves docker allows artists to animate the values of some properties over time.

When animating a complex cut, it's not unusual to want to animate things that would be difficult or inefficient to do through drawing alone. In traditional pen-and-paper animation dating back to the 1920s, special lighting rigs and purpose-built devices like multiplane cameras were used to pull off special effects that changed animation forever! Likewise, Krita's Animation Curves docker allows us to animate more than just the lines on your canvas, such as a layer's opacity or the position, rotation and scale of a Transform Mask.

Because computers are great with maths and automation, and because most things can be boiled down to numeric values (for example, opacity as a percentage or the position of a Transform Mask), we can plot and visualize the change in values over time on a simple 2D graph. What's more, we can also draw lines and curves that show the computer how we want it to calculate the values in between each of our plotted keyframe values; a technique known as interpolation or "tweening".

.. image:: /images/dockers/Animation_Curves_Docker.png

********
Overview
********

As shown in the image above, Krita's Animation Curves Docker can be thought of as different sections:

**A. Utilities** -- The left side of the toolbar gives animators quick access to all of the widgets that are critical to their workflow; transport controls (previous, play/pause, stop and next buttons), a frame counter, preview controls (speed and drop frames), buttons for adding and removing **scalar keyframes**, buttons for changing the **interpolation mode** and **tangent mode** of the selected keyframe, a box for setting the selected keyframe to a specific value, as well as buttons to help zoom and navigate the main graph view.

**B. Settings** -- While all of the high-traffic controls are presented directly, the right end of the toolbar also contains buttons for opening submenus for things like onion skins and settings that you can generally set and forget (for example, playback range, frame rate and autokey mode).

**C. Channels List** -- This area shows the various channels of the current layer that are currently being animated within the Animation Curves Docker. Each independent channel is associated with a unique color and its visibility within the graph view can be toggled by clicking on the eyeball icon.

**D. Graph View** -- Last but not least is the **curves view**, the big graph of values and times that we use to animate the value of parameters over time. When a **keyframe** is added to the current channel at the current time it will apear as a colored circle within the graph view. After clicking on the keyframe to select it, you can change the value by dragging the circle vertically or by entering a specific value into the value box on the toolbar. Similarly, you can change the time of the selected frame by dragging it horizontally. Finally, when the select keyframe is using **bezier curve interpolation**, selecting it will cause one or more **curve handles** to appear, that can be used to change the shape of the interpolation curve over time.

*****
Usage
*****

When you first open the Animation Curves docker, you'll notice that there are no curves visible!

We first need to add a keyframe to the active animation layer, by clicking on the :guilabel:`Add new keyframe` button on the docker's titlebar section.

.. image:: /images/dockers/Animation_curves_1.png

Opacity should create a bright red curve line in the docker. On the left, in the layer list, you will see that the active layer has an outline of its properties: A red :guilabel:`Opacity` has appeared. Pressing the red dot will hide the current curve, which'll be more useful in the future when more properties can be animated.

.. image:: /images/dockers/Animation_curves_2.png

If you select a dot of the curve, you can move it around to shift its place in the time-line or its value.

On the top, you can select the method of smoothing:

Hold Value
    This keeps the value the same until there's a new keyframe.
Linear Interpolation (Default)
    This gives a straight interpolation between two values.
Custom interpolation
    This allows you to set the section after the keyframe node as one that can be modified. |mouseleft| +dragging on the node allows you to drag out a handler node for adjusting the curving.

So, for example, making a 100% opacity keyframe on frame 0 and a 0% opacity one on frame 24 gives the following result:

.. image:: /images/dockers/Ghost_linear.gif

If we select frame 12 and press :guilabel:`Add New Keyframe` a new opacity keyframe will be added on that spot. We can set this frame to 100% and set frame 0 to 0% for this effect.

.. image:: /images/dockers/Ghost_linear_in-out.gif

Now, if we want easing in, we select the node on frame 0 and press the :guilabel:`Custom Interpolation` button at the top. This will enable custom interpolation on the curve between frames 0 and 12. Doing the same on frame 12 will enable custom interpolation between frames 12 and 24. Drag from the node to add a handle, which in turn you can use to get the following effects:

.. image:: /images/dockers/Ghost_ease_in-out.gif

.. image:: /images/dockers/Animation_curves_3.png

The above shows an ease-in curve.

And convex/concave examples:

.. image:: /images/dockers/Ghost_concave_in-out.gif

.. image:: /images/dockers/Animation_curves_4.png

.. image:: /images/dockers/Ghost_convex_int-out.gif

.. image:: /images/dockers/Animation_curves_5.png

As you may be able to tell, there's quite a different 'texture', so to speak, to each of these animations, despite the difference being only in the curves. Indeed, a good animator can get quite some tricks out of interpolation curves, and as we develop Krita, we hope to add more properties for you to animate this way.

.. note::

    Opacity has currently 255 as maximum in the curve editor, as that's how opacity is stored internally.
