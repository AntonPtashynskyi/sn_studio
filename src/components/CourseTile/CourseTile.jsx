import React from "react";
import "./courseTile.scss";

export const CourseTile = ({ title, description, time, url, t, blank = false }) => {
  const titleArray = title.split(" ").map((word, index) => {
    if (index === 1) {
      return (
        <React.Fragment key={index}>
          <br />
          <span key={index} className="font-semibold">
            {word}
          </span>
        </React.Fragment>
      );
    }
    return <React.Fragment key={index}>{word}</React.Fragment>;
  });

  return (
    <div className="course-tile">
      <div className="course-tile--time">
        <p>
          {time}
          <span className="ml-[5px]">🕑</span>
        </p>
      </div>
      <h3 className="course-tile--title">{titleArray}</h3>
      <p className="course-tile--description">{description}</p>
      <a href={url} target={blank ? "_blank" : ""} className="course-tile--link mt-auto">
        {t("Learn more")}
      </a>
    </div>
  );
};
