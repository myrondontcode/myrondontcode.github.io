// Simple check for data availability
const checkData = () => window.PORTFOLIO_DATA;

function renderExperience() {
  const container = document.getElementById('experience-timeline');
  if (!container) return;

  const data = checkData();
  if (!data) return;

  const html = data.experience
    .map(
      (job, index) => `
    <div class="timeline-item reveal" style="--card-index: ${index}">
      <div class="timeline-dot"></div>
      <div class="experience-card">
        <div class="experience-header">
          ${job.logo ? `<img src="${job.logo}" alt="${job.company}" class="company-logo" />` : ''}
          <div>
            <div class="company-name">${job.company}</div>
            <div class="experience-role">${job.role}</div>
          </div>
        </div>
        <div class="experience-meta">
          <span>${job.period}</span>
          <span>📍 ${job.location}</span>
        </div>
        <ul class="experience-bullets">
          ${job.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}
        </ul>
        <div class="experience-tags">
          ${job.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
    </div>
  `
    )
    .join('');

  container.innerHTML = html;
}

function renderEducation() {
  const container = document.getElementById('education-grid');
  if (!container) return;

  const data = checkData();
  if (!data) return;

  const html = data.education
    .map(
      (edu, index) => `
    <div class="education-card reveal" style="--card-index: ${index}">
      ${edu.logo ? `<img src="${edu.logo}" alt="${edu.institution}" class="education-logo" />` : ''}
      <div class="education-institution">${edu.institution}</div>
      <div class="education-degree">${edu.degree}</div>
      <div class="education-period">${edu.period}</div>
      <div class="education-distinction">${edu.distinction}</div>
    </div>
  `
    )
    .join('');

  container.innerHTML = html;
}

function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  const data = checkData();
  if (!data) return;

  const skillIconMap = {
    'Databricks': 'databricks',
    'Snowflake': 'snowflake',
    'AWS': 'aws',
    'GCP': 'googlecloud',
    'Airflow': 'apacheairflow',
    'Docker': 'docker',
    'TensorFlow': 'tensorflow',
    'PyTorch': 'pytorch',
    'XLM-RoBERTa': 'spacy',
    'BART': 'pytorch',
    'BERT': 'tensorflow',
    'Hugging Face': 'huggingface',
    'Scikit-learn': 'scikit-learn',
    'Python': 'python',
    'Pandas': 'pandas',
    'NumPy': 'numpy',
    'Seaborn': 'seaborn',
    'Matplotlib': 'seaborn',
    'Jupyter': 'jupyter',
    'spaCy': 'spacy',
    'NLTK': 'spacy',
    'Transformers': 'huggingface',
    'Streamlit': 'streamlit',
    'LangChain': 'pytorch',
    'HTML': 'html5',
    'CSS': 'css3',
    'JavaScript': 'javascript',
    'Django': 'django',
    'Flask': 'flask',
    'Git': 'git',
    'n8n': 'n8n',
    'Zapier': 'zapier',
    'Make (Integromat)': 'n8n'
  };

  const categories = [
    { key: 'mlops', label: 'MLOps & Infrastructure' },
    { key: 'ml', label: 'ML / Deep Learning' },
    { key: 'datascience', label: 'Data Science' },
    { key: 'nlp', label: 'NLP' },
    { key: 'web', label: 'Web & Backend' },
    { key: 'automation', label: 'Automation (Production)' },
    { key: 'exploring', label: 'Automation (Exploring)' }
  ];

  const html = categories
    .map((category) => {
      const isExploring = category.key === 'exploring';
      const skills = data.skills[category.key] || [];

      return `
      <div class="skill-category reveal">
        <div class="skill-category-title">${category.label}</div>
        <div class="skill-grid">
          ${skills
            .map((skill, index) => {
              const iconFile = skillIconMap[skill] || 'python';
              return `
            <div class="skill-tile ${isExploring ? 'exploring' : ''}" style="--card-index: ${index}">
              <img src="./assets/icons/${iconFile}.svg" alt="${skill}" class="skill-icon" />
              <span class="skill-name">${skill}</span>
              ${isExploring ? '<span class="exploring-badge">EXPLORING</span>' : ''}
            </div>
          `;
            })
            .join('')}
        </div>
      </div>
    `;
    })
    .join('');

  container.innerHTML = html;
}

