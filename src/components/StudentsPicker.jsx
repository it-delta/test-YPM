import { useState, useCallback } from 'react';


const StudentsPicker = ({onPickHandler}) => {

  const handleButton = () => {
    onPickHandler([1]);
  }

  return (
    <div>
        <div>StudentsPicker</div>
        <button onClick={handleButton}>FETCH</button>
    </div>
  );
};


export default StudentsPicker;
