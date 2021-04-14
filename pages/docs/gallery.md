---
layout: subpage
permalink: /docs/gallery/
description: Moldability is hard to convey in words. You need to experience it. Until you do take the leap, observe examples of how different parts of the system can feel like.
image: /assets/pictures/gt-documenter.png
---

<section id="gallery">
  <div class="container pt-5 pb-5 jumbotron-small">
    <div class="row">
      <div class="col-lg-12">
        <h1>Gallery</h1>
        <p class="lead">Moldability is hard to convey in words. You need to experience it. Until you do take the leap, observe examples of how different parts of the system can feel like.</p>
      </div>
    </div>
    <div class="row">
      {% include gallery_image.html image="/assets/pictures/gt-documenter.png" text="Executing a nested example with Coder." %}
      {% include gallery_image.html image="/assets/pictures/gt-coder-shortcuts-bug.png" text="Looking for the shortcuts that are not defined in a Linux-friendly way." %}
      {% include gallery_video.html video="/assets/video/gt-coder-dynamic-example-adornments.mp4#t=0.5" text="A method Coder changing shape dynamically when adding/removing the gtExample pragma. The changes affect: the example status label, the in-place example expanding toggle, and the run button. All this without saving." %}
    </div>
    <div class="row">
      {% include gallery_video.html video="/assets/video/gt-coder-extract-method-keyword-parameter-reordering.mp4#t=0.1" text="Performing an extract method refactoring for a keyword method, including the reordering of the parameters. Without requiring any modal dialogue." %}
      {% include gallery_video.html video="/assets/video/gt-documenter-toggle-view-edit.mp4" text="Toggling the markup visibility in Documenter." %}
      {% include gallery_video.html video="/assets/video/gt-coder-parameter-rename.mp4" text="Renaming a parameter." %}
    </div>
    <div class="row">
      {% include gallery_image.html image="/assets/pictures/gt-documenter-mondrian-doc.png" text="Documenting the visualization engines of the Glamorous Toolkit." %}
      {% include gallery_video.html video="/assets/video/gt-documenter-magic-markup.mp4#t=0.1" text="The markup appears on cursor move in Documenter." %}
      {% include gallery_video.html video="/assets/video/gt-transcript-animation.mp4#t=0.1" text="Transcript used for debugging an animation." %}
    </div>
    <div class="row">
      {% include gallery_image.html image="/assets/pictures/gt-inspector-rope-reuses-string.png" text="Inspector showing the ballanced rope data structure behind a text editor." %}
      {% include gallery_image.html image="/assets/pictures/gt4p3-query.png" text="Playground and Inspector used for opening a database connection and evaluating a query." %}
      {% include gallery_image.html image="/assets/pictures/gt4p3-schema.png" text="Playground and Inspector used for opening a database connection and browsing the schema." %}
    </div>
    <div class="row">
      {% include gallery_image.html image="/assets/pictures/gt-coder-filter-specialliterals.png" text="Querying for the special literals reveals that they are copied in four places in the kernel of Pharo 7." %}
      {% include gallery_video.html video="/assets/video/gt-inspector-editor-whereisthemouse.mp4#t=0.1" text="Inspector showing an editor object knowing how to inspect both the cursor indexes and the mouse position." %}
      {% include gallery_video.html video="/assets/video/gt-connector-inspecting-examples.mp4#t=0.1" text="Connector showing the graph of nested examples and previewing the results." %}
    </div>
    <div class="row">
      {% include gallery_video.html video="/assets/video/gt-debugger-stepping-updates-values-small.mp4#t=0.1" text="Updating the variable values right in the code during stepping through the Debugger." %}
      {% include gallery_video.html video="/assets/video/gt-inspector-bloc-keyboard.mp4#t=0.1" text="Tracking keystrokes with a keyboard simulation in the Inspector." %}
      {% include gallery_video.html video="/assets/video/gtr-petitparser2-graph.mp4#t=0.1" text="Exploring the structure of a grammar written in PetitParser2, one of the two parsing engines shipping with Glamorous Toolkit." %}
    </div>
    <div class="row">
      {% include gallery_image.html image="/assets/pictures/gtr-inspector-faces.png" text="Inspector exploring the results of applying Azure Face API to a picture." %}
      {% include gallery_image.html image="/assets/pictures/gtr-inspector-missing-file.png" text="Inspecting a missing file shows which part of the file paths exist and which do not." %}
      {% include gallery_video.html video="/assets/video/gtr-inspector-live-string.mp4#t=0.1" text="A custom view easing the inspection of a string and its corresponding characters." %}
    </div>
    <div class="row">
      {% include gallery_image.html image="/assets/pictures/gtr-search-hierarchy.png" text="Visualizing the hierarchy of filters and highlighting interesting methods to trace how the search for implementors works." %}
      {% include gallery_image.html image="/assets/pictures/gtr-inspector-xml-source.png" text="Inspecting an XML file." %}
      {% include gallery_image.html image="/assets/pictures/gt-smacc-expansion.png" text="Browsing a grammar definition." %}
    </div>
  </div>
</section>