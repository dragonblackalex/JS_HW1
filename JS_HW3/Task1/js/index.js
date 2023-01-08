function Employee(employee) {
    this.id = employee.id;
    this.name = employee.name;
    this.surname = employee.surname;
    this.salary = employee.salary;
    this.workExperience = employee.workExperience;
    this.isPrivileges = employee.isPrivileges;
    this.gender = employee.gender;
}

const employeeObject = new Employee(emplyeeArr[0]);
console.log(employeeObject);

// Task2

Employee.prototype.getFullName = function() {
    return `${this.surname} ${this.name}`
}

console.log(employeeObject.getFullName());

// Task3

let createEmployesFromArr = (arr) => {
    newEmployeeArr = [];

    for (let employee of arr) {        
        newEmployeeArr.push(new Employee(employee)); 
    }

    return newEmployeeArr;
}

const emplyeeConstructArr = createEmployesFromArr(emplyeeArr);
console.table(emplyeeConstructArr);

// Task4

const getFullNamesFromArr = (arr) => {
   const fullNames = [];
   
   for (let employee of emplyeeConstructArr) {
    fullNames.push(employee.getFullName());
   }

   return fullNames;
}
    
console.log(getFullNamesFromArr(emplyeeConstructArr));

// Task5

const getMiddleSalary = (arr) => {
    let totalSalary = 0;

    for (let employee of emplyeeConstructArr) {
        totalSalary += employee.salary;
    }

    const middleSalary = Math.round(totalSalary / arr.length);

    return middleSalary; 
}

console.log(getMiddleSalary(emplyeeConstructArr)); 

// Task6

const getRandomEmployee = (arr) => {
    return emplyeeConstructArr[Math.floor(Math.random() * arr.length)];
}
    
console.log(getRandomEmployee(emplyeeConstructArr));

// Task7

const employeeObj = new Employee(emplyeeArr[0]);

Object.defineProperties(Employee.prototype, {
    fullInfo: {
      get: function () {
        let fullInfo = "";
  
        for (const key in this) {
          fullInfo += `${key} - ${this[key]}, `;
        }
        return fullInfo;
      },
  
      set: function (value) {
        for (const key in value) {
          if (this.hasOwnProperty(key)) {
            this[key] = value[key];
          }
        }
      },
    },
    getFullName: {
      enumerable: false,
    },
  });
  
  
  employeeObj.fullInfo = { name: "Віталій", salary: 15000, email: "vitaliy@gmail.com" };
  
  console.log(employeeObj.fullInfo);
  console.log(employeeObj);
