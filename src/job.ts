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
  company: "OCI",
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
  company: "OCI",
  team: "DevOps Portal Experience",
  location: "Seattle, WA",
  description:
    "Built the DevOps Portal Experience from scratch with another developer, and then operated it with the team we grew. The portal (DOPE) is the center for all ops, deployments, and day-to-day management of the OCI cloud for internal Oracle employees.",
  startDate: new Date("2016-05-01T00:00:00-0800"),
  endDate: new Date("2024-04-01T00:00:00-0800"),
  accomplishments: [
    "Built the infrastructure and large parts of the UI from scratch",
    "Built the canary to monitor DOPE's infrastucture and network connectivity",
    "Architected and built most of the solution that allowed DOPE to scale seamlessly as OCI built dozens of new regions",
    "Published two OCI blog posts about the canary we architected and built",
    "Helped design the eventual federation of all webapps",
  ],
};

const counsyl: Job = {
  title: "Senior Software developer",
  company: "Counsyl",
  team: "Platform",
  location: "San Francisco, CA",
  description: "bean",
  startDate: new Date("2014-09-01T00:00:00-0800"),
  endDate: new Date("2016-04-01T00:00:00-0800"),
  accomplishments: [
    "Built the infrastructure and large parts of the UI from scratch",
    "Built the canary to monitor DOPE's infrastucture and network connectivity",
    "Architected and built most of the solution that allowed DOPE to scale seamlessly as OCI built dozens of new regions",
    "Published two OCI blog posts about the canary we architected and built",
    "Helped design the eventual federation of all webapps",
  ],
};

export const allJobs = [opsCentral, dope, counsyl];
