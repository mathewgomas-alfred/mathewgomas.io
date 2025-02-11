.. meta::
   :description:
        Axonometric projection.

.. metadata-placeholder

   :authors: - Wolthera van Hövell tot Westerflier <griffinvalley@gmail.com>
   :license: GNU free documentation license 1.3 or later.
   
This is a continuation of :ref:`the orthographic and oblique tutorial <projection_orthographic>`, be sure to check it out if you get confused!

.. index:: Projection, Axonometric, Dimetric, Isometric
.. _projection_axonometric:

Axonometric
===========

So, the logic of adding the top is still similar to that of the side.

.. image:: /images/category_projection/projection-cube_07.svg 
   :align: center

Not very interesting. But it gets much more interesting when we use a side projection:

.. image:: /images/category_projection/projection-cube_08.svg 
   :align: center

Because our cube is red on both front-sides, and blue on both left and right side, we can just use copies, this simplifies the method for cubes a lot. We call this form of axonometric projection 'dimetric' as it deforms two parallel lines equally.

Isometric is sorta like dimetric where we have the same angle between all main lines:

.. image:: /images/category_projection/projection-cube_09.svg 
   :align: center

True isometric is done with a 90-54.736=35.264° angle from ground plane:

.. image:: /images/category_projection/projection-cube_10.svg 
   :align: center

(as you can see, it doesn't line up perfectly, because Inkscape, while more designed for making these kinds of diagrams than Krita, doesn't have tools to manipulate the line's angle in degrees)

This is a bit of an awkward angle, and on top of that, it doesn't line up with pixels sensibly, so for videogames an angle of 30° from the ground plane is used.

.. image:: /images/category_projection/projection-cube_11.svg 
   :align: center

Alright, so, let's make an isometric out of our boy then.

We make a new document, and add a vector layer.

On the vector layer, we select the straight line tool, start a line and then hold the :kbd:`Shift` key to make it snap to angles. This'll allow us to make a 30° setup like above:

.. image:: /images/category_projection/projection_image_15.png
   :align: center

We then import some of the frames from the animation via :menuselection:`Layers --> Import/Export --> Import layer`.

Then crop it by setting the crop tool to :guilabel:`Layer`, and use :menuselection:`Filters --> Colors --> Color to alpha...` to remove any background. I also set the layers to 50% opacity. We then align the vectors to them:

.. image:: /images/category_projection/projection_image_16.png 
   :align: center

.. tip::

    To resize a vector but keep its angle, you just select it with the shape handling tool (the white arrow) drag on the corners of the bounding box to start moving them, and then press the :kbd:`Shift` key to constrain the ratio. This'll allow you to keep the angle.

The lower image is 'the back seen from the front', we'll be using this to determine where the ear should go.

Now, we obviously have too little space, so select the crop tool, select :guilabel:`Image` and tick :guilabel:`Grow` and do the following:

.. image:: /images/category_projection/projection_image_17.png 
   :align: center

Grow is a more practical way of resizing the canvas in width and height immediately.

Then we align the other heads and transform them by using the transform tool options:

.. image:: /images/category_projection/projection_image_18.png 
   :align: center

(330° here is 360°-30°)

Our rectangle we'll be working in slowly becomes visible. Now, this is a bit of a difficult angle to work at, so we go to :menuselection:`Image --> Rotate --> Rotate Image` and fill in 30° clockwise:

.. image:: /images/category_projection/projection_image_19.png 
   :align: center
.. image:: /images/category_projection/projection_image_20.png 
   :align: center

(of course, we could've just rotated the left two images 30°, this is mostly to be less confusing compared to the cube)

So, we do some cropping, some cleanup and add two parallel assistants like we did with the orthographic:

.. image:: /images/category_projection/projection_image_21.png 
   :align: center

So the idea here is that you draw parallel lines from both sides to find points in the drawing area. You can use the previews of the assistants for this to keep things clean, but I drew the lines anyway for your convenience.

.. image:: /images/category_projection/projection_image_22.png 
   :align: center

The best is to make a few sampling points, like with the eyebrows here, and then draw the eyebrow over it.

.. image:: /images/category_projection/projection_image_23.png 
   :align: center

Alternative axonometric with the transform tool
-----------------------------------------------

Now, there's an alternative way of getting there that doesn't require as much space.

We open our orthographic with :guilabel:`Open existing Document as Untitled Document` so that we don't save over it.

Our game-safe isometric has its angle at two pixels horizontal is one pixel vertical. So, we shear the ortho graphics with transform masks to -.5/+.5 pixels (this is proportional)

.. image:: /images/category_projection/projection_image_24.png 
   :align: center

Use the grid to setup two parallel rulers that represent both diagonals (you can snap them with the :kbd:`Shift + S` shortcut):

.. image:: /images/category_projection/projection_image_25.png 
   :align: center

Add the top view as well:

.. image:: /images/category_projection/projection_image_26.png 
   :align: center

if you do this for all slices, you get something like this:

.. image:: /images/category_projection/projection_image_27.png 
   :align: center

Using the parallel rulers, you can then figure out the position of a point in 3d-ish space:

.. image:: /images/category_projection/projection_image_28.png 
   :align: center

As you can see, this version both looks more 3d as well as more creepy.

That's because there are less steps involved as the previous version -- We're deriving our image directly from the orthographic view -- so there are less errors involved.

The creepiness is because we've had the tiniest bit of stylisation in our side view, so the eyes come out HUGE. This is because when we stylize the side view of an eye, we tend to draw it not perfectly from the side, but rather slightly at an angle. If you look carefully at the turntable, the same problem crops up there as well.

Generally, stylized stuff tends to fall apart in 3d view, and you might need to make some choices on how to make it work.

For example, we can just easily fix the side view (because we used transform masks, this is easy.)

.. image:: /images/category_projection/projection_image_29.png 
   :align: center

And then generate a new drawing from that…

.. image:: /images/category_projection/projection_animation_02.gif 
   :align: center

Compare to the old one and you should be able to see that the new result’s eyes are much less creepy:

.. image:: /images/category_projection/projection_image_30.png 
   :align: center

It still feels very squashed compared to the regular parallel projection above, and it might be an idea to not just skew but also stretch the orthos a bit.

Let's continue with perspective projection in the next one!
