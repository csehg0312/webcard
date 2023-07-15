var popupWindow;
function openPopup(link) {

  // Optional: Customize the popup window further
  // popupWindow.focus();
  // popupWindow.moveTo(100, 100);
  const qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${link}`;
  const qrImage = document.getElementById('qr-place');
  qrImage.src = String(qrCode);
 
}
alertPlaceholder = document.getElementById("AlertPlaceHolder");
function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

const Account = {
  balance: 0,
  // add: this.balance = (money) => this.balance + money,
  /**
   * @param {number} money
   */
  set add(money) {
    this.balance += money;
  }
  // reduce: this.balance = (money) => this.balance - money,

}

const MoneyHistory = {
  date: new Date(Date.now()),
  currbalance: 0,
  set current(money) {
    this.currbalance = money;
  },
  generatediv: function generate(id){
    rowDiv = document.createElement("div");
    colDiv = document.createElement("div");
    rowDiv.className = "row";
    colDiv.className = "col";
    rowDiv.appendChild(colDiv);
    colDiv.innerHTML = this.currbalance + "\nEUR \n" + this.date;
    document.getElementById(id).appendChild(rowDiv);
    this.currbalance = 0;
  },
}

const SavingAcc = {
  balance: 0,
  type: "",
  // add: this.balance = (money) => this.balance + money,
  set add(money) {
    this.balance += money;
  },
  // reduce: this.balance = (money) => this.balance - money,
}

document.getElementById("balanceAcc").innerHTML = Account.balance;
document.getElementById("balanceSavAcc").innerHTML = SavingAcc.balance;

function clearIt(){
  Account.clearAcc = 0;
  document.getElementById("balanceAcc").innerHTML = Account.balance;
}

function createDiv(typeofdiv){
  var newDiv = document.createElement("div");
  newDiv.className = typeofdiv;
  return newDiv;
}

function account_add(){
  let inputAccount = document.getElementById("inputAccount");

  const inputincome = parseInt(inputAccount.value);
  if (isNaN(inputincome)){
    alert('Just used bad type of data.\nRather use numbers.', 'info');
    inputAccount.value = "";
  }else{
    Account.add = inputincome;
    // console.log(Account.balance);
    if (document.getElementById("AccIsNull")){
      document.getElementById("AccIsNull").remove();
    }
    MoneyHistory.current = inputincome;
    MoneyHistory.generatediv("accountContainer");
    // console.log(newDiv);
    // accContains = document.getElementById("accountContainer").appendChild(newDiv);
    
  }
  document.getElementById("balanceAcc").innerHTML = Account.balance;
}

function to_saving(){
  let inputsaving = document.getElementById("inputSaving");
  const inputmovetosave = parseInt(inputsaving.value);
  if(isNaN(inputmovetosave)) {
    alert('Just used bad type of data.\nRather use numbers.', 'info');
    inputsaving.value = "";
  }else{
    if (Account.balance < inputmovetosave){
      alert('Not enough money to transfer to savings. \n Rather move less to savings.', 'info');
    }else{
      Account.add = -Math.abs(inputmovetosave);
      // console.log(inputmovetosave);
      SavingAcc.add = inputmovetosave;
      if (document.getElementById("SavIsNull")){
        document.getElementById("SavIsNull").remove();
      }
      MoneyHistory.current = inputmovetosave;
      MoneyHistory.generatediv("savingContainer");
    }
    document.getElementById("balanceAcc").innerHTML = Account.balance;
    document.getElementById("balanceSavAcc").innerHTML = SavingAcc.balance;
  }

}
