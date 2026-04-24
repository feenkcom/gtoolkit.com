<!--Use cases-->
<section class="xtop-space use-case-showcase padding-bottom-large">
  <div class="container">
    <!-- <div class="row justify-content-center text-center">
      <div class="col-12 col-lg-9">
        <p class="use-case-showcase-kicker">Contextual tools in practice</p>
        <h2>Every problem deserves its own tool</h2>
        <p class="lead use-case-showcase-intro">From codebases to APIs to AI conversations, inspect each domain through interfaces built for that exact context instead of forcing every problem through raw text.</p>
      </div>
    </div> -->
    <div class="row justify-content-center use-case-showcase-layout">
      <div class="col-12 col-xl-11">
        <div class="use-case-card-grid" id="use-case-accordion">
          <article class="use-case-card" id="use-case-card-software-analysis">
            <button class="use-case-card-toggle" type="button" data-toggle="collapse" data-target="#use-case-assessment" aria-expanded="true" aria-controls="use-case-assessment">
              <span class="use-case-card-thumb">
                <img src="/assets/pictures/use-case-assessment-dependencies.png" alt="Software analysis example"/>
              </span>
              <span class="use-case-card-copy">
                <span class="use-case-card-title">Software analysis</span>
                <p class="use-case-card-detail-summary lead">Explore your code from many perspectives.</p>
                <!-- <span class="use-case-card-title">Inspect unfamiliar codebases through dependencies, source, and generated behavior.</span> -->
              </span>
            </button>
            <div id="use-case-assessment" class="collapse show" data-parent="#use-case-accordion">
              <div class="use-case-card-detail">
                <!-- <p class="use-case-card-detail-summary">Trace dependencies, inspect Ruby methods, and understand generated SQL from one place instead of assembling the story by hand.</p> -->
                <div class="sample video-container use-case-card-detail-media">
                  <img src="/assets/pictures/use-case-assessment-dependencies.png" class="img-fluid" alt="Software analysis detail"/>
                </div>
                <p class="use-case-card-detail-caption">Navigate ActiveRecord dependencies in a Rails application while keeping the related Ruby and SQL sources in view.</p>
              </div>
            </div>
          </article>
          <article class="use-case-card" id="use-case-card-dedicated-ai-chats">
            <button class="use-case-card-toggle collapsed" type="button" data-toggle="collapse" data-target="#use-case-llm" aria-expanded="false" aria-controls="use-case-llm">
              <span class="use-case-card-thumb">
                <img src="/assets/pictures/use-case-llm.png" alt="Dedicated AI chats example"/>
              </span>
              <span class="use-case-card-copy">
                <span class="use-case-card-kicker">Dedicated AI chats</span>
                <span class="use-case-card-title">Ground each conversation in the objects, scripts, and actions of the domain.</span>
              </span>
            </button>
            <div id="use-case-llm" class="collapse" data-parent="#use-case-accordion">
              <div class="use-case-card-detail">
                <p class="use-case-card-detail-summary">Combine prompts, actions, and live objects so the conversation follows the structure of the problem you are solving.</p>
                <div class="sample video-container use-case-card-detail-media">
                  <img src="/assets/pictures/use-case-llm.png" class="img-fluid" alt="Dedicated AI chats detail"/>
                </div>
                <p class="use-case-card-detail-caption">Work on a Wardley Map through a dedicated chat that stays connected to the underlying model.</p>
              </div>
            </div>
          </article>
          <article class="use-case-card" id="use-case-card-api-exploration">
            <button class="use-case-card-toggle collapsed" type="button" data-toggle="collapse" data-target="#use-case-api" aria-expanded="false" aria-controls="use-case-api">
              <span class="use-case-card-thumb">
                <img src="/assets/pictures/use-case-rest-api.png" alt="API exploration example"/>
              </span>
              <span class="use-case-card-copy">
                <span class="use-case-card-kicker">API exploration</span>
                <span class="use-case-card-title">Understand remote systems without flattening everything into raw payloads.</span>
              </span>
            </button>
            <div id="use-case-api" class="collapse" data-parent="#use-case-accordion">
              <div class="use-case-card-detail">
                <p class="use-case-card-detail-summary">Turn opaque responses into navigable objects so you can move across endpoints, payloads, and relationships with far less friction.</p>
                <div class="sample video-container use-case-card-detail-media">
                  <img src="/assets/pictures/use-case-rest-api.png" class="img-fluid" alt="API exploration detail"/>
                </div>
                <p class="use-case-card-detail-caption">Inspect a REST API through contextual views that expose structure and linked resources directly.</p>
              </div>
            </div>
          </article>
          <article class="use-case-card" id="use-case-card-data-exploration">
            <button class="use-case-card-toggle collapsed" type="button" data-toggle="collapse" data-target="#use-case-data" aria-expanded="false" aria-controls="use-case-data">
              <span class="use-case-card-thumb">
                <img src="/assets/pictures/use-case-data.png" alt="Data exploration example"/>
              </span>
              <span class="use-case-card-copy">
                <span class="use-case-card-kicker">Data exploration</span>
                <span class="use-case-card-title">Reveal structure and patterns through interactive visual inspection.</span>
              </span>
            </button>
            <div id="use-case-data" class="collapse" data-parent="#use-case-accordion">
              <div class="use-case-card-detail">
                <p class="use-case-card-detail-summary">Inspect datasets through visual and interactive views that reveal clusters, outliers, and behavior before you reach for another script.</p>
                <div class="sample video-container use-case-card-detail-media">
                  <img src="/assets/pictures/use-case-data.png" class="img-fluid" alt="Data exploration detail"/>
                </div>
                <p class="use-case-card-detail-caption">Explore exported Twitter account data through visualizations that expose structure and trends.</p>
              </div>
            </div>
          </article>
          <article class="use-case-card" id="use-case-card-devops-investigations">
            <button class="use-case-card-toggle collapsed" type="button" data-toggle="collapse" data-target="#use-case-devops" aria-expanded="false" aria-controls="use-case-devops">
              <span class="use-case-card-thumb">
                <img src="/assets/pictures/use-case-jenkins.png" alt="DevOps investigations example"/>
              </span>
              <span class="use-case-card-copy">
                <span class="use-case-card-kicker">DevOps investigations</span>
                <span class="use-case-card-title">Diagnose failures by preserving the execution context of logs and jobs.</span>
              </span>
            </button>
            <div id="use-case-devops" class="collapse" data-parent="#use-case-accordion">
              <div class="use-case-card-detail">
                <p class="use-case-card-detail-summary">Move from symptoms to causes by exploring logs, job steps, and system behavior through interfaces that preserve the execution story.</p>
                <div class="sample video-container use-case-card-detail-media">
                  <img src="/assets/pictures/use-case-jenkins.png" class="img-fluid" alt="DevOps investigations detail"/>
                </div>
                <p class="use-case-card-detail-caption">Investigate a failing Jenkins continuous delivery job through contextual log and execution views.</p>
              </div>
            </div>
          </article>
          <article class="use-case-card" id="use-case-card-system-documentation">
            <button class="use-case-card-toggle collapsed" type="button" data-toggle="collapse" data-target="#use-case-documentation" aria-expanded="false" aria-controls="use-case-documentation">
              <span class="use-case-card-thumb">
                <img src="/assets/pictures/use-case-documentation.png" alt="System documentation example"/>
              </span>
              <span class="use-case-card-copy">
                <span class="use-case-card-kicker">System documentation</span>
                <span class="use-case-card-title">Keep explanations and examples connected to the live artifacts they describe.</span>
              </span>
            </button>
            <div id="use-case-documentation" class="collapse" data-parent="#use-case-accordion">
              <div class="use-case-card-detail">
                <p class="use-case-card-detail-summary">Capture rationale, examples, and executable views together so documentation remains inspectable instead of drifting into stale prose.</p>
                <div class="sample video-container use-case-card-detail-media">
                  <img src="/assets/pictures/use-case-documentation.png" class="img-fluid" alt="System documentation detail"/>
                </div>
                <p class="use-case-card-detail-caption">Explore the Glamorous Toolkit book from inside Glamorous Toolkit with live examples and explanations side by side.</p>
              </div>
            </div>
          </article>
          <article class="use-case-card" id="use-case-card-system-specific-editors">
            <button class="use-case-card-toggle collapsed" type="button" data-toggle="collapse" data-target="#use-case-editor" aria-expanded="false" aria-controls="use-case-editor">
              <span class="use-case-card-thumb">
                <img src="/assets/pictures/use-case-editor.png" alt="System specific editors example"/>
              </span>
              <span class="use-case-card-copy">
                <span class="use-case-card-kicker">System specific editors</span>
                <span class="use-case-card-title">Edit the concepts of the domain with contextual completion and navigation.</span>
              </span>
            </button>
            <div id="use-case-editor" class="collapse" data-parent="#use-case-accordion">
              <div class="use-case-card-detail">
                <p class="use-case-card-detail-summary">Build editors that understand references, completion, and navigation inside the language of the problem you are shaping.</p>
                <div class="sample video-container use-case-card-detail-media">
                  <img src="/assets/pictures/use-case-editor.png" class="img-fluid" alt="System specific editors detail"/>
                </div>
                <p class="use-case-card-detail-caption">Edit an AT Protocol lexicon with domain-aware highlighting, completion inside JSON strings, and navigation to definitions.</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</section>