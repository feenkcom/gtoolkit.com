---
layout: subpage
permalink: /docs/os-support/
description: Operating System Support - Mac OS, Windows, Linux 
image: /assets/pictures/glamoroustoolkit-icon.png
---

<section id="getstarted">
  <div class="container pt-5 pb-5 jumbotron-small">
    <div class="row">
      <div class="col-md-12">
        <h1>Operating System Support</h1>
        <h2>Mac OS</h2>
        <table>
        	<tr><th>Supported Version</th><th>Known issues</th></tr>
        	<tr><td>10.15 or later</td><td>Opening new windows when in fullscreen mode leads to crash.</td></tr>
        </table>
        <h2>Linux</h2>
        <table>
        	<tr><th>Supported Version</th><th>Known issues</th></tr>
        	<tr>
        		<td>Fedora 31 &amp; 32</td>
        		<td>
        			Native windows are not rendering under Wayland.<br/>
					The Morphic Host turns black after clicking in the window.
        		</td>
        	</tr>
        	<tr><td>Ubuntu 20.04</td><td>Sub-pixel anti-aliasing isn’t supported.</td></tr>
        </table>  
        <h2>Windows</h2>
        <table>
        	<tr><th>Supported Version</th><th>Known issues</th></tr>
        	<tr><td>Windows 10</td><td>Maximizing a window does not update the contents immediately.</td></tr>
        </table>        
      </div>
    </div>
  </div>
</section>