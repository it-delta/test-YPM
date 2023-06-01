import StudentsPicker from './StudentsPicker';
import StudentsTable from './StudentsTable';
import { fetchStudentData, fetchSchoolData, fetchLegalguardianData } from '../utils';
import { useState, useCallback } from 'react';


const StudentsDataComponent = () => {
  const [studentsData, setStudentsData] = useState([]);
  // const [schoolsData, setSchoolsData] = useState([]);
  // const [legalguardiansData, setLegalguardiansData] = useState([]);


  // 1. useCallback
  const onStudentsPick = async (studentIds) => {
    for (const studentId of studentIds) {
      // 2. fix and optimize requests
      let studentData = studentsData.find(e => e.id === studentId); // check if studentData has been loaded
      if (!studentData) {
        studentData = await fetchStudentData(studentId);

        const { schoolId, legalguardianId } = studentData;
        // make parallel calls
        const [schoolData, legalguardianData] = await Promise.all([
          fetchSchoolData(schoolId),
          fetchLegalguardianData(legalguardianId)
        ]);

        studentData.schoolData = schoolData;
        studentData.legalguardianData = legalguardianData; 
        setStudentsData([...studentsData, studentData]);
        }
      }
  };

  console.log('render StudentsDataComponent')
  return (
    <>
      <StudentsPicker onPickHandler={onStudentsPick} />
      <StudentsTable
        studentsData={studentsData}
      />
    </>
  );
};


export default StudentsDataComponent;
