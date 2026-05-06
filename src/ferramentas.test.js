const { 
    converterMetroEmPe, converterPeEmMetro, converterKmEmMilha, converterMilhaEmKm, 
    converterCmEmPolegada, converterPolegadaEmCm, converterKgEmLibra, converterLibraEmKg,
    converterFahrenheitEmCelsius, converterCelsiusEmFahrenheit, converterKelvinEmCelsius,
    converterCelsiusEmKelvin, converterRealEmDolar, converterDolarEmReal, converterRealEmEuro,
    converterEuroEmReal, converterRealEmWon, converterWonEmReal, converterHorasEmMs,
    converterMsEmHoras, converterDecimalEmBinario, converterBinarioEmDecimal,
    converterDecimalEmHexa, converterHexaEmDecimal, converterTimestampParaData, 
    racharConta, calcularPercentual, aplicarDesconto, arredondar, calcularDiferencaDatas
} = require('./ferramentas');

describe('Conversor de metro para pés e vice versa', () => {
    test('Converter 1 metro para 3.281 pés', () => {
        expect(converterMetroEmPe(1)).toBe(3.281);
    });

    test('Converter 3.281 pés para 1 metro', () => {
        expect(converterPeEmMetro(3.281)).toBe(1);
    });
});

describe('Conversor de km e milha e vice versa', () => {
    test('Converter 10 quilômetro em 6.215 milhas', () => {
        expect(converterKmEmMilha(10)).toBeCloseTo(6.215, 2);
    });

    test('Converter 6.215 milha em 10 quilômetro', () => {
        expect(converterMilhaEmKm(6.215)).toBeCloseTo(10, 0);
    });
});

describe('Conversor de centímetro para polegada e vice versa', () => {
    test('Converter 10 centímetros para polegada', () => {
        expect(converterCmEmPolegada(10)).toBeCloseTo(3.937, 2);
    });
    test('Converter 3.937 polegadas para centímetros', () => {
        expect(converterPolegadaEmCm(3.937)).toBeCloseTo(10, 0);
    });
});

describe('Conversor de quilograma para libra e vice versa', () => {
    test('Converter 1 kg para libras', () => {
        expect(converterKgEmLibra(1)).toBeCloseTo(2.204, 2);
    });
    test('Converter 2.204 libras para kg', () => {
        expect(converterLibraEmKg(2.204)).toBeCloseTo(1, 0);
    });
});

describe('Conversor de graus fahrenheit para celsius e vice versa', () => {
    test('Converter 32 fahrenheit para 0 celsius', () => {
        expect(converterFahrenheitEmCelsius(32)).toBe(0);
    });
    test('Converter 100 celsius para 212 fahrenheit', () => {
        expect(converterCelsiusEmFahrenheit(100)).toBe(212);
    });
});

describe('Conversor de graus kelvin para celsius e vice versa', () => {
    test('Converter 273.15 kelvin para 0 celsius', () => {
        expect(converterKelvinEmCelsius(273.15)).toBe(0);
    });
    test('Converter 0 celsius para 273.15 kelvin', () => {
        expect(converterCelsiusEmKelvin(0)).toBe(273.15);
    });
});

describe('Conversor de real para moedas estrangeiras e vice versa', () => {
    const cotacaoDolar = 5.00;
    const cotacaoEuro = 5.50;
    const cotacaoWon = 250.00;

    test('Converter Real para Dólar', () => {
        expect(converterRealEmDolar(10, cotacaoDolar)).toBe(2);
    });
    test('Converter Dólar para Real', () => {
        expect(converterDolarEmReal(2, cotacaoDolar)).toBe(10);
    });

    test('Converter Real para Euro', () => {
        expect(converterRealEmEuro(11, cotacaoEuro)).toBe(2);
    });
    test('Converter Euro para Real', () => {
        expect(converterEuroEmReal(2, cotacaoEuro)).toBe(11);
    });

    test('Converter Real para Won', () => {
        expect(converterRealEmWon(2, cotacaoWon)).toBe(500);
    });
    test('Converter Won para Real', () => {
        expect(converterWonEmReal(500, cotacaoWon)).toBe(2);
    });
});

describe('Conversor de horas para milissegundos e vice versa', () => {
    test('Converter 1 hora para ms', () => {
        expect(converterHorasEmMs(1)).toBe(3600000);
    });
    test('Converter 3600000 ms para horas', () => {
        expect(converterMsEmHoras(3600000)).toBe(1);
    });
});

describe('Conversor de sistemas numéricos (Binário e Hexa)', () => {
    test('Converter decimal 10 para binário', () => {
        expect(converterDecimalEmBinario(10)).toBe("1010");
    });
    test('Converter binário 1010 para decimal', () => {
        expect(converterBinarioEmDecimal("1010")).toBe(10);
    });

    test('Converter decimal 255 para hexadecimal', () => {
        expect(converterDecimalEmHexa(255)).toBe("ff");
    });
    test('Converter hexa ff para decimal', () => {
        expect(converterHexaEmDecimal("ff")).toBe(255);
    });
});

describe('Conversor de timestamp para data', () => {
    test('Converter timestamp unix para string ISO', () => {
        expect(converterTimestampParaData(1672531200000)).toMatch(/2023-01-01/);
    });
});

describe('Novas utilidades matemáticas e de data', () => {
    test('Deve rachar uma conta de 100 reais para 4 pessoas', () => {
        expect(racharConta(100, 4)).toBe(25);
    });

    test('Deve calcular que 20% de 500 é 100', () => {
        expect(calcularPercentual(500, 20)).toBe(100);
    });

    test('Deve aplicar desconto de 10% em um produto de 200 reais', () => {
        expect(aplicarDesconto(200, 10)).toBe(180);
    });

    test('Deve arredondar PI para 2 casas decimais', () => {
        expect(arredondar(3.14159, 2)).toBe(3.14);
    });

    test('Deve calcular a diferença entre duas datas', () => {
        const data1 = '2026-05-05T14:30:00';
        const data2 = '2026-05-06T16:45:00';
        expect(calcularDiferencaDatas(data1, data2)).toBe('1d 2h 15m');
    });
});