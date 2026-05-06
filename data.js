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
      logo: './assets/logos/globe-telecom.svg',
      bullets: [
        'Operationalized 10+ production models (XGBoost → LSTM deep learning) serving 60M+ subscribers across 3 markets; scaled from 6 to 14 BAU models with 100% on-time delivery',

        'Pioneered Auto-FinOps: automated cost tracking for 56 MLOps models across Snowflake + Databricks. Problem: cost tracking was manual. Solution: built DAB + scheduled workflow to aggregate spend by use case, warehouse, stakeholder. Result: 90% faster, identified PHP 2.1M+ optimization opportunities',

        'Pioneered Project Atlas: automated model card generation via AST + SQL lineage + LLM synthesis. Problem: 40+ pipelines with zero documentation. Solution: DAB that scans code → generates business abstracts + feature inventory auto-magically. Result: eliminates 8-12 hours manual work per model',

        'Migrated full 14-model portfolio from legacy Airflow → Databricks Workflows + DAB; built daily/weekly/monthly ETL scheduling across 40+ pipeline tasks (100% reliability)',

        'Achieved PHP 4.58M annual Snowflake cost savings (15.8% YoY) via infrastructure rationalization; established Cloud FinOps governance as AWS/GCP admin',

        'Drove ~PHP 1M incremental revenue via churn prediction + customer segmentation; enabled 3.2K+ B2B leads via continuous dashboarding'
      ],
      tags: ['Databricks', 'Snowflake', 'Airflow', 'AWS', 'GCP', 'Python', 'MLOps', 'Cost Optimization']
    },
    {
      company: 'CHED & National University',
      role: 'NLP Developer & Researcher',
      period: 'Sept 2022 – June 2024',
      location: 'Manila, Philippines',
      logo: './assets/logos/national-university.svg',
      bullets: [
        'Built NLP models for sentiment analysis, NER, and topic modeling on Filipino language datasets—first to tackle Taglish code-switching at scale (F1: 0.89)',

        'Executed full data science lifecycle: data collection → preprocessing → model training (TensorFlow/PyTorch) → eval → production deployment (Streamlit)',

        'Trained 200+ faculty and students across Philippine universities in AI/NLP via in-person workshops; built capacity in low-resource language research',

        'Published 13 peer-reviewed papers (ACL, Springer, PACLIC) on code-switching, sign language recognition, and Philippine language NLP'
      ],
      tags: ['NLP', 'TensorFlow', 'PyTorch', 'LSTM', 'Transformers', 'Research', 'Filipino Languages']
    }
  ],

  education: [
    {
      institution: 'Technological Institute of the Philippines',
      degree: 'Master of Science in Computer Science',
      period: '2023 – 2025',
      distinction: 'DOST-ERDT Scholar',
      logo: './assets/logos/tip.svg'
    },
    {
      institution: 'National University Manila',
      degree: 'BS Computer Science (ML Specialization)',
      period: '2018 – 2022',
      distinction: 'Magna Cum Laude · Dean\'s Lister',
      logo: './assets/logos/national-university.svg'
    }
  ],

  skills: {
    mlops: ['Databricks', 'Snowflake', 'Airflow', 'AWS', 'GCP', 'GitLab CI/CD', 'Docker', 'Kubernetes'],
    ml: ['TensorFlow', 'PyTorch', 'LSTM', 'XLM-RoBERTa', 'BERT', 'Hugging Face', 'Scikit-learn'],
    datascience: ['Python', 'Pandas', 'NumPy', 'SQL', 'Jupyter', 'Streamlit'],
    nlp: ['spaCy', 'NLTK', 'Transformers', 'LangChain'],
    web: ['HTML', 'CSS', 'JavaScript', 'Django', 'Flask', 'Git'],
    automation: ['n8n', 'Zapier']
  },

  speakingEngagements: [
    {
      title: 'Databricks & Gen AI: Enterprise Automation Panel',
      event: 'Tech Summit 2025',
      date: 'March 2025',
      description: 'Panel discussion on LLM-driven MLOps automation and cost optimization in enterprise settings',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7302149201541373952/'
    }
  ],

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
      keywords: ['NER', 'Cebuano', 'Low-Resource NLP', 'Filipino Languages'],
      resources: [
        { label: 'ACL Anthology', href: 'https://aclanthology.org/2023.paclic-1.79/' },
        { label: 'arXiv', href: 'https://arxiv.org/abs/2310.00679' },
        { label: 'ResearchGate', href: 'https://www.researchgate.net/publication/389436171_CEBUANER_A_New_Baseline_Cebuano_Named_Entity_Recognition_Model' }
      ]
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
      keywords: ['Sign Language', 'ResNet', 'LSTM', 'Computer Vision', 'Filipino'],
      resources: [
        { label: 'Springer', href: 'https://link.springer.com/chapter/10.1007/978-981-19-2397-5_45' },
        { label: 'ResearchGate', href: 'https://www.researchgate.net/publication/362747600_Filipino_Sign_Language_Recognition_Using_Long_Short-Term_Memory_and_Residual_Network_Architecture' }
      ]
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
      keywords: ['LSTM', 'Sign Language', 'Sequential Modeling', 'Filipino'],
      resources: [
        { label: 'Springer', href: 'https://link.springer.com/chapter/10.1007/978-981-19-2397-5_56' },
        { label: 'ResearchGate', href: 'https://www.researchgate.net/publication/362743613_Sign_Language_Recognition_of_Selected_Filipino_Phrases_Using_LSTM_Neural_Network' }
      ]
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
      keywords: ['Sign Language', 'Deep Learning', 'Computer Vision', 'Filipino'],
      resources: [
        { label: 'ACM Digital Library', href: 'https://dl.acm.org/doi/10.1145/3485768.3485783' },
        { label: 'ResearchGate', href: 'https://www.researchgate.net/publication/357306934_Filipino_Sign_Language_Recognition_using_Deep_Learning' }
      ]
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
      keywords: ['Facial Expression', 'Hate Speech', 'Online Safety', 'Computer Vision'],
      resources: [
        { label: 'ACM Digital Library', href: 'https://dl.acm.org/doi/fullHtml/10.1145/3485768.3485785' },
        { label: 'ResearchGate', href: 'https://www.researchgate.net/publication/357304314_Understanding_Facial_Expression_Expressing_Hate_from_Online_Short-form_Videos' }
      ]
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
      keywords: ['Sentiment Analysis', 'Code-Switching', 'NLP', 'LLMs', 'Filipino'],
      resources: [
        { label: 'Springer', href: 'https://link.springer.com/chapter/10.1007/978-981-99-8349-0_11' },
        { label: 'ResearchGate', href: 'https://researchgate.net/publication/378581258_Sentiment_Analysis_of_Code-Switched_Filipino-English_Product_and_Service_Reviews_Using_Transformers-Based_Large_Language_Models' }
      ]
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
      title: 'Auto-FinOps',
      description:
        'Automated cost attribution engine. Extracts Snowflake + Databricks spend, fuzzy-matches to model registry, aggregates by use case/warehouse/stakeholder. Runs weekly; 90% faster than manual tracking. Identified PHP 2.1M+ optimization opportunities.'
    },
    {
      title: 'Project Atlas',
      description:
        'Automated model documentation. Scans MLOps pipelines via AST + SQL lineage, sends code to LLM for business synthesis, generates model cards + Snowflake table comments. Eliminates 8-12 hours manual work per model; 40+ pipelines in scope.'
    },
    {
      title: 'Daily/Weekly/Monthly ETL Scheduling',
      description:
        'Built 40+ automated pipeline tasks across Databricks Workflows + DAB. Runs feature engineering, model training, scoring with daily/weekly/monthly schedules; 100% on-time delivery, automated monitoring + alerts.'
    }
  ]
};
