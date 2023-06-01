
export const fetchStudentData = async (studentId) => {
    console.log('fetch fetchStudentData')
    return {
        id: studentId,
        name: 'student ' + studentId,
        schoolId: 15,
        legalguardianId: 14
    };
}
 
export const fetchSchoolData = async (schoolId) => {
    console.log('fetch fetchSchoolData')
    return [{
        name: 'school'
    }]
}

export const fetchLegalguardianData = async (legalguardianId) => {
    console.log('fetch fetchLegalguardianData')
    return [{
        name: 'legalguardian'
    }]
}
