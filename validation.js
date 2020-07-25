
function checkUserId()
{	
   var useridexp = /^[a-zA-Z_.]{3,8}$/;
   var uid = document.getElementById("userid").value;
 
   var uidflag = false;
    
   if(useridexp.test(uid))
   {
       uidflag = true;
       document.getElementById("userid").style.borderColor = 'Green';
      document.getElementById("usedid").style.borderWidth = '2px'; 
   }
   else
   {
	   document.getElementById('uiderrormessage').style.visibility = 'visible';
       document.getElementById('uiderrormessage').innerText = "Enter Valid User ID";
       document.getElementById("userid").style.borderColor = 'Red';
       document.getElementById("password").style.borderWidth = '2px';
       document.getElementById("userid").value="";
   }
}

function clearuserid()
{
	document.getElementById("userid").style.background = 'White';
	document.getElementById('uiderrormessage').style.visibility = 'hidden';
	
}

function checkpassword()
{	
   var passwordexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{4,8}$/;
  
   var password = document.getElementById("password").value;
   
   var passwordflag = false;
    
   if(passwordexp.test(password))
   {
      passwordflag = true;
      document.getElementById("password").style.borderColor = 'Green';
      document.getElementById("password").style.borderWidth = '2px'; 
   }
   else
   {
	   document.getElementById('passerrormessage').style.visibility = 'visible';
       document.getElementById('passerrormessage').innerText = "Enter Valid Password";
       document.getElementById("password").style.borderColor = 'Red';
       document.getElementById("password").style.borderWidth = '2px';
       document.getElementById("password").value="";
   }
}

function clearpassword()
{
	document.getElementById("password").style.background = 'White';
	document.getElementById('passerrormessage').style.visibility = 'hidden';
	
}

function checkname()
{	
   var nameexp = /^[a-zA-Z ]{3,20}$/;
  
   var name = document.getElementById("name").value;
 
   var nameflag = false;
    
   if(nameexp.test(name))
   {
      nameflag = true;
      repasswordflag = true; 
      document.getElementById("name").style.borderColor = 'Green';
      document.getElementById("name").style.borderWidth = '2px'; 
   }
   else
   {
	   document.getElementById('nameerrormessage').style.visibility = 'visible';
       document.getElementById('nameerrormessage').innerText = "Enter Valid Name";
       document.getElementById("name").style.borderColor = 'Red';
       document.getElementById("name").style.borderWidth = '2px';
       document.getElementById("name").value="";
   }
}

function clearname()
{
	document.getElementById("name").style.background = 'White';
	document.getElementById('nameerrormessage').style.visibility = 'hidden';
	
}

function checkemail()
{		
   var emailexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  
   var email = document.getElementById("email").value;
 
   var emailflag = false;
    
   if(emailexp.test(email))
   {
       emailflag = true;
       document.getElementById("email").style.borderColor = 'Green';
       document.getElementById("email").style.borderWidth = '2px'; 
   }
   else
   {
	   document.getElementById('emailerrormessage').style.visibility = 'visible';
       document.getElementById('emailerrormessage').innerText = "Enter Valid E-mail ID";
       document.getElementById("email").style.borderColor = 'Red';
       document.getElementById("email").style.borderWidth = '2px';
       document.getElementById("email").value="";
   }
}

