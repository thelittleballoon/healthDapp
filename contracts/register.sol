contract register
{
	mapping(address => string) members;
	// mapping(address => string) registered;
	uint numMembers;

	function register(){
		numMembers = 0;
	}

	function addMember(address addr,string memberID){
		members[addr] = memberID;
		numMembers++;
		return;
	}

	function isMember(address addr)returns(bool){
		if(bytes(members[addr]).length != 0){
			return true;
		}else{
			return false;
			}
	}

	function getMemberID(address addr)returns(string){
		return members[addr];
	}

	function getNumMembers()returns(uint){
		return numMembers;
	}

}


// import "ConvertLib.sol";

// // This is just a simple example of a coin-like contract.
// // It is not standards compatible and cannot be expected to talk to other
// // coin/token contracts. If you want to create a standards-compliant
// // token, see: https://github.com/ConsenSys/Tokens. Cheers!

// contract MetaCoin {
// 	mapping (address => uint) balances;

// 	function MetaCoin() {
// 		balances[tx.origin] = 10000;
// 	}

// 	function sendCoin(address receiver, uint amount) returns(bool sufficient) {
// 		if (balances[msg.sender] < amount) return false;
// 		balances[msg.sender] -= amount;
// 		balances[receiver] += amount;
// 		return true;
// 	}

// 	function getBalanceInEth(address addr) returns(uint){
// 		return ConvertLib.convert(getBalance(addr),2);
// 	}

// 	function getBalance(address addr) returns(uint) {
//   	return balances[addr];
// 	}
// }
