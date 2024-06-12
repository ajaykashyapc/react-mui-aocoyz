// This is just a sample data. Ideally data needs to come from API which can be accessed via Redux

export const kpiData = [
  {
    modal: "kpi",
    title: "Prescription Volume",
    description: "Tracks the total number of prescriptions filled for a specific medication. It's essential for understanding product demand and distribution strategies. This metric helps assess market penetration and adjust production levels based on prescription trends across various demographics and geographic regions.",
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
        labels: ["Medication A", "Medication B", "Medication C", "Medication D", "Medication E", "Medication F"],
        datasets: [
          {
            label: "Prescription Volume",
            backgroundColor: "#2E3B55",
            borderColor: "#000",
            borderWidth: 1,
            hoverBackgroundColor: "#FFD700",
            hoverBorderColor: "#000",
            data: [1200, 900, 1500, 300, 780, 1350],
          },
        ],
      },
    },
  },
  {
    modal: "kpi",
    title: "Adherence Rate",
    description: "Measures the percentage of patients who follow their prescribed medication regimen. It indicates treatment compliance and overall health outcomes. Understanding adherence rates helps identify patient education needs, adherence barriers, and intervention strategies to improve medication adherence and patient outcomes.",
    metricIDs: ["ADH001", "ADH002"],
    calculation: "Number of patients adhering to their regimen / Total number of patients prescribed the medication * 100",
    affiliateApplicability: "Vendors",
    lastModifiedDate: "2024-01-02",
    businessQuestions: [
      "What is the current adherence rate for our medications?",
      "Which factors are affecting patient adherence?",
      "How does adherence vary by patient demographics?",
    ],
    chartData: {
      chartType: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Adherence Rate",
            borderColor: "#FFD700",
            backgroundColor: "#2E3B55",
            data: [80, 75, 85, 120, 35, 80, 95, 120, 130, 100, 70, 60],
          },
        ],
      },
    },
  },
  {
    modal: "kpi",
    title: "Market Share",
    description: "The percentage of total sales in the market attributed to our company. It reflects our competitive position and market dominance. This metric allows comparison with competitors and aids strategic decisions to increase market share through product innovation, market expansion, or competitive pricing strategies.",
    metricIDs: ["MS001", "MS002"],
    calculation: "Company sales / Total market sales * 100",
    affiliateApplicability: "Partners",
    lastModifiedDate: "2024-06-09",
    businessQuestions: [
      "What is our market share for key products?",
      "How has our market share changed over time?",
      "How do we compare to competitors in market share?",
    ],
    chartData: {
      chartType: "pie",
      data: {
        labels: ["Our Company", "Competitor A", "Competitor B", "Competitor C"],
        datasets: [
          {
            data: [40, 20, 15, 25],
            backgroundColor: ["#121722", "#415881", "#2e3b55", "#003153"],
            hoverBackgroundColor: ["#FFD700", "#FFD700", "#FFD700", "#FFD700"],
          },
        ],
      },
    },
  },
  {
    modal: "kpi",
    title: "Revenue Growth",
    description: "The increase in revenue over a specified period, indicating business performance. Monitoring revenue growth helps identify successful product launches, market expansions, or operational efficiencies driving revenue. It guides future investment decisions and strategic planning to sustain growth and profitability.",
    metricIDs: ["REV001", "REV002"],
    calculation: "(Current period revenue - Previous period revenue) / Previous period revenue * 100",
    affiliateApplicability: "All affiliates",
    lastModifiedDate: "2024-02-01",
    businessQuestions: [
      "What is our revenue growth rate over the past year?",
      "Which products are contributing most to revenue growth?",
      "What strategies can we implement to drive further revenue growth?",
    ],
    chartData: {
      chartType: "doughnut",
      data: {
        labels: ["Q1", "Q2", "Q3", "Q4"],
        datasets: [
          {
            label: "Revenue Growth",
            backgroundColor: ["#121722", "#415881", "#2e3b55", "#003153"],
            borderColor: "#fff",
            hoverBackgroundColor: ["#FFD700", "#FFD700", "#FFD700", "#FFD700"],
            borderWidth: 1,
            data: [1000, 1200, 1500, 800],
          },
        ],
      },
    },
  },
  {
    modal: "kpi",
    title: "Cost per Prescription",
    description: "The average cost incurred per prescription filled, critical for optimizing healthcare delivery. This metric benchmarks our cost efficiency against industry standards, identifying opportunities for cost-saving measures and enhancing profitability while maintaining high-quality patient care.",
    metricIDs: ["COST001", "COST002"],
    calculation: "Total costs / Total number of prescriptions filled",
    affiliateApplicability: "North America",
    lastModifiedDate: "2024-06-09",
    businessQuestions: [
      "What is the average cost per prescription?",
      "How can we reduce costs per prescription?",
      "How do our prescription costs compare to industry benchmarks?",
    ],
    chartData: {
      chartType: "polarArea",
      data: {
        labels: ["Our Cost", "Industry Benchmark"],
        datasets: [
          {
            label: "Cost per Prescription",
            backgroundColor: "rgba(46, 59, 85, 0.7)",
            borderColor: "#000",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255, 215, 0, 0.7)",
            hoverBorderColor: "#000",
            data: [100, 150],
          },
        ],
      },
    },
  },
  {
    modal: "kpi",
    title: "Patient Satisfaction",
    description: "Measures the satisfaction levels of patients with their medications and treatment experience. It reflects patient loyalty and treatment efficacy. Monitoring patient satisfaction helps identify areas for service improvement, enhancing patient care delivery, and building a positive reputation in the healthcare community.",
    metricIDs: ["SAT001", "SAT002"],
    calculation: "Sum of satisfaction survey scores / Number of surveys completed",
    affiliateApplicability: "Subsidaries",
    lastModifiedDate: "2024-06-09",
    businessQuestions: [
      "What is the overall patient satisfaction with our medications?",
      "What are the main factors influencing patient satisfaction?",
      "How can we improve patient satisfaction scores?",
    ],
    chartData: {
      chartType: "doughnut",
      data: {
        labels: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied"],
        datasets: [
          {
            data: [20, 45, 15, 20],
            backgroundColor: ["#121722", "#415881", "#2e3b55", "#003153"],
            hoverBackgroundColor: ["#FFD700", "#FFD700", "#FFD700", "#FFD700"],
          },
        ],
      },
    },
  },
];

