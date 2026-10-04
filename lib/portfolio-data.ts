export const links = {
  email: "mailto:contact.ansh03@gmail.com",
  linkedin: "https://www.linkedin.com/in/v-ansh/",
  github: "https://github.com/Ansh-vibe",
  currentPortfolio: "https://ansh-vibe.github.io/ansh-portfolio-website/",
  oren: "https://dev-oren.lovable.app",
  linkedinUpdates: ["https://www.linkedin.com/feed/update/urn:li:activity:7499899491379236865/", "https://www.linkedin.com/feed/update/urn:li:activity:7500297676140457985/"],
}

const images = {
  hospitality: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"],
  cvforge: ["https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=85"],
  telecom: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85"],
  cellular: ["https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85"],
}

export const projects = [
  { category: "Client websites", title: "Hospitality, made inviting", description: "Three Cape Town restaurant experiences with menu and booking flows, built for real hospitality teams.", tags: ["Next.js", "React", "Booking flows"], href: "https://rooftop-reserve-4.preview.emergentagent.com/", linkLabel: "Rooftop Reserve", images: images.hospitality, art: "hospitality", artLabel: "Menus · Bookings · Guest experience", relatedLinks: [{ label: "Rooftop Reserve", href: "https://rooftop-reserve-4.preview.emergentagent.com/" }, { label: "Intimate Feast", href: "https://intimate-feast.preview.emergentagent.com/" }, { label: "Khadak Dining Portal", href: "https://khadak-dining-portal.preview.emergentagent.com/" }] },
  { category: "AI resume builder", title: "CVForge", description: "An AI resume builder designed to help candidates generate ATS-optimized resumes with less friction.", tags: ["Full-stack", "AI integration", "Resume tools"], href: "https://cvforge-app.base44.app/", images: images.cvforge, art: "cvforge", artLabel: "A clearer path from experience to opportunity" },
  { category: "Analytics", title: "Telecom Network KPI Dashboard", description: "Python, Pandas, Power BI, and Excel brought together to automate normal, warning, and critical KPI triage.", tags: ["Python", "Pandas", "Power BI", "Excel"], href: "https://github.com/Ansh-vibe/Telecom-KPI-Dashboard", linkLabel: "View repository", images: images.telecom, art: "telecom", artLabel: "Latency · Throughput · Packet loss" },
  { category: "Network intelligence", title: "4G LTE & 5G NR KPI Analysis", description: "Analysis of synthetic cellular data using Python and advanced Excel to identify site bottlenecks.", tags: ["Python", "LTE", "5G NR", "Excel"], href: "https://github.com/Ansh-vibe/4G-LTE-5G-KPI-Analysis", linkLabel: "View repository", images: images.cellular, art: "cellular", artLabel: "Availability · Throughput · Call drops" },
]

export const services = [
  { title: "Full-stack website development", description: "From product planning and responsive interfaces to backend integration and deployment." },
  { title: "Responsive frontend implementation", description: "Clear, accessible UI that works across screens and supports the way people actually use it." },
  { title: "Booking, menu & lead capture", description: "Practical flows for hospitality teams and businesses that need more useful web journeys." },
  { title: "Backend, API & database integration", description: "Connect the moving parts behind a product with maintainable APIs and data flows." },
  { title: "CRM integration & workflow support", description: "Help teams carry a lead from the first interaction into the right next action." },
  { title: "Network & business-data dashboards", description: "Turn operational data into focused views for faster decisions and triage." },
]

export const experience = [
  { role: "Founder & Lead Full-Stack Engineer", organization: "OREN Website Development Services", href: links.oren, date: "Apr 2026 — Present", description: "Built and deployed hospitality websites; led client discovery, planning, CRM integration, delivery, and deployment." },
  { role: "Network Engineering & Analytics Trainee", organization: "Cisco Networking Academy", href: null, date: "Aug 2026 — Present", description: "Worked with IPv4/IPv6 subnetting and Python/Power BI network-performance dashboards." },
  { role: "Cybersecurity Intern", organization: "Codec Technologies India (CodeAlpha)", href: null, date: "Jul — Sep 2025", description: "Participated in vulnerability-assessment and threat-detection labs and applied secure-coding practices." },
  { role: "Campus Ambassador", organization: "Kin-G Technology", href: null, date: "Sep — Oct 2025", description: "Achieved 15 registrations in two days and organized 3+ career webinars." },
  { role: "Class Representative", organization: "Axis Colleges", href: null, date: "Sep 2024 — Apr 2026", description: "Served as a communication link for a class of 65+ students." },
]

export const education = [
  { title: "Bachelor of Computer Applications (BCA)", organization: "Axis Colleges · CSJM University", date: "2024 — 2027", details: "CGPA 7.62 · Kanpur, Uttar Pradesh" },
  { title: "Higher Secondary · Science & Computer Science", organization: "U.P. Board", date: "2024", details: "86.2%" },
]

export const certifications = ["Cisco Networking Basics.", "Microsoft learning: networking, Power BI, analytics, and Excel automation.", "AWS Technical Essentials and MongoDB Fundamentals.", "Accenture and Deloitte job simulations (Forage).", "Captain, Axis Colleges Cricket Team (2024–25); represented the college in two CSJMU university tournaments.", "Volunteer Leader, NextGenClub Coding Competition (2025)."]

export const skills = {
  marquee: ["Full-stack development", "Responsive web design", "Booking & menu flows", "Data dashboards", "React · Next.js · Python · SQL"],
  groups: [
    { title: "Languages", items: ["C", "Python", "Java", "SQL"] },
    { title: "Web & backend", items: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind", "REST APIs", "CRM integration"] },
    { title: "Data & cloud", items: ["MongoDB fundamentals", "AWS foundations", "Power BI", "Excel"] },
    { title: "Core CS & tools", items: ["DSA", "OOP", "DBMS", "Operating systems", "Computer networks", "Git", "GitHub", "Vercel"] },
  ],
}
