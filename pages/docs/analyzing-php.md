---
layout: subpage
permalink: /docs/analyzing-php/
description: PHP is supported through the external pdt2famix parser
---

<section id="getstarted">
  <div class="container pt-5 pb-5 jumbotron-small">
    <div class="row">
      <div class="col-md-12">
        <h1>Analyzing PHP systems</h1>
        <p class="lead">
          PHP is supported through the external <a href="https://github.com/feenkcom/pdt2famix">pdt2famix</a> parser.
        </p>
        <h2>Importing Java with pdt2famix via an MSE file</h2>
        <p>pdt2famix is a project implemented in Java based on the <a href="https://www.eclipse.org/pdt">PDT</a> project. The project is used as an Eclipse plugin to produce an intermediary file that can be loaded in Glamorous Toolkit.</p>
        <p>Please for follow the instructions from <a href="https://github.com/feenkcom/pdt2famix">pdt2famix</a> to produce an MSE file. MSE is a file format for exchanging models. The MSE produced by pdt2famix contains a serialization of the model for the PHP code.</p>
        <p>Once an MSE model exists, you can load it into Glamorous Toolkit like this:</p>
        <pre>model := MooseModel new importMSEFromFile: '/PATH/TO/FILE.mse' asFileReference
        </pre>
      </div>
    </div>
  </div>
</section>
