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
          <p class="lead">You can obtain Glamorous Toolkit in three ways: download a ready made distribution, loading the code in a Pharo image or manually downloading the image, vm and libraries.</p>
        </div>   
      </div>
    </div>  
     <div class="row">
      <div class="col-lg-8 offset-lg-2">
        <h2>Run alpha 64bit released <span class="releasedate"></span></h2> 
        <ol>
          <li><p>Download the distribution specific to your system:</p>
            <div class="padding">
              <a id="osx64" href="https://dl.feenk.com/gt/GToolkitOSX64-release.zip" class="download-button btn btn-lg btn-margin btn-default download-active" data-switcher-content="os x">
                <i class="fas fa-download fa-fw"></i><span>GToolkit alpha for Mac </span><span class="gtversion"></span>
              </a>
            </div>
            <div class="padding">
                <a id="linux64" href="https://dl.feenk.com/gt/GToolkitLinux64-release.zip" class="download-button btn btn-lg btn-margin download-inactive" data-switcher-content="linux">
                  <i class="fas fa-download fa-fw"></i><span>GToolkit alpha for Linux </span><span class="gtversion"></span> 
                </a>
            </div>
            <div class="padding">
              <a id="win64" href="https://dl.feenk.com/gt/GToolkitWin64-release.zip" class="download-button btn btn-lg btn-margin download-inactive" data-switcher-content="windows">
                <i class="fas fa-download fa-fw"></i><span>GToolkit alpha for Windows </span> <span class="gtversion"></span>
              </a>
            </div>
          </li>
          <li>
            <p>Unzip in a separate directory.</p>
          </li> 
          <li>
            <p>Run the GToolkit image with the Pharo executable.</p>
            <p>On Mac: Run the <code>GToolkit.app</code> and point to the GToolkit image file.</p>
            <p>On Windows: Run <code>GToolkit.exe</code>. </p>
            <p>On Linux: Run <code> ./gtoolkit GToolkit-FILENAME-DOT-IMAGE --interactive</code> from the command line.</p>
          </li>
        </ol>
      </div>
    </div> 
    <div class="row">
      <div class="col-lg-8 offset-lg-2">
        <h2>Load the latest alpha code in Pharo 8.0</h2>
      </div>
      <div class="col-lg-8 offset-lg-2">
        <div class="instructions-item selected" area-labelledby="pharo-70">
          <ol>
            <li>
                <p>Get the latest VM of Pharo 8.0 specific to your system 
                <a href="https://files.pharo.org/get-files/80/pharo64-win-latest.zip" class="btn btn-lg btn-default">Win</a>
                <a href="https://files.pharo.org/get-files/70/pharo64-mac-latest.zip" class="btn btn-lg btn-default">Mac</a>
                <a href="https://files.pharo.org/get-files/70/pharo64-linux-latest.zip" class="btn btn-lg btn-default">Linux</a> 
                </p>
            </li>
            <li>
                <p>Get the <a href="https://files.pharo.org/get-files/80/pharo64.zip" class="btn btn-lg btn-default">latest Pharo 8.0 image</a></p>
            </li>
            <li>
              <p>Run the Pharo 8.0 image and execute the following code in the Playground (can take 10-20 minutes):</p>
              <pre>EpMonitor current disable.
[ 
  Metacello new
    baseline: 'GToolkit';
    repository: 'github://feenkcom/gtoolkit/src';
    load
] ensure: [ EpMonitor current enable ].
#GtWorld asClass open.</pre>
              <p>Executing the above code loads all code related to Glamorous Toolkit and the extra plugins for the Pharo virtual machine that enable glamorous rendering. It also opens a live document that provides a guided tour.</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8 offset-lg-2">
        <h2>Manually install image, libraries and vm</h2>
        <h3>This will allow you to load more code in the GToolkit image.</h3>
      </div>
            <div class="col-lg-8 offset-lg-2">
        <div class="instructions-item selected" area-labelledby="pharo-70">
          <ol>
            <li>
                <p>Get the latest VM of Pharo 8.0 specific to your system 
                <a href="https://files.pharo.org/get-files/80/pharo64-win-latest.zip" class="btn btn-lg btn-default">Win</a>
                <a href="https://files.pharo.org/get-files/80/pharo64-mac-latest.zip" class="btn btn-lg btn-default">Mac</a>
                <a href="https://files.pharo.org/get-files/80/pharo64-linux-latest.zip" class="btn btn-lg btn-default">Linux</a> 
                </p>
            </li>
             <li>
                <p>Get the <a href="https://github.com/feenkcom/gtoolkit/releases/latest" class="btn btn-lg btn-default">latest image release of GToolikt</a> and one of the libriaries zip files specific to your system. For example, in Windows it would be GToolkit-64-v0.7.204-20190930210955.zip and libWin64-v0.7.204.zip.
                </p>
            </li>
            <li>
                <p>Unpack all 3 zip files (vm, image files and library files) in the same folder and run Pharo. The screenshot below shows a Windows instalation with all dlls, image, and vm files in the same folder.</p>
                <img src="/assets/pictures/manual-install-gt.png"/>
            </li>
          </ol>
        </div>
      </div>
    </div>

  </div><!-- /container -->
</section>

