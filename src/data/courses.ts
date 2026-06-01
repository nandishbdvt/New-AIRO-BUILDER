

export interface Faculty {
  name: string;
  designation: string;
  qualification: string;
  specialisation: string;
  experience: string;
  email: string;
  patents: string[];
  publications: number;
  selectedPublications: string[];
  bio: string;
  photoInitials: string;
  photoColor: string;
}

export interface Course {
  code: string;
  slug: string;
  name: string;
  link: string;
  intake: number;
  duration: string;
  overview: string;
  subjects: string[];
  labs: string[];
  careers: string[];
  eligibility: string;
  affiliation: string;
  faculty: Faculty[];
}

export const courses: Course[] =
[
  {
    "code": "AIML",
    "slug": "aiml",
    "name": "Artificial Intelligence and Machine Learning",
    "link": "/departments/aiml",
    "intake": 60,
    "duration": "4 Years",
    "overview": "Artificial Intelligence and Machine Learning department offers quality technical education and research opportunities.",
    "subjects": [],
    "labs": [],
    "careers": [],
    "eligibility": "10+2 with PCM",
    "affiliation": "VTU, Belagavi",
    "faculty": [
      {
        "name": "Dr. CHETAN K R",
        "designation": "Professor & Head",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Artificial Intelligence and Machine Learning",
        "experience": "23 years",
        "email": "chetankr@jnnce.ac.in",
        "patents": [
          "AGrowW â€“ AN INTELLIGENT PRECISION FARMING TOOLKIT FOR FARMERS",
          "AIEmosense-DEPRESSION DETECTION AND FACE RECOGNITION BASED ATTENDANCE SYSTEM USING EMOTIONAL ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
          "SMART LOCKS ENABLED BY ARTIFICIAL INTELLIGENCE DRIVEN INTERNET-OFTHINGS",
          "SWASTHYA â€“ A COGNITIVE AI APPLICATION FOR QUERYING AND ANALYZING ELECTRONIC HEALTH RECORD TO PROVIDE EFFECTIVE PATIENT ENGAGEMENT",
          "AI-POWERED INTELLIGENT AND SMART WHITEBOARD WITH CLEANER"
        ],
        "publications": 13,
        "selectedPublications": [
          "An efficient and secure robust watermarking scheme",
          "An  Adaptive  Curvelet  Based  Semi-Fragile Watermarking Scheme for Effective and Intelligent Tampering Classification and Recovery of Digital Images",
          "Multiple  Content  Adaptive  Intelligent Watermarking Schemes for   the  Protection\tof  Blocks  of  a   Document\tImage"
        ],
        "bio": "CHETAN K R is a faculty member in the Artificial Intelligence and Machine Learning department with experience in academics and research.",
        "photoInitials": "CK",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. ASHWINI J P",
        "designation": "Associate Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Artificial Intelligence and Machine Learning",
        "experience": "4 years",
        "email": "ashwinijp@jnnce.ac.in",
        "patents": [
          "AI BASED SPECTACLES FOR  DETECTING OCULAR ABNORMALITIES IN STIDENTS"
        ],
        "publications": 4,
        "selectedPublications": [
          "A Study on Artificial Intelligence Technology in Education and its Incorporation of learning psychology  principles.",
          "ARCHITECTURE OF FOG-COMPUTING  FRAMEWORK FOR M-COMMERCE APPLICATIONS",
          "Framework for Performance Enhancement of MPI based Application on Cloud"
        ],
        "bio": "ASHWINI J P is a faculty member in the Artificial Intelligence and Machine Learning department with experience in academics and research.",
        "photoInitials": "AJ",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. SAYYED JOHAR",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Artificial Intelligence and Machine Learning",
        "experience": "16 years",
        "email": "sayyedjohar@jnnce.ac.in",
        "patents": [
          "A Deep Learning Framework with Hybrid Optimization for Intelligent IoMT Patient Monitoring",
          "AI BASED HEALTHCARE DEVICE FOR EARLY DISEASE DETECTION",
          "BIG DATA ANALYTICS FRAMEWORK FOR  REMOTE DISEASE SURVEILLANCE"
        ],
        "publications": 10,
        "selectedPublications": [
          "An Inconventional Lightweight Freshness Scheme for Wireless Sensor Networks",
          "Image Stitching Using Correlation Method",
          "AN IMAGE STEGANOGRAPHY METHOD USING CANNY EDGE DETECTION FOR HIDING DATA IN IMAGE USING HSI COLOR SPACE"
        ],
        "bio": "SAYYED JOHAR is a faculty member in the Artificial Intelligence and Machine Learning department with experience in academics and research.",
        "photoInitials": "SJ",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. RANJAN V",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Artificial Intelligence and Machine Learning",
        "experience": "3 years",
        "email": "ranjan@jnnce.ac.in",
        "patents": [],
        "publications": 4,
        "selectedPublications": [
          "Innovative Approaches to Sleep Apnea Anomaly Detection Utilizing Machine Learning Techniques",
          "A Survey on Outlier Detection in Videos Using Machine Learning Methods: Embracing New Trends and Technologies",
          "Anomaly Detection in Video with Knowledge Distillation Radial Kernel Function Assisted Ensemble Model"
        ],
        "bio": "RANJAN V is a faculty member in the Artificial Intelligence and Machine Learning department with experience in academics and research.",
        "photoInitials": "RV",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. SHAZIYA BANU S",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Artificial Intelligence and Machine Learning",
        "experience": "3 years",
        "email": "shaziyas@jnnce.ac.in",
        "patents": [
          "DYNAMIC TRAFFIC CONTROL METHODOLOGY WITH IOT AND MACHINE LEARNING INTEGRATION",
          "AI based spectacles for detecting ocular abnormalities in students",
          "AI based Water quality checking device"
        ],
        "publications": 2,
        "selectedPublications": [
          "The Identification and Detection of Diabetic Retinopathy Using Image Processing Techniques based on Medical  Imaging : A Survey",
          "Identification of Harmful Matters Over the surface of the water  bodies Using Deep Learning: A Comprehensive Review"
        ],
        "bio": "SHAZIYA BANU S is a faculty member in the Artificial Intelligence and Machine Learning department with experience in academics and research.",
        "photoInitials": "SB",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. NISHANTH S",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Artificial Intelligence and Machine Learning",
        "experience": "2 years",
        "email": "nishanths@jnnce.ac.in",
        "patents": [],
        "publications": 1,
        "selectedPublications": [
          "Cloud Platforms for AI: A Survey on Infrastructure, Optimization, and Governance"
        ],
        "bio": "NISHANTH S is a faculty member in the Artificial Intelligence and Machine Learning department with experience in academics and research.",
        "photoInitials": "NS",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Ms. AALIYA WASEEM",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Artificial Intelligence and Machine Learning",
        "experience": "1 years",
        "email": "aaliya@jnnce.ac.in",
        "patents": [],
        "publications": 3,
        "selectedPublications": [
          "Beyond The Blackboard: CTI As a Catalyst For Educational Innovation",
          "A Comprehensive Double Auction Mechanism for Edge  Computing Services: A Survey",
          "AI-Driven Approaches for Carbon Footprint  Monitoring and Traffic Optimization in 5G Wireless  Networks"
        ],
        "bio": "AALIYA WASEEM is a faculty member in the Artificial Intelligence and Machine Learning department with experience in academics and research.",
        "photoInitials": "AW",
        "photoColor": "#7C3AED"
      }
    ]
  },
  {
    "code": "CDS",
    "slug": "cds",
    "name": "Computer Science and Engineering (Data Science)",
    "link": "/departments/cds",
    "intake": 60,
    "duration": "4 Years",
    "overview": "Computer Science and Engineering (Data Science) department offers quality technical education and research opportunities.",
    "subjects": [],
    "labs": [],
    "careers": [],
    "eligibility": "10+2 with PCM",
    "affiliation": "VTU, Belagavi",
    "faculty": [
      {
        "name": "Dr. MANJULA G R",
        "designation": "Professor & Head",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Computer Science and Engineering (Data Science)",
        "experience": "20 years",
        "email": "grmanjula@jnnce.ac.in",
        "patents": [
          "LIVE VIDEO STEGANOGRAPHY USING MACHINE LEARNING AND MORLET WAVELETS",
          "ENCODING AND DECODING A SECRET AUDIO IN A PRIMARY AUDIO",
          "AI BASED HEALTHCARE DEVICE FOR EARLY DISEASE DETECTION"
        ],
        "publications": 4,
        "selectedPublications": [
          "Video Steganography using Convolutional Neural Network and Temporal Residual Method",
          "Embedding Multiple Images In a Single Image Using Bit Plane Complexity Segmentation (BPCS) Steganography",
          "VOICE AND TEXT BASED VIRTUAL PERSONAL ASSISTANT FOR DESKTOP"
        ],
        "bio": "MANJULA G R is a faculty member in the Computer Science and Engineering (Data Science) department with experience in academics and research.",
        "photoInitials": "MG",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. SUSHMA R B",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Computer Science and Engineering (Data Science)",
        "experience": "16 years",
        "email": "Sushmarb@jnnce.ac.in",
        "patents": [],
        "publications": 4,
        "selectedPublications": [
          "Hiding of Text Tunes in Video",
          "Hybrid Selective Steganography",
          "DETECTION OF PEDESTRIAN AND VEHICLES FOR ROAD SAFETY"
        ],
        "bio": "SUSHMA R B is a faculty member in the Computer Science and Engineering (Data Science) department with experience in academics and research.",
        "photoInitials": "SR",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. NAMITHA M V",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Computer Science and Engineering (Data Science)",
        "experience": "11 years",
        "email": "namithamv@jnnce.ac.in",
        "patents": [],
        "publications": 5,
        "selectedPublications": [
          "AUDIO STEGANOGRAPHY USING LIVE AUDIO STREAM AS COVER WITH DYNAMIC KEY GENERATION",
          "High-capacity steganography through audio fusion and fission",
          "StegAbb: A Cover-Generating Text Steganographic Tool Using GPT-3 Language Modeling for Covert Communication Across SDRs"
        ],
        "bio": "NAMITHA M V is a faculty member in the Computer Science and Engineering (Data Science) department with experience in academics and research.",
        "photoInitials": "NM",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Ms. SUCHITHA H S",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Computer Science and Engineering (Data Science)",
        "experience": "1 years",
        "email": "",
        "patents": [],
        "publications": 0,
        "selectedPublications": [],
        "bio": "SUCHITHA H S is a faculty member in the Computer Science and Engineering (Data Science) department with experience in academics and research.",
        "photoInitials": "SH",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. SATHVIK S R",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Computer Science and Engineering (Data Science)",
        "experience": "1 years",
        "email": "",
        "patents": [],
        "publications": 0,
        "selectedPublications": [],
        "bio": "SATHVIK S R is a faculty member in the Computer Science and Engineering (Data Science) department with experience in academics and research.",
        "photoInitials": "SS",
        "photoColor": "#7C3AED"
      }
    ]
  },
  {
    "code": "CSE",
    "slug": "cse",
    "name": "Computer Science and Engineering",
    "link": "/courses/cse",
    "intake": 240,
    "duration": "4 Years",
     overview:
      'The CSE program equips students with strong foundations in algorithms, data structures, software engineering, and emerging technologies like AI, machine learning, and cloud computing.',
    subjects: [
      'Data Structures & Algorithms',
      'Operating Systems',
      'Database Management Systems',
      'Computer Networks',
      'Artificial Intelligence',
      'Machine Learning',
      'Cloud Computing',
      'Software Engineering',
    ],
    labs: ['Programming Lab', 'Networks Lab', 'AI & ML Lab', 'Project Lab'],
    careers: ['Software Engineer', 'Data Scientist', 'Cloud Architect', 'AI/ML Engineer'],
    "eligibility": "10+2 with PCM",
    "affiliation": "VTU, Belagavi",
    "faculty": [
      {
        "name": "Dr. POORNIMA K M",
        "designation": "Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Computer Science and Engineering",
        "experience": "22 years",
        "email": "kmpoornima@jnnce.ac.in",
        "patents": [],
        "publications": 6,
        "selectedPublications": [
          "Malicious Websites Classification Using Machine Learning Techniques: A Survey Paper",
          "Severity and Disease Affected Area Measurement in Paddy and Maize Crop Leaves using Image Processing Techniques",
          "Efficient Storage Reducing System in Blockchain System: A Review"
        ],
        "bio": "POORNIMA K M is a faculty member in the Computer Science and Engineering department with experience in academics and research.",
        "photoInitials": "PKM",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. JALESH KUMAR",
        "designation": "Professor & Head",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Computer Science and Engineering",
        "experience": "22 years",
        "email": "jaleshkumar@jnnce.ac.in",
        "patents": [],
        "publications": 7,
        "selectedPublications": [
          "A Novel Approach for Enhancing the Security of Image Contents",
          "Securing the regions comprising information in a document image with novel key selection technique â€“ a parallel approach",
          "Efficient Method to Secure the Information Contents of an Image â€“ A Parallel Approach"
        ],
        "bio": "JALESH KUMAR is a faculty member in the Computer Science and Engineering department with experience in academics and research.",
        "photoInitials": "JK",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. RAVINDRA S",
        "designation": "Associate Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Computer Science and Engineering",
        "experience": "18 years",
        "email": "ravindra@jnnce.ac.in",
        "patents": [],
        "publications": 8,
        "selectedPublications": [
          "Time of Arrival based Localization in Wireless Sensor Networks: A Linear Approach",
          "Time of Arrival based Localization in Wireless Sensor Networks: A Non Linear Approach",
          "Target Localization in Wireless Sensor Networks Based on Received Signal Strength"
        ],
        "bio": "RAVINDRA S is a faculty member in the Computer Science and Engineering department with experience in academics and research.",
        "photoInitials": "RS",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. SANKHYA N NAYAK",
        "designation": "Associate Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Computer Science and Engineering",
        "experience": "20 years",
        "email": "sankhya.nayak@jnnce.ac.in",
        "patents": [],
        "publications": 15,
        "selectedPublications": [
          "ROAD POTHOLE DETECTION USING YOLOv2 MODEL",
          "A REVIEW ON ROAD POTHOLE DETECTION MECHANISMS",
          "INFORMATION SECURITY WITH SCAN PATTERNS AND CHAOTIC CRYPTOGRAPHY"
        ],
        "bio": "SANKHYA N NAYAK is a faculty member in the Computer Science and Engineering department with experience in academics and research.",
        "photoInitials": "SNK",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. BENAKAPPA S M",
        "designation": "Associate Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Computer Science and Engineering",
        "experience": "14 years",
        "email": "benakappasm@jnnce.ac.in",
        "patents": [],
        "publications": 12,
        "selectedPublications": [
          "Mobility Based Energy Aware Multipath Disjoint Routing Protocol for Mobile Ad Hoc Networks (MEAMDRP)",
          "An Efficient Route Selection in MANETs by Intelligent AODV",
          "A Survey: Routing protocols in MANETs"
        ],
        "bio": "BENAKAPPA S M is a faculty member in the Computer Science and Engineering department with experience in academics and research.",
        "photoInitials": "BSM",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. GANAVI M",
        "designation": "Associate Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Computer Science and Engineering",
        "experience": "21 years",
        "email": "gaanavi4@jnnce.ac.in",
        "patents": [
          "BREATHING-BASED SLEEP DETECTION DEVICE FOR AUTOMATED LIGHT CONTROL"
        ],
        "publications": 12,
        "selectedPublications": [
          "AN EFFICIENT CRYPTOGRAPHIC TECHNIQUE USING RC4 AND PIXEL SHUFFLING ALGORITHMS",
          "A Novel Technique to Secure Cloud Data using Steganography",
          "A SECURE COLOR IMAGE STEGANOGRAPHY USING RSA ALGORITHM"
        ],
        "bio": "GANAVI M is a faculty member in the Computer Science and Engineering department with experience in academics and research.",
        "photoInitials": "GM",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. VEDANANDA D E",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Computer Science and Engineering",
        "experience": "21 years",
        "email": "vedanandade@jnnce.ac.in",
        "patents": [],
        "publications": 4,
        "selectedPublications": [
          "Survey on Forecasting of E-Commerce Product Rating",
          "A Survey on Intrusion Detection System using Machine Learning Techniques",
          "Institute Enquiry using Chatbot"
        ],
        "bio": "VEDANANDA D E is a faculty member in the Computer Science and Engineering department with experience in academics and research.",
        "photoInitials": "VDE",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. SREEDEVI S",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Computer Science and Engineering",
        "experience": "20 years",
        "email": "sreedevis@jnnce.ac.in",
        "patents": [],
        "publications": 6,
        "selectedPublications": [
          "Detection and Classification of Plant Leaf Disease Using Image Processing",
          "AUTOMATED FARE CALCULATION INMETRO TRAIN USING FACE DETECTION AND RECOGNITION",
          "HEART DISEASE PREDICTION USINF MACHINE LEARNING"
        ],
        "bio": "SREEDEVI S is a faculty member in the Computer Science and Engineering department with experience in academics and research.",
        "photoInitials": "SS",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. THASEEN BHASHITH",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Computer Science and Engineering",
        "experience": "20 years",
        "email": "thaseen194@jnnce.ac.in",
        "patents": [],
        "publications": 3,
        "selectedPublications": [
          "RICE QUALITY ANALYSIS BASED ON PHYSICAL ATTRIBUTES USINGIMAGE PROCESSING",
          "MACHINE LEARNING BASED TRAVEL RECOMMENDATION WEB APPLICATION",
          "Deep Learning Approach for Intrusion Detection System"
        ],
        "bio": "THASEEN BHASHITH is a faculty member in the Computer Science and Engineering department with experience in academics and research.",
        "photoInitials": "TB",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. HIRIYANNA G S",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Computer Science and Engineering",
        "experience": "20 years",
        "email": "hiriyanna@jnnce.ac.in",
        "patents": [],
        "publications": 5,
        "selectedPublications": [
          "SECURITY AND COPYRIGHT PROTECTION TECHNIQUE FOR DIGITAL IMAGE",
          "IMAGE STEGANOGRAPHY IN YUV COLOR SPACE",
          "SURVEY ON BIOMETRIC FINGERPRINT RECOGNITION"
        ],
        "bio": "HIRIYANNA G S is a faculty member in the Computer Science and Engineering department with experience in academics and research.",
        "photoInitials": "HG",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. MANOHAR NELLI V",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Computer Science and Engineering",
        "experience": "19 years",
        "email": "manohar@jnnce.ac.in",
        "patents": [
          "Deep Learning and IoT framework for Human movement analysis using smart surveillance cameras"
        ],
        "publications": 7,
        "selectedPublications": [
          "AGRICULTURE CROP SECURITY USING IoT",
          "SMART MEDICINE DISPENSER FOR  ELDERLY AND VISUALLY IMPAIRE",
          "A Survey on Different IP Address Lookup  Approaches"
        ],
        "bio": "MANOHAR NELLI V is a faculty member in the Computer Science and Engineering department with experience in academics and research.",
        "photoInitials": "MN",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. SATHYANARAYAN S",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Computer Science and Engineering",
        "experience": "19 years",
        "email": "sathyacse@jnnce.ac.in",
        "patents": [],
        "publications": 3,
        "selectedPublications": [
          "Maximizing Network Lifetime Using Routine Algorithm for Wireless Sensor Network",
          "Medical data classification for prediction of early chronic kidney disease",
          "BIG MART SALES PREDICTION USING MACHINE LEARNING"
        ],
        "bio": "SATHYANARAYAN S is a faculty member in the Computer Science and Engineering department with experience in academics and research.",
        "photoInitials": "SS",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. SOWMYA D",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Computer Science and Engineering",
        "experience": "19 years",
        "email": "sowmyad84@jnnce.ac.in",
        "patents": [],
        "publications": 4,
        "selectedPublications": [
          "Design of Word Based Stream Cipher using Tree Parity Machine",
          "A COLOR IMAGE STEGANOGRAPHY USING 7 TH BIT PIXEL INDICATOR & GALOIS  FIELD ARITHMETIC",
          "ANALYZING WINE TYPES AND QUALITY USING MACHINE LEARNING TECHNIQUES"
        ],
        "bio": "SOWMYA D is a faculty member in the Computer Science and Engineering department with experience in academics and research.",
        "photoInitials": "SD",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. NARENDRA KUMAR S",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Computer Science and Engineering",
        "experience": "18 years",
        "email": "narendra@jnnce.ac.in",
        "patents": [
          "Identifi cation of various pillars architectural styles & their time-line (era) of ancient Indiantemples through computer vision techniques."
        ],
        "publications": 6,
        "selectedPublications": [
          "Comparative Study on Temple Structural Element Segmentation using Different Segmentation Techniques",
          "Ancient Temple Pillar Segmentation Using a Fully Convolutional Neural Network Model",
          "An Optimized Model for the Segmentation of the Ancient Temple Vimanas using FCN Network"
        ],
        "bio": "NARENDRA KUMAR S is a faculty member in the Computer Science and Engineering department with experience in academics and research.",
        "photoInitials": "NK",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. SANDEEP B",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Computer Science and Engineering",
        "experience": "16 years",
        "email": "sandeepb@jnnce.ac.in",
        "patents": [],
        "publications": 3,
        "selectedPublications": [
          "Blue-Book Marks Recognition System",
          "Rainfall Prediction using Machine Learning Techniques and an analysis of the outcomes of these Techniques",
          "Medical data classification for prediction of early  chronic kidney disease"
        ],
        "bio": "SANDEEP B is a faculty member in the Computer Science and Engineering department with experience in academics and research.",
        "photoInitials": "SB",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. CHAKRAPANI D S",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Computer Science and Engineering",
        "experience": "16 years",
        "email": "chakrads@jnnce.ac.in",
        "patents": [],
        "publications": 2,
        "selectedPublications": [
          "Chronic Disease Prediction using Machine Learning",
          "MUSIC RECOMMENDATION BASED ON FACIAL EMOTION RECOGNITION"
        ],
        "bio": "CHAKRAPANI D S is a faculty member in the Computer Science and Engineering department with experience in academics and research.",
        "photoInitials": "CD",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. AYESHA SIDDIQA",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Computer Science and Engineering",
        "experience": "16 years",
        "email": "ayeshasiddiqa@jnnce.ac.in",
        "patents": [],
        "publications": 2,
        "selectedPublications": [
          "A Recognition System for Handwritten Digits  Using CNN",
          "Web Based Intrusion Detection System for SQLIA"
        ],
        "bio": "AYESHA SIDDIQA is a faculty member in the Computer Science and Engineering department with experience in academics and research.",
        "photoInitials": "AS",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. PUSHPA R N",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Computer Science and Engineering",
        "experience": "15 years",
        "email": "pushpa@jnnce.ac.in",
        "patents": [],
        "publications": 3,
        "selectedPublications": [
          "NOVEL REVIEW ON VARIOUS RESOLUTIONS OF SATELITE IMAGES",
          "Prime Methodological Insights for Securing Devices Running Within an Internet - of - Things Environment",
          "Permission-level risk profiling and anomaly detection in IoT using machine learning"
        ],
        "bio": "PUSHPA R N is a faculty member in the Computer Science and Engineering department with experience in academics and research.",
        "photoInitials": "PR",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. NANDISH M",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Computer Science and Engineering",
        "experience": "10 years",
        "email": "nandish.m@jnnce.ac.in",
        "patents": [
          "A Graphical Approach for Binary Code Similarity Detection Using Graph Convolutional Neural Networks"
        ],
        "publications": 10,
        "selectedPublications": [
          "Combination of DNA Sequence in Scan Patterns and Dyadic Permutation in Securing the Image Contents",
          "An Image Encryption Process Based on Multiple Chaotic Maps",
          "Protecting Privacy in Surveillance Systems via Selective Video Encryption"
        ],
        "bio": "NANDISH M is a faculty member in the Computer Science and Engineering department with experience in academics and research.",
        "photoInitials": "NM",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. MOHAN H G",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Computer Science and Engineering",
        "experience": "10 years",
        "email": "mohan@jnnce.ac.in",
        "patents": [
          "Dynamic Community-based Graphical Approach for Botnet Detection Using Anomalies"
        ],
        "publications": 12,
        "selectedPublications": [
          "A Survey on Semantic Based Automatic Web Service Compositions",
          "Semantic Based Automatic Web Service Composition",
          "Automatic Composition of Machine Learning Models as Web Services across Data Sets"
        ],
        "bio": "MOHAN H G is a faculty member in the Computer Science and Engineering department with experience in academics and research.",
        "photoInitials": "MH",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. RADHIKA S N",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Computer Science and Engineering",
        "experience": "3 years",
        "email": "radhikasn@jnnce.ac.in",
        "patents": [],
        "publications": 1,
        "selectedPublications": [
          "\"BEYOND THE BLACKBOARD:CTI AS A CATALYST FOR EDUCATIONAL INNOVATION\""
        ],
        "bio": "RADHIKA S N is a faculty member in the Computer Science and Engineering department with experience in academics and research.",
        "photoInitials": "RS",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. RADHIKA S K",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Computer Science and Engineering",
        "experience": "3 years",
        "email": "radhikask@jnnce.ac.in",
        "patents": [],
        "publications": 2,
        "selectedPublications": [
          "A Survey on different Machine Learning algorithms that are compatible with CSE-CIC IDS 2018 Dataset",
          "A Survey on Deep Learning-Based Intrusion Detection Systems with SHAP Explainability: Techniques, Challenges, and Future Directions"
        ],
        "bio": "RADHIKA S K is a faculty member in the Computer Science and Engineering department with experience in academics and research.",
        "photoInitials": "RS",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. RASHMI V",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Computer Science and Engineering",
        "experience": "3 years",
        "email": "rashmiv@jnnce.ac.in",
        "patents": [],
        "publications": 2,
        "selectedPublications": [
          "A Survey on Early Detection and Classification of Alzheimerâ€™s Disease Using Machine Learning and Deep Learning Techniques",
          "A Survey on Generative Models for Image Synthesis: GANs, Diffusion Models, and Beyond"
        ],
        "bio": "RASHMI V is a faculty member in the Computer Science and Engineering department with experience in academics and research.",
        "photoInitials": "RV",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. DEVARAJ F V",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Computer Science and Engineering",
        "experience": "3 years",
        "email": "devaraj@jnnce.ac.in",
        "patents": [],
        "publications": 0,
        "selectedPublications": [],
        "bio": "DEVARAJ F V is a faculty member in the Computer Science and Engineering department with experience in academics and research.",
        "photoInitials": "DF",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. ASHWINI S P",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Computer Science and Engineering",
        "experience": "3 years",
        "email": "ashwinisp@jnnce.ac.in",
        "patents": [],
        "publications": 1,
        "selectedPublications": [
          "Tomato Leaf Disease Recognition and Classification: A Review of Deep  Learning Approaches, Challenges, and Future Directions"
        ],
        "bio": "ASHWINI S P is a faculty member in the Computer Science and Engineering department with experience in academics and research.",
        "photoInitials": "AS",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. AKSHAY NAYAK B S",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Computer Science and Engineering",
        "experience": "2 years",
        "email": "akshaynyk@jnnce.ac.in",
        "patents": [],
        "publications": 0,
        "selectedPublications": [],
        "bio": "AKSHAY NAYAK B S is a faculty member in the Computer Science and Engineering department with experience in academics and research.",
        "photoInitials": "AN",
        "photoColor": "#7C3AED"
      }
    ]
  },
  {
    "code": "ISE",
    "slug": "ise",
    "name": "Information Science and Engineering",
    "link": "/departments/ise",
    "intake": 60,
    "duration": "4 Years",
    "overview": "Information Science and Engineering department offers quality technical education and research opportunities.",
    "subjects": [],
    "labs": [],
    "careers": [],
    "eligibility": "10+2 with PCM",
    "affiliation": "VTU, Belagavi",
    "faculty": [
      {
        "name": "Dr. SANJEEV KUNTE R",
        "designation": "Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Information Science and Engineering",
        "experience": "28 years",
        "email": "sanjeevkunte@jnnce.ac.in",
        "patents": [],
        "publications": 6,
        "selectedPublications": [
          "Survey on Cloud Data Integrity: Issues and Current  Solutions",
          "Performance Comparison of AES, Blowfish and Sattoloâ€™s Techniques for Video Encryption",
          "A Robust Reversible Data Hiding Framework for Video Steganography Applications"
        ],
        "bio": "SANJEEV KUNTE R is a faculty member in the Information Science and Engineering department with experience in academics and research.",
        "photoInitials": "SK",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. JYOTHI K",
        "designation": "Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Information Science and Engineering",
        "experience": "22 years",
        "email": "jyothik@jnnce.ac.in",
        "patents": [],
        "publications": 5,
        "selectedPublications": [
          "A novel audio steganography technique integrated with a symmetric cryptography: a protection mechanism for secure data outsourcing",
          "Fusion of Intensity Image and Stereo Depth Map for Face Recognition based On Curvelet Transform",
          "Multi modal Face Recognition Using Block Based Curvelet Features"
        ],
        "bio": "JYOTHI K is a faculty member in the Information Science and Engineering department with experience in academics and research.",
        "photoInitials": "JK",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. RASHMI R",
        "designation": "Associate Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Information Science and Engineering",
        "experience": "26 years",
        "email": "rashmiinduraj@jnnce.ac.in",
        "patents": [],
        "publications": 2,
        "selectedPublications": [
          "Forecasting on malaria, dengue and alzheimer disease using machine learning  algorithm",
          "detection of food quality using machine learning"
        ],
        "bio": "RASHMI R is a faculty member in the Information Science and Engineering department with experience in academics and research.",
        "photoInitials": "RR",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. RAGHAVENDRA R J",
        "designation": "Associate Professor & Head",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Information Science and Engineering",
        "experience": "28 years",
        "email": "raghavendra.r.j@jnnce.ac.in",
        "patents": [],
        "publications": 8,
        "selectedPublications": [
          "A Novel Feature Descriptor for Face Anti-Spoofing Using Texture Based Method",
          "Face Spoofing Detection Using Machine Learning Approach",
          "DOG-ADTCP: A new feature descriptor for protection of face identification  system"
        ],
        "bio": "RAGHAVENDRA R J is a faculty member in the Information Science and Engineering department with experience in academics and research.",
        "photoInitials": "RR",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. PAVAN KUMAR M P",
        "designation": "Associate Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Information Science and Engineering",
        "experience": "16 years",
        "email": "pavankumarmp@jnnce.ac.in",
        "patents": [],
        "publications": 16,
        "selectedPublications": [
          "Structure-preserving NPR framework for image abstraction and stylization",
          "A comprehensive survey on non-photorealistic rendering and benchmark developments for image abstraction and stylization",
          "Structure Preserving Image Abstraction And Artistic Stylization From Complex Background And Low Illuminated Images"
        ],
        "bio": "PAVAN KUMAR M P is a faculty member in the Information Science and Engineering department with experience in academics and research.",
        "photoInitials": "PK",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. SAMARA MUBEEN",
        "designation": "Associate Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Information Science and Engineering",
        "experience": "28 years",
        "email": "samaramubeen@jnnce.ac.in",
        "patents": [
          "SENTIMENTAL ANALYSIS OF MULTIPLE PRODUCTS BASED ON DEMOGRAPHIC ONLINE CUSTOMER REVIEWS USING MULTIPLE CLASSIFIERS",
          "\"Performance Analysis Of Identified E-stake Holders In B2b E-commerce Using Game Theory And Machine Learning\""
        ],
        "publications": 11,
        "selectedPublications": [
          "Sentiment Analysis on Large Scale Amazon Product Reviews",
          "Stabilizing the network in presence of agents using flow graph and Shapely value in B2B E-commerce",
          "Isolating Selfish Nodes and Analyzing Performance of Ad-Hoc Network Using Perfect Information Game Theory"
        ],
        "bio": "SAMARA MUBEEN is a faculty member in the Information Science and Engineering department with experience in academics and research.",
        "photoInitials": "SM",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. VISHWAS C G M",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Information Science and Engineering",
        "experience": "23 years",
        "email": "vishawascgm@jnnce.ac.in",
        "patents": [],
        "publications": 3,
        "selectedPublications": [
          "Henon Map based Chaotic Cryptosystem",
          "Encryption Using Binary Key Sequences in Chaotic Cryptosystem",
          "Chaotic Map based Random Binary Key Sequence Generation"
        ],
        "bio": "VISHWAS C G M is a faculty member in the Information Science and Engineering department with experience in academics and research.",
        "photoInitials": "VC",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. SOWMYA G V",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Information Science and Engineering",
        "experience": "20 years",
        "email": "gvsowmya@jnnce.ac.in",
        "patents": [],
        "publications": 9,
        "selectedPublications": [
          "Message Security using Armstrong Numbers and Authentication using Colors",
          "MRRP: Multihop Reliable Routing Protocol for Wireless Sensor Network",
          "Secure Password based Security System for Banks"
        ],
        "bio": "SOWMYA G V is a faculty member in the Information Science and Engineering department with experience in academics and research.",
        "photoInitials": "SG",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. SUDEEP MANOHAR",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Information Science and Engineering",
        "experience": "20 years",
        "email": "sudeepmanohar@jnnce.ac.in",
        "patents": [],
        "publications": 0,
        "selectedPublications": [],
        "bio": "SUDEEP MANOHAR is a faculty member in the Information Science and Engineering department with experience in academics and research.",
        "photoInitials": "SM",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. SAYED AFTAB AHAMED",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Information Science and Engineering",
        "experience": "18 years",
        "email": "AFIS037@jnnce.ac.in",
        "patents": [],
        "publications": 5,
        "selectedPublications": [
          "Face Recognition using local texture feature",
          "Analyzing of Node Behavior in Ad hoc Network Using Finds Algorithm a concept of Machine Learning",
          "A Review: Plant Disease Detection Using Image Processing And Deep Learning"
        ],
        "bio": "SAYED AFTAB AHAMED is a faculty member in the Information Science and Engineering department with experience in academics and research.",
        "photoInitials": "SA",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. SATHYANARAYAN K B",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Information Science and Engineering",
        "experience": "18 years",
        "email": "sathyanarayanakb@jnnce.ac.in",
        "patents": [],
        "publications": 2,
        "selectedPublications": [
          "MACHINE LEARNING APPROACH FOR FAKE NEWS DETECTION IN TWITTER USING VADER ALGORITHM.",
          "Student Exam Result Prediction and Analysis"
        ],
        "bio": "SATHYANARAYAN K B is a faculty member in the Information Science and Engineering department with experience in academics and research.",
        "photoInitials": "SK",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. AKSHAY M J",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Information Science and Engineering",
        "experience": "17 years",
        "email": "akshaymj@jnnce.ac.in",
        "patents": [],
        "publications": 8,
        "selectedPublications": [
          "Drip Irrigation Based on Soil Moisture using IOT",
          "Smart Waste Monitoring System Using IoT",
          "A CNN Based Approach for Wall Crack Detection"
        ],
        "bio": "AKSHAY M J is a faculty member in the Information Science and Engineering department with experience in academics and research.",
        "photoInitials": "AM",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. PAVAN M",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Information Science and Engineering",
        "experience": "17 years",
        "email": "pmadhvesh@jnnce.ac.in",
        "patents": [],
        "publications": 5,
        "selectedPublications": [
          "Survey On Feature Extraction Approach for Human Action Recognition in Still Images and Videos",
          "Real Time Attendance Marking System Using Face Recognition Approach",
          "Virtual Mouse Using Hand Gesture Recognition"
        ],
        "bio": "PAVAN M is a faculty member in the Information Science and Engineering department with experience in academics and research.",
        "photoInitials": "PM",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. SHARATH KUMAR S R",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Information Science and Engineering",
        "experience": "16 years",
        "email": "sharathkumarsr@jnnce.ac.in",
        "patents": [],
        "publications": 2,
        "selectedPublications": [
          "Algorithm to Predict Heart Disease using Machine Learning",
          "Real-Time Driver Drowsiness Detection System Using Machine Learning"
        ],
        "bio": "SHARATH KUMAR S R is a faculty member in the Information Science and Engineering department with experience in academics and research.",
        "photoInitials": "SK",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. CHETHAN G S",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Information Science and Engineering",
        "experience": "16 years",
        "email": "chethan.gs@jnnce.ac.in",
        "patents": [],
        "publications": 7,
        "selectedPublications": [
          "PREDICTIVE ANALYSIS OF STUDENT CARRIER",
          "An energy efficient routing approach for iot networks using 6lowpan",
          "Analytical Framework for Binarized Response for Enhancing Knowledge Delivery System"
        ],
        "bio": "CHETHAN G S is a faculty member in the Information Science and Engineering department with experience in academics and research.",
        "photoInitials": "CG",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. SUCHETHANA H C",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Information Science and Engineering",
        "experience": "16 years",
        "email": "suchethanahc@jnnce.ac.in",
        "patents": [
          "A Novel Method for Identifying Hidden Patterns in Large Data Sets Using Deep Learning Algorithms"
        ],
        "publications": 4,
        "selectedPublications": [
          "Virtual talk assistance for dumb and deaf",
          "Facial emotion detection using neural networks",
          "Antimicrobial Resistance in Foodborne Pathogens"
        ],
        "bio": "SUCHETHANA H C is a faculty member in the Information Science and Engineering department with experience in academics and research.",
        "photoInitials": "SH",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. PRATHIMA L",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Information Science and Engineering",
        "experience": "16 years",
        "email": "lprathima5787@jnnce.ac.in",
        "patents": [],
        "publications": 6,
        "selectedPublications": [
          "Air Quality Monitoring System Design and Analysis Using IoT",
          "â€œSeverity Prediction of Accident in Traffic using  Deep Learning Based on CNN Networkâ€",
          "CLASSIFICATION OF WBC USING CONVOLUTION NEURAL NETWORKS"
        ],
        "bio": "PRATHIMA L is a faculty member in the Information Science and Engineering department with experience in academics and research.",
        "photoInitials": "PL",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. DEEPA V B",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Information Science and Engineering",
        "experience": "16 years",
        "email": "jnndvb@jnnce.ac.in",
        "patents": [
          "AUTOMATED GAS STOVE USING CLOUD AND IOT INTEGRATED SYSTEM"
        ],
        "publications": 7,
        "selectedPublications": [
          "Computation of Shortest path using Network Simplex Algorithm in Wireless                Multicast   Network",
          "Computation of Maximum Flow Using Preflow  Push Algorithm in PIM-DM Wireless Multicast",
          "Adapting TFMCC Protocol in PIM-DM for avoiding Congestion Control  in Wired Multicast"
        ],
        "bio": "DEEPA V B is a faculty member in the Information Science and Engineering department with experience in academics and research.",
        "photoInitials": "DV",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. GIRISH MANTHA",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Information Science and Engineering",
        "experience": "16 years",
        "email": "girish.mantha@jnnce.ac.in",
        "patents": [],
        "publications": 5,
        "selectedPublications": [
          "Exploiting Friendship Relations for Efficient  Routing in Mobile Social Networks",
          "Preserving Network and Adaptive Content Generating Method for Image Based Virtual Try-On Clothing System",
          "\"Algorithm To Predict Heart Disease Using Machine Learning\""
        ],
        "bio": "GIRISH MANTHA is a faculty member in the Information Science and Engineering department with experience in academics and research.",
        "photoInitials": "GM",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. ARUNKUMAR P",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Information Science and Engineering",
        "experience": "14 years",
        "email": "arunkumarp@jnnce.ac.in",
        "patents": [],
        "publications": 3,
        "selectedPublications": [
          "Comparison of different sparse dictionaries for compressive  sampling",
          "\"Literature Survey on Big-Data Analytics and Tools\"",
          "Butterfly Detection and Classification based on YOLO Algorithm"
        ],
        "bio": "ARUNKUMAR P is a faculty member in the Information Science and Engineering department with experience in academics and research.",
        "photoInitials": "AP",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. MANASA S M",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Information Science and Engineering",
        "experience": "3 years",
        "email": "manasasm@jnnce.ac.in",
        "patents": [],
        "publications": 1,
        "selectedPublications": [
          "Selective Encryption of Video Streams using Chaotic Map-Based Algorithms"
        ],
        "bio": "MANASA S M is a faculty member in the Information Science and Engineering department with experience in academics and research.",
        "photoInitials": "MS",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. THARA K L",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Information Science and Engineering",
        "experience": "3 years",
        "email": "thara@jnnce.ac.in",
        "patents": [],
        "publications": 4,
        "selectedPublications": [
          "Deep Learning Techniques for Real-Time Object Detection and Classification",
          "Evaluating Mental Well-being in Youth: Identification and Diagnostic Tools",
          "Deep Learning-based Pneumonia Detection"
        ],
        "bio": "THARA K L is a faculty member in the Information Science and Engineering department with experience in academics and research.",
        "photoInitials": "TK",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. MANISHA K M",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Information Science and Engineering",
        "experience": "2 years",
        "email": "manishakm@jnnce.ac.in",
        "patents": [],
        "publications": 2,
        "selectedPublications": [
          "Optimizing neural radiance field: a comprehensive review of the  impact of different optimizers on neural radiance fields",
          "A COMPREHENSIVE REVIEW ON PARKINSONâ€™S DISEASE   DETECTION TECHNIQUES"
        ],
        "bio": "MANISHA K M is a faculty member in the Information Science and Engineering department with experience in academics and research.",
        "photoInitials": "MK",
        "photoColor": "#7C3AED"
      },
      {
        "name": " VISHRUTHA RANI S N",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Information Science and Engineering",
        "experience": "1 years",
        "email": "vishrutha@jnnce.ac.in",
        "patents": [],
        "publications": 0,
        "selectedPublications": [],
        "bio": "VISHRUTHA RANI S N is a faculty member in the Information Science and Engineering department with experience in academics and research.",
        "photoInitials": "VR",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. ANUSHA PRIMA FERNANDES ",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Information Science and Engineering",
        "experience": "0 years",
        "email": "anushafernandes@jnnce.ac.in",
        "patents": [],
        "publications": 0,
        "selectedPublications": [],
        "bio": "ANUSHA PRIMA FERNANDES  is a faculty member in the Information Science and Engineering department with experience in academics and research.",
        "photoInitials": "AP",
        "photoColor": "#7C3AED"
      }
    ]
  },
  {
    "code": "ECE",
    "slug": "ece",
    "name": "Electronics and Communication Engineering",
    "link": "/departments/ece",
    "intake": 60,
    "duration": "4 Years",
    "overview": "Electronics and Communication Engineering department offers quality technical education and research opportunities.",
    "subjects": [],
    "labs": [],
    "careers": [],
    "eligibility": "10+2 with PCM",
    "affiliation": "VTU, Belagavi",
    "faculty": [
      {
        "name": "Dr. SATHYANARAYANA S V",
        "designation": "Professor & Head",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electronics and Communication Engineering",
        "experience": "28 years",
        "email": "svs@jnnce.ac.in",
        "patents": [],
        "publications": 2,
        "selectedPublications": [
          "Elliptic curve based collaborative group key management for cloud data sharing in ciphertext policy attribute based encryption",
          "Comparative Analysis of Key Management Methods for Online Data Sharing in Cloud"
        ],
        "bio": "SATHYANARAYANA S V is a faculty member in the Electronics and Communication Engineering department with experience in academics and research.",
        "photoInitials": "SS",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. SHETTY PRAMOD KUMAR",
        "designation": "Associate Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electronics and Communication Engineering",
        "experience": "7 years",
        "email": "pramodkumars@jnnce.ac.in",
        "patents": [
          "CBT-BASED DEVICE FOR ANXIETY AND AGGRESSION MANAGEMENT IN EPILEPSY TREATMENT"
        ],
        "publications": 23,
        "selectedPublications": [
          "Threshold-Based New Segmentation Model to Separate the Liver from CT Scan Images",
          "Volumetric Lung Nodule Segmentation in Thoracic CT Scan using Freehand Sketch",
          "ACCURATE LIVER BORDER IDENTIFICATION MODEL IN CT SCAN IMAGES"
        ],
        "bio": "SHETTY PRAMOD KUMAR is a faculty member in the Electronics and Communication Engineering department with experience in academics and research.",
        "photoInitials": "SP",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. SHARATH S M",
        "designation": "Associate Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electronics and Communication Engineering",
        "experience": "18 years",
        "email": "sharathsm@jnnce.ac.in",
        "patents": [],
        "publications": 3,
        "selectedPublications": [
          "Insights on Critical energy efficiency approaches in IoT application",
          "CROSS LAYER APPROACH FOR ENERGY OPTIMIZATION IN IOT NETWORKS",
          "Integration of Heuristics based Energy optimal clustering topology, Routing and Transmission scheduling for Enhancing lifetime in IoT networksâ€, published in SN COMPUT. 4, 367 (2023)"
        ],
        "bio": "SHARATH S M is a faculty member in the Electronics and Communication Engineering department with experience in academics and research.",
        "photoInitials": "SS",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. SHEELA S",
        "designation": "Associate Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electronics and Communication Engineering",
        "experience": "14 years",
        "email": "sheela_s@jnnce.ac.in",
        "patents": [],
        "publications": 4,
        "selectedPublications": [
          "Application of Chaos Theory in Data Security - A Survey",
          "Text Extractions from Natural Scenes by Various Methods",
          "Generation of Chaotic Random Binary Sequences for Cryptographic Applications"
        ],
        "bio": "SHEELA S is a faculty member in the Electronics and Communication Engineering department with experience in academics and research.",
        "photoInitials": "SS",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. SUNIL M D",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electronics and Communication Engineering",
        "experience": "22 years",
        "email": "mdsunil.dev@jnnce.ac.in",
        "patents": [],
        "publications": 4,
        "selectedPublications": [
          "Performance Analysis Of OFDM System Using Different Types Of Modulation Techniques Under Different Fading Channels And Reducing PAPR Of An OFDM System By Clipping Method, Shilpa H. R., Sunil M D,JNNCE Journal of Engineering & Management, Vol. 2: No. 1 January - June 2018",
          "â€¢\tAn Enhanced Multi-hop Routing Protocol for Wireless Body Area Networks",
          "Covid-19 Face Mask Detection using Support Vector Machine"
        ],
        "bio": "SUNIL M D is a faculty member in the Electronics and Communication Engineering department with experience in academics and research.",
        "photoInitials": "SM",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. UJWALA B S",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electronics and Communication Engineering",
        "experience": "21 years",
        "email": "ujwalaravi2004@jnnce.ac.in",
        "patents": [],
        "publications": 3,
        "selectedPublications": [
          "A REVIEW PAPER ON OCR USING CONVOLUTIONAL NEURAL NETWORKS",
          "A novel approach towards implementation of OCR using LSTM and adaptive classifier",
          "Kannada handwritten numeral recognition through deep learning and optimized hyperparameter tuning"
        ],
        "bio": "UJWALA B S is a faculty member in the Electronics and Communication Engineering department with experience in academics and research.",
        "photoInitials": "UB",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. NALINA S B",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electronics and Communication Engineering",
        "experience": "20 years",
        "email": "nalinasb@jnnce.ac.in",
        "patents": [],
        "publications": 4,
        "selectedPublications": [
          "An Approach to Energy Efficient Routing Protocol for Mobile Ad-Hoc Networks",
          "Energy Efficient Multipath Routing Protocol For Mobile Ad-Hoc Network Using Fitness Function",
          "â€œComparison of K-Means and KNN Algorithms in Data Accumulation and Clustering in WSNâ€"
        ],
        "bio": "NALINA S B is a faculty member in the Electronics and Communication Engineering department with experience in academics and research.",
        "photoInitials": "NS",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. AJAY BETUR P",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electronics and Communication Engineering",
        "experience": "20 years",
        "email": "ajaybetur@jnnce.ac.in",
        "patents": [],
        "publications": 5,
        "selectedPublications": [
          "Edge Preserving Denoising Techniques Using DWT and NHA Methods",
          "(n,K,p) Gray Code for Image Processing:- Decomposition,Encryption,Denoising",
          "Implementation of DDBTC algorithm for encoding and decoding the image"
        ],
        "bio": "AJAY BETUR P is a faculty member in the Electronics and Communication Engineering department with experience in academics and research.",
        "photoInitials": "AB",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. ABHIJITH N",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electronics and Communication Engineering",
        "experience": "17 years",
        "email": "abhijithn@jnnce.ac.in",
        "patents": [],
        "publications": 1,
        "selectedPublications": [
          "Crop Prediction using NPK sensors and Machine Learning for Agriculture"
        ],
        "bio": "ABHIJITH N is a faculty member in the Electronics and Communication Engineering department with experience in academics and research.",
        "photoInitials": "AN",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. DARSHAN K V",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electronics and Communication Engineering",
        "experience": "17 years",
        "email": "darshankv@jnnce.ac.in",
        "patents": [],
        "publications": 0,
        "selectedPublications": [],
        "bio": "DARSHAN K V is a faculty member in the Electronics and Communication Engineering department with experience in academics and research.",
        "photoInitials": "DK",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. ANIL KUMAR J",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electronics and Communication Engineering",
        "experience": "15 years",
        "email": "anilkumarj@jnnce.ac.in",
        "patents": [],
        "publications": 6,
        "selectedPublications": [
          "Smart Diary using Raspberry Pi and Cloud Application",
          "Design of CNC Machine Based Laser Engraver with Arduino UNO",
          "Automatic License Plate Recognition Using Image Processing"
        ],
        "bio": "ANIL KUMAR J is a faculty member in the Electronics and Communication Engineering department with experience in academics and research.",
        "photoInitials": "AK",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. ROOPA B S",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electronics and Communication Engineering",
        "experience": "14 years",
        "email": "roopabs@jnnce.ac.in",
        "patents": [],
        "publications": 6,
        "selectedPublications": [
          "End to end delay distribution analysis and interference aware high throughput for Wireless Mesh Networks",
          "Review on 3D Point Cloud",
          "Brief Study on Convolutional Neural Networks"
        ],
        "bio": "ROOPA B S is a faculty member in the Electronics and Communication Engineering department with experience in academics and research.",
        "photoInitials": "RB",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. PRADEEPA S C",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electronics and Communication Engineering",
        "experience": "14 years",
        "email": "pradeepasc@jnnce.ac.in",
        "patents": [],
        "publications": 2,
        "selectedPublications": [
          "\"Ball Balancing PID System using Image Processing\"",
          "Design and VLSI Implementation of Vedic Multiplier using 45nm Technology"
        ],
        "bio": "PRADEEPA S C is a faculty member in the Electronics and Communication Engineering department with experience in academics and research.",
        "photoInitials": "PS",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. HARISH T S",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electronics and Communication Engineering",
        "experience": "13 years",
        "email": "tshpmt111@jnnce.ac.in",
        "patents": [],
        "publications": 1,
        "selectedPublications": [
          "A Novel technique to increase user capacity for mobile communication based on smart antenna"
        ],
        "bio": "HARISH T S is a faculty member in the Electronics and Communication Engineering department with experience in academics and research.",
        "photoInitials": "HT",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. PREMA K N",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electronics and Communication Engineering",
        "experience": "13 years",
        "email": "premakn@jnnce.ac.in",
        "patents": [],
        "publications": 7,
        "selectedPublications": [
          "EMG SIGNAL DE-NOISING USING INDEPENDENT COMPONENT ANALYSIS ALGORITHM AND FILTERS",
          "Virtual Reality: A survey",
          "Routing Protocols for Wireless Mesh Networks: A Survey"
        ],
        "bio": "PREMA K N is a faculty member in the Electronics and Communication Engineering department with experience in academics and research.",
        "photoInitials": "PK",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. SMITHA S M",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electronics and Communication Engineering",
        "experience": "13 years",
        "email": "smithasm@jnnce.ac.in",
        "patents": [],
        "publications": 1,
        "selectedPublications": [
          "Application of Speech Processing for Pathological Voice Detection and Analysis"
        ],
        "bio": "SMITHA S M is a faculty member in the Electronics and Communication Engineering department with experience in academics and research.",
        "photoInitials": "SS",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. SUMATHI K",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electronics and Communication Engineering",
        "experience": "13 years",
        "email": "sumathik@jnnce.ac.in",
        "patents": [],
        "publications": 2,
        "selectedPublications": [
          "A Novel Approach Towards Implementation Of Optical Character Recognition Using LSTM And Adaptive Classifier",
          "Optimizing Multimodal Scene Recognition through relevant Feature Selection approach for Scene Classification"
        ],
        "bio": "SUMATHI K is a faculty member in the Electronics and Communication Engineering department with experience in academics and research.",
        "photoInitials": "SK",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. SHWETHA H R",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electronics and Communication Engineering",
        "experience": "13 years",
        "email": "shwethahr@jnnce.ac.in",
        "patents": [
          "SYSTEM & METHOD FOR BUILDING SMART URBAN SOLUTIONS USING IOT, AI, ML AND CLOUD-BASED TECHNOLOGY",
          "SYSTEM & METHOD FOR BUILDING SMART URBAN SOLUTIONS USING IOT, AI, ML AND CLOUD-BASED TECHNOLOGY"
        ],
        "publications": 9,
        "selectedPublications": [
          "A Survey on Capacitive Based CO2 Gas Sensors",
          "Insights on Critical Energy Efficiency Approaches in Internet-of-Things Application",
          "Analysis of Low power consumption platinum based microheater  for gas sensing application"
        ],
        "bio": "SHWETHA H R is a faculty member in the Electronics and Communication Engineering department with experience in academics and research.",
        "photoInitials": "SH",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. PRASHANTH G S",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electronics and Communication Engineering",
        "experience": "11 years",
        "email": "prashanthgs@jnnce.ac.in",
        "patents": [],
        "publications": 9,
        "selectedPublications": [
          "An Algorithm to Find Minimal Cut-Sets of Complex Network",
          "Simulation of FH-CDMA for AWGN and Fading Channels",
          "Analysis of FHSS-CDMA with QAM-64 over AWGN and Fading Channels"
        ],
        "bio": "PRASHANTH G S is a faculty member in the Electronics and Communication Engineering department with experience in academics and research.",
        "photoInitials": "PG",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. SHWETHA B",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electronics and Communication Engineering",
        "experience": "10 years",
        "email": "shwethab@jnnce.ac.in",
        "patents": [],
        "publications": 5,
        "selectedPublications": [
          "Digital image forgery detection techniques: a survey",
          "Image Classifier based Digital Image Forensic Detection-A Review and Simulations",
          "Application of Super pixels Segmentation in Digital Image forgery Detection"
        ],
        "bio": "SHWETHA B is a faculty member in the Electronics and Communication Engineering department with experience in academics and research.",
        "photoInitials": "SB",
        "photoColor": "#7C3AED"
      }
    ]
  },
  {
    "code": "RAI",
    "slug": "rai",
    "name": "Robotics and Artificial Intelligence",
    "link": "/departments/rai",
    "intake": 60,
    "duration": "4 Years",
    "overview": "Robotics and Artificial Intelligence department offers quality technical education and research opportunities.",
    "subjects": [],
    "labs": [],
    "careers": [],
    "eligibility": "10+2 with PCM",
    "affiliation": "VTU, Belagavi",
    "faculty": [
      {
        "name": "Dr. BASAPPAJI K M",
        "designation": "Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Robotics and Artificial Intelligence",
        "experience": "33 years",
        "email": "bas_km@jnnce.ac.in",
        "patents": [],
        "publications": 1,
        "selectedPublications": [
          "Characteriztion of Corn Husk Fibre Reinforced Polymer Composites: A Review"
        ],
        "bio": "BASAPPAJI K M is a faculty member in the Robotics and Artificial Intelligence department with experience in academics and research.",
        "photoInitials": "BK",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. SRINIVASA MURTHY M K",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Robotics and Artificial Intelligence",
        "experience": "19 years",
        "email": "murthynivas007@jnnce.ac.in",
        "patents": [],
        "publications": 5,
        "selectedPublications": [
          "\"Statistical Analysis of Ultimate Tensile Strength of Grain Refined and Modified Al-Si Alloys (LM-25, LM-6 and LM-30) Using ANOVA\"",
          "Fail Safe Design of Skin and Bulkhead of an Aircraft Stiffened Panel by  Residual Strength Evaluation Method",
          "An investigation of an Arduino-based solar tracking system with panel  surface cleaning mechanism"
        ],
        "bio": "SRINIVASA MURTHY M K is a faculty member in the Robotics and Artificial Intelligence department with experience in academics and research.",
        "photoInitials": "SM",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. V K DEEPANKAR",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Robotics and Artificial Intelligence",
        "experience": "6 years",
        "email": "dsvk@jnnce.ac.in",
        "patents": [],
        "publications": 0,
        "selectedPublications": [],
        "bio": "V K DEEPANKAR is a faculty member in the Robotics and Artificial Intelligence department with experience in academics and research.",
        "photoInitials": "VK",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. SUSHMA U K",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Robotics and Artificial Intelligence",
        "experience": "2 years",
        "email": "sushmauk@jnnce.ac.in",
        "patents": [],
        "publications": 0,
        "selectedPublications": [],
        "bio": "SUSHMA U K is a faculty member in the Robotics and Artificial Intelligence department with experience in academics and research.",
        "photoInitials": "SU",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. VIDYA",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Robotics and Artificial Intelligence",
        "experience": "2 years",
        "email": "vidyakr@jnnce.ac.in",
        "patents": [],
        "publications": 1,
        "selectedPublications": [
          "BicTd-Brightening Intercultural Communication:Text Detection with Enhanced Light"
        ],
        "bio": "VIDYA is a faculty member in the Robotics and Artificial Intelligence department with experience in academics and research.",
        "photoInitials": "V",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Ms. HEMA H P",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Robotics and Artificial Intelligence",
        "experience": "1 years",
        "email": "hemahp4@gmail.com",
        "patents": [],
        "publications": 1,
        "selectedPublications": [
          "DISTANCE MEASUREMENT USING ULTRASONIC SENSOR AND FPGA"
        ],
        "bio": "HEMA H P is a faculty member in the Robotics and Artificial Intelligence department with experience in academics and research.",
        "photoInitials": "HH",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. KIRAN M C",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Robotics and Artificial Intelligence",
        "experience": "1 years",
        "email": "",
        "patents": [],
        "publications": 0,
        "selectedPublications": [],
        "bio": "KIRAN M C is a faculty member in the Robotics and Artificial Intelligence department with experience in academics and research.",
        "photoInitials": "KM",
        "photoColor": "#7C3AED"
      }
    ]
  },
  {
    "code": "CIVIL",
    "slug": "civil",
    "name": "Civil Engineering",
    "link": "/departments/civil",
    "intake": 60,
    "duration": "4 Years",
    "overview": "Civil Engineering department offers quality technical education and research opportunities.",
    "subjects": [],
    "labs": [],
    "careers": [],
    "eligibility": "10+2 with PCM",
    "affiliation": "VTU, Belagavi",
    "faculty": [
      {
        "name": "Dr. KARTHIKA B S",
        "designation": "Professor & Head",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Civil Engineering",
        "experience": "19 years",
        "email": "karthik@jnnce.ac.in",
        "patents": [],
        "publications": 4,
        "selectedPublications": [
          "Modeling of Air Temperature using ANFIS by Wavelet Refined Parameters",
          "Prediction of Air Temperature by Hybridized Model (Wavelet-ANFIS) Using Wavelet Decomposed Data",
          "Optimization of Reservoir Operation using Linear Programming"
        ],
        "bio": "KARTHIKA B S is a faculty member in the Civil Engineering department with experience in academics and research.",
        "photoInitials": "KB",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. RAGHURAM K CHINNABHANDAR",
        "designation": "Associate Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Civil Engineering",
        "experience": "16 years",
        "email": "raghuramkc@jnnce.ac.in",
        "patents": [],
        "publications": 5,
        "selectedPublications": [
          "Laboratory Evaluation of use of Areca fibres in SMA mixes",
          "Effect of aggregate gradation and bitumen type on mechanical properties of semi-flexible asphalt mixtures",
          "A review of the potential application of lignin in the production of bio-binder: challenges and opportunities"
        ],
        "bio": "RAGHURAM K CHINNABHANDAR is a faculty member in the Civil Engineering department with experience in academics and research.",
        "photoInitials": "RK",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. NEERAJ S N",
        "designation": "Associate Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Civil Engineering",
        "experience": "12 years",
        "email": "snneeraj@jnnce.ac.in",
        "patents": [
          "Natural Resin Based Black Cotton Soil Bricks",
          "IOT BASED CONCRETE STRENGTH  ANALYZER"
        ],
        "publications": 11,
        "selectedPublications": [
          "Effect of Autorickshaws and Buses on Mixed Traffic Flow - A Case Study of Shivamogga City",
          "Pedestrian Crossing Behaviour Analysis at Intersections of Mysuru City",
          "Case Study on Marshall Characteristics of Bituminous Mixes with  Partial Replacement of Aggregate and Filler Material by Reclaimed Asphalt Pavement and Fly Ash"
        ],
        "bio": "NEERAJ S N is a faculty member in the Civil Engineering department with experience in academics and research.",
        "photoInitials": "NS",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. SHASHIKUMAR M HIREMATH",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Civil Engineering",
        "experience": "21 years",
        "email": "shashi.m.hiremath@jnnce.ac.in",
        "patents": [],
        "publications": 5,
        "selectedPublications": [
          "Analysis of Water Quality Using Physico-Chemical Parameters Hosahalli Tank in Shimoga District, Karnataka, India",
          "Surface Water Quality Status of Tunga Left Bank Command, Shimoga & Davangere Dist, Karnataka, India",
          "Water Quality and Heavy Metal Analysis of Kunchenahalli Lake in Shivamogga District, Karnataka, India"
        ],
        "bio": "SHASHIKUMAR M HIREMATH is a faculty member in the Civil Engineering department with experience in academics and research.",
        "photoInitials": "SM",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. UMAPATHI",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Civil Engineering",
        "experience": "19 years",
        "email": "umapathi75@jnnce.ac.in",
        "patents": [],
        "publications": 7,
        "selectedPublications": [
          "Effect of carriageway width on pcu and capacity of two lane roads â€“ a case study of Shivamogga district",
          "ASSESSMENT OF COEFFICIENTS FOR INDIVIDUAL VEHICLE FROM SIMULTANEOUS EQUATION MODEL",
          "EVALUATION OF PCU USING SIMULTANEOUS EQUATION MODEL AND CONVENTIONAL METHOD"
        ],
        "bio": "UMAPATHI is a faculty member in the Civil Engineering department with experience in academics and research.",
        "photoInitials": "U",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. RABINANDAN J",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Civil Engineering",
        "experience": "18 years",
        "email": "rabinandan@jnnce.ac.in",
        "patents": [],
        "publications": 2,
        "selectedPublications": [
          "Urban Sprawl Study of Gopala Extension, Shivamogga, using RS, GIS and GPS",
          "Application of Electrical Resistivity in Ground Water Detection â€“ A Case StudyApplication of Electrical Resistivity in Ground Water Detection â€“ A Case Study"
        ],
        "bio": "RABINANDAN J is a faculty member in the Civil Engineering department with experience in academics and research.",
        "photoInitials": "RJ",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. SABARESHWARAN S",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Civil Engineering",
        "experience": "15 years",
        "email": "sabaresh.s@jnnce.ac.in",
        "patents": [],
        "publications": 1,
        "selectedPublications": [
          "Design and Development of Accelerated Erosion Testing  Apparatus for Building Materials"
        ],
        "bio": "SABARESHWARAN S is a faculty member in the Civil Engineering department with experience in academics and research.",
        "photoInitials": "SS",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. DATTATREYA S BHASARI",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Civil Engineering",
        "experience": "14 years",
        "email": "dattatreya.sb@jnnce.ac.in",
        "patents": [],
        "publications": 2,
        "selectedPublications": [
          "Radial basis function neural network algorithm for semiâ€active control of baseâ€isolated structures",
          "Book cover Book cover  Recent Advances in Civil Engineering pp 1061â€“1070Cite as Collection of Municipal Solid Waste by Clustering of Dynamic Nodes for Vehicle Path Optimization"
        ],
        "bio": "DATTATREYA S BHASARI is a faculty member in the Civil Engineering department with experience in academics and research.",
        "photoInitials": "DS",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. MOHAMED IBRAHIM N",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Civil Engineering",
        "experience": "14 years",
        "email": "mohamedibrahim@jnnce.ac.in",
        "patents": [],
        "publications": 1,
        "selectedPublications": [
          "Ground Water Study of Shivamogga City"
        ],
        "bio": "MOHAMED IBRAHIM N is a faculty member in the Civil Engineering department with experience in academics and research.",
        "photoInitials": "MI",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. ANAND B",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Civil Engineering",
        "experience": "13 years",
        "email": "anand002@jnnce.ac.in",
        "patents": [],
        "publications": 0,
        "selectedPublications": [],
        "bio": "ANAND B is a faculty member in the Civil Engineering department with experience in academics and research.",
        "photoInitials": "AB",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. BINDIYA K",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Civil Engineering",
        "experience": "13 years",
        "email": "bindiyak@jnnce.ac.in",
        "patents": [],
        "publications": 7,
        "selectedPublications": [
          "NUMERICAL STUDY OF BEHAVIOR OF SQUARE FOOTING ON GEOGRID-REINFORCED FLYASH BEDS UNDER STATIC LOADING",
          "A STUDY ON THE REINFORCEMENT LAYERS EFFECT ON SQUARE FOOTING EMBEDDED IN FLYASH REINFORCED WITH GEOGRID UNDER CYCLIC LOADING",
          "Effect of Number of Reinforcement Layers and Loading Magnitude on the performance of Square Footing Embedded in Geogrid Reinforced Flyash Beds Under Cyclic Loading"
        ],
        "bio": "BINDIYA K is a faculty member in the Civil Engineering department with experience in academics and research.",
        "photoInitials": "BK",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. AKSHATHA M",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Civil Engineering",
        "experience": "13 years",
        "email": "akshathasheregar@jnnce.ac.in",
        "patents": [],
        "publications": 5,
        "selectedPublications": [
          "Cycle Track Design and Performance Analysis at an Uncontrolled Intersection",
          "Study of Temperature differential in different concrete slabs of varying slab thickness in different regions",
          "A Review Paper on Study of Lane  Changing Behaviour Due To U-Turns at An  Uncontrolled Median Opening"
        ],
        "bio": "AKSHATHA M is a faculty member in the Civil Engineering department with experience in academics and research.",
        "photoInitials": "AM",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. CHAYA D Y",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Civil Engineering",
        "experience": "13 years",
        "email": "suchay20@jnnce.ac.in",
        "patents": [],
        "publications": 2,
        "selectedPublications": [
          "Stabilization of Soil Using E W",
          "Spatial variability of topsoil chemical properties"
        ],
        "bio": "CHAYA D Y is a faculty member in the Civil Engineering department with experience in academics and research.",
        "photoInitials": "CD",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. SREENIVASA V",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Civil Engineering",
        "experience": "13 years",
        "email": "srinivasajetty.v@jnnce.ac.in",
        "patents": [
          "PORTABLE MATERIAL DETECTING MASS  WEIGHING INSTRUMENT"
        ],
        "publications": 1,
        "selectedPublications": [
          "Water Quality Index of Tunga River in Shivamogga"
        ],
        "bio": "SREENIVASA V is a faculty member in the Civil Engineering department with experience in academics and research.",
        "photoInitials": "SV",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. SAGAR H",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Civil Engineering",
        "experience": "12 years",
        "email": "sagarhalappa@jnnce.ac.in",
        "patents": [],
        "publications": 1,
        "selectedPublications": [
          "Determination of Pedestrian LOS for Crosswalks at Intersections - A Case Study in Shivamogga City"
        ],
        "bio": "SAGAR H is a faculty member in the Civil Engineering department with experience in academics and research.",
        "photoInitials": "SH",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. ARUN V",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Civil Engineering",
        "experience": "12 years",
        "email": "arun.v@jnnce.ac.in",
        "patents": [
          "Portable pothole mix using cold mix technology"
        ],
        "publications": 3,
        "selectedPublications": [
          "Delay in Rural Road Construction: Evidence from Pradhan Mantri Gram Sadak Yojana in Shimoga District, Karnataka, India",
          "Laboratory Investigation of Soil Stabilization Using Terrazyme and Cement",
          "Prediction of Pavement Maintenance Cost for Rural Roads at Network Level"
        ],
        "bio": "ARUN V is a faculty member in the Civil Engineering department with experience in academics and research.",
        "photoInitials": "AV",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. ANIRUDH N",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Civil Engineering",
        "experience": "12 years",
        "email": "anirudh.n@jnnce.ac.in",
        "patents": [],
        "publications": 6,
        "selectedPublications": [
          "Fillers Influence on Hot-Mix Asphalt Mixture Design and Performance Assessment",
          "â€œEVALUATION OF BITUMINOUS CONCRETE MIXTURE PROPERTIES WITH STEEL SLAGâ€",
          "Improvement to Pedestrian Walkway Facilities to Enhance Pedestrian Safety for selected stretch in Bangalore City, India"
        ],
        "bio": "ANIRUDH N is a faculty member in the Civil Engineering department with experience in academics and research.",
        "photoInitials": "AN",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. GANESH PRASANNA S",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Civil Engineering",
        "experience": "9 years",
        "email": "ganeshp@jnnce.ac.in",
        "patents": [
          "SMART TAMARIND PRESSING SYSTEM"
        ],
        "publications": 2,
        "selectedPublications": [
          "Land Use Land Cover change detection of Gopala Extension, Shivamogga, using RS, GIS and GPS- A case study",
          "\"Urban Sprawl Study of Gopala Extension, Shivamogga, using RS, GIS and GPS\""
        ],
        "bio": "GANESH PRASANNA S is a faculty member in the Civil Engineering department with experience in academics and research.",
        "photoInitials": "GP",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. RASHMI M S",
        "designation": "",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Civil Engineering",
        "experience": "0 years",
        "email": "",
        "patents": [],
        "publications": 0,
        "selectedPublications": [],
        "bio": "RASHMI M S is a faculty member in the Civil Engineering department with experience in academics and research.",
        "photoInitials": "RM",
        "photoColor": "#7C3AED"
      }
    ]
  },
  {
    "code": "TCE",
    "slug": "tce",
    "name": "Electronics and Telecommunication Engineering",
    "link": "/departments/tce",
    "intake": 60,
    "duration": "4 Years",
    "overview": "Electronics and Telecommunication Engineering department offers quality technical education and research opportunities.",
    "subjects": [],
    "labs": [],
    "careers": [],
    "eligibility": "10+2 with PCM",
    "affiliation": "VTU, Belagavi",
    "faculty": [
      {
        "name": "Dr. SURENDRA S",
        "designation": "Professor & Head",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electronics and Telecommunication Engineering",
        "experience": "34 years",
        "email": "surendra_s@jnnce.ac.in",
        "patents": [],
        "publications": 0,
        "selectedPublications": [],
        "bio": "SURENDRA S is a faculty member in the Electronics and Telecommunication Engineering department with experience in academics and research.",
        "photoInitials": "SS",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. USHA DEVI M B",
        "designation": "Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electronics and Telecommunication Engineering",
        "experience": "28 years",
        "email": "mbu@jnnce.ac.in",
        "patents": [],
        "publications": 12,
        "selectedPublications": [
          "â€œComputation of Shortest path using Network Simplex Algorithm in Wireless Multicast Networkâ€",
          "â€œComputation of Maximum Flow Using PreFlow Push Algorithm in PIM-DM Wireless Multicastâ€",
          "â€œAdapting TFMCC protocol inPIM-DM for avoiding Congestion Control in Wired Multicast Networkâ€"
        ],
        "bio": "USHA DEVI M B is a faculty member in the Electronics and Telecommunication Engineering department with experience in academics and research.",
        "photoInitials": "UD",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. MADHUKAR C S",
        "designation": "Associate Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electronics and Telecommunication Engineering",
        "experience": "25 years",
        "email": "csmadhukar@jnnce.ac.in",
        "patents": [],
        "publications": 0,
        "selectedPublications": [],
        "bio": "MADHUKAR C S is a faculty member in the Electronics and Telecommunication Engineering department with experience in academics and research.",
        "photoInitials": "MC",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. ASHWINI S R",
        "designation": "Associate Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electronics and Telecommunication Engineering",
        "experience": "23 years",
        "email": "srashwini@jnnce.ac.in",
        "patents": [
          "AI BASED SMART ROBOTIC DEVICE FOR VEHICLE MANUFACTURER"
        ],
        "publications": 3,
        "selectedPublications": [
          "Biomedical Waste Segregation for Hospice Applications",
          "A Novel Approach for Chronic Obstructive Pulmonary Disease Diagnosis with TensorFlow-Based Image Analysis",
          "Deep Reinforcement Learning for Smart Traffic Control"
        ],
        "bio": "ASHWINI S R is a faculty member in the Electronics and Telecommunication Engineering department with experience in academics and research.",
        "photoInitials": "AS",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. SHASHI KIRAN S",
        "designation": "Associate Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electronics and Telecommunication Engineering",
        "experience": "22 years",
        "email": "shashikiran@jnnce.ac.in",
        "patents": [
          "Security and surveillance device with Real time image recognition"
        ],
        "publications": 4,
        "selectedPublications": [
          "Challenges in Sparse Image Reconstruction",
          "Super resolution image reconstruction via dual dictionary learning in sparse environment",
          "Image reconstruction through compressive sampling matching pursuit and curvelet transform"
        ],
        "bio": "SHASHI KIRAN S is a faculty member in the Electronics and Telecommunication Engineering department with experience in academics and research.",
        "photoInitials": "SK",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. HARISHA S B",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electronics and Telecommunication Engineering",
        "experience": "23 years",
        "email": "harishasb@jnnce.ac.in",
        "patents": [
          "Computer Device for Home Automation"
        ],
        "publications": 7,
        "selectedPublications": [
          "Smart Wheelchair with Trolley for Elderly People",
          "Leaf disease detection & Soil Nutrients Deficiency  recognition system",
          "Deep Learning Assisted Distorted Born Iterative Method for Solving Electromagnetic Inverse Scattering Problems"
        ],
        "bio": "HARISHA S B is a faculty member in the Electronics and Telecommunication Engineering department with experience in academics and research.",
        "photoInitials": "HS",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. APARNA",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electronics and Telecommunication Engineering",
        "experience": "20 years",
        "email": "aparnaraj@jnnce.ac.in",
        "patents": [],
        "publications": 1,
        "selectedPublications": [
          "Road sign recognition system for the smart car using machine learning"
        ],
        "bio": "APARNA is a faculty member in the Electronics and Telecommunication Engineering department with experience in academics and research.",
        "photoInitials": "A",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. MADHUSUDHAN G",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electronics and Telecommunication Engineering",
        "experience": "20 years",
        "email": "gmrmadhu@jnnce.ac.in",
        "patents": [],
        "publications": 6,
        "selectedPublications": [
          "LTE and LTE-A Prospective mobile broadbandâ€",
          "Insights of 6G and artificial-intelligence-based internet-of-vehicle towards communication",
          "Fingerprint based two wheeler security system with the feature of accident detection"
        ],
        "bio": "MADHUSUDHAN G is a faculty member in the Electronics and Telecommunication Engineering department with experience in academics and research.",
        "photoInitials": "MG",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. RASHMI M HULLAMANI",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electronics and Telecommunication Engineering",
        "experience": "14 years",
        "email": "rashmimh@jnnce.ac.in",
        "patents": [],
        "publications": 7,
        "selectedPublications": [
          "Face Authentication System Embedded with PIC18F458 for Automated Teller Machines",
          "Back Propagation Classification of EEG for Brain-Computer  Interface",
          "ZigBee Wireless Communication Technology"
        ],
        "bio": "RASHMI M HULLAMANI is a faculty member in the Electronics and Telecommunication Engineering department with experience in academics and research.",
        "photoInitials": "RM",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. ANAND RAJ S N",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electronics and Telecommunication Engineering",
        "experience": "13 years",
        "email": "anandraj@jnnce.ac.in",
        "patents": [],
        "publications": 1,
        "selectedPublications": [
          "Performance Enhancement of Epoxy Glass Fiber Cores of HTLS Conductors Using Carbon Nanofillers/ATH Additives"
        ],
        "bio": "ANAND RAJ S N is a faculty member in the Electronics and Telecommunication Engineering department with experience in academics and research.",
        "photoInitials": "AR",
        "photoColor": "#7C3AED"
      }
    ]
  },
  {
    "code": "EEE",
    "slug": "eee",
    "name": "Electrical and Electronics Engineering",
    "link": "/departments/eee",
    "intake": 60,
    "duration": "4 Years",
    "overview": "Electrical and Electronics Engineering department offers quality technical education and research opportunities.",
    "subjects": [],
    "labs": [],
    "careers": [],
    "eligibility": "10+2 with PCM",
    "affiliation": "VTU, Belagavi",
    "faculty": [
      {
        "name": "Dr. THEJASWI A H",
        "designation": "Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electrical and Electronics Engineering",
        "experience": "20 years",
        "email": "ahthejaswi@jnnce.ac.in",
        "patents": [],
        "publications": 0,
        "selectedPublications": [],
        "bio": "THEJASWI A H is a faculty member in the Electrical and Electronics Engineering department with experience in academics and research.",
        "photoInitials": "TA",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. SURESH H B",
        "designation": "Professor & Head",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electrical and Electronics Engineering",
        "experience": "30 years",
        "email": "hbs_ee@jnnce.ac.in",
        "patents": [],
        "publications": 5,
        "selectedPublications": [
          "Energy Resource Allocation for Sustainable Development - A Case Study,",
          "Optimal Allocation of Rural Energy Resources Using Goal Programming - A Case Study",
          "Micro-Level Energy Planning for Rural Area of Malnad Region - A Case Study"
        ],
        "bio": "SURESH H B is a faculty member in the Electrical and Electronics Engineering department with experience in academics and research.",
        "photoInitials": "SH",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. SHAILASHREE K",
        "designation": "Associate Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electrical and Electronics Engineering",
        "experience": "30 years",
        "email": "ssk_ee@jnnce.ac.in",
        "patents": [],
        "publications": 1,
        "selectedPublications": [
          "Electric Lineman safety using Arduino UNO and finger print scanner"
        ],
        "bio": "SHAILASHREE K is a faculty member in the Electrical and Electronics Engineering department with experience in academics and research.",
        "photoInitials": "SK",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. AJJANNA N G",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electrical and Electronics Engineering",
        "experience": "19 years",
        "email": "nga_ee@jnnce.ac.in",
        "patents": [],
        "publications": 7,
        "selectedPublications": [
          "Simulation of 3phase symmetrical multilevel inverter for AC drives",
          "A novel structure for multilevel inverter topology for higher power application with reduced number of switchesSimulation of 3phase symmetrical multilevel inverter for AC drives",
          "Computer analysis for multipurpose of inverter for FACTS application"
        ],
        "bio": "AJJANNA N G is a faculty member in the Electrical and Electronics Engineering department with experience in academics and research.",
        "photoInitials": "AN",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. SOUMYA K T",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electrical and Electronics Engineering",
        "experience": "20 years",
        "email": "soumya_kt@jnnce.ac.in",
        "patents": [],
        "publications": 0,
        "selectedPublications": [],
        "bio": "SOUMYA K T is a faculty member in the Electrical and Electronics Engineering department with experience in academics and research.",
        "photoInitials": "SK",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. MAHESHWARAPPA H M",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electrical and Electronics Engineering",
        "experience": "20 years",
        "email": "mahesheed@jnnce.ac.in",
        "patents": [],
        "publications": 3,
        "selectedPublications": [
          "Garbage Monitoring System Powered by Solar Energy",
          "TRANSMISSION LINE FAULT DETECTION BY USING ARDUINO",
          "OTP BASED BANK LOCKER SYSTEM USING ARDUINO WITH BIOMETRIC FINGERPRINT AND GSM-SMS ALERT"
        ],
        "bio": "MAHESHWARAPPA H M is a faculty member in the Electrical and Electronics Engineering department with experience in academics and research.",
        "photoInitials": "MH",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. VEERESHA K B",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electrical and Electronics Engineering",
        "experience": "18 years",
        "email": "veereshakb@jnnce.ac.in",
        "patents": [
          "Grid Connected Hybrid PV-Battery-Wind Supplied Induction Motor Drive with Direct Torque Control of a 5L-NPC Inverter"
        ],
        "publications": 12,
        "selectedPublications": [
          "Power System Faults Mitigation using Generalized Unified Power Quality Conditioner",
          "UVT and PQ theory based Generalised Unified Power Quality Conditioner for Voltage Sag and Swell Compensation",
          "Power Quality Mitigation by Generalized Unified Power Quality Conditioner"
        ],
        "bio": "VEERESHA K B is a faculty member in the Electrical and Electronics Engineering department with experience in academics and research.",
        "photoInitials": "VK",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. MANJULA M G",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electrical and Electronics Engineering",
        "experience": "16 years",
        "email": "manju_mg@jnnce.ac.in",
        "patents": [],
        "publications": 6,
        "selectedPublications": [
          "Optimal Power Flow Methods",
          "Power quality enhancement using unified power quality conditioner in microgrid system",
          "Simulation analysis of two terminal unified power quality conditioner"
        ],
        "bio": "MANJULA M G is a faculty member in the Electrical and Electronics Engineering department with experience in academics and research.",
        "photoInitials": "MM",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. SUPRITHA M R",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electrical and Electronics Engineering",
        "experience": "15 years",
        "email": "Supritha_prakash09@jnnce.ac.in",
        "patents": [],
        "publications": 4,
        "selectedPublications": [
          "Health Monitoring By using Renesas",
          "Impact of Supercapacitors in Battery on Hybrid Energy Storage System for an Integrated Microgrid",
          "Auction-based single buyer energy trading framework in grid-tied  microgrid with distributed energy storage and demand response using a  multi-agent approach"
        ],
        "bio": "SUPRITHA M R is a faculty member in the Electrical and Electronics Engineering department with experience in academics and research.",
        "photoInitials": "SM",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. VIDYASHANKAR M",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electrical and Electronics Engineering",
        "experience": "11 years",
        "email": "vsm_ee@jnnce.ac.in",
        "patents": [],
        "publications": 5,
        "selectedPublications": [
          "Comparative Analysis of Multi-pulse Inverter for Facts Application",
          "A NOVEL STRUCTURE FOR MULTI-LEVEL INVERTER TOPOLOGY FOR HIGHER POWER APPLICATIONS WITH REDUCED NUMBER OF SWITCHES",
          "Simulation of Three-Phase Symmetrical Multilevel Voltage Source Inverter for Ac Drives"
        ],
        "bio": "VIDYASHANKAR M is a faculty member in the Electrical and Electronics Engineering department with experience in academics and research.",
        "photoInitials": "VM",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. PADMASHREE H R",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electrical and Electronics Engineering",
        "experience": "8 years",
        "email": "padmashree_hr@jnnce.ac.in",
        "patents": [],
        "publications": 0,
        "selectedPublications": [],
        "bio": "PADMASHREE H R is a faculty member in the Electrical and Electronics Engineering department with experience in academics and research.",
        "photoInitials": "PH",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. CHANDAN K R",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Electrical and Electronics Engineering",
        "experience": "4 years",
        "email": "chandankr@jnnce.ac.in",
        "patents": [
          "IoT-Based Precision Agriculture Platform for Soil Health Monitoring and Dynamic Nutrient Balancing"
        ],
        "publications": 4,
        "selectedPublications": [
          "Reliability evaluation of wind power generation system",
          "A Single-Phase Grid-Connected Photovoltaic Inverter Supported With a Three-Switch Three-Port Flyback with Series Power Decoupling Circuit",
          "Simulation Analysis of PWM Based Sliding Mode Controller for DC-DC Buck Converter"
        ],
        "bio": "CHANDAN K R is a faculty member in the Electrical and Electronics Engineering department with experience in academics and research.",
        "photoInitials": "CK",
        "photoColor": "#7C3AED"
      }
    ]
  },
  {
    "code": "CHEM",
    "slug": "chem",
    "name": "Chemistry",
    "link": "/departments/chem",
    "intake": 60,
    "duration": "4 Years",
    "overview": "Chemistry department offers quality technical education and research opportunities.",
    "subjects": [],
    "labs": [],
    "careers": [],
    "eligibility": "10+2 with PCM",
    "affiliation": "VTU, Belagavi",
    "faculty": [
      {
        "name": "Dr. MOINUDDIN KHAN M H",
        "designation": "Professor & Head",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Chemistry",
        "experience": "22 years",
        "email": "drmk@jnnce.ac.in",
        "patents": [],
        "publications": 5,
        "selectedPublications": [
          "Investigation on Co(II), Ni(II), Cu(II) and Zn(II) complexes derived from novel NÊ¹â€‘(3â€‘hydroxybenzoyl)thiopheneâ€‘2â€‘carbohydrazide: structural characterization, electrochemical detection of biomolecules, molecular docking and biological evaluation",
          "Phytochemical analysis of UV active and inactive bioactive compounds present in Polianthes tuberosa (Linn.) flower",
          "Enantiomeric Separation of Indole-3-Propanamide Derivatives by Using Supercritical Fluid Chromatography on a Polysaccharide-Based Chiral Stationary Phase"
        ],
        "bio": "MOINUDDIN KHAN M H is a faculty member in the Chemistry department with experience in academics and research.",
        "photoInitials": "MK",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. SACHIN H P",
        "designation": "Associate Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Chemistry",
        "experience": "19 years",
        "email": "drhps@jnnce.ac.in",
        "patents": [],
        "publications": 14,
        "selectedPublications": [
          "Novel cost-effective aqueous Amorphophallus paeoniifolius leaves extract as a green corrosion inhibitor for mild steel corrosion in hydrochloric acid medium: A detailed experimental and surface characterization studies",
          "A study on use of Telmisartan drug for corrosion inhibition of zinc in 0.1M hydrochloric acid: Surface characterization and Quantum studies",
          "Microwave treated Bermuda grass as a novel photocatalyst for the  treatment of methylene blue dye from wastewater"
        ],
        "bio": "SACHIN H P is a faculty member in the Chemistry department with experience in academics and research.",
        "photoInitials": "SH",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. BINDUPAVAN V",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Chemistry",
        "experience": "14 years",
        "email": "vbp@jnnce.ac.in",
        "patents": [],
        "publications": 4,
        "selectedPublications": [
          "synthesis,spectral study of novel nitophenyl diazenyl thiazolamine and its coordinated metal complexes",
          "Cyclic Dissimilarity in Physico-Chemical Variables in Groundwater Quality of Honnali Taluk, Davangere District Karnataka, India Bindu Pavan V 1* , S Manjappa 2 , MH Moinuddin Khan 3 , Sachin HP 4 , Suresh B 5 1, 3, 4 Department of Chemistry, J N N College of Engineering, Shivamogga, Karnataka, India 2 Department of Chemistry, University BDT College of Engineering, Davangere-577005, Karnataka, India 5 Department of Civil Engineering, Bapuji Institute of Engineering &amp; Technology, Davangere-577 005, Karnataka, Indi",
          "Electrochemical sensing of uric acid at cerium oxide poly (Congo red) modified carbon paste electrode"
        ],
        "bio": "BINDUPAVAN V is a faculty member in the Chemistry department with experience in academics and research.",
        "photoInitials": "BV",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. CHETHAN S G",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Chemistry",
        "experience": "9 years",
        "email": "chethansgs@jnnce.ac.in",
        "patents": [
          "ECO-FRIENDLY SMOKE ZONE UNITS"
        ],
        "publications": 9,
        "selectedPublications": [
          "A Novel Method for Refining Crude Glycerol a Byproduct from Biodiesel Industries",
          "Characterization of Activated Sewage Sludge And Biogas Production By Anaerobic Digestion Method",
          "Solar Energy Assisted Prototype Biodiesel Plant to Convert Triglyceride into Fatty Acid Methyl Ester"
        ],
        "bio": "CHETHAN S G is a faculty member in the Chemistry department with experience in academics and research.",
        "photoInitials": "CS",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. LUBNA AFROZ",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Chemistry",
        "experience": "3 years",
        "email": "lubna@jnnce.ac.in",
        "patents": [],
        "publications": 9,
        "selectedPublications": [
          "Synthesis, structural characterization, and thermal studies of 3d-metal complexes derived from a thiazole-based ligand: Multifaceted biological properties and molecular docking studies",
          "Synthesis, spectral characterization, electrochemical studies of pesticide and biological evaluation of transition metal complexes of azo dye derived from substituted phenyl pyrazole",
          "Structural elucidation, voltammetric detection of dopamine, molecular docking and biological inspection of novel 4-aminoantipyrine derived Schiff bases in Co (II), Ni (II) and Cu (II) complexes"
        ],
        "bio": "LUBNA AFROZ is a faculty member in the Chemistry department with experience in academics and research.",
        "photoInitials": "LA",
        "photoColor": "#7C3AED"
      }
    ]
  },
  {
    "code": "MATHS",
    "slug": "maths",
    "name": "Mathematics",
    "link": "/departments/maths",
    "intake": 60,
    "duration": "4 Years",
    "overview": "Mathematics department offers quality technical education and research opportunities.",
    "subjects": [],
    "labs": [],
    "careers": [],
    "eligibility": "10+2 with PCM",
    "affiliation": "VTU, Belagavi",
    "faculty": [
      {
        "name": "Dr. NIRMALA T",
        "designation": "Professor & Head",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Mathematics",
        "experience": "20 years",
        "email": "nirmalamaths@jnnce.ac.in",
        "patents": [],
        "publications": 17,
        "selectedPublications": [
          "Higher-Dimensional Relativity and Scalar-Tensor Theories",
          "Standard Model, Quantum Fields and Quantum Field Theory",
          "Applications  of Mathematics-Fabrication of Box wing plan"
        ],
        "bio": "NIRMALA T is a faculty member in the Mathematics department with experience in academics and research.",
        "photoInitials": "NT",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. SHAILA S BHAT",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Mathematics",
        "experience": "27 years",
        "email": "shailabhat@jnnce.ac.in",
        "patents": [],
        "publications": 3,
        "selectedPublications": [
          "A Study on Linear Algebra, Vector Spaces and Subspaces",
          "A STUDY ON LINEAR EQUATIONS, SOLUTIONS OF LINEAR EQUATIONS",
          "EIGEN VALUE DECOMPOSITION AND ITS  APPLICATIONS IN SCIENCE AND ENGINEERING."
        ],
        "bio": "SHAILA S BHAT is a faculty member in the Mathematics department with experience in academics and research.",
        "photoInitials": "SS",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. ANIL S C",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Mathematics",
        "experience": "16 years",
        "email": "anilsc@jnnce.ac.in",
        "patents": [],
        "publications": 7,
        "selectedPublications": [
          "A Study on Linear Algebra, Vector Spaces and  Subspaces",
          "A STUDY ON LINEAR EQUATIONS, SOLUTIONS OF LINEAR EQUATIONS.",
          "A STUDY ON LINEAR TRANSFORMATION AND ITS PROPERTIES"
        ],
        "bio": "ANIL S C is a faculty member in the Mathematics department with experience in academics and research.",
        "photoInitials": "AS",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. BHAGYALAKSHMI K",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Mathematics",
        "experience": "23 years",
        "email": "bhagyak@jnnce.ac.in",
        "patents": [],
        "publications": 2,
        "selectedPublications": [
          "A STUDY ON LINEAR TRANSFORMATION AND ITSPROPERTIES",
          "Understanding Linear Transformations: Theory, Applications and Insights"
        ],
        "bio": "BHAGYALAKSHMI K is a faculty member in the Mathematics department with experience in academics and research.",
        "photoInitials": "BK",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. PANDITH GIRI MOHAN DAS P K",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Mathematics",
        "experience": "13 years",
        "email": "giri28@jnnce.ac.in",
        "patents": [],
        "publications": 4,
        "selectedPublications": [
          "RECIPROCAL STATUS-DISTANCE INDEX OF GRAPHS",
          "Reciprocal-Status Distance index of Mycielskain and its Complement",
          "Derivation of Petersen Graph Utilizing Zagreb Index of Cyclic Graph C5 Through Graph Product"
        ],
        "bio": "PANDITH GIRI MOHAN DAS P K is a faculty member in the Mathematics department with experience in academics and research.",
        "photoInitials": "PG",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. GURUPADAVVA INGALAHALLI",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Mathematics",
        "experience": "13 years",
        "email": "gurupadavva@jnnce.ac.in",
        "patents": [],
        "publications": 14,
        "selectedPublications": [
          "RICCI SOLITONS IN LORENTZIAN $alpha$-SASAKIAN MANIFOLDS",
          "study on Conservative C-Bochner curvature ten- sor in K-contact and Kenmotsu manifolds admitting semi-symmetric metric connection",
          "Ricci solitons in $alpha$-Sasakain manifold"
        ],
        "bio": "GURUPADAVVA INGALAHALLI is a faculty member in the Mathematics department with experience in academics and research.",
        "photoInitials": "GI",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. KRISHNAMURTHY M R",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Mathematics",
        "experience": "10 years",
        "email": "krishnamr@jnnce.ac.in",
        "patents": [],
        "publications": 28,
        "selectedPublications": [
          "An unsteady ï¬‚ow and melting heat transfer of a nanoï¬‚uid over a stretching sheet embedded in a porous medium",
          "Nonlinear radiative heat transfer of boundary layer ï¬‚ow and heat transfer of Maxwell nanoï¬‚uid over a stretching sheet",
          "Effect of chemical reaction on MHD boundary layer flow and melting heat transfer of Williamson nanofluid in porous medium"
        ],
        "bio": "KRISHNAMURTHY M R is a faculty member in the Mathematics department with experience in academics and research.",
        "photoInitials": "KM",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. KEERTHI M L",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Mathematics",
        "experience": "3 years",
        "email": "keerthiml@jnnce.ac.in",
        "patents": [],
        "publications": 22,
        "selectedPublications": [
          "Effects of stretching/shrinking on the thermal performance of a fully wetted convective-radiative longitudinal fin of exponential profile",
          "Numerical investigation of efficiency of fully wet porous  convective-radiative moving radial fin in the presence of shape-dependent  hybrid nanofluid",
          "Irreversibility analysis of tangent hyperbolic fluid flow in a microchannel: a hybrid nanoparticles aspects"
        ],
        "bio": "KEERTHI M L is a faculty member in the Mathematics department with experience in academics and research.",
        "photoInitials": "KM",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. FELICITA ALMEIDA",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Mathematics",
        "experience": "2 years",
        "email": "felicitaalmeida@jnnce.ac.in",
        "patents": [],
        "publications": 52,
        "selectedPublications": [
          "Analogical elucidation of dustyâ€hybrid nanofluid flow through the microchannel: An unsteady case",
          "exploration of micropolar fluid stratified flow over curved stretching sheet under buoyancy effect",
          "Numerical illustration using finite difference method for the transient flow through porous microchannel and statistical interpretation of entropy using response surface methodology"
        ],
        "bio": "FELICITA ALMEIDA is a faculty member in the Mathematics department with experience in academics and research.",
        "photoInitials": "FA",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. HARISHKUMAR E",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Mathematics",
        "experience": "1 years",
        "email": "eharishkumar91@gmail.com",
        "patents": [],
        "publications": 0,
        "selectedPublications": [],
        "bio": "HARISHKUMAR E is a faculty member in the Mathematics department with experience in academics and research.",
        "photoInitials": "HE",
        "photoColor": "#7C3AED"
      }
    ]
  },
  {
    "code": "MCA",
    "slug": "mca",
    "name": "Master of Computer Applications",
    "link": "/departments/mca",
    "intake": 60,
    "duration": "4 Years",
    "overview": "Master of Computer Applications department offers quality technical education and research opportunities.",
    "subjects": [],
    "labs": [],
    "careers": [],
    "eligibility": "10+2 with PCM",
    "affiliation": "VTU, Belagavi",
    "faculty": [
      {
        "name": "Dr. SUNITHA G P",
        "designation": "Associate Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Master of Computer Applications",
        "experience": "27 years",
        "email": "sunithagpise@jnnce.ac.in",
        "patents": [],
        "publications": 3,
        "selectedPublications": [
          "Wound Analysis Using Machine Learning",
          "Tire Text Monitoring",
          "Blockchain - Aided Spoofed URLs Detection: A GNN and Rule-Based Fusion"
        ],
        "bio": "SUNITHA G P is a faculty member in the Master of Computer Applications department with experience in academics and research.",
        "photoInitials": "SG",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. SANTHOSH S G",
        "designation": "Associate Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Master of Computer Applications",
        "experience": "27 years",
        "email": "santhoshsgrao@jnnce.ac.in",
        "patents": [],
        "publications": 17,
        "selectedPublications": [
          "PYTHON CONVOLUTIONAL NEURAL NETWORK TOWARDS PNEUMONIA DETECTION",
          "ECG Heart Beat Analysis, Visualization & Classifications",
          "Wildlife Monitoring and Anti-Smuggling System for Trees in Forest with Deforestation, Fire and Smoke Detection with Fire Suppression System"
        ],
        "bio": "SANTHOSH S G is a faculty member in the Master of Computer Applications department with experience in academics and research.",
        "photoInitials": "SS",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. HEMANTH KUMAR",
        "designation": "Associate Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Master of Computer Applications",
        "experience": "20 years",
        "email": "hemanthkumar@jnnce.ac.in",
        "patents": [
          "Blockchain-Integrated Secure Financial Transaction Processing Device"
        ],
        "publications": 6,
        "selectedPublications": [
          "Optimal Multipath Routing using BFS for Wireless Sensor Networks",
          "MODIFIED AODV ROUTING IN WSN USING NEIGHBOR NODE CACHING",
          "Tree Reconstruction using Energy Aware Sink Mobility to Prolong Network Lifetime in WSN"
        ],
        "bio": "HEMANTH KUMAR is a faculty member in the Master of Computer Applications department with experience in academics and research.",
        "photoInitials": "HK",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. RAGHAVENDRA S P",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Master of Computer Applications",
        "experience": "20 years",
        "email": "raghusp@jnnce.ac.in",
        "patents": [],
        "publications": 17,
        "selectedPublications": [
          "CORRELATION BASED TEMPLATE MATCHING FOR RECOGNITION OF BANK CHEQUE NUMBER",
          "A Novel Recognition of Indian Bank Cheque Names Using Binary Pattern and Feed Forward Neural Network",
          "A Novel Technique for ATM Security by Image Processing"
        ],
        "bio": "RAGHAVENDRA S P is a faculty member in the Master of Computer Applications department with experience in academics and research.",
        "photoInitials": "RS",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. MANJUNATHA H T",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Master of Computer Applications",
        "experience": "16 years",
        "email": "manjudeepa@jnnce.ac.in",
        "patents": [],
        "publications": 8,
        "selectedPublications": [
          "INDIAN TRAFFIC SIGN BOARD RECOGNITION USING  NORMALIZED CORRELATION METHOD",
          "IIndian Road Lanes Detection Based on Regression and clustering using Video Processing Technique",
          "Detection and Recognition of Traffic Signs for Automatic Driver Assistance System Under Cluttered Background"
        ],
        "bio": "MANJUNATHA H T is a faculty member in the Master of Computer Applications department with experience in academics and research.",
        "photoInitials": "MH",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. ARUNKUMAR K L",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Master of Computer Applications",
        "experience": "15 years",
        "email": "arunkumarkl@jnnce.ac.in",
        "patents": [],
        "publications": 17,
        "selectedPublications": [
          "A NOVEL APPROACH FOR VEHICLE RECOGNITION BASED ON THE TAIL LIGHTS GEOMETRICAL FEATURES IN THE NIGHT VISION",
          "Classification of Vehicle Make Based on Geometric Features and Appearance-Based Attributes Under Complex Background",
          "Classification of Vehicle Type on Indian Road Scene Based on Deep Learning"
        ],
        "bio": "ARUNKUMAR K L is a faculty member in the Master of Computer Applications department with experience in academics and research.",
        "photoInitials": "AK",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. ADARSH J MAHENDRAKAR",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Master of Computer Applications",
        "experience": "15 years",
        "email": "adarshmj@jnnce.ac.in",
        "patents": [],
        "publications": 14,
        "selectedPublications": [
          "Estimation of Human Age and Gender Based on LBP Features Using Two Level Decision by SVM",
          "A SURVEY ON DIGITIZATION OF HISTORICAL DOCUMENT WITH   IMAGE ENHANCEMENT TECHNIQUES",
          "Python Based Naive Bayes Classifier for Spam Comment Detection"
        ],
        "bio": "ADARSH J MAHENDRAKAR is a faculty member in the Master of Computer Applications department with experience in academics and research.",
        "photoInitials": "AJ",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. PRASHANT ANKALKOTI",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Master of Computer Applications",
        "experience": "12 years",
        "email": "prashantsa@jnnce.ac.in",
        "patents": [
          "Deep Learning-Enhanced Automated Grading and Feedback System for Educational Assessments Using Computer Vision"
        ],
        "publications": 12,
        "selectedPublications": [
          "Brain Disease Classification using Convolution Neural Network",
          "A Relative Study on Bitcoin Mining",
          "Survey on Search Engine Optimization Tools & Techniques"
        ],
        "bio": "PRASHANT ANKALKOTI is a faculty member in the Master of Computer Applications department with experience in academics and research.",
        "photoInitials": "PA",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. SAMPATH KUMAR S",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Master of Computer Applications",
        "experience": "3 years",
        "email": "sampathkumar@jnnce.ac.in",
        "patents": [
          "SMART HEALTHCARE ANALYTICS: FUZZY LOGIC APPROACH TO IDENTIFY PANDEMIC-PRONE DISEASES IN PRELIMINARY STAGES"
        ],
        "publications": 0,
        "selectedPublications": [],
        "bio": "SAMPATH KUMAR S is a faculty member in the Master of Computer Applications department with experience in academics and research.",
        "photoInitials": "SK",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Ms. AMRUTHA M",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Master of Computer Applications",
        "experience": "1 years",
        "email": "amruthamanjunath22@gmail.com",
        "patents": [],
        "publications": 0,
        "selectedPublications": [],
        "bio": "AMRUTHA M is a faculty member in the Master of Computer Applications department with experience in academics and research.",
        "photoInitials": "AM",
        "photoColor": "#7C3AED"
      }
    ]
  },
  {
    "code": "MBA",
    "slug": "mba",
    "name": "Master of Business Administration",
    "link": "/departments/mba",
    "intake": 60,
    "duration": "4 Years",
    "overview": "Master of Business Administration department offers quality technical education and research opportunities.",
    "subjects": [],
    "labs": [],
    "careers": [],
    "eligibility": "10+2 with PCM",
    "affiliation": "VTU, Belagavi",
    "faculty": [
      {
        "name": "Dr. SRIKANT C",
        "designation": "Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Master of Business Administration",
        "experience": "29 years",
        "email": "srikac@jnnce.ac.in",
        "patents": [],
        "publications": 7,
        "selectedPublications": [
          "\"THE EVALUATION OF PHYSICAL  EVIDENCES IN VIRTUAL LEARNING  SYSTEM\"",
          "TRAVERSING THE PANDEMIC: A STUDY OF COMPETITIVE ADVANTAGE GAINED WITH  SUSTAINABLE MANAGEMENT PRACTICES",
          "BETA ANALYSIS OF SELECTED INDIAN COMPANIES SHARES- AN EMPIRICAL EVALUATION"
        ],
        "bio": "SRIKANT C is a faculty member in the Master of Business Administration department with experience in academics and research.",
        "photoInitials": "SC",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. SANTHOSHA",
        "designation": "Associate Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Master of Business Administration",
        "experience": "15 years",
        "email": "shanbhag82@jnnce.ac.in",
        "patents": [
          "AI BASED STOCK MARKET PREDICTION"
        ],
        "publications": 27,
        "selectedPublications": [
          "Indian Rural Markets: Issues and Challenges for Corporates",
          "Impact of Technological Advancements on Service Quality in Banking Industry",
          "Sports Management"
        ],
        "bio": "SANTHOSHA is a faculty member in the Master of Business Administration department with experience in academics and research.",
        "photoInitials": "S",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. VIKRAMA V",
        "designation": "Associate Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Master of Business Administration",
        "experience": "18 years",
        "email": "vikram.rich@jnnce.ac.in",
        "patents": [],
        "publications": 14,
        "selectedPublications": [
          "A CONCEPTUAL STUDY ON TRADITIONAL SUPPLY CHAIN MANAGEMENT AND GREEN SUPPLY CHAIN MANAGEMENT",
          "The Newspaper Market in Shivamogga: Inclination to Pay and Subscription Sensitivity of Readers towards Traditional and Online Platform",
          "A Study on Newspaper Industry Supply Chain Risk, Challenges and Control Needed to Sustain in the Digital Era"
        ],
        "bio": "VIKRAMA V is a faculty member in the Master of Business Administration department with experience in academics and research.",
        "photoInitials": "VV",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. SUBHADRA P S",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Master of Business Administration",
        "experience": "20 years",
        "email": "subhadrapss@jnnce.ac.in",
        "patents": [
          "IOT BASED INTELLIGENT FACILITY MANAGEMENT FOR HOTELS FOR CUSOMISED CUSTOMER EXPERIENCE",
          "AN ANALYSIS OF ENTERPRISE-WIDE HUMAN RESOURCE MANAGEMENT USING THE CONCEPT OF SUSTAINABLE BUSINESS DEVELOPMENT",
          "THE IMPORTANT ROLE OF FINANCE AND MANAGEMENT PLANNING IN BUSINESS",
          "DEVICE TO ANALYSE CONSUMER PSYCHOLOGY DURING SHOPPING"
        ],
        "publications": 14,
        "selectedPublications": [
          "â€œWork Life Balance in India: A Paradigm Shiftâ€",
          "Availability, uses and Impacts of HR Metrics and Analytics in IT & ITES Industry: A Study with Special Reference to Karnataka, India.",
          "FAMILY SUPPORT AND FAMILY WORK ENRICHMENT (FWE) AMONG THE EMPLOYEES IN SERVICE SECTOR: A STUDY WITH SPECIAL REFERENCE TO KARNATAKA"
        ],
        "bio": "SUBHADRA P S is a faculty member in the Master of Business Administration department with experience in academics and research.",
        "photoInitials": "SP",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. VIKRAMA D K",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Master of Business Administration",
        "experience": "19 years",
        "email": "vikramadk@jnnce.ac.in",
        "patents": [],
        "publications": 11,
        "selectedPublications": [
          "Role of woman in development of rural toruism w.s.r. to rural tourism in Malnad region, Karnataka, India",
          "A STUDY ON RURAL TOURISM PROBLEMS AND PROSPECTS IN MALNAD REGION OF KARNATAKA STATE",
          "PROBLEMS AND PROSPECTS OF DIGITAL MARKETING IN RURAL TOURISM WITH SPECIAL REFERENCE TO KARNATAKA STATE, INDIA"
        ],
        "bio": "VIKRAMA D K is a faculty member in the Master of Business Administration department with experience in academics and research.",
        "photoInitials": "VD",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. SRINIVASA MURTHY B V",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Master of Business Administration",
        "experience": "19 years",
        "email": "bvsmurthy@jnnce.ac.in",
        "patents": [],
        "publications": 4,
        "selectedPublications": [
          "Role of MSMEs in Propelling Economic Development - A Case Study of Shivamogga District, Karnataka, India.",
          "Study on Importance and Methods of Digital Payments in India",
          "IMPACT OF CONSUMER DECISION-MAKING ON THE RESTAURANT BUSINESS IN THE ERA OF ONLINE FOOD DELIVERY: A CASE STUDY OF BENGALURU CITY"
        ],
        "bio": "SRINIVASA MURTHY B V is a faculty member in the Master of Business Administration department with experience in academics and research.",
        "photoInitials": "SM",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. PRAVEEN KUMAR B H",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Master of Business Administration",
        "experience": "6 years",
        "email": "praveen@jnnce.ac.in",
        "patents": [],
        "publications": 17,
        "selectedPublications": [
          "â€œA STUDY ON INVENTORY MANAGEMENT PRACTICES AND IMPACT OF INVENTORY MANAGEMENT TECHNIQUES ON PRODUCTIVITY WITH SPECIAL REFERENCE TO SREE SHIVA SAI CAST PRIVATE LIMITED, SHIVAMOGGAâ€",
          "â€œIMPACT OF INSTITUTIONAL ENHANE EMPLOYEE ENGAGEMENTS AND SASTISFACTIONâ€",
          "\"Performance Evaluation of Private Sector Banks in India by Using Camels Model â€“ A Study with Special Reference to Karnataka Bank Private Limited\""
        ],
        "bio": "PRAVEEN KUMAR B H is a faculty member in the Master of Business Administration department with experience in academics and research.",
        "photoInitials": "PK",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. G P NAGESH",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Master of Business Administration",
        "experience": "5 years",
        "email": "nageshgp@jnnce.ac.in",
        "patents": [],
        "publications": 5,
        "selectedPublications": [
          "Book building- A strategic Mechanism for Issue Price Determination in IPOs - A study on Indian Companies",
          "Book building- A strategic tool for price determination in IPOs-A Study",
          "Forex Market v/s Stock Market in India-A desruptive approach"
        ],
        "bio": "G P NAGESH is a faculty member in the Master of Business Administration department with experience in academics and research.",
        "photoInitials": "GP",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. HARSHA C MATHAD",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Master of Business Administration",
        "experience": "5 years",
        "email": "harshacm@jnnce.ac.in",
        "patents": [],
        "publications": 9,
        "selectedPublications": [
          "Effect of COVID-19 on the Share market and Industry â€“ A Special Reference to Indian Steel Industry",
          "A study on Impact of Leverage on the Profitability of the Indian Steel Industry",
          "Changing Scenario of Global steel industry and Indian steel industry"
        ],
        "bio": "HARSHA C MATHAD is a faculty member in the Master of Business Administration department with experience in academics and research.",
        "photoInitials": "HC",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Ms. DIVYA S P",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Master of Business Administration",
        "experience": "9 years",
        "email": "divyasp@jnnce.ac.in",
        "patents": [],
        "publications": 3,
        "selectedPublications": [
          "FBPOPHII",
          "Effectiveness of Loyalty Programs on Customer Retention in E- commerce",
          "Empowering Rural Women: Analyzing Awareness and Usage of Fintech Tools in Shivamogga District"
        ],
        "bio": "DIVYA S P is a faculty member in the Master of Business Administration department with experience in academics and research.",
        "photoInitials": "DS",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. SHARMA K R S",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Master of Business Administration",
        "experience": "3 years",
        "email": "sharmakrs@jnnce.ac.in",
        "patents": [
          "ARTIFICIAL INTELLIGENCE BASED  MULTIMEDIA INTERACTIVE CUSTOMER FEEDBACK KIOSK"
        ],
        "publications": 7,
        "selectedPublications": [
          "Impact of Centralized Blockchain Digital Currency (CBDC): For Financial Inclusion and Sustainability",
          "Green HRM and Teaching Sustainability in higher education Institutions: For Promoting Sustainable Education and Sustainable Development Goals",
          "THE ROLE OF ESG IN E-COMMERCE STARTUPS SMES: FOR SUSTAINABLE INCLUSIVE ECONOMY"
        ],
        "bio": "SHARMA K R S is a faculty member in the Master of Business Administration department with experience in academics and research.",
        "photoInitials": "SK",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. AMRUTHA M A",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Master of Business Administration",
        "experience": "1 years",
        "email": "amruthamurthy75@gmail.com",
        "patents": [],
        "publications": 0,
        "selectedPublications": [],
        "bio": "AMRUTHA M A is a faculty member in the Master of Business Administration department with experience in academics and research.",
        "photoInitials": "AM",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. KAVITHA JANE CRASTA",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Master of Business Administration",
        "experience": "1 years",
        "email": "",
        "patents": [],
        "publications": 0,
        "selectedPublications": [],
        "bio": "KAVITHA JANE CRASTA is a faculty member in the Master of Business Administration department with experience in academics and research.",
        "photoInitials": "KJ",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Ms. RENUKA B LAKKAPPANAVAR",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Master of Business Administration",
        "experience": "1 years",
        "email": "",
        "patents": [],
        "publications": 0,
        "selectedPublications": [],
        "bio": "RENUKA B LAKKAPPANAVAR is a faculty member in the Master of Business Administration department with experience in academics and research.",
        "photoInitials": "RB",
        "photoColor": "#7C3AED"
      }
    ]
  },
  {
    "code": "MECH",
    "slug": "mech",
    "name": "Mechanical Engineering",
    "link": "/departments/mech",
    "intake": 60,
    "duration": "4 Years",
    "overview": "Mechanical Engineering department offers quality technical education and research opportunities.",
    "subjects": [],
    "labs": [],
    "careers": [],
    "eligibility": "10+2 with PCM",
    "affiliation": "VTU, Belagavi",
    "faculty": [
      {
        "name": "Dr. Y VIJAYA KUMAR",
        "designation": "Principal",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Mechanical Engineering",
        "experience": "2 years",
        "email": "principal@jnnce.ac.in",
        "patents": [],
        "publications": 0,
        "selectedPublications": [],
        "bio": "Y VIJAYA KUMAR is a faculty member in the Mechanical Engineering department with experience in academics and research.",
        "photoInitials": "YV",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. BASAVARAJ E",
        "designation": "Professor & Head",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Mechanical Engineering",
        "experience": "35 years",
        "email": "ebasavaraj@jnnce.ac.in",
        "patents": [],
        "publications": 15,
        "selectedPublications": [
          "Sliding Wear Behavior of Nanoclay Filled Polypropylene/Ultra High Molecular Weight Polyethylene/Carbon Short Fiber Nanocomposites",
          "Investigations on the influence of molybdenum disulphide on tensile and dry sliding wear characteristics of nylon 66/carbon black composites",
          "Polycarbonate/Molybdenum Disulfide/Carbon Black Composites: Physicomechanical, Thermal, Wear, and Morphological Properties"
        ],
        "bio": "BASAVARAJ E is a faculty member in the Mechanical Engineering department with experience in academics and research.",
        "photoInitials": "BE",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. SATYAPREMA",
        "designation": "Associate Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Mechanical Engineering",
        "experience": "25 years",
        "email": "spabraham1@jnnce.ac.in",
        "patents": [
          "Extraction and Utilisation of Areca Bunch Fibres",
          "A novel Design of hydraulic jack using android by Bluetooth Connection",
          "AI BASED SMART ROBOTIC DEVICE FOR VEHICLE MANUFACTURER"
        ],
        "publications": 8,
        "selectedPublications": [
          "ANALYSIS OF MACHINING PARAMETER AND SURFACE FINISH OF AlSi ALLOYS WITH GRAIN REFINERS AND / OR MODIFIER",
          "Effect of Grain Refiners and/or Modifiers on the Microstructure and Mechanical Properties of Al-Si Alloy (LM6)",
          "Study of Improvement in Mechanical Properties and Microstructure of LM25 Alloy with the Addition of Grain Refiners / Modifier"
        ],
        "bio": "SATYAPREMA is a faculty member in the Mechanical Engineering department with experience in academics and research.",
        "photoInitials": "S",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. AMITH KUMAR S J",
        "designation": "Associate Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Mechanical Engineering",
        "experience": "20 years",
        "email": "joanesamith@jnnce.ac.in",
        "patents": [
          "An Electric Vehicle",
          "CONVERSION OF FUEL POWERED CAR INTO ECONOMICAL ELECTRIC CAR WITH MANUAL GEARING SYSTEM",
          "DESIGN OPTIMIZATION OF ARECA NUT DEHUSKING MACHINE FOR IMPROVED  EFFICIENCY AND HIGH PRODUCTION RATE",
          "MULTIFUNCTIONAL MECHANISM OF ROBOTIC ARM"
        ],
        "publications": 16,
        "selectedPublications": [
          "Thermal stability and flammability characteristics of phenolic syntactic foam core sandwich composites",
          "Investigations on Fly Ash Reinforced Phenolic Composite for Green Environment",
          "An Experimental Study on Drilling of Jute/Epoxy Composites with Ceramic Fillers"
        ],
        "bio": "AMITH KUMAR S J is a faculty member in the Mechanical Engineering department with experience in academics and research.",
        "photoInitials": "AK",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. SHANTHI KIRAN M",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Mechanical Engineering",
        "experience": "16 years",
        "email": "shanthikiranm@jnnce.ac.in",
        "patents": [],
        "publications": 0,
        "selectedPublications": [],
        "bio": "SHANTHI KIRAN M is a faculty member in the Mechanical Engineering department with experience in academics and research.",
        "photoInitials": "SK",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. SHIVANANDAPPA N D",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Mechanical Engineering",
        "experience": "20 years",
        "email": "nandacng@jnnce.ac.in",
        "patents": [],
        "publications": 4,
        "selectedPublications": [
          "Damage Detection of a Cantilever Beam by Topology Optimization Using Modal Parameter",
          "Fail Safe Design of an Aircraft Stiffened Panel by Stress Intensity Factor Determination Through Modified Virtual Crack Closure Integral Method",
          "Fail Safe Design of Skin and Bulkhead of an Aircraft Stiffened Panel by Residual Strength Evaluation Method"
        ],
        "bio": "SHIVANANDAPPA N D is a faculty member in the Mechanical Engineering department with experience in academics and research.",
        "photoInitials": "SN",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. ABDUL SALEEM S",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Mechanical Engineering",
        "experience": "19 years",
        "email": "sabdulsaleem75@jnnce.ac.in",
        "patents": [],
        "publications": 1,
        "selectedPublications": [
          "Fuel Properties of used Cooking Oil extracted from different Edible Oil Seeds"
        ],
        "bio": "ABDUL SALEEM S is a faculty member in the Mechanical Engineering department with experience in academics and research.",
        "photoInitials": "AS",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. PARAMESHWARA S",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Mechanical Engineering",
        "experience": "14 years",
        "email": "param@jnnce.ac.in",
        "patents": [
          "WAVE CURRENT POWER GENERATION DEVICE",
          "SMART TAMARIND PRESSING SYSTEM",
          "ECO-FRIENDLY SMOKE ZONE UNITS"
        ],
        "publications": 4,
        "selectedPublications": [
          "Vibroacoustic modelling and analysis of segmented aluminum fuselage of transport aircraft with blankets.",
          "Synthesis of Nanostructured ternary Ti based alloy for bio-medical Applications.",
          "MgO Nano-Catalyzed Biodiesel Production from Waste Coconut Oil and Fish Oil Using Response Surface Methodology and Grasshopper Optimization"
        ],
        "bio": "PARAMESHWARA S is a faculty member in the Mechanical Engineering department with experience in academics and research.",
        "photoInitials": "PS",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. PRADEEP N B",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Mechanical Engineering",
        "experience": "13 years",
        "email": "pradeepnb@jnnce.ac.in",
        "patents": [],
        "publications": 8,
        "selectedPublications": [
          "Experimental analysis and Optimization of plasma spray parameters on microhardness and wear loss of Mo-Ni-Cr coated super duplex stainless steel",
          "Optimization for waste coconut and fish oil derived biodiesel with MgO nanoparticle blend: Grey relational analysis, grey wolf optimization, driving training based optimization and election based optimization algorithm",
          "Synthesis and characterization of mechanically alloyed nanostructured ternary titanium based alloy for bio-medical applications"
        ],
        "bio": "PRADEEP N B is a faculty member in the Mechanical Engineering department with experience in academics and research.",
        "photoInitials": "PN",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. RAVI KUMAR B N",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Mechanical Engineering",
        "experience": "13 years",
        "email": "ravidhoddal@jnnce.ac.in",
        "patents": [
          "Baffle for a Cyclone Separator",
          "Efficient Quartz powder filled areca phenolic resin composites for Insulation",
          "SOLAR WATER HEATER BASED COOKING APPLIANCE",
          "PRE-TEMPERING OF ARECA SHEATH IN CONTROLLED ENVIRONMENT",
          "FABRICATION OF ARECA PLATE MACHINE USING SWING MECHANISM"
        ],
        "publications": 7,
        "selectedPublications": [
          "Experimental study of effect of pongamia pod powder on some mechanical, thermal and fire resistance properties of areca phenolic resin composites",
          "Experimental study of Thermal conductivity, Vicat softening point and Ignition time of pongamia pod powder areca phenolic resin composite",
          "Experimental Investigation on thermal properties of pongamia shell powder filled areca phenolic resin composite"
        ],
        "bio": "RAVI KUMAR B N is a faculty member in the Mechanical Engineering department with experience in academics and research.",
        "photoInitials": "RK",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. MANJUNATHA CHARY G H",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Mechanical Engineering",
        "experience": "20 years",
        "email": "manju_gh2006@jnnce.ac.in",
        "patents": [
          "FABRICATION OF COCONUT SHELL PARTICLE REINFORCED EPOXY (CSPE) COMPOSITE SPUR GEAR FOR LOW POWER TRANSMISSION SYSTEMS"
        ],
        "publications": 7,
        "selectedPublications": [
          "Evaluation of natural frequencies and damping ratios of coconut shell particles reinforced epoxy composites",
          "Experimental characterization of coconut shell particle reinforced epoxy composites",
          "Two Body Abrasive Wear of Coconut Shell Particle Reinforced Epoxy Composites: A Taguchi Approach"
        ],
        "bio": "MANJUNATHA CHARY G H is a faculty member in the Mechanical Engineering department with experience in academics and research.",
        "photoInitials": "MC",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. CHETAN C G",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Mechanical Engineering",
        "experience": "6 years",
        "email": "chittaragi.chetan@gmail.com",
        "patents": [],
        "publications": 3,
        "selectedPublications": [
          "Numerical Investigation of Turbulence Effects of Delta Wing Vortex Generators on Thermal Performance of Plate-Fin-And-Oval-Tube Heat Exchanger",
          "Performance analysis of Diesel Engine using Jaggery Based Bioethanol-Diesel Blend",
          "EVALUATION OF PROPERTIES OF BAGASSE AND ARECA SHEATH BRIQUETTES"
        ],
        "bio": "CHETAN C G is a faculty member in the Mechanical Engineering department with experience in academics and research.",
        "photoInitials": "CC",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mr. NAVEEN M R",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Mechanical Engineering",
        "experience": "2 years",
        "email": "naveenmr@jnnce.ac.in",
        "patents": [],
        "publications": 0,
        "selectedPublications": [],
        "bio": "NAVEEN M R is a faculty member in the Mechanical Engineering department with experience in academics and research.",
        "photoInitials": "NM",
        "photoColor": "#7C3AED"
      }
    ]
  },
  {
    "code": "PHY",
    "slug": "phy",
    "name": "Physics",
    "link": "/departments/phy",
    "intake": 60,
    "duration": "4 Years",
    "overview": "Physics department offers quality technical education and research opportunities.",
    "subjects": [],
    "labs": [],
    "careers": [],
    "eligibility": "10+2 with PCM",
    "affiliation": "VTU, Belagavi",
    "faculty": [
      {
        "name": "Dr. RAJPRAKASH H G",
        "designation": "Associate Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Physics",
        "experience": "19 years",
        "email": "prakashraj06@jnnce.ac.in",
        "patents": [
          "STETHOSCOPE FOR MONITORING TREE HEALTH"
        ],
        "publications": 36,
        "selectedPublications": [
          "Structural and electrical characterization studies for ternary composite of polypyrrole",
          "Humidity sensing performance of hybrid nanorods of polyaniline-Yttrium oxide composite prepared by mechanical mixing method",
          "Enhancing humidity sensing performance of polyaniline/water soluble graphene oxide composites"
        ],
        "bio": "RAJPRAKASH H G is a faculty member in the Physics department with experience in academics and research.",
        "photoInitials": "RH",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. NAYANA S G",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Physics",
        "experience": "3 years",
        "email": "nayanasg@jnnce.ac.in",
        "patents": [],
        "publications": 1,
        "selectedPublications": [
          "Mixed Nano Ferrites- Synthesis and Applications in Biomedical and Sensor Field"
        ],
        "bio": "NAYANA S G is a faculty member in the Physics department with experience in academics and research.",
        "photoInitials": "NS",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Mrs. SHWETHA D",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Physics",
        "experience": "3 years",
        "email": "shwethad@jnnce.ac.in",
        "patents": [],
        "publications": 3,
        "selectedPublications": [
          "Polyvinylidene Fluoride (PVDF) crystal structure, PVDF - metal Oxide nano composite thin films characterization, synthesis and properties: A Review",
          "A Review on Properties and Applications of Polyvinylidene Fluoride (PVDF) and Metal Oxide Nanocomposites Thin Films",
          "Synthesis of Polyvinylidene Difluoride (PVDF)-Based Metal Oxide Nanoparticle Nanocomposite Thin Films: A Comprehensive Review"
        ],
        "bio": "SHWETHA D is a faculty member in the Physics department with experience in academics and research.",
        "photoInitials": "SD",
        "photoColor": "#7C3AED"
      },
      {
        "name": "Dr. HARISH B M",
        "designation": "Assistant Professor",
        "qualification": "M.Tech / Ph.D",
        "specialisation": "Physics",
        "experience": "2 years",
        "email": "harishphysics@jnnce.ac.in",
        "patents": [],
        "publications": 0,
        "selectedPublications": [],
        "bio": "HARISH B M is a faculty member in the Physics department with experience in academics and research.",
        "photoInitials": "HB",
        "photoColor": "#7C3AED"
      }
    ]
  }
];

