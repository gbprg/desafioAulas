// card inputs 
const inputCardName = document.getElementById("form-name");
const inputCardNumber = document.getElementById("card-number");
const inputCardMonth = document.getElementById("month");
const inputCardYear = document.getElementById("year");
const inputCardBack = document.getElementById("back");
// card info 
const frontCardNumber = document.querySelector(".frontcard-number");
const frontCardName = document.querySelector(".frontcard-name");
const frontCardDate = document.querySelector(".frontcard-date");
const backCardSide = document.querySelector(".backcard-side");
const button = document.getElementById("button");

const showInfo = (e) => {
  e.preventDefault();
  const name = inputCardName.value;
  const cardNumber = inputCardNumber.value;
  const cardMonth = inputCardMonth.value;
  const cardYear = inputCardYear.value;
  const cardSide = inputCardBack.value;

  // name, cardnumber, cardmonth, cardyear se for diferente de vazio
  if (name && cardNumber && cardMonth && cardYear && cardSide != "") {
    frontCardName.innerHTML = name;
    frontCardNumber.innerHTML = cardNumber;
    frontCardDate.innerHTML = cardMonth + "/" + cardYear;
    backCardSide.innerHTML = cardSide;
  } else {
    alert("Preencha os Campos")
  }

}
button.addEventListener("click", showInfo);





















