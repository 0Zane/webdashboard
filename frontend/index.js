


let username;
let discord_link;
let tiktok_link;
let github_link;
let api_key;

const btc_price = "https://api.coingecko.com/api/v3/simple/price?ids=btc&vs_currencies=usd";
const eth_price = "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd";
const solana_price = "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd";


document.getElementById("submit").onclick = function(){
    
    

    username = document.getElementById("username").value;
    document.title = username;
    console.log(username);
}

