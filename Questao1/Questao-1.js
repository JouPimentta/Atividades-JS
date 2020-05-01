window.onload = () => {

    var image = document.getElementById('image');
    var button = document.getElementById('button');

    image.addEventListener('mouseover', funcao1, false);
    image.addEventListener('mouseout', funcao2, false);
    
    button.addEventListener('click', toggle, false);
}


function funcao1(){
    document.getElementById("image").src="Poster-SU-weve-come-so-far.png";
    document.getElementById("p3").style.display="none";    
    document.getElementById("p4").style.display="block";
    
}

function funcao2(){
    document.getElementById("image").src="Poster-SU.png";
    document.getElementById("p3").style.display="block";    
    document.getElementById("p4").style.display="none";
}

function toggle(){
    var info = document.getElementById("info2");
    
    var condicao = info.style.display != 'block';
    debugger;
    if (condicao) {

        info.style.display = "block";

    } else {

        info.style.display="none";

    }
}
