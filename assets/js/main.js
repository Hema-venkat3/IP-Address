const ipAddressEl = document.querySelector("#ip_address");

// https://ipv4.icanhazip.com/
let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if(this.readyState ===4 && this.status ===200){
    ipAddressEl.textContent = xhr.responseText;
    }
};

xhr.open("GET", "https://cors-anywhere.herokuappp.com/https://ipv4.icanhazip.com/");
xhr.send();