export const layoutData = [
  {
    modal: "layout",
    title: "Homepage Layout",
    description: "The main landing page of the website, providing an overview of the site's purpose and main features. This layout aims to capture the user's attention immediately and guide them to key sections of the site. It includes a combination of visuals, text, and navigation elements to enhance user experience.",
    lastModifiedDate: "2024-06-11",
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
    modal: "layout",
    title: "Product Detail Layout",
    description: "Displays detailed information about a specific pharmaceutical product, including benefits, usage, and side effects. The layout ensures that users can easily find and understand critical product information. It also provides space for high-quality images, user reviews, and related product recommendations.",
    lastModifiedDate: "2024-06-11",
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
    modal: "layout",
    title: "Blog Layout",
    description: "A layout for blog posts, providing a structured format for articles, news updates, and informational content. This layout supports easy categorization and tagging of posts for better discoverability. It is designed to enhance readability and encourage user interaction through comments and social media sharing.",
    lastModifiedDate: "2024-06-11",
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
    modal: "layout",
    title: "Contact Us Layout",
    description: "A page layout for providing contact information and a form for users to reach out to the company. This layout includes a user-friendly form design, clear contact details, and links to additional resources such as customer support and FAQs. It aims to facilitate communication and provide quick assistance to users.",
    lastModifiedDate: "2024-06-11",
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
    modal: "layout",
    title: "FAQ Layout",
    description: "A layout for frequently asked questions, organized to help users find answers quickly. This layout uses a clear and logical structure, often with expandable sections to keep the page uncluttered. It includes search functionality and regularly updated content to ensure users can find the most relevant information.",
    lastModifiedDate: "2024-06-11",
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
    modal: "layout",
    title: "User Dashboard Layout",
    description: "A personalized dashboard for users to access their account, order history, and preferences. This layout is designed to be intuitive and user-friendly, providing easy access to important metrics and account management tools. It includes customizable widgets and quick links to enhance user engagement and satisfaction.",
    lastModifiedDate: "2024-06-11",
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
    modal: "storyboard",
    title: "New Product Introduction",
    description: "Storyboard for introducing a new product to the market targetting customers. This storyboard outlines the key steps and strategies for a successful product launch. It includes market analysis, promotional tactics, and initial sales targets to ensure the new product gains traction.",
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
                backgroundColor: ["#415881", "#2E3B55"],
                hoverBackgroundColor: ["#FFD700", "#FFD700"],
                data: [40, 60],
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
            labels: ["Q1 Survey", "Q2 Survey", "Q3 Survey", "Q4 Survey"],
            datasets: [
              {
                label: "Customer Feedback Score",
                backgroundColor: "#2E3B55",
                hoverBackgroundColor: "#FFD700",
                data: [8.5, 7, 6, 8],
              },
            ],
          },
        },
      },
    ],
  },
  {
    modal: "storyboard",
    title: "Digital Marketing Campaign",
    description: "Storyboard outlining the digital marketing campaign strategies and ideas. This includes detailed plans for online advertisements, social media promotions, and email marketing. It also tracks the effectiveness of different digital channels and adjusts strategies to maximize engagement and conversion rates.",
    affiliateApplicability: "North America",
    kpis: [
      {
        title: "Click-Through Rate (CTR)",
        chartData: {
          chartType: "line",
          data: {
            labels: ["Clicks", "Impressions", "Responses"],
            datasets: [
              {
                label: "Click-Through Rate (CTR)",
                borderColor: "#FFD700",
                backgroundColor: "#2E3B55",
                data: [5.5, 4, 3.5],
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
                borderColor: "#FFD700",
                backgroundColor: "#2E3B55",
                data: [1.8, 3],
              },
            ],
          },
        },
      },
    ],
  },
  {
    modal: "storyboard",
    title: "Operational Efficiency",
    description: "Storyboard for tracking operational efficiency and its improvements. This storyboard focuses on identifying bottlenecks and streamlining processes to enhance productivity. It includes metrics for monitoring production downtime, cost reduction initiatives, and workflow optimizations.",
    affiliateApplicability: "All affiliates",
    kpis: [
      {
        title: "Production Downtime",
        chartData: {
          chartType: "doughnut",
          data: {
            labels: ["Product Downtime Hours", "Service Downtime Hours"],
            datasets: [
              {
                backgroundColor: ["#2E3B55", "#415881"],
                hoverBackgroundColor: ["#FFD700", "#FFD700"],
                data: [35, 65],
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
            labels: ["Cost", "Labor", "Commission"],
            datasets: [
              {
                label: "Unit Cost Reduction",
                backgroundColor: "#2E3B55",
                hoverBackgroundColor: "#FFD700",
                data: [8, 4, 2],
              },
            ],
          },
        },
      },
    ],
  },
  {
    modal: "storyboard",
    title: "Customer Engagement Plan",
    description: "Storyboard for increasing customer engagement by various methodologies. This plan includes strategies for enhancing customer interactions through various channels such as social media, loyalty programs, and personalized communications. It aims to build strong customer relationships and increase retention rates.",
    affiliateApplicability: "EMEA",
    kpis: [
      {
        title: "Customer Retention Rate",
        chartData: {
          chartType: "doughnut",
          data: {
            labels: ["2021", "2022", "2023"],
            datasets: [
              {
                label: "Customer Retention Rate",
                backgroundColor: ["#415881", "#2e3b55", "#003153"],
                hoverBackgroundColor: ["#FFD700", "#FFD700", "#FFD700"],
                data: [35, 25, 40],
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
            labels: ["Incident Time", "Response Time", "Resolved Time"],
            datasets: [
              {
                label: "Average Response Time",
                borderColor: "#FFD700",
                backgroundColor: "#2E3B55",
                data: [10, 16, 40],
              },
            ],
          },
        },
      },
    ],
  },
  {
    modal: "storyboard",
    title: "Financial Performance Review",
    description: "Storyboard for reviewing financial performance and key insights. This includes an analysis of key financial metrics such as revenue growth, profit margins, and cost management. It provides insights into the company's financial health and helps identify areas for improvement.",
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
                backgroundColor: "rgba(46, 59, 85, 0.7)",
                borderColor: "#000",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255, 215, 0, 0.7)",
                data: [32, 24, 44],
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
            labels: ["Cost", "Profit", "Taxes", "Net Profit"],
            datasets: [
              {
                label: "Net Profit Margin",
                backgroundColor: "#2E3B55",
                hoverBackgroundColor: "#FFD700",
                data: [30, 70, 25, 45],
              },
            ],
          },
        },
      },
    ],
  },
  {
    modal: "storyboard",
    title: "R&D Project Timeline",
    description: "Storyboard for tracking Research & Development project milestones. This storyboard highlights the progress and timelines of various R&D initiatives. It includes key performance indicators to monitor project completion rates, innovation indices, and the impact of research outcomes.",
    affiliateApplicability: "All affiliates",
    kpis: [
      {
        title: "Project Completion Rate",
        chartData: {
          chartType: "pie",
          data: {
            labels: ["Milestones Achieved", "Goals Achieved"],
            datasets: [
              {
                label: "Project Completion Rate",
                borderColor: "#fff",
                backgroundColor: ["#415881", "#2E3B55"],
                hoverBackgroundColor: ["#FFD700", "#FFD700"],
                data: [60, 40],
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
            labels: ["Product Score", "Services Score", "Others"],
            datasets: [
              {
                label: "Innovation Index",
                backgroundColor: "#2E3B55",
                borderColor: "#000",
                borderWidth: 1,
                hoverBackgroundColor: "#FFD700",
                hoverBorderColor: "#000",
                data: [7.8, 6.3, 2.5],
              },
            ],
          },
        },
      },
    ],
  },
];

