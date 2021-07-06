window.onscroll = function () {
    if(document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.background = "black";
        document.getElementById("navbar").style.height = "60px";
        document.getElementById("navbar").style.padding = "0px";
    }
    else{
        document.getElementById("navbar").style.background = "none";
        document.getElementById("navbar").style.height = "80px";
        document.getElementById("navbar").style.padding = "0px";
    }
}