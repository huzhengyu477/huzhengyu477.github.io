# Hi! I am Zhengyu Hu🤗

I am a Ph.D. student at the **University of Washington, Seattle**, advised by Prof. <a class="person" href="https://scholar.google.com/citations?hl=en&user=EEoNZ7NbVzMC&view_op=list_works&sortby=pubdate">Radha Poovendran</a>. I get my M.Phil. degree at the **Hong Kong University of Science and Technology**, advised by Prof. <a class="person" href="https://scholar.google.com/citations?user=cVDF1tkAAAAJ">Hui Xiong</a>. I am currently a research intern at <img class="brand-logo" src="/assets/img/logos/qwen.png" alt="Qwen"> **Qwen Team, Foundation Model Group**. Now, my work focuses on post-training (e.g., RL and OPD) for long-horizon agentic training. <span class="badge badge-accent">Working for the Qwen3.5 / 3.6 / 3.7 / 3.8 / 4.0... series</span> Previously, I interned at <img class="brand-logo" src="/assets/img/logos/microsoft.svg" alt="Microsoft"> **Microsoft Research Asia (MSRA)**, supervised by Dr. <a class="person" href="https://scholar.google.com/citations?user=5EQfAFIAAAAJ">Xing Xie</a>, Dr. <a class="person" href="https://scholar.google.com/citations?user=B-d1EHAAAAAJ">Nicholas Jing Yuan</a>, and Dr. <a class="person" href="https://scholar.google.com/citations?user=tSq7dIkAAAAJ">Jianxun Lian</a>. Before that, I interned at <img class="brand-logo" src="/assets/img/logos/meituan.svg" alt="Meituan"> **Meituan (Foundation Model Group)** under the supervision of Dr. <a class="person" href="https://scholar.google.com/citations?user=janU39IAAAAJ">Jingang Wang</a> and Dr. <a class="person" href="https://scholar.google.com/citations?user=PqrvpbkAAAAJ">Zhengyu Chen</a>. My research focuses on <strong>Data-Centric AI</strong> and <strong>Agentic Systems</strong> for <strong>Large Language / Multimodal Models</strong>.






---

<div class="publications-header">
  <h2 id="publications">📝 Selected Publications</h2>
  <div class="publication-filter-actions">
    <button type="button" class="research-category publication-filter" data-filter="all" aria-controls="paper-list" aria-pressed="true">All Papers</button>
    {% if site.scholar_url %}
      <a class="publication-scholar-link" href="{{ site.scholar_url }}" aria-label="Google Scholar profile">
        <img src="{{ "/img/google-scholar.svg" | relative_url }}" alt="" aria-hidden="true" />
        <span>Google Scholar</span>
      </a>
    {% endif %}
  </div>
</div>
<p class="pub-hint">(* denotes equal contribution; = denotes students mentored by me.)</p>

<div class="research-umbrella">
  <div class="research-umbrella-label">🌐 Data-Centric AI</div>
  <div class="research-categories" role="group" aria-label="Data-Centric AI topics">
    <button type="button" class="research-category publication-filter" data-filter="preference-data" aria-controls="paper-list" aria-pressed="false">⚖️ Preference Data</button>
    <button type="button" class="research-category publication-filter" data-filter="dataset-construction" aria-controls="paper-list" aria-pressed="false">🗂️ Dataset Construction</button>
    <button type="button" class="research-category publication-filter" data-filter="data-selection" aria-controls="paper-list" aria-pressed="false">🔍 Data Selection</button>
  </div>
</div>

<div class="research-umbrella">
  <div class="research-umbrella-label">🤖 Agentic System</div>
  <div class="research-categories" role="group" aria-label="Agentic System topics">
    <button type="button" class="research-category publication-filter" data-filter="long-horizon-agents" aria-controls="paper-list" aria-pressed="false">🧭 Long-Horizon Agents</button>
  </div>
</div>

