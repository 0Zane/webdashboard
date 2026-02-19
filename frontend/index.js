


let username;

let discord_token1;

const page = document.body.getAttribute("data-page");

//INDEX PAGE
if (document.getElementById("submit_username")){

document.getElementById("submit_username").onclick = function(){
    
    

    username = document.getElementById("username").value;
    localStorage.setItem("username",username );
    document.location.href="custom.html"; 
}
}

//CONFIG PAGE

else if (document.getElementById("save_config")){

document.getElementById("save_config").onclick = function() {




    
    discord_token1 = document.getElementById("discord_token1").value;
    localStorage.setItem("discord_token1",discord_token1);

}




document.getElementById("access_dashboard").onclick = function() {

    document.location.href = "dashboard.html"
}



}


//DASHBOARD

else if (document.getElementById("save_config")){

    
}

