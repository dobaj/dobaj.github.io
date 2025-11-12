import type { ReactNode } from "react";
import "./Experience.css";

export const Experience = ({
  jobTitle,
  timeSpan,
  employer,
  location,
  description,
}: {
  jobTitle: string;
  timeSpan: string[]; // In form [long form start, long form end],
  employer: string;
  location: string; // In form [long from loc, short form loc]
  description: ReactNode;
}) => {
  // Have to make my own lut to suit my formatting style
  const monthLookup: Record<string,string> = 
  {
    "January": "Jan",
    "February": "Feb",
    "March": "Mar",
    "April": "Apr",
    "May": "May",
    "June": "June",
    "July": "July",
    "September": "Sept",
    "October": "October",
    "November": "Nov",
    "December": "Dec"
  }
  
  // Convert dates to shorter format
  const shortTimeSpan: string[] = [];
  timeSpan.forEach((date,i) => {
    const splitDate = date.split(" ");
    
    if (Object.keys(monthLookup).includes(splitDate[0])){
      // Abbreviate if first thing is a month
      shortTimeSpan[i] = monthLookup[splitDate[0]] + " " + splitDate[1]
      return
    }

    shortTimeSpan[i] = date;
    return
  });

  // Remove commas from location
  const shortLocation = location.replace(", ","\n");

  return (
    <div className="experience">
      <div className="experienceHeader">
        <h2>{jobTitle}</h2>

        <div className="longform">
          <h3>{timeSpan[0]}</h3> <hr /> <h3>{timeSpan[1]}</h3>
        </div>
        <div className="shortform">
          <h3>{shortTimeSpan[0]}</h3> <hr /> <h3>{shortTimeSpan[1]}</h3>
        </div>
      </div>
      <div className="subHeader">
        <div>
          <h3>{employer}</h3>
        </div>
        <h3 className="longform">{location}</h3>
        <h3 className="shortform">{shortLocation}</h3>
      </div>
      <p className="experienceText">{description}</p>
    </div>
  );
};
