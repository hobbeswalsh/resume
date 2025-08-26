import Address from "./Address";
import ResumeHeader from "./ResumeHeader";
import Jobs from "./Jobs";
import { allJobs } from "./job";

const Resume = () => {
  return (
    <div className="p-4">
      <ResumeHeader />
      <hr className="my-2 shadow-2xl text-slate-500" />
      <Address />
      <div className="font-semibold mb-1">Experience</div>
      <div className="ml-[5%]">
        <Jobs jobs={allJobs} />
        <div className="mb-2 mt-8 text-xs">
          Further information about employment prior to 2011 will be furnished
          upon request
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
      <div className="font-semibold my-2">Skills/Languages</div>
      <div className="ml-[5%]">
        Typescript/React, Java, Go, Python, SQL, Terraform, Shell, Linux/*BSD
      </div>
      <div className="font-semibold my-2">Education</div>
      <div className="ml-[5%]">
        University of Chicago, Honors in Language and Literature, 2003
      </div>
      <div className="font-semibold my-2">Publications</div>
      <div className="ml-[5%]">
        Two blog posts for OCI:{" "}
        <a
          className="text-blue-500"
          href="https://blogs.oracle.com/authors/robin-walsh"
        >
          Behind the Scenes with OCI
        </a>
      </div>
    </div>
  );
};

export default Resume;
