contract Register
{
	struct member{
		address addr;
		string name;
		string memberID;
	}

	mapping(address => member) public members;
	uint numMembers;

	function Register(){
		numMembers = 0;
	}

	function addMember(address addr,string memberID,string name){
		members[addr] = member(addr,name,memberID);
		numMembers++;
		return;
	}

	function isMember(address addr)returns(bool){
		if(members[addr].addr != 0x0){
			return true;
		}else{
			return false;
			}
	}

	function getMemberID(address addr)returns(string){
		return members[addr].memberID;
	}

	function getNumMembers()returns(uint){
		return numMembers;
	}

}
