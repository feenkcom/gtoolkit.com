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
          <p class="lead">You can obtain Glamorous Toolkit in three ways: download a ready made distribution, loading the code in a Pharo image or manually downloading the image, vm and libraries.</p>
        <h2>Run alpha 64bit released <span class="releasedate"></span></h2> 
        <ol>
          <li><p>Download the distribution specific to your system:</p>
            <div class="padding">
              <a id="osx64" href="https://dl.feenk.com/gt/GlamorousToolkitOSX64-release.zip" class="download-button btn btn-lg btn-margin btn-default xdownload-active" data-switcher-content="os x">
                <i class="fas fa-download fa-fw"></i><span>GlamorousToolkit alpha for Mac </span><span class="gtversion"></span>
              </a>
            </div>
            <div class="padding">
                <a id="linux64" href="https://dl.feenk.com/gt/GlamorousToolkitLinux64-release.zip" class="download-button btn btn-lg btn-margin xdownload-inactive" data-switcher-content="linux">
                  <i class="fas fa-download fa-fw"></i><span>GlamorousToolkit alpha for Linux </span><span class="gtversion"></span> 
                </a>
            </div>
            <div class="padding">
              <a id="win64" href="https://dl.feenk.com/gt/GlamorousToolkitWin64-release.zip" class="download-button btn btn-lg btn-margin xdownload-inactive" data-switcher-content="windows">
                <i class="fas fa-download fa-fw"></i><span>GlamorousToolkit alpha for Windows </span> <span class="gtversion"></span>
              </a>
            </div>
          </li>
          <li>
            <p>Unzip in a separate directory.</p>
          </li> 
          <li>
            <p>Run the GlamorousToolkit image with the Pharo executable.</p>
            <p>On Mac: Run the <code>GlamorousToolkit.app</code> and point to the GlamorousToolkit image file.</p>
            <p>On Windows: Run <code>GlamorousToolkit.exe</code>. </p>
            <p>On Linux: Run <code> ./glamoroustoolkit GlamorousToolkit-FILENAME-DOT-IMAGE --interactive</code> from the command line.</p>
          </li>
        </ol>
      </div>
    </div> 
    <div class="row">
      <div class="col-lg-8">
        <h2>Get the latest vm and the latest code in one step</h2>
      </div>
      <div class="col-lg-8">
        <div class="instructions-item selected" area-labelledby="pharo-70">
          <p>Get the latest VM of Pharo 8.0 specific to your system</p>
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
        <h2>Manually install image, libraries and vm</h2>
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
                <p>Unpack all 3 zip files (vm, image files and library files) in the same folder and run Pharo. The screenshot below shows a Windows instalation with all dlls, image, and vm files in the same folder.</p>
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

