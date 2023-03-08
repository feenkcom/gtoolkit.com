---
layout: subpage
permalink: /docs/analyzing-systems/
description: Glamorous Toolkit also comes with an elaborate software analysis framework.
image: /assets/pictures/glamoroustoolkit-icon.png
---

<section id="getstarted">
  <div class="container pt-5 pb-5 jumbotron-small">
    <div class="row">
      <div class="col-md-12">
        <h1>Analyzing software systems</h1>
        <p class="lead">
          Glamorous Toolkit also comes with an elaborate software analysis framework.
        </p>
        <h2>What do we mean by software analysis?</h2>
        <p>Take a look at this picture:</p>
        <p><img src="/assets/pictures/gtr-importing-cpp-blueprint-ast.png"/></p>
        <p>We see three panes. First, we have a model of a system that can be queried. The model offers a deeply connected graph of the various entities. In our example, we see a blueprint visualization of the internals of a C++ class. Furthermore, we can go a step further and get to the details of the abstract syntax tree of any entity.</p>
        <h2>Programmable analyses</h2>
        <p>Software systems are highly contextual and because of that we can predict classes of problems, but not the specific problems that developers might have during development. For an analysis to be effective, it has to capture the specifics of the system. It needs to be contextualized.</p>
        <p>We approach this contextualization through programming. We represent various facts about systems as objects. These objects can be manipulated, like any other object in our environment, through the inspector interface in many different ways. In this way, creating a software analysis is not disimilar to querying or visualizing any other piece of data.</p>
      </div>
    </div>
  </div>
</section>
