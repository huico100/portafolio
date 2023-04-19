function encriptarFrase(frase)
{
    let aEncriptar = frase;
    for(i=aEncriptar.length-1; i>=0; i--)
    {
        switch(aEncriptar.charAt(i)) {
        case "a":
            aEncriptar = aEncriptar.slice(0,i+1) + "i" + aEncriptar.slice(i+1);
            break;
        case "e":
            aEncriptar = aEncriptar.slice(0,i+1) + "nter" + aEncriptar.slice(i+1);
            break;
        case "i":
            aEncriptar = aEncriptar.slice(0,i+1) + "mes" + aEncriptar.slice(i+1);
            break;
        case "o":
            aEncriptar = aEncriptar.slice(0,i+1) + "ber" + aEncriptar.slice(i+1);
            break;
        case "u":
            aEncriptar = aEncriptar.slice(0,i+1) + "fat" + aEncriptar.slice(i+1);
            break;
        } 
    }
    document.getElementById('divMuneco').style = "display: none;";
    document.getElementById('divResultado').style = "display: block;";
    document.getElementById('txtResultado').value = aEncriptar;
}

function desencriptarFrase(frase)
{
    let aDesencriptar = frase;
    aDesencriptar = aDesencriptar.replaceAll('ai','a');
    aDesencriptar = aDesencriptar.replaceAll('enter','e');
    aDesencriptar = aDesencriptar.replaceAll('imes','i');
    aDesencriptar = aDesencriptar.replaceAll('ober','o');
    aDesencriptar = aDesencriptar.replaceAll('ufat','u');
    document.getElementById('divMuneco').style = "display: none;";
    document.getElementById('divResultado').style = "display: block;";
    document.getElementById('txtResultado').value = aDesencriptar;
}

function escribirAlPortapapeles(texto)
{
    navigator.clipboard.writeText(texto);
}