// // // Write your solution in this file!


// updateEmployeeWithKeyAndValue()
// {
//     const updatedEmployee={...employee,
//         name: "John",
//         streetAddress:"11th street"   
//     }

//     return updatedEmployee;
// }
//     const updatedObject = updateEmployeeWithKeyAndValue ();
//     console.log(updatedObject);

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//       employee["name"] = "Manasses";
//       employee["streetAddress"] = "5th NgongAvenue";
//       return employee;
// }
    

// function deleteFromEmployeeByKey(employee, key) {
//     let newEmployee = {...employee};
//     delete newEmployee[key];
//     return newEmployee;
// }
  
// function destructivelyDeleteFromEmployeeByKey(employee, key) {
//    delete employee[key];
//   return employee;
// }

let employee = {
    name: "Manasses",
    streetAddress: "5th NgongAvenue"
  } 
function updateEmployeeWithKeyAndValue () {
   const updateEmployee = {...employee,
    name:"Sam",
    streetAddress:"11 Broadway"
   }

   return updateEmployee;
}

const updatedObject = updateEmployeeWithKeyAndValue ();

console.log(updatedObject);


  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee["name"] = "Sam";
    employee["streetAddress"] = "12 Broadway"
    return employee;
  }
  

function deleteFromEmployeeByKey(employee, key) {
  let newEmployee = {...employee};
  delete newEmployee[key];
  return newEmployee;
}

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }

