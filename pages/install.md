---
layout: default
title: Install
permalink: /install/
order: 6
---

<section id="install">
  <div class="container pt-5 pb-5 jumbotron-small">
    <div class="row">
      <div class="col-lg-8">
          <h1 class="center-text">Install</h1>
          <p class="lead">You can obtain Glamorous Toolkit in three ways: download a ready made distribution, loading the code in a Pharo image or manually downloading the image, VM and libraries.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <h2>Run alpha 64bit <span class="gtversion"> </span> released on <span class="releasedate"></span></h2> 
      </div>
      <div class="col-lg-4 vspace">
        <a id="osx64" href="https://dl.feenk.com/gt/GlamorousToolkitOSX64-release.zip" class="download-button btn btn-lg btn-block" data-switcher-content="os x">
          <i class="fas fa-download fa-fw"></i><span>Glamorous Toolkit for Mac</span>
        </a>
        <p class="padding center">Unzip, run <code>GlamorousToolkit.app</code> and point it to the <code>GlamorousToolkit.image</code> file.</p>
      </div>
      <div class="col-lg-4 vspace">
        <a id="linux64" href="https://dl.feenk.com/gt/GlamorousToolkitLinux64-release.zip" class="download-button btn btn-lg btn-block" data-switcher-content="linux">
                  <i class="fas fa-download fa-fw"></i><span>GlamorousToolkit for Linux </span>
        </a>
        <p class="padding center">Run <code> ./glamoroustoolkit GlamorousToolkit --interactive</code> from the command line.</p>
      </div>
      <div class="col-lg-4 vspace">
        <a id="win64" href="https://dl.feenk.com/gt/GlamorousToolkitWin64-release.zip" class="download-button btn btn-lg btn-block" data-switcher-content="windows">
          <i class="fas fa-download fa-fw"></i><span>GlamorousToolkit for Windows </span>
        </a>
        <p class="padding center">Unzip and run <code>GlamorousToolkit.exe</code>.</p>
      </div>
    </div> 
    <div class="row">
      <div class="col-lg-8">
        <h2>Get the latest VM and clone the source code in one step</h2>
        <p>This method downloads the VM and clones all gtoolkit repositories. It takes about 20 minutes and it's (mostly) useful for developing GT itself.</p>
      </div>
      <div class="col-lg-8">
        <div class="instructions-item selected" area-labelledby="pharo-70">
          <p>On Mac:</p>
          <pre>curl https://dl.feenk.com/scripts/mac.sh | bash</pre>
          <p>On Linux:</p>
          <pre>curl https://dl.feenk.com/scripts/linux.sh | bash</pre>
          <p>On Windows:</p>
          <p>Clone <a href="https://github.com/feenkcom/gtoolkit/">https://github.com/feenkcom/gtoolkit</a> and then using Powershell cd into  <code>scripts\localbuild</code> and execute <code>.\windows.ps1</code> </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8">
        <h2>Manually install image, libraries and VM</h2>
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
                <p>Get the <a href="https://github.com/feenkcom/gtoolkit/releases/latest" class="btn btn-lg btn-default">latest image release of GlamorousToolkit</a> and one of the libriaries zip files specific to your system. For example, in Windows it would be GT.zip and libWin64-v0.7.890.zip.
                </p>
            </li>
            <li>
                <p>Unpack all 3 zip files (VM, image files and library files) in the same folder and run Pharo. The screenshot below shows a Windows instalation with all dlls, image, and VM files in the same folder.</p>
                <img src="/assets/pictures/manual-install-gt.png"/>
            </li>
            <li>
                <p>Execute the following 2 commands in your favorite terminal. Adjusting the image file name as needed.</p>
                <pre>.\GlamorousToolkitConsole.exe .\GlamorousToolkit-64-20200415081304-a4a2d1e.image eval --save "ThreadedFFIMigration enableThreadedFFI."
                </pre>
                <pre>.\GlamorousToolkitConsole.exe .\GlamorousToolkit-64-20200415081304-a4a2d1e.image eval --save "GtWorld openWithShutdownListener. 30 seconds wait. BlHost pickHost universe snapshot: true andQuit: true."
                </pre>
                <p>And last but not least run in Windows with</p>
                <pre>.\GlamorousToolkit.exe
                </pre>
                <p>In Mac OSX with </p>
                 <pre>./GlamorousToolkit.app/Contents/MacOS/GlamorousToolkit GlamorousToolkit-64-20200415081304-a4a2d1e.image --no-quit --interactive
                 </pre>
                <p>And in Linux with something like </p>
                <pre>./glamoroustoolkit GlamorousToolkit-64-20200415081304-a4a2d1e.image --no-quit --interactive
                </pre>

            </li>
          </ol>
        </div>
      </div>
    </div>

  </div> <!-- /container -->
</section>
