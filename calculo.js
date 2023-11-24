function calcularRaizes() {
    // Obtém os coeficientes da equação quadrática do HTML
    const a = parseFloat(document.getElementById('coeficienteA').value);
    const b = parseFloat(document.getElementById('coeficienteB').value);
    const c = parseFloat(document.getElementById('coeficienteC').value);

    // Verifica se os coeficientes são números
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById('resultado').innerText = 'Por favor, insira coeficientes válidos.';
        return;
    }

    // Calcula o discriminante
    const delta = b * b - 4 * a * c;

    // Verifica se as raízes são reais
    if (delta < 0) {
       document.getElementById('status').innerText = 'NÃO POSSUI RAÍZES REAIS';
        
    }
    if (delta > 0) {
        document.getElementById('status').innerText = 'POSSUI DUAS RAÍZES REAIS DIFERENTES';
      
    }
    if (delta == 0) {
        document.getElementById('status').innerText = 'POSSUI DUAS RAÍZES REAIS IGUAIS';
       
    }

    // Calcula as raízes
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);

    // Exibe o resultado no HTML
    document.getElementById('resultado').innerText = `As raízes são: x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;
}
