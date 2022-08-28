function loginCheck(){
    let pw = document.getElementById('pw')
    let mid = document.getElementById('mid');
    let emsg = document.getElementById('emsg');
    let pmsg = document.getElementById('pmsg');
    let flag1=false;
    let flag2=false;
    if(mid.value == "John.snow@gmail.com"){
        flag1=true;
        emsg.style.display="none";
    }
    else{
        flag1=false;
        emsg.style.display="block";
    }
    
    if(pw.value == "Pass@1234"){
        flag2=true;
        pmsg.style.display="none";
    }
    else{
        flag2=false;
        pmsg.style.display="block";
    }

    if(flag1==true && flag2==true){
        window.open("Success.html","_blank");
    }
    
}