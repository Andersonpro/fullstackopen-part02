/* eslint-disable react/prop-types */

export const Button = ({content, type, onClick}) => {
  return (
    <button onClick={onClick} type={type}>{content}</button>
  );
}