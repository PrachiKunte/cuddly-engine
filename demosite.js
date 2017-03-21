// Get the Registration modal
var modal = document.getElementById("id02");
var ref = document.getElementById("regref");
ref.onclick = function()
{	
  modal.style.display="block";
}
window.onclick = function(event)//When the user clicks nywhere outside of the modal,close it
{
    if (event.target == modal) 
    {
        modal.style.display = "none";
    }
}

//Login validation
function validateForm() 
{
  var un = document.loginform.uname.value;
  var pw = document.loginform.psw.value;
  var username = "Bharati"; 
  var password = "1234";
  if ((un == username) && (pw == password)) 
  {
    return true;
  }
  else 
  {
    alert ("Login was unsuccessful, please check your username and password");
    return false;
  }
}

//get login name
function getParams()
{
  var idx = document.URL.indexOf('?');
  var params = new Array();
  if (idx != -1) 
  {
    var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
    for (var i=0; i<pairs.length; i++)
    {
      nameVal = pairs[i].split('=');
      params[nameVal[0]] = nameVal[1];
    }
  }
  return params;
}
params = getParams();
firstname = unescape(params["uname"]);
document.getElementById("demo").innerHTML =  firstname;

//Register validation
function validateFormReg() 
{
  var un = document.regiform.uname.value;
  var pw = document.regiform.psw.value;
  var cpw = document.regiform.psw.value;
  var username = "Bharati"; 
  var password = "1234";
  var cpassword = "1234";
  if ((un == username) && (password  == cpw)) 
  {
    return true;
  }
  else 
  {
    alert ("Registration unsuccessful, please check your username and password");
    return false;
  }
}