<div class="publication-years" id="paper-list">
  <div class="paper-year-group" data-year="2026">
    <h3 class="paper-year-heading">Preprint</h3>
    <ul class="paper-list">
      <li data-category="long-horizon-agents">
        <a class="paper-title" href="https://arxiv.org/pdf/2611.11995">Infrathon: Benchmarking Language Agents for Real-World, Long-Horizon AI Infra Optimization</a>
        <div class="paper-authors"><strong><u>Zhengyu Hu</u></strong>, Zheyuan Xiao, Yike Wang, Hamish Ivison, Haoyu Wang, Yige Yuan, Rulin Shao, Yuetai Li, Niqi Lyu, Kevin Ding, Shu Yang, Zhichen Zeng, Banghua Zhu, Jiaxin Pei, Kaize Ding, Pradeep Dasigi, Dan Roth, Hannaneh Hajishirzi, Noah A. Smith, Teng Xiao, Radha Poovendran.</div>
        <div class="paper-tags"><span class="venue venue-submitted">arXiv</span><a href="https://infrathonx.github.io/">Homepage</a><a href="https://infrathonx.github.io/blog.html">Blog</a><span class="paper-category">🧭 Long-Horizon Agents</span></div>
      </li>
      <li data-category="long-horizon-agents">
        <a class="paper-title" href="https://rsi-first-exam.rsi-anything.workers.dev/">OpenRSI-Index</a>
        <div class="paper-authors"><strong><u>Zhengyu Hu</u></strong> · Core Contributor</div>
        <div class="paper-tags"><span class="venue venue-workshop">Open Source Project</span><span class="paper-category">🧭 Long-Horizon Agents</span></div>
      </li>
      <li data-category="long-horizon-agents">
        <a class="paper-title" href="https://arxiv.org/pdf/2607.12227">Rethinking the Evaluation of Harness Evolution for Agents</a>
        <div class="paper-authors">Yike Wang*, Huaisheng Zhu*, <strong><u>Zhengyu Hu</u></strong>, Yige Yuan, Zhengyu Chen, Shakti Senthil, Hannaneh Hajishirzi, Yulia Tsvetkov, Noah A. Smith, Pradeep Dasigi, Teng Xiao.</div>
        <div class="paper-tags"><span class="venue venue-submitted">Submitted to ICLR 2027</span><span class="venue venue-workshop">Accepted at LLA@COLM 2026</span><span class="paper-category">🧭 Long-Horizon Agents</span></div>
      </li>
    </ul>
  </div>
  <div class="paper-year-group" data-year="2026">
    <h3 class="paper-year-heading">2026</h3>
    <ul class="paper-list">
      <li data-category="dataset-construction">
        <a class="paper-title" href="https://arxiv.org/pdf/2509.10127">Population-Aligned Persona Generation for LLM-based Social Simulation</a>
        <div class="paper-authors"><strong><u>Zhengyu Hu</u></strong>, Jianxun Lian, Zheyuan Xiao, Tianfu Wang, Xiao Teng, Fengqing Jiang, Max Xiong, Yuxuan Lei, Kaize Ding, Ziang Xiao, Nicholas Jing Yuan, Xing Xie, Radha Poovendran.</div>
        <div class="paper-tags"><span class="venue venue-main">NeurIPS 2026</span><span class="paper-category">🗂️ Dataset Construction</span></div>
      </li>
      <li data-category="data-selection">
        <a class="paper-title" href="https://arxiv.org/pdf/2605.26872">When the Strongest Teacher Is Not the Best Teacher: Student-Centric Answer Selection</a>
        <div class="paper-authors"><strong><u>Zhengyu Hu</u></strong>*, Zheyuan Xiao*=, Linxin Song, Fengqing Jiang, Yuetai Li, Zhihan Xiong, Junhao Lin, Yue Liu, Yao Su, Lijie Hu, Kaize Ding, Teng Xiao, Radha Poovendran.</div>
        <div class="paper-tags"><span class="venue venue-main">EMNLP 2026</span><span class="paper-category">🔍 Data Selection</span></div>
      </li>
      <li data-category="preference-data">
        <a class="paper-title" href="https://arxiv.org/pdf/2410.12869">Towards Acyclic Preference Evaluation of Language Models via Multiple Evaluators</a>
        <div class="paper-authors"><strong><u>Zhengyu Hu</u></strong>, Jieyu Zhang, Zhihan Xiong, Alexander Ratner, Kaize Ding, Ranjay Krishna.</div>
        <div class="paper-tags"><span class="venue venue-main">AAAI 2026</span><span class="venue venue-workshop">DATA-FM@ICLR 2025</span><span class="paper-category">⚖️ Preference Data</span></div>
      </li>
    </ul>
  </div>
  <div class="paper-year-group" data-year="2025">
    <h3 class="paper-year-heading">2025</h3>
    <ul class="paper-list">
      <li data-category="dataset-construction">
        <a class="paper-title" href="https://arxiv.org/pdf/2506.13464">Unveiling the Learning Mind of Language Models: A Cognitive Framework and Empirical Study</a>
        <div class="paper-authors"><strong><u>Zhengyu Hu</u></strong>, Jianxun Lian, Zheyuan Xiao, Seraphina Zhang, Tianfu Wang, Nicholas Jing Yuan, Xing Xie, Hui Xiong.</div>
        <div class="paper-tags"><span class="venue venue-main">NeurIPS 2025</span><span class="paper-category">🗂️ Dataset Construction</span></div>
      </li>
      <li data-category="preference-data">
        <a class="paper-title" href="https://arxiv.org/pdf/2407.01085">Explaining Length Bias in LLM-Based Preference Evaluations</a>
        <div class="paper-authors"><strong><u>Zhengyu Hu</u></strong>, Linxin Song, Jieyu Zhang, Zheyuan Xiao, Tianfu Wang, Nicholas Jing Yuan, Jianxun Lian, Kaize Ding, Hui Xiong.</div>
        <div class="paper-tags"><span class="venue venue-main">EMNLP 2025</span><span class="venue venue-workshop">DATA-FM@ICLR 2025</span><span class="paper-category">⚖️ Preference Data</span></div>
      </li>
      <li data-category="data-selection">
        <a class="paper-title" href="https://arxiv.org/pdf/2405.15476">Editable Concept Bottleneck Models</a>
        <div class="paper-authors">Lijie Hu*, Chenyang Ren*, <strong><u>Zhengyu Hu</u></strong>*, Hongbin Lin, Cheng-Long Wang, Hui Xiong, Di Wang.</div>
        <div class="paper-tags"><span class="venue venue-main">ICML 2025</span><span class="venue venue-workshop">DATA-FM@ICLR 2025</span><span class="paper-category">🔍 Data Selection</span></div>
      </li>
    </ul>
  </div>
  <div class="paper-year-group" data-year="2024">
    <h3 class="paper-year-heading">2024</h3>
    <ul class="paper-list">
      <li data-category="data-selection">
        <a class="paper-title" href="https://arxiv.org/pdf/2410.07074">Let's Ask GNN: Empowering Large Language Model for Graph In-Context Learning</a>
        <div class="paper-authors"><strong><u>Zhengyu Hu</u></strong>*, Yichuan Li*, Zhengyu Chen, Jingang Wang, Han Liu, Kyumin Lee, Kaize Ding.</div>
        <div class="paper-tags"><span class="venue venue-main">EMNLP 2024</span><span class="paper-category">🔍 Data Selection</span></div>
      </li>
    </ul>
  </div>
  <div class="paper-year-group" data-year="2023">
    <h3 class="paper-year-heading">2023</h3>
    <ul class="paper-list">
      <li data-category="dataset-construction">
        <a class="paper-title" href="https://arxiv.org/abs/2305.12224">On the Trade-off of Intra-/Inter-class Diversity for Supervised Pre-training</a>
        <div class="paper-authors">Jieyu Zhang*, Bohan Wang*, <strong><u>Zhengyu Hu</u></strong>, Pang Wei Koh, Alexander Ratner.</div>
        <div class="paper-tags"><span class="venue venue-main">NeurIPS 2023</span><span class="paper-category">🗂️ Dataset Construction</span></div>
      </li>
      <li data-category="data-selection">
        <a class="paper-title" href="https://dl.acm.org/doi/pdf/10.1145/3580305.3599414">Leveraging Relational Graph Neural Network for Transductive Model Ensemble</a>
        <div class="paper-authors"><strong><u>Zhengyu Hu</u></strong>, Jieyu Zhang, Haonan Wang, Siwei Liu, Shangsong Liang.</div>
        <div class="paper-tags"><span class="venue venue-main">SIGKDD 2023</span><span class="paper-category">🔍 Data Selection</span></div>
      </li>
    </ul>
  </div>
