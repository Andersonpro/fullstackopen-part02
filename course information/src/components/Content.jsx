/* eslint-disable react/prop-types */

import { Part } from "./Part";
import { Total } from "./Total";

export const Content = ({ course }) => {
  return (
    <>
        {course.parts.map(part => {
          return <Part key={part.id} part={part} />
        })}
      <Total course={course} />
    </>
  );
}