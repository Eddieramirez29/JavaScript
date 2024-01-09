let valor;

document.writeln("<p>Números aleatorios</p> <ol> <br>");

for(let i = 1; i <= 30; i++)
{
    valor = Math.floor(1 + Math.random()*6);
    document.writeln("<li>" + valor + "</li>");
}

document.writeln("</ol>");