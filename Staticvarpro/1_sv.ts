/* 

static variable: A variable which is declared INSIDE of a class and outside of methods with "static" keyword.
To access static variables OUTSIDE of a class, we should need "class name"

*/

//ex:

class StudentsInfo{
    static stdCourse:string = "Java Full Stack"
}

console.log("The student Uday opted course is: " + StudentsInfo.stdCourse)
console.log("The student Venu opted course is: " + StudentsInfo.stdCourse)
console.log("The student Madhur opted course is: " + StudentsInfo.stdCourse)
console.log("The student Vamsi opted course is: " + StudentsInfo.stdCourse)