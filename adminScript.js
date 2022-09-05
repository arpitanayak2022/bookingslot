
var userData = JSON.parse(localStorage.getItem("userDtls"));
console.log("User Data", userData); 
if(userData && userData.length){
    console.log("Called"); 
}



var userDtls = [{ 'useName': 'name', 'email': 'email', 'phoneNum': 'phonenum' ,'age': 'age', 'adhaar': 'adhaar', 'address': 'address','date':'date' }];
    localStorage.setItem('userData', JSON.stringify(userDtls));
    
    var retrievedObject = JSON.parse(localStorage.getItem('userDtls'));
    
    var tbody = document.getElementById('tbody');
    
    
   