/**
 * Portfolio Data Configuration for R.M. Nishant Suman
 * Update your information, projects, achievements, and contacts easily here.
 */

const PORTFOLIO_DATA = {
  personal: {
    name: "R.M. Nishant Suman",
    shortName: "Nishant ",
    title: "AI Engineer & Drone Technology Specialist",
    roles: [
      "Technical Lead @ Drone Sarthi Pvt Ltd",
      "AI & Machine Learning Engineer",
      "Drone & UAV Autonomous Systems Architect",
      "IoT & Embedded Hardware Developer",
      "Technical Mentor & Guest Educator"
    ],
    tagline: "Bridging the gap between cutting-edge Artificial Intelligence, Autonomous Drone Technology, and hands-on Embedded IoT systems.",
    aboutBio: `I am a B.Tech Computer Science & Engineering student specializing in Artificial Intelligence, currently serving as the Technical Lead & Manager at Drone Sarthi Private Limited. My passion lies at the intersection of intelligent software and physical hardware—from training deep learning vision models and designing autonomous UAV flight algorithms to engineering IoT telemetry networks and mentoring the next generation of engineers across schools and universities.`,
    location: "India",
    email: "nishantsuman@example.com", // update with your preferred email
    github: "https://github.com",       // update with your github profile
    linkedin: "https://linkedin.com",   // update with your linkedin profile
    twitter: "https://twitter.com",     // update with your twitter profile
    status: "Open to Collaborations, AI/Drone Consulting & High-Impact Opportunities",
    resumeLink: "#",                    // put your resume PDF link or path here (e.g., 'assets/resume.pdf')
    profileImage: "assets/Nishant.png"  // Drop your photo at assets/profile.jpg (or .png)
  },

  stats: [
    { label: "Technical Events & Hackathons Won", value: "10+", icon: "trophy" },
    { label: "Students & Mentees Trained", value: "500+", icon: "users" },
    { label: "AI, Drone & IoT Projects", value: "15+", icon: "cpu" },
    { label: "Leadership & Management", value: "Tech Lead", icon: "shield-check" }
  ],

  experiences: [
    {
      role: "Technical Lead & Manager",
      company: "Drone Sarthi Private Limited",
      period: "Present",
      type: "Full-Time Leadership",
      description: "Spearheading engineering initiatives across UAV design, autonomous flight integration, telemetry architectures, and AI-driven drone solutions.",
      highlights: [
        "Managing cross-disciplinary technical teams combining software, avionics, and hardware assembly.",
        "Developing AI computer vision pipelines for real-time aerial object detection and terrain tracking.",
        "Designing robust ground control systems, fail-safe communication protocols, and sensor payloads.",
        "Driving client-focused innovation and technical product roadmaps from concept to deployment."
      ],
      tags: ["Drone Tech", "PX4/ArduPilot", "Computer Vision", "Team Leadership", "IoT Telemetry"]
    },
    {
      role: "AI & Machine Learning Intern",
      company: "Industry Internship Selection",
      period: "Selected / Completed",
      type: "Internship",
      description: "Selected through competitive evaluation to architect and train machine learning and deep learning pipelines.",
      highlights: [
        "Engineered predictive machine learning models and computer vision pipelines using Python and PyTorch.",
        "Processed large-scale image and sensor datasets with automated preprocessing and augmentation workflows.",
        "Optimized deep learning inference models for low-latency edge deployment."
      ],
      tags: ["Python", "PyTorch", "OpenCV", "Deep Learning", "Edge AI"]
    },
    {
      role: "Technical Mentor & Educator",
      company: "Schools, Colleges & Tech Bootcamps",
      period: "Ongoing",
      type: "Mentorship & Training",
      description: "Empowering young students, undergraduate engineers, and robotics enthusiasts through structured hands-on masterclasses.",
      highlights: [
        "Delivered interactive workshops on Artificial Intelligence, Machine Learning fundamentals, and IoT prototyping.",
        "Conducted live drone assembly, flight safety, and autonomous mission planning training sessions.",
        "Mentored student teams for national-level hackathons, tech exhibitions, and project competitions."
      ],
      tags: ["Mentorship", "Public Speaking", "STEM Education", "Robotics Workshops", "AI Training"]
    }
  ],

  skills: {
    ai_ml: [
      { name: "Computer Vision & OpenCV", level: 92 },
      { name: "Python & Deep Learning (PyTorch/TF)", level: 88 },
      { name: "YOLO Object Detection & Tracking", level: 90 },
      { name: "Machine Learning (Scikit-Learn, Pandas)", level: 94 },
      { name: "Edge AI & Model Optimization", level: 82 },
      { name: "Natural Language Processing (NLP)", level: 78 }
    ],
    drone_tech: [
      { name: "Autonomous UAV Mission Planning", level: 95 },
      { name: "PX4 / ArduPilot / QGroundControl", level: 90 },
      { name: "Flight Controller Configuration", level: 92 },
      { name: "Drone Telemetry & Radio Links", level: 88 },
      { name: "Aerial Payload & Camera Integration", level: 85 },
      { name: "Drone Safety & Fail-safe Systems", level: 94 }
    ],
    iot_embedded: [
      { name: "ESP32 / ESP8266 & Arduino", level: 92 },
      { name: "Sensor Integration (IMU, GPS, LiDAR)", level: 88 },
      { name: "MQTT, HTTP & WebSockets Telemetry", level: 86 },
      { name: "MicroPython & Embedded C/C++", level: 80 },
      { name: "Hardware Prototyping & PCB Basics", level: 75 }
    ],
    tools_leadership: [
      { name: "Technical Team Leadership & Management", level: 95 },
      { name: "Public Speaking & Workshop Delivery", level: 92 },
      { name: "Git, GitHub & Version Control", level: 90 },
      { name: "FastAPI / Flask & REST APIs", level: 84 },
      { name: "Linux & ROS (Robot Operating System)", level: 78 }
    ]
  },

  projects: [
    {
      id: "drone-ai-surveillance",
      title: "Autonomous Aerial Surveillance & Target Tracking System",
      category: "drones",
      badge: "Flagship Drone Project",
      shortDesc: "A complete autonomous UAV system equipped with edge AI for real-time human, vehicle, and perimeter surveillance.",
      imageIcon: "plane",
      tech: ["Python", "YOLOv8", "OpenCV", "PX4 Autopilot", "Raspberry Pi", "Telemetry"],
      features: [
        "Real-time object detection and classification running directly onboard via edge computing.",
        "Automated target tracking and waypoint adjustment based on visual feedback.",
        "Encrypted long-range telemetry stream to custom Ground Control Station.",
        "Geofencing and automatic return-to-launch (RTL) fail-safe on low battery or signal loss."
      ],
      github: "https://github.com",
      demo: "#"
    },
    {
      id: "smart-iot-telemetry",
      title: "Smart IoT Ground Station & Telemetry Hub",
      category: "iot",
      badge: "Hardware + Cloud",
      shortDesc: "A real-time telemetry station aggregating high-frequency sensor streams (GPS, altitude, battery health, IMU) over MQTT.",
      imageIcon: "activity",
      tech: ["ESP32", "MQTT", "WebSockets", "Node.js", "Chart.js", "C++"],
      features: [
        "Sub-50ms latency telemetry transmission using lightweight MQTT protocol.",
        "Interactive dashboard displaying live 3D orientation, flight vectors, and battery health.",
        "Automated alerts for anomalies in motor vibration and temperature spikes.",
        "Offline data logging to high-speed micro-SD with cloud synchronization."
      ],
      github: "https://github.com",
      demo: "#"
    },
    {
      id: "precision-agri-ai",
      title: "AI-Powered Precision Agriculture & Crop Health Analyzer",
      category: "ai",
      badge: "AI + Drones",
      shortDesc: "Deep learning pipeline processing aerial multispectral imagery to detect crop stress, weed infestations, and yield estimates.",
      imageIcon: "sparkles",
      tech: ["PyTorch", "OpenCV", "Segmentation", "FastAPI", "Python"],
      features: [
        "Automated NDVI calculation and crop health heatmapping from aerial drone captures.",
        "Semantic segmentation model identifying weed clusters with >93% validation accuracy.",
        "Automated report generation with targeted pesticide dosage and fertilizer recommendations.",
        "Cloud-ready API for instant batch processing of flight orthomosaics."
      ],
      github: "https://github.com",
      demo: "#"
    },
    {
      id: "gesture-uav-control",
      title: "Vision-Based Gesture Controlled UAV Flight Interface",
      category: "ai",
      badge: "HCI Innovation",
      shortDesc: "Touchless flight control system allowing operators to pilot drones and trigger maneuvers using hand gesture recognition.",
      imageIcon: "hand-metal",
      tech: ["MediaPipe", "OpenCV", "Python", "MavLink", "Serial Comm"],
      features: [
        "Real-time 21-point hand landmark tracking at 60 FPS without specialized gloves.",
        "Custom gesture vocabulary mapping natural hand poses to pitch, roll, throttle, and yaw.",
        "MavLink command translation with integrated safety deadzones to prevent accidental triggers.",
        "Demonstrated in educational workshops to show the power of Computer Vision."
      ],
      github: "https://github.com",
      demo: "#"
    },
    {
      id: "predictive-maintenance-iot",
      title: "Industrial Sensor Predictive Maintenance System",
      category: "iot",
      badge: "IoT + ML",
      shortDesc: "An IoT condition-monitoring device leveraging vibration and thermal sensors to forecast mechanical failures.",
      imageIcon: "gauge",
      tech: ["ESP32", "Scikit-Learn", "Fast Fourier Transform (FFT)", "C++", "Python"],
      features: [
        "Edge-computed FFT on raw accelerometer data to identify harmonic vibration anomalies.",
        "Random Forest model predicting Remaining Useful Life (RUL) with high precision.",
        "Instant SMS/Telegram alerts triggered when degradation thresholds are exceeded.",
        "Low-power sleep modes enabling months of standalone battery operation."
      ],
      github: "https://github.com",
      demo: "#"
    },
    {
      id: "stem-drone-curriculum",
      title: "Interactive Drone & AI Masterclass Platform for Schools",
      category: "mentorship",
      badge: "Education & Outreach",
      shortDesc: "A modular, hands-on curriculum and live demonstration kit designed to teach school & college students AI and UAV fundamentals.",
      imageIcon: "graduation-cap",
      tech: ["STEM Kit", "Block Coding", "Python", "Microcontrollers", "Mentorship"],
      features: [
        "Delivered across multiple educational institutions with 500+ participants.",
        "Gamified drone obstacle missions and AI vision mini-games for rapid engagement.",
        "Step-by-step practical guides from basic soldering to autonomous Python scripting.",
        "Highly praised by educators and school leadership for inspiring young innovators."
      ],
      github: "#",
      demo: "#"
    }
  ],

  achievements: [
    {
      title: "Multiple Hackathon & Event Victories",
      organization: "National & Regional Tech Fests",
      badge: "Winner",
      description: "Won multiple top honors and hackathons with innovative hardware-software solutions combining AI, IoT, and autonomous robotics.",
      icon: "award"
    },
    {
      title: "Competitive Internship Selection",
      organization: "Top Tech Organizations",
      badge: "Selected",
      description: "Earned coveted internship selections through rigorous technical assessments, problem solving, and demonstrated project impact in AI/ML.",
      icon: "check-circle"
    },
    {
      title: "Technical Lead Appointment",
      organization: "Drone Sarthi Private Limited",
      badge: "Leadership",
      description: "Entrusted with heading the technical division, managing engineering teams, and guiding UAV & AI product development.",
      icon: "briefcase"
    },
    {
      title: "Prolific Mentor & Keynote Speaker",
      organization: "Schools, Colleges & Tech Clubs",
      badge: "Mentorship",
      description: "Invited by various academic institutions to deliver technical sessions, hands-on masterclasses, and judge technical competitions.",
      icon: "star"
    }
  ],

  mentorship: {
    intro: "Believing that true mastery comes from sharing knowledge, I actively conduct hands-on workshops, bootcamps, and technical mentoring sessions for schools, colleges, and university tech clubs.",
    topics: [
      {
        title: "Artificial Intelligence & Computer Vision 101",
        description: "From Python fundamentals to building real-time face detection, object tracking, and neural networks from scratch.",
        audience: "High School & College Students"
      },
      {
        title: "Hands-on Drone Building & Autonomous UAVs",
        description: "Deconstructing drone anatomy, flight dynamics, transmitter binding, and autonomous mission planning with ArduPilot/PX4.",
        audience: "Engineering Students & Hobbyists"
      },
      {
        title: "Internet of Things (IoT) & Smart Prototyping",
        description: "Connecting microcontrollers (ESP32/Arduino) to sensors, cloud brokers, and building real-world automation projects.",
        audience: "Tech Enthusiasts & School STEM Labs"
      },
      {
        title: "Winning Hackathons & Engineering Mindset",
        description: "How to conceptualize, prototype under time pressure, build MVPs, and pitch technical projects to judges effectively.",
        audience: "Hackathon Participants & Innovators"
      }
    ],
    statsSummary: "Over 500+ students inspired across 10+ technical workshops, school bootcamps, and college guest lectures."
  }
};
