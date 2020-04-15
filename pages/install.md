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
        <h2>Get the latest vm and the latest code in one step</h2>
      </div>
      <div class="col-lg-8 offset-lg-2">
        <div class="instructions-item selected" area-labelledby="pharo-70">
          <p>Get the latest VM of Pharo 8.0 specific to your system</p>
          <p>On Mac:</p>
          <pre style="width: 130%; margin-left: -5%;">curl https://raw.githubusercontent.com/feenkcom/gtoolkit/master/scripts/localbuild/mac.sh | bash</pre>
          <p>On Linux:</p>
          <pre style="width: 130%; margin-left: -5%;">curl https://raw.githubusercontent.com/feenkcom/gtoolkit/master/scripts/localbuild/linux.sh | bash</pre>
          <p>On Windows:</p>
          <p>Using Powershell cd into  <code>scripts\localbuild</code> and execute <code>.\windows.ps1</code> </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8 offset-lg-2">
        <h2>Manually install image, libraries and vm</h2>
        
      </div>
            <div class="col-lg-8 offset-lg-2">
        <div class="instructions-item selected" area-labelledby="pharo-70">
          <ol>
            <li>
                <p>Get the latest VM specific to your system 
                <a href="https://github.com/feenkcom/gtoolkit/releases/download/latest/GToolkitVM-8.2.0-9dcae7b12-win64-bin.zip" class="btn btn-lg btn-default">Win</a>
                <a href="https://github.com/feenkcom/gtoolkit/releases/download/latest/GToolkitVM-8.2.0-9dcae7b12-mac64-bin.zip" class="btn btn-lg btn-default">Mac</a>
                <a href="https://github.com/feenkcom/gtoolkit/releases/download/latest/GToolkitVM-8.2.0-9dcae7b12-linux64-bin.zip" class="btn btn-lg btn-default">Linux</a> 
                </p>
            </li>
             <li>
                <p>Get the <a href="https://github.com/feenkcom/gtoolkit/releases/latest" class="btn btn-lg btn-default">latest image release of GToolkit</a> and one of the libriaries zip files specific to your system. For example, in Windows it would be GToolkit-64-v0.7.204-20190930210955.zip and libWin64-v0.7.204.zip.
                </p>
            </li>
            <li>
                <p>Unpack all 3 zip files (vm, image files and library files) in the same folder and run Pharo. The screenshot below shows a Windows instalation with all dlls, image, and vm files in the same folder.</p>
                <img src="/assets/pictures/manual-install-gt.png"/>
            </li>
            <li>
                <p>Execute the following 2 commands in your favorite terminal. Adjusting the image file name as needed.</p>
                <pre>.\GToolkitConsole.exe .\GToolkit-64-20200415081304-a4a2d1e.image eval --save "ThreadedFFIMigration enableThreadedFFI."
                </pre>
                <pre>.\GToolkitConsole.exe .\GToolkit-64-20200415081304-a4a2d1e.image eval --save "GtWorld openWithShutdownListener. 30 seconds wait. BlHost pickHost universe snapshot: true andQuit: true."
                </pre>
                <p>And last but not least run in Windows with</p>
                <pre>.\GToolkit.exe
                </pre>
                <p>In Mac OSX with </p>
                 <pre>./GToolkit.app/Contents/MacOS/GToolkit GToolkit-64-20200415081304-a4a2d1e.image --no-quit --interactive
                 </pre>
                <p>And in Linux with something like </p>
                <pre>./gtoolkit GToolkit-64-20200415081304-a4a2d1e.image --no-quit --interactive
                </pre>

            </li>
          </ol>
        </div>
      </div>
    </div>

  </div> <!-- /container -->
</section>

