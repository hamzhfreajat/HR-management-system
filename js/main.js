function randomSalary(level){
    let max ;
    let min ;
    if (level == "Senior"){
        max = 2000
        min = 1500
    }else if (level == "Mid-Senior"){
        max = 1500
        min = 1000
    }else if (level == "Junior"){
        max = 1000
        min = 500
    }
    return Math.floor(Math.random() * (max - min)) + min +100;
}
function netSalary(tax , level){
    salary = randomSalary(level)
    salary = Math.floor(salary - salary * tax);
    return salary;
}
function Employee(id ,fullName,dapartment,level,imageUrl,salary){
    this.id  = id;
    this.fullName= fullName;
    this.dapartment= dapartment;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = salary;
}

const ghazi = new Employee(1000 , "Ghazi Samer" , "Administration" , "Senior");
const lana = new Employee(1001 , "Lana Ali" , "Finance" , "Senior");
const tamara = new Employee(1002 , "Tamara Ayoub" , "Marketing" , "Senior");
const safi = new Employee(1003 , "Safi Walid" , "Administration" , "Mid-Senior");
const omar = new Employee(1004 , "Omar Zaid" , "Development" , "Senior");
const rana = new Employee(1005 , "Rana Saleh" , "Development" , "Junior");
const hadi = new Employee(1006 , "Hadi Ahmad" , "Finance" , "Mid-Senior");

const employeearry = [ghazi , lana , tamara  , safi , omar , rana , hadi];

Employee.render = function (){
    const tableBody =  document.getElementById('user-table-body');
    let counter = 0 ;

    employeearry.forEach(item => {
        counter++;
        tableBody.innerHTML +=
            `<tr><th>${counter}</th>
             <td>${item.fullName}</td>
              <td>${netSalary(0.075 , item.level)}</td>
             </tr>
            `
    });
};
const hamzh = Employee.render();