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
  title: "Principal Software developer",
  company: "OCI",
  className: 'text-violet-500',
  team: "Ops Central",
  location: "Seattle, WA",
  description:
    "Worked on the \"Ops Central\" team to standardize and unify all operations at OCI. Responsibilities included spearheading programs to get other teams to onboard to standardized observability and service catalog, as well as building out the UI elements they would eventually use, and run interviews them about common use cases to collect feedback.",
  startDate: new Date("2024-04-01T00:00:00-0800"),
  endDate: new Date("2025-08-15T00:00:00-0800"),
  accomplishments: [
    "Ran Oracle-wide program to migrate users from existing tools to Ops Central UIs",
    "Contributed to basic framework of app, including deployment strategy, basic layout/look-and-feel/keyboard navigation",
    "Contributed work for a handful of the fundamental tools, including Metrics and Logging",
  ],
};

const dope: Job = {
  title: "Principal Software developer",
  company: "OCI",
  className: 'text-emerald-500',
  team: "DevOps Portal Experience",
  location: "Seattle, WA",
  description:
    "Built the DevOps Portal Experience from scratch with another developer, and then operated it with the team we grew. The portal (DOPE) is the center for all ops, deployments, and day-to-day management of all OCI infrastructure across dozens of regions.",
  startDate: new Date("2016-05-01T00:00:00-0800"),
  endDate: new Date("2024-04-01T00:00:00-0800"),
  accomplishments: [
    "Built the infrastructure and large parts of the UI from scratch",
    "Built the canary to monitor DOPE's infrastucture and network connectivity",
    "Architected and built most of the solution that allowed DOPE to scale seamlessly as OCI built dozens of new regions",
    "Published two OCI blog posts explaining the canary we architected and built",
    "Helped design the eventual federation of all webapps",
  ],
};

const counsyl: Job = {
  title: "Senior Software developer",
  className: 'text-orange-500',
  company: "Counsyl",
  team: "Platform",
  location: "San Francisco, CA",
  description:
    "Managed all monitoring and infrastructure for a biotech startup",
  startDate: new Date("2014-09-01T00:00:00-0800"),
  endDate: new Date("2016-04-01T00:00:00-0800"),
  accomplishments: [
    "Implemented multiple control/data planes for the company: load balancing, monitoring, DNS, secret management, service discovery",
    "Modernized the puppet installation for the company",
    "Integrated some Hashicorp tools (Terraform, Vault, Consul) to automate deployments and rollbacks across the company",
  ],
};

const amazon: Job = {
  title: "Software developer (SDE2)",
  className: 'text-rose-500',
  company: "Amazon",
  team: "DNS/L7",
  location: "Seattle, WA",
  description: "Managed all production DNS and Load Balancing infrastructure",
  startDate: new Date("2011-01-01T00:00:00-0800"),
  endDate: new Date("2014-08-01T00:00:00-0800"),
  accomplishments: [
    "Wrote and managed software to control the DNS and Load Balancer fleer at AWS and Amazon",
    "Wrote and maintained services to enable DNS self-service for internal AWS customers",
    "Improved observability for the global DNS fleet",
  ],
};

export const allJobs = [opsCentral, dope, counsyl, amazon];
