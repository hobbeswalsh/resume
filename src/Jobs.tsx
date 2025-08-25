import type { Job } from "./job";
import JobDisplay from "./JobDisplay";

const Jobs = (props: { jobs: Job[] }) => {
  const { jobs } = props;
  return (
    <>
      {jobs.map((j) => (
        <div className="mt-4" key={j.startDate.toISOString()}>
          <JobDisplay job={j} />
        </div>
      ))}
    </>
  );
};

export default Jobs;
