export type Project = {
  name: string;
  shortName: string;
  description: string;
  problem: string;
  solution: string;
  businessValue: string;
  features: string[];
  tech: string[];
  status: string;
  accent: "lime" | "cyan" | "violet" | "amber";
  future: string[];
};

export const projects: Project[] = [
  {
    name: "AHEAD - Retail Expiry Intelligence Platform",
    shortName: "AHEAD",
    description: "A retail expiry management platform that turns date checking into a measurable, accountable workflow.",
    problem: "Retail teams lose margin and customer trust when expiring stock is spotted too late or ownership is unclear.",
    solution: "A proactive platform that tracks product dates, escalates alerts, and records manager sign-offs.",
    businessValue: "Reduces waste, protects margins, and gives store owners a clear operational picture.",
    features: ["Barcode scanning", "35 / 14 / 7 day alerts", "Push notifications", "Manager review workflow", "Owner dashboard"],
    tech: ["Flutter", "Dart", "Firebase", "Firestore", "FCM", "Cloud Functions"],
    status: "Most advanced project",
    accent: "lime",
    future: ["Multi-store analytics", "Supplier insights", "Automated markdown recommendations"],
  },
  {
    name: "Tenant Management System",
    shortName: "Tenant OS",
    description: "A scalable operations hub for landlords, rental complexes, and student accommodation.",
    problem: "Property operations become fragmented when leases, payments, tenants, and maintenance live in separate records.",
    solution: "One structured system for day-to-day property management, financial visibility, and tenant support.",
    businessValue: "Improves collection visibility, reduces admin, and supports better tenant service.",
    features: ["Property and unit management", "Rent and arrears tracking", "Lease management", "Maintenance tickets", "Reports"],
    tech: ["Flutter", "Dart", "Firebase"],
    status: "Large-scale business system",
    accent: "cyan",
    future: ["Tenant portal", "Automated statements", "Payment integrations"],
  },
  {
    name: "ShiftIQ",
    shortName: "ShiftIQ",
    description: "A shift and salary calculator built for workers whose earnings change with every schedule.",
    problem: "Hourly workers can struggle to verify complex pay periods, Sunday rates, and holiday earnings.",
    solution: "A clear shift log with automatic hour, rate, pay-period, and monthly calculations.",
    businessValue: "Gives workers clarity and confidence before payday.",
    features: ["Shift logging", "Earnings calculations", "Sunday and holiday pay", "Pay periods", "Monthly insights"],
    tech: ["Flutter", "Dart", "SQLite"],
    status: "Productivity app",
    accent: "violet",
    future: ["Payslip comparison", "Roster import", "Employer templates"],
  },
  {
    name: "Expense vs Income Tracker",
    shortName: "MoneyMind",
    description: "A personal finance companion for understanding cash flow, habits, and monthly balance.",
    problem: "Simple transaction lists do not explain where money is going or how spending patterns change.",
    solution: "A visual tracker that organizes income and spending into useful reports and insights.",
    businessValue: "Supports more intentional personal budgeting and financial decisions.",
    features: ["Multiple income sources", "Expense categories", "Monthly reports", "Charts", "Smart insights"],
    tech: ["Flutter", "Dart", "SQLite"],
    status: "Finance app",
    accent: "lime",
    future: ["Budget goals", "Recurring transactions", "Data export"],
  },
  {
    name: "Career Discovery App",
    shortName: "Career Map",
    description: "A focused workspace for discovering employers and managing job applications.",
    problem: "Job seekers lose track of promising employers, career pages, applications, and follow-ups.",
    solution: "A sector-based discovery tool combined with a lightweight application tracker.",
    businessValue: "Makes the job search more organized, consistent, and strategic.",
    features: ["Company discovery", "Career page saving", "Application tracking", "Sector grouping", "Follow-up reminders"],
    tech: ["Flutter", "Dart"],
    status: "Career tool",
    accent: "cyan",
    future: ["CV matching", "Interview notes", "Opportunity alerts"],
  },
  {
    name: "Sports Fixture Analysis App",
    shortName: "Fixture Lens",
    description: "A data-driven fixture analysis concept focused on clearer trends and confidence scores.",
    problem: "Sports data is plentiful, but meaningful patterns are often scattered across different sources.",
    solution: "A single analysis view for form, head-to-head history, goal trends, and confidence-rated outcomes.",
    businessValue: "Turns raw fixture data into a faster, more understandable research workflow.",
    features: ["Fixture analysis", "Head-to-head history", "Outcome suggestions", "Goal trends", "Confidence scores"],
    tech: ["Flutter", "Dart", "Sports APIs"],
    status: "Data-driven app concept",
    accent: "amber",
    future: ["Live data feeds", "Model backtesting", "Personal watchlists"],
  },
  {
    name: "MT5 Trading Bots",
    shortName: "MT5 Bots",
    description: "Trading automation experiments focused on disciplined controls and configurable strategy rules.",
    problem: "Manual trading can be inconsistent when risk controls and strategy rules depend on emotion.",
    solution: "Configurable automation for execution limits, cooldowns, position caps, and opportunity detection.",
    businessValue: "Explores repeatable execution and risk-aware technical systems.",
    features: ["Trade execution controls", "Risk limits", "Cooldowns", "Max positions", "Strategy switching"],
    tech: ["Python", "MetaTrader 5"],
    status: "Experimental technical project",
    accent: "violet",
    future: ["Backtesting dashboard", "Strategy analytics", "Paper-trading environment"],
  },
];
