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
  set add(money) {
    this.balance = this.balance + money;
  }
  // reduce: this.balance = (money) => this.balance - money,

}

const SavingAcc = {
  balance: 0,
  type: "",
  // add: this.balance = (money) => this.balance + money,
  set add(money) {
    this.balance = this.balance + money;
  },
  
  set clearAcc(att) {
    this.balance = att;
  }
  // reduce: this.balance = (money) => this.balance - money,
}

document.getElementById("balanceAcc").innerHTML = Account.balance;
document.getElementById("balanceSavAcc").innerHTML = SavingAcc.balance;

// AccButton = document.getElementById("Acc");
// SavAccbButton = document.getElementById("savAcc");

// AccButton.addEventListener('click', hello);
// SavAccbButton.addEventListener('click', hello);

function clearIt(){
  Account.clearAcc = 0;
  document.getElementById("balanceAcc").innerHTML = Account.balance;
}

function account_add(){
  // let outputText = document.getElementById("balanceAcc");
  let inputAccount = document.getElementById("inputAccount");

  let input = parseInt(inputAccount.value);
  if (isNaN(input)){
    alert('Just used bad type of data.\nRather use numbers.', 'danger');
  }else{
    Account.add = input;
    // console.log(Account.balance);
    document.getElementById("balanceAcc").innerHTML = Account.balance;
  }
}
