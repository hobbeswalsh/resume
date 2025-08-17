import type { Job } from "./job";
import JobDisplay from "./JobDisplay";

const Jobs = (props: { jobs: Job[] }) => {
  const { jobs } = props;
  return (
    <div className="ml-[5%]">
      {jobs.map((j) => (
        <div className="mt-4" key={j.startDate.toISOString()}>
          <JobDisplay job={j} />
        </div>
      ))}
    </div>
  );
};

export default Jobs;
