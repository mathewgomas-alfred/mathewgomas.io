.. meta::
   :description:
        The Tagged Image file format in Krita.

.. metadata-placeholder

   :authors: - Wolthera van Hövell tot Westerflier <griffinvalley@gmail.com>
   :license: GNU free documentation license 1.3 or later.

.. index:: *.tif, *.tiff, TIF, TIFF, Tagged Image File Format
.. _file_tif:
.. _file_tiff:

=======
\*.tiff
=======

``.tiff``, or Tagged Image File Format, is a raster interchange format that was originally designed to be a common format generated by scanners and used by printers.

It can support multiple color spaces, and even layers.

.. versionchanged:: 5.1

   If build with :program:`libtiff 4.2` or later, :program:`Krita` can open and save :program:`Photoshop` style layered ``.tiff``. These are different from regular layered ``.tiff``, as :program:`Photoshop` stores :ref:`file_psd` data inside the ``.tiff``. This means things like layerstyles and blending modes can be stored and read by :program:`Photoshop`, but not every software that can open layered ``.tiff`` will be able to open these.

As an interchange format, ``.tiff`` is not meant for sharing on the internet, and you will not find many websites that do accept it. However, printhouses know the file format, and will likely accept it.
