export const featuredData = [
  {
    icon: '📊',
    title: 'Pharma Market Trends',
    description: 'Current trends in the pharmaceutical market.',
    used: 2485,
    type: 'Universal',
    pagesNo: 6,
    lastUpdated: '07/23/2024',
    tags: ['comms', 'coverage', 'stakeholders'],
    businessQuestions: [
      'What are the top-selling drugs?',
      'How is market share distributed?',
      'What are the emerging trends?',
      'Which companies are leading?'
    ]
  },
  // More featured data...
];

export const trendingData = [
  {
    icon: '💊',
    title: 'COVID-19 Vaccine Impact',
    description: 'Analysis of the impact of COVID-19 vaccines.',
    used: 1123,
    type: 'Report',
    pagesNo: 4,
    lastUpdated: '08/15/2024',
    tags: ['covid', 'vaccine', 'impact'],
    businessQuestions: [
      'What is the vaccination rate?',
      'What are the side effects reported?',
      'How has the pandemic affected sales?',
      'Which vaccines are most effective?'
    ]
  },
  // More trending data...
];

export const kpiData = [
  {
    title: "Prescription Volume",
    description: "Tracks the total number of prescriptions filled for a specific medication.",
    metricIDs: ["RX001", "RX002"],
    calculation: "Total number of prescriptions filled in a given period.",
    affiliateApplicability: "All affiliates",
    lastModifiedDate: "2024-06-09",
    businessQuestions: [
      "What is the trend in prescription volumes over the last quarter?",
      "How do prescription volumes compare across different regions?",
      "Which medications have the highest prescription volumes?",
    ],
    chartData: {
      type: 'bar',
      data: [65, 59, 80, 81, 56, 55, 40],
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      backgroundColor: 'gold',
      borderColor: 'black',
      hoverBackgroundColor: 'white',
      hoverBorderColor: 'gold',
    }
  },
  // More KPI data...
];

export const layoutData = [
  {
    title: "Homepage Layout",
    description: "The main landing page of the website, providing an overview of the site's purpose and main features.",
    lastModifiedDate: "2024-06-09",
    businessQuestions: [
      "What key information should be prominently displayed on the homepage?",
      "How can we improve user engagement on the homepage?",
      "What is the optimal layout for highlighting new updates?",
    ],
    type: "Landing Page",
    pagesNumber: 1,
    usedNumber: 15,
  },
  {
    title: "Product Detail Layout",
    description: "Displays detailed information about a specific pharmaceutical product, including benefits, usage, and side effects.",
    lastModifiedDate: "2024-06-09",
    businessQuestions: [
      "What product information is most important to highlight?",
      "How can we make the product details easy to navigate?",
      "What related products should be suggested on this page?",
    ],
    type: "Product Page",
    pagesNumber: 1,
    usedNumber: 10,
  },
  {
    title: "Blog Layout",
    description: "A layout for blog posts, providing a structured format for articles, news updates, and informational content.",
    lastModifiedDate: "2024-06-09",
    businessQuestions: [
      "How should blog posts be categorized and tagged?",
      "What is the best way to encourage reader interaction with blog posts?",
      "How can we optimize the layout for readability?",
    ],
    type: "Content Page",
    pagesNumber: 5,
    usedNumber: 8,
  },
  {
    title: "Contact Us Layout",
    description: "A page layout for providing contact information and a form for users to reach out to the company.",
    lastModifiedDate: "2024-06-09",
    businessQuestions: [
      "What contact information is essential to include?",
      "How can we make the contact form user-friendly?",
      "What additional resources should be linked on the contact page?",
    ],
    type: "Contact Page",
    pagesNumber: 1,
    usedNumber: 20,
  },
  {
    title: "FAQ Layout",
    description: "A layout for frequently asked questions, organized to help users find answers quickly.",
    lastModifiedDate: "2024-06-09",
    businessQuestions: [
      "What are the most common questions our users have?",
      "How can we structure the FAQ for easy navigation?",
      "What is the best way to update and manage FAQ content?",
    ],
    type: "Information Page",
    pagesNumber: 1,
    usedNumber: 12,
  },
  {
    title: "User Dashboard Layout",
    description: "A personalized dashboard for users to access their account information, order history, and preferences.",
    lastModifiedDate: "2024-06-09",
    businessQuestions: [
      "What features should be included in the user dashboard?",
      "How can we make the dashboard intuitive and user-friendly?",
      "What metrics should be displayed to the user?",
    ],
    type: "Dashboard",
    pagesNumber: 3,
    usedNumber: 5,
  },
];


export const storyboardData = [
  {
    icon: '🎬',
    title: 'Product Launch Plan',
    description: 'Storyboard for the upcoming product launch.',
    used: 453,
    type: 'Storyboard',
    pagesNo: 5,
    lastUpdated: '04/12/2024',
    tags: ['product', 'launch', 'plan'],
    kpis: [
      { title: 'Sales Target', value: '5000 units', category: 'Sales', dateRange: 'Next Quarter', metrics: ['Units Sold'] },
      { title: 'Market Share', value: '15%', category: 'Market', dateRange: 'Next Quarter', metrics: ['Percentage'] },
      // More KPIs...
    ],
    businessQuestions: [
      'What are the launch objectives?',
      'Which channels will be used?',
      'What is the timeline?',
      'Who are the key stakeholders?'
    ]
  },
  // More storyboard data...
];
