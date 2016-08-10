var accounts;
var account;
var balance;

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};

// function refreshBalance() {
//   var meta = MetaCoin.deployed();

//   meta.getBalance.call(account, {from: account}).then(function(value) {
//     var balance_element = document.getElementById("balance");
//     balance_element.innerHTML = value.valueOf();
//   }).catch(function(e) {
//     console.log(e);
//     setStatus("Error getting balance; see log.");
//   });
// };


function register(){
  console.log('register called')
  var c_register = register.deployed()

  var memberAddress = document.getElementById("memberAddress").value;
  var memberName = document.getElementById("memberName").value;
  console.log('registering',memberAddress,memberName)
  c_register.addMember(memberAddress,memberName,{from:memberAddress}).then(function(){
    console.log('retured from addMember')
    getNumMembers()

  }).catch(function(e){
    setStatus('unable to register '+e)
  })

};

function getNumMembers(){
  var c_register = register.deployed()

  c_register.getNumMembers.call().then(function(res){
    console.log(res)
    var numMembers = document.getElementById("numMembers")
    numMembers.innerHTML = res.valueOf();

  }).catch(function(e){
    console.log(e)
    // setStatus("Error getting balance; see log.");
  })
};


// function sendCoin() {
//   var meta = MetaCoin.deployed();

//   var amount = parseInt(document.getElementById("amount").value);
//   var receiver = document.getElementById("receiver").value;

//   setStatus("Initiating transaction... (please wait)");

//   meta.sendCoin(receiver, amount, {from: account}).then(function() {
//     setStatus("Transaction complete!");
//     refreshBalance();
//   }).catch(function(e) {
//     console.log(e);
//     setStatus("Error sending coin; see log.");
//   });
// };

window.onload = function() {
  web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    accounts = accs;
    account = accounts[0];
    console.log(accounts)
    getNumMembers();
  });
}
