var i,n1, n2;

n1 = parseInt(prompt("Ingrese el número 1"));
n2 = parseInt(prompt("Ingrese el número 2"));


nmenor = Math.min(n1, n2);
nmayor = Math.max(n1, n2);

i = nmenor;

do {
if (i % 2 != 0) {
    resultado=i*i*i
    document.write("El cubo de  " +i+" es: " +resultado +"<br>");
}
i++;
} while (i <= nmayor);