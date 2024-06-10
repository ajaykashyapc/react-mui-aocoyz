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
      chartType: "bar",
      data: {
        labels: ["Medication A", "Medication B", "Medication C"],
        datasets: [
          {
            label: "Prescription Volume",
            backgroundColor: "#FFD700",
            borderColor: "#000",
            borderWidth: 1,
            hoverBackgroundColor: "#FFF",
            hoverBorderColor: "#000",
            data: [1200, 900, 1500],
          },
        ],
      },
    },
  },
  {
    title: "Adherence Rate",
    description: "Measures the percentage of patients who follow their prescribed medication regimen.",
    metricIDs: ["ADH001", "ADH002"],
    calculation: "Number of patients adhering to their regimen / Total number of patients prescribed the medication * 100",
    affiliateApplicability: "All affiliates",
    lastModifiedDate: "2024-06-09",
    businessQuestions: [
      "What is the current adherence rate for our medications?",
      "Which factors are affecting patient adherence?",
      "How does adherence vary by patient demographics?",
    ],
    chartData: {
      chartType: "line",
      data: {
        labels: ["Jan", "Feb", "Mar"],
        datasets: [
          {
            label: "Adherence Rate",
            borderColor: "#FFD700",
            backgroundColor: "#FFF",
            data: [80, 75, 85],
          },
        ],
      },
    },
  },
  {
    title: "Market Share",
    description: "The percentage of total sales in the market that is attributed to our company.",
    metricIDs: ["MS001", "MS002"],
    calculation: "Company sales / Total market sales * 100",
    affiliateApplicability: "All affiliates",
    lastModifiedDate: "2024-06-09",
    businessQuestions: [
      "What is our market share for key products?",
      "How has our market share changed over time?",
      "How do we compare to competitors in market share?",
    ],
    chartData: {
      chartType: "pie",
      data: {
        labels: ["Your Company", "Competitor A", "Competitor B"],
        datasets: [
          {
            data: [60, 25, 15],
            backgroundColor: ["#FFD700", "#FFA500", "#FF6347"],
            hoverBackgroundColor: ["#FFF", "#FFF", "#FFF"],
          },
        ],
      },
    },
  },
  {
    title: "Revenue Growth",
    description: "The increase in revenue over a specified period.",
    metricIDs: ["REV001", "REV002"],
    calculation: "(Current period revenue - Previous period revenue) / Previous period revenue * 100",
    affiliateApplicability: "All affiliates",
    lastModifiedDate: "2024-06-09",
    businessQuestions: [
      "What is our revenue growth rate over the past year?",
      "Which products are contributing most to revenue growth?",
      "What strategies can we implement to drive further revenue growth?",
    ],
    chartData: {
      chartType: "doughnut",
      data: {
        labels: ["Q1", "Q2", "Q3"],
        datasets: [
          {
            label: "Revenue Growth",
            backgroundColor: "rgba(255,215,0,0.2)",
            borderColor: "#FFD700",
            borderWidth: 1,
            data: [1000, 1200, 1500],
          },
        ],
      },
    },
  },
  {
    title: "Cost per Prescription",
    description: "The average cost incurred per prescription filled.",
    metricIDs: ["COST001", "COST002"],
    calculation: "Total costs / Total number of prescriptions filled",
    affiliateApplicability: "All affiliates",
    lastModifiedDate: "2024-06-09",
    businessQuestions: [
      "What is the average cost per prescription?",
      "How can we reduce costs per prescription?",
      "How do our prescription costs compare to industry benchmarks?",
    ],
    chartData: {
      chartType: "polarArea",
      data: {
        labels: ["Your Cost", "Industry Benchmark"],
        datasets: [
          {
            label: "Cost per Prescription",
            backgroundColor: "#FFD700",
            borderColor: "#000",
            borderWidth: 1,
            hoverBackgroundColor: "#FFF",
            hoverBorderColor: "#000",
            data: [15, 20],
          },
        ],
      },
    },
  },
  {
    title: "Patient Satisfaction",
    description: "Measures the satisfaction levels of patients with their medications and treatment experience.",
    metricIDs: ["SAT001", "SAT002"],
    calculation: "Sum of satisfaction survey scores / Number of surveys completed",
    affiliateApplicability: "All affiliates",
    lastModifiedDate: "2024-06-09",
    businessQuestions: [
      "What is the overall patient satisfaction with our medications?",
      "What are the main factors influencing patient satisfaction?",
      "How can we improve patient satisfaction scores?",
    ],
    chartData: {
      chartType: "polarArea",
      data: {
        labels: ["Satisfied", "Neutral", "Dissatisfied"],
        datasets: [
          {
            data: [70, 20, 10],
            backgroundColor: ["#32CD32", "#FFD700", "#FF6347"],
            hoverBackgroundColor: ["#7CFC00", "#FFA500", "#FF4500"],
          },
        ],
      },
    },
  },
];