function repass()
            {
                s1 = document.getElementById("password").value
                s2 = document.getElementById("repassword").value
                fl=0 
                x = s1.length
                y = s2.length
                if(x==y)
                {
                    for(i=0; i<x; i++)
                    {
                        if(s1[i]!=s2[i])                           
                            {
                                fl=1
                            }
                        
                    } 
                    if(fl==0)
                    {
                        repasswordflag = true; 
                        document.getElementById("repassword").style.borderColor = 'Green';
                        document.getElementById("repassword").style.borderWidth = '2px'; 
                    }
                    else
                    {
                    document.getElementById('repasserrormessage').style.visibility = 'visible';
                    document.getElementById('repasserrormessage').innerText = "Passwords do not match";
                    document.getElementById("repassword").style.borderColor = 'Red';
                    document.getElementById("repassword").style.borderWidth = '2px';
                    document.getElementById("repassword").value="";
                    }
                    
                }
                else
                {
                  document.getElementById('repasserrormessage').style.visibility = 'visible';
                  document.getElementById('repasserrormessage').innerText = "Passwords do not match";
                  document.getElementById("repassword").style.borderColor = 'Red';
                  document.getElementById("repassword").style.borderWidth = '2px';
                  document.getElementById("repassword").value="";
                }
            }

function clearemail()
{
	document.getElementById("email").style.background = 'White';
	document.getElementById('emailerrormessage').style.visibility = 'hidden';
	
}

function checkmobno()
{	
   var mobnoexp = /^[6789]\d{9}$/;
  
   var mobno = document.getElementById("mobno").value;
 
   var mobnoflag = false;
    
   if(mobnoexp.test(mobno))
   {
       mobnoflag = true;
       document.getElementById("mobno").style.borderColor = 'Green';
       document.getElementById("mobno").style.borderWidth = '2px';
   }
   else
   {
	   document.getElementById('mobnoerrormessage').style.visibility = 'visible';
       document.getElementById('mobnoerrormessage').innerText = "Enter Valid Mobile Number";
       document.getElementById("mobno").style.borderColor = 'Red';
       document.getElementById("mobno").style.borderWidth = '2px';
       document.getElementById("mobno").value="";
   }
}

function clearmobno()
{
	document.getElementById("mobno").style.background = 'White';
	document.getElementById('mobnoerrormessage').style.visibility = 'hidden';
	
}

function checkcountry()
{
	var e = document.getElementById("country");
	
   var optionSelIndex = e.options[e.selectedIndex].value;
  
   var optionSelectedText = e.options[e.selectedIndex].text;
    
   if(optionSelIndex == "Default")
   {
        document.getElementById('countryerrormessage').style.visibility = 'visible';
        document.getElementById('countryerrormessage').innerText = "Enter Valid Country";
        document.getElementById("country").style.background = 'Red';
   }
   else
   {
    	document.getElementById("country").style.background = 'White';
    	document.getElementById('countryerrormessage').style.visibility = 'hidden';
   }
}

function checkgender()
{
    x=0;

    if(document.getElementById("male").checked)
    {
        x++;
    } 
    if(document.getElementById("female").checked)
    {
       x++;
    }
    if(x == 0)
    {
        document.getElementById('gendererrormessage').style.visibility = 'visible';
        document.getElementById('gendererrormessage').innerText = "Select Male/Female";
        document.getElementById("maledisp").style.color = 'Red';
        document.getElementById("femaledisp").style.color = 'Red';
        return false;
    }
    else
    {
        alert('Form Successfully Submitted');
        return true;}
}

function cleargender()
{
	 document.getElementById('gendererrormessage').style.visibility = 'hidden';
	 document.getElementById("maledisp").style.color = 'black';
     document.getElementById("femaledisp").style.color = 'black';
}

function f1()
{
    s1 = document.getElementById("home").value;
    document.getElementById("home").style.fontWeight = 'bold';
    document.getElementById("home").style.fontStretch = 'expanded';
}

function f2()
{
    s1 = document.getElementById("registration").value;
    document.getElementById("registration").style.fontWeight = 'bold';
    document.getElementById("registration").style.fontStretch = 'expanded';
}

function f3()
{
    s1 = document.getElementById("login").value;
    document.getElementById("login").style.fontWeight = 'bold';
    document.getElementById("login").style.fontStretch = 'expanded';
}

function f4()
{
    s1 = document.getElementById("aboutus").value;
    document.getElementById("aboutus").style.fontWeight = 'bold';
    document.getElementById("aboutus").style.fontStretch = 'expanded';
}