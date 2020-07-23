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
      <div class="col-lg-12">
        <h2><span class="gtversion"> </span> beta released on <span class="releasedate"></span></h2> 
      </div>
      <div class="col-lg-4 vspace">
        <a id="osx64" href="https://dl.feenk.com/gt/GlamorousToolkitOSX64-release.zip" class="download-button btn btn-lg btn-block" data-switcher-content="os x">
          <i class="fas fa-download fa-fw margin-right"></i><span>Mac</span>
        </a>
        <p class="padding center">Run <code>GlamorousToolkit.app</code> and point it to the <code>GlamorousToolkit.image</code> file</p>
      </div>
      <div class="col-lg-4 vspace">
        <a id="linux64" href="https://dl.feenk.com/gt/GlamorousToolkitLinux64-release.zip" class="download-button btn btn-lg btn-block" data-switcher-content="linux">
          <i class="fas fa-download fa-fw margin-right"></i><span>Linux </span>
        </a>
        <p class="padding center">Run <code> ./glamoroustoolkit GlamorousToolkit.image --no-quit --interactive</code> from the command line</p>
      </div>
      <div class="col-lg-4 vspace">
        <a id="win64" href="https://dl.feenk.com/gt/GlamorousToolkitWin64-release.zip" class="download-button btn btn-lg btn-block" data-switcher-content="windows">
          <i class="fas fa-download fa-fw margin-right"></i><span>Windows</span>
        </a>
        <p class="padding center">Run <code>GlamorousToolkit.exe</code></p>
      </div>
    </div> 
    <div class="row vspace">
      <div class="col-lg-12">
        <h2>Clone the latest code and install in one step</h2>
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
    <div class="row vspace">
      <div class="col-lg-8">
        <h2>Manually download the image, libraries and VM</h2>
      </div>
      <div class="col-lg-8">
        <div class="instructions-item selected" area-labelledby="pharo-70">
          <ol>
            <li>
                <p>Get the latest VM specific to your system 
                <a href="https://github.com/feenkcom/gtoolkit/releases/latest/download/GlamorousToolkitVM-8.2.0-win64-bin.zip" class="btn btn-lg btn-default">Win</a>
                <a href="https://github.com/feenkcom/gtoolkit/releases/latest/download/GlamorousToolkitVM-8.2.0-mac64-bin.zip" class="btn btn-lg btn-default">Mac</a>
                <a href="https://github.com/feenkcom/gtoolkit/releases/latest/download/GlamorousToolkitVM-8.2.0-linux64-bin.zip" class="btn btn-lg btn-default">Linux</a> 
                </p>
            </li>
             <li>
                <p>Get the <a href="https://github.com/feenkcom/gtoolkit/releases/latest" class="btn btn-lg btn-default">latest image release of GlamorousToolkit</a> and the libriaries zip files specific to your system. For example, on Windows it would be GT.zip and libWin64-v0.7.890.zip.
                </p>
            </li>
            <li>
                <p>Unpack all 3 zip files (VM, image files and library files) in the same folder and run . The screenshot below shows a Windows instalation with all dlls, image, and VM files in the same folder.</p>
                <img src="/assets/pictures/manual-install-gt.png"/>
            </li>
            <li>
                <p>Execute the following 2 commands in your favorite terminal:</p>
                <pre>.\GlamorousToolkitConsole.exe .\GlamorousToolkit.image eval --save "ThreadedFFIMigration enableThreadedFFI."
                </pre>
                <pre>.\GlamorousToolkitConsole.exe .\GlamorousToolkit.image eval --save "GtWorld openWithShutdownListener. 30 seconds wait. BlHost pickHost universe snapshot: true andQuit: true."
                </pre>
            </li>
            <li>
                <p>Launch Glamorous Toolkit:</p>
                <p>On Windows:</p>
                <pre>.\GlamorousToolkit.exe
                </pre>
                <p>On Mac:</p>
                 <pre>./GlamorousToolkit.app/Contents/MacOS/GlamorousToolkit GlamorousToolkit.image --no-quit --interactive
                 </pre>
                <p>On Linux:</p>
                <pre>./glamoroustoolkit GlamorousToolkit.image --no-quit --interactive
                </pre>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div> <!-- /container -->
</section>
