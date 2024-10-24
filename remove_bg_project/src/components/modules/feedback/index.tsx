import React from "react";

type FeedbackProps = {
  id: number;
  text: string;
  author: string;
  image: string;
  jobTitle: string;
};

const Feedback: React.FC<FeedbackProps> = ({
  id,
  text,
  author,
  image,
  jobTitle,
}) => {
  return (
    <div className="flex flex-col items-start gap-1 p-9 bg-white border border-[#e1e1e1] shadow-md rounded-lg">
      <span>”</span>
      <span>{text}</span>
      <div className="flex gap-2">
        <img src={image} className="size-11 rounded-full" />
        <div className="flex flex-col">
          <span>{author}</span>
          <span>{jobTitle}</span>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
