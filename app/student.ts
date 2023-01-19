export interface Student {
    id: number,
    firstName: string,
    lastName: string,
    nationality: string,
    age: number,
    degree?: string,
    gender: "Male"|"Female",
    status: "Single"|"Widowed"|"Married",
    homeAddress: string,
    elementarySchool: string,
    highSchool: string,
    college: string
}
