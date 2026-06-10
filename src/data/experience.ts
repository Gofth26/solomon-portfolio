export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Receiving Clerk",
    company: "Boxer Superstores",
    period: "Apr 2026 - Present",
    points: ["Verify and record incoming deliveries", "Monitor inventory movement", "Inspect stock and receiving documentation"],
  },
  {
    role: "Merchandiser GA",
    company: "Boxer Superstores",
    period: "Feb 2025 - Present",
    points: ["Replenish and organize stock", "Maintain displays and stock rotation", "Support customers and store operations"],
  },
  {
    role: "Junior Developer",
    company: "Personal Projects",
    period: "Jan 2023 - Present",
    points: ["Build mobile apps with Flutter and Dart", "Design practical retail, finance, and utility tools", "Focus on clean UI and real-world usability"],
  },
  {
    role: "Field Sales Agent",
    company: "Ubelong",
    period: "Nov 2023 - Nov 2024",
    points: ["Customer engagement and field sales", "Relationship building", "Direct client communication"],
  },
  {
    role: "Trainee Merchandiser",
    company: "Shoprite Group",
    period: "Nov 2022 - Jan 2023",
    points: ["Expiry date checking and FIFO rotation", "Stock arrangement", "Promotional displays and customer support"],
  },
  {
    role: "Student Assistant",
    company: "Central University of Technology",
    period: "Apr 2022 - Jul 2022",
    points: ["Supported students and staff with IT issues", "Helped maintain computer labs", "Assisted with hardware, software, and networking"],
  },
  {
    role: "Supplemental Instruction Leader",
    company: "Central University of Technology",
    period: "Feb 2021 - Nov 2021",
    points: ["Facilitated Software Development I sessions", "Guided C# coding exercises", "Supported student problem solving"],
  },
];
