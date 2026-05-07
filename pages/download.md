---
layout: default
title: Download
permalink: /download/
redirect_from: /install/
order: 20
image: /assets/pictures/glamoroustoolkit-icon.png
---

<section id="install">
  <div class="container padding-bottom-large pt-5 jumbotron-small">
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
        <a id="osxM1" href="https://dl.feenk.com/gt/GlamorousToolkitOSXM1-release.zip" class="download-button btn btn-lg btn-default d-flex align-items-center justify-content-between w-100 text-left" data-switcher-content="os x">
          <div class="flex-fill">
            <div><span>Mac Apple Silicon</span></div>
            <div><small>macOS 11 or later</small></div>
            <div><span class="download-button-step">Unzip &amp; open: GlamorousToolkit.app</span></div>
          </div>
          <i class="btn-icon fas fa-download fa-fw" aria-hidden="true"></i>
        </a>
      </div>
      <div class="col-lg-4 ">
        <a id="osx64" href="https://dl.feenk.com/gt/GlamorousToolkitOSX64-release.zip" class="download-button btn btn-lg btn-default d-flex align-items-center justify-content-between w-100 text-left" data-switcher-content="os x">
          <div class="flex-fill">
            <div><span>Mac Intel</span></div>
            <div><small>macOS 10.15 or later</small></div>
            <div><span class="download-button-step">Unzip &amp; open: GlamorousToolkit.app</span></div>
          </div>
          <i class="btn-icon fas fa-download fa-fw" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    <div class="row top-small-space">
      <div class="col-lg-4">
        <a id="winArm64" href="https://dl.feenk.com/gt/GlamorousToolkitWinArm64-release.zip" class="download-button btn btn-lg btn-default d-flex align-items-center justify-content-between w-100 text-left" data-switcher-content="windows">
          <div class="flex-fill">
            <div><span>Windows ARM</span></div>
            <div><small>Windows 10 or later</small></div>
            <div><span class="download-button-step">Unzip &amp; run: .\bin\GlamorousToolkit.exe</span></div>
          </div>
          <i class="btn-icon fas fa-download fa-fw" aria-hidden="true"></i>
        </a>
      </div>
      <div class="col-lg-4">
        <a id="win64" href="https://dl.feenk.com/gt/GlamorousToolkitWin64-release.zip" class="download-button btn btn-lg btn-default d-flex align-items-center justify-content-between w-100 text-left" data-switcher-content="windows">
          <div class="flex-fill">
            <div><span>Windows Intel</span></div>
            <div><small>Windows 10 or later</small></div>
            <div><span class="download-button-step">Unzip &amp; run: .\bin\GlamorousToolkit.exe</span></div>
          </div>
          <i class="btn-icon fas fa-download fa-fw" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    <div class="row top-small-space">
      <div class="col-lg-4">
        <a id="linuxArm64" href="https://dl.feenk.com/gt/GlamorousToolkitLinuxArm64-release.zip" class="download-button btn btn-lg btn-default d-flex align-items-center justify-content-between w-100 text-left" data-switcher-content="linux">
          <div class="flex-fill">
            <div><span>Linux ARM</span></div>
            <div><small>Ubuntu 22.04</small></div>
            <div><span class="download-button-step">Unzip &amp; run: ./bin/GlamorousToolkit</span></div>
          </div>
          <i class="btn-icon fas fa-download fa-fw" aria-hidden="true"></i>
        </a>
      </div>
      <div class="col-lg-4">
        <a id="linux64" href="https://dl.feenk.com/gt/GlamorousToolkitLinux64-release.zip" class="download-button btn btn-lg btn-default d-flex align-items-center justify-content-between w-100 text-left" data-switcher-content="linux">
          <div class="flex-fill">
            <div><span>Linux Intel</span></div>
            <div><small>Ubuntu 20.04, Fedora 32 & 33</small></div>
            <div><span class="download-button-step">Unzip &amp; run: ./bin/GlamorousToolkit</span></div>
          </div>
          <i class="btn-icon fas fa-download fa-fw" aria-hidden="true"></i>
        </a>
      </div>
    </div> 
    <div class="row top-small-space">
      <div class="col-lg-8">
        <p>Instructions on using GlamorousToolkit with Nix are available in the <a href="https://book.gtoolkit.com/how-to-install-glamorous-toolkit-with-nix-bfbaaxjyp9t1ktuetlgm8okxb">GlamorousToolkit book</a>.</p>
      </div>
    </div>
  </div>
</section>

<section class="section-light padding-bottom-large padding-top-large">
  <div class="container">
    <div class="row">
      <div class="col-lg-8">
        <h2>Alternative: clone and install the latest code</h2>
        <p>Choose this path if you want the newest code from <a href="https://github.com/feenkcom/gtoolkit">GitHub</a> or if you plan to work on Glamorous Toolkit itself. The setup script installs the VM, clones the repository, and builds a local image. The first run usually takes about 10 minutes. If you only want to try Glamorous Toolkit, the ready-made downloads above are the faster option.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-10">
        <h3>Mac</h3>
        <pre><code>curl https://dl.feenk.com/scripts/mac.sh | bash</code></pre>
        <h3>Linux</h3>
        <pre><code>curl https://dl.feenk.com/scripts/linux.sh | bash</code></pre>
        <h3>Windows</h3>
        <pre><code>wget https://dl.feenk.com/scripts/windows.ps1 -OutFile windows.ps1; ./windows.ps1</code></pre>
      </div>
    </div>
  </div> <!-- /container -->
</section>
