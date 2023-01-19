import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Specialization Activities';
  isAddStudent = false;
  studentsList: Student[]= [
    {
      id:1,
      lastName: "Penduko",
      firstName: "Pedro",
      age: 20,
      nationality: "Filipino",
      gender: "Female",
      status: "Single",
      homeAddress: "Nasipit Road, Talamban, CC",
      elementarySchool: "Talamban Elementary School",
      highSchool: "Talamban National High School",
      college: "University of Cebu"


    },
    {
      id:2,
      lastName: "Felipe",
      firstName: "Hapona",
      age: 24,
      nationality: "British",
      degree: "Programmer",
      gender: "Male",
      status: "Married",
      homeAddress: "Colatog St., Poblacion, Sta. Catalina",
      elementarySchool: "Sta. Catalina Central Elementary Schoool",
      highSchool: "Sta. Catalina National High School",
      college: "University of Visayas"
    },
    {
      id:3,
      lastName: "Estorco",
      firstName: "John Mark",
      age: 21,
      nationality: "Filpino",
      degree: "PNP",
      gender:"Male",
      status: "Single",
      homeAddress: "San Isidro, Pamplona, Negros Oriental",
      elementarySchool: "Casa Marie, Tanjay City",
      highSchool: "Casa Marie, Tanjay City",
      college: "Negros Oriental State University- Bais Campus"
    }
  ]

  addStudent(student: Student){
    // console.log(student)
    this.studentsList.push(student);
    this.isAddStudent = false;
  }

  addNewStudent(){
    this.isAddStudent = true;
  }
}