// You can also update featuredData, trendingData, layoutData, and storyboardData similarly with any additional styling or data as needed.


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
    title: "New Product Introduction",
    description: "Storyboard for introducing a new product to the market.",
    affiliateApplicability: "Global",
    kpis: [
      {
        title: "Market Penetration",
        chartData: {
          chartType: "pie",
          data: {
            labels: ["New Customers", "Market Share"],
            datasets: [
              {
                label: "Market Penetration",
                backgroundColor: ["#FFD700", "#FF5733"],
                data: [60, 40],
              },
            ],
          },
        },
      },
      {
        title: "Customer Feedback Score",
        chartData: {
          chartType: "bar",
          data: {
            labels: ["Survey Scores"],
            datasets: [
              {
                label: "Customer Feedback Score",
                backgroundColor: "#36A2EB",
                data: [8.5],
              },
            ],
          },
        },
      },
    ],
  },
  {
    title: "Digital Marketing Campaign",
    description: "Storyboard outlining the digital marketing campaign strategies.",
    affiliateApplicability: "North America",
    kpis: [
      {
        title: "Click-Through Rate (CTR)",
        chartData: {
          chartType: "line",
          data: {
            labels: ["Clicks", "Impressions"],
            datasets: [
              {
                label: "Click-Through Rate (CTR)",
                borderColor: "#FFD700",
                backgroundColor: "rgba(255, 215, 0, 0.1)",
                data: [2.5, 5],
              },
            ],
          },
        },
      },
      {
        title: "Conversion Rate",
        chartData: {
          chartType: "line",
          data: {
            labels: ["Conversions", "Visits"],
            datasets: [
              {
                label: "Conversion Rate",
                borderColor: "#FF5733",
                backgroundColor: "rgba(255, 87, 51, 0.1)",
                data: [1.8, 3],
              },
            ],
          },
        },
      },
    ],
  },
  {
    title: "Operational Efficiency",
    description: "Storyboard for tracking operational efficiency improvements.",
    affiliateApplicability: "All affiliates",
    kpis: [
      {
        title: "Production Downtime",
        chartData: {
          chartType: "bar",
          data: {
            labels: ["Downtime Hours"],
            datasets: [
              {
                label: "Production Downtime",
                backgroundColor: "#FFD700",
                data: [5],
              },
            ],
          },
        },
      },
      {
        title: "Unit Cost Reduction",
        chartData: {
          chartType: "bar",
          data: {
            labels: ["Cost per Unit"],
            datasets: [
              {
                label: "Unit Cost Reduction",
                backgroundColor: "#FF5733",
                data: [10],
              },
            ],
          },
        },
      },
    ],
  },
  {
    title: "Customer Engagement Plan",
    description: "Storyboard for increasing customer engagement.",
    affiliateApplicability: "EMEA",
    kpis: [
      {
        title: "Customer Retention Rate",
        chartData: {
          chartType: "doughnut",
          data: {
            labels: ["Retention Rate"],
            datasets: [
              {
                label: "Customer Retention Rate",
                backgroundColor: ["#FFD700", "#FF5733"],
                data: [85, 15],
              },
            ],
          },
        },
      },
      {
        title: "Average Response Time",
        chartData: {
          chartType: "line",
          data: {
            labels: ["Response Time", "Incident Time"],
            datasets: [
              {
                label: "Average Response Time",
                borderColor: "#36A2EB",
                backgroundColor: "rgba(54, 162, 235, 0.1)",
                data: [24,56],
              },
            ],
          },
        },
      },
    ],
  },
  {
    title: "Financial Performance Review",
    description: "Storyboard for reviewing financial performance.",
    affiliateApplicability: "Global",
    kpis: [
      {
        title: "Revenue Growth",
        chartData: {
          chartType: "polarArea",
          data: {
            labels: ["Product Revenue", "Service Revenue", "Others"],
            datasets: [
              {
                label: "Revenue Growth",
                borderColor: "#FFD700",
                backgroundColor: "rgba(255, 215, 0, 0.1)",
                data: [12, 34, 56],
              },
            ],
          },
        },
      },
      {
        title: "Net Profit Margin",
        chartData: {
          chartType: "bar",
          data: {
            labels: ["Profit Margin"],
            datasets: [
              {
                label: "Net Profit Margin",
                backgroundColor: "#FF5733",
                data: [20],
              },
            ],
          },
        },
      },
    ],
  },
  {
    title: "R&D Project Timeline",
    description: "Storyboard for tracking R&D project milestones.",
    affiliateApplicability: "All affiliates",
    kpis: [
      {
        title: "Project Completion Rate",
        chartData: {
          chartType: "line",
          data: {
            labels: ["Milestones Achieved", "Goals Achieved"],
            datasets: [
              {
                label: "Project Completion Rate",
                borderColor: "#36A2EB",
                backgroundColor: "rgba(54, 162, 235, 0.1)",
                data: [90, 120],
              },
            ],
          },
        },
      },
      {
        title: "Innovation Index",
        chartData: {
          chartType: "bar",
          data: {
            labels: ["Innovation Score"],
            datasets: [
              {
                label: "Innovation Index",
                backgroundColor: "#FFD700",
                data: [7.8],
              },
            ],
          },
        },
      },
    ],
  },
];

