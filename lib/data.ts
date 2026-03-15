export const profile = {
  name: "Sidharth Malpani",
  tagline: "DevOps Enthusiast & Full-Stack Explorer",
  subtitle: "CS Undergrad @ UPES Dehradun",
  bio: "I build things that ship — from CI/CD pipelines and cloud infrastructure to full-stack web apps. Currently in my final year, working at the intersection of DevOps and modern web development.",
  email: "sidharthmalpani@gmail.com",
  phone: "+91 88290 21001",
  github: "https://github.com/areysid",
  linkedin: "https://www.linkedin.com/in/sidharth-malpani",
  leetcode: "https://leetcode.com/u/areysid/",
  avatar: "/me.jpg",
};

export const skills = [
  // Languages
  { name: "JavaScript", category: "Languages", level: 65 },
  { name: "TypeScript", category: "Languages", level: 70 },
  { name: "Python", category: "Languages", level: 75 },
  { name: "Java", category: "Languages", level: 65 },
  { name: "C", category: "Languages", level: 60 },

  // Frontend & Full-Stack
  { name: "React / Next.js", category: "Frontend", level: 80 },
  { name: "Tailwind CSS", category: "Frontend", level: 90 },
  { name: "Node.js / Express", category: "Frontend", level: 70 },
  { name: "HTML / CSS", category: "Frontend", level: 90 },

  // Database
  { name: "Prisma / SQL", category: "Database", level: 75 },
  { name: "MongoDB Atlas", category: "Database", level: 60 },
  { name: "Firebase", category: "Database", level: 50 },
  { name: "Convex", category: "Database", level: 65 },

  // DevOps & CI/CD
  { name: "Docker", category: "DevOps & CI/CD", level: 70 },
  { name: "Jenkins", category: "DevOps & CI/CD", level: 75 },
  { name: "Terraform", category: "DevOps & CI/CD", level: 80 },
  { name: "Kubernetes", category: "DevOps & CI/CD", level: 50 },
  { name: "GitHub Actions", category: "DevOps & CI/CD", level: 60 },
  { name: "Azure DevOps", category: "DevOps & CI/CD", level: 70 },
  { name: "ArgoCD", category: "DevOps & CI/CD", level: 50 },
  { name: "Prometheus / Grafana", category: "DevOps & CI/CD", level: 70 },

  // Cloud Platforms
  { name: "AWS", category: "Cloud Platforms", level: 80 },
  { name: "Azure", category: "Cloud Platforms", level: 70 },
  { name: "GCP", category: "Cloud Platforms", level: 50 },

  // Miscellaneous
  { name: "Third-party API Integration", category: "Miscellaneous", level: 82 },
  { name: "Google App Scripts", category: "Miscellaneous", level: 70 },
  { name: "Pabbly Connect", category: "Miscellaneous", level: 68 },
  { name: "Data Analysis (Python / Looker)", category: "Miscellaneous", level: 65 },
];

