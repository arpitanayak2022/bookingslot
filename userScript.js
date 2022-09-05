
var selectedRow=null;
//retrieving data
var userDtls = [];
function addData(){
    var userName=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var phoneNum =document.getElementById("phonenumber").value;
    var age=document.getElementById("age").value;
    var adhaar=document.getElementById("adhaarno").value;
    var address=document.getElementById("address").value;
    var date=document.getElementById("date").value;
    console.log(userName+email+phoneNum+age+adhaar+address+date);
    
    
            
            
        
        
    var savedData =[ {"name":userName,
                    "email":email,
                    "phoneNumber":phoneNum,
                    "age":age,
                    "adhaar":adhaar,
                    "address": address,
                    "date":date
                }]
                userDtls.push(savedData);

    //storing data local storage
    localStorage.setItem("userDtls",JSON.stringify(userDtls));
    var old_data=localStorage.getItem("userDtls");
    location.href = "admin.html"
       
            }