function renderThesisSpotlight() {
  const container = document.getElementById('thesis-spotlight');
  if (!container) return;

  const data = checkData();
  if (!data) return;

  const thesis = data.publications.find((p) => p.type === 'thesis');
  if (!thesis) return;

  const html = `
    <div class="thesis-label">MS Thesis · DOST-ERDT Funded</div>
    <h3 class="thesis-title">${thesis.title}</h3>

    <div class="thesis-meta">
      <div class="thesis-meta-item">${thesis.year}</div>
      <div class="thesis-meta-item">Technological Institute of the Philippines</div>
      <div class="thesis-metric">${thesis.metric}</div>
    </div>

    <p class="thesis-description">
      ${thesis.abstract}
    </p>

    <div class="thesis-tags">
      ${thesis.keywords.map((kw) => `<span class="tag">${kw}</span>`).join('')}
    </div>

    <a href="${thesis.pdfPath}" target="_blank" rel="noopener noreferrer" class="thesis-cta">
      Read Full Manuscript
    </a>
  `;

  container.innerHTML = html;
}

function renderPublicationFilters() {
  const container = document.getElementById('publication-filters');
  if (!container) return;

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'nlp', label: 'NLP & Code-Switching' },
    { value: 'signlang', label: 'Sign Language' },
    { value: 'disaster', label: 'Disaster Risk' },
    { value: 'socialmedia', label: 'Social Media' },
    { value: 'other', label: 'Other' }
  ];

  const html = categories
    .map(
      (cat, index) => `
    <button class="filter-tab ${index === 0 ? 'active' : ''}" data-filter="${cat.value}">
      ${cat.label}
    </button>
  `
    )
    .join('');

  container.innerHTML = html;

  container.querySelectorAll('.filter-tab').forEach((btn) => {
    btn.addEventListener('click', function () {
      container.querySelectorAll('.filter-tab').forEach((b) => b.classList.remove('active'));
      this.classList.add('active');

      const filter = this.dataset.filter;
      const publicationCards = document.querySelectorAll('.publication-card');

      publicationCards.forEach((card) => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

function renderPublications() {
  const container = document.getElementById('publications-grid');
  if (!container) return;

  const data = checkData();
  if (!data) return;

  const papers = data.publications.filter((p) => p.type !== 'thesis');

  const html = papers
    .map(
      (paper, index) => `
    <div class="publication-card reveal" data-category="${paper.category}" style="--card-index: ${index % 2}">
      <h3 class="publication-title">
        ${paper.pdfPath ? `<a href="${paper.pdfPath}" target="_blank" rel="noopener noreferrer">${paper.title}</a>` : paper.title}
      </h3>

      <div class="publication-meta">
        <span class="publication-venue">${paper.venue}</span>
        <span>${paper.year}</span>
        ${paper.metric ? `<span class="publication-metric">${paper.metric}</span>` : ''}
      </div>

      <div class="publication-tags">
        ${paper.keywords.map((kw) => `<span class="tag">${kw}</span>`).join('')}
      </div>

      <div class="publication-abstract">
        ${paper.abstract}
      </div>

      ${paper.resources ? `
        <div class="publication-resources">
          ${paper.resources.map((res) => `<a href="${res.href}" target="_blank" rel="noopener noreferrer" class="resource-link">${res.label}</a>`).join('')}
        </div>
      ` : ''}
    </div>
  `
    )
    .join('');

  container.innerHTML = html;

  container.querySelectorAll('.publication-card').forEach((card) => {
    card.addEventListener('click', function () {
      this.classList.toggle('expanded');
    });
  });
}

function renderAutomationWorkflows() {
  const productionContainer = document.getElementById('production-workflows');
  const exploringContainer = document.getElementById('exploring-tools');

  const data = checkData();
  if (!data) return;

  if (productionContainer) {
    const workflows = data.automationWorkflows;
    const html = workflows
      .map(
        (workflow, index) => `
      <div class="workflow-card reveal" style="--card-index: ${index}">
        <svg class="workflow-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        <h4 class="workflow-card-title">${workflow.title}</h4>
        <p class="workflow-card-description">${workflow.description}</p>
      </div>
    `
      )
      .join('');
    productionContainer.innerHTML = html;
  }

  if (exploringContainer) {
    const tools = [
      { name: 'n8n', icon: '🔄' },
      { name: 'Zapier', icon: '⚡' },
      { name: 'Make', icon: '🔗' },
      { name: 'Databricks', icon: '📊' }
    ];

    const html = tools
      .map(
        (tool, index) => `
      <div class="workflow-tool reveal" style="--card-index: ${index}">
        <div class="workflow-tool-icon">${tool.icon}</div>
        <div class="workflow-tool-name">${tool.name}</div>
        <span class="learning-badge">BUILDING</span>
      </div>
    `
      )
      .join('');
    exploringContainer.innerHTML = html;
  }
}

function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const data = checkData();
  if (!data) return;

  const html = data.projects
    .map(
      (project, index) => `
    <div class="project-card reveal" style="--card-index: ${index}">
      <div class="project-image">
        <span>${project.name}</span>
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.name}</h3>
        <p class="project-subtitle">${project.subtitle}</p>
        <p class="project-description">${project.description}</p>

        <div class="project-tags">
          ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
        </div>

        <div class="project-links">
          ${project.links.map((link) => `<a href="${link.href}" class="project-link" target="_blank" rel="noopener noreferrer">${link.label}</a>`).join('')}
        </div>
      </div>
    </div>
  `
    )
    .join('');

  container.innerHTML = html;
}

function renderCertifications() {
  const container = document.getElementById('certifications-grid');
  if (!container) return;

  const data = checkData();
  if (!data) return;

  const html = data.certifications
    .map(
      (cert, index) => `
    <div class="certification-card reveal" style="--card-index: ${index % 3}">
      <div class="cert-badge">${cert.issuer.charAt(0)}</div>
      <h3 class="cert-name">${cert.name}</h3>
      <p class="cert-issuer">${cert.issuer}</p>
      <a href="${cert.pdfPath}" target="_blank" rel="noopener noreferrer" class="cert-link">View Certificate</a>
    </div>
  `
    )
    .join('');

  container.innerHTML = html;
}

function renderSpeakingEngagements() {
  const container = document.getElementById('speaking-grid');
  if (!container) return;

  const data = checkData();
  if (!data || !data.speakingEngagements) return;

  const html = data.speakingEngagements
    .map(
      (engagement, index) => `
    <a href="${engagement.link}" target="_blank" rel="noopener noreferrer" class="speaking-card reveal" style="--card-index: ${index}">
      <div class="speaking-content">
        <h3 class="speaking-title">${engagement.title}</h3>
        <p class="speaking-event">${engagement.event}</p>
        <p class="speaking-date">${engagement.date}</p>
        <p class="speaking-description">${engagement.description}</p>
        <span class="speaking-cta">View on LinkedIn →</span>
      </div>
    </a>
  `
    )
    .join('');

  container.innerHTML = html;
}

function renderAll() {
  renderExperience();
  renderEducation();
  renderSkills();
  renderThesisSpotlight();
  renderPublicationFilters();
  renderPublications();
  renderAutomationWorkflows();
  renderSpeakingEngagements();
  renderProjects();
  renderCertifications();
  console.log('✅ All content rendered');
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderAll);
} else {
  renderAll();
}
