export const PORTFOLIO_DATA = {
  meta: {
    name: 'Myron Darrel Montefalcon',
    title: 'AI Automation Specialist · MLOps · NLP Research',
    email: 'darrelmontefalcon@gmail.com',
    linkedin: 'https://linkedin.com/in/myroncodez',
    cvPath: './Docs/Resume/MONTEFALCON_MYRON_DARREL_CV-5.pdf'
  },

  experience: [
    {
      company: 'Globe Telecom',
      role: 'Machine Learning Operations Expert',
      period: 'Aug 2024 – Present',
      location: 'BGC, Manila',
      logo: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="%23FF6B35"/><text x="50" y="60" font-size="48" font-weight="bold" text-anchor="middle" fill="white">G</text></svg>',
      bullets: [
        'Scaled production ML portfolio: operationalized 6 high-impact models with 100% SLA success rate; maintained 14 BAU models with 100% on-time scoring delivery',
        'Delivered 9 high-priority change requests with 100% success rate and <4-day turnaround; migrated full 14-model portfolio from legacy Airflow to Databricks Workflows + DAB',
        'Achieved PHP 4.58M+ cost optimization across GCP (15.80% Snowflake savings) and infrastructure rationalization; established CloudFinOps governance as GCP/AWS Admin',
        'Drove business impact: ~PHP 1M incremental revenue via churn prediction & customer segmentation; enabled 3.2K+ B2B leads and continuous dashboarding across CDA profiles'
      ],
      tags: ['Databricks', 'Snowflake', 'AWS', 'GCP', 'Python', 'MLOps', 'Cloud FinOps', 'Model Governance']
    },
    {
      company: 'CHED & National University',
      role: 'NLP Developer & Researcher',
      period: 'Sept 2022 – June 2024',
      location: 'Manila, Philippines',
      logo: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="%234A90E2"/><text x="50" y="60" font-size="40" font-weight="bold" text-anchor="middle" fill="white">NU</text></svg>',
      bullets: [
        'Designed and deployed advanced NLP models for sentiment analysis, named entity recognition, and topic modeling across Filipino language datasets',
        'Executed full data science lifecycle: data collection, preprocessing, model training (TensorFlow, PyTorch), evaluation, and production deployment',
        'Conducted research capacity building: delivered AI, NLP, and data science workshops to faculty and students across Philippine universities',
        'Published 15+ peer-reviewed research papers, including work on code-switching detection and low-resource language processing'
      ],
      tags: ['NLP', 'TensorFlow', 'PyTorch', 'BERT', 'Python', 'Research', 'Capacity Building']
    }
  ],

  education: [
    {
      institution: 'Technological Institute of the Philippines',
      degree: 'PhD in Computer Science',
      period: '2025 – Present',
      distinction: 'In Progress',
      logo: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="%23C41E3A"/><text x="50" y="65" font-size="32" font-weight="bold" text-anchor="middle" fill="white">TIP</text></svg>'
    },
    {
      institution: 'Technological Institute of the Philippines',
      degree: 'Master of Science in Computer Science',
      period: '2023 – 2025',
      distinction: 'DOST-ERDT Scholar',
      logo: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="%23C41E3A"/><text x="50" y="65" font-size="32" font-weight="bold" text-anchor="middle" fill="white">TIP</text></svg>'
    },
    {
      institution: 'National University Manila',
      degree: 'BS Computer Science (ML Specialization)',
      period: '2018 – 2022',
      distinction: 'Magna Cum Laude · Dean\'s Lister',
      logo: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="%234A90E2"/><text x="50" y="60" font-size="40" font-weight="bold" text-anchor="middle" fill="white">NU</text></svg>'
    }
  ],

  skills: {
    mlops: ['Airflow', 'Snowflake', 'AWS', 'GitLab CI/CD', 'Docker', 'Kubernetes'],
    ml: [
      'TensorFlow',
      'PyTorch',
      'XLM-RoBERTa',
      'BART',
      'BERT',
      'Hugging Face',
      'Scikit-learn'
    ],
    datascience: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib', 'Jupyter'],
    nlp: ['spaCy', 'NLTK', 'Transformers', 'Streamlit', 'LangChain'],
    web: ['HTML', 'CSS', 'JavaScript', 'Django', 'Flask', 'Git'],
    automation: ['n8n', 'Zapier'],
    exploring: ['Make (Integromat)', 'Databricks', 'LangChain Agents']
  },

  publications: [
    {
      title: 'A Transformer-Language Model Approach for Code-Switching Detection in Filipino-English Text',
      category: 'nlp',
      type: 'thesis',
      venue: 'MS Thesis, Technological Institute of the Philippines',
      year: 2025,
      metric: 'F1: 0.89',
      pdfPath: './Docs/Research papers/Montefalcon Final Manuscript.pdf',
      abstract:
        'A hybrid NLP architecture fusing XLM-RoBERTa multilingual embeddings with BART for token-level code-switching detection in Taglish. Trained on 5,201 sentences (54,956 tokens) from social media, spoken transcripts, and conversational data, achieving F1=0.89 with domain sensitivity analysis.',
      keywords: ['Code-Switching', 'NLP', 'Taglish', 'Transformers', 'Filipino Language']
    },
    {
      title: 'A Hybrid Transformer Architecture for Code-Switching Detection in Filipino-English Text',
      category: 'nlp',
      type: 'conference',
      venue: 'Conference Proceedings',
      year: 2025,
      metric: 'F1: 0.94',
      pdfPath: './Docs/Research papers/A_Hybrid_Transformer_Architecture_for_Code_Switching_Detection_in_Filipino_English_Text.pdf',
      abstract:
        'Extended thesis work presenting the hybrid XLM-R + BART + POS model achieving F1=0.94 and 0.95 accuracy for Taglish token classification. Includes detailed domain performance analysis across social media, spoken, and conversational modalities.',
      keywords: ['Code-Switching', 'Transformers', 'NLP', 'Multilingual', 'Filipino']
    },
    {
      title: 'CEBUANER: A New Baseline Cebuano Named Entity Recognition Model',
      category: 'nlp',
      type: 'conference',
      venue: 'Proceedings of the 37th Pacific Asia Conference on Language, Information and Computation (PACLIC)',
      year: 2023,
      metric: 'Baseline Model',
      pdfPath: 'https://aclanthology.org/2023.paclic-1.79.pdf',
      abstract:
        'First baseline transformer-based NER model for Cebuano language, addressing the gap in low-resource NLP tools for Philippine languages and enabling future research in Cebuano NLP.',
      keywords: ['NER', 'Cebuano', 'Low-Resource NLP', 'Filipino Languages']
    },
    {
      title: 'Filipino Sign Language Recognition Using Long Short-Term Memory and Residual Network Architecture',
      category: 'signlang',
      type: 'conference',
      venue: 'Springer Conference Proceedings',
      year: 2022,
      pdfPath: 'https://link.springer.com/chapter/10.1007/978-981-19-2397-5_45',
      abstract:
        'Hybrid architecture combining ResNet for spatial feature extraction and LSTM for temporal sequence modeling to recognize Filipino Sign Language (FSL) phrases with high accuracy.',
      keywords: ['Sign Language', 'ResNet', 'LSTM', 'Computer Vision', 'Filipino']
    },
    {
      title: 'Sign Language Recognition of Selected Filipino Phrases Using LSTM Neural Network',
      category: 'signlang',
      type: 'conference',
      venue: 'Springer Conference Proceedings',
      year: 2022,
      pdfPath: 'https://link.springer.com/chapter/10.1007/978-981-19-2397-5_56',
      abstract:
        'LSTM-based sequential model for recognizing pre-defined Filipino Sign Language phrases from video sequences, demonstrating effectiveness of recurrent architectures for sign language understanding.',
      keywords: ['LSTM', 'Sign Language', 'Sequential Modeling', 'Filipino']
    },
    {
      title: 'Filipino Number Sign Language Recognition using Deep Learning',
      category: 'signlang',
      type: 'paper',
      venue: 'Research Publication',
      year: 2022,
      pdfPath: null,
      abstract:
        'Deep learning approach for recognizing Filipino Sign Language (FSL) numerals using convolutional neural networks trained on curated dataset of sign language video frames.',
      keywords: ['Sign Language', 'Deep Learning', 'Computer Vision', 'Filipino']
    },
    {
      title: 'Understanding Facial Expressions Expressing Hate from Online Short-form Videos',
      category: 'other',
      type: 'paper',
      venue: 'Research Publication',
      year: 2023,
      pdfPath: 'https://www.researchgate.net/publication/357304314_Understanding_Facial_Expression_Expressing_Hate_from_Online_Short-form_Videos',
      abstract:
        'Analysis of facial expression patterns in online hate speech content using computer vision and sentiment analysis to understand emotional drivers of toxic online behavior.',
      keywords: ['Facial Expression', 'Hate Speech', 'Online Safety', 'Computer Vision']
    },
    {
      title: 'Sentiment Analysis of Code-Switched Filipino-English Product and Service Reviews Using Transformers-Based Large Language Models',
      category: 'nlp',
      type: 'conference',
      venue: 'Springer Conference Proceedings',
      year: 2023,
      pdfPath: 'https://link.springer.com/chapter/10.1007/978-981-99-8349-0_11',
      abstract:
        'Application of transformer-based LLMs for sentiment analysis on code-switched Filipino-English reviews, demonstrating effectiveness of multilingual models on Philippine language data.',
      keywords: ['Sentiment Analysis', 'Code-Switching', 'NLP', 'LLMs', 'Filipino']
    },
    {
      title: 'Classifying Emotions of Digital Immigrants while using Software Application based on Facial Features',
      category: 'other',
      type: 'paper',
      venue: 'Research Publication',
      year: 2022,
      pdfPath: null,
      abstract:
        'Emotion classification from facial features for older adults using software applications, providing insights into user experience and usability challenges for digital immigrant populations.',
      keywords: ['Emotion Recognition', 'Facial Features', 'UX Research', 'Aging']
    },
    {
      title: 'Comparative Thematic Analysis of Reflections from Physical and Virtual Internship Experiences of Computing Undergraduates',
      category: 'other',
      type: 'paper',
      venue: 'Research Publication',
      year: 2021,
      pdfPath: null,
      abstract:
        'Qualitative research comparing student learning outcomes and experiences between in-person and virtual internship programs in computer science education during the COVID-19 pandemic.',
      keywords: ['Education', 'Internship', 'Virtual Learning', 'Qualitative Research']
    },
    {
      title: 'The Post Behind Anonymity: A Thematic Discourse Analysis of Facebook Posts from Confession Pages',
      category: 'socialmedia',
      type: 'paper',
      venue: 'Research Publication',
      year: 2022,
      pdfPath: null,
      abstract:
        'Thematic analysis of anonymous confession posts across Philippine university Facebook pages, examining themes of mental health, academic stress, and social challenges among students.',
      keywords: ['Social Media', 'Discourse Analysis', 'Mental Health', 'Qualitative Research']
    },
    {
      title: 'Information Seeking Behavior in ChatGPT: The Case of Programming Students from a Developing Economy',
      category: 'other',
      type: 'paper',
      venue: 'Research Publication',
      year: 2023,
      pdfPath: null,
      abstract:
        'Empirical study of how programming students in developing economies utilize ChatGPT for learning and problem-solving, revealing unique patterns in AI tool adoption and information-seeking strategies.',
      keywords: ['ChatGPT', 'Information Seeking', 'Education', 'AI Adoption']
    },
    {
      title: 'Predicting Intention to Recommend Digital Citizen Participation using Machine Learning',
      category: 'other',
      type: 'paper',
      venue: 'Research Publication',
      year: 2023,
      pdfPath: null,
      abstract:
        'Predictive ML models for forecasting citizen engagement and recommendation likelihood in digital civic participation platforms, supporting evidence-based civic tech design.',
      keywords: ['Civic Tech', 'Machine Learning', 'Digital Engagement', 'Prediction']
    },
    {
      title: 'Discovering Insights via Hybrid Thematic Analysis: A Case Study on Disaster Risk Reduction and Management',
      category: 'disaster',
      type: 'paper',
      venue: 'Research Publication',
      year: 2023,
      pdfPath: null,
      abstract:
        'Mixed-methods case study combining quantitative and qualitative thematic analysis for disaster risk reduction strategies in Legazpi City, Albay, Philippines.',
      keywords: ['Disaster Risk', 'Thematic Analysis', 'Qualitative Research', 'Philippines']
    },
    {
      title: 'iRespondPH: A Mobile and Web Application for Post Disaster Needs and Assessment Tool',
      category: 'other',
      type: 'paper',
      venue: 'Research Publication',
      year: 2021,
      pdfPath: null,
      abstract:
        'A comprehensive digital platform for post-disaster damage assessment and needs analysis in the Philippines, enabling rapid data collection and insight generation for disaster response coordination.',
      keywords: ['Disaster Response', 'Web Application', 'Data Collection']
    }
  ],

  projects: [
    {
      name: 'MBC Consultation Analysis',
      subtitle: 'Survey Data Analysis for Philippine Cities',
      description:
        'Comprehensive analysis of digital consultation survey data from Himamaylan City, Pasig City, and Victorias City as part of the Municipalities/Barangay Consultations (MBC) initiative. Includes data cleaning, exploratory analysis, visualization, and insight generation.',
      tags: ['Python', 'Pandas', 'Data Analysis', 'Visualization', 'Survey Data'],
      links: [
        { label: 'Himamaylan Report', href: './Docs/Side projects/MBC Analysis/Himamaylan City Analysis Report.pdf' },
        { label: 'Pasig Report', href: './Docs/Side projects/MBC Analysis/Pasig City Analysis Report.pdf' },
        { label: 'Victorias Report', href: './Docs/Side projects/MBC Analysis/Victorias City Analysis Report.pdf' }
      ]
    },
    {
      name: 'Taglish Code-Switching Detector',
      subtitle: 'Live NLP Demo · Streamlit',
      description:
        'Interactive web application demonstrating the MS thesis code-switching detection model in real-time. Users input Filipino-English text and receive token-level language predictions with confidence scores and color-coded output for visual clarity.',
      tags: ['Streamlit', 'NLP', 'XLM-RoBERTa', 'Python', 'Interactive Demo'],
      links: [
        { label: 'Try the Demo', href: '#' }
      ]
    }
  ],

  certifications: [
    {
      name: 'Databricks Certified Data Engineer',
      issuer: 'Databricks',
      year: 2024,
      pdfPath: './Docs/Certificates/2308_3_1215686_1759286901_Databricks - Generic.pdf'
    },
    {
      name: 'AI MLOps Bootcamp',
      issuer: 'Udemy',
      year: 2024,
      pdfPath: './Docs/Certificates/Udempy AI MLOPS - Montefalcon.pdf'
    },
    {
      name: 'Complete Python Bootcamp',
      issuer: 'Udemy',
      year: 2023,
      pdfPath: './Docs/Certificates/Udemy Python - Montefalcon.pdf'
    },
    {
      name: 'Data Science Webinar Training',
      issuer: 'Data Science Community',
      year: 2023,
      pdfPath: './Docs/Certificates/Data Science Webinar Training Certificate.pdf'
    },
    {
      name: 'Certificate of Paper Presentation',
      issuer: 'Conference Organizers',
      year: 2023,
      pdfPath: './Docs/Certificates/Certificate of Paper Presentation_Dr. Abisado, Mr. Hernandez, Mr. Montefalcon.pdf'
    }
  ],

  automationWorkflows: [
    {
      title: 'MLOps Pipeline Design',
      description:
        'End-to-end orchestration of model training, validation, and deployment pipelines using Airflow DAGs with automated failure recovery and performance monitoring.'
    },
    {
      title: 'Data Pipeline Automation',
      description:
        'Snowflake-based data ingestion, transformation, and quality checks with automated alerts for anomalies and data drift detection.'
    },
    {
      title: 'CI/CD for ML',
      description:
        'GitLab pipeline automation for model versioning, containerization, testing, and deployment to production with zero-downtime updates.'
    }
  ]
};
