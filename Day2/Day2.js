const btnCalculate = document.getElementById("btn");
const inputBirthday = document.getElementById("birthday");
const result = document.getElementById("result")

function calculatefn() {
  const birthdayValue = inputBirthday.value;

  if (birthdayValue === "") {
    console.log("Not value detecdet");
  } else {
    const age = getAge(birthdayValue);
    console.log(age);
    result.innerText = `Your Age is 
    ${age} 
    ${age > 1 
        ?"Years" 
        :"Year"} 
    Old`
  }
}

function getAge(bv) {
  const currentDate = new Date();
  const birthDay = new Date(bv);
  let age = currentDate.getFullYear() - birthDay.getFullYear();

  const month = currentDate.getMonth() - birthDay.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthDay.getDate())
  ) {
    age--;
  }

  return age;
}

btnCalculate.addEventListener("click", calculatefn);
