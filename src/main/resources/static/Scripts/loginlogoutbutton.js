window.onload=buttonRender();
function buttonRender(){
var userId=localStorage.getItem("userEmail");
    var loginbtn=document.getElementById("loginbtn");
    var logoutbtn=document.getElementById("logoutbtn");
    console.log("user"+JSON.stringify(userId));
    if(userId === null){
        console.log("in if")
    	logoutbtn.style.display="none"
    		
        }
    else{
        console.log("in else")
        loginbtn.style.display="none"   
                
    
        }
}
     function logout(){
    	localStorage.setItem("userEmail","");
    	console.log("user"+JSON.stringify(localStorage.getItem("userEmail")))
    	logoutbtn.style.display="none"
    		  loginbtn.style.display="block" 
        }