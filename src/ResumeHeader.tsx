import { RiArticleLine, RiMailLine, RiSmartphoneLine } from "@remixicon/react";

const ResumeHeader = () => {
  return (
    <div className="flex justify-between items-end">
      <div className="text-[24px] font-semibold">Robin Walsh</div>
      <div className="flex gap-2 text-sm">
        <div className="text-blue-500 flex gap-1 items-center">
          <RiMailLine className="rotate-345" size={19} />
          <a href="mailto:robin.walsh@hey.com">robin.walsh@hey.com</a>
        </div>
        <div>
          <a
            className="flex text-blue-500"
            href="https://github.com/hobbeswalsh"
          >
            <RiSmartphoneLine size={24} className="rotate-345" />
            (503) 460-7475
          </a>
        </div>
        <div>
          <a className="flex text-blue-500" href="https://omg.lol/walsh">
            <RiArticleLine size={24} className="rotate-345" />
            omg.lol/walsh
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeHeader;
