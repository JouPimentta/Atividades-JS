window.onload = () => {

    var images = document.getElementsByClassName("small-img");
    //var button = document.getElementById('button');
    
    //button.addEventListener('click', toggle, false);

    Array.from(images).forEach((img) =>{
        img.addEventListener("mouseenter", showPreview, false);
        img.addEventListener("mouseout", hidePreview, false);
        
    });
}

function showPreview(e){
    console.log(e.type);
    var img = document.getElementById("show-preview");
    img.src = e.target.src;

}

function hidePreview(){
    document.getElementById("show-preview").style.display = "block";
}


/*function toggle(){
    var info = document.getElementById("info2");
    var condicao = info.style.display != "block";

    if (condicao) {

        info.style.display = "block";
        
    }else{
    
        info.style.display = "none";
    
    }
}

function funcaoOff(){
    document.getElementById("image").src="image.png";       
    document.getElementById("p11").style.display="block";
    document.getElementById("p3").style.display="none";    
    document.getElementById("p4").style.display="none";
    document.getElementById("p5").style.display="none";    
    document.getElementById("p6").style.display="none";
    document.getElementById("p7").style.display="none";    
    document.getElementById("p8").style.display="none";
    document.getElementById("p9").style.display="none";    
    document.getElementById("p10").style.display="none";
}

function funcao1(){
    document.getElementById("image").src="Poster SU.png";    
    document.getElementById("image").style.height="95%";        
    document.getElementById("image").style.marginTop="3%";
    
    
    document.getElementById("p3").style.display="block";    
    document.getElementById("p4").style.display="none";
    document.getElementById("p5").style.display="none";    
    document.getElementById("p6").style.display="none";
    document.getElementById("p7").style.display="none";    
    document.getElementById("p8").style.display="none";
    document.getElementById("p9").style.display="none";    
    document.getElementById("p10").style.display="none";       
    document.getElementById("p11").style.display="none";
}

function funcao2(){
    document.getElementById("image").src="Poster SU weve come so far.png";   
    document.getElementById("image").style.height="95%";         
    document.getElementById("image").style.marginTop="3%";   
    
    
    document.getElementById("p3").style.display="none";    
    document.getElementById("p4").style.display="block";
    document.getElementById("p5").style.display="none";    
    document.getElementById("p6").style.display="none";
    document.getElementById("p7").style.display="none";    
    document.getElementById("p8").style.display="none";
    document.getElementById("p9").style.display="none";    
    document.getElementById("p10").style.display="none";       
    document.getElementById("p11").style.display="none";
}

function funcao3(){
    document.getElementById("image").src="Bee and Puppycat.png";
    document.getElementById("image").style.height="50%";         
    document.getElementById("image").style.marginTop="28%"; 
    
    
    document.getElementById("p3").style.display="none";    
    document.getElementById("p4").style.display="none";
    document.getElementById("p5").style.display="block";    
    document.getElementById("p6").style.display="none";
    document.getElementById("p7").style.display="none";    
    document.getElementById("p8").style.display="none";
    document.getElementById("p9").style.display="none";    
    document.getElementById("p10").style.display="none";       
    document.getElementById("p11").style.display="none";
}

function funcao4(){
    document.getElementById("image").src="cousins.png";  
    document.getElementById("image").style.height="70%";        
    document.getElementById("image").style.marginTop="18%"; 
    
    
    document.getElementById("p3").style.display="none";    
    document.getElementById("p4").style.display="none";
    document.getElementById("p5").style.display="none";    
    document.getElementById("p6").style.display="block";
    document.getElementById("p7").style.display="none";    
    document.getElementById("p8").style.display="none";
    document.getElementById("p9").style.display="none";    
    document.getElementById("p10").style.display="none";       
    document.getElementById("p11").style.display="none";
}

function funcao5(){
    document.getElementById("image").src="COVID-19.png";   
    document.getElementById("image").style.height="80%";        
    document.getElementById("image").style.marginTop="15%"; 
    
    
    document.getElementById("p3").style.display="none";    
    document.getElementById("p4").style.display="none";
    document.getElementById("p5").style.display="none";    
    document.getElementById("p6").style.display="none";
    document.getElementById("p7").style.display="block";    
    document.getElementById("p8").style.display="none";
    document.getElementById("p9").style.display="none";    
    document.getElementById("p10").style.display="none";       
    document.getElementById("p11").style.display="none";
}

function funcao6(){
    document.getElementById("image").src="Easy Breezy.png";   
    document.getElementById("image").style.height="85%";        
    document.getElementById("image").style.marginTop="9%";  
    
    
    document.getElementById("p3").style.display="none";    
    document.getElementById("p4").style.display="none";
    document.getElementById("p5").style.display="none";    
    document.getElementById("p6").style.display="none";
    document.getElementById("p7").style.display="none";    
    document.getElementById("p8").style.display="block";
    document.getElementById("p9").style.display="none";    
    document.getElementById("p10").style.display="none";       
    document.getElementById("p11").style.display="none";
}

function funcao7(){
    document.getElementById("image").src="reginald post.png";    
    document.getElementById("image").style.height="80%";        
    document.getElementById("image").style.marginTop="14%";
    
    
    document.getElementById("p3").style.display="none";    
    document.getElementById("p4").style.display="none";
    document.getElementById("p5").style.display="none";    
    document.getElementById("p6").style.display="none";
    document.getElementById("p7").style.display="none";    
    document.getElementById("p8").style.display="none";
    document.getElementById("p9").style.display="block";    
    document.getElementById("p10").style.display="none";       
    document.getElementById("p11").style.display="none";
}

function funcao8(){
    document.getElementById("image").src="Desenho.png";   
    document.getElementById("image").style.height="95%";        
    document.getElementById("image").style.marginTop="3%";  
    
    
    document.getElementById("p3").style.display="none";    
    document.getElementById("p4").style.display="none";
    document.getElementById("p5").style.display="none";    
    document.getElementById("p6").style.display="none";
    document.getElementById("p7").style.display="none";    
    document.getElementById("p8").style.display="none";
    document.getElementById("p9").style.display="none";    
    document.getElementById("p10").style.display="block";       
    document.getElementById("p11").style.display="none";
}

function show(){
    document.getElementById("info2").style.display="block";
}

function hide(){
    document.getElementById("info2").style.display="none";
}*/