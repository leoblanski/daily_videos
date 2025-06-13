const vendedores = {
    Ana: { cargo: 'Júnior' },
    Carlos: { cargo: 'Pleno' },
    Beatriz: { cargo: 'Sênior' },
}

const multiplicadores = {
    'Júnior': 1.0,
    'Pleno': 1.1,
    'Sênior': 1.25,
}


function calculaComissao(nome, total) {
    const vendedor = vendedores[nome];

    if (!vendedor) {
        return 'Vendedor Inválido';
    }

    let percentual = 0;

    if (total >= 1000 && total < 2000) {
        percentual = 5;
    } else if (total >= 2000 && total < 3000) {
        percentual = 10;
    } else if (total >= 3000) {
        percentual = 15;
    }

    const comissaoBase = (total * percentual) / 100;
    const multiplicador = multiplicadores[vendedor.cargo];

    const comissao = comissaoBase * multiplicador;

    return `${nome} receberá ${comissao.toFixed(2)}`;
}


console.log(calculaComissao('Carlos', 2500));
console.log(calculaComissao('Ana', 900));
console.log(calculaComissao('Beatriz', 3100));

/*
 Crie uma função que de acordo com
 o nome do vendedor e o total vendido,
 retorne o valor da comissão que ele receberá.

 A comissão é baseada em faixas de vendas;

 – Até R$999 → 0%
 – De R$1000 a R$1999 → 5%
 – De R$2000 a R$2999 → 10%
 – Acima de R$3000 → 15%

  Deve ser levado em consideração:
  – Cada vendedor tem um cargo (Júnior, Pleno ou Sênior)
  – O cargo afeta o valor com um multiplicador:
     Júnior → 1.0
     Pleno → 1.1
     Sênior → 1.25
*/














// const vendedores = {
//     Ana: { cargo: 'Júnior' },
//     Carlos: { cargo: 'Pleno' },
//     Beatriz: { cargo: 'Sênior' },
// }

// const multiplicadores = {
//     'Júnior': 1.0,
//     'Pleno': 1.1,
//     'Sênior': 1.25,
// }

// function calculaComissao(nome, total) {
//     const vendedor = vendedores[vendedor];

//     if (!vendedor) {
//         return 'Vendedor Inválido';
//     }

//     let percentual = 0;

//     if (total >= 1000 && total < 2000) {
//         percentual = 5;
//     } else if (total >= 2000 && total < 3000) {
//         percentual = 10;
//     } else if (total >= 3000) {
//         percentual = 15;
//     }

//     const comissaoBase = (total * percentual) / 100;
//     const multiplicador = multiplicadores[vendedor.cargo];

//     const comissao = comissaoBase * multiplicador;

//     return `A comissão será de ${comissao.toFixed(2)}`;
// }

// console.log(calculaComissao('Carlos', 2500));
// console.log(calculaComissao('Ana', 900));
// console.log(calculaComissao('Beatriz', 3100));

