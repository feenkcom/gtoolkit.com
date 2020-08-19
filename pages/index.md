---
layout: default
title: Home
permalink: /
order: 1
---
<section id="home" class="jumbotron">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 center">
          <p><img src="/assets/pictures/gtoolkit-icon.png" width="750"/></p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8 offset-lg-2 center">
        <p class="lead">
          Glamorous Toolkit is the moldable development environment. 
          It is a live notebook.
          It is a flexible search interface.
          It is a fancy code editor.
          It is a software analysis platform.
          It is a data visualization engine.
          All in one.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 offset-lg-3">
          <a href="download" class="btn btn-block btn-lg btn-margin btn-primary">
            Download for Mac, Linux or Windows
          </a>
      </div>
    </div>
  </div>
</section>
<section class="topmarker section-light top-double-space">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
          <h1>Code reading reimagined</h1>
      </div>
      <div class="col-lg-6">
          <p class="lead">
            Yes, code reading. Developers spend 50% or more of their time doing just that. It's the single most expensive activity in software development. We reimagine it from the ground up, and with it we reshape the whole development experience. We call it moldable development.
          </p>
          <p class="lead">
            Every single development problem includes a data science problem. And the other way around. The moldable way is to construct custom tools specifically for every single problem.
          </p>
          <p class="lead">
            To make this practical, you need a platform that makes the creation of tools inexpensive and seamless while working with on your problem. That's Glamorous Toolkit.
          </p>
      </div>
      <div class="col-lg-6">
          <p class="lead vcenter">
            <a href="https://youtu.be/Pot9GnHFOVU" target="_blank"><img alt="View more" src="/assets/pictures/curryon2019-video4.png" ></a>
          </p>
      </div>
    </div>
  </div>
</section>
<section class="top-double-space">
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <h1>What's it good for?</h1>
        <p class="lead">Glamorous Toolkit can be molded in many ways to support a variety of situations in a uniform manner.</p>
      </div>
    </div>
    <div class="row top-space usecase">
      <div class="col-lg-4">
        <h3>Use case</h3>
        <h2>Executable specifications</h2>
        <p>Specifications tend to get a bad name because they are expensive and often wrong. There is a better way. Model them explicitly. Explore scenarios through executable examples. View the results through custom views.</p>
        <a href="usecases/executable-specifications" class="btn btn-block btn-lg btn-margin btn-default">Read more</a>
      </div>
      <div class="col-lg-8">
        <div class="sample">
          <img src="/assets/pictures/gtr-uhmo-prices.png"/>
          <div class="picture-caption">
            <p>Explaining a domain with live documents.</p>
          </div>
        </div>
      </div>
    </div> <!-- row -->
    <div class="row top-space usecase topmarker">
      <div class="col-lg-4">
        <h3>Use case</h3>
        <h2>Software assessment</h2>
        <p>Code reading is the single most expensive development activity. Much of reading is actually about finding interesting places. Finding the root cause, finding where to add a new feature. Those are search activities. Or visualization ones.</p>
        <a href="/usecases/software-assessment" class="btn btn-block btn-lg btn-margin btn-default">Read more</a>
      </div>
      <div class="col-lg-8">
        <div class="sample">
          <img src="/assets/pictures/gtr-famix-argouml.png"/>
          <div class="picture-caption">
            <p>An example of using an interactive analysis for assessing which deprecated classes can be removed from a Java system.</p>
          </div>
        </div>
      </div>
    </div> <!-- row -->
    <!-- <div class="row vspace usecase  topmarker">
      <div class="col-lg-3">
        <h3>Use case</h3>
        <h2>Custom environments</h2>
        <p class="lead">The core idea of moldable development is that developers should build their own tools.</p>
      </div>
      <div class="col-lg-9">
        <div class="sample">
          <img src="/assets/pictures/gtr-famix-argouml.png"/>
          <div class="picture-caption">
            <p>.</p>
          </div>
        </div>
      </div>
    </div> -->
    <div class="row top-space usecase topmarker">
      <div class="col-lg-4">
        <h3>Use case</h3>
        <h2>Iterative API &amp; data exploration</h2>
        <p>To reason about data, we first need to qualitatively understand its structure. The inspection tools together with the ability of refining the data model and of visualizing in place are directly usable in these contexts.</p>
        <a href="/usecases/iterative-data-exploration" class="btn btn-block btn-lg btn-margin btn-default">Read more</a>
      </div>
      <div class="col-lg-8">
        <div class="sample">
          <img src="/assets/pictures/gtr-postgres-visualization.png"/>
          <div class="picture-caption">
            <p>A case of exploring a database, querying with SQL, and then visualizing the result. Seamlessly.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row vspace usecase topmarker">
      <div class="col-lg-4">
        <h3>Use case</h3>
        <h2>Pharo development</h2>
        <p>Glamorous Toolkit is implemented in Pharo, the pure object-oriented language. Of course, it brings a moldable environment for developers working with Pharo. And yes, Glamorous Toolkit is developed using Glamorous Toolkit, too.</p>
        <a href="/usecases/pharo-dev" class="btn btn-block btn-lg btn-margin btn-default">Read more</a>
      </div>
      <div class="col-lg-8">
        <div class="sample">
          <img src="/assets/pictures/gtr-opencv-tensorflow-picture-inspection-1500.png"/>
          <div class="picture-caption">
            <p>Exploring a Pharo algorithm based on Tensorflow.</p>
          </div>
        </div>
      </div>
    </div>
    <!-- row -->
  </div>
