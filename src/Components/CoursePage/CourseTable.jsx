import React, { useState } from "react";
import Week1Grid from "./Week1Grid";
import Week2Grid from "./Week2Grid";
import Week3Grid from "./Week3Grid";
import Week4Grid from "./Week4Grid";
import Week5Grid from "./Week5Grid";
import Week6Grid from "./Week6Grid";
import AdditionalMaterials from "./AdditionalMaterials";
import TableHeader from "./TableHeader";
import "./navstyles.css";

const CourseTable = () => {
  const [whichWeek, setWhichWeek] = useState(2);
  return (
    <div className="lg:flex w-full">
      <div
        className={`grid gap-1 grid-cols-1 
                      h-1/2 w-auto
                      mr-4
                      justify-items-start
                      
                      [&>button]:pt-3 [&>button]:px-4 [&>button]:pb-2 
                      [&>button]:text-white/[0.3]
                      [&>button]:border-s-4
                      [&>button]:border-black
                      [&>button]:w-full
                      [&>button]:text-left

                      [&>button:nth-child(${whichWeek})]:border-s-4
                      [&>button:nth-child(${whichWeek})]:border-[#0AB1BC]
                      [&>button:nth-child(${whichWeek})]:rounded-md
                      [&>button:nth-child(${whichWeek})]:bg-[#FFFFFF22]
                      [&>button:nth-child(${whichWeek})]:text-white


                      [&>button.btn-disabled]:text-black
                      [&>button.btn-disabled]:rounded-md


                      
                      `}
      >
        <button
          onClick={() => {
            setWhichWeek(1);
          }}
        >
          Week 1
        </button>
        <button
          onClick={() => {
            setWhichWeek(2);
          }}
        >
          Week 2
        </button>
        <button
          disabled
          className="btn-disabled"
          onClick={() => {
            setWhichWeek(3);
          }}
        >
          Week 3 (coming soon)
        </button>
        <button
          disabled
          className="btn-disabled"
          onClick={() => {
            setWhichWeek(4);
          }}
        >
          Week 4 (coming soon)
        </button>
        <button
          disabled
          className="btn-disabled"
          onClick={() => {
            setWhichWeek(5);
          }}
        >
          Week 5 (coming soon)
        </button>
        <button
          disabled
          className="btn-disabled"
          onClick={() => {
            setWhichWeek(6);
          }}
        >
          Week 6 (coming soon)
        </button>
        <button
          disabled
          className="btn-disabled"
          onClick={() => {
            setWhichWeek(7);
          }}
        >
          Additional Materials
        </button>
      </div>

      {whichWeek !== 0 && (
        <div className="w-4/5 max-lg:hidden">
          <div>
            <TableHeader />
          </div>
          <div className="mt-1">
            {whichWeek === 1 ? (
              <Week1Grid />
            ) : whichWeek === 2 ? (
              <Week2Grid />
            ) : whichWeek === 3 ? (
              <Week3Grid />
            ) : whichWeek === 4 ? (
              <Week4Grid />
            ) : whichWeek === 5 ? (
              <Week5Grid />
            ) : whichWeek === 6 ? (
              <Week6Grid />
            ) : (
              <AdditionalMaterials />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseTable;
