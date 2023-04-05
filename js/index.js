let mancont = document.getElementById("mancont");
let buttconta = document.getElementById("buttconta");
let butt = document.getElementById("butt");

mancont.style.backgroundColor = localStorage.getItem("bgColor");
buttconta.style.backgroundColor = localStorage.getItem("buttcont");
butt.style.backgroundColor = localStorage.getItem("bgColor");
butt.style.left = localStorage.getItem("leftzer");

buttconta.addEventListener("click", () => {
  toggl();
});

function toggl() {
  if (mancont.style.backgroundColor == "black") {
    localStorage.setItem("bgColor", "white");
    localStorage.setItem("buttcont", "gray");
    localStorage.setItem("leftzer", "45px");
    mancont.style.backgroundColor = localStorage.getItem("bgColor");
    buttconta.style.backgroundColor = localStorage.getItem("buttcont");
    butt.style.backgroundColor = localStorage.getItem("bgColor");
    butt.style.left = localStorage.getItem("leftzer");
  } else {
    localStorage.setItem("bgColor", "black");
    localStorage.setItem("buttcont", "white");
    localStorage.setItem("leftzer", "4px");
    mancont.style.backgroundColor = localStorage.getItem("bgColor");
    buttconta.style.backgroundColor = "white";
    butt.style.backgroundColor = localStorage.getItem("bgColor");
    butt.style.left = butt.style.left = localStorage.getItem("leftzer");
  }
}
