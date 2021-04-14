---
layout: subpage
permalink: /docs/start/
description: Starting is easy. We just ask you to stick with it for a few days to feel the effect.
image: /assets/pictures/gtr-hello-world-inspector.png
---

<section id="getstarted">
  <div class="container pt-5 pb-5 jumbotron-small">
    <div class="row">
      <div class="col-md-12">
        <h1>Getting started</h1>
        <p class="lead">Starting is easy. We just ask you to stick with it for a few days to feel the effect.</p>
        <h2>Install and run</h2>
        <p>
          First things, first. Please go ahead and <a href="/install" class="btn btn-lg btn-default">install Glamorous Toolkit</a>. We'll wait.
        </p>
        <p>
          Here is what just happened. You downloaded a self contained installation made of a Glamorous Toolkit image, a virtual machine, and a few other resources and libraries. The contents of the folder should look like this:
        </p>
        <p>
          <img src="/assets/pictures/gtr-distribution-contents.png"/>
        </p>
        <p>
          Now, run the image with the virtual machine and you are good to go.
        </p>
        <h2>Browse</h2>
        <p>
          Ok, so back to your installation. It should now be running and look like this:
        </p>
        <p>
          <img src="/assets/pictures/gtr-home.png"/>
        </p>
        <p>
          Now what? Start by browsing. The first thing you likely notice are two notifications. First, a notification about taking an interactive tour. Take it. Second, a prompt for registering to our <a href="https://blog.feenk.com">blog</a> and have the feed be delivered right in the environment. We use this channel to keep you informed about new developments and tutorials. And the interesting part is that all those posts are actually created in Glamorous Toolkit and they can be interacted with in Glamorous Toolkit, too. Do give them a try.
        </p>
        <p>Beside notifications, the home tab offers a set of tools, interactive slide shows, and live documents. The Glamorous Toolkit tour slideshow is a good start, but if you like reading, start from the Glamorous Toolkit documentation. We just warn you that it's quite captivating. Better allocate a Pomodoro or two to not lose track of time.
        </p>
        <h2>Pharo hello world</h2>
        <p>
          Open a Playground and type:
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
  </div>

</section>
