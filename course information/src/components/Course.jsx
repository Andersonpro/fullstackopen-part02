/* eslint-disable react/prop-types */

import { Content } from "./Content";
import { Header } from "./Header";

export const Course = ({courses}) => {
  return (
    <>
      {courses.map(course => {
        return (
          <div key={course.id}>
            <Header title={course.name} />
            <Content course={course} />
          </div>
        );
      })}
    </>
  );
}