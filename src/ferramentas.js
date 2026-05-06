// - Conversor de metro para pés e vice versa
function converterMetroEmPe(m) { return m * 3.281 };
function converterPeEmMetro(p) { return p / 3.281 };

// - Conversor de quilômetro para milha e vice versa
function converterKmEmMilha(km) { return km / 1.609 };
function converterMilhaEmKm(milha) { return milha * 1.609 };

// - Conversor de centímetro para polegada e vice versa
function converterCmEmPolegada(cm) { return cm / 2.54 };
function converterPolegadaEmCm(polegada) { return polegada * 2.54 };

// - Conversor de de quilograma para libra e vice versa
function converterKgEmLibra(kg) { return kg * 2.20462 };
function converterLibraEmKg(libra) { return libra / 2.20462 };

// - Conversor de graus fahrenheit para celsius e vice versa
function converterFahrenheitEmCelsius(f) { return (f - 32) * 5 / 9 };
function converterCelsiusEmFahrenheit(c) { return (c * 9 / 5) + 32 };

// - Conversor de graus kelvin para celsius e vice versa
function converterKelvinEmCelsius(k) { return k - 273.15 };
function converterCelsiusEmKelvin(c) { return c + 273.15 };

// - Conversor de real para dolar e vice versa (aceita cotação como parâmetro)
function converterRealEmDolar(real, cotacao) { return real / cotacao };
function converterDolarEmReal(dolar, cotacao) { return dolar * cotacao };

// - Conversor de real para euro e vice versa
function converterRealEmEuro(real, cotacao) { return real / cotacao };
function converterEuroEmReal(euro, cotacao) { return euro * cotacao };

// - Conversor de real para pila dos k-pop (Won) e vice versa
function converterRealEmWon(real, cotacao) { return real * cotacao };
function converterWonEmReal(won, cotacao) { return won / cotacao };

// - Conversor de horas para milissegundos e vice versa
function converterHorasEmMs(horas) { return horas * 60 * 60 * 1000 };
function converterMsEmHoras(ms) { return ms / (60 * 60 * 1000) };

// - Conversor de decimal para binário e vice versa
function converterDecimalEmBinario(decimal) { return decimal.toString(2) };
function converterBinarioEmDecimal(binario) { return parseInt(binario, 2) };

// - Conversor de decimal para hexadecimal e vice versa
function converterDecimalEmHexa(decimal) { return decimal.toString(16) };
function converterHexaEmDecimal(hexa) { return parseInt(hexa, 16) };

// - Conversor de timestamp (ms unix) para data/hora
function converterTimestampParaData(ts) { 
    const data = new Date(ts);
    return data.toISOString(); 
};

// - Rachador de contas
function racharConta(valorTotal, numeroPessoas) {
    return valorTotal / numeroPessoas;
}

// - Calculadora de percentual (Quanto é X% de Y)
function calcularPercentual(valor, percentual) {
    return (valor * percentual) / 100;
}

// - Aplicador de desconto
function aplicarDesconto(valor, percentualDesconto) {
    return valor - (valor * percentualDesconto / 100);
}

// - Arredondador
function arredondar(valor, casasDecimais) {
    return Number(valor.toFixed(casasDecimais));
}

// - Calculadora de diferença entre datas (formato amigável)
function calcularDiferencaDatas(dataInicial, dataFinal) {
    const inicio = new Date(dataInicial);
    const fim = new Date(dataFinal);
    const diffMs = Math.abs(fim - inicio);
    
    const dias = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    return `${dias}d ${horas}h ${minutos}m`;
}

module.exports = {
    converterMetroEmPe, converterPeEmMetro, converterKmEmMilha, converterMilhaEmKm,
    converterCmEmPolegada, converterPolegadaEmCm, converterKgEmLibra, converterLibraEmKg,
    converterFahrenheitEmCelsius, converterCelsiusEmFahrenheit, converterKelvinEmCelsius,
    converterCelsiusEmKelvin, converterRealEmDolar, converterDolarEmReal, converterRealEmEuro,
    converterEuroEmReal, converterRealEmWon, converterWonEmReal, converterHorasEmMs,
    converterMsEmHoras, converterDecimalEmBinario, converterBinarioEmDecimal,
    converterDecimalEmHexa, converterHexaEmDecimal, converterTimestampParaData, 
    racharConta, calcularPercentual, aplicarDesconto, arredondar, calcularDiferencaDatas
};