
const login = document.getElementById('login')

function passvalues (){
  let uname = document.getElementById('username').value;
  localStorage.setItem('inputvalue',uname)
  return false;
}

function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

login.addEventListener('click',(e)=>{
  e.preventDefault();
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  if(username == "" || username == null) {
    printError("error_message", "Please enter your name");
} 
else {
  printError("error_message", "");
  error_password = false;
} if(password == "" || password == null) {
  printError("error_password", "Please enter your password");
}else if(password.length <6){
 printError("error_password",' password must be more than 6 characters')

} else {
  login.onclick(window.location.href = "main/logged.html",'passvalues()');
}
})