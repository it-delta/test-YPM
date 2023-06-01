import StudentsPicker from './StudentsPicker';
import StudentsTable from './StudentsTable';
import { fetchStudentData, fetchSchoolData, fetchLegalguardianData } from '../utils';
import { useState, useCallback } from 'react';


const StudentsDataComponent = () => {
  const [studentsData, setStudentsData] = useState([]);
  // const [schoolsData, setSchoolsData] = useState([]);
  // const [legalguardiansData, setLegalguardiansData] = useState([]);


  const onStudentsPick = async (studentIds) => { //maybe useCallback later...
    for (const studentId of studentIds) {
      // fix and optimize requests
      let studentData = studentsData.find(e => e.id === studentId); // check if studentData has been loaded
      if (!studentData) {
        studentData = await fetchStudentData(studentId);

        const { schoolId, legalguardianId } = studentData;
        // make parallel calls
        const [schoolData, legalguardianData] = await Promise.all([
          fetchSchoolData(schoolId),
          fetchLegalguardianData(legalguardianId)
        ]);

        // saving data in th student obj
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
