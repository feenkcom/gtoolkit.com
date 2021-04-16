---
layout: subpage
permalink: /docs/analyzing-java/
description: 'Java is supported in two distinct ways: through the external https://github.com/feenkcom/jdt2famix parser, and through the internal Java parser.
image: /assets/pictures/gtr-importing-java-jdt2famix.png'
---

<section id="getstarted">
  <div class="container pt-5 pb-5 jumbotron-small">
    <div class="row">
      <div class="col-md-12">
        <h1>Analyzing Java systems</h1>
        <p class="lead">
          Java is supported in two distinct ways: through the external <a href="https://github.com/feenkcom/jdt2famix">jdt2famix</a> parser, and through the internal Java parser.
        </p>
        <h2>Importing Java with jdt2famix via an MSE file</h2>
        <p>jdt2famix is a project implemented in Java based on the <a href="https://www.eclipse.org/jdt/core/">JDT Core</a> project. The project is used from the command line to produce an intermediary file that can be loaded in Glamorous Toolkit.</p>
        <p>Please for follow the instructions from <a href="https://github.com/feenkcom/jdt2famix">jdt2famix</a> to produce an MSE file. MSE is a file format for exchanging models. The MSE produced by jdt2famix contains a serialization of the model for the Java code.</p>
        <p>Once an MSE model exists, you can load it into Glamorous Toolkit like this:</p>
        <pre>model := MooseModel new importMSEFromFile: '/PATH/TO/FILE.mse' asFileReference
        </pre>
        <p><img src="/assets/pictures/gtr-importing-java-jdt2famix.png"/></p>
        <h2>Parsing Java</h2>
        <p>Glamorous Toolkit ships with a built in parser and abstract syntax tree implementation for Java.</p>
        <pre>javaFile := 'PATH/TO/FILE.java' asFileReference.
JavaParser parse: javaFile contents
        </pre>
        <p><img src="/assets/pictures/gtr-importing-java-parsing.png"/></p>
      </div>
    </div>
  </div>
</section>