</section>
<!-- <section class="topmarker section-light top-double-space center">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 offset-lg-2">
        <h1>The insides of software systems can be made explainable</h1>
        <p class="lead">
          Every part of a software system, be it an algorithm, a domain-driven design, or the architecture, can be made explainable through custom tools. 
          Glamorous Toolkit makes this possible by treating the interface as a set of visual and interactive operators that can be combined in many ways.
        </p>
      </div>
    </div>
  </div>
</section> -->
<section class="usecase section-light top-double-space">
  <div class="container">
    <div class="row">
      <div class="col-lg-9">
        <h1>A novel development experience</h1>
        <p class="lead">Glamorous Toolkit is implemented in <a href="/docs/gt-and-pharo">Pharo</a>, but it's made to work for many languages.</p>
        <p class="lead">Every part of a software system, be it an algorithm, a domain-driven design, or the architecture, can be made explainable through custom tools. 
          Glamorous Toolkit makes this possible by treating the interface as a set of visual and interactive operators that can be combined in many ways. </p>
      </div>
    </div> 
    <div class="row vspace">
      <div class="col-lg-4">
        <h3>Feature</h3>
        <h2>Moldable</h2>
        <p>Every part can be molded to the context. Every object can specify how it can be viewed or searched. Every method can specify how it can be edited. Every exception can define how it can be debugged. And all can be molded directly from the environment, often in minutes.</p>
      </div>
      <div class="col-lg-8">
        <img src="/assets/pictures/feature-moldable.png"/>
      </div>
    </div> <!-- row -->
    <div class="row">
      <div class="col-lg-4">
        <h3>Feature</h3>
        <h2>Exploratory flow</h2>
        <p>Understanding software requires continuous exploration. We capture that flow explicitly. In true moldable fashion, each step can be adapted dynamically. Together with the various tools this leads to an ever extensible experience.</p>
      </div>
      <div class="col-lg-8">
        <img src="/assets/pictures/feature-exploratoryflow.png"/>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <h3>Feature</h3>
        <h2>Live</h2>
        <p>Live programming is programning in the presence of living objects. It can start with a code snippet. Or with a form. Or another visual that creates the living objects.</p>
      </div>
      <div class="col-lg-8">
        <img src="/assets/pictures/feature-playground.png"/>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <h3>Feature</h3>
        <h2>On demand editors</h2>
        <p>We have a beautifully flexible editor. You just do not have go to it. The editor comes to you. You get to code, but you can do that after you find the right place.</p>
      </div>
      <div class="col-lg-8">
        <img src="/assets/pictures/feature-editor.png"/>
      </div>
    </div> <!-- row -->
    <div class="row">
      <div class="col-lg-4">
        <h3>Feature</h3>
        <h2>Notebooks</h2>
        <p class="lead">Writing and consuming documentation must be enjoyable. And maintainable. So, we made the whole environment host a giant interactive, visual wiki.</p>
      </div>
      <div class="col-lg-8">
        <img src="/assets/pictures/feature-livenotebooks.png"/>
      </div>
    </div> <!-- row -->
    <div class="row">
      <div class="col-lg-4">
        <h3>Feature</h3>
        <h2>Analyses for many languages</h2>
        <p>Parsing a new language. Querying and visualizing code. Connecting sources from different languages like Java, JavaScript, TypeScript, JSX, C# or Delphi. Or perhaps integrating that XML descriptor file. They are all accessible.</p>
      </div>
      <div class="col-lg-8">
        <img src="/assets/pictures/feature-analyses.png"/>
      </div>
    </div>
    <!-- <div class="row">
      <div class="col-lg-4">
        <h3>Feature</h3>
        <h2>Example-driven</h2>
        <p class="lead">Examples are like tests that return an object. A small change that impacts how we compose examples, how we use them to guide development, and how, when combined with interactive narratives, we can explain our systems.</p>
      </div>
      <div class="col-lg-8">
        <img src="/assets/pictures/feature-examples.png"/>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <h3>Feature</h3>
        <h2>One rendering tree</h2>
        <p class="lead">Ok, this is rather ... geeky, but we are really proud of how we draw all scenes through exactly one rendering tree. That includes the editor or visualizations. We built a whole new graphical stack to make this possible. And now we can build new interesting visualizations and interactions.</p>
      </div>
      <div class="col-lg-8">
        <img src="/assets/pictures/feature-onerenderingtree.png"/>
      </div>
    </div> -->
  </div>
