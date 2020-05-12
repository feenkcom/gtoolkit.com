---
layout: subpage
title: Glamorous Toolkit &amp; Pharo
parentpermalink: /doc/
permalink: /doc/gt-and-pharo/
---

<section id="getstarted">
  <div class="container pt-5 pb-5 jumbotron-small">
    <div class="row">
      <div class="col-md-12">
        <h1>Glamorous Toolkit &amp; Pharo</h1>
        <p class="lead">
          Glamorous Toolkit (GT) is built in Pharo, and it enables people to work with Pharo systems. Nevertheless, the goal of GT is distinct from that of Pharo and so is the realization of it.
        </p>
        <p>
          Our goal is to provide a complete and novel development experience to allow people to make the interior of systems explainable. All our work is free and open-source under MIT. We contribute two things towards our goal. First, we provide the actual environment. Second, and perhaps more importantly, we authored moldable development, the approach GT enables.
        </p>
        <p>
          Moldable development puts forward the hypothesis that the shape of software is essential and that it has to be customized to match the context of the developer. By now, we have a decade worth of experience and experiments in various scenarios. Moldable development was embodied in the first generation of GT which was integrated in Pharo in 2014, and it showed how we can indeed provide an experience that is distinct from any other, including the classic Smalltalk one.
        </p>
        <p>
          The new GT takes moldable development much further. More visible is that we have new kinds of tools, like Documenter with its live notebooks, slide shows with interactive explanations, a Playground with snippets, or a Coder with expandable editors.
        </p>
        <p>
          Still, there are less visible parts. Underneath there is a generic infrastructure for handling other languages. It comes with FAMIX, and it also ships with an environment for SmaCC, the parsing engine, that allows us to tackle new languages. For example, more recently we added a parsers and importers for several languages including C++ and JavaScript.
        </p>
        <p>
          Then there are even more technical engines like Releaser that make it possible to version deeply nested projects and repositories completely automatically.
        </p>
        <p>
          You can look at GT as a set of tools, but that would likely miss the point. GT is a whole environment that enables a new way of thinking about programming. For instance, examples offer a slightly different way to capture tests, but when combined with Documenter it can change how we can document our systems and even how technical people communicate with non-technical people.
        </p>
        <p>
          GT it relies on the vm, language, and basic libraries of Pharo, but it comes with a complete separate graphical stack (Bloc) and engines for tools, such as syntax highlighting and completion. Bloc is particularly relevant because it comes with the property of relying on <a href="https://medium.com/feenk/one-rendering-tree-918eae49bcff?source=friends_link&sk=c0551af8504ee919c4d8c54c390eef49">a single rendering tree</a>.
        </p>
        <p> 
          So, if we define a Smalltalk-like system as being the language plus the environment, GT is a new such system.
        </p>
        <p>
          That said, GT loads cleanly in Pharo. In practice, this means people working on projects built with the Pharo language have the option of two distinct environments.
        </p>
      </div>
    </div>
  </div>
</section>