export const projects = [
  // Full Stack
  {
    title: "FlowForge",
    description:
      "AI-powered visual workflow automation platform in the vein of n8n and Zapier. Features a drag-and-drop canvas, execution engine, AI nodes, webhook triggers, and Polar billing. Final year major project at UPES.",
    tags: ["Next.js 15", "TypeScript", "React Flow", "tRPC", "Inngest", "Prisma", "Polar"],
    github: "https://github.com/areysid/FlowForge",
    live: "",
    status: "In Progress",
  },
  {
    title: "Eficaz",
    description:
      "Job search web app with recruiter integration, company reviews, and dynamic pagination. Integrates Ceipal, Google Places, and Google Sheets APIs. Also powers the 1dayhiring.com hiring flow for fast-turnaround recruitment. Actively live and accepting traffic.",
    tags: ["ReactJS", "TypeScript", "Vite", "Tailwind CSS", "Shadcn/UI", "Ceipal API"],
    github: "",
    live: "https://eficazindia.com/",
    extraLink: { label: "1dayhiring.com", url: "https://1dayhiring.com" },
    status: "Production",
  },
  {
    title: "Farm Flow",
    description:
      "Internally managed operations platform for a farm, actively used in production. Features a workboard, attendance tracking, surveys, custom forms, and inventory management — all in one dashboard.",
    tags: ["React", "Supabase", "TypeScript", "Vercel"],
    github: "",
    live: "https://farm-flow-psi.vercel.app/",
    status: "Production",
  },
  {
    title: "POS System",
    description:
      "Full-stack point-of-sale system for a pizzeria, actively used in production. Covers menu management, real-time order flow tracking, image uploads, and mobile thermal printing via RawBT.",
    tags: ["React", "Vite", "Node.js", "Express", "SQLite", "Fly.io", "RawBT"],
    github: "",
    live: "https://the-dutch-uncle-pizzeria-pos.vercel.app/",
    status: "Production",
  },
  {
    title: "Crepid",
    description:
      "Project management and team collaboration platform built on a microservices architecture. Features real-time collaboration tools, project tracking, a robust REST API for integrations, and JWT-based authentication. Backend powered by FastAPI.",
    tags: ["React", "FastAPI", "Microservices", "JWT", "REST API"],
    github: "https://github.com/areysid/Crepid",
    live: "https://crepid.vercel.app/",
    status: "Live",
  },
  {
    title: "Discord Clone",
    description:
      "Real-time full-stack chat application with voice/video channels, file uploads, and authentication. Built with Socket.io for live messaging and LiveKit for audio/video. Currently optimised for desktop only.",
    tags: ["Next.js 13", "Prisma", "MySQL", "Socket.io", "LiveKit", "UploadThing"],
    github: "https://github.com/areysid/Discord-Clone",
    live: "https://discord-clone-umber-chi.vercel.app/",
    status: "Live",
  },
  {
    title: "PayPals",
    description:
      "Splitwise-style expense splitting app with group management, smart settlements, and automated email reminders powered by Inngest background jobs and Resend.",
    tags: ["Next.js", "Convex", "Inngest", "Resend", "Shadcn/UI", "Tailwind CSS"],
    github: "https://github.com/areysid/PayPals-SplitwiseClone-",
    live: "https://pay-pals-splitwise-clone.vercel.app/",
    status: "Live",
  },
  {
    title: "Trip Trekker",
    description:
      "AI-powered travel itinerary planner that uses Gemini AI and Google APIs to generate personalised trip plans based on your preferences. Firebase Auth for user management.",
    tags: ["ReactJS", "Firebase", "Gemini API", "Google Places API", "Tailwind CSS"],
    github: "https://github.com/areysid/trip-trekker",
    live: "https://trip-trekker-two.vercel.app/",
    status: "Live",
  },

  // DevOps
  {
    title: "Self-Healing Kubernetes System",
    description:
      "Intelligent monitoring and remediation layer for Kubernetes clusters. Uses predictive analytics and ML to anticipate failures before they happen, then automatically triggers healing workflows — restarting pods, scaling workloads, or reconfiguring resources — before outages impact users.",
    tags: ["Kubernetes", "Prometheus", "Grafana", "Python", "Machine Learning", "Predictive Analytics"],
    github: "https://github.com/areysid/Self-Healing-Kubernetes-System-With-Predictive-Monitoring",
    live: "",
    status: "Local / GitHub Only",
  },
  {
    title: "DevOps Exam App",
    description:
      "Three-tier DevOps project deploying a mock exam application using Jenkins pipelines, Docker containers, and SonarQube for automated code quality gating.",
    tags: ["Jenkins", "Docker", "SonarQube", "CI/CD"],
    github: "https://github.com/areysid/devops-exam-app",
    live: "",
    status: "Infra Offline",
  },
  {
    title: "AWS Terraform Module — SonarQube EC2",
    description:
      "Reusable Terraform module that provisions an AWS EC2 instance and configures SonarQube on it — ready to plug into any CI/CD pipeline for code quality analysis.",
    tags: ["Terraform", "AWS EC2", "SonarQube", "IaC"],
    github: "https://github.com/areysid/AWS_Terraform_Module_EC2-Sonarqube",
    live: "",
    status: "Infra Offline",
  },
  {
    title: "Jenkins + Terraform EKS",
    description:
      "Automates the creation of an Amazon EKS cluster using Terraform, seamlessly integrated with Jenkins for a fully hands-off Kubernetes cluster provisioning pipeline.",
    tags: ["Jenkins", "Terraform", "AWS EKS", "Kubernetes", "CI/CD"],
    github: "https://github.com/areysid/Jenkins-Terraform-EKS",
    live: "",
    status: "Infra Offline",
  },
  {
    title: "Ingress Controller Project",
    description:
      "Configured Kubernetes Ingress for a Node.js web app with a full CI/CD pipeline via Jenkins, Docker, and ArgoCD for GitOps-style deployments.",
    tags: ["Kubernetes", "Jenkins", "Docker", "ArgoCD", "Node.js"],
    github: "https://github.com/areysid/Microservices-ingress-controller",
    live: "",
    status: "Infra Offline",
  },
  {
    title: "K8s Voting App",
    description:
      "Cloud-native voting application accessible over the internet, letting users vote for their favourite programming language across six options: C#, Python, JavaScript, Go, Java, and Node.js.",
    tags: ["Kubernetes", "Cloud-Native", "Docker", "Microservices"],
    github: "https://github.com/areysid/K8s-voting-app",
    live: "",
    status: "Infra Offline",
  },
  {
    title: "TechNova CI/CD Pipeline",
    description:
      "End-to-end CI/CD pipeline for a Node.js web application deployed on AWS infrastructure, covering build, test, and automated deployment stages.",
    tags: ["AWS", "Node.js", "CI/CD", "GitHub Actions"],
    github: "https://github.com/Boora-Raman/TechNova-CI-CD-Pipeline",
    live: "",
    status: "Infra Offline",
  },
];

