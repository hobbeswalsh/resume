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
          Information about jobs further in the past will be furnished upon
          request
        </div>
      </div>
      <hr className="my-2 shadow-2xl text-slate-500" />
      <div className="font-semibold my-2">Skills/Languages</div>
      <div>Typescript, Java, Go, Python, SQL, Terraform, Shell</div>
    </div>
  );
};

export default Resume;
