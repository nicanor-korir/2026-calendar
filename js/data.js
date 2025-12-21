// 2026 Tech Events Calendar - Data Layer
// Single source of truth for all events

const EVENTS_DATA = {
  meta: {
    title: "2026 Tech Events Calendar",
    subtitle: "Your curated roadmap to impactful AI, Robotics & Startup events in 2026",
    totalEvents: 78,
    totalPrizes: "$2M+",
    berlinEvents: 9,
    cfpCount: 6
  },

  // Filter definitions for each page
  filters: {
    events: [
      { id: "all", label: "All Events", icon: null },
      { id: "saved", label: "My Events", icon: "⭐", showCount: true },
      { id: "new", label: "New", icon: "✨" },
      { id: "berlin", label: "Berlin", icon: "🇩🇪" },
      { id: "mega-conference", label: "Mega Conferences", icon: "🌐" },
      { id: "robotics-ai", label: "Robotics & AI", icon: "🤖" },
      { id: "frontend", label: "Frontend/JS", icon: "⚛️" },
      { id: "devops", label: "DevOps/Cloud", icon: "☁️" },
      { id: "security", label: "Security", icon: "🔐" }
    ],
    hackathons: [
      { id: "all", label: "All", icon: null },
      { id: "saved", label: "My Events", icon: "⭐", showCount: true },
      { id: "new", label: "New", icon: "✨" },
      { id: "hackathon", label: "Hackathons", icon: "💻" },
      { id: "startup", label: "Startup", icon: "🚀" },
      { id: "competition", label: "Competitions", icon: "🏆" },
      { id: "africa", label: "Africa Focus", icon: "🌍" }
    ],
    cfp: [
      { id: "all", label: "All CFPs", icon: null },
      { id: "saved", label: "My Events", icon: "⭐", showCount: true },
      { id: "new", label: "New", icon: "✨" },
      { id: "ml", label: "Machine Learning", icon: "🤖" },
      { id: "cv", label: "Computer Vision", icon: "👁️" },
      { id: "robotics", label: "Robotics", icon: "🦾" }
    ]
  },

  // All events
  events: [
    // ========================================
    // HACKATHONS & COMPETITIONS PAGE
    // ========================================
    {
      id: "surge-hack",
      title: "Launch & Fund: AI Meets Robotics",
      organizer: "Lablab.ai × Surge",
      icon: "🤖",
      page: "hackathons",
      category: ["hackathon", "startup"],
      type: [],
      tags: [
        { text: "AI", color: "default" },
        { text: "Robotics", color: "default" },
        { text: "Startup", color: "purple" },
        { text: "$1M Series", color: "gold" }
      ],
      dates: {
        start: "2026-02-06T00:00:00",
        end: "2026-02-15T23:59:59",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Feb", day: "6-15" },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: true,
      prize: { amount: "Part of $1M Prize Pool", icon: "💰" },
      location: { type: "hybrid", city: null, country: null, display: "Online + On-site" },
      modal: {
        overview: "Part of the $1,000,000 startup challenge series. Build AI + Robotics solutions, compete in hybrid format (online + on-site), and launch your own startup with potential funding.",
        requirements: [
          "Build a solution combining AI and Robotics",
          "Team formation allowed during hackathon",
          "Working prototype/MVP by submission deadline",
          "Pitch presentation for on-site phase",
          "Open to developers, founders, and innovators globally"
        ],
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Page", url: "https://lablab.ai/event/launch-fund-ai-meets-robotics" },
          { icon: "📅", label: "All Lablab Events", url: "https://lablab.ai/event" }
        ]
      },
      links: {
        register: "https://lablab.ai/event/launch-fund-ai-meets-robotics",
        website: "https://lablab.ai/event/launch-fund-ai-meets-robotics"
      }
    },
    {
      id: "ms-ai-agents",
      title: "AI Agents Hackathon",
      organizer: "Microsoft Reactor",
      icon: "🤖",
      page: "hackathons",
      category: ["hackathon"],
      type: [],
      tags: [
        { text: "AI Agents", color: "default" },
        { text: "Virtual", color: "purple" }
      ],
      dates: {
        start: "2026-01-22T16:00:00Z",
        end: "2026-02-12T23:59:59Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "22" },
      eventType: "Hackathon",
      isUrgent: true,
      isFeatured: false,
      prize: { amount: "Cash Prizes", icon: "💰" },
      location: { type: "online", city: null, country: null, display: "Virtual" },
      modal: {
        overview: "A FREE three-week virtual hackathon to dive deep into AI agent development. Build powerful AI agents using cutting-edge tools and compete for cash prizes. Perfect for developers wanting hands-on experience with AI agents.",
        requirements: [
          "Build an AI agent or agentic workflow",
          "Agents should be autonomous, adaptive, and impactful",
          "Can focus on workflow automation, digital companions, sustainability, industry solutions, or education",
          "Low-code/no-code applications accepted",
          "Submit your hack for judging"
        ],
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Register", url: "https://developer.microsoft.com/en-us/reactor/events/25323/" },
          { icon: "📖", label: "Official Rules", url: "https://microsoft.github.io/AI_Agents_Hackathon/" }
        ]
      },
      links: {
        register: "https://developer.microsoft.com/en-us/reactor/events/25323/",
        website: "https://microsoft.github.io/AI_Agents_Hackathon/"
      }
    },
    {
      id: "rice-bpc",
      title: "Rice Business Plan Competition",
      organizer: "Rice University",
      icon: "🎓",
      page: "hackathons",
      category: ["startup", "competition"],
      type: [],
      tags: [
        { text: "Startup", color: "default" },
        { text: "Graduate", color: "purple" }
      ],
      dates: {
        start: "2026-04-02T00:00:00",
        end: "2026-04-04T23:59:59",
        deadline: "2026-01-31T23:59:00",
        countdownTarget: "deadline"
      },
      dateDisplay: { month: "Jan", day: "31" },
      eventType: "Competition",
      isUrgent: true,
      isFeatured: false,
      prize: { amount: "$1M+ in Prizes", icon: "💰" },
      location: { type: "onsite", city: "Houston", country: "USA", display: "Houston, TX" },
      modal: {
        overview: "The Rice Business Plan Competition is the world's largest and richest graduate-level student startup competition. It provides student entrepreneurs with real-world feedback and exposure to investors while competing for over $1 million in prizes.",
        requirements: [
          "At least one graduate student must be on the founding team",
          "Must have a viable technology-based startup concept",
          "Submit a detailed business plan",
          "Present to panels of investors and executives"
        ],
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://rbpc.rice.edu/" },
          { icon: "📄", label: "Apply Now", url: "https://rbpc.rice.edu/apply" }
        ]
      },
      links: {
        register: "https://rbpc.rice.edu/apply",
        website: "https://rbpc.rice.edu/"
      }
    },
    {
      id: "hult-prize",
      title: "Hult Prize 2026",
      organizer: "Hult Prize Foundation",
      icon: "🌍",
      page: "hackathons",
      category: ["startup", "competition", "africa"],
      type: [],
      tags: [
        { text: "Social Impact", color: "default" },
        { text: "SDGs", color: "default" },
        { text: "Global", color: "purple" }
      ],
      dates: {
        start: "2026-09-01T00:00:00",
        end: "2026-09-30T23:59:59",
        deadline: "2026-02-28T23:59:59",
        countdownTarget: "deadline"
      },
      dateDisplay: { month: "Feb", day: "28" },
      eventType: "Competition",
      isUrgent: false,
      isFeatured: false,
      prize: { amount: "$1M USD Grand Prize", icon: "💰" },
      location: { type: "hybrid", city: null, country: null, display: "Global" },
      modal: {
        overview: "The Hult Prize challenges students to solve the world's most pressing social issues. Teams compete for $1 million in startup funding to launch sustainable social enterprises.",
        requirements: [
          "Teams of 3-4 university students",
          "Address the annual challenge theme",
          "Progress through campus, regional, and global rounds",
          "Develop a viable, scalable social enterprise"
        ],
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://www.hultprize.org/" },
          { icon: "📄", label: "Register", url: "https://www.hultprize.org/compete/" }
        ]
      },
      links: {
        register: "https://www.hultprize.org/compete/",
        website: "https://www.hultprize.org/"
      }
    },
    {
      id: "gdsc-solution",
      title: "Google Solution Challenge",
      organizer: "Google Developer Student Clubs",
      icon: "🎯",
      page: "hackathons",
      category: ["hackathon", "competition"],
      type: [],
      tags: [
        { text: "Google Tech", color: "default" },
        { text: "SDGs", color: "default" },
        { text: "Students", color: "purple" }
      ],
      dates: {
        start: "2026-01-01T00:00:00",
        end: "2026-03-31T23:59:59",
        deadline: "2026-02-22T23:59:59",
        countdownTarget: "deadline"
      },
      dateDisplay: { month: "Feb", day: "22" },
      eventType: "Challenge",
      isUrgent: false,
      isFeatured: false,
      prize: { amount: "$3,000/member (Top 3)", icon: "💰" },
      location: { type: "online", city: null, country: null, display: "Virtual" },
      modal: {
        overview: "The Google Solution Challenge invites university students to build solutions using Google technologies to address one or more of the United Nations' 17 Sustainable Development Goals.",
        requirements: [
          "Must be a GDSC member or university student",
          "Use one or more Google products/platforms",
          "Address at least one UN SDG",
          "Submit a working demo and video"
        ],
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://developers.google.com/community/gdsc-solution-challenge" },
          { icon: "📖", label: "Resources", url: "https://developers.google.com/community/gdsc-solution-challenge/resources" }
        ]
      },
      links: {
        register: "https://developers.google.com/community/gdsc-solution-challenge",
        website: "https://developers.google.com/community/gdsc-solution-challenge"
      }
    },
    {
      id: "hello-tomorrow",
      title: "Hello Tomorrow Challenge",
      organizer: "Hello Tomorrow",
      icon: "🔬",
      page: "hackathons",
      category: ["startup", "competition"],
      type: [],
      tags: [
        { text: "Deep Tech", color: "default" },
        { text: "Startup", color: "default" },
        { text: "Global", color: "purple" }
      ],
      dates: {
        start: "2026-06-11T00:00:00",
        end: "2026-06-12T23:59:59",
        deadline: "2026-03-15T23:59:59",
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jun", day: "11" },
      eventType: "Deep Tech",
      isUrgent: false,
      isFeatured: false,
      prize: { amount: "€100K+ Prizes", icon: "💰" },
      location: { type: "onsite", city: "Paris", country: "France", display: "Paris, France" },
      modal: {
        overview: "The Hello Tomorrow Global Challenge is the world's leading deep tech startup competition. It connects science entrepreneurs with investors, corporates, and mentors to transform breakthrough technologies into global solutions.",
        requirements: [
          "Deep tech startup with proprietary technology",
          "Technology ready for commercialization (TRL 3+)",
          "Focus on AI, Energy, Health, Industry, or Space tracks"
        ],
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://hello-tomorrow.org/global-challenge/" }
        ]
      },
      links: {
        register: "https://hello-tomorrow.org/global-challenge/",
        website: "https://hello-tomorrow.org/"
      }
    },
    {
      id: "abcc",
      title: "Africa Business Concept Challenge",
      organizer: "GBSN",
      icon: "🌍",
      page: "hackathons",
      category: ["competition", "africa", "startup"],
      type: [],
      tags: [
        { text: "Africa", color: "default" },
        { text: "Business", color: "default" },
        { text: "Students", color: "purple" }
      ],
      dates: {
        start: "2026-03-01T00:00:00",
        end: "2026-03-31T23:59:59",
        deadline: "2026-02-15T23:59:59",
        countdownTarget: "start"
      },
      dateDisplay: { month: "Mar", day: "TBA" },
      eventType: "Challenge",
      isUrgent: false,
      isFeatured: false,
      prize: { amount: "Prizes + Mentorship", icon: "🏆" },
      location: { type: "hybrid", city: null, country: null, display: "Africa-wide" },
      modal: {
        overview: "The Africa Business Concept Challenge empowers African students to develop innovative business ideas addressing local and regional challenges.",
        requirements: [
          "African university students",
          "Business concept addressing African challenges",
          "Team of 2-5 members"
        ],
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "GBSN Website", url: "https://gbsn.org/" }
        ]
      },
      links: {
        register: "https://gbsn.org/",
        website: "https://gbsn.org/"
      }
    },
    {
      id: "ats-awards",
      title: "Africa Tech Summit Awards 2026",
      organizer: "Africa Tech Summit",
      icon: "🏆",
      page: "hackathons",
      category: ["competition", "africa"],
      type: [],
      tags: [
        { text: "Africa", color: "default" },
        { text: "Tech", color: "default" },
        { text: "Awards", color: "purple" }
      ],
      dates: {
        start: "2026-02-01T00:00:00",
        end: "2026-02-28T23:59:59",
        deadline: "2026-01-15T23:59:59",
        countdownTarget: "start"
      },
      dateDisplay: { month: "Feb", day: "TBA" },
      eventType: "Awards",
      isUrgent: false,
      isFeatured: false,
      prize: { amount: "Recognition + Prizes", icon: "🏆" },
      location: { type: "onsite", city: "Nairobi", country: "Kenya", display: "Nairobi, Kenya" },
      modal: {
        overview: "The Africa Tech Summit Awards celebrate the most innovative tech companies and leaders transforming Africa's digital economy.",
        requirements: [
          "African tech company or founder",
          "Demonstrated innovation and impact",
          "Operating in Africa"
        ],
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://africatechsummit.com/" }
        ]
      },
      links: {
        register: "https://africatechsummit.com/",
        website: "https://africatechsummit.com/"
      }
    },
    {
      id: "developpp",
      title: "develoPPP Ventures 2026",
      organizer: "German Federal Ministry (BMZ)",
      icon: "💰",
      page: "hackathons",
      category: ["startup", "africa"],
      type: [],
      tags: [
        { text: "Funding", color: "default" },
        { text: "Africa", color: "default" },
        { text: "Development", color: "purple" }
      ],
      dates: {
        start: "2026-01-01T00:00:00",
        end: "2026-12-31T23:59:59",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Open", day: "2026" },
      eventType: "Funding",
      isUrgent: false,
      isFeatured: false,
      prize: { amount: "Up to €200K Funding", icon: "💰" },
      location: { type: "hybrid", city: null, country: null, display: "Global" },
      modal: {
        overview: "develoPPP Ventures provides funding and support for startups working on development challenges in emerging markets, with a focus on Africa.",
        requirements: [
          "Startup with development impact focus",
          "Working in emerging markets",
          "Scalable business model"
        ],
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://www.developpp.de/" }
        ]
      },
      links: {
        register: "https://www.developpp.de/",
        website: "https://www.developpp.de/"
      }
    },

    // ========================================
    // CALL FOR PAPERS PAGE
    // ========================================
    {
      id: "ijcai",
      title: "IJCAI-ECAI 2026",
      organizer: "International Joint Conference on AI",
      icon: "🧠",
      page: "cfp",
      category: ["cfp"],
      type: ["ml"],
      tags: [
        { text: "AI", color: "default" },
        { text: "Academic", color: "purple" }
      ],
      dates: {
        start: "2026-08-01T00:00:00",
        end: "2026-08-07T23:59:59",
        deadline: "2026-01-19T23:59:59",
        countdownTarget: "deadline"
      },
      dateDisplay: { month: "Jan", day: "19" },
      eventType: "CFP",
      isUrgent: true,
      isFeatured: false,
      prize: null,
      location: { type: "onsite", city: "Montreal", country: "Canada", display: "Montreal, Canada" },
      modal: {
        overview: "IJCAI is the premier international gathering of researchers in Artificial Intelligence. The conference covers all areas of AI research.",
        requirements: null,
        keyDates: [
          { label: "Abstract Deadline", value: "January 15, 2026" },
          { label: "Paper Deadline", value: "January 19, 2026" },
          { label: "Conference", value: "August 1-7, 2026" }
        ],
        topics: [
          "Machine Learning",
          "Natural Language Processing",
          "Computer Vision",
          "Robotics & Autonomous Systems",
          "Knowledge Representation"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://ijcai.org/" }
        ]
      },
      links: {
        register: "https://ijcai.org/",
        website: "https://ijcai.org/"
      }
    },
    {
      id: "icml",
      title: "ICML 2026",
      organizer: "International Conference on Machine Learning",
      icon: "🤖",
      page: "cfp",
      category: ["cfp"],
      type: ["ml"],
      tags: [
        { text: "Machine Learning", color: "default" },
        { text: "Academic", color: "purple" }
      ],
      dates: {
        start: "2026-07-07T00:00:00",
        end: "2026-07-11T23:59:59",
        deadline: "2026-01-29T12:00:00Z",
        abstractDeadline: "2026-01-24T12:00:00Z",
        countdownTarget: "deadline"
      },
      dateDisplay: { month: "Jan", day: "29" },
      eventType: "CFP",
      isUrgent: true,
      isFeatured: false,
      prize: null,
      location: { type: "onsite", city: "Vienna", country: "Austria", display: "Vienna, Austria" },
      modal: {
        overview: "ICML is the premier gathering of professionals dedicated to the advancement of the branch of artificial intelligence known as machine learning.",
        requirements: null,
        keyDates: [
          { label: "Abstract Deadline", value: "January 24, 2026 (12:00 PM UTC)" },
          { label: "Paper Deadline", value: "January 29, 2026 (12:00 PM UTC)" },
          { label: "Conference", value: "July 7-11, 2026" }
        ],
        topics: [
          "Deep Learning & Neural Networks",
          "Reinforcement Learning",
          "Optimization & Theory",
          "Probabilistic Methods",
          "Applications of ML"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://icml.cc/" }
        ]
      },
      links: {
        register: "https://icml.cc/",
        website: "https://icml.cc/"
      }
    },
    {
      id: "eccv",
      title: "ECCV 2026",
      organizer: "European Conference on Computer Vision",
      icon: "👁️",
      page: "cfp",
      category: ["cfp"],
      type: ["cv"],
      tags: [
        { text: "Computer Vision", color: "default" },
        { text: "Academic", color: "purple" }
      ],
      dates: {
        start: "2026-09-28T00:00:00",
        end: "2026-10-03T23:59:59",
        deadline: "2026-03-06T23:59:59",
        countdownTarget: "deadline"
      },
      dateDisplay: { month: "Mar", day: "6" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: { type: "onsite", city: "Zurich", country: "Switzerland", display: "Zurich, Switzerland" },
      modal: {
        overview: "ECCV is a biennial research conference on computer vision, held in Europe. It is one of the top conferences in computer vision.",
        requirements: null,
        keyDates: [
          { label: "Paper Deadline", value: "March 6, 2026" },
          { label: "Conference", value: "September 28 - October 3, 2026" }
        ],
        topics: [
          "3D Vision",
          "Image Recognition",
          "Video Understanding",
          "Deep Learning for Vision",
          "Medical Imaging"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://eccv.ecva.net/" }
        ]
      },
      links: {
        register: "https://eccv.ecva.net/",
        website: "https://eccv.ecva.net/"
      }
    },
    {
      id: "cvpr",
      title: "CVPR 2026",
      organizer: "Computer Vision & Pattern Recognition",
      icon: "📷",
      page: "cfp",
      category: ["cfp"],
      type: ["cv"],
      tags: [
        { text: "Computer Vision", color: "default" },
        { text: "Pattern Recognition", color: "default" },
        { text: "Academic", color: "purple" }
      ],
      dates: {
        start: "2026-06-14T00:00:00",
        end: "2026-06-20T23:59:59",
        deadline: "2026-11-15T23:59:59",
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jun", day: "14" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: { type: "onsite", city: "Nashville", country: "USA", display: "Nashville, USA" },
      modal: {
        overview: "CVPR is the premier annual computer vision event comprising the main conference and several co-located workshops and tutorials.",
        requirements: null,
        keyDates: [
          { label: "Paper Deadline", value: "November 2025 (for 2026)" },
          { label: "Conference", value: "June 14-20, 2026" }
        ],
        topics: [
          "Computer Vision",
          "Pattern Recognition",
          "Deep Learning",
          "3D Vision",
          "Autonomous Systems"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://cvpr.thecvf.com/" }
        ]
      },
      links: {
        register: "https://cvpr.thecvf.com/",
        website: "https://cvpr.thecvf.com/"
      }
    },
    {
      id: "icra",
      title: "ICRA 2026",
      organizer: "IEEE Robotics and Automation",
      icon: "🦾",
      page: "cfp",
      category: ["cfp"],
      type: ["robotics"],
      tags: [
        { text: "Robotics", color: "default" },
        { text: "Automation", color: "default" },
        { text: "Academic", color: "purple" }
      ],
      dates: {
        start: "2026-06-01T00:00:00",
        end: "2026-06-05T23:59:59",
        deadline: "2026-09-15T23:59:59",
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jun", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: { type: "onsite", city: "Vienna", country: "Austria", display: "Vienna, Austria" },
      modal: {
        overview: "ICRA is the IEEE flagship conference on robotics and automation. It brings together the world's top researchers in robotics.",
        requirements: null,
        keyDates: [
          { label: "Paper Deadline", value: "September 15, 2025 (for 2026)" },
          { label: "Conference", value: "June 1-5, 2026" }
        ],
        topics: [
          "Robot Manipulation",
          "Autonomous Navigation",
          "Human-Robot Interaction",
          "Robot Learning",
          "Swarm Robotics"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://www.ieee-ras.org/conferences-workshops/fully-sponsored/icra" }
        ]
      },
      links: {
        register: "https://www.ieee-ras.org/conferences-workshops/fully-sponsored/icra",
        website: "https://www.ieee-ras.org/conferences-workshops/fully-sponsored/icra"
      }
    },
    {
      id: "neurips",
      title: "NeurIPS 2026",
      organizer: "Neural Information Processing Systems",
      icon: "🧬",
      page: "cfp",
      category: ["cfp"],
      type: ["ml"],
      tags: [
        { text: "Neural Networks", color: "default" },
        { text: "ML", color: "default" },
        { text: "Research", color: "purple" }
      ],
      dates: {
        start: "2026-12-06T00:00:00",
        end: "2026-12-12T23:59:59",
        deadline: "2026-05-15T23:59:59",
        countdownTarget: "start"
      },
      dateDisplay: { month: "Dec", day: "6" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: { type: "onsite", city: "Sydney", country: "Australia", display: "Sydney, Australia" },
      modal: {
        overview: "NeurIPS is one of the most prestigious conferences in machine learning and computational neuroscience. It features cutting-edge research in neural networks and deep learning.",
        requirements: null,
        keyDates: [
          { label: "Paper Deadline", value: "May 15, 2026" },
          { label: "Conference", value: "December 6-12, 2026" }
        ],
        topics: [
          "Deep Learning",
          "Reinforcement Learning",
          "Generative Models",
          "Optimization",
          "Neuroscience"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://neurips.cc/" }
        ]
      },
      links: {
        register: "https://neurips.cc/",
        website: "https://neurips.cc/"
      }
    },

    // ========================================
    // EVENTS PAGE (Conferences & Summits)
    // ========================================
    {
      id: "rethink-iam",
      title: "Rethink! IAM Berlin",
      organizer: "Rethink! IT Events",
      icon: "🔐",
      page: "events",
      category: [],
      type: ["security", "berlin"],
      tags: [
        { text: "Identity", color: "default" },
        { text: "Security", color: "default" },
        { text: "Berlin", color: "purple" }
      ],
      dates: {
        start: "2026-03-19T09:00:00",
        end: "2026-03-19T18:00:00",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Mar", day: "19" },
      eventType: "Security",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: { type: "onsite", city: "Berlin", country: "Germany", display: "Berlin, Germany" },
      modal: {
        overview: "Rethink! IAM is a premier conference focused on Identity and Access Management, cybersecurity, and digital identity solutions. Network with security professionals and learn about the latest trends.",
        requirements: null,
        keyDates: null,
        topics: [
          "Zero Trust Architecture",
          "Identity Governance & Administration",
          "Privileged Access Management",
          "Customer Identity & Access Management (CIAM)",
          "Multi-Factor Authentication"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://rethink-iam.de/" }
        ]
      },
      links: {
        register: "https://rethink-iam.de/",
        website: "https://rethink-iam.de/"
      }
    },
    {
      id: "rise-of-ai",
      title: "Rise of AI Conference",
      organizer: "Rise of AI",
      icon: "🤖",
      page: "events",
      category: [],
      type: ["robotics-ai", "berlin"],
      tags: [
        { text: "AI", color: "default" },
        { text: "German Ecosystem", color: "default" },
        { text: "Berlin", color: "purple" }
      ],
      dates: {
        start: "2026-05-15T09:00:00",
        end: "2026-05-15T18:00:00",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "May", day: "TBA" },
      eventType: "AI",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: { type: "onsite", city: "Berlin", country: "Germany", display: "Berlin, Germany" },
      modal: {
        overview: "Rise of AI is Germany's leading AI conference bringing together the German and European AI ecosystem. Features talks from top researchers, practitioners, and industry leaders.",
        requirements: null,
        keyDates: null,
        topics: [
          "Network with German AI ecosystem leaders",
          "Learn about AI applications in European industries",
          "Discover AI startups and investment opportunities",
          "Understand EU AI regulations"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://riseof.ai/" }
        ]
      },
      links: {
        register: "https://riseof.ai/",
        website: "https://riseof.ai/"
      }
    },
    {
      id: "open-hardware",
      title: "Open Hardware Summit 2026",
      organizer: "Open Source Hardware Association",
      icon: "🔧",
      page: "events",
      category: [],
      type: ["berlin"],
      tags: [
        { text: "Open Hardware", color: "default" },
        { text: "Makers", color: "default" },
        { text: "Berlin", color: "purple" }
      ],
      dates: {
        start: "2026-05-22T09:00:00",
        end: "2026-05-23T18:00:00",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "May", day: "22-23" },
      eventType: "Hardware",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: { type: "onsite", city: "Berlin", country: "Germany", display: "Berlin, Germany" },
      modal: {
        overview: "The Open Hardware Summit is the annual conference organized by OSHWA. It brings together makers, engineers, and enthusiasts to discuss and showcase open source hardware projects.",
        requirements: null,
        keyDates: null,
        topics: [
          "Open source hardware design and manufacturing",
          "DIY electronics and maker culture",
          "Hardware documentation best practices",
          "Business models for open hardware",
          "Community building and collaboration"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://2026.oshwa.org/" },
          { icon: "🏛️", label: "OSHWA", url: "https://www.oshwa.org/" }
        ]
      },
      links: {
        register: "https://2026.oshwa.org/",
        website: "https://2026.oshwa.org/"
      }
    },
    {
      id: "wearedev",
      title: "WeAreDevelopers World Congress",
      organizer: "WeAreDevelopers",
      icon: "🌐",
      page: "events",
      category: [],
      type: ["mega-conference", "berlin"],
      tags: [
        { text: "Top Pick", color: "gold" },
        { text: "Dev", color: "default" },
        { text: "AI", color: "default" },
        { text: "Berlin", color: "purple" }
      ],
      dates: {
        start: "2026-07-08T09:00:00",
        end: "2026-07-10T18:00:00",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jul", day: "8-10" },
      eventType: "Mega Conference",
      isUrgent: false,
      isFeatured: true,
      prize: null,
      location: { type: "onsite", city: "Berlin", country: "Germany", display: "Berlin, Germany" },
      modal: {
        overview: "WeAreDevelopers World Congress is the world's largest developer conference, held annually in Berlin. With 15,000+ attendees from around the globe, it covers all aspects of software development.",
        requirements: null,
        keyDates: null,
        topics: [
          "Artificial Intelligence & Machine Learning",
          "Cloud & DevOps",
          "Frontend & JavaScript",
          "Security & Privacy",
          "Leadership & Soft Skills"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://www.wearedevelopers.com/world-congress" },
          { icon: "🎟️", label: "Get Tickets", url: "https://www.wearedevelopers.com/world-congress/tickets" }
        ]
      },
      links: {
        register: "https://www.wearedevelopers.com/world-congress/tickets",
        website: "https://www.wearedevelopers.com/world-congress"
      }
    },
    {
      id: "ifa-berlin",
      title: "IFA Berlin 2026",
      organizer: "Messe Berlin",
      icon: "📺",
      page: "events",
      category: [],
      type: ["mega-conference", "robotics-ai", "berlin"],
      tags: [
        { text: "Consumer Tech", color: "default" },
        { text: "AI", color: "default" },
        { text: "Robotics", color: "default" },
        { text: "Berlin", color: "purple" }
      ],
      dates: {
        start: "2026-09-04T09:00:00",
        end: "2026-09-08T18:00:00",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Sep", day: "4-8" },
      eventType: "Tech Expo",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: { type: "onsite", city: "Berlin", country: "Germany", display: "Berlin, Germany" },
      modal: {
        overview: "IFA Berlin is the world's largest consumer electronics trade show, featuring the latest innovations in consumer electronics, home appliances, and information technology.",
        requirements: null,
        keyDates: null,
        topics: [
          "AI-powered consumer devices and robots",
          "Smart home and IoT innovations",
          "Wearables and health tech",
          "Entertainment and display technology",
          "Major brand announcements"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://www.ifa-berlin.com/" }
        ]
      },
      links: {
        register: "https://www.ifa-berlin.com/",
        website: "https://www.ifa-berlin.com/"
      }
    },
    {
      id: "genai-summit",
      title: "Generative AI Summit Berlin",
      organizer: "Generative AI Summit",
      icon: "🧠",
      page: "events",
      category: [],
      type: ["robotics-ai", "berlin"],
      tags: [
        { text: "LLMs", color: "default" },
        { text: "Agents", color: "default" },
        { text: "GenAI", color: "default" },
        { text: "Berlin", color: "purple" }
      ],
      dates: {
        start: "2026-09-10T09:00:00",
        end: "2026-09-10T18:00:00",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Sep", day: "10" },
      eventType: "AI",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: { type: "onsite", city: "Berlin", country: "Germany", display: "Berlin, Germany" },
      modal: {
        overview: "The Generative AI Summit Berlin focuses on practical applications of LLMs, AI agents, and generative AI in enterprise settings.",
        requirements: null,
        keyDates: null,
        topics: [
          "Large Language Models (LLMs) in production",
          "Building AI Agents and agentic workflows",
          "RAG (Retrieval Augmented Generation)",
          "Fine-tuning and prompt engineering",
          "Enterprise GenAI use cases"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://generativeaisummit.de/" }
        ]
      },
      links: {
        register: "https://generativeaisummit.de/",
        website: "https://generativeaisummit.de/"
      }
    },
    {
      id: "ai-data-quantum",
      title: "AI & Data Summit + Quantum Summit",
      organizer: "Big Data & AI World",
      icon: "⚛️",
      page: "events",
      category: [],
      type: ["robotics-ai", "berlin"],
      tags: [
        { text: "AI", color: "default" },
        { text: "Data", color: "default" },
        { text: "Quantum", color: "default" },
        { text: "Berlin", color: "purple" }
      ],
      dates: {
        start: "2026-09-22T09:00:00",
        end: "2026-09-22T18:00:00",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Sep", day: "22" },
      eventType: "AI / Quantum",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: { type: "onsite", city: "Berlin", country: "Germany", display: "Berlin, Germany" },
      modal: {
        overview: "This combined summit covers AI, big data, and quantum computing. Learn about the intersection of these technologies and how they're transforming industries.",
        requirements: null,
        keyDates: null,
        topics: [
          "AI and Machine Learning applications",
          "Big Data infrastructure and analytics",
          "Quantum computing fundamentals",
          "Quantum machine learning",
          "Data governance and ethics"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://www.bigdataworld.de/" }
        ]
      },
      links: {
        register: "https://www.bigdataworld.de/",
        website: "https://www.bigdataworld.de/"
      }
    },
    {
      id: "devopscon",
      title: "DevOpsCon Berlin 2026",
      organizer: "Software & Support Media",
      icon: "☁️",
      page: "events",
      category: [],
      type: ["devops", "berlin"],
      tags: [
        { text: "DevOps", color: "default" },
        { text: "Cloud", color: "default" },
        { text: "Kubernetes", color: "default" },
        { text: "Berlin", color: "purple" }
      ],
      dates: {
        start: "2026-06-01T09:00:00",
        end: "2026-06-03T18:00:00",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "TBD", day: "2026" },
      eventType: "DevOps",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: { type: "onsite", city: "Berlin", country: "Germany", display: "Berlin, Germany" },
      modal: {
        overview: "DevOpsCon is a conference focused on continuous delivery, microservices, containers, and cloud-native architectures.",
        requirements: null,
        keyDates: null,
        topics: [
          "Kubernetes and container orchestration",
          "CI/CD pipelines and automation",
          "Microservices architecture",
          "Infrastructure as Code",
          "Site Reliability Engineering (SRE)",
          "Platform engineering"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://devopscon.io/" }
        ]
      },
      links: {
        register: "https://devopscon.io/",
        website: "https://devopscon.io/"
      }
    },
    {
      id: "react-day-berlin",
      title: "React Day Berlin 2026",
      organizer: "GitNation",
      icon: "⚛️",
      page: "events",
      category: [],
      type: ["frontend", "berlin"],
      tags: [
        { text: "React", color: "default" },
        { text: "JavaScript", color: "default" },
        { text: "Berlin", color: "purple" }
      ],
      dates: {
        start: "2026-12-11T09:00:00",
        end: "2026-12-11T18:00:00",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Dec", day: "TBA" },
      eventType: "Frontend",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: { type: "onsite", city: "Berlin", country: "Germany", display: "Berlin, Germany" },
      modal: {
        overview: "React Day Berlin is part of the GitNation conference series, focusing on the React ecosystem. Hear from React core team members and community leaders.",
        requirements: null,
        keyDates: null,
        topics: [
          "React 19+ features and Server Components",
          "Next.js and modern React frameworks",
          "State management patterns",
          "Performance optimization",
          "Testing and tooling"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://reactday.berlin/" },
          { icon: "🎪", label: "GitNation", url: "https://gitnation.com/" }
        ]
      },
      links: {
        register: "https://reactday.berlin/",
        website: "https://reactday.berlin/"
      }
    },

    // ========================================
    // GITNATION CONFERENCES
    // ========================================
    {
      id: "jsnation",
      title: "JSNation 2026",
      organizer: "GitNation",
      icon: "🟨",
      page: "events",
      category: [],
      type: ["frontend", "mega-conference"],
      tags: [
        { text: "JavaScript", color: "default" },
        { text: "Node.js", color: "default" },
        { text: "Amsterdam", color: "purple" }
      ],
      dates: {
        start: "2026-06-11T09:00:00",
        end: "2026-06-15T18:00:00",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jun", day: "11-15" },
      eventType: "JavaScript",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: { type: "hybrid", city: "Amsterdam", country: "Netherlands", display: "Amsterdam + Online" },
      modal: {
        overview: "JSNation is the main annual JavaScript conference organized by GitNation. It brings together JavaScript developers from around the world for talks, workshops, and networking.",
        requirements: null,
        keyDates: null,
        topics: [
          "JavaScript ecosystem and tooling",
          "Node.js and server-side JS",
          "TypeScript best practices",
          "Web APIs and browser features",
          "Performance optimization"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://jsnation.com/" },
          { icon: "🎪", label: "GitNation", url: "https://gitnation.com/" }
        ]
      },
      links: {
        register: "https://jsnation.com/",
        website: "https://jsnation.com/"
      }
    },
    {
      id: "react-summit",
      title: "React Summit 2026",
      organizer: "GitNation",
      icon: "⚛️",
      page: "events",
      category: [],
      type: ["frontend", "mega-conference"],
      tags: [
        { text: "React", color: "default" },
        { text: "Frontend", color: "default" },
        { text: "Amsterdam", color: "purple" }
      ],
      dates: {
        start: "2026-06-11T09:00:00",
        end: "2026-06-15T18:00:00",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jun", day: "11-15" },
      eventType: "React",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: { type: "hybrid", city: "Amsterdam", country: "Netherlands", display: "Amsterdam + Online" },
      modal: {
        overview: "React Summit is the biggest React conference worldwide, co-located with JSNation in Amsterdam. Features talks from React core team and top community contributors.",
        requirements: null,
        keyDates: null,
        topics: [
          "React 19+ and Server Components",
          "Next.js and React frameworks",
          "State management (Zustand, Jotai, Redux)",
          "React Native and cross-platform",
          "Testing and performance"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://reactsummit.com/" },
          { icon: "🎪", label: "GitNation", url: "https://gitnation.com/" }
        ]
      },
      links: {
        register: "https://reactsummit.com/",
        website: "https://reactsummit.com/"
      }
    },
    {
      id: "node-congress",
      title: "Node Congress 2026",
      organizer: "GitNation",
      icon: "💚",
      page: "events",
      category: [],
      type: ["frontend", "devops"],
      tags: [
        { text: "Node.js", color: "default" },
        { text: "Backend", color: "default" },
        { text: "Online", color: "purple" }
      ],
      dates: {
        start: "2026-04-23T09:00:00",
        end: "2026-04-24T18:00:00",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Apr", day: "23-24" },
      eventType: "Node.js",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online" },
      modal: {
        overview: "Node Congress is GitNation's dedicated Node.js conference. It covers everything from backend development to serverless, microservices, and DevOps with Node.",
        requirements: null,
        keyDates: null,
        topics: [
          "Node.js core and runtime updates",
          "API development and GraphQL",
          "Serverless and edge computing",
          "Microservices architecture",
          "Database and ORM patterns"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://nodecongress.com/" },
          { icon: "🎪", label: "GitNation", url: "https://gitnation.com/" }
        ]
      },
      links: {
        register: "https://nodecongress.com/",
        website: "https://nodecongress.com/"
      }
    },
    {
      id: "react-advanced",
      title: "React Advanced 2026",
      organizer: "GitNation",
      icon: "⚛️",
      page: "events",
      category: [],
      type: ["frontend"],
      tags: [
        { text: "React", color: "default" },
        { text: "Advanced", color: "default" },
        { text: "London", color: "purple" }
      ],
      dates: {
        start: "2026-10-23T09:00:00",
        end: "2026-10-25T18:00:00",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Oct", day: "23-25" },
      eventType: "React",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: { type: "hybrid", city: "London", country: "UK", display: "London + Online" },
      modal: {
        overview: "React Advanced is an in-depth React conference focusing on advanced patterns, architecture, and performance. Designed for experienced React developers.",
        requirements: null,
        keyDates: null,
        topics: [
          "Advanced React patterns",
          "Performance optimization",
          "Large-scale application architecture",
          "Testing strategies",
          "React internals and debugging"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://reactadvanced.com/" },
          { icon: "🎪", label: "GitNation", url: "https://gitnation.com/" }
        ]
      },
      links: {
        register: "https://reactadvanced.com/",
        website: "https://reactadvanced.com/"
      }
    },

    // ========================================
    // AI & ML CONFERENCES
    // ========================================
    {
      id: "humanx-emea",
      title: "HumanX EMEA 2026",
      organizer: "HumanX",
      icon: "🧠",
      page: "events",
      category: [],
      type: ["robotics-ai", "mega-conference"],
      tags: [
        { text: "AI", color: "default" },
        { text: "Enterprise", color: "default" },
        { text: "Amsterdam", color: "purple" }
      ],
      dates: {
        start: "2026-09-22T09:00:00",
        end: "2026-09-24T18:00:00",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Sep", day: "22-24" },
      eventType: "AI",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: { type: "onsite", city: "Amsterdam", country: "Netherlands", display: "Amsterdam, Netherlands" },
      modal: {
        overview: "HumanX EMEA is a premier AI conference bringing together enterprise AI leaders, researchers, and practitioners to discuss the future of AI in business.",
        requirements: null,
        keyDates: null,
        topics: [
          "Enterprise AI adoption",
          "AI governance and ethics",
          "Large Language Models in business",
          "AI infrastructure and MLOps",
          "Human-AI collaboration"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://humanx.co/europe/" }
        ]
      },
      links: {
        register: "https://humanx.co/europe/",
        website: "https://humanx.co/europe/"
      }
    },
    {
      id: "ml-conference-munich",
      title: "ML Conference Munich 2026",
      organizer: "Software & Support Media",
      icon: "🤖",
      page: "events",
      category: [],
      type: ["robotics-ai"],
      tags: [
        { text: "ML", color: "default" },
        { text: "AI Engineering", color: "default" },
        { text: "Munich", color: "purple" }
      ],
      dates: {
        start: "2026-06-22T09:00:00",
        end: "2026-06-26T18:00:00",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jun", day: "22-26" },
      eventType: "ML",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: { type: "onsite", city: "Munich", country: "Germany", display: "Munich, Germany" },
      modal: {
        overview: "ML Conference is a practitioner-focused event covering the full ML lifecycle from research to production. Features workshops and deep-dive sessions.",
        requirements: null,
        keyDates: null,
        topics: [
          "MLOps and ML engineering",
          "Deep learning frameworks",
          "NLP and LLMs in production",
          "Computer vision applications",
          "AutoML and model optimization"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://mlconference.ai/munich/" }
        ]
      },
      links: {
        register: "https://mlconference.ai/munich/",
        website: "https://mlconference.ai/munich/"
      }
    },

    // ========================================
    // CLOUD & DEVOPS CONFERENCES
    // ========================================
    {
      id: "kubecon-europe",
      title: "KubeCon + CloudNativeCon Europe 2026",
      organizer: "CNCF",
      icon: "☸️",
      page: "events",
      category: [],
      type: ["devops", "mega-conference"],
      tags: [
        { text: "Kubernetes", color: "default" },
        { text: "Cloud Native", color: "default" },
        { text: "Amsterdam", color: "purple" }
      ],
      dates: {
        start: "2026-03-23T09:00:00",
        end: "2026-03-26T18:00:00",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Mar", day: "23-26" },
      eventType: "Cloud Native",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: { type: "onsite", city: "Amsterdam", country: "Netherlands", display: "Amsterdam, Netherlands" },
      modal: {
        overview: "KubeCon + CloudNativeCon is the flagship conference of the Cloud Native Computing Foundation. It brings together adopters and technologists from leading open source and cloud native communities.",
        requirements: null,
        keyDates: null,
        topics: [
          "Kubernetes and container orchestration",
          "Service mesh and networking",
          "Observability and monitoring",
          "Security in cloud native environments",
          "Platform engineering"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/" }
        ]
      },
      links: {
        register: "https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/",
        website: "https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/"
      }
    },
    {
      id: "google-cloud-next",
      title: "Google Cloud Next 2026",
      organizer: "Google Cloud",
      icon: "☁️",
      page: "events",
      category: [],
      type: ["devops", "robotics-ai", "mega-conference"],
      tags: [
        { text: "Google Cloud", color: "default" },
        { text: "AI", color: "default" },
        { text: "Las Vegas", color: "purple" }
      ],
      dates: {
        start: "2026-04-22T09:00:00",
        end: "2026-04-24T18:00:00",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Apr", day: "22-24" },
      eventType: "Cloud",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: { type: "onsite", city: "Las Vegas", country: "USA", display: "Las Vegas, USA" },
      modal: {
        overview: "Google Cloud Next is Google's annual cloud conference featuring product announcements, technical sessions, and hands-on learning opportunities.",
        requirements: null,
        keyDates: null,
        topics: [
          "Google Cloud Platform services",
          "AI and ML with Vertex AI",
          "Data analytics with BigQuery",
          "Cloud infrastructure and security",
          "Developer tools and DevOps"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://cloud.withgoogle.com/next" }
        ]
      },
      links: {
        register: "https://cloud.withgoogle.com/next",
        website: "https://cloud.withgoogle.com/next"
      }
    },
    {
      id: "aws-reinvent",
      title: "AWS re:Invent 2026",
      organizer: "Amazon Web Services",
      icon: "🔶",
      page: "events",
      category: [],
      type: ["devops", "robotics-ai", "mega-conference"],
      tags: [
        { text: "AWS", color: "default" },
        { text: "Cloud", color: "default" },
        { text: "Las Vegas", color: "purple" }
      ],
      dates: {
        start: "2026-12-01T09:00:00",
        end: "2026-12-05T18:00:00",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Dec", day: "1-5" },
      eventType: "Cloud",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: { type: "onsite", city: "Las Vegas", country: "USA", display: "Las Vegas, USA" },
      modal: {
        overview: "AWS re:Invent is Amazon Web Services' annual conference featuring keynotes, training, certification opportunities, and access to thousands of technical sessions.",
        requirements: null,
        keyDates: null,
        topics: [
          "AWS services and announcements",
          "Serverless and containers",
          "AI/ML with SageMaker and Bedrock",
          "Security and compliance",
          "Database and analytics"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://reinvent.awsevents.com/" }
        ]
      },
      links: {
        register: "https://reinvent.awsevents.com/",
        website: "https://reinvent.awsevents.com/"
      }
    },

    // ========================================
    // SECURITY CONFERENCES
    // ========================================
    {
      id: "rsa-conference",
      title: "RSA Conference 2026",
      organizer: "RSA",
      icon: "🔐",
      page: "events",
      category: [],
      type: ["security", "mega-conference"],
      tags: [
        { text: "Security", color: "default" },
        { text: "Cybersecurity", color: "default" },
        { text: "San Francisco", color: "purple" }
      ],
      dates: {
        start: "2026-04-27T09:00:00",
        end: "2026-04-30T18:00:00",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Apr", day: "27-30" },
      eventType: "Security",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: { type: "onsite", city: "San Francisco", country: "USA", display: "San Francisco, USA" },
      modal: {
        overview: "RSA Conference is the world's leading information security conference. It brings together security professionals, researchers, and vendors.",
        requirements: null,
        keyDates: null,
        topics: [
          "Threat intelligence and response",
          "Zero trust architecture",
          "Cloud security",
          "Identity and access management",
          "AI in cybersecurity"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://www.rsaconference.com/" }
        ]
      },
      links: {
        register: "https://www.rsaconference.com/",
        website: "https://www.rsaconference.com/"
      }
    },
    {
      id: "blackhat-usa",
      title: "Black Hat USA 2026",
      organizer: "Black Hat",
      icon: "🎩",
      page: "events",
      category: [],
      type: ["security", "mega-conference"],
      tags: [
        { text: "Security Research", color: "default" },
        { text: "Hacking", color: "default" },
        { text: "Las Vegas", color: "purple" }
      ],
      dates: {
        start: "2026-08-01T09:00:00",
        end: "2026-08-06T18:00:00",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Aug", day: "1-6" },
      eventType: "Security",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: { type: "onsite", city: "Las Vegas", country: "USA", display: "Las Vegas, USA" },
      modal: {
        overview: "Black Hat USA is the world's leading information security event, providing attendees with the latest security research, development, and trends.",
        requirements: null,
        keyDates: null,
        topics: [
          "Vulnerability research and exploitation",
          "Reverse engineering",
          "Applied security and cryptography",
          "Hardware and embedded security",
          "AI/ML security"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://www.blackhat.com/us-26/" }
        ]
      },
      links: {
        register: "https://www.blackhat.com/us-26/",
        website: "https://www.blackhat.com/us-26/"
      }
    },
    {
      id: "defcon",
      title: "DEF CON 34",
      organizer: "DEF CON",
      icon: "💀",
      page: "events",
      category: [],
      type: ["security"],
      tags: [
        { text: "Hacker", color: "default" },
        { text: "Community", color: "default" },
        { text: "Las Vegas", color: "purple" }
      ],
      dates: {
        start: "2026-08-06T09:00:00",
        end: "2026-08-09T18:00:00",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Aug", day: "6-9" },
      eventType: "Hacker Con",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: { type: "onsite", city: "Las Vegas", country: "USA", display: "Las Vegas, USA" },
      modal: {
        overview: "DEF CON is one of the world's largest and longest-running hacker conventions. It features talks, workshops, villages, and capture-the-flag competitions.",
        requirements: null,
        keyDates: null,
        topics: [
          "Hacking villages (IoT, Car, Voting, etc.)",
          "CTF competitions",
          "Hardware hacking",
          "Social engineering",
          "Privacy and anonymity"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://defcon.org/" }
        ]
      },
      links: {
        register: "https://defcon.org/",
        website: "https://defcon.org/"
      }
    },
    {
      id: "blackhat-europe",
      title: "Black Hat Europe 2026",
      organizer: "Black Hat",
      icon: "🎩",
      page: "events",
      category: [],
      type: ["security"],
      tags: [
        { text: "Security", color: "default" },
        { text: "Europe", color: "default" },
        { text: "London", color: "purple" }
      ],
      dates: {
        start: "2026-12-07T09:00:00",
        end: "2026-12-10T18:00:00",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Dec", day: "7-10" },
      eventType: "Security",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: { type: "onsite", city: "London", country: "UK", display: "London, UK" },
      modal: {
        overview: "Black Hat Europe is the premier cybersecurity event in Europe, featuring the latest in security research and training.",
        requirements: null,
        keyDates: null,
        topics: [
          "Security research",
          "Penetration testing",
          "Threat hunting",
          "Incident response",
          "European privacy regulations"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://www.blackhat.com/eu-26/" }
        ]
      },
      links: {
        register: "https://www.blackhat.com/eu-26/",
        website: "https://www.blackhat.com/eu-26/"
      }
    },

    // ========================================
    // MORE TECH CONFERENCES
    // ========================================
    {
      id: "web-summit",
      title: "Web Summit 2026",
      organizer: "Web Summit",
      icon: "🌐",
      page: "events",
      category: [],
      type: ["mega-conference", "robotics-ai"],
      tags: [
        { text: "Tech", color: "default" },
        { text: "Startups", color: "default" },
        { text: "Lisbon", color: "purple" }
      ],
      dates: {
        start: "2026-11-02T09:00:00",
        end: "2026-11-05T18:00:00",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Nov", day: "2-5" },
      eventType: "Tech Summit",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: { type: "onsite", city: "Lisbon", country: "Portugal", display: "Lisbon, Portugal" },
      modal: {
        overview: "Web Summit is one of the largest tech conferences in the world, bringing together startups, investors, and industry leaders. Features AI, fintech, healthtech, and more.",
        requirements: null,
        keyDates: null,
        topics: [
          "AI and emerging technologies",
          "Startup ecosystem",
          "Investor networking",
          "Climate tech",
          "Web3 and decentralization"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://websummit.com/" }
        ]
      },
      links: {
        register: "https://websummit.com/",
        website: "https://websummit.com/"
      }
    },
    {
      id: "collision",
      title: "Collision 2026",
      organizer: "Web Summit",
      icon: "💥",
      page: "events",
      category: [],
      type: ["mega-conference", "robotics-ai"],
      tags: [
        { text: "Tech", color: "default" },
        { text: "Startups", color: "default" },
        { text: "Toronto", color: "purple" }
      ],
      dates: {
        start: "2026-06-22T09:00:00",
        end: "2026-06-25T18:00:00",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jun", day: "22-25" },
      eventType: "Tech Summit",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: { type: "onsite", city: "Toronto", country: "Canada", display: "Toronto, Canada" },
      modal: {
        overview: "Collision is North America's fastest-growing tech conference, from the creators of Web Summit. Features talks, networking, and startup pitches.",
        requirements: null,
        keyDates: null,
        topics: [
          "AI and tech innovation",
          "Startup growth",
          "Investment trends",
          "Enterprise technology",
          "Future of work"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://collisionconf.com/" }
        ]
      },
      links: {
        register: "https://collisionconf.com/",
        website: "https://collisionconf.com/"
      }
    },
    {
      id: "viva-tech",
      title: "VivaTech 2026",
      organizer: "VivaTech",
      icon: "🚀",
      page: "events",
      category: [],
      type: ["mega-conference", "robotics-ai"],
      tags: [
        { text: "Tech", color: "default" },
        { text: "Innovation", color: "default" },
        { text: "Paris", color: "purple" }
      ],
      dates: {
        start: "2026-06-17T09:00:00",
        end: "2026-06-20T18:00:00",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jun", day: "17-20" },
      eventType: "Tech Summit",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: { type: "onsite", city: "Paris", country: "France", display: "Paris, France" },
      modal: {
        overview: "VivaTech is Europe's biggest startup and tech event, held annually in Paris. It connects startups, tech leaders, and investors.",
        requirements: null,
        keyDates: null,
        topics: [
          "European tech ecosystem",
          "AI and deep tech",
          "Sustainability and climate tech",
          "Future of mobility",
          "Corporate innovation"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://vivatechnology.com/" }
        ]
      },
      links: {
        register: "https://vivatechnology.com/",
        website: "https://vivatechnology.com/"
      }
    },
    {
      id: "ces",
      title: "CES 2026",
      organizer: "Consumer Technology Association",
      icon: "📺",
      page: "events",
      category: [],
      type: ["mega-conference", "robotics-ai"],
      tags: [
        { text: "Consumer Tech", color: "default" },
        { text: "Innovation", color: "default" },
        { text: "Las Vegas", color: "purple" }
      ],
      dates: {
        start: "2026-01-06T09:00:00",
        end: "2026-01-09T18:00:00",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "6-9" },
      eventType: "Tech Expo",
      isUrgent: true,
      isFeatured: false,
      prize: null,
      location: { type: "onsite", city: "Las Vegas", country: "USA", display: "Las Vegas, USA" },
      modal: {
        overview: "CES is the world's most influential tech event, showcasing the latest innovations in consumer electronics, automotive, health tech, and more.",
        requirements: null,
        keyDates: null,
        topics: [
          "AI and robotics",
          "Automotive technology",
          "Smart home and IoT",
          "Health and wearable tech",
          "Sustainability innovations"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://www.ces.tech/" }
        ]
      },
      links: {
        register: "https://www.ces.tech/",
        website: "https://www.ces.tech/"
      }
    },
    {
      id: "mwc-barcelona",
      title: "MWC Barcelona 2026",
      organizer: "GSMA",
      icon: "📱",
      page: "events",
      category: [],
      type: ["mega-conference", "robotics-ai"],
      tags: [
        { text: "Mobile", color: "default" },
        { text: "5G/6G", color: "default" },
        { text: "Barcelona", color: "purple" }
      ],
      dates: {
        start: "2026-03-02T09:00:00",
        end: "2026-03-05T18:00:00",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Mar", day: "2-5" },
      eventType: "Mobile",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: { type: "onsite", city: "Barcelona", country: "Spain", display: "Barcelona, Spain" },
      modal: {
        overview: "Mobile World Congress is the world's largest mobile industry event, featuring the latest in mobile technology, 5G/6G, and connected devices.",
        requirements: null,
        keyDates: null,
        topics: [
          "5G/6G networks and infrastructure",
          "AI in mobile and telecom",
          "Connected devices and IoT",
          "Mobile app development",
          "Digital transformation"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://www.mwcbarcelona.com/" }
        ]
      },
      links: {
        register: "https://www.mwcbarcelona.com/",
        website: "https://www.mwcbarcelona.com/"
      }
    },
    {
      id: "nvidia-gtc",
      title: "NVIDIA GTC 2026",
      organizer: "NVIDIA",
      icon: "💚",
      page: "events",
      category: [],
      type: ["robotics-ai", "devops"],
      tags: [
        { text: "AI", color: "default" },
        { text: "GPU", color: "default" },
        { text: "Deep Learning", color: "default" }
      ],
      dates: {
        start: "2026-03-16T09:00:00",
        end: "2026-03-20T18:00:00",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Mar", day: "16-20" },
      eventType: "AI",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: { type: "hybrid", city: "San Jose", country: "USA", display: "San Jose + Online" },
      modal: {
        overview: "NVIDIA GTC is the premier AI conference covering deep learning, data science, and GPU computing. Features Jensen Huang keynotes and cutting-edge AI research.",
        requirements: null,
        keyDates: null,
        topics: [
          "Generative AI and LLMs",
          "GPU computing and CUDA",
          "Autonomous vehicles",
          "Robotics and simulation",
          "Healthcare and life sciences AI"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://www.nvidia.com/gtc/" }
        ]
      },
      links: {
        register: "https://www.nvidia.com/gtc/",
        website: "https://www.nvidia.com/gtc/"
      }
    },
    {
      id: "pycon-us",
      title: "PyCon US 2026",
      organizer: "Python Software Foundation",
      icon: "🐍",
      page: "events",
      category: [],
      type: ["frontend", "robotics-ai"],
      tags: [
        { text: "Python", color: "default" },
        { text: "Community", color: "default" },
        { text: "Pittsburgh", color: "purple" }
      ],
      dates: {
        start: "2026-05-13T09:00:00",
        end: "2026-05-21T18:00:00",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "May", day: "13-21" },
      eventType: "Python",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: { type: "onsite", city: "Pittsburgh", country: "USA", display: "Pittsburgh, USA" },
      modal: {
        overview: "PyCon US is the largest annual gathering for the Python community. Features talks, tutorials, sprints, and networking opportunities.",
        requirements: null,
        keyDates: null,
        topics: [
          "Python language and ecosystem",
          "Data science and ML with Python",
          "Web development (Django, FastAPI)",
          "DevOps and automation",
          "Community and diversity"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://pycon.org/" }
        ]
      },
      links: {
        register: "https://pycon.org/",
        website: "https://pycon.org/"
      }
    },
    {
      id: "gophercon",
      title: "GopherCon 2026",
      organizer: "GopherCon",
      icon: "🐹",
      page: "events",
      category: [],
      type: ["devops"],
      tags: [
        { text: "Go", color: "default" },
        { text: "Backend", color: "default" },
        { text: "Chicago", color: "purple" }
      ],
      dates: {
        start: "2026-07-13T09:00:00",
        end: "2026-07-16T18:00:00",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jul", day: "13-16" },
      eventType: "Go",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: { type: "onsite", city: "Chicago", country: "USA", display: "Chicago, USA" },
      modal: {
        overview: "GopherCon is the largest conference for the Go programming language community. Features talks from Go team members and community leaders.",
        requirements: null,
        keyDates: null,
        topics: [
          "Go language features and updates",
          "Concurrency patterns",
          "Cloud-native Go development",
          "Performance optimization",
          "Testing and tooling"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://www.gophercon.com/" }
        ]
      },
      links: {
        register: "https://www.gophercon.com/",
        website: "https://www.gophercon.com/"
      }
    },
    {
      id: "rustconf",
      title: "RustConf 2026",
      organizer: "Rust Foundation",
      icon: "🦀",
      page: "events",
      category: [],
      type: ["devops"],
      tags: [
        { text: "Rust", color: "default" },
        { text: "Systems", color: "default" },
        { text: "Montreal", color: "purple" }
      ],
      dates: {
        start: "2026-09-09T09:00:00",
        end: "2026-09-11T18:00:00",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Sep", day: "9-11" },
      eventType: "Rust",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: { type: "onsite", city: "Montreal", country: "Canada", display: "Montreal, Canada" },
      modal: {
        overview: "RustConf is the annual conference for the Rust programming language. Features talks on systems programming, WebAssembly, and the Rust ecosystem.",
        requirements: null,
        keyDates: null,
        topics: [
          "Rust language and compiler",
          "Async Rust and concurrency",
          "WebAssembly with Rust",
          "Embedded systems",
          "Memory safety"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://rustconf.com/" }
        ]
      },
      links: {
        register: "https://rustconf.com/",
        website: "https://rustconf.com/"
      }
    },
    {
      id: "dotai",
      title: "dotAI 2026",
      organizer: "dotConferences",
      icon: "🧠",
      page: "events",
      category: [],
      type: ["robotics-ai"],
      tags: [
        { text: "AI", color: "default" },
        { text: "ML", color: "default" },
        { text: "Paris", color: "purple" }
      ],
      dates: {
        start: "2026-04-16T09:00:00",
        end: "2026-04-16T18:00:00",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Apr", day: "16" },
      eventType: "AI",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: { type: "onsite", city: "Paris", country: "France", display: "Paris, France" },
      modal: {
        overview: "dotAI is a developer-focused AI conference organized by dotConferences. Features curated talks from AI practitioners and researchers.",
        requirements: null,
        keyDates: null,
        topics: [
          "Machine learning in production",
          "Deep learning frameworks",
          "NLP and computer vision",
          "MLOps and infrastructure",
          "AI ethics"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://www.dotai.io/" }
        ]
      },
      links: {
        register: "https://www.dotai.io/",
        website: "https://www.dotai.io/"
      }
    },
    {
      id: "ai-summit-london",
      title: "AI Summit London 2026",
      organizer: "AI Summit",
      icon: "🧠",
      page: "events",
      category: [],
      type: ["robotics-ai", "mega-conference"],
      tags: [
        { text: "AI", color: "default" },
        { text: "Enterprise", color: "default" },
        { text: "London", color: "purple" }
      ],
      dates: {
        start: "2026-06-10T09:00:00",
        end: "2026-06-11T18:00:00",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jun", day: "10-11" },
      eventType: "AI",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: { type: "onsite", city: "London", country: "UK", display: "London, UK" },
      modal: {
        overview: "The AI Summit London is a leading enterprise AI conference, bringing together C-suite executives and AI leaders to discuss AI strategy and implementation.",
        requirements: null,
        keyDates: null,
        topics: [
          "Enterprise AI strategy",
          "AI governance and ethics",
          "Generative AI adoption",
          "AI in finance and healthcare",
          "Future of work"
        ],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://theaisummit.com/london/" }
        ]
      },
      links: {
        register: "https://theaisummit.com/london/",
        website: "https://theaisummit.com/london/"
      }
    },

    // ========================================
    // GOOGLE GEMINI HACKATHON
    // ========================================
    {
      id: "gemini-3-hackathon",
      title: "Gemini 3 Hackathon: Build what's next",
      organizer: "Google DeepMind",
      icon: "✨",
      page: "hackathons",
      category: ["hackathon"],
      type: ["hackathon"],
      tags: [
        { text: "AI", color: "default" },
        { text: "Google", color: "default" },
        { text: "$100K", color: "gold" }
      ],
      dates: {
        start: "2025-12-17T00:00:00",
        end: "2026-02-09T17:00:00",
        deadline: "2026-02-09T17:00:00",
        countdownTarget: "deadline"
      },
      dateDisplay: { month: "Feb", day: "9" },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2025-12-21",
      prize: { amount: "$100,000 Total Prizes", icon: "💰" },
      location: { type: "online", city: null, country: null, display: "Online" },
      modal: {
        overview: "Google DeepMind invites developers to create novel applications using the Gemini 3 API. Build fun, creative, next-generation applications that push AI boundaries through enhanced reasoning, multimodal capabilities, and reduced latency. Grand Prize includes $50,000 + AI Futures Fund interview.",
        requirements: [
          "Build NEW applications using Gemini 3 API",
          "Submit ~200-word description of Gemini 3 integration",
          "Public project link or working demo required",
          "Public code repository (if no AI Studio link)",
          "~3-minute demonstration video",
          "Must be above legal age of majority"
        ],
        keyDates: [
          { label: "Start Date", value: "December 17, 2025" },
          { label: "Submission Deadline", value: "February 9, 2026 @ 5:00pm PST" }
        ],
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Page", url: "https://gemini3.devpost.com/" },
          { icon: "📚", label: "Gemini API Docs", url: "https://ai.google.dev/docs" }
        ]
      },
      links: {
        register: "https://gemini3.devpost.com/",
        website: "https://gemini3.devpost.com/"
      }
    },

    // ========================================
    // AUTO-ADDED EVENTS (2025-12-21)
    // ========================================
    {
      id: "devpost-27377",
      title: "Square Hacks- Build for Rural India",
      organizer: "devpost",
      icon: "💻",
      page: "hackathons",
      category: ["hackathon"],
      type: [],
      tags: [
        { text: "NEW", color: "gold" },
        { text: "devpost", color: "default" }
      ],
      dates: {
        start: "2025-12-26T00:00:00.000Z",
        end: "2025-12-26T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Dec", day: "26" },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2025-12-21",
      prize: { amount: "₹ 110,000", icon: "💰" },
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://squarehacks.devpost.com/" }
        ]
      },
      links: {
        register: "https://squarehacks.devpost.com/",
        website: "https://squarehacks.devpost.com/"
      }
    },
    {
      id: "devpost-27613",
      title: "STEMpower Hacks",
      organizer: "devpost",
      icon: "💻",
      page: "hackathons",
      category: ["hackathon"],
      type: [],
      tags: [
        { text: "NEW", color: "gold" },
        { text: "devpost", color: "default" }
      ],
      dates: {
        start: "2025-12-21T00:00:00.000Z",
        end: "2025-12-21T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Dec", day: "21" },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2025-12-21",
      prize: { amount: "$0", icon: "💰" },
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://stempower-her-hacks.devpost.com/" }
        ]
      },
      links: {
        register: "https://stempower-her-hacks.devpost.com/",
        website: "https://stempower-her-hacks.devpost.com/"
      }
    },
    {
      id: "devpost-16954",
      title: "Winter MelonJam 2025",
      organizer: "devpost",
      icon: "💻",
      page: "hackathons",
      category: ["hackathon"],
      type: [],
      tags: [
        { text: "NEW", color: "gold" },
        { text: "devpost", color: "default" }
      ],
      dates: {
        start: "2025-12-26T00:00:00.000Z",
        end: "2025-12-26T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Dec", day: "26" },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2025-12-21",
      prize: { amount: "$0", icon: "💰" },
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://wmj2025.devpost.com/" }
        ]
      },
      links: {
        register: "https://wmj2025.devpost.com/",
        website: "https://wmj2025.devpost.com/"
      }
    },
    {
      id: "devpost-27478",
      title: "Maximally Vibe-a-thon",
      organizer: "devpost",
      icon: "💻",
      page: "hackathons",
      category: ["hackathon"],
      type: [],
      tags: [
        { text: "NEW", color: "gold" },
        { text: "devpost", color: "default" }
      ],
      dates: {
        start: "2025-12-26T00:00:00.000Z",
        end: "2025-12-26T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Dec", day: "26" },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2025-12-21",
      prize: { amount: "₹ 468,000", icon: "💰" },
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://vibe-a-thon.devpost.com/" }
        ]
      },
      links: {
        register: "https://vibe-a-thon.devpost.com/",
        website: "https://vibe-a-thon.devpost.com/"
      }
    },
    {
      id: "devpost-27889",
      title: "Your dream",
      organizer: "devpost",
      icon: "💻",
      page: "hackathons",
      category: ["hackathon"],
      type: [],
      tags: [
        { text: "NEW", color: "gold" },
        { text: "devpost", color: "default" }
      ],
      dates: {
        start: "2025-12-22T00:00:00.000Z",
        end: "2025-12-22T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Dec", day: "22" },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2025-12-21",
      prize: { amount: "$0", icon: "💰" },
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://your-dream.devpost.com/" }
        ]
      },
      links: {
        register: "https://your-dream.devpost.com/",
        website: "https://your-dream.devpost.com/"
      }
    },
    {
      id: "devpost-27649",
      title: "Odoo x SNS Coimbatore Hiring Hackathon '26",
      organizer: "devpost",
      icon: "💻",
      page: "hackathons",
      category: ["hackathon"],
      type: [],
      tags: [
        { text: "NEW", color: "gold" },
        { text: "devpost", color: "default" }
      ],
      dates: {
        start: "2026-01-02T00:00:00.000Z",
        end: "2026-01-02T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "2" },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2025-12-21",
      prize: { amount: "₹ 104,998", icon: "💰" },
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://odoo-x-sns-hiring-hackathon-26.devpost.com/" }
        ]
      },
      links: {
        register: "https://odoo-x-sns-hiring-hackathon-26.devpost.com/",
        website: "https://odoo-x-sns-hiring-hackathon-26.devpost.com/"
      }
    },
    {
      id: "devpost-27827",
      title: " NUS Fintech Summit 2026",
      organizer: "devpost",
      icon: "💻",
      page: "hackathons",
      category: ["hackathon"],
      type: [],
      tags: [
        { text: "NEW", color: "gold" },
        { text: "devpost", color: "default" }
      ],
      dates: {
        start: "2026-01-06T00:00:00.000Z",
        end: "2026-01-06T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "6" },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2025-12-21",
      prize: { amount: "$0", icon: "💰" },
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://nus-fintech-summit-2026.devpost.com/" }
        ]
      },
      links: {
        register: "https://nus-fintech-summit-2026.devpost.com/",
        website: "https://nus-fintech-summit-2026.devpost.com/"
      }
    },
    {
      id: "devpost-27455",
      title: "BevHacks 2026",
      organizer: "devpost",
      icon: "💻",
      page: "hackathons",
      category: ["hackathon"],
      type: [],
      tags: [
        { text: "NEW", color: "gold" },
        { text: "devpost", color: "default" }
      ],
      dates: {
        start: "2026-01-10T00:00:00.000Z",
        end: "2026-01-10T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "10" },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2025-12-21",
      prize: { amount: "$0", icon: "💰" },
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://bevhacks-2026.devpost.com/" }
        ]
      },
      links: {
        register: "https://bevhacks-2026.devpost.com/",
        website: "https://bevhacks-2026.devpost.com/"
      }
    },
    {
      id: "wikicfp-uai-2026---42nd-conference-on-uncertainty-in-artif",
      title: "UAI 2026 : 42nd Conference on Uncertainty in Artificial Intelligence",
      organizer: "wikicfp",
      icon: "📄",
      page: "cfp",
      category: ["cfp"],
      type: ["ml"],
      tags: [
        { text: "NEW", color: "gold" },
        { text: "wikicfp", color: "default" }
      ],
      dates: {
        start: "2026-01-01T00:00:00.000Z",
        end: "2026-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2025-12-21",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "42nd Conference on Uncertainty in Artificial Intelligence [Amsterdam, The Netherlands] [Aug 17, 2026 - Aug 21, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191199&copyownerid=13149" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191199&copyownerid=13149",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191199&copyownerid=13149"
      }
    },
    {
      id: "wikicfp-aiai--2026---artificial-intelligence-applications-",
      title: "AIAI  2026 : Artificial Intelligence Applications and Innovations",
      organizer: "wikicfp",
      icon: "📄",
      page: "cfp",
      category: ["cfp"],
      type: ["ml"],
      tags: [
        { text: "NEW", color: "gold" },
        { text: "wikicfp", color: "default" }
      ],
      dates: {
        start: "2026-01-01T00:00:00.000Z",
        end: "2026-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2025-12-21",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "Artificial Intelligence Applications and Innovations [Crete city of Chania, Greece] [Jul 16, 2025 - Jul 19, 2025]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191193&copyownerid=166141" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191193&copyownerid=166141",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191193&copyownerid=166141"
      }
    },
    {
      id: "wikicfp-eann--eaaai-2026---engineering-applications-of-neu",
      title: "EANN/ EAAAI 2026 : Engineering Applications of Neural Networks/ Engineering Applications &amp; Advances of AI 2026",
      organizer: "wikicfp",
      icon: "📄",
      page: "cfp",
      category: ["cfp"],
      type: ["ml"],
      tags: [
        { text: "NEW", color: "gold" },
        { text: "wikicfp", color: "default" }
      ],
      dates: {
        start: "2026-01-01T00:00:00.000Z",
        end: "2026-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2025-12-21",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "Engineering Applications of Neural Networks/ Engineering Applications & Advances of AI 2026 [Crete city of Chania, Greece] [Jul 16, 2026 - Jul 19, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191192&copyownerid=166141" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191192&copyownerid=166141",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191192&copyownerid=166141"
      }
    },
    {
      id: "wikicfp-ieee-cnml-2026---ieee-2026-4th-international-confe",
      title: "IEEE-CNML 2026 : IEEE 2026 4th International Conference on Communication Networks and Machine Learning",
      organizer: "wikicfp",
      icon: "📄",
      page: "cfp",
      category: ["cfp"],
      type: ["ml"],
      tags: [
        { text: "NEW", color: "gold" },
        { text: "wikicfp", color: "default" }
      ],
      dates: {
        start: "2026-01-01T00:00:00.000Z",
        end: "2026-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2025-12-21",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "IEEE 2026 4th International Conference on Communication Networks and Machine Learning [Chongqing, China] [Jan 30, 2026 - Feb 1, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191170&copyownerid=182680" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191170&copyownerid=182680",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191170&copyownerid=182680"
      }
    },
    {
      id: "wikicfp-scml-2026---international-conference-on-symbolic-c",
      title: "SCML 2026 : International Conference on Symbolic Computation and Machine Learning",
      organizer: "wikicfp",
      icon: "📄",
      page: "cfp",
      category: ["cfp"],
      type: ["ml"],
      tags: [
        { text: "NEW", color: "gold" },
        { text: "wikicfp", color: "default" }
      ],
      dates: {
        start: "2026-01-01T00:00:00.000Z",
        end: "2026-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2025-12-21",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "International Conference on Symbolic Computation and Machine Learning [Hagenberg, Austria] [Jul 6, 2026 - Jul 8, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191169&copyownerid=194170" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191169&copyownerid=194170",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191169&copyownerid=194170"
      }
    },
    {
      id: "wikicfp-numta-2026---5th-international-conference-and-summ",
      title: "NUMTA 2026 : 5th International Conference and Summer School on Numerical Computations: Theory and Algorithms",
      organizer: "wikicfp",
      icon: "📄",
      page: "cfp",
      category: ["cfp"],
      type: ["ml"],
      tags: [
        { text: "NEW", color: "gold" },
        { text: "wikicfp", color: "default" }
      ],
      dates: {
        start: "2026-01-01T00:00:00.000Z",
        end: "2026-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2025-12-21",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "5th International Conference and Summer School on Numerical Computations: Theory and Algorithms [Falkensteiner Garden Calabria, Italy] [Jun 21, 2026 - Jun 27, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191160&copyownerid=196326" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191160&copyownerid=196326",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191160&copyownerid=196326"
      }
    },
    {
      id: "wikicfp-cvww-2026---computer-vision-winter-workshop",
      title: "CVWW 2026 : Computer Vision Winter Workshop",
      organizer: "wikicfp",
      icon: "📄",
      page: "cfp",
      category: ["cfp"],
      type: ["ml"],
      tags: [
        { text: "NEW", color: "gold" },
        { text: "wikicfp", color: "default" }
      ],
      dates: {
        start: "2026-01-01T00:00:00.000Z",
        end: "2026-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2025-12-21",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "Computer Vision Winter Workshop [Jindřichův Hradec, Czech Republic ] [Feb 9, 2026 - Feb 11, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191146&copyownerid=196297" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191146&copyownerid=196297",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191146&copyownerid=196297"
      }
    },
    {
      id: "wikicfp-copa-2026---15th-symposium-on-conformal-and-probab",
      title: "COPA 2026 : 15th Symposium on Conformal and Probabilistic Prediction with Applications",
      organizer: "wikicfp",
      icon: "📄",
      page: "cfp",
      category: ["cfp"],
      type: ["ml"],
      tags: [
        { text: "NEW", color: "gold" },
        { text: "wikicfp", color: "default" }
      ],
      dates: {
        start: "2026-01-01T00:00:00.000Z",
        end: "2026-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2025-12-21",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "15th Symposium on Conformal and Probabilistic Prediction with Applications [Göteborg, Sweden] [Sep 2, 2026 - Sep 4, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191134&copyownerid=196288" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191134&copyownerid=196288",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191134&copyownerid=196288"
      }
    },
    {
      id: "wikicfp-ieee-iscait-2026---ieee-2026-5th-international-sym",
      title: "IEEE-ISCAIT 2026 : IEEE 2026 5th International Symposium on Computer Applications and Information Technology",
      organizer: "wikicfp",
      icon: "📄",
      page: "cfp",
      category: ["cfp"],
      type: ["ml"],
      tags: [
        { text: "NEW", color: "gold" },
        { text: "wikicfp", color: "default" }
      ],
      dates: {
        start: "2026-01-01T00:00:00.000Z",
        end: "2026-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2025-12-21",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "IEEE 2026 5th International Symposium on Computer Applications and Information Technology [Dongguan, China] [Jan 23, 2026 - Jan 25, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191120&copyownerid=182680" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191120&copyownerid=182680",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191120&copyownerid=182680"
      }
    },
    {
      id: "wikicfp-swiss-ai-days-2026---swiss-ai-center--amp--hes-so-",
      title: "Swiss AI Days 2026 : Swiss AI Center &amp; HES-SO AI Days",
      organizer: "wikicfp",
      icon: "📄",
      page: "cfp",
      category: ["cfp"],
      type: ["ml"],
      tags: [
        { text: "NEW", color: "gold" },
        { text: "wikicfp", color: "default" }
      ],
      dates: {
        start: "2026-01-01T00:00:00.000Z",
        end: "2026-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2025-12-21",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "Swiss AI Center & HES-SO AI Days [Martigny, Fribourg, Switzerland] [Mar 23, 2026 - Mar 25, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191117&copyownerid=196277" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191117&copyownerid=196277",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191117&copyownerid=196277"
      }
    },
    {
      id: "wikicfp-ares-2026---the-21st-international-conference-on-a",
      title: "ARES 2026 : The 21st International Conference on Availability, Reliability and Security",
      organizer: "wikicfp",
      icon: "📄",
      page: "cfp",
      category: ["cfp"],
      type: ["ml"],
      tags: [
        { text: "NEW", color: "gold" },
        { text: "wikicfp", color: "default" }
      ],
      dates: {
        start: "2026-01-01T00:00:00.000Z",
        end: "2026-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2025-12-21",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "The 21st International Conference on Availability, Reliability and Security [Linköping] [Aug 24, 2026 - Aug 27, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191057&copyownerid=196247" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191057&copyownerid=196247",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191057&copyownerid=196247"
      }
    },
    {
      id: "wikicfp-learning--amp--optimization-2026---asce-emi-minisy",
      title: "Learning &amp; Optimization 2026 : ASCE EMI Minisymposium on Probabilistic Learning, Stochastic Optimization, and Digital Twins",
      organizer: "wikicfp",
      icon: "📄",
      page: "cfp",
      category: ["cfp"],
      type: ["ml"],
      tags: [
        { text: "NEW", color: "gold" },
        { text: "wikicfp", color: "default" }
      ],
      dates: {
        start: "2026-01-01T00:00:00.000Z",
        end: "2026-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2025-12-21",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "ASCE EMI Minisymposium on Probabilistic Learning, Stochastic Optimization, and Digital Twins [Boulder, Colorado, USA] [Jun 2, 2026 - Jun 5, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191020&copyownerid=66551" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191020&copyownerid=66551",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191020&copyownerid=66551"
      }
    },
    {
      id: "wikicfp-icbemd-2026---2026-2nd-international-conference-on",
      title: "ICBEMD 2026 : 2026 2nd International Conference on Biomedical Engineering and Medical Devices",
      organizer: "wikicfp",
      icon: "📄",
      page: "cfp",
      category: ["cfp"],
      type: ["ml"],
      tags: [
        { text: "NEW", color: "gold" },
        { text: "wikicfp", color: "default" }
      ],
      dates: {
        start: "2026-01-01T00:00:00.000Z",
        end: "2026-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2025-12-21",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "2026 2nd International Conference on Biomedical Engineering and Medical Devices [Shenyang, China] [Jan 9, 2026 - Jan 11, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191004&copyownerid=163220" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191004&copyownerid=163220",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191004&copyownerid=163220"
      }
    },
    {
      id: "wikicfp-icaise--ei-2026---2026-5th-international-conferenc",
      title: "ICAISE--EI 2026 : 2026 5th International Conference on Artificial Intelligence and Software Engineering (ICAISE 2026)",
      organizer: "wikicfp",
      icon: "📄",
      page: "cfp",
      category: ["cfp"],
      type: ["ml"],
      tags: [
        { text: "NEW", color: "gold" },
        { text: "wikicfp", color: "default" }
      ],
      dates: {
        start: "2026-01-01T00:00:00.000Z",
        end: "2026-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2025-12-21",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "2026 5th International Conference on Artificial Intelligence and Software Engineering (ICAISE 2026) [Tokyo, Japan] [Aug 21, 2026 - Aug 23, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=190972&copyownerid=13881" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=190972&copyownerid=13881",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=190972&copyownerid=13881"
      }
    },
    {
      id: "wikicfp-spml-2026---2026-ieee-9th-international-conference",
      title: "SPML 2026 : 2026 IEEE 9th International Conference on Signal Processing and Machine Learning (SPML 2026)",
      organizer: "wikicfp",
      icon: "📄",
      page: "cfp",
      category: ["cfp"],
      type: ["ml"],
      tags: [
        { text: "NEW", color: "gold" },
        { text: "wikicfp", color: "default" }
      ],
      dates: {
        start: "2026-01-01T00:00:00.000Z",
        end: "2026-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2025-12-21",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "2026 IEEE 9th International Conference on Signal Processing and Machine Learning (SPML 2026) [Hangzhou, China] [Jul 10, 2026 - Jul 12, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=190970&copyownerid=13881" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=190970&copyownerid=13881",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=190970&copyownerid=13881"
      }
    },
    {
      id: "wikicfp-ficloud--2026----the-ieee-13th-international-confe",
      title: "FiCloud  2026 :  The IEEE 13th International Conference on Future Internet of Things and Cloud",
      organizer: "wikicfp",
      icon: "📄",
      page: "cfp",
      category: ["cfp"],
      type: ["ml"],
      tags: [
        { text: "NEW", color: "gold" },
        { text: "wikicfp", color: "default" }
      ],
      dates: {
        start: "2026-01-01T00:00:00.000Z",
        end: "2026-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2025-12-21",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "The IEEE 13th International Conference on Future Internet of Things and Cloud [Granada] [Jul 20, 2026 - Jul 22, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=190951&copyownerid=21186" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=190951&copyownerid=21186",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=190951&copyownerid=21186"
      }
    },
    {
      id: "wikicfp-aibb-2026---the-7th-joint-international-conference",
      title: "AIBB 2026 : The 7th Joint International Conference on AI, Big Data and Blockchain",
      organizer: "wikicfp",
      icon: "📄",
      page: "cfp",
      category: ["cfp"],
      type: ["ml"],
      tags: [
        { text: "NEW", color: "gold" },
        { text: "wikicfp", color: "default" }
      ],
      dates: {
        start: "2026-01-01T00:00:00.000Z",
        end: "2026-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2025-12-21",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "The 7th Joint International Conference on AI, Big Data and Blockchain [Granada] [Jul 20, 2026 - Jul 22, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=190950&copyownerid=21186" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=190950&copyownerid=21186",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=190950&copyownerid=21186"
      }
    },
    {
      id: "wikicfp-isiot-2026---the-international-conference-on-intel",
      title: "ISIoT 2026 : The International Conference on Intelligent Systems and Internet of Things 2026",
      organizer: "wikicfp",
      icon: "📄",
      page: "cfp",
      category: ["cfp"],
      type: ["ml"],
      tags: [
        { text: "NEW", color: "gold" },
        { text: "wikicfp", color: "default" }
      ],
      dates: {
        start: "2026-01-01T00:00:00.000Z",
        end: "2026-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2025-12-21",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "The International Conference on Intelligent Systems and Internet of Things 2026 [USMBA, Fez, Morocco] [May 14, 2026 - May 15, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=190946&copyownerid=196130" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=190946&copyownerid=196130",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=190946&copyownerid=196130"
      }
    },
    {
      id: "wikicfp-aitc--ei-2026---2026-8th-international-artificial-",
      title: "AITC--EI 2026 : 2026 8th International Artificial Intelligence Technology Conference (AITC 2026)",
      organizer: "wikicfp",
      icon: "📄",
      page: "cfp",
      category: ["cfp"],
      type: ["ml"],
      tags: [
        { text: "NEW", color: "gold" },
        { text: "wikicfp", color: "default" }
      ],
      dates: {
        start: "2026-01-01T00:00:00.000Z",
        end: "2026-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2025-12-21",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "2026 8th International Artificial Intelligence Technology Conference (AITC 2026) [Chengdu, China] [Jun 19, 2026 - Jun 21, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=190928&copyownerid=13881" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=190928&copyownerid=13881",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=190928&copyownerid=13881"
      }
    },
    {
      id: "wikicfp-fl-fm-thewebconf-2026---international-workshop-on-",
      title: "FL@FM-TheWebConf 2026 : International Workshop on Federated Foundation Models for the Web 2026",
      organizer: "wikicfp",
      icon: "📄",
      page: "cfp",
      category: ["cfp"],
      type: ["ml"],
      tags: [
        { text: "NEW", color: "gold" },
        { text: "wikicfp", color: "default" }
      ],
      dates: {
        start: "2026-01-01T00:00:00.000Z",
        end: "2026-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2025-12-21",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "International Workshop on Federated Foundation Models for the Web 2026 [Dubai, UAE] [Apr 13, 2026 - Apr 17, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=190864&copyownerid=80806" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=190864&copyownerid=80806",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=190864&copyownerid=80806"
      }
    }
  ]
};

// Helper API for accessing event data
const EventsAPI = {
  // Sort events by start date (earliest first)
  _sortByDate(events) {
    return [...events].sort((a, b) => {
      const dateA = new Date(a.dates.start);
      const dateB = new Date(b.dates.start);
      return dateA - dateB;
    });
  },

  getAll() {
    return this._sortByDate(EVENTS_DATA.events);
  },

  getByPage(pageName) {
    const filtered = EVENTS_DATA.events.filter(e => e.page === pageName);
    return this._sortByDate(filtered);
  },

  getById(id) {
    return EVENTS_DATA.events.find(e => e.id === id);
  },

  getFeatured(pageName) {
    return EVENTS_DATA.events.find(e => e.isFeatured && e.page === pageName);
  },

  getFiltersForPage(pageName) {
    return EVENTS_DATA.filters[pageName] || [];
  },

  getMeta() {
    return EVENTS_DATA.meta;
  },

  filterEvents(events, filterValue) {
    if (filterValue === 'all') return events;

    // Special handling for "new" filter
    if (filterValue === 'new') {
      return events.filter(event => event.isNew === true);
    }

    return events.filter(event => {
      const matchesCategory = event.category.includes(filterValue);
      const matchesType = event.type.includes(filterValue);
      return matchesCategory || matchesType;
    });
  },

  // Get count of new events
  getNewEventsCount() {
    return EVENTS_DATA.events.filter(e => e.isNew === true).length;
  }
};
