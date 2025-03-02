---
layout: default
title: Download
permalink: /download/
redirect_from: /install/
order: 20
image: /assets/pictures/glamoroustoolkit-icon.png
---

<section id="install">
  <div class="container pt-5 pb-5 jumbotron-small">
    <div class="row">
      <div class="col-lg-8">
          <h1 class="center-text">Download</h1>
          <p class="lead">Glamorous Toolkit is free and open-source. You can obtain it in two ways: downloading a ready made distribution, or cloning the code explicitly.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12" id="release-datetime">
      </div>
    </div>
    <div class="row top-small-space">
      <div class="col-lg-4 ">
        <a id="osxM1" href="https://dl.feenk.com/gt/GlamorousToolkitOSXM1-release.zip" class="download-button btn btn-lg btn-block" data-switcher-content="os x">
          <div><i class="fas fa-download fa-fw margin-right"></i><span>Mac M1, M2, M3</span></div>
          <div><small>macOS 11 or later</small></div>
        </a>
        <p class="padding center">
          Unzip and run <code class="small">GlamorousToolkit.app</code>
        </p>
      </div>
      <div class="col-lg-4 ">
        <a id="osx64" href="https://dl.feenk.com/gt/GlamorousToolkitOSX64-release.zip" class="download-button btn btn-lg btn-block" data-switcher-content="os x">
          <i class="fas fa-download fa-fw margin-right"></i><span>Mac Intel</span>
          <div><small>macOS 10.15 or later</small></div>
        </a>
        <p class="padding center">
          Unzip and run <code class="small">GlamorousToolkit.app</code>
        </p>
      </div>
    </div>
    <div class="row top-small-space">
      <div class="col-lg-4">
        <a id="winArm64" href="https://dl.feenk.com/gt/GlamorousToolkitWinArm64-release.zip" class="download-button btn btn-lg btn-block" data-switcher-content="windows">
          <div><i class="fas fa-download fa-fw margin-right"></i><span>Windows ARM</span></div>
          <div><small>Windows 10 or later</small></div>
        </a>
        <p class="padding center">
          Unzip and run <code class="small">.\bin\GlamorousToolkit.exe</code>
        </p>
      </div>
      <div class="col-lg-4">
        <a id="win64" href="https://dl.feenk.com/gt/GlamorousToolkitWin64-release.zip" class="download-button btn btn-lg btn-block" data-switcher-content="windows">
          <div><i class="fas fa-download fa-fw margin-right"></i><span>Windows Intel</span></div>
          <div><small>Windows 10 or later</small></div>
        </a>
        <p class="padding center">
          Unzip and run <code class="small">.\bin\GlamorousToolkit.exe</code>
        </p>
      </div>
    </div>
    <div class="row top-small-space">
      <div class="col-lg-4">
        <a id="linuxArm64" href="https://dl.feenk.com/gt/GlamorousToolkitLinuxArm64-release.zip" class="download-button btn btn-lg btn-block" data-switcher-content="linux">
          <div><i class="fas fa-download fa-fw margin-right"></i><span>Linux ARM</span></div>
          <div><small>Ubuntu 22.04</small></div>
        </a>
        <p class="padding center">
          Unzip and run <code class="small">./bin/GlamorousToolkit</code>
        </p>
      </div>
      <div class="col-lg-4">
        <a id="linux64" href="https://dl.feenk.com/gt/GlamorousToolkitLinux64-release.zip" class="download-button btn btn-lg btn-block" data-switcher-content="linux">
          <div><i class="fas fa-download fa-fw margin-right"></i><span>Linux Intel</span></div>
          <div><small>Ubuntu 20.04 or later, Fedora 32 & 33 or later</small></div>
        </a>
        <p class="padding center">
          Unzip and run <code class="small">./bin/GlamorousToolkit</code>
        </p>
      </div>
    </div> 
    <div class="row bottom-space">
      <div class="col-lg-8">
        <h2>Alternative: clone and install the latest code</h2>
        <p>Executing the script below installs the VM, clones <a href="https://github.com/feenkcom/gtoolkit">Glamorous Toolkit from GitHub</a> and builds an image. It can takes ~10 minutes and it is useful for developing Glamorous Toolkit itself.</p>
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
