/* eslint-disable react/prop-types */

export const Total = ({course}) => {
  return (
    <p><strong>Total of {course.parts.reduce((sum, part) => {
      return sum + part.exercises;
    }, 0)} exercises</strong></p>
  );
}