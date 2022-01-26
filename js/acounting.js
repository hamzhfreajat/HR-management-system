var emploeies = localStorage.getItem('emploeies');
const administrationNumberEmplo = document.getElementById('adminsitration-number-of-employee');
const administrationTotalSalary = document.getElementById('adminsitration-total-salar');
const administrationAvg = document.getElementById('adminsitration-avarge');
const marketingNumberEmplo = document.getElementById('marketing-number-of-employee');
const marketingTotalSalary = document.getElementById('marketing-total-salar');
const marketingAvg = document.getElementById('marketing-avarge');
const developmentNumberEmplo = document.getElementById('development-number-of-employee');
const developmentAvg = document.getElementById('development-avarge');
const developmentTotalSalary = document.getElementById('development-total-salar');
const financeNumberEmplo = document.getElementById('finance-number-of-employee');
const financeAvg = document.getElementById('finance-avarge');
const financeTotalSalary = document.getElementById('finance-total-salar');
const totalNumberEmplo = document.getElementById('total-number-of-employee');
const totalAvg = document.getElementById('total-avarge');
const totalTotalSalary = document.getElementById('total-total-salar');
let totalNumberOfEmployee = 0;
let totalSalaryOfEmployee = 0;

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

readFromLocalStorage();
const emploeyeeNumber= (element) => {
    let counter = Number(element.innerHTML);
    element.innerHTML = counter + 1;
    totalNumberOfEmployee++;
    return element.innerHTML;
}
const calculateSalary = (element, newSalary) => {
    let oldSalary = Number(element.innerHTML);
    element.innerHTML = oldSalary + newSalary;
    totalSalaryOfEmployee += newSalary;
    return element.innerHTML;
}
const calculateAvg = (element ,employeeNumber,salary)=> {
    element.innerHTML = salary / employeeNumber;
    let avarage = Number(element.innerHTML);
};
emploeies.forEach(employee => {
    if(employee.dapartment === "Administration") {
        calculateAvg(administrationAvg ,emploeyeeNumber(administrationNumberEmplo) ,  calculateSalary(administrationTotalSalary , employee.salary));
    }else if(employee.dapartment === "Marketing") {
        calculateAvg(marketingAvg ,emploeyeeNumber(marketingNumberEmplo) ,  calculateSalary(marketingTotalSalary , employee.salary));
    }else if(employee.dapartment === "Development") {
        calculateAvg(developmentAvg ,emploeyeeNumber(developmentNumberEmplo) ,  calculateSalary(developmentTotalSalary , employee.salary));
    }else if(employee.dapartment === "Finance") {
        calculateAvg(financeAvg ,emploeyeeNumber(financeNumberEmplo) ,  calculateSalary(financeTotalSalary , employee.salary));
    }
});


totalNumberEmplo.innerHTML = totalNumberOfEmployee;
totalTotalSalary.innerHTML = totalSalaryOfEmployee;
totalAvg.innerHTML = totalSalaryOfEmployee/totalNumberOfEmployee;



