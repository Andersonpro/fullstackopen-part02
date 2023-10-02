/* eslint-disable react/prop-types */

export const Filter = ({onChange, searchName}) => {
  return (
    <div>
        Pesquisar por <input onChange={onChange} value={searchName}/>
    </div>
  );
}