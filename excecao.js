try {
    // Solicita ao usuário dois números
    const numero1 = parseFloat(prompt("Informe o primeiro número:"));
    const numero2 = parseFloat(prompt("Informe o segundo número:"));
  
    // Tenta realizar a divisão
    if (isNaN(numero1) || isNaN(numero2)) {
      throw new Error("Você deve informar números válidos.");
    }
  
    const resultado = numero1 / numero2;
  
    if (!isFinite(resultado)) {
      throw new Error("Resultado infinito ou NaN.");
    }
  
    // Exibe o resultado
    console.log("O resultado da divisão é: " + resultado);
  } catch (error) {
    // Captura e trata a exceção
    console.error("Ocorreu um erro: " + error.message);
  } finally {
    // O bloco "finally" é opcional e sempre é executado, independentemente de exceções.
    console.log("O código foi executado.");
  }
  