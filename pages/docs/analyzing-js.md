---
layout: subpage
permalink: /docs/analyzing-js/
---

<section id="getstarted">
  <div class="container pt-5 pb-5 jumbotron-small">
    <div class="row">
      <div class="col-md-12">
        <h1>Analyzing JavaScript, JSX/React systems</h1>
        <p class="lead">
          JavaScript is supported through several internal JavaScript importers and parsers.
        </p>
        <h2>Importing plain JavaScript</h2>
        <p>Glamorous Toolkit ships with a built in parser and abstract syntax tree implementation for JavaScript.</p>
        <pre>model := (GtJSImporter new 
  parserClass: JSParser; 
  importDirectory: baseDir) model
        </pre>
        <h2>Importing JSX/React</h2>
        <p>Importing React works in the same way, only with a more enhanced parser to handle JSX and a specialized importer for React components.</p>
        <pre>model := (GtReactImporter new 
  parserClass: JSXParser; 
  importDirectory: baseDir) model
        </pre>
        <p><img src="/assets/pictures/gtr-importing-react-parsing.png"/></p>
        <h2>Parsing JavaScript</h2>
        <pre>jsFile := 'PATH/TO/FILE.js' asFileReference.
JSParser parse: jsFile contents
        </pre>
        <h2>Parsing JSX</h2>
        <pre>jsFile := 'PATH/TO/FILE.js' asFileReference.
JSXParser parse: jsFile contents
        </pre>
      </div>
    </div>
  </div>
</section>
