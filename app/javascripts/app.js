var accounts;
var account;

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};

function setNumMembers(message) {
  console.log("message: "+message)
  var numMembers = document.getElementById("numMembers");
  numMembers.innerHTML = message;
};



function register(){
  console.log('register called')
  var c_Register = Register.deployed()

  var memberAddress = document.getElementById("memberAddress").value;
  var memberName = document.getElementById("memberName").value;
  var memberID = document.getElementById("memberID").value;

  c_Register.addMember(memberAddress,memberName,memberID,{from:memberAddress})
    .then(function(){
            return getNumMembers()
          })

    .catch(function(e){
      setStatus('unable to register '+e)
  })

};

function getNumMembers(){
  var c_Register = Register.deployed()

  c_Register.getNumMembers.call()
    .then(function(res){
            return setNumMembers(res.valueOf())
          })

    .catch(function(e){
    console.log(e)
  })
  return null
};


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
