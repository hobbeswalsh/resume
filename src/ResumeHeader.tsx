import { RiGithubLine, RiMailLine, RiPhoneLine } from "@remixicon/react";

const ResumeHeader = () => {
  return (
    <div className="flex justify-between items-end flex-wrap overflow-ellipsis">
      <div className="text-[24px] font-semibold">Robin Walsh</div>
      <div className="flex gap-2 text-xs">
        <div className="text-blue-500 flex gap-1 items-center">
          <RiMailLine className="rotate-345" size={19} />
          <a href="mailto:robin.walsh@hey.com">robin.walsh@hey.com</a>
        </div>
        <div className="text-blue-500 print:flex gap-1 items-center hidden print:visible">
          <RiPhoneLine className="rotate-345" size={19} />
          (503) 460-7475
        </div>
        <div>
          <a
            className="flex text-blue-500 items-center print:hidden"
            href="https://github.com/hobbeswalsh"
          >
            <RiGithubLine size={24} className="rotate-345" />
            github.com/hobbeswalsh
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeHeader;
