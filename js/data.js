// 2026 Tech Events Calendar - Data Layer
// Single source of truth for all events

const EVENTS_DATA = {
  meta: {
    title: "2026 Tech Events Calendar",
    subtitle: "Your curated roadmap to impactful AI, Robotics & Startup events in 2026",
    totalEvents: 249,
    totalPrizes: "$2M+",
    berlinEvents: 0,
    cfpCount: 107
  },

  // Filter definitions for each page
  filters: {
    all: [
      { id: "all", label: "All", icon: null },
      { id: "saved", label: "My Events", icon: "⭐", showCount: true },
      { id: "new", label: "New", icon: "✨" },
      { id: "events", label: "Conferences", icon: "🎯" },
      { id: "hackathons", label: "Hackathons", icon: "💻" },
      { id: "cfp", label: "CFPs", icon: "📄" },
      { id: "archive", label: "Archive", icon: "📦" }
    ],
    "my-events": [
      { id: "all", label: "All Saved", icon: null },
      { id: "events", label: "Conferences", icon: "🎯" },
      { id: "hackathons", label: "Hackathons", icon: "💻" },
      { id: "cfp", label: "CFPs", icon: "📄" },
      { id: "past", label: "Past", icon: "📦" }
    ],
    events: [
      { id: "all", label: "All Events", icon: null },
      { id: "saved", label: "My Events", icon: "⭐", showCount: true },
      { id: "new", label: "New", icon: "✨" },
      { id: "berlin", label: "Berlin", icon: "🇩🇪" },
      { id: "mega-conference", label: "Mega Conferences", icon: "🌐" },
      { id: "robotics-ai", label: "Robotics & AI", icon: "🤖" },
      { id: "frontend", label: "Frontend/JS", icon: "⚛️" },
      { id: "devops", label: "DevOps/Cloud", icon: "☁️" },
      { id: "security", label: "Security", icon: "🔐" },
      { id: "archive", label: "Archive", icon: "📦" }
    ],
    hackathons: [
      { id: "all", label: "All", icon: null },
      { id: "saved", label: "My Events", icon: "⭐", showCount: true },
      { id: "new", label: "New", icon: "✨" },
      { id: "hackathon", label: "Hackathons", icon: "💻" },
      { id: "startup", label: "Startup", icon: "🚀" },
      { id: "competition", label: "Competitions", icon: "🏆" },
      { id: "africa", label: "Africa Focus", icon: "🌍" },
      { id: "archive", label: "Archive", icon: "📦" }
    ],
    cfp: [
      { id: "all", label: "All CFPs", icon: null },
      { id: "saved", label: "My Events", icon: "⭐", showCount: true },
      { id: "new", label: "New", icon: "✨" },
      { id: "ml", label: "Machine Learning", icon: "🤖" },
      { id: "cv", label: "Computer Vision", icon: "👁️" },
      { id: "robotics", label: "Robotics", icon: "🦾" },
      { id: "archive", label: "Archive", icon: "📦" }
    ]
  },

  // All events
  events: [
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
      dateDisplay: {
        month: "Feb",
        day: "6-15"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: true,
      prize: {
        amount: "Part of $1M Prize Pool",
        icon: "💰"
      },
      location: {
        type: "hybrid",
        city: null,
        country: null,
        display: "Online + On-site"
      },
      modal: {
        overview: "Part of the $1,000,000 startup challenge series. Build AI + Robotics solutions, compete in hybrid format (online + on-site), and launch your own startup with potential funding.",
        requirements: ["Build a solution combining AI and Robotics", "Team formation allowed during hackathon", "Working prototype/MVP by submission deadline", "Pitch presentation for on-site phase", "Open to developers, founders, and innovators globally"],
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
      },
      isArchived: true
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
      dateDisplay: {
        month: "Jan",
        day: "22"
      },
      eventType: "Hackathon",
      isUrgent: true,
      isFeatured: false,
      prize: {
        amount: "Cash Prizes",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Virtual"
      },
      modal: {
        overview: "A FREE three-week virtual hackathon to dive deep into AI agent development. Build powerful AI agents using cutting-edge tools and compete for cash prizes. Perfect for developers wanting hands-on experience with AI agents.",
        requirements: ["Build an AI agent or agentic workflow", "Agents should be autonomous, adaptive, and impactful", "Can focus on workflow automation, digital companions, sustainability, industry solutions, or education", "Low-code/no-code applications accepted", "Submit your hack for judging"],
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
      },
      isArchived: true
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
      dateDisplay: {
        month: "Jan",
        day: "31"
      },
      eventType: "Competition",
      isUrgent: true,
      isFeatured: false,
      prize: {
        amount: "$1M+ in Prizes",
        icon: "💰"
      },
      location: {
        type: "onsite",
        city: "Houston",
        country: "USA",
        display: "Houston, TX"
      },
      modal: {
        overview: "The Rice Business Plan Competition is the world's largest and richest graduate-level student startup competition. It provides student entrepreneurs with real-world feedback and exposure to investors while competing for over $1 million in prizes.",
        requirements: ["At least one graduate student must be on the founding team", "Must have a viable technology-based startup concept", "Submit a detailed business plan", "Present to panels of investors and executives"],
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
      },
      isArchived: true
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
      dateDisplay: {
        month: "Feb",
        day: "28"
      },
      eventType: "Competition",
      isUrgent: false,
      isFeatured: false,
      prize: {
        amount: "$1M USD Grand Prize",
        icon: "💰"
      },
      location: {
        type: "hybrid",
        city: null,
        country: null,
        display: "Global"
      },
      modal: {
        overview: "The Hult Prize challenges students to solve the world's most pressing social issues. Teams compete for $1 million in startup funding to launch sustainable social enterprises.",
        requirements: ["Teams of 3-4 university students", "Address the annual challenge theme", "Progress through campus, regional, and global rounds", "Develop a viable, scalable social enterprise"],
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
      dateDisplay: {
        month: "Feb",
        day: "22"
      },
      eventType: "Challenge",
      isUrgent: false,
      isFeatured: false,
      prize: {
        amount: "$3,000/member (Top 3)",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Virtual"
      },
      modal: {
        overview: "The Google Solution Challenge invites university students to build solutions using Google technologies to address one or more of the United Nations' 17 Sustainable Development Goals.",
        requirements: ["Must be a GDSC member or university student", "Use one or more Google products/platforms", "Address at least one UN SDG", "Submit a working demo and video"],
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
      },
      isArchived: true
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
      dateDisplay: {
        month: "Jun",
        day: "11"
      },
      eventType: "Deep Tech",
      isUrgent: false,
      isFeatured: false,
      prize: {
        amount: "€100K+ Prizes",
        icon: "💰"
      },
      location: {
        type: "onsite",
        city: "Paris",
        country: "France",
        display: "Paris, France"
      },
      modal: {
        overview: "The Hello Tomorrow Global Challenge is the world's leading deep tech startup competition. It connects science entrepreneurs with investors, corporates, and mentors to transform breakthrough technologies into global solutions.",
        requirements: ["Deep tech startup with proprietary technology", "Technology ready for commercialization (TRL 3+)", "Focus on AI, Energy, Health, Industry, or Space tracks"],
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
      dateDisplay: {
        month: "Mar",
        day: "TBA"
      },
      eventType: "Challenge",
      isUrgent: false,
      isFeatured: false,
      prize: {
        amount: "Prizes + Mentorship",
        icon: "🏆"
      },
      location: {
        type: "hybrid",
        city: null,
        country: null,
        display: "Africa-wide"
      },
      modal: {
        overview: "The Africa Business Concept Challenge empowers African students to develop innovative business ideas addressing local and regional challenges.",
        requirements: ["African university students", "Business concept addressing African challenges", "Team of 2-5 members"],
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "GBSN Website", url: "https://gbsn.org/" }
        ]
      },
      links: {
        register: "https://gbsn.org/",
        website: "https://gbsn.org/"
      },
      isArchived: true
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
      dateDisplay: {
        month: "Feb",
        day: "TBA"
      },
      eventType: "Awards",
      isUrgent: false,
      isFeatured: false,
      prize: {
        amount: "Recognition + Prizes",
        icon: "🏆"
      },
      location: {
        type: "onsite",
        city: "Nairobi",
        country: "Kenya",
        display: "Nairobi, Kenya"
      },
      modal: {
        overview: "The Africa Tech Summit Awards celebrate the most innovative tech companies and leaders transforming Africa's digital economy.",
        requirements: ["African tech company or founder", "Demonstrated innovation and impact", "Operating in Africa"],
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://africatechsummit.com/" }
        ]
      },
      links: {
        register: "https://africatechsummit.com/",
        website: "https://africatechsummit.com/"
      },
      isArchived: true
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
      dateDisplay: {
        month: "Open",
        day: "2026"
      },
      eventType: "Funding",
      isUrgent: false,
      isFeatured: false,
      prize: {
        amount: "Up to €200K Funding",
        icon: "💰"
      },
      location: {
        type: "hybrid",
        city: null,
        country: null,
        display: "Global"
      },
      modal: {
        overview: "develoPPP Ventures provides funding and support for startups working on development challenges in emerging markets, with a focus on Africa.",
        requirements: ["Startup with development impact focus", "Working in emerging markets", "Scalable business model"],
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
      dateDisplay: {
        month: "Jan",
        day: "19"
      },
      eventType: "CFP",
      isUrgent: true,
      isFeatured: false,
      prize: null,
      location: {
        type: "onsite",
        city: "Montreal",
        country: "Canada",
        display: "Montreal, Canada"
      },
      modal: {
        overview: "IJCAI is the premier international gathering of researchers in Artificial Intelligence. The conference covers all areas of AI research.",
        requirements: null,
        keyDates: [
          { label: "Abstract Deadline", value: "January 15, 2026" },
          { label: "Paper Deadline", value: "January 19, 2026" },
          { label: "Conference", value: "August 1-7, 2026" }
        ],
        topics: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Robotics & Autonomous Systems", "Knowledge Representation"],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://ijcai.org/" }
        ]
      },
      links: {
        register: "https://ijcai.org/",
        website: "https://ijcai.org/"
      },
      isArchived: true
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
      dateDisplay: {
        month: "Jan",
        day: "29"
      },
      eventType: "CFP",
      isUrgent: true,
      isFeatured: false,
      prize: null,
      location: {
        type: "onsite",
        city: "Vienna",
        country: "Austria",
        display: "Vienna, Austria"
      },
      modal: {
        overview: "ICML is the premier gathering of professionals dedicated to the advancement of the branch of artificial intelligence known as machine learning.",
        requirements: null,
        keyDates: [
          { label: "Abstract Deadline", value: "January 24, 2026 (12:00 PM UTC)" },
          { label: "Paper Deadline", value: "January 29, 2026 (12:00 PM UTC)" },
          { label: "Conference", value: "July 7-11, 2026" }
        ],
        topics: ["Deep Learning & Neural Networks", "Reinforcement Learning", "Optimization & Theory", "Probabilistic Methods", "Applications of ML"],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://icml.cc/" }
        ]
      },
      links: {
        register: "https://icml.cc/",
        website: "https://icml.cc/"
      },
      isArchived: true
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
      dateDisplay: {
        month: "Mar",
        day: "6"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "onsite",
        city: "Zurich",
        country: "Switzerland",
        display: "Zurich, Switzerland"
      },
      modal: {
        overview: "ECCV is a biennial research conference on computer vision, held in Europe. It is one of the top conferences in computer vision.",
        requirements: null,
        keyDates: [
          { label: "Paper Deadline", value: "March 6, 2026" },
          { label: "Conference", value: "September 28 - October 3, 2026" }
        ],
        topics: ["3D Vision", "Image Recognition", "Video Understanding", "Deep Learning for Vision", "Medical Imaging"],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://eccv.ecva.net/" }
        ]
      },
      links: {
        register: "https://eccv.ecva.net/",
        website: "https://eccv.ecva.net/"
      },
      isArchived: true
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
      dateDisplay: {
        month: "Jun",
        day: "14"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "onsite",
        city: "Nashville",
        country: "USA",
        display: "Nashville, USA"
      },
      modal: {
        overview: "CVPR is the premier annual computer vision event comprising the main conference and several co-located workshops and tutorials.",
        requirements: null,
        keyDates: [
          { label: "Paper Deadline", value: "November 2025 (for 2026)" },
          { label: "Conference", value: "June 14-20, 2026" }
        ],
        topics: ["Computer Vision", "Pattern Recognition", "Deep Learning", "3D Vision", "Autonomous Systems"],
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
      dateDisplay: {
        month: "Jun",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "onsite",
        city: "Vienna",
        country: "Austria",
        display: "Vienna, Austria"
      },
      modal: {
        overview: "ICRA is the IEEE flagship conference on robotics and automation. It brings together the world's top researchers in robotics.",
        requirements: null,
        keyDates: [
          { label: "Paper Deadline", value: "September 15, 2025 (for 2026)" },
          { label: "Conference", value: "June 1-5, 2026" }
        ],
        topics: ["Robot Manipulation", "Autonomous Navigation", "Human-Robot Interaction", "Robot Learning", "Swarm Robotics"],
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
      dateDisplay: {
        month: "Dec",
        day: "6"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "onsite",
        city: "Sydney",
        country: "Australia",
        display: "Sydney, Australia"
      },
      modal: {
        overview: "NeurIPS is one of the most prestigious conferences in machine learning and computational neuroscience. It features cutting-edge research in neural networks and deep learning.",
        requirements: null,
        keyDates: [
          { label: "Paper Deadline", value: "May 15, 2026" },
          { label: "Conference", value: "December 6-12, 2026" }
        ],
        topics: ["Deep Learning", "Reinforcement Learning", "Generative Models", "Optimization", "Neuroscience"],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://neurips.cc/" }
        ]
      },
      links: {
        register: "https://neurips.cc/",
        website: "https://neurips.cc/"
      },
      isArchived: true
    },
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
      dateDisplay: {
        month: "Mar",
        day: "19"
      },
      eventType: "Security",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "onsite",
        city: "Berlin",
        country: "Germany",
        display: "Berlin, Germany"
      },
      modal: {
        overview: "Rethink! IAM is a premier conference focused on Identity and Access Management, cybersecurity, and digital identity solutions. Network with security professionals and learn about the latest trends.",
        requirements: null,
        keyDates: null,
        topics: ["Zero Trust Architecture", "Identity Governance & Administration", "Privileged Access Management", "Customer Identity & Access Management (CIAM)", "Multi-Factor Authentication"],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://rethink-iam.de/" }
        ]
      },
      links: {
        register: "https://rethink-iam.de/",
        website: "https://rethink-iam.de/"
      },
      isArchived: true
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
      dateDisplay: {
        month: "May",
        day: "TBA"
      },
      eventType: "AI",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "onsite",
        city: "Berlin",
        country: "Germany",
        display: "Berlin, Germany"
      },
      modal: {
        overview: "Rise of AI is Germany's leading AI conference bringing together the German and European AI ecosystem. Features talks from top researchers, practitioners, and industry leaders.",
        requirements: null,
        keyDates: null,
        topics: ["Network with German AI ecosystem leaders", "Learn about AI applications in European industries", "Discover AI startups and investment opportunities", "Understand EU AI regulations"],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://riseof.ai/" }
        ]
      },
      links: {
        register: "https://riseof.ai/",
        website: "https://riseof.ai/"
      },
      isArchived: true
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
      dateDisplay: {
        month: "May",
        day: "22-23"
      },
      eventType: "Hardware",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "onsite",
        city: "Berlin",
        country: "Germany",
        display: "Berlin, Germany"
      },
      modal: {
        overview: "The Open Hardware Summit is the annual conference organized by OSHWA. It brings together makers, engineers, and enthusiasts to discuss and showcase open source hardware projects.",
        requirements: null,
        keyDates: null,
        topics: ["Open source hardware design and manufacturing", "DIY electronics and maker culture", "Hardware documentation best practices", "Business models for open hardware", "Community building and collaboration"],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://2026.oshwa.org/" },
          { icon: "🏛️", label: "OSHWA", url: "https://www.oshwa.org/" }
        ]
      },
      links: {
        register: "https://2026.oshwa.org/",
        website: "https://2026.oshwa.org/"
      },
      isArchived: true
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
      dateDisplay: {
        month: "Jul",
        day: "8-10"
      },
      eventType: "Mega Conference",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "onsite",
        city: "Berlin",
        country: "Germany",
        display: "Berlin, Germany"
      },
      modal: {
        overview: "WeAreDevelopers World Congress is the world's largest developer conference, held annually in Berlin. With 15,000+ attendees from around the globe, it covers all aspects of software development.",
        requirements: null,
        keyDates: null,
        topics: ["Artificial Intelligence & Machine Learning", "Cloud & DevOps", "Frontend & JavaScript", "Security & Privacy", "Leadership & Soft Skills"],
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
      dateDisplay: {
        month: "Sep",
        day: "4-8"
      },
      eventType: "Tech Expo",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "onsite",
        city: "Berlin",
        country: "Germany",
        display: "Berlin, Germany"
      },
      modal: {
        overview: "IFA Berlin is the world's largest consumer electronics trade show, featuring the latest innovations in consumer electronics, home appliances, and information technology.",
        requirements: null,
        keyDates: null,
        topics: ["AI-powered consumer devices and robots", "Smart home and IoT innovations", "Wearables and health tech", "Entertainment and display technology", "Major brand announcements"],
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
      dateDisplay: {
        month: "Sep",
        day: "10"
      },
      eventType: "AI",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "onsite",
        city: "Berlin",
        country: "Germany",
        display: "Berlin, Germany"
      },
      modal: {
        overview: "The Generative AI Summit Berlin focuses on practical applications of LLMs, AI agents, and generative AI in enterprise settings.",
        requirements: null,
        keyDates: null,
        topics: ["Large Language Models (LLMs) in production", "Building AI Agents and agentic workflows", "RAG (Retrieval Augmented Generation)", "Fine-tuning and prompt engineering", "Enterprise GenAI use cases"],
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
      dateDisplay: {
        month: "Sep",
        day: "22"
      },
      eventType: "AI / Quantum",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "onsite",
        city: "Berlin",
        country: "Germany",
        display: "Berlin, Germany"
      },
      modal: {
        overview: "This combined summit covers AI, big data, and quantum computing. Learn about the intersection of these technologies and how they're transforming industries.",
        requirements: null,
        keyDates: null,
        topics: ["AI and Machine Learning applications", "Big Data infrastructure and analytics", "Quantum computing fundamentals", "Quantum machine learning", "Data governance and ethics"],
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
      dateDisplay: {
        month: "TBD",
        day: "2026"
      },
      eventType: "DevOps",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "onsite",
        city: "Berlin",
        country: "Germany",
        display: "Berlin, Germany"
      },
      modal: {
        overview: "DevOpsCon is a conference focused on continuous delivery, microservices, containers, and cloud-native architectures.",
        requirements: null,
        keyDates: null,
        topics: ["Kubernetes and container orchestration", "CI/CD pipelines and automation", "Microservices architecture", "Infrastructure as Code", "Site Reliability Engineering (SRE)", "Platform engineering"],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://devopscon.io/" }
        ]
      },
      links: {
        register: "https://devopscon.io/",
        website: "https://devopscon.io/"
      },
      isArchived: true
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
      dateDisplay: {
        month: "Dec",
        day: "TBA"
      },
      eventType: "Frontend",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "onsite",
        city: "Berlin",
        country: "Germany",
        display: "Berlin, Germany"
      },
      modal: {
        overview: "React Day Berlin is part of the GitNation conference series, focusing on the React ecosystem. Hear from React core team members and community leaders.",
        requirements: null,
        keyDates: null,
        topics: ["React 19+ features and Server Components", "Next.js and modern React frameworks", "State management patterns", "Performance optimization", "Testing and tooling"],
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
      dateDisplay: {
        month: "Jun",
        day: "11-15"
      },
      eventType: "JavaScript",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "hybrid",
        city: "Amsterdam",
        country: "Netherlands",
        display: "Amsterdam + Online"
      },
      modal: {
        overview: "JSNation is the main annual JavaScript conference organized by GitNation. It brings together JavaScript developers from around the world for talks, workshops, and networking.",
        requirements: null,
        keyDates: null,
        topics: ["JavaScript ecosystem and tooling", "Node.js and server-side JS", "TypeScript best practices", "Web APIs and browser features", "Performance optimization"],
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
      dateDisplay: {
        month: "Jun",
        day: "11-15"
      },
      eventType: "React",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "hybrid",
        city: "Amsterdam",
        country: "Netherlands",
        display: "Amsterdam + Online"
      },
      modal: {
        overview: "React Summit is the biggest React conference worldwide, co-located with JSNation in Amsterdam. Features talks from React core team and top community contributors.",
        requirements: null,
        keyDates: null,
        topics: ["React 19+ and Server Components", "Next.js and React frameworks", "State management (Zustand, Jotai, Redux)", "React Native and cross-platform", "Testing and performance"],
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
      dateDisplay: {
        month: "Apr",
        day: "23-24"
      },
      eventType: "Node.js",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online"
      },
      modal: {
        overview: "Node Congress is GitNation's dedicated Node.js conference. It covers everything from backend development to serverless, microservices, and DevOps with Node.",
        requirements: null,
        keyDates: null,
        topics: ["Node.js core and runtime updates", "API development and GraphQL", "Serverless and edge computing", "Microservices architecture", "Database and ORM patterns"],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://nodecongress.com/" },
          { icon: "🎪", label: "GitNation", url: "https://gitnation.com/" }
        ]
      },
      links: {
        register: "https://nodecongress.com/",
        website: "https://nodecongress.com/"
      },
      isArchived: true
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
      dateDisplay: {
        month: "Oct",
        day: "23-25"
      },
      eventType: "React",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "hybrid",
        city: "London",
        country: "UK",
        display: "London + Online"
      },
      modal: {
        overview: "React Advanced is an in-depth React conference focusing on advanced patterns, architecture, and performance. Designed for experienced React developers.",
        requirements: null,
        keyDates: null,
        topics: ["Advanced React patterns", "Performance optimization", "Large-scale application architecture", "Testing strategies", "React internals and debugging"],
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
      dateDisplay: {
        month: "Sep",
        day: "22-24"
      },
      eventType: "AI",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "onsite",
        city: "Amsterdam",
        country: "Netherlands",
        display: "Amsterdam, Netherlands"
      },
      modal: {
        overview: "HumanX EMEA is a premier AI conference bringing together enterprise AI leaders, researchers, and practitioners to discuss the future of AI in business.",
        requirements: null,
        keyDates: null,
        topics: ["Enterprise AI adoption", "AI governance and ethics", "Large Language Models in business", "AI infrastructure and MLOps", "Human-AI collaboration"],
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
      dateDisplay: {
        month: "Jun",
        day: "22-26"
      },
      eventType: "ML",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "onsite",
        city: "Munich",
        country: "Germany",
        display: "Munich, Germany"
      },
      modal: {
        overview: "ML Conference is a practitioner-focused event covering the full ML lifecycle from research to production. Features workshops and deep-dive sessions.",
        requirements: null,
        keyDates: null,
        topics: ["MLOps and ML engineering", "Deep learning frameworks", "NLP and LLMs in production", "Computer vision applications", "AutoML and model optimization"],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://mlconference.ai/munich/" }
        ]
      },
      links: {
        register: "https://mlconference.ai/munich/",
        website: "https://mlconference.ai/munich/"
      }
    },
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
      dateDisplay: {
        month: "Mar",
        day: "23-26"
      },
      eventType: "Cloud Native",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "onsite",
        city: "Amsterdam",
        country: "Netherlands",
        display: "Amsterdam, Netherlands"
      },
      modal: {
        overview: "KubeCon + CloudNativeCon is the flagship conference of the Cloud Native Computing Foundation. It brings together adopters and technologists from leading open source and cloud native communities.",
        requirements: null,
        keyDates: null,
        topics: ["Kubernetes and container orchestration", "Service mesh and networking", "Observability and monitoring", "Security in cloud native environments", "Platform engineering"],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/" }
        ]
      },
      links: {
        register: "https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/",
        website: "https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/"
      },
      isArchived: true
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
      dateDisplay: {
        month: "Apr",
        day: "22-24"
      },
      eventType: "Cloud",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "onsite",
        city: "Las Vegas",
        country: "USA",
        display: "Las Vegas, USA"
      },
      modal: {
        overview: "Google Cloud Next is Google's annual cloud conference featuring product announcements, technical sessions, and hands-on learning opportunities.",
        requirements: null,
        keyDates: null,
        topics: ["Google Cloud Platform services", "AI and ML with Vertex AI", "Data analytics with BigQuery", "Cloud infrastructure and security", "Developer tools and DevOps"],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://cloud.withgoogle.com/next" }
        ]
      },
      links: {
        register: "https://cloud.withgoogle.com/next",
        website: "https://cloud.withgoogle.com/next"
      },
      isArchived: true
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
      dateDisplay: {
        month: "Dec",
        day: "1-5"
      },
      eventType: "Cloud",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "onsite",
        city: "Las Vegas",
        country: "USA",
        display: "Las Vegas, USA"
      },
      modal: {
        overview: "AWS re:Invent is Amazon Web Services' annual conference featuring keynotes, training, certification opportunities, and access to thousands of technical sessions.",
        requirements: null,
        keyDates: null,
        topics: ["AWS services and announcements", "Serverless and containers", "AI/ML with SageMaker and Bedrock", "Security and compliance", "Database and analytics"],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://reinvent.awsevents.com/" }
        ]
      },
      links: {
        register: "https://reinvent.awsevents.com/",
        website: "https://reinvent.awsevents.com/"
      }
    },
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
      dateDisplay: {
        month: "Apr",
        day: "27-30"
      },
      eventType: "Security",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "onsite",
        city: "San Francisco",
        country: "USA",
        display: "San Francisco, USA"
      },
      modal: {
        overview: "RSA Conference is the world's leading information security conference. It brings together security professionals, researchers, and vendors.",
        requirements: null,
        keyDates: null,
        topics: ["Threat intelligence and response", "Zero trust architecture", "Cloud security", "Identity and access management", "AI in cybersecurity"],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://www.rsaconference.com/" }
        ]
      },
      links: {
        register: "https://www.rsaconference.com/",
        website: "https://www.rsaconference.com/"
      },
      isArchived: true
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
      dateDisplay: {
        month: "Aug",
        day: "1-6"
      },
      eventType: "Security",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "onsite",
        city: "Las Vegas",
        country: "USA",
        display: "Las Vegas, USA"
      },
      modal: {
        overview: "Black Hat USA is the world's leading information security event, providing attendees with the latest security research, development, and trends.",
        requirements: null,
        keyDates: null,
        topics: ["Vulnerability research and exploitation", "Reverse engineering", "Applied security and cryptography", "Hardware and embedded security", "AI/ML security"],
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
      dateDisplay: {
        month: "Aug",
        day: "6-9"
      },
      eventType: "Hacker Con",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "onsite",
        city: "Las Vegas",
        country: "USA",
        display: "Las Vegas, USA"
      },
      modal: {
        overview: "DEF CON is one of the world's largest and longest-running hacker conventions. It features talks, workshops, villages, and capture-the-flag competitions.",
        requirements: null,
        keyDates: null,
        topics: ["Hacking villages (IoT, Car, Voting, etc.)", "CTF competitions", "Hardware hacking", "Social engineering", "Privacy and anonymity"],
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
      dateDisplay: {
        month: "Dec",
        day: "7-10"
      },
      eventType: "Security",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "onsite",
        city: "London",
        country: "UK",
        display: "London, UK"
      },
      modal: {
        overview: "Black Hat Europe is the premier cybersecurity event in Europe, featuring the latest in security research and training.",
        requirements: null,
        keyDates: null,
        topics: ["Security research", "Penetration testing", "Threat hunting", "Incident response", "European privacy regulations"],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://www.blackhat.com/eu-26/" }
        ]
      },
      links: {
        register: "https://www.blackhat.com/eu-26/",
        website: "https://www.blackhat.com/eu-26/"
      }
    },
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
      dateDisplay: {
        month: "Nov",
        day: "2-5"
      },
      eventType: "Tech Summit",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "onsite",
        city: "Lisbon",
        country: "Portugal",
        display: "Lisbon, Portugal"
      },
      modal: {
        overview: "Web Summit is one of the largest tech conferences in the world, bringing together startups, investors, and industry leaders. Features AI, fintech, healthtech, and more.",
        requirements: null,
        keyDates: null,
        topics: ["AI and emerging technologies", "Startup ecosystem", "Investor networking", "Climate tech", "Web3 and decentralization"],
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
      dateDisplay: {
        month: "Jun",
        day: "22-25"
      },
      eventType: "Tech Summit",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "onsite",
        city: "Toronto",
        country: "Canada",
        display: "Toronto, Canada"
      },
      modal: {
        overview: "Collision is North America's fastest-growing tech conference, from the creators of Web Summit. Features talks, networking, and startup pitches.",
        requirements: null,
        keyDates: null,
        topics: ["AI and tech innovation", "Startup growth", "Investment trends", "Enterprise technology", "Future of work"],
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
      dateDisplay: {
        month: "Jun",
        day: "17-20"
      },
      eventType: "Tech Summit",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "onsite",
        city: "Paris",
        country: "France",
        display: "Paris, France"
      },
      modal: {
        overview: "VivaTech is Europe's biggest startup and tech event, held annually in Paris. It connects startups, tech leaders, and investors.",
        requirements: null,
        keyDates: null,
        topics: ["European tech ecosystem", "AI and deep tech", "Sustainability and climate tech", "Future of mobility", "Corporate innovation"],
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
      dateDisplay: {
        month: "Jan",
        day: "6-9"
      },
      eventType: "Tech Expo",
      isUrgent: true,
      isFeatured: false,
      prize: null,
      location: {
        type: "onsite",
        city: "Las Vegas",
        country: "USA",
        display: "Las Vegas, USA"
      },
      modal: {
        overview: "CES is the world's most influential tech event, showcasing the latest innovations in consumer electronics, automotive, health tech, and more.",
        requirements: null,
        keyDates: null,
        topics: ["AI and robotics", "Automotive technology", "Smart home and IoT", "Health and wearable tech", "Sustainability innovations"],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://www.ces.tech/" }
        ]
      },
      links: {
        register: "https://www.ces.tech/",
        website: "https://www.ces.tech/"
      },
      isArchived: true
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
      dateDisplay: {
        month: "Mar",
        day: "2-5"
      },
      eventType: "Mobile",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "onsite",
        city: "Barcelona",
        country: "Spain",
        display: "Barcelona, Spain"
      },
      modal: {
        overview: "Mobile World Congress is the world's largest mobile industry event, featuring the latest in mobile technology, 5G/6G, and connected devices.",
        requirements: null,
        keyDates: null,
        topics: ["5G/6G networks and infrastructure", "AI in mobile and telecom", "Connected devices and IoT", "Mobile app development", "Digital transformation"],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://www.mwcbarcelona.com/" }
        ]
      },
      links: {
        register: "https://www.mwcbarcelona.com/",
        website: "https://www.mwcbarcelona.com/"
      },
      isArchived: true
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
      dateDisplay: {
        month: "Mar",
        day: "16-20"
      },
      eventType: "AI",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "hybrid",
        city: "San Jose",
        country: "USA",
        display: "San Jose + Online"
      },
      modal: {
        overview: "NVIDIA GTC is the premier AI conference covering deep learning, data science, and GPU computing. Features Jensen Huang keynotes and cutting-edge AI research.",
        requirements: null,
        keyDates: null,
        topics: ["Generative AI and LLMs", "GPU computing and CUDA", "Autonomous vehicles", "Robotics and simulation", "Healthcare and life sciences AI"],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://www.nvidia.com/gtc/" }
        ]
      },
      links: {
        register: "https://www.nvidia.com/gtc/",
        website: "https://www.nvidia.com/gtc/"
      },
      isArchived: true
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
      dateDisplay: {
        month: "May",
        day: "13-21"
      },
      eventType: "Python",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "onsite",
        city: "Pittsburgh",
        country: "USA",
        display: "Pittsburgh, USA"
      },
      modal: {
        overview: "PyCon US is the largest annual gathering for the Python community. Features talks, tutorials, sprints, and networking opportunities.",
        requirements: null,
        keyDates: null,
        topics: ["Python language and ecosystem", "Data science and ML with Python", "Web development (Django, FastAPI)", "DevOps and automation", "Community and diversity"],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://pycon.org/" }
        ]
      },
      links: {
        register: "https://pycon.org/",
        website: "https://pycon.org/"
      },
      isArchived: true
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
      dateDisplay: {
        month: "Jul",
        day: "13-16"
      },
      eventType: "Go",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "onsite",
        city: "Chicago",
        country: "USA",
        display: "Chicago, USA"
      },
      modal: {
        overview: "GopherCon is the largest conference for the Go programming language community. Features talks from Go team members and community leaders.",
        requirements: null,
        keyDates: null,
        topics: ["Go language features and updates", "Concurrency patterns", "Cloud-native Go development", "Performance optimization", "Testing and tooling"],
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
      dateDisplay: {
        month: "Sep",
        day: "9-11"
      },
      eventType: "Rust",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "onsite",
        city: "Montreal",
        country: "Canada",
        display: "Montreal, Canada"
      },
      modal: {
        overview: "RustConf is the annual conference for the Rust programming language. Features talks on systems programming, WebAssembly, and the Rust ecosystem.",
        requirements: null,
        keyDates: null,
        topics: ["Rust language and compiler", "Async Rust and concurrency", "WebAssembly with Rust", "Embedded systems", "Memory safety"],
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
      dateDisplay: {
        month: "Apr",
        day: "16"
      },
      eventType: "AI",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "onsite",
        city: "Paris",
        country: "France",
        display: "Paris, France"
      },
      modal: {
        overview: "dotAI is a developer-focused AI conference organized by dotConferences. Features curated talks from AI practitioners and researchers.",
        requirements: null,
        keyDates: null,
        topics: ["Machine learning in production", "Deep learning frameworks", "NLP and computer vision", "MLOps and infrastructure", "AI ethics"],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://www.dotai.io/" }
        ]
      },
      links: {
        register: "https://www.dotai.io/",
        website: "https://www.dotai.io/"
      },
      isArchived: true
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
      dateDisplay: {
        month: "Jun",
        day: "10-11"
      },
      eventType: "AI",
      isUrgent: false,
      isFeatured: false,
      prize: null,
      location: {
        type: "onsite",
        city: "London",
        country: "UK",
        display: "London, UK"
      },
      modal: {
        overview: "The AI Summit London is a leading enterprise AI conference, bringing together C-suite executives and AI leaders to discuss AI strategy and implementation.",
        requirements: null,
        keyDates: null,
        topics: ["Enterprise AI strategy", "AI governance and ethics", "Generative AI adoption", "AI in finance and healthcare", "Future of work"],
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://theaisummit.com/london/" }
        ]
      },
      links: {
        register: "https://theaisummit.com/london/",
        website: "https://theaisummit.com/london/"
      }
    },
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
      dateDisplay: {
        month: "Feb",
        day: "9"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2025-12-21",
      prize: {
        amount: "$100,000 Total Prizes",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online"
      },
      modal: {
        overview: "Google DeepMind invites developers to create novel applications using the Gemini 3 API. Build fun, creative, next-generation applications that push AI boundaries through enhanced reasoning, multimodal capabilities, and reduced latency. Grand Prize includes $50,000 + AI Futures Fund interview.",
        requirements: ["Build NEW applications using Gemini 3 API", "Submit ~200-word description of Gemini 3 integration", "Public project link or working demo required", "Public code repository (if no AI Studio link)", "~3-minute demonstration video", "Must be above legal age of majority"],
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
      },
      isArchived: true
    },
{
      id: "aws-ai-league-2026",
      title: "AWS AI League 2026 Championship",
      organizer: "Amazon Web Services",
      icon: "🏆",
      page: "hackathons",
      category: ["hackathon", "competition"],
      type: [],
      tags: [
        { text: "AI", color: "default" },
        { text: "AWS", color: "purple" },
        { text: "$50K Prizes", color: "gold" },
        { text: "NEW", color: "new" }
      ],
      dates: {
        start: "2026-01-01T00:00:00",
        end: "2026-12-31T23:59:59",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "2026",
        day: "TBD"
      },
      eventType: "Competition",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2025-12-21",
      prize: {
        amount: "$50,000 Prize Pool",
        icon: "💰"
      },
      location: {
        type: "hybrid",
        city: null,
        country: null,
        display: "AWS Summits + Online"
      },
      modal: {
        overview: "AWS AI League 2026 Championship is AWS's flagship AI tournament with doubled prize pool. Compete in gamified tournaments to solve real-world business challenges using AWS AI services. Two tracks: Model Customization with Amazon SageMaker AI and Agentic AI with Amazon Bedrock AgentCore.",
        requirements: ["Build AI solutions using AWS services", "Choose: Model Customization or Agentic AI track", "Enterprises can host internal tournaments", "Individual developers compete at AWS Summits", "Receive AWS credits for participation"],
        keyDates: [
          { label: "Competition Year", value: "2026" },
          { label: "Format", value: "Ongoing tournaments throughout 2026" }
        ],
        topics: null,
        resources: [
          { icon: "🌐", label: "AWS AI League", url: "https://aws.amazon.com/ai/aileague" },
          { icon: "📄", label: "Announcement", url: "https://aws.amazon.com/about-aws/whats-new/2025/11/ai-league-2026-championship/" }
        ]
      },
      links: {
        register: "https://aws.amazon.com/ai/aileague",
        website: "https://aws.amazon.com/ai/aileague"
      }
    },
{
      id: "algolia-agent-studio",
      title: "Algolia Agent Studio Challenge",
      organizer: "DEV Community × Algolia",
      icon: "🔍",
      page: "hackathons",
      category: ["hackathon", "competition"],
      type: [],
      tags: [
        { text: "AI Search", color: "default" },
        { text: "Algolia", color: "purple" },
        { text: "NEW", color: "new" }
      ],
      dates: {
        start: "2026-01-07T00:00:00",
        end: "2026-02-01T23:59:00",
        deadline: "2026-02-01T23:59:00",
        countdownTarget: "deadline"
      },
      dateDisplay: {
        month: "Jan",
        day: "7"
      },
      eventType: "Challenge",
      isUrgent: true,
      isFeatured: false,
      isNew: true,
      addedDate: "2025-12-22",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online"
      },
      modal: {
        overview: "Build with Algolia Agent Studio and manage your entire search infrastructure using natural language. Create AI-driven search solutions leveraging Algolia's instant search technology. Winners announced February 19, 2026.",
        requirements: ["DEV Community account required", "Build solution using Algolia Agent Studio", "Submit by February 1, 2026 at 23:59 PT", "Follow #algoliachallenge tag for updates"],
        keyDates: [
          { label: "Contest Start", value: "January 7, 2026" },
          { label: "Submissions Due", value: "February 1, 2026 at 23:59 PT" },
          { label: "Winners Announced", value: "February 19, 2026" }
        ],
        topics: null,
        resources: [
          { icon: "🌐", label: "Challenge Page", url: "https://dev.to/challenges/algolia-2026-01-07" },
          { icon: "📚", label: "Algolia Docs", url: "https://www.algolia.com/doc/" }
        ]
      },
      links: {
        register: "https://dev.to/challenges/algolia-2026-01-07",
        website: "https://dev.to/challenges/algolia-2026-01-07"
      },
      isArchived: true
    },
{
      id: "devpost-28049",
      title: "KU Intramural Programming Competition",
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
        start: "2026-02-07T00:00:00.000Z",
        end: "2026-02-07T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Feb",
        day: "7"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-01",
      prize: {
        amount: "$0",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://ku-ipc.devpost.com/" }
        ]
      },
      links: {
        register: "https://ku-ipc.devpost.com/",
        website: "https://ku-ipc.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-28356",
      title: "Emerald Innovation Challenge",
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
        start: "2026-02-07T00:00:00.000Z",
        end: "2026-02-07T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Feb",
        day: "7"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-01",
      prize: {
        amount: "$0",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://emerald-innovation-challenge.devpost.com/" }
        ]
      },
      links: {
        register: "https://emerald-innovation-challenge.devpost.com/",
        website: "https://emerald-innovation-challenge.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-28220",
      title: "UGAHacks 11",
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
        start: "2026-02-06T00:00:00.000Z",
        end: "2026-02-06T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Feb",
        day: "6"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-01",
      prize: {
        amount: "$0",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://ugahacks-11.devpost.com/" }
        ]
      },
      links: {
        register: "https://ugahacks-11.devpost.com/",
        website: "https://ugahacks-11.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-27920",
      title: "DevFest 2026",
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
        start: "2026-02-07T00:00:00.000Z",
        end: "2026-02-07T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Feb",
        day: "7"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-01",
      prize: {
        amount: "$6,675",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://devfest-2026.devpost.com/" }
        ]
      },
      links: {
        register: "https://devfest-2026.devpost.com/",
        website: "https://devfest-2026.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-28327",
      title: "InnovateHer",
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
        start: "2026-02-07T00:00:00.000Z",
        end: "2026-02-07T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Feb",
        day: "7"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-01",
      prize: {
        amount: "$0",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://innovateher-2026.devpost.com/" }
        ]
      },
      links: {
        register: "https://innovateher-2026.devpost.com/",
        website: "https://innovateher-2026.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-28340",
      title: "GCES Upstart 2026",
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
        start: "2026-02-07T00:00:00.000Z",
        end: "2026-02-07T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Feb",
        day: "7"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-01",
      prize: {
        amount: "$2,500",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://upstart-2026.devpost.com/" }
        ]
      },
      links: {
        register: "https://upstart-2026.devpost.com/",
        website: "https://upstart-2026.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-28351",
      title: "TIDALHACK:26",
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
        start: "2026-02-07T00:00:00.000Z",
        end: "2026-02-07T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Feb",
        day: "7"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-01",
      prize: {
        amount: "$3,000",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://tidalhack-26.devpost.com/" }
        ]
      },
      links: {
        register: "https://tidalhack-26.devpost.com/",
        website: "https://tidalhack-26.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-28339",
      title: "Hacklahoma 2026",
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
        start: "2026-02-07T00:00:00.000Z",
        end: "2026-02-07T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Feb",
        day: "7"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-01",
      prize: {
        amount: "$0",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://hacklahoma-2026.devpost.com/" }
        ]
      },
      links: {
        register: "https://hacklahoma-2026.devpost.com/",
        website: "https://hacklahoma-2026.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-26980",
      title: "Hack the Coast 2026",
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
        start: "2026-02-07T00:00:00.000Z",
        end: "2026-02-07T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Feb",
        day: "7"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-01",
      prize: {
        amount: "$CAD 0",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://hackthecoast.devpost.com/" }
        ]
      },
      links: {
        register: "https://hackthecoast.devpost.com/",
        website: "https://hackthecoast.devpost.com/"
      },
      isArchived: true
    },
{
      id: "wikicfp-iiti-2026---10th-international-scientific-conferen",
      title: "IITI 2026 : 10th International Scientific Conference “Intelligent Information Technologies for Industry” (IITI)",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-01",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "10th International Scientific Conference “Intelligent Information Technologies for Industry” (IITI)  [Changsha, Hunan, China] [Oct 14, 2026 - Oct 18, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192057&copyownerid=13149" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192057&copyownerid=13149",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192057&copyownerid=13149"
      }
    },
{
      id: "wikicfp-mlhc-2026---machine-learning-for-healthcare",
      title: "MLHC 2026 : Machine Learning for Healthcare",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-01",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "Machine Learning for Healthcare [Baltimore, MD, USA] [Aug 12, 2026 - Aug 14, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192047&copyownerid=3032" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192047&copyownerid=3032",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192047&copyownerid=3032"
      }
    },
{
      id: "wikicfp-intellisys-2026---12th-intelligent-systems-confere",
      title: "IntelliSys 2026 : 12th Intelligent Systems Conference",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-01",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "12th Intelligent Systems Conference  [Amsterdam, The Netherlands] [Sep 3, 2026 - Sep 4, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192046&copyownerid=13149" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192046&copyownerid=13149",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192046&copyownerid=13149"
      }
    },
{
      id: "wikicfp-icinci-2026---4th-international-conference-on-inve",
      title: "ICINCI 2026 : 4th International Conference on Inventive Computing and Informatics",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-01",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "4th International Conference on Inventive Computing and Informatics [Bangalore, India] [Jun 10, 2026 - Jun 12, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192045&copyownerid=13149" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192045&copyownerid=13149",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192045&copyownerid=13149"
      }
    },
{
      id: "wikicfp-nlptt-2026---7th-international-conference-on-nlp-t",
      title: "NLPTT 2026 : 7th International Conference on NLP Trends &amp; Technologies",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-01",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "7th International Conference on NLP Trends & Technologies [Melbourne, Australia] [Apr 18, 2026 - Apr 19, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192038&copyownerid=46167" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192038&copyownerid=46167",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192038&copyownerid=46167"
      }
    },
{
      id: "wikicfp-sci-2026---8th-international-conference-on-smart-c",
      title: "SCI 2026 : 8th International Conference on Smart Computing and Informatics",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-01",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "8th International Conference on Smart Computing and Informatics [Hanoi, Vietnam] [Apr 28, 2026 - Apr 29, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192030&copyownerid=13149" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192030&copyownerid=13149",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192030&copyownerid=13149"
      }
    },
{
      id: "wikicfp-ipmu-2026---21st-international-conference-on-infor",
      title: "IPMU 2026 : 21st International Conference on Information Processing and  Management of Uncertainty in Knowledge-Based Systems",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-01",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "21st International Conference on Information Processing and  Management of Uncertainty in Knowledge-Based Systems  [Rome, Italy] [Jun 15, 2026 - Jun 19, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192020&copyownerid=13149" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192020&copyownerid=13149",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192020&copyownerid=13149"
      }
    },
{
      id: "wikicfp-l4dc-2025---7th-annual-learning-for-dynamics--amp-",
      title: "L4DC 2025 : 7th Annual Learning for Dynamics &amp; Control Conference",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-01",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "7th Annual Learning for Dynamics & Control Conference [University of Michigan, Ann Arbor] [Jun 4, 2025 - Jun 6, 2025]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192004&copyownerid=13149" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192004&copyownerid=13149",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192004&copyownerid=13149"
      }
    },
{
      id: "wikicfp-l4dc-2026---8th-annual-learning-for-dynamics--amp-",
      title: "L4DC 2026 : 8th Annual Learning for Dynamics &amp; Control Conference",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-01",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "8th Annual Learning for Dynamics & Control Conference [University of Southern California] [Jun 17, 2026 - Jun 19, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192003&copyownerid=13149" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192003&copyownerid=13149",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192003&copyownerid=13149"
      }
    },
{
      id: "wikicfp-dmdb-2026---13th-international-conference-on-data-",
      title: "DMDB 2026 : 13th International Conference on Data Mining and Database",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-01",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "13th International Conference on Data Mining and Database [Vienna, Austria] [Mar 14, 2026 - Mar 15, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191992&copyownerid=46167" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191992&copyownerid=46167",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191992&copyownerid=46167"
      }
    },
{
      id: "wikicfp-miwai-2026---19th-multi-disciplinary-international",
      title: "MIWAI 2026 : 19th Multi-Disciplinary International Conference on Artificial Intelligence",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-01",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "19th Multi-Disciplinary International Conference on Artificial Intelligence [Halifax, Nova Scotia, Canada] [Oct 10, 2026 - Oct 12, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191973&copyownerid=13149" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191973&copyownerid=13149",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191973&copyownerid=13149"
      }
    },
{
      id: "wikicfp-icaci-2026---18th-international-conference-on-adva",
      title: "ICACI 2026 : 18th International Conference on Advanced Computational Intelligence",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-01",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "18th International Conference on Advanced Computational Intelligence [Tianshui, Gansu, China] [Aug 13, 2026 - Aug 16, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191957&copyownerid=196967" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191957&copyownerid=196967",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191957&copyownerid=196967"
      }
    },
{
      id: "wikicfp-isnn-2026---20th-international-symposium-on-neural",
      title: "ISNN 2026 : 20th International Symposium on Neural Networks",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-01",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "20th International Symposium on Neural Networks [Hanzhong, Shaanxi, China] [Aug 18, 2026 - Aug 21, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191956&copyownerid=196967" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191956&copyownerid=196967",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191956&copyownerid=196967"
      }
    },
{
      id: "wikicfp-coit-2026---6th-international-conference-on-comput",
      title: "COIT 2026 : 6th International Conference on Computing and Information Technology",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-01",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "6th International Conference on Computing and Information Technology [Sydney, Australia] [Mar 21, 2026 - Mar 22, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191952&copyownerid=46167" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191952&copyownerid=46167",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191952&copyownerid=46167"
      }
    },
{
      id: "wikicfp-nlpai-2026---4th-international-conference-on-nlp--",
      title: "NLPAI 2026 : 4th International Conference on NLP &amp; AI",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-01",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "4th International Conference on NLP & AI [Virtual Conference] [Mar 30, 2026 - Mar 31, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191951&copyownerid=46167" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191951&copyownerid=46167",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191951&copyownerid=46167"
      }
    },
{
      id: "wikicfp-ieee-mlise-2026---2026-6th-international-conferenc",
      title: "IEEE-MLISE 2026 : 2026 6th International Conference on Machine Learning and Intelligent Systems Engineering",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-01",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "2026 6th International Conference on Machine Learning and Intelligent Systems Engineering [Naples, Italy] [May 28, 2026 - May 31, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191941&copyownerid=182680" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191941&copyownerid=182680",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191941&copyownerid=182680"
      }
    },
{
      id: "wikicfp-amlc-2026---2026-applied-machine-learning-conferen",
      title: "AMLC 2026 : 2026 Applied Machine Learning Conference",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-01",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "2026 Applied Machine Learning Conference [Charlottesville, Virginia] [Apr 17, 2026 - Apr 18, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191930&copyownerid=196954" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191930&copyownerid=196954",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191930&copyownerid=196954"
      }
    },
{
      id: "wikicfp-call-for-phd-forum-contributions---ecml--2026---ca",
      title: "Call for PhD Forum Contributions - ECML  2026 : Call for PhD Forum Contributions - ECML PKDD 2026 - ICORE Rank A",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-01",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "Call for PhD Forum Contributions - ECML PKDD 2026 - ICORE Rank A [Naples] [Sep 7, 2026 - Sep 11, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191920&copyownerid=196945" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191920&copyownerid=196945",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191920&copyownerid=196945"
      }
    },
{
      id: "wikicfp-call-for-workshop-proposals---ecml-pkdd-2026---cal",
      title: "Call for Workshop Proposals - ECML PKDD 2026 : Call for Workshop Proposals - ECML PKDD 2026 - ICORE Rank A",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-01",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "Call for Workshop Proposals - ECML PKDD 2026 - ICORE Rank A [Naples] [Sep 7, 2026 - Sep 11, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191919&copyownerid=196945" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191919&copyownerid=196945",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191919&copyownerid=196945"
      }
    },
{
      id: "wikicfp-ecml-pkdd-2026---ecml-pkdd-2026---european-confere",
      title: "ECML PKDD 2026 : ECML PKDD 2026 : European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-01",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "ECML PKDD 2026 : European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases [Naples] [Sep 7, 2026 - Sep 11, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191917&copyownerid=175190" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191917&copyownerid=175190",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=191917&copyownerid=175190"
      }
    },
{
      id: "devpost-27991",
      title: "Frisco Hacks 2026",
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
        start: "2026-02-09T00:00:00.000Z",
        end: "2026-02-09T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Feb",
        day: "9"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-08",
      prize: {
        amount: "$0",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://friscohack.devpost.com/" }
        ]
      },
      links: {
        register: "https://friscohack.devpost.com/",
        website: "https://friscohack.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-27344",
      title: "Gemini Hack Days FUTMINNA '26",
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
        start: "2026-02-11T00:00:00.000Z",
        end: "2026-02-11T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Feb",
        day: "11"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-08",
      prize: {
        amount: "$0",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://hack-days-futminna-26.devpost.com/" }
        ]
      },
      links: {
        register: "https://hack-days-futminna-26.devpost.com/",
        website: "https://hack-days-futminna-26.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-28392",
      title: "Frisco Hacks Live 2026",
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
        start: "2026-02-10T00:00:00.000Z",
        end: "2026-02-10T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Feb",
        day: "10"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-08",
      prize: {
        amount: "$0",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://frisco-hacks-live-2026.devpost.com/" }
        ]
      },
      links: {
        register: "https://frisco-hacks-live-2026.devpost.com/",
        website: "https://frisco-hacks-live-2026.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-28066",
      title: "NTU Beyond Binary Techathon 2026",
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
        start: "2026-02-09T00:00:00.000Z",
        end: "2026-02-09T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Feb",
        day: "9"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-08",
      prize: {
        amount: "$10,000",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://ntu-beyond-binary-2026.devpost.com/" }
        ]
      },
      links: {
        register: "https://ntu-beyond-binary-2026.devpost.com/",
        website: "https://ntu-beyond-binary-2026.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-28415",
      title: "Xenia Hackathon 2026",
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
        start: "2026-02-13T00:00:00.000Z",
        end: "2026-02-13T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Feb",
        day: "13"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-08",
      prize: {
        amount: "₹ 25,000",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://xenia-hackathon-2026.devpost.com/" }
        ]
      },
      links: {
        register: "https://xenia-hackathon-2026.devpost.com/",
        website: "https://xenia-hackathon-2026.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-28107",
      title: "Hack For Her ",
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
        start: "2026-02-09T00:00:00.000Z",
        end: "2026-02-09T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Feb",
        day: "9"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-08",
      prize: {
        amount: "$50",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://hack-for-her.devpost.com/" }
        ]
      },
      links: {
        register: "https://hack-for-her.devpost.com/",
        website: "https://hack-for-her.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-28335",
      title: "Code Fusion ",
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
        start: "2026-02-13T00:00:00.000Z",
        end: "2026-02-13T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Feb",
        day: "13"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-08",
      prize: {
        amount: "$185",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://code-fusion.devpost.com/" }
        ]
      },
      links: {
        register: "https://code-fusion.devpost.com/",
        website: "https://code-fusion.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-28585",
      title: "The Upside Hack",
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
        start: "2026-02-14T00:00:00.000Z",
        end: "2026-02-14T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Feb",
        day: "14"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-08",
      prize: {
        amount: "$0",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://the-upside-hack.devpost.com/" }
        ]
      },
      links: {
        register: "https://the-upside-hack.devpost.com/",
        website: "https://the-upside-hack.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-28557",
      title: "CTRL+HACK+DEL 2.0",
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
        start: "2026-02-13T00:00:00.000Z",
        end: "2026-02-13T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Feb",
        day: "13"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-08",
      prize: {
        amount: "$CAD 0",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://ctrl-hack-del-2.devpost.com/" }
        ]
      },
      links: {
        register: "https://ctrl-hack-del-2.devpost.com/",
        website: "https://ctrl-hack-del-2.devpost.com/"
      },
      isArchived: true
    },
{
      id: "wikicfp-ss-cpsiot-2026---7th-summer-school-on-cyber-physic",
      title: "SS-CPSIoT 2026 : 7th Summer School on Cyber Physical Systems and Internet of Things",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-08",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "7th Summer School on Cyber Physical Systems and Internet of Things [Budva, Montenegro] [Jun 9, 2026 - Jun 13, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192250&copyownerid=184327" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192250&copyownerid=184327",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192250&copyownerid=184327"
      }
    },
{
      id: "wikicfp-meco-2026---15th-mediterranean-conference-on-embed",
      title: "MECO 2026 : 15th Mediterranean Conference on Embedded Computing",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-08",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "15th Mediterranean Conference on Embedded Computing [Budva, Montenegro] [Jun 9, 2026 - Jun 13, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192248&copyownerid=184327" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192248&copyownerid=184327",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192248&copyownerid=184327"
      }
    },
{
      id: "wikicfp-graai-2026---graphs-across-ai--from-structural-rea",
      title: "GRAAI 2026 : Graphs Across AI: From Structural Reasoning to Foundation Models",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-08",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "Graphs Across AI: From Structural Reasoning to Foundation Models [Maastricht, the Netherlands] [Jun 21, 2026 - Jun 26, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192232&copyownerid=197147" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192232&copyownerid=197147",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192232&copyownerid=197147"
      }
    },
{
      id: "wikicfp-aiccc--ei-2026---2026-9th-artificial-intelligence-",
      title: "AICCC--EI 2026 : 2026 9th Artificial Intelligence and Cloud Computing Conference (AICCC 2026)",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-08",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "2026 9th Artificial Intelligence and Cloud Computing Conference (AICCC 2026) [Tokyo, Japan] [Dec 18, 2026 - Dec 21, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192224&copyownerid=13881" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192224&copyownerid=13881",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192224&copyownerid=13881"
      }
    },
{
      id: "wikicfp-icaii-2026---2026-4th-international-conference-on-",
      title: "ICAII 2026 : 2026 4th International Conference on Artificial Intelligence Innovation (ICAII 2026)",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-08",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "2026 4th International Conference on Artificial Intelligence Innovation (ICAII 2026) [Beijing, China] [Oct 16, 2026 - Oct 18, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192218&copyownerid=13881" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192218&copyownerid=13881",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192218&copyownerid=13881"
      }
    },
{
      id: "wikicfp-iccr-2026---2026-8th-international-conference-on-c",
      title: "ICCR 2026 : 2026 8th International Conference on Control and Robotics (ICCR 2026)",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-08",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "2026 8th International Conference on Control and Robotics (ICCR 2026) [Tokyo, Japan] [Dec 3, 2026 - Dec 5, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192210&copyownerid=13881" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192210&copyownerid=13881",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192210&copyownerid=13881"
      }
    },
{
      id: "wikicfp-mlic-2026---2026-3rd-international-conference-on-m",
      title: "MLIC 2026 : 2026 3rd International Conference on Machine Learning and Intelligent Computing",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-08",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "2026 3rd International Conference on Machine Learning and Intelligent Computing [Zhengzhou, China] [Apr 24, 2026 - Apr 26, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192207&copyownerid=163220" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192207&copyownerid=163220",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192207&copyownerid=163220"
      }
    },
{
      id: "wikicfp-aiat-2026---2026-6th-international-conference-on-a",
      title: "AIAT 2026 : 2026 6th International Conference on Artificial Intelligence and Application Technologies (AIAT 2026)",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-08",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "2026 6th International Conference on Artificial Intelligence and Application Technologies (AIAT 2026) [Tokyo, Japan] [Dec 3, 2026 - Dec 5, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192197&copyownerid=13881" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192197&copyownerid=13881",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192197&copyownerid=13881"
      }
    },
{
      id: "wikicfp-ds-2026---discovery-science",
      title: "DS 2026 : Discovery Science",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-08",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "Discovery Science [Mainz] [Oct 5, 2026 - Oct 9, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192196&copyownerid=197136" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192196&copyownerid=197136",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192196&copyownerid=197136"
      }
    },
{
      id: "wikicfp-ida-2026---intelligent-data-analysis",
      title: "IDA 2026 : Intelligent Data Analysis",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-08",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "Intelligent Data Analysis [Leiden] [Apr 22, 2026 - Apr 24, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192195&copyownerid=197136" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192195&copyownerid=197136",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192195&copyownerid=197136"
      }
    },
{
      id: "wikicfp-wsse-2026---acm--2026-the-8th-world-symposium-on-s",
      title: "WSSE 2026 : ACM--2026 The 8th World Symposium on Software Engineering (WSSE 2026)",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-08",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "ACM--2026 The 8th World Symposium on Software Engineering (WSSE 2026) [Nara, Japan] [Oct 16, 2026 - Oct 18, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192171&copyownerid=13881" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192171&copyownerid=13881",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192171&copyownerid=13881"
      }
    },
{
      id: "wikicfp-ciis--ei-2026---2026-the-9th-international-confere",
      title: "CIIS--EI 2026 : 2026 The 9th International Conference on Computational Intelligence and Intelligent Systems (CIIS 2026)",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-08",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "2026 The 9th International Conference on Computational Intelligence and Intelligent Systems (CIIS 2026) [Osaka, Japan] [Oct 26, 2026 - Oct 28, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192169&copyownerid=13881" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192169&copyownerid=13881",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192169&copyownerid=13881"
      }
    },
{
      id: "wikicfp-ieee-icoias-2026---ieee--2026-the-8th-internationa",
      title: "IEEE ICoIAS 2026 : IEEE--2026 the 8th International Conference on Intelligent Autonomous Systems (ICoIAS 2026)",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-08",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "IEEE--2026 the 8th International Conference on Intelligent Autonomous Systems (ICoIAS 2026) [Qinhuangdao, China] [Aug 21, 2026 - Aug 23, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192162&copyownerid=13881" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192162&copyownerid=13881",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192162&copyownerid=13881"
      }
    },
{
      id: "wikicfp-dmo-fintech-2026---2nd-international-workshop-on-d",
      title: "DMO-FinTech 2026 : 2nd International Workshop on Decision-Making and Optimization in Financial Technologies",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-08",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "2nd International Workshop on Decision-Making and Optimization in Financial Technologies [Hong Kong, China] [Jun 9, 2026 - Jun 9, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192142&copyownerid=13149" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192142&copyownerid=13149",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192142&copyownerid=13149"
      }
    },
{
      id: "wikicfp-it-2026---15thinternational-conference-on-informat",
      title: "IT 2026 : 15thInternational Conference on Information Theory",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-08",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "15thInternational Conference on Information Theory  [Vienna, Austria] [Mar 14, 2026 - Mar 15, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192130&copyownerid=46167" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192130&copyownerid=46167",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192130&copyownerid=46167"
      }
    },
{
      id: "wikicfp-ncta-2026---18th-international-conference-on-neura",
      title: "NCTA 2026 : 18th International Conference on Neural Computation Theory and Applications",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-08",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "18th International Conference on Neural Computation Theory and Applications [Angers, France] [Oct 28, 2026 - Oct 30, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192112&copyownerid=45217" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192112&copyownerid=45217",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192112&copyownerid=45217"
      }
    },
{
      id: "wikicfp-aiih-2026---special-session--ai-innovations-in-aut",
      title: "AIiH 2026 : Special Session- AI Innovations in Autism Diagnosis 2026",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-08",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "Special Session- AI Innovations in Autism Diagnosis 2026 [Imperial College London] [Aug 26, 2026 - Aug 28, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192102&copyownerid=174132" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192102&copyownerid=174132",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192102&copyownerid=174132"
      }
    },
{
      id: "wikicfp-ecml-pkdd-2026--ads-2026---ecml-pkdd-2026---applie",
      title: "ECML PKDD 2026  ADS 2026 : ECML PKDD 2026 : Applied Data Science Track - European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-08",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "ECML PKDD 2026 : Applied Data Science Track - European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases [Naples] [Sep 7, 2026 - Sep 11, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192100&copyownerid=175190" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192100&copyownerid=175190",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192100&copyownerid=175190"
      }
    },
{
      id: "wikicfp-aimsa-2026---20th-international-conference-on-arti",
      title: "AIMSA 2026 : 20th International Conference on Artificial Intelligence: Methodology, Systems, Applications",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-08",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "20th International Conference on Artificial Intelligence: Methodology, Systems, Applications [Sofia, Bulgaria] [Oct 15, 2026 - Oct 16, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192091&copyownerid=95584" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192091&copyownerid=95584",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192091&copyownerid=95584"
      }
    },
{
      id: "wikicfp-comp-2026---open-computer-science",
      title: "COMP 2026 : OPEN COMPUTER SCIENCE",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-08",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "OPEN COMPUTER SCIENCE",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192087&copyownerid=176159" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192087&copyownerid=176159",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192087&copyownerid=176159"
      }
    },
{
      id: "devpost-28409",
      title: "Enigma'26",
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
        start: "2026-02-20T00:00:00.000Z",
        end: "2026-02-20T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Feb",
        day: "20"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-15",
      prize: {
        amount: "₹ 37,098",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://enigma-26.devpost.com/" }
        ]
      },
      links: {
        register: "https://enigma-26.devpost.com/",
        website: "https://enigma-26.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-27390",
      title: "RebelHacks",
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
        start: "2026-02-20T00:00:00.000Z",
        end: "2026-02-20T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Feb",
        day: "20"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-15",
      prize: {
        amount: "$250",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://rebelhacks.devpost.com/" }
        ]
      },
      links: {
        register: "https://rebelhacks.devpost.com/",
        website: "https://rebelhacks.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-28144",
      title: ".devHacks 2026",
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
        start: "2026-02-20T00:00:00.000Z",
        end: "2026-02-20T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Feb",
        day: "20"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-15",
      prize: {
        amount: "$0",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://devhacks-2026.devpost.com/" }
        ]
      },
      links: {
        register: "https://devhacks-2026.devpost.com/",
        website: "https://devhacks-2026.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-28459",
      title: "Hack the Planet 2026",
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
        start: "2026-02-21T00:00:00.000Z",
        end: "2026-02-21T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Feb",
        day: "21"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-15",
      prize: {
        amount: "$0",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://hack-the-planet-2026.devpost.com/" }
        ]
      },
      links: {
        register: "https://hack-the-planet-2026.devpost.com/",
        website: "https://hack-the-planet-2026.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-26256",
      title: "MathHacks",
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
        start: "2026-02-21T00:00:00.000Z",
        end: "2026-02-21T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Feb",
        day: "21"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-15",
      prize: {
        amount: "$CAD 0",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://mathhacks.devpost.com/" }
        ]
      },
      links: {
        register: "https://mathhacks.devpost.com/",
        website: "https://mathhacks.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-28597",
      title: "DJXHack 2.0",
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
        start: "2026-02-21T00:00:00.000Z",
        end: "2026-02-21T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Feb",
        day: "21"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-15",
      prize: {
        amount: "₹ 100,000",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://djxhackathon.devpost.com/" }
        ]
      },
      links: {
        register: "https://djxhackathon.devpost.com/",
        website: "https://djxhackathon.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-28554",
      title: "HackEurope",
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
        start: "2026-02-21T00:00:00.000Z",
        end: "2026-02-21T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Feb",
        day: "21"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-15",
      prize: {
        amount: "€53,000",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://hackeurope.devpost.com/" }
        ]
      },
      links: {
        register: "https://hackeurope.devpost.com/",
        website: "https://hackeurope.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-27988",
      title: "Cavista Hackathon 2026",
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
        start: "2026-02-21T00:00:00.000Z",
        end: "2026-02-21T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Feb",
        day: "21"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-15",
      prize: {
        amount: "$0",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://cavista-hackathon-2026.devpost.com/" }
        ]
      },
      links: {
        register: "https://cavista-hackathon-2026.devpost.com/",
        website: "https://cavista-hackathon-2026.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-27375",
      title: "DeerHacks V",
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
        start: "2026-02-20T00:00:00.000Z",
        end: "2026-02-20T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Feb",
        day: "20"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-15",
      prize: {
        amount: "$CAD 0",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://deerhacks-v.devpost.com/" }
        ]
      },
      links: {
        register: "https://deerhacks-v.devpost.com/",
        website: "https://deerhacks-v.devpost.com/"
      },
      isArchived: true
    },
{
      id: "wikicfp-icrec--ei-2026---2026-11th-international-conferenc",
      title: "ICREC--EI 2026 : 2026 11th International Conference on Renewable Energy and Conservation (ICREC 2026)",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-15",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "2026 11th International Conference on Renewable Energy and Conservation (ICREC 2026) [Rome, Italy] [Nov 20, 2026 - Nov 22, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192421&copyownerid=13881" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192421&copyownerid=13881",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192421&copyownerid=13881"
      }
    },
{
      id: "wikicfp-mlvis-2026---machine-learning-methods-in-visualisa",
      title: "MLVis 2026 : Machine Learning Methods in Visualisation for Big Data",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-15",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "Machine Learning Methods in Visualisation for Big Data [Nottingham, United Kingdom] [Jun 8, 2026 - Jun 8, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192406&copyownerid=132305" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192406&copyownerid=132305",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192406&copyownerid=132305"
      }
    },
{
      id: "wikicfp-icoai--esci-2026---2026-the-13th-international-con",
      title: "ICOAI--ESCI 2026 : 2026 The 13th International Conference on Artificial Intelligence (ICOAI 2026)--ESCI",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-15",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "2026 The 13th International Conference on Artificial Intelligence (ICOAI 2026)--ESCI [Paris, France] [Sep 25, 2026 - Sep 27, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192387&copyownerid=13881" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192387&copyownerid=13881",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192387&copyownerid=13881"
      }
    },
{
      id: "wikicfp-amms--ei-2026---2026-8th-international-applied-mat",
      title: "AMMS--EI 2026 : 2026 8th International Applied Mathematics, Modelling and Simulation Conference (AMMS 2026)",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-15",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "2026 8th International Applied Mathematics, Modelling and Simulation Conference (AMMS 2026) [Paris, France] [Sep 11, 2026 - Sep 13, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192382&copyownerid=13881" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192382&copyownerid=13881",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192382&copyownerid=13881"
      }
    },
{
      id: "wikicfp-grail-v-2026---grounded-retrieval-and-agentic-inte",
      title: "GRAIL-V 2026 : Grounded Retrieval and Agentic Intelligence for Vision-Language [CVPR]",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-15",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "Grounded Retrieval and Agentic Intelligence for Vision-Language [CVPR] [Denver, US] [Jun 3, 2026 - Jun 3, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192372&copyownerid=197243" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192372&copyownerid=197243",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192372&copyownerid=197243"
      }
    },
{
      id: "wikicfp--cfp--smartcomp--2026---ieee-smartcomp-2026--final",
      title: "[CfP] SMARTCOMP  2026 : IEEE SMARTCOMP 2026: Final Call for Research Track Papers and Industry Track Papers (Deadline Extended: 16th February 2026)",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-15",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "IEEE SMARTCOMP 2026: Final Call for Research Track Papers and Industry Track Papers (Deadline Extended: 16th February 2026) [Messina, Italy] [Jun 22, 2026 - Jun 25, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192367&copyownerid=197242" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192367&copyownerid=197242",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192367&copyownerid=197242"
      }
    },
{
      id: "wikicfp-ai--amp--fl-2026---14th-international-conference-o",
      title: "AI &amp; FL 2026 : 14th International Conference of Artificial Intelligence and Fuzzy Logic",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-15",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "14th International Conference of Artificial Intelligence and Fuzzy Logic [Melbourne, Australia] [Apr 18, 2026 - Apr 19, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192361&copyownerid=33993" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192361&copyownerid=33993",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192361&copyownerid=33993"
      }
    },
{
      id: "wikicfp-distinsys-2026---the-6th-ieee-international-worksh",
      title: "DistInSys 2026 : The 6th IEEE International Workshop on Distributed Intelligent Systems",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-15",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "The 6th IEEE International Workshop on Distributed Intelligent Systems  [Vilamoura, Algarve, Portugal] [Jun 23, 2026 - Jun 26, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192323&copyownerid=197217" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192323&copyownerid=197217",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192323&copyownerid=197217"
      }
    },
{
      id: "wikicfp-eibdct-2026---2026-5th-international-conference-on",
      title: "EIBDCT 2026 : 2026 5th International Conference on Electronic Information Engineering, Big Data and Computer Technology",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-15",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "2026 5th International Conference on Electronic Information Engineering, Big Data and Computer Technology [Haikou, China] [Apr 24, 2026 - Apr 26, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192311&copyownerid=163220" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192311&copyownerid=163220",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192311&copyownerid=163220"
      }
    },
{
      id: "wikicfp-ieee-insight-2026---insight--intelligent-systems-f",
      title: "IEEE INSIGHT 2026 : INSIGHT: INtelligent Systems for Imaging-based diaGnosis in HealThcare",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-15",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "INSIGHT: INtelligent Systems for Imaging-based diaGnosis in HealThcare [Vilamoura, Algarve, Portugal] [Jun 23, 2026 - Jun 26, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192308&copyownerid=192200" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192308&copyownerid=192200",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192308&copyownerid=192200"
      }
    },
{
      id: "wikicfp-icici-2026---international-conference-on-innovatio",
      title: "ICICI 2026 : International Conference on Innovations in Computational Intelligence",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-15",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "International Conference on Innovations in Computational Intelligence [New Delhi, India] [Apr 24, 2026 - Apr 26, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192294&copyownerid=13149" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192294&copyownerid=13149",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192294&copyownerid=13149"
      }
    },
{
      id: "wikicfp-dbml-2026---5th-international-workshop-on-database",
      title: "DBML 2026 : 5th International Workshop on Databases and Machine Learning",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-15",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "5th International Workshop on Databases and Machine Learning [Montréal, Canada] [May 4, 2026 - May 8, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192282&copyownerid=197187" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192282&copyownerid=197187",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192282&copyownerid=197187"
      }
    },
{
      id: "wikicfp-cicba-2026---8th-international-conference-on-compu",
      title: "CICBA 2026 : 8th International Conference on Computational Intelligence in Communications and Business Analytics",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-15",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "8th International Conference on Computational Intelligence in Communications and Business Analytics [Malda, West Bengal, India] [Sep 10, 2026 - Sep 12, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192268&copyownerid=13149" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192268&copyownerid=13149",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192268&copyownerid=13149"
      }
    },
{
      id: "wikicfp-ettis-2026---6th-international-conference-on-emerg",
      title: "ETTIS 2026 : 6th International Conference on Emerging Trends and Technologies on Intelligent Systems",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-15",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "6th International Conference on Emerging Trends and Technologies on Intelligent Systems [New Delhi, India] [Jul 2, 2026 - Jul 3, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192267&copyownerid=13149" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192267&copyownerid=13149",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192267&copyownerid=13149"
      }
    },
{
      id: "wikicfp-idsta-2026---7th-international-conference-on-intel",
      title: "IDSTA 2026 : 7th International Conference on Intelligent Data Science Technologies and Applications",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-15",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "7th International Conference on Intelligent Data Science Technologies and Applications [Bucharest, Romania] [Sep 22, 2026 - Sep 25, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192265&copyownerid=13149" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192265&copyownerid=13149",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192265&copyownerid=13149"
      }
    },
{
      id: "wikicfp-iea-aie-2026---39th-international-conference-on-in",
      title: "IEA/AIE 2026 : 39th International Conference on Industrial, Engineering &amp; Other Applications of Applied Intelligent Systems",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-15",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "39th International Conference on Industrial, Engineering & Other Applications of Applied Intelligent Systems [Kuala Lumpur, Malaysia] [Jul 6, 2026 - Jul 8, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192263&copyownerid=13149" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192263&copyownerid=13149",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192263&copyownerid=13149"
      }
    },
{
      id: "wikicfp-mlis-2026---8th-international-conference-on-machin",
      title: "MLIS 2026 : 8th International Conference on Machine Learning and Intelligent Systems",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-15",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "8th International Conference on Machine Learning and Intelligent Systems [Sanya, Hainan, China] [Nov 25, 2026 - Nov 28, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192262&copyownerid=13149" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192262&copyownerid=13149",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192262&copyownerid=13149"
      }
    },
{
      id: "wikicfp-ieee-ddcls-2026---15th-ieee-data-driven-control-an",
      title: "IEEE DDCLS 2026 : 15th IEEE Data Driven Control and Learning Systems Conference",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-02-15",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "15th IEEE Data Driven Control and Learning Systems Conference [Jishou, Hunan Province, China] [May 8, 2026 - May 11, 2025]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192259&copyownerid=13149" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192259&copyownerid=13149",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192259&copyownerid=13149"
      }
    },
{
      id: "devpost-29143",
      title: "Doable: AISoc X Lovable Hackathon 2026",
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
        start: "2026-03-23T00:00:00.000Z",
        end: "2026-03-23T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Mar",
        day: "23"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-22",
      prize: {
        amount: "$0",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://doable.devpost.com/" }
        ]
      },
      links: {
        register: "https://doable.devpost.com/",
        website: "https://doable.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-28593",
      title: "HACKDAYS SRINAGAR",
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
        start: "2026-03-25T00:00:00.000Z",
        end: "2026-03-25T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Mar",
        day: "25"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-22",
      prize: {
        amount: "$0",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://hackdays-srinagar.devpost.com/" }
        ]
      },
      links: {
        register: "https://hackdays-srinagar.devpost.com/",
        website: "https://hackdays-srinagar.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-29240",
      title: "HackNova 1.0",
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
        start: "2026-03-25T00:00:00.000Z",
        end: "2026-03-25T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Mar",
        day: "25"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-22",
      prize: {
        amount: "$0",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://hacknova2026.devpost.com/" }
        ]
      },
      links: {
        register: "https://hacknova2026.devpost.com/",
        website: "https://hacknova2026.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-28795",
      title: "Hack Days NIET",
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
        start: "2026-03-27T00:00:00.000Z",
        end: "2026-03-27T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Mar",
        day: "27"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-22",
      prize: {
        amount: "₹ 0",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://hack-days-niet.devpost.com/" }
        ]
      },
      links: {
        register: "https://hack-days-niet.devpost.com/",
        website: "https://hack-days-niet.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-29066",
      title: "Sac City Arduino Day Challenge",
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
        start: "2026-03-27T00:00:00.000Z",
        end: "2026-03-27T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Mar",
        day: "27"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-22",
      prize: {
        amount: "$0",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://sac-city-arduino-day-challenge.devpost.com/" }
        ]
      },
      links: {
        register: "https://sac-city-arduino-day-challenge.devpost.com/",
        website: "https://sac-city-arduino-day-challenge.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-29020",
      title: "Kifiya Inspire 3.0",
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
        start: "2026-03-28T00:00:00.000Z",
        end: "2026-03-28T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Mar",
        day: "28"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-22",
      prize: {
        amount: "$639",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://kifiya-inspire-3-0.devpost.com/" }
        ]
      },
      links: {
        register: "https://kifiya-inspire-3-0.devpost.com/",
        website: "https://kifiya-inspire-3-0.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-26271",
      title: "WAV Hackathon",
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
        start: "2026-03-27T00:00:00.000Z",
        end: "2026-03-27T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Mar",
        day: "27"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-22",
      prize: {
        amount: "$0",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://wav-hackathon.devpost.com/" }
        ]
      },
      links: {
        register: "https://wav-hackathon.devpost.com/",
        website: "https://wav-hackathon.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-29093",
      title: "Hacklanta",
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
        start: "2026-03-28T00:00:00.000Z",
        end: "2026-03-28T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Mar",
        day: "28"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-22",
      prize: {
        amount: "$1,500",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://progsu.devpost.com/" }
        ]
      },
      links: {
        register: "https://progsu.devpost.com/",
        website: "https://progsu.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-28629",
      title: "Tech to Treasure Hackathon",
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
        start: "2026-03-28T00:00:00.000Z",
        end: "2026-03-28T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Mar",
        day: "28"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-22",
      prize: {
        amount: "$450",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://techtotreasure.devpost.com/" }
        ]
      },
      links: {
        register: "https://techtotreasure.devpost.com/",
        website: "https://techtotreasure.devpost.com/"
      },
      isArchived: true
    },
{
      id: "wikicfp-cdef-2026---4th-international-conference-on-comput",
      title: "CDEF 2026 : 4th International Conference on Computational and Data Sciences in Economics and Finance",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-22",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "4th International Conference on Computational and Data Sciences in Economics and Finance [Fukui, Japan] [Jul 12, 2026 - Jul 17, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=194159&copyownerid=126803" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=194159&copyownerid=126803",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=194159&copyownerid=126803"
      }
    },
{
      id: "wikicfp-nlpml-2026---7th-international-conference-on-natur",
      title: "NLPML 2026 : 7th International Conference on Natural Language Processing and Machine Learning",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-22",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "7th International Conference on Natural Language Processing and Machine Learning [Zurich, Switzerland] [May 16, 2026 - May 17, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=194152&copyownerid=33993" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=194152&copyownerid=33993",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=194152&copyownerid=33993"
      }
    },
{
      id: "wikicfp-icmv-2026---spie--2026-19th-international-conferen",
      title: "ICMV 2026 : SPIE--2026 19th International Conference on Machine Vision (ICMV 2026)",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-22",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "SPIE--2026 19th International Conference on Machine Vision (ICMV 2026) [Budapest, Hungary] [Oct 15, 2026 - Oct 18, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=194144&copyownerid=13881" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=194144&copyownerid=13881",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=194144&copyownerid=13881"
      }
    },
{
      id: "wikicfp-iccpr--ei-2026---2026-15th-international-conferenc",
      title: "ICCPR--EI 2026 : 2026 15th International Conference on Computing and Pattern Recognition (ICCPR 2026)",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-22",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "2026 15th International Conference on Computing and Pattern Recognition (ICCPR 2026) [Wuxi, China] [Oct 29, 2026 - Nov 1, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=194132&copyownerid=13881" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=194132&copyownerid=13881",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=194132&copyownerid=13881"
      }
    },
{
      id: "wikicfp--cfp--smartcomp-phd-forum-2026---ieee-smartcomp-20",
      title: "[CfP] SMARTCOMP PhD Forum 2026 : IEEE SmartComp 2026 PhD Forum Call for Contributions",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-22",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "IEEE SmartComp 2026 PhD Forum Call for Contributions [Messina, Italy] [Jun 22, 2026 - Jun 25, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=193049&copyownerid=197242" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=193049&copyownerid=197242",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=193049&copyownerid=197242"
      }
    },
{
      id: "wikicfp-kdd-mlf-2026---acm-sigkdd-workshop-on-machine-lear",
      title: "KDD-MLF 2026 : ACM SIGKDD Workshop on Machine Learning in Finance",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-22",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "ACM SIGKDD Workshop on Machine Learning in Finance [Jeju, South Korea] [Aug 9, 2026 - Aug 13, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=193042&copyownerid=197760" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=193042&copyownerid=197760",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=193042&copyownerid=197760"
      }
    },
{
      id: "wikicfp-cais-26-2026---3rd-international-conference-on-cyb",
      title: "CAIS'26 2026 : 3rd International Conference on Cybersecurity and Artificial Intelligence Strategies",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-22",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "3rd International Conference on Cybersecurity and Artificial Intelligence Strategies [Iraq] [Sep 23, 2026 - Sep 24, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=193039&copyownerid=197686" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=193039&copyownerid=197686",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=193039&copyownerid=197686"
      }
    },
{
      id: "wikicfp-cosit-2026---13th-international-conference-on-comp",
      title: "CoSIT 2026 : 13th International Conference on Computer Science and Information Technology",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-22",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "13th International Conference on Computer Science and Information Technology [Zurich, Switzerland] [May 16, 2026 - May 17, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=193037&copyownerid=33993" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=193037&copyownerid=33993",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=193037&copyownerid=33993"
      }
    },
{
      id: "wikicfp-techsummit--2026---techsummit-2026-amsterdam",
      title: "TechSummit  2026 : TechSummit 2026 Amsterdam",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-22",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "TechSummit 2026 Amsterdam [Amsterdam, The Netherlands] [Sep 30, 2026 - Sep 30, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=193035&copyownerid=197750" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=193035&copyownerid=197750",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=193035&copyownerid=197750"
      }
    },
{
      id: "wikicfp-wccs-2026---9th-workshop-on-complex-collective-sys",
      title: "WCCS 2026 : 9th Workshop on Complex Collective Systems",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-22",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "9th Workshop on Complex Collective Systems [Poznań, Poland] [Aug 30, 2026 - Sep 2, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=193008&copyownerid=173574" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=193008&copyownerid=173574",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=193008&copyownerid=173574"
      }
    },
{
      id: "wikicfp-mhpc-im-2026---9th-minisymposium-on-high-performan",
      title: "MHPC-IM 2026 : 9th Minisymposium on High Performance Computing Interval Methods",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-22",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "9th Minisymposium on High Performance Computing Interval Methods [Poznań, Poland] [Aug 30, 2026 - Aug 30, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=193007&copyownerid=173574" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=193007&copyownerid=173574",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=193007&copyownerid=173574"
      }
    },
{
      id: "wikicfp-aiso-2026---15th-international-conference-on-artif",
      title: "AISO 2026 : 15th International Conference on Artificial Intelligence and Soft Computing",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-22",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "15th International Conference on Artificial Intelligence and Soft Computing [Vancouver, Canada] [May 23, 2026 - May 24, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192996&copyownerid=33993" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192996&copyownerid=33993",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192996&copyownerid=33993"
      }
    },
{
      id: "wikicfp-dmip-2026---2026-9th-international-conference-on-d",
      title: "DMIP 2026 : 2026 9th International Conference on Digital Medicine and Image Processing (DMIP 2026)",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-22",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "2026 9th International Conference on Digital Medicine and Image Processing (DMIP 2026) [Hokkaido, Japan] [Dec 25, 2026 - Dec 28, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192952&copyownerid=13881" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192952&copyownerid=13881",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192952&copyownerid=13881"
      }
    },
{
      id: "wikicfp-gcpr-2026---german-conference-on-pattern-recogniti",
      title: "GCPR 2026 : German Conference on Pattern Recognition (DAGM GCPR) 2026",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-22",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "German Conference on Pattern Recognition (DAGM GCPR) 2026 [Siegen, Germany] [Sep 22, 2026 - Sep 25, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192946&copyownerid=197588" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192946&copyownerid=197588",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192946&copyownerid=197588"
      }
    },
{
      id: "wikicfp-iea-aie-2027--2027---the-40th-international-confer",
      title: "IEA/AIE 2027  2027 : The 40th International Conference on Industrial, Engineering &amp; Other Applications of Applied Intelligent Systems",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-22",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "The 40th International Conference on Industrial, Engineering & Other Applications of Applied Intelligent Systems  [Naples, Italy] [Jul 20, 2027 - Jul 22, 2027]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192921&copyownerid=108124" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192921&copyownerid=108124",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192921&copyownerid=108124"
      }
    },
{
      id: "wikicfp--cfp--smartcomp-poster-demo-wip-2026---ieee-smartc",
      title: "[CfP] SMARTCOMP Poster/Demo/WiP 2026 : IEEE SMARTCOMP 2026: Call for Posters, Demos, and Work-in-Progress (WIP) (Submission Deadline: 22nd March 2026)",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-22",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "IEEE SMARTCOMP 2026: Call for Posters, Demos, and Work-in-Progress (WIP) (Submission Deadline: 22nd March 2026) [Messina, Italy] [Jun 22, 2026 - Jun 25, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192919&copyownerid=197242" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192919&copyownerid=197242",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192919&copyownerid=197242"
      }
    },
{
      id: "wikicfp-ict-2026---18th-international-conference-ict-innov",
      title: "ICT 2026 : 18th International Conference ICT Innovations 2026",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-22",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "18th International Conference ICT Innovations 2026 [Struga, North Macedonia] [Sep 26, 2026 - Sep 28, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192906&copyownerid=168593" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192906&copyownerid=168593",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192906&copyownerid=168593"
      }
    },
{
      id: "wikicfp-kunming-aiaat-2026---2026-7th-international-confer",
      title: "kunming-AIAAT 2026 : 2026 7th International Conference on Artificial Intelligence Applications and Technologies (AIAAT 2026)",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-22",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "2026 7th International Conference on Artificial Intelligence Applications and Technologies (AIAAT 2026) [Kunming, China] [Jul 10, 2026 - Jul 12, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192902&copyownerid=90512" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192902&copyownerid=90512",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192902&copyownerid=90512"
      }
    },
{
      id: "wikicfp-cmca-2026---15th-international-conference-on-contr",
      title: "CMCA 2026 : 15th International Conference on Control, Modelling, Computing and Applications",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-22",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "15th International Conference on Control, Modelling, Computing and Applications  [Copenhagen, Denmark] [Apr 25, 2026 - Apr 26, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192885&copyownerid=33993" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192885&copyownerid=33993",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192885&copyownerid=33993"
      }
    },
{
      id: "wikicfp-ieee-araeml-2026---2026-ieee-3rd-international-con",
      title: "IEEE-ARAEML 2026 : 2026 IEEE 3rd International Conference on Advanced Robotics, Automation Engineering and Machine Learning (ARAEML 2026)",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-22",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "2026 IEEE 3rd International Conference on Advanced Robotics, Automation Engineering and Machine Learning (ARAEML 2026) [Suzhou, China] [Jul 24, 2026 - Jul 26, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192874&copyownerid=165700" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192874&copyownerid=165700",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=192874&copyownerid=165700"
      }
    },
{
      id: "devpost-29404",
      title: "Claude Builder Club Hackathon",
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
        start: "2026-03-29T00:00:00.000Z",
        end: "2026-03-29T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Mar",
        day: "29"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-29",
      prize: {
        amount: "$CAD 0",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://claude-builder-club-hackathon.devpost.com/" }
        ]
      },
      links: {
        register: "https://claude-builder-club-hackathon.devpost.com/",
        website: "https://claude-builder-club-hackathon.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-28790",
      title: "Hack Day Kanpur ",
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
        start: "2026-03-30T00:00:00.000Z",
        end: "2026-03-30T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Mar",
        day: "30"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-29",
      prize: {
        amount: "$0",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://hack-day-kanpur.devpost.com/" }
        ]
      },
      links: {
        register: "https://hack-day-kanpur.devpost.com/",
        website: "https://hack-day-kanpur.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-29165",
      title: "Technohacks Hackathon 2026",
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
        start: "2026-03-30T00:00:00.000Z",
        end: "2026-03-30T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Mar",
        day: "30"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-29",
      prize: {
        amount: "$0",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://technohacks-hackathon.devpost.com/" }
        ]
      },
      links: {
        register: "https://technohacks-hackathon.devpost.com/",
        website: "https://technohacks-hackathon.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-29432",
      title: "Creative Lab: AI Coding Hackathon @ UCSD (TRAE & Z.ai)",
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
        start: "2026-03-31T00:00:00.000Z",
        end: "2026-04-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Mar",
        day: "31"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-29",
      prize: {
        amount: "$0",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://creative-lab-ai-coding-ucsd.devpost.com/" }
        ]
      },
      links: {
        register: "https://creative-lab-ai-coding-ucsd.devpost.com/",
        website: "https://creative-lab-ai-coding-ucsd.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-29370",
      title: "HACKDAYS SRINAGAR",
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
        start: "2026-04-01T00:00:00.000Z",
        end: "2026-04-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Apr",
        day: "1"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-29",
      prize: {
        amount: "$0",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://hackdays-srinagar-29370.devpost.com/" }
        ]
      },
      links: {
        register: "https://hackdays-srinagar-29370.devpost.com/",
        website: "https://hackdays-srinagar-29370.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-29158",
      title: "Aurora Global Hackathon ",
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
        start: "2026-03-31T00:00:00.000Z",
        end: "2026-04-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Mar",
        day: "31"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-29",
      prize: {
        amount: "$3,000",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://aurora-global-hackathon.devpost.com/" }
        ]
      },
      links: {
        register: "https://aurora-global-hackathon.devpost.com/",
        website: "https://aurora-global-hackathon.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-29449",
      title: "HackNova 1.0, 2026",
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
        start: "2026-04-01T00:00:00.000Z",
        end: "2026-04-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Apr",
        day: "1"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-29",
      prize: {
        amount: "₹ 15,998",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://hacknovahbtu.devpost.com/" }
        ]
      },
      links: {
        register: "https://hacknovahbtu.devpost.com/",
        website: "https://hacknovahbtu.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-29354",
      title: "SillyHacks 2026",
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
        start: "2026-04-01T00:00:00.000Z",
        end: "2026-04-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Apr",
        day: "1"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-29",
      prize: {
        amount: "$CAD 0",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://sillyhacks2026.devpost.com/" }
        ]
      },
      links: {
        register: "https://sillyhacks2026.devpost.com/",
        website: "https://sillyhacks2026.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-28778",
      title: "xStocks Hackathon EthCC: Market Open",
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
        start: "2026-03-31T00:00:00.000Z",
        end: "2026-04-02T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Mar",
        day: "31"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-29",
      prize: {
        amount: "$75,000",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://xstocks-market-open.devpost.com/" }
        ]
      },
      links: {
        register: "https://xstocks-market-open.devpost.com/",
        website: "https://xstocks-market-open.devpost.com/"
      },
      isArchived: true
    },
{
      id: "wikicfp-complex-networks--2026---15th-international-confer",
      title: "COMPLEX NETWORKS  2026 : 15th International Conference on Complex Networks &amp; Their Applications",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-29",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "15th International Conference on Complex Networks & Their Applications [Granada] [Dec 2, 2026 - Dec 4, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=194271&copyownerid=32890" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=194271&copyownerid=32890",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=194271&copyownerid=32890"
      }
    },
{
      id: "wikicfp-ichmi--ei-2026---2026-6th-international-conference",
      title: "ICHMI--EI 2026 : 2026 6th International Conference on Human-Machine Interaction (ICHMI 2026)",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-29",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "2026 6th International Conference on Human-Machine Interaction (ICHMI 2026) [Hangzhou, China] [Sep 11, 2026 - Sep 13, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=194235&copyownerid=13881" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=194235&copyownerid=13881",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=194235&copyownerid=13881"
      }
    },
{
      id: "wikicfp-ais-2026---the-12th-international-artificial-intel",
      title: "AIS 2026 : The 12th International Artificial Intelligence Symposium",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-29",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "The 12th International Artificial Intelligence Symposium [Riva del Sole Resort & SPA Tuscany] [Sep 21, 2026 - Sep 24, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=194230&copyownerid=85287" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=194230&copyownerid=85287",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=194230&copyownerid=85287"
      }
    },
{
      id: "wikicfp-biom-2026---6th-international-conference-on-big-da",
      title: "BIOM 2026 : 6th International Conference on Big Data, IoT and Machine Learning",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-29",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "6th International Conference on Big Data, IoT and Machine Learning [Vancouver, Canada] [May 23, 2026 - May 24, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=194215&copyownerid=33993" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=194215&copyownerid=33993",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=194215&copyownerid=33993"
      }
    },
{
      id: "wikicfp-asse--ei-2026---2026-7th-asia-service-sciences-and",
      title: "ASSE--EI 2026 : 2026 7th Asia Service Sciences and Software Engineering Conference (ASSE 2026)",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-29",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "2026 7th Asia Service Sciences and Software Engineering Conference (ASSE 2026) [Osaka, Japan] [Nov 20, 2026 - Nov 22, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=194208&copyownerid=13881" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=194208&copyownerid=13881",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=194208&copyownerid=13881"
      }
    },
{
      id: "wikicfp-aiapp-2026---13th-international-conference-on-arti",
      title: "AIAPP 2026 : 13th International Conference on Artificial Intelligence and Applications",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-29",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "13th International Conference on Artificial Intelligence and Applications [Zurich, Switzerland] [May 16, 2026 - May 17, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=194196&copyownerid=33993" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=194196&copyownerid=33993",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=194196&copyownerid=33993"
      }
    },
{
      id: "wikicfp-mlsa-2026---13th-workshop-on-machine-learning-and-",
      title: "MLSA 2026 : 13th workshop on Machine Learning and Data Mining for Sports Analytics (MLSA) @ ECML PKDD 2026",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-03-29",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "13th workshop on Machine Learning and Data Mining for Sports Analytics (MLSA) @ ECML PKDD 2026 [Naples, Italy] [Sep 7, 2026 - Sep 11, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=194195&copyownerid=192844" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=194195&copyownerid=192844",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=194195&copyownerid=192844"
      }
    },
{
      id: "devpost-30184",
      title: "PromptX Challenge — A Mock Virtual AI Hackathon",
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
        start: "2026-05-25T00:00:00.000Z",
        end: "2026-05-25T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "May",
        day: "25"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-05-24",
      prize: {
        amount: "$0",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://uajk-ais-mock-hackathon.devpost.com/" }
        ]
      },
      links: {
        register: "https://uajk-ais-mock-hackathon.devpost.com/",
        website: "https://uajk-ais-mock-hackathon.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-29779",
      title: "Cursor Hackathon Toronto Tech Week",
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
        start: "2026-05-27T00:00:00.000Z",
        end: "2026-05-27T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "May",
        day: "27"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-05-24",
      prize: {
        amount: "$1,000",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://cursor-hackathon-ttw.devpost.com/" }
        ]
      },
      links: {
        register: "https://cursor-hackathon-ttw.devpost.com/",
        website: "https://cursor-hackathon-ttw.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-30150",
      title: "Google Gemini at Acropolis",
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
        start: "2026-05-27T00:00:00.000Z",
        end: "2026-05-27T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "May",
        day: "27"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-05-24",
      prize: {
        amount: "₹ 0",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://google-gemini-at-acropolis.devpost.com/" }
        ]
      },
      links: {
        register: "https://google-gemini-at-acropolis.devpost.com/",
        website: "https://google-gemini-at-acropolis.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-30122",
      title: "FSF Case Conclave",
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
        start: "2026-05-26T00:00:00.000Z",
        end: "2026-05-26T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "May",
        day: "26"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-05-24",
      prize: {
        amount: "₹ 0",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://fsf-case-conclave.devpost.com/" }
        ]
      },
      links: {
        register: "https://fsf-case-conclave.devpost.com/",
        website: "https://fsf-case-conclave.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-29516",
      title: "Hack the Drone - MATLAB Hackathon",
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
        start: "2026-05-29T00:00:00.000Z",
        end: "2026-05-29T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "May",
        day: "29"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-05-24",
      prize: {
        amount: "€0",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://matlab-hack-the-drone.devpost.com/" }
        ]
      },
      links: {
        register: "https://matlab-hack-the-drone.devpost.com/",
        website: "https://matlab-hack-the-drone.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-30056",
      title: "HackCafe : May Edition",
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
        start: "2026-05-29T00:00:00.000Z",
        end: "2026-05-29T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "May",
        day: "29"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-05-24",
      prize: {
        amount: "$0",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://hackcafe-may-edition.devpost.com/" }
        ]
      },
      links: {
        register: "https://hackcafe-may-edition.devpost.com/",
        website: "https://hackcafe-may-edition.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-26088",
      title: "hackMHS XI",
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
        start: "2026-05-29T00:00:00.000Z",
        end: "2026-05-29T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "May",
        day: "29"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-05-24",
      prize: {
        amount: "$0",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://hackmhs-xi.devpost.com/" }
        ]
      },
      links: {
        register: "https://hackmhs-xi.devpost.com/",
        website: "https://hackmhs-xi.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-29834",
      title: "TillyHacks",
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
        start: "2026-05-30T00:00:00.000Z",
        end: "2026-05-30T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "May",
        day: "30"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-05-24",
      prize: {
        amount: "$67",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://tillyhacks.devpost.com/" }
        ]
      },
      links: {
        register: "https://tillyhacks.devpost.com/",
        website: "https://tillyhacks.devpost.com/"
      },
      isArchived: true
    },
{
      id: "devpost-28387",
      title: "MontyHacks IX",
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
        start: "2026-05-30T00:00:00.000Z",
        end: "2026-05-30T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "May",
        day: "30"
      },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-05-24",
      prize: {
        amount: "$0",
        icon: "💰"
      },
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://montyhacks-ix.devpost.com/" }
        ]
      },
      links: {
        register: "https://montyhacks-ix.devpost.com/",
        website: "https://montyhacks-ix.devpost.com/"
      },
      isArchived: true
    },
{
      id: "wikicfp-iswta-2026---10th-ieee-symposium-on-wireless-techn",
      title: "ISWTA 2026 : 10th IEEE Symposium on Wireless Technology &amp; Applications",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-05-24",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "10th IEEE Symposium on Wireless Technology & Applications [Kuala Lumpur, Malaysia] [Nov 21, 2026 - Nov 22, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=198361&copyownerid=13149" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=198361&copyownerid=13149",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=198361&copyownerid=13149"
      }
    },
{
      id: "wikicfp-nlpd-2026---7th-international-conference-on-nlp--a",
      title: "NLPD 2026 : 7th International Conference on NLP &amp; Big Data",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-05-24",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "7th International Conference on NLP & Big Data [London, United Kingdom] [Jul 16, 2026 - Jul 17, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195488&copyownerid=33993" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195488&copyownerid=33993",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195488&copyownerid=33993"
      }
    },
{
      id: "wikicfp-csit-2026---13th-international-conference-on-compu",
      title: "CSIT 2026 : 13th International Conference on Computer Science and Information Technology",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-05-24",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "13th International Conference on Computer Science and Information Technology [Toronto, Canada] [Jul 25, 2026 - Jul 26, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195487&copyownerid=33993" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195487&copyownerid=33993",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195487&copyownerid=33993"
      }
    },
{
      id: "wikicfp-ic3k-2026---18th-international-joint-conference-on",
      title: "IC3K 2026 : 18th International Joint Conference on Knowledge Discovery, Knowledge Engineering, and Knowledge Management",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-05-24",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "18th International Joint Conference on Knowledge Discovery, Knowledge Engineering, and Knowledge Management [Angers, France] [Oct 28, 2026 - Oct 30, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195468&copyownerid=13149" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195468&copyownerid=13149",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195468&copyownerid=13149"
      }
    },
{
      id: "wikicfp-hicss-ds--aai--and-ml-2027---hicss-59-mini-track--",
      title: "HICSS DS, AAI, and ML 2027 : HICSS 59 Mini-Track: Data Science, Agentic AI, and Machine Learning to Support Business Decisions Minitrack",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-05-24",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "HICSS 59 Mini-Track: Data Science, Agentic AI, and Machine Learning to Support Business Decisions Minitrack [Waikoloa, The Big Island, Hawaii] [Jan 5, 2027 - Jan 8, 2027]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195467&copyownerid=13149" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195467&copyownerid=13149",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195467&copyownerid=13149"
      }
    },
{
      id: "wikicfp-sogood-2026---cfp--sogood-2026---ecml-pkdd-worksho",
      title: "SoGood 2026 : CFP: SoGood 2026 - ECML-PKDD Workshop on Data Science for Social Good",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-05-24",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "CFP: SoGood 2026 - ECML-PKDD Workshop on Data Science for Social Good [Naples, Italy] [Sep 7, 2026 - Sep 11, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195465&copyownerid=52809" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195465&copyownerid=52809",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195465&copyownerid=52809"
      }
    },
{
      id: "wikicfp-ieee-aiicrta-2026---ieee-international-conference-",
      title: "IEEE AIICRTA 2026 : IEEE International Conference on AI Innovations, Cyber Resilience and Transformative Applications",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-05-24",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "IEEE International Conference on AI Innovations, Cyber Resilience and Transformative Applications [Tunisia] [Dec 22, 2026 - Dec 23, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195463&copyownerid=198789" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195463&copyownerid=198789",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195463&copyownerid=198789"
      }
    },
{
      id: "wikicfp-asyu-2026---conference-on-innovations-in-intellige",
      title: "ASYU 2026 : Conference on Innovations in Intelligent Systems and Applications",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-05-24",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "Conference on Innovations in Intelligent Systems and Applications [Ozyegin University, Istanbul, Turkey] [Sep 9, 2026 - Sep 11, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195449&copyownerid=13149" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195449&copyownerid=13149",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195449&copyownerid=13149"
      }
    },
{
      id: "wikicfp-inista-2026---20th-international-conference-on-inn",
      title: "INISTA 2026 : 20th International Conference on Innovations in Intelligent Systems and Applications",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-05-24",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "20th International Conference on Innovations in Intelligent Systems and Applications [Guimaraes, Portugal] [Sep 17, 2026 - Sep 19, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195446&copyownerid=13149" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195446&copyownerid=13149",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195446&copyownerid=13149"
      }
    },
{
      id: "wikicfp-daset-2026---the-5th-international-conference-on-d",
      title: "DaSET 2026 : The 5th International Conference on Data Science and Emerging Technologies 2026",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-05-24",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "The 5th International Conference on Data Science and Emerging Technologies 2026 [Selangor, Malaysia] [Dec 16, 2026 - Dec 17, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195445&copyownerid=193708" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195445&copyownerid=193708",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195445&copyownerid=193708"
      }
    },
{
      id: "wikicfp-bias---ecml-pkdd-2026---cfp---bias---ecml-pkdd-26",
      title: "BIAS @ ECML PKDD 2026 : CfP - BIAS @ ECML PKDD'26",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-05-24",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "CfP - BIAS @ ECML PKDD'26 [Naples, Italy] [Sep 7, 2026 - Sep 7, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195440&copyownerid=198086" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195440&copyownerid=198086",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195440&copyownerid=198086"
      }
    },
{
      id: "wikicfp-spnlp-2026---4th-international-conference-on-speec",
      title: "SPNLP 2026 : 4th International Conference on Speech and NLP",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-05-24",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "4th International Conference on Speech and NLP [Virtual Conference] [May 30, 2026 - May 31, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195439&copyownerid=46167" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195439&copyownerid=46167",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195439&copyownerid=46167"
      }
    },
{
      id: "wikicfp-bdml-2026---7th-international-conference-on-big-da",
      title: "BDML 2026 : 7th International Conference on Big Data and Machine Learning",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-05-24",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "7th International Conference on Big Data and Machine Learning  [Copenhagen, Denmark] [Jun 27, 2026 - Jun 28, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195437&copyownerid=33993" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195437&copyownerid=33993",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195437&copyownerid=33993"
      }
    },
{
      id: "wikicfp-mlcc-2027---ieee--2027-international-conference-on",
      title: "MLCC 2027 : IEEE--2027 International Conference on Machine Learning and Cognitive Computing (MLCC 2027)",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-05-24",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "IEEE--2027 International Conference on Machine Learning and Cognitive Computing (MLCC 2027) [Chongqing, China] [Mar 19, 2027 - Mar 21, 2027]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195435&copyownerid=13881" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195435&copyownerid=13881",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195435&copyownerid=13881"
      }
    },
{
      id: "wikicfp-icmlc-2027---2027-19th-international-conference-on",
      title: "ICMLC 2027 : 2027 19th International Conference on Machine Learning and Computing (ICMLC 2027)",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-05-24",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "2027 19th International Conference on Machine Learning and Computing (ICMLC 2027) [Shenzhen, China] [Feb 26, 2027 - Mar 1, 2027]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195414&copyownerid=13881" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195414&copyownerid=13881",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195414&copyownerid=13881"
      }
    },
{
      id: "wikicfp-mlsp-2026---2026-ieee-international-workshop-on-ma",
      title: "MLSP 2026 : 2026 IEEE International Workshop on Machine Learning for Signal Processing",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-05-24",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "2026 IEEE International Workshop on Machine Learning for Signal Processing [Atlanta, GA, USA] [Sep 28, 2026 - Oct 1, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195405&copyownerid=3032" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195405&copyownerid=3032",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195405&copyownerid=3032"
      }
    },
{
      id: "wikicfp-cvml-2026---2026-2nd-international-conference-on-c",
      title: "CVML 2026 : 2026 2nd International Conference on Computer Vision and Machine Learning（CVML2026）",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-05-24",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "2026 2nd International Conference on Computer Vision and Machine Learning（CVML2026） [Jiangxi Normal University, China] [Sep 18, 2026 - Sep 20, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195394&copyownerid=198704" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195394&copyownerid=198704",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195394&copyownerid=198704"
      }
    },
{
      id: "wikicfp-sai-2026---15th-international-conference-on-soft-c",
      title: "SAI 2026 : 15th International Conference on Soft Computing, Artificial Intelligence and Applications",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-05-24",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "15th International Conference on Soft Computing, Artificial Intelligence and Applications  [Sydney, Australia] [Jun 20, 2026 - Jun 21, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195389&copyownerid=33993" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195389&copyownerid=33993",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195389&copyownerid=33993"
      }
    },
{
      id: "wikicfp-isiea-2026---13th-ieee-symposium-on-industrial-ele",
      title: "ISIEA 2026 : 13th IEEE Symposium on Industrial Electronics &amp; Applications",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-05-24",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "13th IEEE Symposium on Industrial Electronics & Applications [Kuala Lumpur, Malaysia] [Jul 25, 2026 - Jul 26, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195381&copyownerid=13149" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195381&copyownerid=13149",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195381&copyownerid=13149"
      }
    },
{
      id: "wikicfp-gcpr--updated--2026---german-conference-on-pattern",
      title: "GCPR (Updated) 2026 : German Conference on Pattern Recognition (Updated) 2026",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: {
        month: "Jan",
        day: "1"
      },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-05-24",
      prize: null,
      location: {
        type: "online",
        city: null,
        country: null,
        display: "Online / TBA"
      },
      modal: {
        overview: "German Conference on Pattern Recognition (Updated) 2026 [Siegen (Germany)] [Sep 22, 2026 - Sep 25, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195373&copyownerid=197995" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195373&copyownerid=197995",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=195373&copyownerid=197995"
      }
    },

    // ========================================
    // AUTO-ADDED EVENTS (2026-06-09)
    // ========================================
    {
      id: "devpost-30113",
      title: "Hack Days Varanasi",
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
        start: "2026-06-10T00:00:00.000Z",
        end: "2026-06-10T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jun", day: "10" },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-09",
      prize: { amount: "₹ 0", icon: "💰" },
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://hack-days-varanasi.devpost.com/" }
        ]
      },
      links: {
        register: "https://hack-days-varanasi.devpost.com/",
        website: "https://hack-days-varanasi.devpost.com/"
      }
    },
    {
      id: "devpost-30362",
      title: "ACS Hacks",
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
        start: "2026-06-10T00:00:00.000Z",
        end: "2026-06-10T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jun", day: "10" },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-09",
      prize: { amount: "$CAD 0", icon: "💰" },
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://acshacks.devpost.com/" }
        ]
      },
      links: {
        register: "https://acshacks.devpost.com/",
        website: "https://acshacks.devpost.com/"
      }
    },
    {
      id: "devpost-30348",
      title: "Hacks day Bhopal",
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
        start: "2026-06-13T00:00:00.000Z",
        end: "2026-06-13T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jun", day: "13" },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-09",
      prize: { amount: "$0", icon: "💰" },
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://hacks-day-bhopal-30348.devpost.com/" }
        ]
      },
      links: {
        register: "https://hacks-day-bhopal-30348.devpost.com/",
        website: "https://hacks-day-bhopal-30348.devpost.com/"
      }
    },
    {
      id: "devpost-30054",
      title: "LingHacks VII",
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
        start: "2026-06-13T00:00:00.000Z",
        end: "2026-06-13T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jun", day: "13" },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-09",
      prize: { amount: "$0", icon: "💰" },
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://linghacks-vii.devpost.com/" }
        ]
      },
      links: {
        register: "https://linghacks-vii.devpost.com/",
        website: "https://linghacks-vii.devpost.com/"
      }
    },
    {
      id: "devpost-30260",
      title: "LingHacks VII",
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
        start: "2026-06-13T00:00:00.000Z",
        end: "2026-06-13T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jun", day: "13" },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-09",
      prize: { amount: "$0", icon: "💰" },
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://linghacks7.devpost.com/" }
        ]
      },
      links: {
        register: "https://linghacks7.devpost.com/",
        website: "https://linghacks7.devpost.com/"
      }
    },
    {
      id: "devpost-28984",
      title: "Databricks Apps & Agents for Good Hackathon 2026",
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
        start: "2026-06-16T00:00:00.000Z",
        end: "2026-06-16T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jun", day: "16" },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-09",
      prize: { amount: "$17,500", icon: "💰" },
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://dais-for-good-2026.devpost.com/" }
        ]
      },
      links: {
        register: "https://dais-for-good-2026.devpost.com/",
        website: "https://dais-for-good-2026.devpost.com/"
      }
    },
    {
      id: "devpost-30319",
      title: "Play with Purpose Hackathon presented by Cox Enterprises",
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
        start: "2026-06-14T00:00:00.000Z",
        end: "2026-06-14T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jun", day: "14" },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-09",
      prize: { amount: "$0", icon: "💰" },
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://play-with-purpose-hackathon.devpost.com/" }
        ]
      },
      links: {
        register: "https://play-with-purpose-hackathon.devpost.com/",
        website: "https://play-with-purpose-hackathon.devpost.com/"
      }
    },
    {
      id: "devpost-30256",
      title: "Department Battle: Hack Days",
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
        start: "2026-06-18T00:00:00.000Z",
        end: "2026-06-18T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jun", day: "18" },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-09",
      prize: { amount: "₹ 0", icon: "💰" },
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://department-battle-hack-days.devpost.com/" }
        ]
      },
      links: {
        register: "https://department-battle-hack-days.devpost.com/",
        website: "https://department-battle-hack-days.devpost.com/"
      }
    },
    {
      id: "devpost-30240",
      title: "GenAI AI Hackathon — Automotive & Manufacturing Use Cases",
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
        start: "2026-06-19T00:00:00.000Z",
        end: "2026-06-19T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jun", day: "19" },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-09",
      prize: { amount: "$0", icon: "💰" },
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://auto-ai-hackathon-munich-2026.devpost.com/" }
        ]
      },
      links: {
        register: "https://auto-ai-hackathon-munich-2026.devpost.com/",
        website: "https://auto-ai-hackathon-munich-2026.devpost.com/"
      }
    },
    {
      id: "wikicfp-iscslp-2026---international-symposium-on-chinese-s",
      title: "ISCSLP 2026 : International Symposium on Chinese Spoken Language Processing",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-09",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "International Symposium on Chinese Spoken Language Processing [Penang, Malaysia] [Nov 14, 2026 - Nov 17, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199861&copyownerid=199080" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199861&copyownerid=199080",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199861&copyownerid=199080"
      }
    },
    {
      id: "wikicfp-iscslp-2026---the-15th-international-symposium-on-",
      title: "ISCSLP 2026 : The 15th International Symposium on Chinese Spoken Language Processing",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-09",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "The 15th International Symposium on Chinese Spoken Language Processing [Penang, Malaysia] [Nov 14, 2026 - Nov 17, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199858&copyownerid=199080" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199858&copyownerid=199080",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199858&copyownerid=199080"
      }
    },
    {
      id: "wikicfp-icpm-2027---8th-international-conference-on-proces",
      title: "ICPM 2027 : 8th International Conference on Process Mining",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-09",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "8th International Conference on Process Mining [Rende, Italy] [Feb 8, 2027 - Feb 12, 2027]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199835&copyownerid=199057" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199835&copyownerid=199057",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199835&copyownerid=199057"
      }
    },
    {
      id: "wikicfp-wmlq-2026----3rd-international-workshop-on-machine",
      title: "WMLQ 2026 :  3rd International Workshop on Machine Learning and Quantum Computing Applications in Medicine and Physics",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-09",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "3rd International Workshop on Machine Learning and Quantum Computing Applications in Medicine and Physics [Warsaw, Poland] [Sep 7, 2026 - Sep 11, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199806&copyownerid=175737" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199806&copyownerid=175737",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199806&copyownerid=175737"
      }
    },
    {
      id: "wikicfp-ei-scopus-mlbdm-2026---2026-6th-international-conf",
      title: "Ei/Scopus-MLBDM 2026 : 2026 6th International Conference on Machine Learning and Big Data Management (MLBDM 2026)",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-09",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "2026 6th International Conference on Machine Learning and Big Data Management (MLBDM 2026) [Hangzhou, China] [Dec 18, 2026 - Dec 20, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199708&copyownerid=165700" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199708&copyownerid=165700",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199708&copyownerid=165700"
      }
    },
    {
      id: "wikicfp-ciot-2026---8th-international-conference-on-intern",
      title: "CIoT 2026 : 8th International Conference on Internet of Things",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-09",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "8th International Conference on Internet of Things [London, United Kingdom] [Jul 16, 2026 - Jul 17, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199700&copyownerid=33993" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199700&copyownerid=33993",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199700&copyownerid=33993"
      }
    },
    {
      id: "wikicfp-if-aie-2026---the-2026-international-forum-on-arti",
      title: "IF-AIE 2026 : The 2026 International Forum on Artificial Intelligence in Education                                                              Mode: Hybrid (On-site and Online)",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-09",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "The 2026 International Forum on Artificial Intelligence in Education                                                              Mode: Hybrid (On-site and Online) [Algiers, Algeria] [Sep 27, 2026 - Sep 28, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199695&copyownerid=199007" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199695&copyownerid=199007",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199695&copyownerid=199007"
      }
    },
    {
      id: "wikicfp-icric--ei-2027---2027-international-conference-on-",
      title: "ICRIC--EI 2027 : 2027 International Conference on Robotics and Intelligent Control (ICRIC 2027)",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-09",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "2027 International Conference on Robotics and Intelligent Control (ICRIC 2027) [Milan, Italy] [Feb 17, 2027 - Feb 19, 2027]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199689&copyownerid=13881" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199689&copyownerid=13881",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199689&copyownerid=13881"
      }
    },
    {
      id: "wikicfp-cste--ei-2027---2027-9th-international-conference-",
      title: "CSTE--EI 2027 : 2027 9th International Conference on Computer Science and Technologies in Education (CSTE 2027)",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-09",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "2027 9th International Conference on Computer Science and Technologies in Education (CSTE 2027) [Wuhan, China] [Apr 9, 2027 - Apr 11, 2027]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199684&copyownerid=13881" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199684&copyownerid=13881",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199684&copyownerid=13881"
      }
    },
    {
      id: "wikicfp-ipmi-2027---information-processing-in-medical-imag",
      title: "IPMI 2027 : Information Processing in Medical Imaging (IPMI) 2027",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-09",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "Information Processing in Medical Imaging (IPMI) 2027 [Lake Stukely, QC, Canada] [Jun 27, 2027 - Jul 2, 2027]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199677&copyownerid=199001" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199677&copyownerid=199001",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199677&copyownerid=199001"
      }
    },
    {
      id: "wikicfp-cadat-2026---the-third-international-conference-on",
      title: "CADAT 2026 : The Third International Conference on Accessible Digital Agriculture Technologies",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-09",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "The Third International Conference on Accessible Digital Agriculture Technologies [Lisbon, Portugal] [Oct 25, 2026 - Oct 29, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199675&copyownerid=83510" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199675&copyownerid=83510",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199675&copyownerid=83510"
      }
    },
    {
      id: "wikicfp-coce-2026---the-third-international-conference-on-",
      title: "COCE 2026 : The Third International Conference on Technologies for Marine and Coastal Ecosystems",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-09",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "The Third International Conference on Technologies for Marine and Coastal Ecosystems [Lisbon, Portugal] [Oct 25, 2026 - Oct 29, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199673&copyownerid=83510" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199673&copyownerid=83510",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199673&copyownerid=83510"
      }
    },
    {
      id: "wikicfp-prediction-solutions-2026---international-conferen",
      title: "PREDICTION SOLUTIONS 2026 : International Conference on Prediction Solutions for Technical and Societal Systems",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-09",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "International Conference on Prediction Solutions for Technical and Societal Systems [Lisbon, Portugal] [Oct 25, 2026 - Oct 29, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199660&copyownerid=83510" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199660&copyownerid=83510",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199660&copyownerid=83510"
      }
    },
    {
      id: "wikicfp-signal-2026---13th-international-conference-on-sig",
      title: "Signal 2026 : 13th International Conference on Signal and Image Processing",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-09",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "13th International Conference on Signal and Image Processing [Sydney, Australia] [Jun 20, 2026 - Jun 21, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199639&copyownerid=33993" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199639&copyownerid=33993",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199639&copyownerid=33993"
      }
    },
    {
      id: "wikicfp-bpod-2026---the-ninth-ieee-international-workshop-",
      title: "BPOD 2026 : The Ninth IEEE International Workshop on Benchmarking, Performance Tuning and Optimization for Big Data Analytics and Big Models (BPOD 2026)",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-09",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "The Ninth IEEE International Workshop on Benchmarking, Performance Tuning and Optimization for Big Data Analytics and Big Models (BPOD 2026) [Phoenix, Arizona, USA] [Dec 14, 2026 - Dec 17, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199628&copyownerid=170448" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199628&copyownerid=170448",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199628&copyownerid=170448"
      }
    },
    {
      id: "wikicfp-humsec-esorics-2026---workshop-on-human-targeted-c",
      title: "HumSec@ESORICS 2026 : Workshop on Human-Targeted Cyber Threats and Defenses",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-09",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "Workshop on Human-Targeted Cyber Threats and Defenses [Rome, Italy] [Sep 14, 2026 - Sep 18, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199623&copyownerid=198981" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199623&copyownerid=198981",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199623&copyownerid=198981"
      }
    },
    {
      id: "wikicfp-hicss-ai4cyber-and-cyber4ai-2027---hicss-60-mini-t",
      title: "HICSS AI4Cyber and Cyber4AI 2027 : HICSS 60 Mini-Track: AI for Cybersecurity",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-09",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "HICSS 60 Mini-Track: AI for Cybersecurity [Big Island, Hawaii] [Jan 5, 2027 - Jan 8, 2027]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199608&copyownerid=179590" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199608&copyownerid=179590",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199608&copyownerid=179590"
      }
    },
    {
      id: "wikicfp-wipe-out--2026---2nd-workshop-on-machine-unlearnin",
      title: "WIPE-OUT  2026 : 2nd Workshop on Machine Unlearning and Privacy Preservation (WIPE-OUT 2) - Deadline Extended",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-09",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "2nd Workshop on Machine Unlearning and Privacy Preservation (WIPE-OUT 2) - Deadline Extended [Naples, Italy] [Sep 7, 2026 - Sep 7, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199586&copyownerid=198048" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199586&copyownerid=198048",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199586&copyownerid=198048"
      }
    },
    {
      id: "wikicfp-iwoar-2026---11th-international-workshop-on-sensor",
      title: "iWOAR 2026 : 11th international Workshop on Sensor-Based Activity Recognition and Artificial Intelligence",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-09",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "11th international Workshop on Sensor-Based Activity Recognition and Artificial Intelligence [Wiesbaden, Germany] [Sep 10, 2026 - Sep 11, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199583&copyownerid=198937" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199583&copyownerid=198937",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199583&copyownerid=198937"
      }
    },
    {
      id: "wikicfp-sipro-2026---12th-international-conference-on-sign",
      title: "SIPRO 2026 : 12th International Conference on Signal and Image Processing",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-09",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "12th International Conference on Signal and Image Processing [Copenhagen, Denmark] [Jun 27, 2026 - Jun 28, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199582&copyownerid=33993" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199582&copyownerid=33993",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199582&copyownerid=33993"
      }
    },

    // ========================================
    // AUTO-ADDED EVENTS (2026-06-14)
    // ========================================
    {
      id: "devpost-30314",
      title: "AI COMMUNICATION BRIDGE HACKATHON",
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
        start: "2026-06-19T00:00:00.000Z",
        end: "2026-06-19T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jun", day: "19" },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-14",
      prize: { amount: "$0", icon: "💰" },
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://ai-communication-bridge.devpost.com/" }
        ]
      },
      links: {
        register: "https://ai-communication-bridge.devpost.com/",
        website: "https://ai-communication-bridge.devpost.com/"
      }
    },
    {
      id: "devpost-30077",
      title: "TryToHack Thüringen",
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
        start: "2026-06-20T00:00:00.000Z",
        end: "2026-06-20T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jun", day: "20" },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-14",
      prize: { amount: "€0", icon: "💰" },
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://trytohack.devpost.com/" }
        ]
      },
      links: {
        register: "https://trytohack.devpost.com/",
        website: "https://trytohack.devpost.com/"
      }
    },
    {
      id: "devpost-29980",
      title: "Vibe Code Animated Maps",
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
        start: "2026-06-20T00:00:00.000Z",
        end: "2026-06-20T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jun", day: "20" },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-14",
      prize: { amount: "$0", icon: "💰" },
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://vibecode-animated-maps.devpost.com/" }
        ]
      },
      links: {
        register: "https://vibecode-animated-maps.devpost.com/",
        website: "https://vibecode-animated-maps.devpost.com/"
      }
    },
    {
      id: "devpost-30379",
      title: "$1,000 Industrial AI Hackathon",
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
        start: "2026-06-19T00:00:00.000Z",
        end: "2026-06-19T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jun", day: "19" },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-14",
      prize: { amount: "$1,000", icon: "💰" },
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://1-000-industrial-ai-hackathon.devpost.com/" }
        ]
      },
      links: {
        register: "https://1-000-industrial-ai-hackathon.devpost.com/",
        website: "https://1-000-industrial-ai-hackathon.devpost.com/"
      }
    },
    {
      id: "devpost-30386",
      title: "UC Berkeley AI Hackathon 2026",
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
        start: "2026-06-20T00:00:00.000Z",
        end: "2026-06-20T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jun", day: "20" },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-14",
      prize: { amount: "$0", icon: "💰" },
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://ai-hackathon-2026.devpost.com/" }
        ]
      },
      links: {
        register: "https://ai-hackathon-2026.devpost.com/",
        website: "https://ai-hackathon-2026.devpost.com/"
      }
    },
    {
      id: "devpost-29984",
      title: "NJx Hackathon Summer 2026",
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
        start: "2026-06-20T00:00:00.000Z",
        end: "2026-06-20T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jun", day: "20" },
      eventType: "Hackathon",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-14",
      prize: { amount: "$2,000", icon: "💰" },
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "New hackathons found from devpost. Click to learn more.",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "https://njx-hackathon-summer-2026.devpost.com/" }
        ]
      },
      links: {
        register: "https://njx-hackathon-summer-2026.devpost.com/",
        website: "https://njx-hackathon-summer-2026.devpost.com/"
      }
    },
    {
      id: "wikicfp-aimldl-2026---7th-international-conference-on-ai--",
      title: "AIMLDL 2026 : 7th International Conference on AI, Machine Learning and Deep Learning",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-14",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "7th International Conference on AI, Machine Learning and Deep Learning [London, United Kingdom] [Jul 16, 2026 - Jul 17, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199977&copyownerid=33993" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199977&copyownerid=33993",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199977&copyownerid=33993"
      }
    },
    {
      id: "wikicfp-prima-2026---pacific-rim-international-conference-",
      title: "PRIMA 2026 : Pacific Rim International Conference on Multi-Agents",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-14",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "Pacific Rim International Conference on Multi-Agents [Kumamoto, Japan] [Dec 14, 2026 - Dec 17, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199947&copyownerid=199136" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199947&copyownerid=199136",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199947&copyownerid=199136"
      }
    },
    {
      id: "wikicfp-spm-2026---13th-international-conference-on-signal",
      title: "SPM 2026 : 13th International Conference on Signal, Image Processing and Multimedia",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-14",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "13th International Conference on Signal, Image Processing and Multimedia  [London, United Kingdom] [Jul 16, 2026 - Jul 17, 2026]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199941&copyownerid=33993" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199941&copyownerid=33993",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199941&copyownerid=33993"
      }
    },
    {
      id: "wikicfp-icnlp--ei-2027---2027-the-9th-international-confer",
      title: "ICNLP--EI 2027 : 2027 The 9th International Conference on Natural Language Processing (ICNLP 2027)",
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
        start: "2027-01-01T00:00:00.000Z",
        end: "2027-01-01T00:00:00.000Z",
        deadline: null,
        countdownTarget: "start"
      },
      dateDisplay: { month: "Jan", day: "1" },
      eventType: "CFP",
      isUrgent: false,
      isFeatured: false,
      isNew: true,
      addedDate: "2026-06-14",
      prize: null,
      location: { type: "online", city: null, country: null, display: "Online / TBA" },
      modal: {
        overview: "2027 The 9th International Conference on Natural Language Processing (ICNLP 2027) [Zhenjiang, China] [Apr 16, 2027 - Apr 18, 2027]",
        requirements: null,
        keyDates: null,
        topics: null,
        resources: [
          { icon: "🌐", label: "Official Website", url: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199934&copyownerid=13881" }
        ]
      },
      links: {
        register: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199934&copyownerid=13881",
        website: "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=199934&copyownerid=13881"
      }
    }
  ]
};

