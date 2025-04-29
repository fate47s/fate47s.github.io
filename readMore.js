function readmore(){
    var dots = document.getElementById("dots");
    var moretext = document.getElementById("moreText");
    var button = document.getElementById("readMoreButton");  

    if(dots.style.display == "none"){  
        dots.style.display = "inline";
        button.innerHTML = "Läs mer";  
        moretext.style.display = 'none';
    }else{
        dots.style.display = 'none';
        button.innerHTML = "Läs mindre";  
        moretext.style.display = 'inline';
}
}