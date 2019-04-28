.. meta::
   :description:
        Detailed guide on the animation workflow in Krita.

.. metadata-placeholder

   :authors: - Wolthera van Hövell tot Westerflier <griffinvalley@gmail.com>
             - Raghavendra Kamath <raghavendr.raghu@gmail.com>
             - Scott Petrovic
             - Lundin
   :license: GNU free documentation license 1.3 or later.

.. outline: - components in krita related to animation.
            - How to understand animation in krita
            - making a walkcycle in Krita

.. index:: Animation
.. _animation:

====================
Animation with Krita
====================

Thanks to the 2015 Kickstarter, :program:`Krita` has animation. In
specific, :program:`Krita` has frame-by-frame raster animation. There's still a
lot of elements missing from it, like tweening, but the basic workflow
is there.

To access the animation features, the easiest way is to change your
workspace to Animation. This will make the animation dockers and
workflow appear.

Workflow
---------

In traditional animation workflow, what you do is that you make *key
frames*, which contain the important poses, and then draw frames in
between (\ *tweening* in highly sophisticated animator's jargon).

For this workflow, there are three important dockers:

#. The :ref:`timeline_docker`. View and control all of
   the frames in your animation. The timeline docker also contains
   functions to manage your layers. The layer that are created in the
   timeline docker also appear on the normal Layer docker.
#. The :ref:`animation_docker`. This docker contains the
   play buttons as well as the ability to change the frame-rate, playback speed
   and useful little options like :guilabel:`auto-key framing`.
#. The :ref:`onion_skin_docker`. This docker controls
   the look of the onion skin, which in turn is useful for seeing the
   previous frame.
#. The :ref:`animation_curves_docker`. This docker allows you to do minor
   tweening for animation curves.

Furthermore, especially when you want to do a big animation, that is, any animation longer than 3 seconds, you will need to think about how you are going to approach this. Krita is specialised in frame by frame animation, and because of this Krita keeps all the frames in memory. This means that animation files will eat up all of your computer's working memory(RAM). If you don't know what working memory is, you probably have too little to do a long sequence in Krita. Therefore, you need to take a page from professional animation and do some planning!

Typically, most animation projects start with a script or at the very least an outline of actions that will happen. You can do this in any kind of text editor you like. The next step is to create a *Story Board*. They are sketches of the basic composition of each scene, with some extra notes on what is going to move, like camera movement, character movement, notes on audio, notes on color. These seem closer to a comic than an animation, but the key difference between the two is that in comics the composition is made to help the reader move their eyes over the page, while in animation the viewer's eyes will stay in relatively the same spot, so consequetive storyboard frames will have their most important elements in relatively the same place. If that seems a little abstract, don't worry. You can make a story board by using the animation functions, but the key here is that you use as little frames as possible. Export the story board using the render animation option.

Then, the next step is to make an *animatic*. An animatic is basically the storyboard, but then animated. You are best off doing this in a video editor like KDENLive or Openshot, or even windows movie maker. If you want to put everything together into one big animation you will need to learn how to use such a program to begin with, as Krita doesn't have extensive video and audio montage functions.

Doing the animatic will allow you to see how the animation can be subdivided into small clips. If you are just starting out, you are best off limiting yourself to 12 frames per second. Then, a 10 second clip would be 120 frames. Try to figure out if you can subdivide your animation idea into clips of 10 seconds or shorter. You can import the story board frames associated with a specific clip by going to :menuselection:`File --> Import Animation Frames`. From there, slowly start building up your animation. During the sketching phase it may also help to work on a low resolution, like 800x450 pixels. High resolution only starts mattering when you are doing line art, after all. And it will be hard to get to that point if you don't even have a rough outline.

Always keep an eye on the memory consumption. You can see the memory consumption in the status bar, by clicking the resolution label. This label should also have a little progress bar that shows how much memory Krita is using at this moment. Don't let the memory bar get full: it will lead to Krita slowing down and sometimes it might even mean Krita won't be able to export the animation on your specific machine. You can reduce memory consumption by:

#. Merging together layers. Yes, you cannot afford to have a layer for every single change. Often, the less layers, the better.
#. In some cases by going to :menuselection:`Image --> Crop Layers to Image Size`, this will crop all layers to remove sections that are outside the canvas.
#. Rarely, certain layers don't need to be full color, especially if they're just black and white. You can then go to :menuselection:`Layers --> Convert --> Convert Layer Color Space` and convert the layer to a grayscale one. This will half the amount of RAM this specific layer will take up.
#. Working smaller. Even if you imagined yourself animating in the 4K resolution, you might need to accept your computer just cannot handle this. Try going a step lower, on animations, even a 20% reduction can make a huge difference in memory consumption, while not being a huge difference in resolution.

Also watch out that other programs on your computer aren't hogging all the RAM. Webbrowsers and chat programs tend to be the biggest culprits here, especially if you are streaming music or videos. If you are hurting for memory, see if you can get these functions to work on a seperate device like a phone instead.

Another thing you will want to do is make a ton of backups. Every time you hit an important section with an animation, like you finished the line art, or you did a pretty tricky section, you will want to use :menuselection:`File --> Incremental Backup` to make a seperate copy of the current file to continue working in. This way, if the animation file gets corrupt, which could happen due a power outage, or a cat jumping on the keyboard, you will still have a snapshot of the last important section. Other backup techniques, like copying the files to a cloud service, or to a backup harddrive are also very recommended.

.. tip::

   And while we're at it, whenever you've hit a milestone, don't forget to take a break as well! Doing big projects like animations take a lot of effort and concentration, so taking breaks is important to recharge yourself.

When you are done, you will want to use :guilabel:`Render Animation` again. Now either export a frame sequence or a small video file, and then compose all of the frame sequences and video files together in the video editor. Then you can render it to webm, and upload it to your favorite video hosting website.

This may all seem a little complicated, but if your computer doesn't have a lot of resources, you have got to be be resourceful yourself!

Introduction to animation: How to make a walkcycle
--------------------------------------------------

The best way to get to understand all these different parts is to
actually use them. Walk cycles are considered the most basic form of a
full animation, because of all the different parts involved with them.
Therefore, going over how one makes a walkcycle should serve as a good
introduction.

Setup
~~~~~

First, we make a new file: 

.. image:: /images/animation/Introduction_to_animation_01.png

On the first tab, we type in a nice ratio like 1280x1024, set the dpi to
72 (we're making this for screens after all) and title the document
'walkcycle'.

In the second tab, we choose a nice background color, and set the background to canvas-color. This means that Krita will automatically fill in any transparent bits with the background color. You can change this in :menuselection:`Image --> Image Properties`. This seems to be most useful to people doing animation, as the layer you do animation on MUST be semi-transparent to get onion skinning working.

.. note::
    Krita has a bunch of functionality for meta-data, starting at the :guilabel:`Create Document` screen. The title will be automatically used as a suggestion for saving and the description can be used by databases, or for you to leave comments behind. Not many people use it individually, but it can be useful for working in larger groups.

Then hit :guilabel:`Create`!

Then, to get all the necessary tools for animation, select the workspace
switcher: 

.. figure:: /images/animation/Introduction_to_animation_02.png

    The red arrow points at the workspace switcher.
    
And select the animation workspace.

Which should result in this: 

.. image:: /images/animation/Introduction_to_animation_03.png

The animation workspace adds the timeline, animation and onion skin
dockers at the bottom.

Animating
~~~~~~~~~

We have two transparent layers set up. Let's name the bottom one
'environment' and the top 'walkcycle' by double clicking their names in
the layer docker.

.. image:: /images/animation/Introduction_to_animation_04.png

Use the straight line tool to draw a single horizontal line. This is
the ground.

.. image:: /images/animation/Introduction_to_animation_05.png

Then, select the 'walkcycle' layer and draw a head and torso (you can use any brush for this).

Now, selecting a new frame will not make a new frame automatically.
Krita doesn't actually see the 'walkcycle' layer as an animated layer at
all!

.. image:: /images/animation/Introduction_to_animation_06.png

We can make it animatable by adding a frame to the timeline. |mouseright| a frame in
the timeline to get a context menu. Choose :guilabel:`Create Duplicate Frame`.

.. attention::

     If you select :guilabel:`Create Blank Frame`, the content of the layer will be dropped and a new blank frame will appear; since you want to preserve the image, you need to use :guilabel:`Create Duplicate Frame`.


.. image:: /images/animation/Introduction_to_animation_07.png

You can see it has become an animated layer because of the onion skin
icon showing up in the timeline docker.

.. image:: /images/animation/Introduction_to_animation_08.png

Use the :guilabel:`Create Duplicate Frame` button to copy the first frame onto the second.
Then, use the ``Move Tool`` (switch to it using the :kbd:`T` shortcut) with the :kbd:`Shift + ↑` shortcut to move the frame contents up.

We can see the difference by turning on the onionskinning:

.. image:: /images/animation/Introduction_to_animation_09.png

Now, you should see the previous frame as red.

.. warning::
    Krita sees white as a color, not as transparent, so make sure the animation layer you are working on is transparent in the bits where there's no drawing. You can fix the situation by use the :ref:`filter_color_to_alpha` filter, but prevention is best.

.. image:: /images/animation/Introduction_to_animation_10.png

Future frames are drawn in green,
and both colors can be configured in the onion skin docker.

.. image:: /images/animation/Introduction_to_animation_11.png

Now, we're gonna draw the two
extremes of the walkcycle. These are the pose where both legs are as far
apart as possible, and the pose where one leg is full stretched and the
other pulled in, ready to take the next step.

Now, let's copy these two... We could do that with the :kbd:`Ctrl + drag` 
shortcut, but here comes a tricky bit:

.. image:: /images/animation/Introduction_to_animation_12.png

:kbd:`Ctrl +` |mouseleft| also selects and deselects frames, so to copy...

-  :kbd:`Ctrl +` |mouseleft| to select all the frames you want to select.
-  :kbd:`Ctrl + drag`. You need to make sure the first frame is 'orange',
   otherwise it won't be copied along.

Now then...

.. figure:: /images/animation/Introduction_to_animation_13.png
   :width: 580

   Squashed the timeline docker a bit to save space.

#. Copy frame 0 to frame 2.
#. Copy frame 1 to frame 3.
#. In the animation docker, set the frame-rate to 4.
#. Select all frames in the timeline docker by dragging-selecting them.
#. Press play in the animation docker.
#. Enjoy your first animation!

Expanding upon your rough walkcycle
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: /images/animation/Introduction_to_animation_14.png

You can quickly make some space by the :kbd:`Alt + drag` shortcut on any frame. This'll move that frame and all others after it
in one go.

Then draw inbetweens on each frame that you add.

.. image:: /images/animation/Introduction_to_animation_16.png

You'll find that the more frames you add, the more difficult it becomes to keep track of the onion skins.

You can modify the onion skin by using the onion skin docker, where you
can change how many frames are visible at once, by toggling them on the
top row. The bottom row is for controlling transparency, while below
there you can modify the colors and extremity of the coloring.

.. image:: /images/animation/Introduction_to_animation_15.png

Animating with multiple layers
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Okay, our walkcycle is missing some hands, let's add them on a separate
layer. So we make a new layer, and name it hands and...

.. image:: /images/animation/Introduction_to_animation_17.png

Our walkcycle is gone from the timeline docker! This is a feature
actually. A full animation can have so many little parts that an
animator might want to remove the layers they're not working on from the
timeline docker. So you manually have to add them.

.. versionadded:: 4.3.0

     In :program:`Krita 4.3.0` and later, all new layers are pinned to the timeline by default.

.. image:: /images/animation/Introduction_to_animation_18.png

To show a layer whether it's active or not, you can "pin" it to the 
timeline by right-clicking |mouseright| on the layer in the layer docker, 
and toggling :guilabel:`Pin to Timeline`. We recommend pinning any layers
that you're currently animating on.

.. image:: /images/animation/Introduction_to_animation_19.png

Exporting
~~~~~~~~~

When you are done, select :menuselection:`File --> Render Animation`. To render to a video file, you'll need a program called ``FFmpeg``. To learn more, please read :ref:`render_animation`.

.. image:: /images/animation/Introduction_to_animation_20.png

Enjoy your walkcycle!

.. image:: /images/animation/Introduction_to_animation_walkcycle_02.gif



Importing animation frames
--------------------------

In Krita you can import animation frames.

First let us take a sprite sheet from Open Game Art. (This is the Libre
Pixel Cup male walkcycle).

We'll use :menuselection:`Image --> Split Image` to split up the sprite sheet.

.. image:: /images/animation/Animation_split_spritesheet.png

The slices are even, so for a sprite sheet of 9 sprites, use 8 vertical slices and 0 horizontal slices. Give it a proper name and save it as png.

Then, make a new canvas, and select :menuselection:`File --> Import Animation Frames`. This will give you a little window. Select :guilabel:`Add images`. This should get you a file browser where you can select your images.

.. image:: /images/animation/Animation_import_sprites.png

You can select multiple images at once.

.. image:: /images/animation/Animation_set_everything.png

The frames are currently automatically
ordered. You can set the ordering with the top-left two drop-down boxes.

Start
    Indicates at which point the animation should be imported.
Step
    Indicates the difference between the imported animation and the
    document frame rate. This animation is 8 frames big, and the fps of
    the document is 24 frames, so there should be a step of 3 to keep it
    even. As you can see, the window gives feedback on how much fps the
    imported animation would be with the currently given step.

Press :guilabel:`OK`, and your animation should be imported as a new layer.

.. image:: /images/animation/Animation_import_done.png

Reference
---------

-  https://community.kde.org/Krita/Docs/AnimationGuiFeaturesList
-  `The source for the libre pixel cup male walkmediawiki cycle <https://opengameart.org/content/liberated-pixel-cup-lpc-base-assets-sprites-map-tiles>`_
