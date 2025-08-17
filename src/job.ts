export interface Job {
  title: string;
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
  company: "Oracle Cloud Infrastructure",
  team: "Ops Central",
  location: "Seattle, WA",
  description:
    "Worked on the 'Ops Central' team to standardize and unify all operations at OCI. Responsibilities included spearheading programs to get other teams to onboard to standardized observability and service catalog, as well as building out the UI elements they would eventually use, and run interviews them about common use cases to collect feedback.",
  startDate: new Date("2024-04-01T00:00:00-0800"),
  accomplishments: [
    "Ran program to migrate users from existing tools to Ops Central UIs",
    "Contributed to basic framework of app, including deployment strategy, basic layout/look-and-feel/keyboard navigation",
    "Contributed work for a handful of the fundamental tools, including Metrics and Logging",
  ],
};

const dope: Job = {
  title: "Principal Software developer",
  company: "Oracle Cloud Infrastructure",
  team: "DevOps Portal Experience",
  location: "Seattle, WA",
  description:
    "Built the DevOps Portal Experience from scratch with another developer, and then operated it with the team we grew. The portal (DOPE) is the center for all ops, deployments, and day-to-day management of the OCI cloud for internal Oracle employees.",
  startDate: new Date("2018-06-01T00:00:00-0800"),
  accomplishments: [
    "Built the infrastructure and most of the UI from scratch. This included the React app, a Java backend, and an HAProxy instance that scaled to dozens of services in hundreds of regions, at thousands of RPS.",
    "Built the canary to monitor DOPE's infrastucture and network connectivity",
    "Architected and built most of the solution that allowed DOPE to scale seamlessly as OCI built dozens of new regions",
    "Published two OCI blog posts about the canary we architected and built",
  ],
};

export const allJobs = [opsCentral, dope];
