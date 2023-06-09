import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import ClubMemberCard from "./ClubMemberCard";
import devansh from "./devansh.jpg";
import TeamMemberMobile from "./TeamMemberMobile";

const Team = () => {
  return (
    <div className="mx-6 lg:mx-20">
      <h1 className="lg:text-[64px] text-[32px]">The People Behind</h1>

      <div>
        <TeamMemberMobile
          name="Varun Nagpal"
          por="Secy"
          oneLiner="I'll get people to think of one liners and will try to think of 3d stuff"
          githubUrl="#"
          img={devansh}
        />
      </div>

      <div className="flex flex-row flex-wrap w-full justify-center [&>div]:mt-6 hidden lg:block">
        <ClubMemberCard
          name="Varun Nagpal"
          por="Secy"
          oneLiner="I'll get people to think of one liners and will try to think of 3d stuff"
          githubUrl="#"
          img={devansh}
        />
        <ClubMemberCard
          name="Varun Nagpal"
          por="Secy"
          oneLiner="I'll get people to think of one liners and will try to think of 3d stuff"
          githubUrl="#"
          img={devansh}
        />
        <ClubMemberCard
          name="Varun Nagpal"
          por="Secy"
          oneLiner="I'll get people to think of one liners and will try to think of 3d stuff"
          githubUrl="#"
          img={devansh}
        />
        <ClubMemberCard
          name="Varun Nagpal"
          por="Secy"
          oneLiner="I'll get people to think of one liners and will try to think of 3d stuff"
          githubUrl="#"
          img={devansh}
        />
        <ClubMemberCard
          name="Varun Nagpal"
          por="Secy"
          oneLiner="I'll get people to think of one liners and will try to think of 3d stuff"
          githubUrl="#"
          img={devansh}
        />
        <ClubMemberCard
          name="Varun Nagpal"
          por="Secy"
          oneLiner="I'll get people to think of one liners and will try to think of 3d stuff"
          githubUrl="#"
          img={devansh}
        />
        <ClubMemberCard
          name="Varun Nagpal"
          por="Secy"
          oneLiner="I'll get people to think of one liners and will try to think of 3d stuff"
          githubUrl="#"
          img={devansh}
        />
        <ClubMemberCard
          name="Varun Nagpal"
          por="Secy"
          oneLiner="I'll get people to think of one liners and will try to think of 3d stuff"
          githubUrl="#"
          img={devansh}
        />
        <ClubMemberCard
          name="Varun Nagpal"
          por="Secy"
          oneLiner="I'll get people to think of one liners and will try to think of 3d stuff"
          githubUrl="#"
          img={devansh}
        />
        <ClubMemberCard
          name="Varun Nagpal"
          por="Secy"
          oneLiner="I'll get people to think of one liners and will try to think of 3d stuff"
          githubUrl="#"
          img={devansh}
        />
        <ClubMemberCard
          name="Varun Nagpal"
          por="Secy"
          oneLiner="I'll get people to think of one liners and will try to think of 3d stuff"
          githubUrl="#"
          img={devansh}
        />
        <ClubMemberCard
          name="Varun Nagpal"
          por="Secy"
          oneLiner="I'll get people to think of one liners and will try to think of 3d stuff"
          githubUrl="#"
          img={devansh}
        />
      </div>
    </div>
  );
};

export default Team;
