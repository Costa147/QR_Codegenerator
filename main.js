function genQR(){
    var gapi="https://chart.googleapis.com/chart?chef=bg,s,65432100&cht=qr&chs=";
    var myimg=document.getElementById("img");
    var mytext=document.getElementById("qtext").value;
    var mysize=document.getElementById("size").value;

    if(mytext!==""&& mysize=="100"){
        myimg.src=gapi+"100x100"+"&ch1="+mytext;
    }
    else if(mytext!==""&& mysize=="150"){
        myimg.src=gapi+"150x150"+"&ch1="+mytext;
    }
    else if(mytext!==""&& mysize=="200"){
        myimg.src=gapi+"200x200"+"&ch1="+mytext;
    }
    else if(mytext!==""&& mysize=="250"){
        myimg.src=gapi+"250x250"+"&ch1="+mytext;
    }
    else if(mytext!==""&& mysize=="300"){
        myimg.src=gapi+"300x300"+"&ch1="+mytext;
    }
    else{
        alert("Please Enter Text");
    }
}

//https://chart.googleapis.com/chart?chef=bg,s,65432100&cht=qr&chs=100x100ch1=hello