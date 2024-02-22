---
layout: subpage
permalink: /community/cla/
description: feenk gmbh Contributor Level Agreement
image: /assets/pictures/glamoroustoolkit-icon.png
---

<section id="components">
  <div class="container pt-5 pb-5 jumbotron-small">
    <div class="row">
      <div class="col-12">
        <h1>Contributor license agreement</h1>
        <p class="lead">
          <a href="https://feenk.com">feenk gmbh (feenk)</a>, the team that authored Glamorous Toolkit, requires all contributors to sign a Contributor License Agreement (CLA).
        </p>
        <p class="lead">This CLA clarifies the intellectual property rights in the project and any Contributions. This CLA is for your protection as a contributor as well as the protection of feenk, recipients of software distributed or made available by feenk, and other contributors. It does not change your rights to use your own Contributions for any other purpose.
        </p>

        <h2>Agreement</h2>
        <div id="agreement-text">
          <p>You accept and agree to the following terms and conditions for Your past, present, and future Contributions submitted to feenk.</p>

          <p>Except for the licenses granted herein to feenk and the recipients of software distributed or made available by feenk, You reserve all right, title, and interest in and to Your Contributions.</p>

          <p>1. Definitions.</p>
          <p>“You” (or “Your”) shall mean the copyright owner or legal entity authorized by the copyright owner that is making this Agreement with feenk. For legal entities, the entity making a Contribution and all other entities that control, are controlled by, or are under common control with that entity are considered to be a single Contributor. For the purposes of this definition, “control” means (i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the outstanding shares, or (iii) beneficial ownership of such entity. </p>

          <p>“Contribution” shall mean the code, documentation or other original works of authorship, invention or improvement, including any modifications or additions to an existing work, that is intentionally submitted by You to feenk for inclusion in, or documentation of, any of the projects owned or managed by feenk (the “Work”). For the purposes of this definition, “submitted” means any form of electronic, verbal, or written communication sent to feenk or its representatives, including but not limited to communication on electronic mailing lists, source code control systems, and issue tracking systems that are managed by, or on behalf of, feenk for the purpose of discussing and improving the Work, but excluding communication that is conspicuously marked or otherwise designated in writing by You as “Not a Contribution.”</p>

          <p>2. Grant of Copyright License.</p>
          <p>Subject to the terms and conditions of this Agreement, You hereby grant to feenk and the recipients of software distributed or made available by feenk a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare derivative works of, publicly display, publicly perform, make available, and distribute Your Contributions and such derivative works, as well as the right to sublicense and have sublicensed, through multiple tiers of sublicensees, all of the foregoing rights.
          </p>

          <p>3. Grant of Patent License.</p>
          <p>Subject to the terms and conditions of this Agreement, You hereby grant to feenk and the recipients of software distributed or made available by feenk a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this section) patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Work and Your Contributions, as well as the right to sublicense and have sublicensed, through multiple tiers of sublicensees, all of the foregoing rights where such license applies only to those patent claims licensable by You that are necessarily infringed by Your Contributions alone or by combination of Your Contributions with the Work to which such Contributions were submitted. If any entity institutes patent litigation against You or any other entity (including a cross-claim or counterclaim in a lawsuit) alleging that any of Your Contributions, or the Work to which you have contributed, constitutes direct or contributory patent infringement, then any patent licenses granted to that entity under this Agreement for that Contribution or Work shall terminate as of the date such litigation is filed (“Defensive Patent Termination”), provided that the terms under which such instituting entity obtained any such patent license provide notice of this Defensive Patent Termination.</p>

          <p>4. You represent that You are legally entitled to grant the above license. If any third party (such as your employer(s)) has rights to any portion of any of Your Contributions, you represent that such third party has authorized yoursubmission of such Contributions or that such third party has waived such rights for such Contributions.</p>

          <p>5. You represent that each of Your Contributions is Your original creation (see section 7 for submissions of work that is not Your original creation).</p>

          <p>6. You are not expected to provide support for Your Contributions, except to the extent You desire to provide support. You may provide support for free, for a fee, or not at all. Unless required by applicable law or agreed to in writing,and except for the representations and warranties elsewhere in this Agreement, You provide Your Contributions on an “ASIS” BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, anywarranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE.</p>

          <p>7. Should You wish to submit, along with any of Your Contributions, work that is not Your original creation (“Third Party Work”), You represent that You have sufficient rights in such Third Party Work to make the submission and may submit it to feenk separately from any Contribution, identifying the complete details of its source and of any license or other restriction (including, but not limited to, related patents, trademarks, and license agreements) and conspicuously marking the work as “Submitted on behalf of a third-party: [named here] and licensed pursuant to: [license name]” (substituting the bracketed text with the applicable information).</p>

          <p>8. You agree to notify feenk of any facts or circumstances of which you become aware that would make these representations inaccurate in any respect.</p>
        </div>

        <form id="contributorSignature" class="row g-3">
          <div class="col-md-4">
            <label class="form-label">
              Your full name:
              <input type="text" id="name" name="name" required size="20" class="form-control">
            </label>
          </div>
          <div class="col-md-4">
            <label class="form-label">
              Your email:
              <input type="email" id="email" name="email" required size="20" class="form-control">
            </label>
          </div>
          <div class="col-md-4">
            <label class="form-label">
              Your GitHub username:
              <input type="text" id="gitHubLogin" name="gitHubLogin" required size="20" class="form-control">
            </label>
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="submit" id="send-email-button">Send email</button>
          </div>
          <div class="col-12 pt-4">
            <label class="form-label" for="send-email-button">
              This form emails the information here to contributing@feenk.com and helps us verify your email.
            </label>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

<script>
  function agreementText() {
    let agreementText = '';

    $('#agreement-text p').each(function () {
      agreementText += $(this).text().trim() + '\n\n';
    });

    return agreementText.trimEnd();
  }

  function generateMailtoLink(fullName, email, gitHubLogin) {
    // Encode the values for use in the URL
    const encodedSubject = encodeURIComponent("feenk CLA agreement");
    const encodedBody = encodeURIComponent(`Dear feenk,\n\nI hereby agree with the feenk Contributor License Agreement found at http://gtoolkit.com/community/cla/ and acknowledge that feenk gmbh is the author of Glamorous Toolkit: https://gtoolkit.com\n\nI confirm that the following information is accurate:\n\n\tFull name: ${fullName}\n\n\tEmail address (the same as the one from which this email is sent): ${email}\n\n\tGitHub login: ${gitHubLogin}\n\nKind regards,\n${fullName}\n\nContributor License Agreement follows:\n\n${agreementText()}`);

    // Generate the mailto with encoded values
    return `mailto:contributing@feenk.com?subject=${encodedSubject}&body=${encodedBody}`;
  }

  jQuery(document).ready(function($) {
    const queryParams = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });

    const form = $('form#contributorSignature');
    const gitHubLogin = queryParams.gitHubLogin;
    form.find('#gitHubLogin').val(gitHubLogin);

    form.on('submit', (event) => {
      event.preventDefault(); // prevent the form from submitting normally
      const name = form.find('#name').val();
      const email = form.find('#email').val();
      const gitHubLogin = form.find('#gitHubLogin').val();

      window.location.href = generateMailtoLink(name, email, gitHubLogin);
    });
  });
</script>
