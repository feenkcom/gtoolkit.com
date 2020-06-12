---
layout: subpage
permalink: /docs/analyzing-cpp/
---

<section id="getstarted">
  <div class="container pt-5 pb-5 jumbotron-small">
    <div class="row">
      <div class="col-md-12">
        <h1>Analyzing C/C++ systems</h1>
        <p class="lead">
          C/C++ is directly supported through the internal parser and importer.
        </p>
        <h2>Importing C/C++</h2>
        <pre>model := FAMIXCPPImporter new
  importFrom: '/PATH/TO/ROOT' asFileReference;
  model
        </pre>
        <p><img src="/assets/pictures/gtr-importing-cpp-blueprint-ast.png"/></p>
        <h2>Parsing C++</h2>
        <p>Glamorous Toolkit ships with a built in parser and abstract syntax tree implementation:</p>
        <pre>cppFile := 'PATH/TO/FILE.cpp' asFileReference.
CPPParser parse: cppFile contents
        </pre>
        <p><img src="/assets/pictures/gtr-importing-java-parsing.png"/></p>
      </div>
    </div>
  </div>
</section>
