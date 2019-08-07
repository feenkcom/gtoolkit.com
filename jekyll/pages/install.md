---
layout: default
title: Install
permalink: /install/
order: 6
---

<section id="install">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 offset-lg-2">
        <div class="jumbotron">
          <h1 class="center-text">Install</h1>
          <p class="lead">You can obtain Glamorous Toolkit in two ways: download a ready made distribution, or manually install the code.</p>
        </div>   
      </div>
    </div> <!-- row -->

    <div class="row">
      <div class="col-lg-8 offset-lg-2">
        <h2>Run alpha 64bit released <span class=releasedate></span></h2> 
        <ol>
          <li><p>Download the distribution specific to your system:</p>
            <div class="padding">
              <a id="osx64" href="https://dl.feenk.com/gt/GToolkitOSX64-release.zip" class="download-button btn btn-lg btn-margin btn-default download-active" data-switcher-content="os x">
                <i class="fas fa-download fa-fw"></i><span>GToolkit alpha for Mac </span><span class=gtversion></span>
              </a>
            </div>
            <div class="padding">
                <a id="linux64" href="https://dl.feenk.com/gt/GToolkitLinux64-release.zip" class="download-button btn btn-lg btn-margin download-inactive" data-switcher-content="linux">
                  <i class="fas fa-download fa-fw"></i><span>GToolkit alpha for Linux </span><span class=gtversion></span> 
                </a>
            </div>
            <div class="padding">
              <a id="win64" href="https://dl.feenk.com/gt/GToolkitWin64-release.zip" class="download-button btn btn-lg btn-margin download-inactive" data-switcher-content="windows">
                <i class="fas fa-download fa-fw"></i><span>GToolkit alpha for Windows </span> <span class=gtversion></span>
              </a>
            </div>
          </li>
          <li>
            <p>Unzip in a separate directory.</p>
          </li> 
          <li>
            <p>Run the GToolkit image with the Pharo executable.</p>
            <p>On Mac: Run the Pharo.app and point to the GToolkit image file. A note: after downloading it the first time, right click, then keep Alt pressed while choosing Open.</p>
            <p>On Windows: Run the Pharo.exe and point to the GToolkit image file. </p>
            <p>On Linux: Run <code>./pharo GToolkit-FILENAME-DOT-IMAGE</code>
          </li>
        </ol>
      </div>
    </div> <!-- row -->

    <div class="row">
      <div class="col-lg-8 offset-lg-2">
        <h2>Load the latest alpha code in Pharo 7.0</h2>
      </div>

      <div class="col-lg-8 offset-lg-2">
        <div class="instructions-item selected" area-labelledby="pharo-70">
          <ol>
            <li>
                <p>Get <a href="http://pharo.org/download" class="btn btn-lg btn-default">the latest image and latest VM of Pharo 7.0</a> specific to your system</p>
            </li>
            <li>
              <p>Execute the following code in the Playground of the Pharo 7.0 image (can take 10-20 minutes):</p>
              <pre>EpMonitor current disable.
[ 
  Metacello new
    baseline: 'GToolkit';
    repository: 'github://feenkcom/gtoolkit/src';
    load
] ensure: [ EpMonitor current enable ].
#GtWorld asClass open.</pre>
              <p>Executing the above code loads all code related to Glamorous Toolkit and the extra plugin for the Pharo virtual machine that enables glamorous rendering. It also opens a live document that provides a guided tour.</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div><!-- /container -->
</section>

