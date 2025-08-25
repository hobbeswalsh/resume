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
        <div className="my-2 text-xs italic">
          Information about the following jobs (further in the past) will be
          furnished upon request
        </div>
        <div className="text-xs flex flex-col gap-1">
          <div>
            <span className="font-bold">Wordnik</span>, System
            Administrator/Software developer - San Mateo, CA
          </div>
          <div>
            <span className="font-bold">Yahoo!</span>, DNS Guru - Sunnyvale, CA
          </div>
          <div>
            <span className="font-bold">UnitedLayer</span>, System
            administrator/software developer - San Francisco, CA
          </div>
        </div>
      </div>
      <hr className="my-2 shadow-2xl text-slate-500" />
      <div className="font-semibold my-2">Skills/Languages</div>
      <div>
        Typescript/React, Java, Go, Python, SQL, Terraform, Shell, Linux/*BSD
      </div>
      <div className="font-semibold my-2">Education</div>
      <div>University of Chicago, Honors in Language and Literature, 2003</div>
    </div>
  );
};

export default Resume;
