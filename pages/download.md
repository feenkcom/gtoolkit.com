---
layout: default
title: Download
permalink: /download/
redirect_from: /install/
order: 20
---

<section id="install">
  <div class="container pt-5 pb-5 jumbotron-small">
    <div class="row">
      <div class="col-lg-8">
          <h1 class="center-text">Download</h1>
          <p class="lead">You can obtain Glamorous Toolkit in three ways: downloading a ready made distribution, cloning the code explicitly, or manually downloading the artifacts.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12" id="release-datetime">
      </div>
      <div class="col-lg-4 vspace">
        <a id="osx64" href="https://dl.feenk.com/gt/GlamorousToolkitOSX64-release.zip" class="download-button btn btn-lg btn-block" data-switcher-content="os x">
          <i class="fas fa-download fa-fw margin-right"></i><span>Mac</span>
        </a>
        <p class="padding center">
          Works with macOS 10.13 or later. <br/>
          Support for M1 coming soon. <br/>
          Run <code class="small">GlamorousToolkit.app</code> and point it to the <code class="small">GlamorousToolkit.image</code> file
        </p>
      </div>
      <div class="col-lg-4 vspace">
        <a id="linux64" href="https://dl.feenk.com/gt/GlamorousToolkitLinux64-release.zip" class="download-button btn btn-lg btn-block" data-switcher-content="linux">
          <i class="fas fa-download fa-fw margin-right"></i><span>Linux</span>
        </a>
        <p class="padding center">
          Works with Ubuntu 20.04 and Fedora 32 & 33.<br/>
          Run from the command line: <br/> <code class="small"> ./glamoroustoolkit GlamorousToolkit.image --no-quit --interactive</code>
        </p>
      </div>
      <div class="col-lg-4 vspace">
        <a id="win64" href="https://dl.feenk.com/gt/GlamorousToolkitWin64-release.zip" class="download-button btn btn-lg btn-block" data-switcher-content="windows">
          <i class="fas fa-download fa-fw margin-right"></i><span>Windows</span>
        </a>
        <p class="padding center">
          Works with Windows 10.<br/>
          Run <code class="small">GlamorousToolkit.exe</code>
        </p>
      </div>
    </div> 
    <div class="row vspace">
      <div class="col-lg-8">
        <h2>Alternative: clone the latest code and install in one step</h2>
        <p>This method downloads the VM and clones all gtoolkit repositories. It takes about 20 minutes and it is useful for developing Glamorous Toolkit itself.</p>
      </div>
      <div class="col-lg-8">
        <div class="instructions-item selected" area-labelledby="pharo-70">
          <p>On Mac:</p>
          <pre>curl https://dl.feenk.com/scripts/mac.sh | bash</pre>
          <p>On Linux:</p>
          <pre>curl https://dl.feenk.com/scripts/linux.sh | bash</pre>
          <p>On Windows:</p>
          <pre>wget https://dl.feenk.com/scripts/windows.ps1 -OutFile windows.ps1; ./windows.ps1</pre>
        </div>
      </div>
    </div>
  </div> <!-- /container -->
</section>
