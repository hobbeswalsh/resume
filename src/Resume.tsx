import Address from "./Address";
import ResumeHeader from "./ResumeHeader";
import Jobs from "./Jobs";
import { allJobs } from "./job";
import ProfessionalSummary from "./ProfessionalSummary";

const Resume = () => {
  return (
    <div className="p-4">
      <ResumeHeader />
      <hr className="my-2 shadow-2xl text-slate-500" />
      <Address />
      <ProfessionalSummary />
      <div className="font-semibold">Experience</div>
      <div className="ml-[5%]">
        <Jobs jobs={allJobs} />
        <div className="mb-2 mt-8 text-xs">
          Additional information available upon request.
        </div>
        <div className="text-xs flex flex-col gap-1">
          <div>
            <span className="font-bold">Wordnik</span>, System
            Administrator/Software developer - San Mateo, CA{" "}
            <span className="text-slate-500">2009-2011</span>
          </div>
          <div>
            <span className="font-bold">Yahoo!</span>, DNS Guru - Sunnyvale, CA{" "}
            <span className="text-slate-500">2007-2009</span>
          </div>
          <div>
            <span className="font-bold">UnitedLayer</span>, System
            administrator/software developer - San Francisco, CA{" "}
            <span className="text-slate-500">2006-2007</span>
          </div>
        </div>
      </div>
      <hr className="my-2 shadow-2xl text-slate-500" />
      <div className="font-semibold my-2">Technical skills</div>
      <div className="ml-[5%]">
        Programming languages: Typescript/Javascript, Java, Go, Python, SQL,
        Shell
      </div>
      <div className="ml-[5%]">
        Platforms: Oracle Cloud Infrastructure (OCI) Amazon Web Services (AWS),
        Linux/*BSD
      </div>
      <div className="ml-[5%]">
        Tools & Frameworks: React, Terraform, Docker, Puppet, Vault, Consul
      </div>
      <div className="font-semibold my-2">Education</div>
      <div className="ml-[5%]">
        University of Chicago, Honors in Language and Literature, 2003
      </div>
      <div className="font-semibold my-2">Publications</div>
      <div className="ml-[5%]">
        <div>
          <a
            className="text-blue-500"
            href="https://blogs.oracle.com/cloud-infrastructure/post/behind-the-scenes-one-ui-to-rule-all-oci-devops"
          >
            Behind the Scenes: One UI to Rule All OCI DevOps
          </a>
        </div>
        <div>
          <a
            className="text-blue-500"
            href="https://blogs.oracle.com/cloud-infrastructure/post/behind-the-scenes-ocis-canary-devops-monitoring"
          >
            Behind the Scenes: OCI's Thousand-Eyed Canary for DevOps Monitoring
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
