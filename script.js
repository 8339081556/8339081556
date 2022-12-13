function validate(){
    var Name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mob = document.getElementById("mob").value;
    
    if(Name=="" || email=="" || mob==""  || feedback=="")
    {
        alert("No field should be blank");
        return false;
    }

    if(isNaN(mob) || mob.length!=10)
    {
        alert("Invalid mobile number");
        return false;
    }
}