</section>
<section class="usecase top-double-space">
  <div class="container">
    <div class="row">
      <div class="col-lg-9">
        <h1>Who is it for?</h1>
      </div>
    </div>
    <div class="row top-space">
      <div class="col-lg-6">
        <h2>For developers</h2>
        <p class="lead">Moldable development is a new way to approach programming: developers build custom tools for, ideally, each of their problems. This requires new skills. Glamorous Toolkit is a platform through which you can learn and practice those skills.</p>
      </div>
      <div class="col-lg-6">
        <h2>For managers</h2>
        <p class="lead">Systems must not remain black boxes. They can be made explainable. For non-technical people, too. This has implications on how you can make decisions and how you can allocate and attract budgets.</p>
      </div>
      <div class="col-lg-6">
        <h2>For software engineering researchers</h2>
        <p class="lead">Moldable development opens a new research space and Glamorous Toolkit is an engineered platform on top of which this new space can be explored inexpensively.</p>
      </div>
      <div class="col-lg-6">
        <h2>For teachers</h2>
        <p class="lead">Glamorous Toolkit was first conceived to explain the inside of systems. Through custom tools people can form better mental models about the underlying system. We later learnt that teaching programming faces the same class of problem. Glamorous Toolkit can provide the basis for creating dedicated teaching environments.</p>
      </div>
      <div class="col-lg-6 vspace">
        <p class="lead">We are still documenting both moldable development and Glamorous Toolkit. In the meantime, if you want to learn more, please do contact us.</p>
        <p class="lead"><a href="/contact" class="btn btn-block btn-lg btn-margin btn-primary">Want to learn more? Contact us</a></p>
      </div>
    </div> 
  </div>
</section>
