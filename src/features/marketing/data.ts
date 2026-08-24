export const publicPages = [
  "/",
  "/features",
  "/solutions",
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
    question: "Who is Prime Detailers for?",
    answer:
      "Prime Detailers is designed for detailing and workshop businesses that need connected control over operations, customers, inventory, staff, and finances.",
  },
  {
    question: "Can I manage multiple branches?",
    answer:
      "Yes. Branch support is part of the SaaS subscription model, and branch-wise data can be managed centrally according to your plan limits.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing is calculated by backend subscription rules using selected validity, extra branches, extra users, onboarding, referral discount, and GST.",
  },
  {
    question: "What happens when my subscription expires?",
    answer:
      "Access behavior follows backend entitlement status such as active, grace, or locked states. The website does not override those rules.",
  },
  {
    question: "Can I add users?",
    answer:
      "Yes. Extra users can be added as add-ons on top of your base plan limits.",
  },
  {
    question: "Can I add branches?",
    answer:
      "Yes. Extra branches can be added based on your subscription and billing configuration.",
  },
  {
    question: "How does onboarding work?",
    answer:
      "Onboarding includes organization setup, owner account, default branch setup, and subscription/trial flow based on backend capabilities.",
  },
] as const;

export const validityOptions = [
  { label: "1 Year", months: 12 },
  { label: "2 Years", months: 24 },
  { label: "3 Years", months: 36 },
  { label: "5 Years", months: 60 },
] as const;
