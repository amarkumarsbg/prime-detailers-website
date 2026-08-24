export const publicPages = [
  "/",
  "/features",
  "/pricing",
  "/how-it-works",
  "/about",
  "/faq",
  "/contact",
  "/login",
  "/signup",
  "/terms",
  "/privacy",
  "/demo",
] as const;

export const featureGroups = [
  {
    title: "Workshop Management",
    items: ["Job Cards", "Vehicle Management", "Inspection", "Before/After Photos"],
  },
  {
    title: "Customer Management",
    items: [
      "Customer Profiles",
      "Vehicle History",
      "Reminders",
      "WhatsApp Communication",
    ],
  },
  {
    title: "Inventory",
    items: ["Parts Catalog", "Purchases", "Stock", "Counter Sales"],
  },
  {
    title: "Finance",
    items: ["Invoices", "Payments", "Accounting", "Receivables", "Payables", "Reports"],
  },
  {
    title: "Staff & HR",
    items: ["Staff", "Attendance", "Leave", "Payroll", "Incentives"],
  },
  {
    title: "Customer Experience",
    items: [
      "Before/After Photos",
      "Customer Photo Links",
      "Status Updates",
      "Service Reminders",
    ],
  },
  {
    title: "Subscription/SaaS",
    items: ["Plan Management", "Multi-branch", "User Limits", "Billing"],
  },
] as const;

export const faqItems = [
  {
    question: "What is Prime Detailers?",
    answer:
      "Prime Detailers is a workshop management platform built for auto detailing and service operations. It helps manage jobs, customers, inventory, staff, and finances from one place.",
  },
  {
    question: "How does the workshop app work?",
    answer:
      "Your team runs daily operations inside the Workshop App, including job cards, inspections, billing, and customer updates. This public site is for sales, signup, and onboarding.",
  },
  {
    question: "How many users are included?",
    answer:
      "The BASIC plan starts with 3 users for 1 branch. You can add extra users and branches during subscription setup.",
  },
  {
    question: "How do branches work?",
    answer:
      "Each organization starts with one default branch. Additional branches can be added based on your subscription and limits.",
  },
  {
    question: "What happens when subscription expires?",
    answer:
      "Access behavior depends on your subscription status and backend entitlement rules such as active, grace, or locked states.",
  },
  {
    question: "How does renewal work?",
    answer:
      "Renewals are handled using the subscription APIs, where term and add-ons can be updated and billed according to platform pricing rules.",
  },
  {
    question: "Is data deleted after expiry?",
    answer:
      "Data retention and account access follow backend platform policy. This website does not enforce or override those lifecycle rules.",
  },
  {
    question: "How do WhatsApp features work?",
    answer:
      "WhatsApp communication is available through configured workflows in the product stack. Final behavior depends on backend and integration setup.",
  },
] as const;

export const validityOptions = [
  { label: "1 Year", months: 12 },
  { label: "2 Years", months: 24 },
  { label: "3 Years", months: 36 },
  { label: "5 Years", months: 60 },
] as const;
