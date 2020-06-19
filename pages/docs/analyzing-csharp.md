---
layout: subpage
permalink: /docs/analyzing-csharp/
---

<section id="getstarted">
  <div class="container pt-5 pb-5 jumbotron-small">
    <div class="row">
      <div class="col-md-12">
        <h1>Analyzing C# systems</h1>
        <p class="lead">
          C# is supported in two distinct ways: through the external <a href="https://github.com/feenkcom/roslyn2famix">roslyn2famix</a> parser, and through the internal C# parser.
        </p>
        <h2>Importing C# with roslyn2famix via an MSE file</h2>
        <p>roslyn2famix is a project implemented in C# based on the <a href="https://github.com/dotnet/roslyn">Roslyn</a> project. The project is used from the command line to produce an intermediary file that can be loaded in Glamorous Toolkit.</p>
        <p>Please for follow the instructions from <a href="https://github.com/feenkcom/roslyn2famix">roslyn2famix</a> to produce an MSE file. MSE is a file format for exchanging models. The MSE produced by roslyn2famix contains a serialization of the model for the C# code.</p>
        <p>Once an MSE model exists, you can load it into Glamorous Toolkit like this:</p>
        <pre>model := MooseModel new importMSEFromFile: '/PATH/TO/FILE.mse' asFileReference
        </pre>
        <h2>Parsing C#</h2>
        <p>Glamorous Toolkit ships with a built in parser and abstract syntax tree implementation for C#.</p>
        <pre>csFile := 'PATH/TO/FILE.cs' asFileReference.
CSharpParser parse: csFile contents
        </pre>
      </div>
    </div>
  </div>
</section>