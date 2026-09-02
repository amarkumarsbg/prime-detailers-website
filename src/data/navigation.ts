export interface MegaMenuColumn {
  title: string;
  items: { label: string; href: string }[];
}

export interface NavItem {
  label: string;
  href: string;
  megaMenu?: MegaMenuColumn[];
}

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { 
    label: "Solutions", 
    href: "/#solutions",
    megaMenu: [
      {
        title: "Core Modules",
        items: [
          { label: "Job Cards", href: "/#solutions" },
          { label: "GST Billing", href: "/#solutions" },
          { label: "CRM", href: "/#solutions" },
          { label: "ERP", href: "/#solutions" },
          { label: "Inventory", href: "/#solutions" },
          { label: "Service Reminders", href: "/#solutions" },
          { label: "Customer Engagement", href: "/#solutions" },
          { label: "WhatsApp Automation", href: "/#solutions" },
          { label: "Automation", href: "/#solutions" },
          { label: "Finance", href: "/#solutions" },
          { label: "Accounting", href: "/#solutions" },
          { label: "Payroll", href: "/#solutions" },
          { label: "Attendance", href: "/#solutions" }
        ]
      },
      {
        title: "Workshop Solutions",
        items: [
          { label: "Workshop Management", href: "/#solutions" },
          { label: "Automobile Workshop", href: "/#solutions" },
          { label: "Auto Repair Shop", href: "/#solutions" },
          { label: "Car Garage", href: "/#solutions" },
          { label: "Car Workshop", href: "/#solutions" },
          { label: "Bike Workshop", href: "/#solutions" },
          { label: "Truck Workshop", href: "/#solutions" },
          { label: "EV Garage", href: "/#solutions" },
          { label: "Car Detailing", href: "/#solutions" },
          { label: "Fleet Workshop", href: "/#solutions" }
        ]
      },
      {
        title: "Buying & Business",
        items: [
          { label: "Best Garage Software", href: "/#solutions" },
          { label: "Best Workshop Software", href: "/#solutions" },
          { label: "Software India (Garage)", href: "/#solutions" },
          { label: "Software India (Workshop)", href: "/#solutions" },
          { label: "Marketing", href: "/#solutions" },
          { label: "Multi-Branch", href: "/#solutions" },
          { label: "Service History", href: "/#solutions" },
          { label: "Reports & Analytics", href: "/#solutions" }
        ]
      },
      {
        title: "Apps & Mobile",
        items: [
          { label: "Garage App", href: "/#solutions" },
          { label: "Workshop App", href: "/#solutions" }
        ]
      }
    ]
  },
  { 
    label: "Features", 
    href: "/#features",
    megaMenu: [
      {
        title: "Workshop Operations",
        items: [
          { label: "Workshop Management Dashboard", href: "/#features" },
          { label: "Job Card Management", href: "/#features" },
          { label: "Counter Sales", href: "/#features" },
          { label: "Billing & Invoicing", href: "/#features" },
          { label: "Inventory Management", href: "/#features" },
          { label: "Vehicle Inspection", href: "/#features" }
        ]
      },
      {
        title: "Customer & Vehicle",
        items: [
          { label: "CRM & Lead Management", href: "/#features" },
          { label: "Customer Management", href: "/#features" },
          { label: "Vehicle Management", href: "/#features" },
          { label: "Vehicle Service History", href: "/#features" },
          { label: "Service Reminders", href: "/#features" },
          { label: "WhatsApp Automation", href: "/#features" },
          { label: "Customer Review Collection", href: "/#features" }
        ]
      },
      {
        title: "Business & Finance",
        items: [
          { label: "Finance Management", href: "/#features" },
          { label: "Loan Management", href: "/#features" },
          { label: "Reports & Analytics", href: "/#features" },
          { label: "CA Access", href: "/#features" }
        ]
      },
      {
        title: "Team Management",
        items: [
          { label: "Attendance Management", href: "/#features" },
          { label: "Payroll Management", href: "/#features" },
          { label: "Leave Management", href: "/#features" },
          { label: "User Management", href: "/#features" },
          { label: "Role-Based Access", href: "/#features" },
          { label: "Multi-Branch Management", href: "/#features" }
        ]
      },
      {
        title: "Marketing & Media",
        items: [
          { label: "Offers & Promotions", href: "/#features" },
          { label: "Media Gallery (Before & After Photos)", href: "/#features" }
        ]
      }
    ]
  },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const footerNav = {
  product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Solutions", href: "/solutions" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "FAQ", href: "/faq" },
    { label: "Support", href: "/contact" },
  ],
  account: [
    { label: "Login", href: "/login" },
    { label: "Start Free Trial", href: "/signup" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
} as const;
