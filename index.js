function encriptar() {

    let regex = /^[a-z]+$/;

    //colocar texto
    var textoaMostar = document.getElementById("texto1");

    var textarea = textoaMostar.value;

    var flag = regex.exec(textarea);
   
    if (flag == null) {
        alert("Solo letras minúsculas y sin acentos")
        return
    }

        //ocultar
        var div = document.getElementById("divtext2");
        div.classList.remove("clshidden");
    
        //mostar
        var aassdd = document.getElementById("divtext1");
        //Agregar una clase al elemento del html
        aassdd.classList.add("clshidden");

    var rsp = "";
    for (let i = 0; i < textarea.length; i++) {

        switch (textarea[i]) {
            case "a":
                rsp += "ai";
                break;
            case "e":
                rsp += "enter";
                break;
            case "i":
                rsp += "imes";
                break;
            case "o":
                rsp += "ober";
                break;
            case "u":
                rsp += "ufat";
                break;
            default:
                rsp += textarea[i];

        }
    }

    var textoaMostar = document.getElementById("texto2");
    textoaMostar.value = rsp;
}

function desencriptar() {

    //ocultar
    var div = document.getElementById("divtext2");
    div.classList.remove("clshidden");

    //mostar
    var aassdd = document.getElementById("divtext1");
    aassdd.classList.add("clshidden");

    var textoaMostar = document.getElementById("texto1");

    var textarea = textoaMostar.value;
    /*console.log(textarea)*/
    textarea = textarea.replace("ai", 'a');
    textarea = textarea.replace("enter", 'e');
    textarea = textarea.replace("imes", 'i');
    textarea = textarea.replace("ober", 'o');
    textarea = textarea.replace("ufat", 'u');

    var textarea2 = document.getElementById("texto2");
    //Agregar un valor al elemento del html (mostrar)
    textarea2.value = textarea;

}

async function copiar() {
    var textarea2 = document.getElementById("texto2");

    await navigator.clipboard.writeText(textarea2.value);

    alert("Texto copiado en el portapapel")

}

async function borrar() {
    var textarea2 = document.getElementById("texto2");

    textarea2.value = " "

}
