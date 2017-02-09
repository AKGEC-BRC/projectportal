pragma solidity ^0.4.2;

contract student{

 function student(){
}
struct details{

	bytes32 fname;
	bytes32 lname;
	uint age; 
	uint pnum;
	bytes32 email;
       

}
details [] public person;
function adddetail(bytes32 first,bytes32 last, uint agenum , uint phone,bytes32 mail)
{


details memory newstudent;
newstudent.fname=first;
newstudent.lname=last;
newstudent.age=agenum;
newstudent.pnum= phone;
newstudent.email=mail;
person.push(newstudent);

}
function indexValue() constant returns (bytes32[],bytes32[],bytes32[]){
uint len;
len=person.length;
uint i;

bytes32[] memory f_name=new bytes32[](len);
bytes32[] memory l_name=new bytes32[](len);
bytes32[] memory emai=new bytes32[](len);
for(i=0;i<len;i++)
{
details memory temp;
temp=person[i];
f_name[i]=temp.fname;
l_name[i]=temp.lname;
emai[i]=temp.email;

}
return (f_name,l_name,emai);}
function display(uint i) constant returns(bytes32 first,bytes32 last, uint agenum , uint phone,bytes32 mail){
details memory temp;
temp=person[i];
first=temp.fname;
last=temp.lname;
agenum =temp.age;
phone=temp.pnum;
mail=temp.email;
return (first,last,agenum,phone,mail);
}


}