export const experience = [
  {
    role: "DevOps Intern",
    company: "Intact India",
    period: "Dec 2025 – Present",
    description:
      "Currently working with enterprise-grade DevOps tooling — managing Nexus repositories, SonarQube code analysis, Atlassian suite (Jira & Confluence), Terraform infrastructure provisioning, Git workflows, az-cli, and Azure DevOps pipelines.",
    tags: ["Azure DevOps", "Terraform", "SonarQube", "Nexus", "Jira", "Confluence", "az-cli"],
  },
  {
    role: "Product & Web Development Intern",
    company: "Eficaz HR Services",
    period: "Apr 2024 – May 2024  ·  Aug 2025 – Oct 2025",
    description:
      "Worked across two stints on full-stack web projects integrating FastAPI backend logic, third-party APIs, and responsive frontends. Contributed to landing pages, marketing strategies, and interactive service demos. Earlier stint involved chatbot research and development using WATI.",
    tags: ["FastAPI", "React", "Third-party APIs", "WATI", "Full-Stack"],
  },
  {
    role: "DevOps Intern",
    company: "Xebia",
    period: "Jun 2025 – Jul 2025",
    description:
      "Applied core DevOps practices during a 45-day internship. Focused on automating development workflows and building CI/CD pipelines using Jenkins and Docker in a professional enterprise environment.",
    tags: ["Jenkins", "Docker", "CI/CD", "DevOps"],
  },
  {
    role: "English Instructor",
    company: "Social Internship",
    period: "Jun 2023 – Jul 2023",
    description:
      "Led English language classes for underprivileged children, creating an engaging and structured learning environment. Developed communication and leadership skills through hands-on teaching.",
    tags: ["Teaching", "Leadership", "Communication"],
  },
  {
    role: "B.Tech — Computer Science (DevOps)",
    company: "UPES Dehradun",
    period: "Aug 2022 – Present",
    description:
      "Specialising in DevOps engineering within Computer Science. Maintaining a CGPA of 8.34/10. Final year major project: FlowForge — an AI-powered visual workflow automation platform.",
    tags: ["Computer Science", "DevOps", "CGPA: 8.34", "Major Project"],
  },
];

export const certifications = [
  {
    title: "AWS Skill Builder — Cloud & DevOps",
    issuer: "Amazon Web Services",
    year: "2024 – Present",
  },
  {
    title: "Blockchain Program",
    issuer: "University at Buffalo",
    year: "2023",
  },
  {
    title: "Certified DevOps Bootcamp (40 hrs)",
    issuer: "INT",
    year: "2024",
  },
  {
    title: "DevOps Course",
    issuer: "Udemy",
    year: "2025 – Present",
  },
];