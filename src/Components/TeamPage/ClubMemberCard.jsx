import React from "react";
import devansh from "./devansh.jpg";
import GithubIcon from "../../Icons/GithubIcon";
import LinkedInIcon from "../../Icons/LinkedInIcon";
import "./ClubMemberCard.css";

const ClubMemberCard = (props) => {
  return (
    <div className="box">
      <img
        src={props.img}
        style={{ maxHeight: 192, width: "auto", borderRadius:"12px 0 0 0" }}
      />
      <div className="self-start h-full flex flex-col justify-between ">
        <div>
          <div className="flex flex-row items-center name ">
            <p> {props.name}</p>
            <a href={props.githubUrl} className="ml-4">
              <GithubIcon />
            </a>
          </div>
          <p className="por">{props.por}</p>
        </div>
        <p className="one-liner">{props.oneLiner}</p>
      </div>
    </div>
  );
};

export default ClubMemberCard;
