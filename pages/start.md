---
layout: default
title: Getting started
permalink: /start/
order: 2
---

<section id="components">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 offset-lg-2">
        <div class="jumbotron">
          <h1>Get started</h1>
          <p class="lead">Starting is easy. We just ask you to stick with it for a few days to feel the effect.</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8 offset-lg-2">
        <h2>Install and run</h2>
        <p>
          First things, first. Please go ahead and <a href="/install" class="btn btn-lg btn-default">install Glamorous Toolkit</a>. We'll wait.
        </p>
        <p>
          So, here is what just happened. You downloaded a self contained installation made of a Glamorous Toolkit image, a Pharo virtual machine, and a few other things. The contents of the folder should look like this:
        </p>
        <p>
          <img src="/assets/pictures/gtr-distribution-contents.png"/>
        </p>
        <p>
          Now, run the image with the virtual machine and you are good to go.
        </p>
        <h2>What is Pharo and how does Glamorous Toolkit fit with it?</h2>
        <p>
          Yes, that's a legitimate question. Pharo is a Smalltalk language and environment. That means that you have a very tight integration between the language and the development environment. Pharo already comes with a development environment. Glamorous Toolkit offers a novel alternative environment based on a completely new graphical stack.
        </p>
        <h2>Browse</h2>
        <p>
          Ok, so back to your installation. It should now be running and look like this:
        </p>
        <p>
          <img src="/assets/pictures/gtr-home.png"/>
        </p>
        <p>
          Now what? Start by browsing. The first thing you see is the home tab that offers a set of tools, interactive slide shows, and live documents. A good starting point is the Glamorous Toolkit tour slide show. Or if you like reading, start from the Glamorous Toolkit documentation. We just warn you that it's quite captivating. Better allocate a Pomodoro or two to not lose track of time.
        </p>
        <h2>Hello world</h2>
        <p>
          Open the Playground tool and type:
        </p>
        <pre>'Hello world'</pre>
        <p>
          Now press this <img src="/assets/pictures/gt-playinspect.png"/> button, and you should see this:
        </p>
        <p>
          <img src="/assets/pictures/gtr-hello-world-inspector.png"/>
        </p>
        <p>
          That's it. You executed a piece of code and you are now inspecting the resulting object. Did you expect to rather print the result on some console?  That's possible, but we do it very rarely because inspectors are much more interesting. Ok, if you insist, just execute and inspect:
        </p>
        <pre>transcript := GtTranscript new.
transcript show: 'Hello world'.</pre>
        <p>
          And you should get:
        </p>
        <p>
          <img src="/assets/pictures/gtr-hello-world-transcript.png"/>
        </p>
        <p>
          Now, you created a transcript object, and told it to show the string. At the end you saw the result being printed in the transcript rendering. Did you still expect to see an example that prints this to the operating system console? That's possible as well, but programming with Glamorous Toolkit is about working with a live system. So, really, dive into the environment and let us know what you think.
        </p>
      </div>
    </div>
    <div class="row vspace">
      <div class="col-lg-6  offset-lg-3">
          <a href="/install" class="download-all-button btn btn-block btn-lg btn-margin btn-default">
            Install it already! Pretty please. With sugar on top.
          </a>
      </div>
    </div>
  </div>

  <div class="modal fade" id="expandedModal" tabindex="-1" role="dialog" aria-labelledby="galleryModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        </div>
        <div class="modal-footer">
          <div class="caption">
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </div>

</section>