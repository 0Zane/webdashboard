


let username;

let discord_token1;

const page = document.body.getAttribute("data-page");
//INDEX PAGE

if (page === "index"){

    
if (localStorage.getItem('username') !== null) {
    document.location.href="custom.html"; 
} else {


document.getElementById("submit_username").onclick = function(){
    
    

    username = document.getElementById("username").value;
    localStorage.setItem("username",username );
    document.location.href="custom.html"; 
}

}
}

//CONFIG PAGE

else if (page === "custom"){

document.getElementById("save_config").onclick = function() {




    if (document.getElementById("discord_token1").value !== ""){  //If the discord token has been provided

    discord_token1 = document.getElementById("discord_token1").value;
    localStorage.setItem("discord_token1",discord_token1);

    } else {
    alert("Please input a discord token")   
    }
}




document.getElementById("access_dashboard").onclick = function() {

    document.location.href = "dashboard.html"
}



}


//DASHBOARD

else if (page === "dashboard"){

    
}

