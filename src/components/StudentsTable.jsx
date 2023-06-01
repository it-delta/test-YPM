import { useState, useCallback } from 'react';

const StudentsTable = ({ studentsData }) => {
  console.log('render StudentsTable')
  return (
    <>
        <br />
        <div>StudentsTable</div>
        <br />
        {studentsData.map(e => (
            <div key={e.id}>{e.name} {e.schoolData[0].name} {e.legalguardianData[0].name}</div>
        ))}
    </>
  );
};


export default StudentsTable;
