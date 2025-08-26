export interface Job {
  title: string;
  className?: string;
  company: string;
  team: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  accomplishments: string[];
}

const opsCentral: Job = {
  title: "Principal Software Developer",
  company: "OCI",
  className: 'text-violet-500',
  team: "Ops Central",
  location: "Seattle, WA",
  description:
    "Worked on the \"Ops Central\" team to standardize all operations at OCI. Responsibilities included: Leading a program to encourage service teams to onboard to OCI standardized observability, building out the UI elements for Ops Central, and interview users about common operational use cases to improve the UI.",
  startDate: new Date("2024-04-01T00:00:00-0800"),
  endDate: new Date("2025-08-15T00:00:00-0800"),
  accomplishments: [
    "Ran Oracle-wide program to migrate users from existing tools to Ops Central UIs",
    "Interviewed engineers on other teams; identified and documented feature gaps",
    "Contributed to basic framework of app, including deployment strategy, basic layout/look-and-feel/keyboard navigation, and core UIs",
  ],
};

const dope: Job = {
  title: "Principal Software Developer",
  company: "OCI",
  className: 'text-emerald-500',
  team: "DevOps Portal Experience",
  location: "Seattle, WA",
  description:
    "Built the DevOps Portal Experience (DOPE) from scratch with another developer, and then expanded and operated it as OCI scaled from 2 to over 50 regions. DOPE is the central UI for all ops, deployments, and day-to-day management of OCI's global infrastructure.",
  startDate: new Date("2016-05-01T00:00:00-0800"),
  endDate: new Date("2024-04-01T00:00:00-0800"),
  accomplishments: [
    "Built the infrastructure and large parts of the UI from scratch",
    "Architected and built the network proxy that allowed DOPE to scale seamlessly as OCI built dozens of new regions",
    "Built the canary to monitor DOPE's health and network connectivity",
    "Published two OCI blog posts explaining the DOPE canary",
    "Helped design federation so internal OCI developers could use our platform",
  ],
};

const counsyl: Job = {
  title: "Senior Software Developer",
  className: 'text-orange-500',
  company: "Counsyl",
  team: "Platform",
  location: "San Francisco, CA",
  description:
    "Managed monitoring, infrastructure, CI/CD, and tooling for a biotech startup",
  startDate: new Date("2014-09-01T00:00:00-0800"),
  endDate: new Date("2016-04-01T00:00:00-0800"),
  accomplishments: [
    "Implemented multiple control/data planes for the company: load balancing, monitoring, DNS, secret management, service discovery",
    "Integrated some Hashicorp tools (Terraform, Vault, Consul) to automate deployments for all internal teams",
    "Modernized the puppet installation for the company",
  ],
};

const amazon: Job = {
  title: "Software Developer (SDE2)",
  className: 'text-rose-500',
  company: "Amazon",
  team: "DNS/L7",
  location: "Seattle, WA",
  description: "Managed production DNS and Load Balancing infrastructure for Amazon",
  startDate: new Date("2011-01-01T00:00:00-0800"),
  endDate: new Date("2014-08-01T00:00:00-0800"),
  accomplishments: [
    "Wrote and managed software to manage the DNS and Load Balancer fleet at AWS and Amazon",
    "Wrote and maintained services to enable DNS self-service for internal AWS customers",
    "Improved observability for the global DNS fleet",
  ],
};

export const allJobs = [opsCentral, dope, counsyl, amazon];
