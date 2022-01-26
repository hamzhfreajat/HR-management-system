let refId = 10000;
var emploeies = [];
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
const readFromLocalStorage = () =>  {
    let jsonArr = localStorage.getItem('emploeies');
    emploeies = JSON.parse(jsonArr);
    if (emploeies !== null) {
        console.log("not null")
        return emploeies;
    } else {
        emploeies = [];
        return emploeies;
    }
}

function Employee(id ,fullName,dapartment,level,imageUrl,salary){
    this.id  = id;
    this.fullName= fullName;
    this.dapartment= dapartment;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = salary;
}
const render = (emploeiesHtml) => {

    const cardSection = document.getElementById("emploee-card");
    cardSection.innerHTML = "";
    emploeiesHtml.forEach((employee) => {
        if (employee.imageUrl === undefined){
            employee.imageUrl = '#'
        }
        cardSection.innerHTML += `<div class="card"><img src="${employee.imageUrl}" alt="card-image"><h5>Dapartment: ${employee.dapartment} - level :${employee.level}</h5><p
        class="card-text">Name: ${employee.fullName} -ID: ${employee.id}</p><p class="card-salary">${employee.salary}</p></div>`
    })

}


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
    emploeies.push(newEmployee);
    emploeies = JSON.stringify(emploeies);
    localStorage.setItem('emploeies',emploeies);
    render(readFromLocalStorage());
});

const employArrNotEmpty= () =>{
    if (emploeies.length < 1  && readFromLocalStorage.length < 1){
       render(readFromLocalStorage());
    }
}
employArrNotEmpty();
