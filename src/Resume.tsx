import Address from "./Address";
import ResumeHeader from "./ResumeHeader";
import Jobs from "./Jobs";
import { allJobs } from "./job";

const Resume = () => {
  return (
    <div className="p-4">
      <ResumeHeader />
      <hr className="my-2 shadow-2xl text-slate-500 border-double" />
      <Address />
      <div className="font-semibold mb-1 text-gray-500">Experience</div>
      <Jobs jobs={allJobs} />
    </div>
  );
};

export default Resume;
