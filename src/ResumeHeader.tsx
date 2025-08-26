import { RiArticleLine, RiGithubLine, RiMailLine } from "@remixicon/react";

const ResumeHeader = () => {
  return (
    <div className="flex justify-between items-end flex-wrap overflow-ellipsis">
      <div className="text-[24px] font-semibold">Robin Walsh</div>
      <div className="flex gap-2 text-xs">
        <div className="text-blue-500 flex gap-1 items-center">
          <RiMailLine className="rotate-345" size={19} />
          <a href="mailto:robin.walsh@hey.com">robin.walsh@hey.com</a>
        </div>
        <div>
          <a
            className="flex text-blue-500 items-center"
            href="https://github.com/hobbeswalsh"
          >
            <RiGithubLine size={24} className="rotate-345" />
            @hobbeswalsh
          </a>
        </div>
        <div>
          <a
            className="flex text-blue-500 items-center"
            href="https://resume.walsh.omg.lol"
          >
            <RiArticleLine size={24} className="rotate-345" />
            resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeHeader;
