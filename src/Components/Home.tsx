// import { Student } from "./Student";

export function Home() {
  let age: number;
  let fName: string;
  let inClass: boolean;
  let grades: any[];
  function welcomAlert(msg: string): void {
    alert(msg);
  }
  // welcomAlert( "welcom nigga")
  function alertAll(
    age: number,
    fName: string,
    inClass: boolean,
    grades: any[]
  ): void {
    // alert(age + fName + inClass + grades);
  }
  function nameLength(fName: string): any {
    if (fName.length > 4) {
      return "the name is longer than 4?" + true;
    } else return "the name is longer than 4?" + false;
  }
  //   console.log(nameLength("adsss"));
  function nameAndAge(fName: string, age: number): any {
    if (age > 15) {
      return fName;
    } else {
      return "wrong class";
    }
  }
  //   console.log(nameAndAge("avi", 26));
  function returnTxt(fName: string, lName: string, age: number = 0): string {
    return fName + lName + age;
  }
  //   console.log(returnTxt("avi","admaso",26));
  function namesOnRest(teacher: string, ...students: string[]): any {
    console.log(teacher, students);
  }
  // namesOnRest("jacob","avi","ascha","amir","shay")
  function fullName(
    fName: string,
    lName?: string,
    age: number = 60,
    ...friends: string[]
  ) {
    if (lName != undefined) {
      console.log(fName + lName + age + friends);
    } else alert(fName + lName + age + friends);
  }
  //  console.log(fullName("avi",undefined,23,"Shay","eliyahu","oshri"));

  function maxNumber(...theNum: number[]) {
    theNum.sort((a, b) => b - a);
    return theNum[0];
  }
  // console.log(maxNumber(123,435,675,23,235,54,65,65767,4342,32,32,4,65,65))

  function nameAndNums(name: string, ...nums: number[]) {
    nums.sort((a, b) => a - b);
    return name + " " + nums[0];
  }
  // console.log(nameAndNums("avi",123,213,234,45,6,779,22))
  function namesGrades(grade?: string, ...names: string[]): any {
    if (grade !== undefined) {
      return names.sort();
    }
    return names.reverse();
  }
  // console.log(namesGrades(undefined,"zsads","asdsa","asda","dasd","fdsf"))
  function numsArray(nums: number = 1): any {
    let theArray: number[] = [];
    for (var i = 0; i < 5; i++) {
      let TheNum: number = Math.floor(Math.random() * 10);
      theArray.push(TheNum);
    }
    for (var i = 0; i < 5; i++) {
      if (theArray[i] == nums) {
        return "the num is exsist in array";
      }
    }
    return numsArray();
  }
  // console.log(numsArray());

  function objArray(...objs: any[]): void {
    for (let i = 0; i < objs.length; i++) {
      console.log(objs[i].fName, objs[i].age);
    }
  }
  // objArray({ fName: "avi", age: 27 });

  function objsNames(objName: string, ...objs: any[]): void {
    for (let i = 0; i < objs.length; i++) {
      if (objs[i].fName == objName) {
        console.log("the name is here");
      } else console.log("the nane is not there");
    }
  }
  // objsNames("avi",{fName:"avi",age:27,class:14});
  return (
    <div>
      <button
        onClick={() => {
          alertAll(24, "avi", false, [100, 98, 100]);
        }}
      >
        click
      </button>
      {/* <Student/> */}
    </div>
  );
}
