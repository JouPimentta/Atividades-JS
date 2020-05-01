function Theme(){
    cor = document.getElementById("meusTemas").value;
    switch(cor){
        case "Padrão":
            document.getElementById("cores").style.backgroundColor="whitesmoke";
            document.getElementById("title").style.color="black";
            document.getElementById("title").style.fontFamily="Century Gothic";  
            document.getElementById("p").style.color="black";
            document.getElementById("p2").style.color="black";   
            document.getElementById("p3").style.color="white";   
            document.getElementById("p8").style.color="white";
            document.getElementById("p9").style.color="white";    
            document.getElementById("p10").style.color="white";
            document.getElementById("p11").style.color="white";
            document.getElementById("p").style.fontFamily="Century Gothic";
            document.getElementById("p2").style.fontFamily="Century Gothic";
            document.getElementById("butt1").style.fontFamily="Century Gothic";
            document.getElementById("butt1").style.backgroundColor="gray";
            document.getElementById("butt1").style.color="white";             
            document.getElementById("meusTemas").style.fontFamily="Century Gothic";
            document.getElementById("meusTemas").style.backgroundColor="white";
            document.getElementById("meusTemas").style.color="black";            
            document.getElementById("butt2").style.fontFamily="Arial";
            document.getElementById("butt2").style.backgroundColor="gray";
            document.getElementById("butt2").style.color="white"; 
            document.getElementById("butt3").style.color="white";
            document.getElementById("butt3").style.backgroundColor="gray";
        break;
        case "Escuro":
            document.getElementById("cores").style.backgroundColor="#262626";
            document.getElementById("title").style.color="white";
            document.getElementById("title").style.fontFamily="Century Gothic";  
            document.getElementById("p").style.color="white";
            document.getElementById("p2").style.color="white";   
            document.getElementById("p3").style.color="white";   
            document.getElementById("p8").style.color="white";
            document.getElementById("p9").style.color="white";    
            document.getElementById("p10").style.color="white";
            document.getElementById("p11").style.color="white";
            document.getElementById("p").style.fontFamily="Century Gothic";
            document.getElementById("p2").style.fontFamily="Century Gothic"; 
            document.getElementById("butt1").style.fontFamily="Century Gothic";
            document.getElementById("butt1").style.backgroundColor="black";
            document.getElementById("butt1").style.color="white";             
            document.getElementById("meusTemas").style.fontFamily="Century Gothic";
            document.getElementById("meusTemas").style.backgroundColor="black";
            document.getElementById("meusTemas").style.color="white";             
            document.getElementById("butt2").style.fontFamily="Century Gothic";
            document.getElementById("butt2").style.backgroundColor="black";
            document.getElementById("butt2").style.color="white";
            document.getElementById("butt3").style.backgroundColor="black";
        break;
        case "Burnt Sienna":
            document.getElementById("cores").style.backgroundColor="#F3564D";
            document.getElementById("title").style.color="white";
            document.getElementById("title").style.fontFamily="Century Gothic";     
            document.getElementById("p").style.color="white";
            document.getElementById("p2").style.color="white";   
            document.getElementById("p3").style.color="white";   
            document.getElementById("p8").style.color="white";
            document.getElementById("p9").style.color="white";    
            document.getElementById("p10").style.color="white";
            document.getElementById("p11").style.color="white";             
            document.getElementById("p").style.fontFamily="Century Gothic";
            document.getElementById("p2").style.fontFamily="Century Gothic"; 
            document.getElementById("butt1").style.fontFamily="Century Gothic";
            document.getElementById("butt1").style.backgroundColor="#DD4646";
            document.getElementById("butt1").style.color="white";             
            document.getElementById("meusTemas").style.fontFamily="Century Gothic";
            document.getElementById("meusTemas").style.backgroundColor="#DD4646";
            document.getElementById("meusTemas").style.color="white";
            document.getElementById("butt2").style.fontFamily="Arial";
            document.getElementById("butt2").style.backgroundColor="#DD4646";
            document.getElementById("butt2").style.color="white"; 
            document.getElementById("butt3").style.color="white"; 
            document.getElementById("butt3").style.backgroundColor="#DD4646";    
        break;
        case "Sunglow":
            document.getElementById("cores").style.backgroundColor="#FFD13A";
            document.getElementById("title").style.color="black";
            document.getElementById("title").style.fontFamily="Century Gothic";  
            document.getElementById("p").style.fontFamily="Century Gothic";
            document.getElementById("p2").style.fontFamily="Century Gothic";       
            document.getElementById("p").style.color="black";
            document.getElementById("p2").style.color="black";   
            document.getElementById("p3").style.color="white";   
            document.getElementById("p8").style.color="white";
            document.getElementById("p9").style.color="white";    
            document.getElementById("p10").style.color="white";
            document.getElementById("p11").style.color="white";
            document.getElementById("butt1").style.fontFamily="Century Gothic";
            document.getElementById("butt1").style.backgroundColor="#E5C534";
            document.getElementById("butt1").style.color="black";             
            document.getElementById("meusTemas").style.fontFamily="Century Gothic";
            document.getElementById("meusTemas").style.backgroundColor="#E5C534";
            document.getElementById("meusTemas").style.color="black";
            document.getElementById("butt2").style.fontFamily="Century Gothic";
            document.getElementById("butt2").style.backgroundColor="#E5C534";
            document.getElementById("butt2").style.color="black";
            document.getElementById("butt3").style.color="black";
            document.getElementById("butt3").style.backgroundColor="#E5C534"; 
        break;
        case "Dodger Blue":
            document.getElementById("cores").style.backgroundColor="dodgerblue"; 
            document.getElementById("title").style.color="white";
            document.getElementById("title").style.fontFamily="Century Gothic";  
            document.getElementById("p").style.fontFamily="Century Gothic";
            document.getElementById("p2").style.fontFamily="Century Gothic";     
            document.getElementById("p").style.color="white";
            document.getElementById("p2").style.color="white";    
            document.getElementById("p3").style.color="white";   
            document.getElementById("p8").style.color="white";
            document.getElementById("p9").style.color="white";    
            document.getElementById("p10").style.color="white";
            document.getElementById("p11").style.color="white";
            document.getElementById("butt1").style.fontFamily="Century Gothic";
            document.getElementById("butt1").style.backgroundColor="#1B85E2";
            document.getElementById("butt1").style.color="white";
            document.getElementById("butt1").style.fontFamily="Century Gothic";
            document.getElementById("meusTemas").style.backgroundColor="#1B85E2";
            document.getElementById("meusTemas").style.color="white";
            document.getElementById("butt1").style.fontFamily="Century Gothic";
            document.getElementById("butt2").style.backgroundColor="#1B85E2";
            document.getElementById("butt2").style.color="white"; 
            document.getElementById("butt3").style.color="white";
            document.getElementById("butt3").style.backgroundColor="#1B85E2";    
        break;
    }
}

function Show(){
    document.getElementById("Avancado").style.display="block";    
    document.getElementById("cores").style.width="30%";
    
}


function corav(){
    cor = document.getElementById("valor").value;    
    document.getElementById("cores").style.background=cor;
}


function corav2(){

cor2 = document.getElementById("valor2").value;    
document.getElementById("butt1").style.background=cor2;
document.getElementById("butt2").style.background=cor2;
document.getElementById("butt3").style.background=cor2;
document.getElementById("butt4").style.background=cor2;

}

function Hide(){
    document.getElementById("Avancado").style.display="none";
}s


