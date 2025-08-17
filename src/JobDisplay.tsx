import type { Job } from "./job";
import { RiArrowRightSFill } from "@remixicon/react";

const formatDate = (d: Date) =>
  d.toLocaleDateString("en-US", { month: "2-digit", year: "numeric" });

const JobDisplay = (props: { job: Job }) => {
  const { job } = props;
  return (
    <div className="text-sm">
      <div className="flex justify-between">
        <div className="flex gap-1">
          <div className="font-semibold">
            {job.title} - {job.team}
          </div>
          <div className="text-gray-500">
            {job.company}, {job.location}
          </div>
        </div>
        <div>
          {formatDate(job.startDate)} -{" "}
          {job.endDate ? formatDate(job.endDate) : "present"}
        </div>
      </div>
      <div className="max-w-[80%] my-1">{job.description}</div>
      <div className="text-xs font-semibold my-1">Major accomplishments</div>
      <ul className="ml-[20px]">
        {job.accomplishments.map((win) => (
          <div className="flex items-center" key={win}>
            <RiArrowRightSFill size={16} />
            <li key={win}>{win}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default JobDisplay;
