import { useState } from "react";

interface Props {
  children: string | undefined;
  limitLength: number
}
const ExpandableText = ({ children,limitLength }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = limitLength;

  const summary = children?.substring(0, limit);

  if (!children) return null;

  if (children.length >= limit) {
    if (expanded == true) {
      return (
        <p className="leading-7 text-justify">
          {children}{" "}
          <button
            onClick={() => setExpanded(false)}
            className="bg-[#ff3b30] dark:bg-[#ff9500] rounded-lg px-2 hover:text-[#f5a19d] dark:hover:text-[#ffd580] text-[#f2f2f7] ml-2"
          >
            Show Less
          </button>
        </p>
      );
    } else if (expanded == false) {
      return (
        <p className="leading-7 text-justify ">
          {summary}...{" "}
          <button
            onClick={() => setExpanded(true)}
            className="bg-[#ff3b30] dark:bg-[#ff9500] rounded-lg px-2 hover:text-[#f5a19d] dark:hover:text-[#ffd580] text-[#f2f2f7] ml-2"
          >
            Read More
          </button>
        </p>
      );
    }
  }
};

export default ExpandableText;
