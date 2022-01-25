let refId = 10000;
const uniqueid = function(){
    refId++;
    return refId;
}
//
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
    return Math.floor(Math.random() * (max - min)) + min;
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
//
// const ghazi = new Employee(1000 , "Ghazi Samer" , "Administration" , "Senior");
// const lana = new Employee(1001 , "Lana Ali" , "Finance" , "Senior");
// const tamara = new Employee(1002 , "Tamara Ayoub" , "Marketing" , "Senior");
// const safi = new Employee(1003 , "Safi Walid" , "Administration" , "Mid-Senior");
// const omar = new Employee(1004 , "Omar Zaid" , "Development" , "Senior");
// const rana = new Employee(1005 , "Rana Saleh" , "Development" , "Junior");
// const hadi = new Employee(1006 , "Hadi Ahmad" , "Finance" , "Mid-Senior");
//
// const employeeArray = [ghazi , lana , tamara  , safi , omar , rana , hadi];
//
// Employee.prototype.render = function (){
//     const tableBody =  document.getElementById('user-table-body');
//     let counter = 0 ;
//     employeeArray.forEach(item => {
//         counter++;
//         tableBody.innerHTML +=
//             `<tr><th>${counter}</th>
//              <td>${item.fullName}</td>
//               <td>${netSalary(0.075 , item.level)}</td>
//              </tr>
//             `
//     });
// };
//
// ghazi.render();

const employeeForm = document.getElementById('create-employee-form');
employeeForm.addEventListener('submit' ,(e) => {
    e.preventDefault();
    const userId = uniqueid();
    const userFullName = e.target.name.value;
    const userDapartment = e.target.department.value;
    const userLevel = e.target.level.value;
    const userImageUrl = e.target.imageUrl.value;
    const userSalary = netSalary(0.075 , userLevel)
    let newEmployee = new Employee(userId, userFullName ,userDapartment, userLevel,userImageUrl,userSalary);
    Employee.prototype.render = function (){
        const cardSection = document.getElementById("emploee-card");
        const div = document.createElement('div');
        const img = document.createElement('img');
        const h5 = document.createElement('h5');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        div.setAttribute('class' , 'card')
        img.setAttribute('src' , userImageUrl);
        img.setAttribute('alt' , 'card-image');
        h5.textContent = `Dapartment: ${userDapartment} - level :${userLevel}`;
        p1.textContent = `Name: ${userFullName} -ID: ${userId}`;
        p1.setAttribute('class' , 'card-text');
        p2.textContent = `${userSalary}`;
        p2.setAttribute('class' , 'card-salary');
        cardSection.appendChild(div);
        div.appendChild(img);
        div.appendChild(h5);
        div.appendChild(p1);
        div.appendChild(p2);
    }
    newEmployee.render();
})
