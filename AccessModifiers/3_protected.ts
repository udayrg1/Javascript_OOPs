class EEEDept{

    protected student1_rollno: number = 26;
    protected student2_rollno: number = 29;
    protected student3_rollno: number = 28;
    protected student4_rollno: number = 27;

    studentsData(): void{
        console.log("Uday rollno is: "+this.student1_rollno)
        console.log("Venu rollno is: "+this.student2_rollno)
        console.log("Madhur rollno is: "+this.student3_rollno)
        console.log("Vamsi rollno is: "+this.student4_rollno)
    }
}

class EEEDeptTeacher extends EEEDept{

    studentsRollno():void{
        console.log("Uday rollno is: "+this.student1_rollno)
        console.log("Venu rollno is: "+this.student2_rollno)
        console.log("Madhur rollno is: "+this.student3_rollno)
        console.log("Vamsi rollno is: "+this.student4_rollno)       
    }

}

let students = new EEEDeptTeacher();
students.studentsRollno();