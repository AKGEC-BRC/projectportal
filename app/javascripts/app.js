var stud = student.deployed();
var msg;
var account;
var Web3 = require('web3');//including web3
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var ab=JSON.parse(JSON.stringify(stud.abi));//obtaning abi
var add=stud.address;//getting address
var fnction=web3.eth.contract(ab).at(add);
  function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
}

function ad() {
  var stud = student.deployed();
   alert("gg");
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var age = parseInt(document.getElementById("age").value);
  var pnum = parseInt(document.getElementById("number").value);
  var email = document.getElementById("email").value;

  stud.adddetail(fname,lname,age,pnum,email,{from:account}).then(function() {
  setStatus("added");}).catch(function(e) {
    console.log(e);
    setStatus("Error in adding Details ");
  });


}



function view(){


var a=fnction.indexValue({from:account});//Calling function of contract
console.log(a);
console.log(a[0].length);
    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";
 
    //Get the count of columns.
    var columnCount =4;
 
    var header=["First Name","Last Name","E-mail","Details"];
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = header[i];
        row.appendChild(headerCell);
    }
 
    //Add the data rows.
    for (var i = 0; i <(a[0].length); i++) {
        row = table.insertRow(-1);  
        for (var j = 0; j < 3; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = web3.toAscii(a[j][i]);
	if(j==2)
	{
		var cell = row.insertCell(-1);
		var b="";
		b="<button onclick=display("+i+")>Details</button>"
                cell.innerHTML = b;
        }
        }
    }
 
    var dvTable = document.getElementById("stat");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);



    }
function display(i){
var a=fnction.display(i);//Calling function of contract

var c=document.getElementById("stats");
d="Name: "+web3.toAscii(a[0])+web3.toAscii(a[1])+" <br> Age : "+a[2]+"<br> Phone :"+a[3]+"<br> Email:"+web3.toAscii(a[4])+".";
c.innerHTML=d;
}


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
  });
}

