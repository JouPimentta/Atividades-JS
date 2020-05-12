window.onload = () => {

    var butt1 = document.getElementById('butt1');
    butt1.addEventListener('click', Theme, false);

    var butt2 = document.getElementById('butt2');
    butt2.addEventListener('click', toggle, false);

    var butt3 = document.getElementById('butt3');
    butt3.addEventListener('click', corav, false);

    var butt4 = document.getElementById('butt4');
    butt4.addEventListener('click', corav2, false);
};

var themas = {
    'Padrão':{
        cores: ['backgroundColor' , 'whitesmoke'],
        title: ['color' , "black"],
        title: ['fontFamily' , "Century Gothic"],  
        p: ['color' , "black"],
        p2: ['color' , "black"],   
        p3: ['color' , "black"],   
        p8: ['color' , "black"],
        p9: ['color' , "black"],    
        p4: ['color' , "black"],
        p11: ['color' , "white"],
        p: ['fontFamily' , "Century Gothic"],
        p2: ['fontFamily' , "Century Gothic"],
        butt1: ['fontFamily' , "Century Gothic"],
        butt1: ['background' , "gray"],
        butt1: ['color' , "white"],             
        meusTemas: ['fontFamily' , "Century Gothic"],
        meusTemas: ['backgroundColor' , "white"],
        meusTemas: ['color' , "black"],            
        butt2: ['fontFamily' , "Arial"],
        butt2: ['background' , "gray"],
        butt2: ['color' , "white"], 
        butt3: ['color' , "white"],
        butt3: ['background' , "gray"],
        butt4: ['background' , "gray"],
        butt4: ['color' , "white"],
    },
    'Escuro':{
        cores: ['backgroundColor', "#262626"],
        title: ['color', "white"],
        title: ['fontFamily', "Century Gothic"],  
        p: ['color', "white"],
        p2: ['color', "white"],   
        p3: ['color', "white"],   
        p8: ['color', "white"],
        p9: ['color', "white"],    
        p4: ['color', "white"],
        p11: ['color', "white"],
        p: ['fontFamily', "Century Gothic"],
        p2: ['fontFamily', "Century Gothic"], 
        butt1: ['fontFamily', "Century Gothic"],
        butt1: ['backgroundColor', "black"],
        butt1: ['color', "white"],             
        meusTemas: ['fontFamily', "Century Gothic"],
        meusTemas: ['backgroundColor', "black"],
        meusTemas: ['color', "black"],             
        butt2: ['fontFamily', "Century Gothic"],
        butt2: ['backgroundColor', "black"],
        butt2: ['color', "white"],
        butt3: ['backgroundColor', "black"],        
        butt4: ['backgroundColor' , "black"],
    },
    'Burnt Sienna':{
        cores: ['backgroundColor', "#F3564D"],
        title: ['color', "white"],
        title: ['fontFamily', "Century Gothic"],     
        p: ['color', "white"],
        p2: ['color', "white"],   
        p3: ['color', "white"],   
        p8: ['color', "white"],
        p9: ['color', "white"],    
        p10: ['color', "white"],
        p11: ['color', "white"],             
        p: ['fontFamily', "Century Gothic"],
        p2: ['fontFamily', "Century Gothic"], 
        butt1: ['fontFamily', "Century Gothic"],
        butt1: ['backgroundColor', "#DD4646"],
        butt1: ['color', "white"],             
        meusTemas: ['fontFamily', "Century Gothic"],
        meusTemas: ['backgroundColor', "#DD4646"],
        meusTemas: ['color', "black"],
        butt2: ['fontFamily', "Arial"],
        butt2: ['backgroundColor', "#DD4646"],
        butt2: ['color', "white"], 
        butt3: ['color', "white"], 
        butt3: ['backgroundColor', "#DD4646"],
    },
    'Sunglow':{
        cores: ['backgroundColor', "#FFD13A"],
        title: ['color', "black"],
        title: ['fontFamily', "Century Gothic"],  
        p: ['fontFamily', "Century Gothic"],
        p2: ['fontFamily', "Century Gothic"],       
        p: ['color', "black"],
        p2: ['color', "black"],   
        p3: ['color', "white"],   
        p8: ['color', "white"],
        p9: ['color', "white"],    
        p10: ['color', "white"],
        p11: ['color', "white"],
        butt1: ['fontFamily', "Century Gothic"],
        butt1: ['backgroundColor', "#E5C534"],
        butt1: ['color', "black"],             
        meusTemas: ['fontFamily', "Century Gothic"],
        meusTemas: ['backgroundColor', "#E5C534"],
        meusTemas: ['color', "black"],
        butt2: ['fontFamily', "Century Gothic"],
        butt2: ['backgroundColor', "#E5C534"],
        butt2: ['color', "black"],
        butt3: ['color', "black"],
        butt3: ['backgroundColor', "#E5C534"], 
    },
    'Dodger Blue':{
        cores : ['backgroundColor', "dodgerblue"],
        title : ['color', "white"],
        title : ['fontFamily', "Century Gothic"],  
        p : ['fontFamily', "Century Gothic"],
        p2 : ['fontFamily', "Century Gothic"],     
        p : ['color', "white"],
        p2 : ['color', "white"],    
        p3 : ['color', "white"],   
        p8 : ['color', "white"],
        p9 : ['color', "white"],    
        p10 : ['color', "white"],
        p11 : ['color', "white"],
        butt1 : ['fontFamily', "Century Gothic"],
        butt1 : ['backgroundColor', "#1B85E2"],
        butt1 : ['color', "white"],
        butt1 : ['fontFamily', "Century Gothic"],
        meusTemas : ['backgroundColor', "#1B85E2"],
        meusTemas : ['color', "black"],
        butt1 : ['fontFamily', "Century Gothic"],
        butt2 : ['backgroundColor', "#1B85E2"],
        butt2 : ['color', "white"], 
        butt3 : ['color', "white"],
        butt3 : ['backgroundColor', "#1B85E2"],
    },
};

function Theme(){
    var cor = document.getElementById("meusTemas").value;

    var tema = themas[cor];

    for (var elId in tema) {
        var element = document.getElementById(elId);
        if (element) {
            var item = tema[elId];

            var prop = item[0];
            var value = item[1];
            
            element.style[prop]=value;
        }
    }
}

function toggle(){
    var avancado = document.getElementById("Avancado");
    var condicao = avancado.style.display != "block";

    if (condicao) {

        avancado.style.display = "block"
        
    }else{
    
        avancado.style.display = "none"
    
    }
}

function corav(){
    var cor = document.getElementById("valor").value;    
    document.getElementById("cores").style.background=cor;
}


function corav2(){

    var cor2 = document.getElementById("valor2").value;    
    var lista = ['butt1', 'butt2', 'butt3', 'butt4'];
    
    for (const button of lista) {
        document.getElementById(button).style.background=cor2;
    }
}


