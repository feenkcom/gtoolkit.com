---
layout: subpage
permalink: /docs/working-with-git/
---

<section id="getstarted">
  <div class="container pt-5 pb-5 jumbotron-small">
    <div class="row">
      <div class="col-md-12">
        <h1>Working with Git and GitHub</h1>
        <p>Before being able to work with GitHub, you first need to setup the credentials for GitHub.</p>
        <pre>
| credentials store |
credentials := IceSshCredentials new
  host:  #'*';
  username: 'git';
  publicKey: 'PATH/TO/id_rsa.pub';
  privateKey: 'PATH/TO/id_rsa';"
  keyPassphrase: 'potential rsa passphrase';"
  yourself.
store := IceCredentialStore current.
store storeSshCredential: credentials forHostname: credentials host.
IceCredentialsProvider useCustomSsh: true.
        </pre>
        <p>Once credentials are set, we can load the actual code via a script that loads a Metacello baseline. For example, try loading:</p>
        <pre>
Metacello new
  baseline: 'Faker';
  repository: 'github://feenkcom/faker/src';
  load.
        </pre>
        <p>This will load the baseline and the code from the repository and will make it available in the image.</p>
        <p>Once you have a Git repository, you can further use the Git interface.</p>
      </div>
    </div>
  </div>
</section>