// Helper API to access events data
const EventsAPI = {
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

  getByPage(pageName, includeArchived = false) {
    const filtered = EVENTS_DATA.events.filter(e =>
      e.page === pageName && (includeArchived || !e.isArchived)
    );
    return this._sortByDate(filtered);
  },

  getById(id) {
    return EVENTS_DATA.events.find(e => e.id === id);
  },

  getFeatured(pageName) {
    return EVENTS_DATA.events.find(e => e.isFeatured && e.page === pageName && !e.isArchived);
  },

  getFiltersForPage(pageName) {
    return EVENTS_DATA.filters[pageName] || [];
  },

  getMeta() {
    return EVENTS_DATA.meta;
  },

  filterEvents(events, filterValue) {
    if (filterValue === 'all') return events.filter(e => !e.isArchived);

    // Special handling for "archive" filter
    if (filterValue === 'archive') {
      return events.filter(event => event.isArchived === true);
    }

    // Special handling for "new" filter
    if (filterValue === 'new') {
      return events.filter(event => event.isNew === true && !event.isArchived);
    }

    return events.filter(event => {
      if (event.isArchived) return false;
      const matchesCategory = event.category.includes(filterValue);
      const matchesType = event.type.includes(filterValue);
      return matchesCategory || matchesType;
    });
  },

  // Get count of new events
  getNewEventsCount() {
    return EVENTS_DATA.events.filter(e => e.isNew === true && !e.isArchived).length;
  },

  // Get count of archived events for a page
  getArchivedCount(pageName) {
    return EVENTS_DATA.events.filter(e => e.page === pageName && e.isArchived).length;
  }
};
