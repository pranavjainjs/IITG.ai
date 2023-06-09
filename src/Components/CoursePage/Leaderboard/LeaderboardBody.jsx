import React from "react";
import LeaderboardRow from "./LeaderboardRow.jsx";

const LeaderboardBody = (props) => {
  const rows = props.data.map((object, index) => {
    const score = object.Score;
    // const score = object.Score.split(" / ")[0];

    return (
      <LeaderboardRow
        key={index + 1}
        index={index + 1}
        uniqueID={object.UniqueID}
        name={object.Name}
        w1={object.Week1}
        w2={object.Week2}
        total={object.Total}
      />
    );
  });

  return <div>{rows}</div>;
};

export default LeaderboardBody;
