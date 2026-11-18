class EEEDept{

    student1_rollno: number = 26;
    student2_rollno: number = 29;
    student3_rollno: number = 28;
    student4_rollno: number = 27;

    studentsData(): void{
        console.log("Uday rollno is: "+ this.student1_rollno);
        console.log("Venu rollno is: "+ this.student2_rollno);
        console.log("Madhur rollno is: "+ this.student3_rollno);
        console.log("Vamsi rollno is: "+ this.student4_rollno);
    }
}

class EEEDeptTeacher extends EEEDept{

    studentsRollno():void{
        console.log("Uday rollno is: "+ this.student1_rollno);
        console.log("Venu rollno is: "+ this.student2_rollno);
        console.log("Madhur rollno is: "+ this.student3_rollno);
        console.log("Vamsi rollno is: "+ this.student4_rollno);
    }
}

class MechDeptTeacher{

    deptEEEStudents = new EEEDept();
    studentsInfo():void{
        console.log("Uday rollno is: "+ this.deptEEEStudents.student1_rollno);
        console.log("Venu rollno is: "+ this.deptEEEStudents.student2_rollno);
        console.log("Madhur rollno is: "+ this.deptEEEStudents.student3_rollno);
        console.log("Vamsi rollno is: "+ this.deptEEEStudents.student4_rollno);
    }
}

console.log("----------CHILD CLASS-----------")
console.log("")
let deptEEE = new EEEDeptTeacher();
deptEEE.studentsRollno();
console.log("")
console.log("----------OUTSIDE CLASS-----------")
console.log("")
let deptMech = new MechDeptTeacher();
deptMech.studentsInfo();