.. meta::
   :description property=og\:description:
        Importing video frames.

.. metadata-placeholder
   :authors: - Wolthera van Hövell tot Westerflier <griffinvalley@gmail.com>
   :license: GNU free documentation license 1.3 or later.

.. index:: Animation, import, frames, video import
.. _import_animation:

================
Import Animation
================

Krita has several options for allowing you to import an animation.

.. _import_frames:

Import Frames
-------------

.. image:: /images/animation/Animation_set_everything.png

Add images.
   Add frames. You can select multiple frames in the file chooser.
Remove.
   Remove the selected frame
Add hold frames automatically.
   If a frame sequence has gaps, such as a sequence that has frames 1, 2 and 5, ticking this option will input empty frames at 3 and 4.

Order
~~~~~

Ascending vs Descending
   Whether it will import the frames in order from lowest to highest (ascending), or from highest to lowest (descending).
Numerical vs Alphabetical
   Whether it will use numbers or Alphabetical ordering for the frames.

Timing
~~~~~~

Start at
   The frame number to import at. Importing at 3 will have the resulting animation start at frame 3 within Krita.
Step
   The amount of frames to input for each imported frame. For importing a 6 fps animation into a 24 fps animation, you will need to set this to 24 / 6 = 4. This will ensure the playback speed stays the same.
Source FPS
   This displays what Krita thinks the fps of the input is with the current timing settings. You can use this to make sure that the input you made is correct with the input

.. _import_video_animation:

Import video file
-----------------

.. image:: /images/animation/import_video.png

Choose a video file
   This will bring up a file chooser for you to select the file in question.
Preview
   Gives a preview of the file to import.
Slider
   Allows you to scrub through the file in question.
Frame Counter
   Allows you to select the frame in question
Frame Switcher
   Two buttons to switch per frame.

Video file info
~~~~~~~~~~~~~~~
Width
   The width of the current file.
Height
   The height of the current file.
Duration
   The duration in seconds.
Frames
   The total amount of frames
FPS
   The frames per second.
Color Primaries
   The name of the color space primaries Krita has detected. These will be used for the color profile with which the file imports. Only shows up on files where this data is detected.
Color Transfer
   The name of the color space trc that Krita has found. This too will be used for the color profile. Only shows up on files where this data is detected.


Import Options
~~~~~~~~~~~~~~

FPS
   The FPS to import at. Importing 2 seconds of footage at 24 fps will import 48 frames, and at 60 fps, 120 frames will be imported.
Skip Interval
   Same as :guilabel:`Step` in the :ref:`Import Frames<import_frames>` section.
Start at
   Time code to start at.
Duration
   Length of the imported animation.
Import into
   Document to import the file into. Options are current document and new document. With new document, extra options become available on the second tab.

Options
~~~~~~~

Document Options
""""""""""""""""
Only enabled when the import is into a new document.

Width
   Width of the new document.
Height
   Height of the new document.

Import Video Scale
""""""""""""""""""

Width
   The desired width in pixels
Height
   The desired height in pixels
Filter
   The filter to use for the resizing.


FFMpeg
""""""

FFMpeg Path
   Path to the ffmpeg executable, necessary for importing the video data.
FFProbe path
   Path to the ffmpeg probe executable, which is included with ffmpeg. This allows Krita to learn the video information from the file.
