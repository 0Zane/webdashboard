


let username;
let discord_link;
let tiktok_link;
let github_link;
let api_key;

let discord_token1;
let discord_token2;
let discord_token3;

const btc_price = "https://api.coingecko.com/api/v3/simple/price?ids=btc&vs_currencies=usd";
const eth_price = "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd";
const solana_price = "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd";


if (document.getElementById("submit_username")){

document.getElementById("submit_username").onclick = function(){
    
    

    username = document.getElementById("username").value;
    localStorage.setItem("username",username );
    document.location.href="custom.html"; 
}
}



else if (document.getElementById("save_config")){

document.getElementById("save_config").onclick = function() {


    tiktok_link = document.getElementById("tiktok_link").value;
    localStorage.setItem("tiktok_link",tiktok_link);


    github_link = document.getElementById("github_link").value;
    localStorage.setItem("github_link",github_link);

    api_key = document.getElementById("api_key").value;
    localStorage.setItem("api_key",api_key);

    discord_link = document.getElementById("discord_link").value;
    localStorage.setItem("discord_link",discord_link);


    
    discord_token1 = document.getElementById("discord_token1").value;
    localStorage.setItem("discord_token1",discord_token1);

    discord_token2 = document.getElementById("discord_token2").value;
    localStorage.setItem("discord_token2",discord_token2);
    
}

}

