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

function account_add(){
  let inputAccount = document.getElementById("inputAccount");

  const inputincome = parseInt(inputAccount.value);
  if (isNaN(inputincome)){
    alert('Just used bad type of data.\nRather use numbers.', 'info');
    inputAccount.value = "";
  }else{
    Account.add = inputincome;
    // console.log(Account.balance);
    
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
    }
    document.getElementById("balanceAcc").innerHTML = Account.balance;
    document.getElementById("balanceSavAcc").innerHTML = SavingAcc.balance;
  }

}