</div>

---

## 🏅 Professional Service {#service}

**Conference Reviewer**
+ **2027:** AAAI, SIGKDD, ICLR, AISTATS, NAACL, WWW
+ **2026:** AAAI, SIGKDD, ICLR, AISTATS, NAACL, ICML, ACL, EMNLP, NeurIPS, WWW, CVPR
+ **2025:** AAAI, SIGKDD, ICLR, AISTATS, NAACL, ICML, ACL, EMNLP, NeurIPS
+ **2024:** AISTATS, CVPR, WWW, ICLR, COLING, ACL, ACM MM, SIGKDD, ECCV, EMNLP, NeurIPS
+ **2023:** SIGKDD, NeurIPS

**Journal Reviewer**
+ DMLR, TNNLS, TPAMI, ACM TSC

{% comment %}
---

## Music Corner {#music-corner}

{% for collection in site.data.music_collections %}
{% assign music_tracks = site.data.music_tracks[collection.id] %}
{% assign featured_index = collection.featured_part | minus: 1 %}
{% assign featured_track = music_tracks[featured_index] %}

<div class="music-corner" lang="zh-CN" data-cid="{{ featured_track.cid }}">
  <div class="music-main">
    <div class="music-bar">
      <span class="music-disc" aria-hidden="true"></span>
      <div class="music-copy">
        <h3>{{ collection.title | escape }}</h3>
        <p class="music-current" aria-live="polite">
          {{ featured_track.title | escape }} ·
          {% if featured_track.artist %}
            {{ featured_track.artist | escape }}
          {% else %}
            {% assign featured_minutes = featured_track.duration | divided_by: 60 %}
            {% assign featured_seconds = featured_track.duration | modulo: 60 %}
            <time datetime="PT{{ featured_minutes }}M{{ featured_seconds }}S">{{ featured_minutes }}:{% if featured_seconds < 10 %}0{% endif %}{{ featured_seconds }}</time>
          {% endif %}
        </p>
        <a class="music-source" href="https://www.bilibili.com/video/{{ collection.bvid }}/?p={{ featured_track.part }}" target="_blank" rel="noopener noreferrer">B 站原页 <span aria-hidden="true">↗</span></a>
      </div>
      <button class="music-toggle" type="button" aria-label="打开播放器" aria-controls="music-player-{{ collection.id }}" aria-expanded="false" hidden>
        <span class="music-toggle-icon" aria-hidden="true"></span>
      </button>
    </div>
    <div class="music-player" id="music-player-{{ collection.id }}" hidden></div>
  </div>
  <template>
    <iframe title="B 站音乐播放器" src="https://player.bilibili.com/player.html?isOutside=true&amp;bvid={{ collection.bvid }}&amp;autoplay=1&amp;danmaku=0" allow="autoplay" allowfullscreen></iframe>
  </template>
  {% if music_tracks.size > 1 %}
  <details class="music-playlist" hidden>
    <summary>歌单 · {{ music_tracks.size }} 首</summary>
    <ol class="music-tracks">
      {% for track in music_tracks %}
      {% assign minutes = track.duration | divided_by: 60 %}
      {% assign seconds = track.duration | modulo: 60 %}
      <li>
        <button type="button" class="music-track" data-part="{{ track.part }}" data-cid="{{ track.cid }}" aria-pressed="{% if track.part == featured_track.part %}true{% else %}false{% endif %}">
          <span>{{ track.title | escape }} · {{ track.artist | escape }}</span>
          <time datetime="PT{{ minutes }}M{{ seconds }}S">{{ minutes }}:{% if seconds < 10 %}0{% endif %}{{ seconds }}</time>
        </button>
      </li>
      {% endfor %}
    </ol>
  </details>
  {% endif %}
</div>
{% endfor %}
{% endcomment %}
