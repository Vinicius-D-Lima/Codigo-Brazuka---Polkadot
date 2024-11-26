let historicoTransacoes = []; 
let timerInterval;

document.getElementById('calcular').addEventListener('click', function () {
    let valorTransacao = parseFloat(document.getElementById('valor-transacao').value);
    let complexidade = document.getElementById('complexidade').value;
    let conversao = document.getElementById('conversao').value;
    let sumValue = document.getElementById('counter');
    let precoGas, coin;

    sumValue.innerHTML = parseInt(sumValue.innerHTML) + 1;

    switch (complexidade) {
        case 'baixa':
            precoGas = 0.01;
            break;
        case 'media':
            precoGas = 0.05;
            break;
        case 'alta':
            precoGas = 0.1;
            break;
    }
    switch (conversao) {
        case 'EUR':
            coin = 8.04;
            break;
        case 'USD':
            coin = 9.24;
            break;
    }

    let custoGas = valorTransacao * precoGas;
    let convertido = custoGas * coin;

    if (valorTransacao > 0) {
        document.getElementById('resultado').innerHTML = `
            <p>Valor da Transação: ${valorTransacao} DOT</p>
            <p>Complexidade: ${complexidade.charAt(0).toUpperCase() + complexidade.slice(1)}</p>
            <p><strong>Custo Estimado do Gas: ${custoGas.toFixed(2)} DOT</strong></p>
            <p style="color: green;">Valor em ${conversao.toUpperCase()}: $${convertido.toFixed(2)}</p>
        `;

        registrarTransacao(valorTransacao, complexidade, custoGas, convertido, conversao);
    } else {
        document.getElementById('resultado').innerHTML = '<p style="color:red;">Por favor, insira um valor de transação válido.</p>';
        alert('Por favor, insira um valor de transação válido.');
    }
});

function registrarTransacao(valorTransacao, complexidade, custoGas, convertido, conversao) {
    const transacao = {
        valorTransacao,
        complexidade,
        custoGas,
        convertido,
        conversao,
        data: new Date().toLocaleString()
    };

    historicoTransacoes.push(transacao);
    atualizarHistorico();
    clearInterval(timerInterval); 
    iniciarTimer(); 
}

function atualizarHistorico() {
    const historicoUl = document.getElementById('historico');
    historicoUl.innerHTML = ''; 

    historicoTransacoes.forEach(transacao => {
        const transacaoLi = document.createElement('li');
        transacaoLi.classList.add('transacao');

        transacaoLi.innerHTML = `
            <p><strong>Data:</strong> ${transacao.data}</p>
            <p><strong>Valor da Transação:</strong> ${transacao.valorTransacao} DOT</p>
            <p><strong>Complexidade:</strong> ${transacao.complexidade.charAt(0).toUpperCase() + transacao.complexidade.slice(1)}</p>
            <p><strong>Custo do Gas:</strong> ${transacao.custoGas.toFixed(2)} DOT</p>
            <p><strong>Valor em ${transacao.conversao.toUpperCase()}:</strong> $${transacao.convertido.toFixed(2)}</p>
        `;

        historicoUl.appendChild(transacaoLi);
    });
}


function iniciarTimer() {
    let tempoRestante = 60; 
    const tempoElemento = document.getElementById('tempo-restante');

    timerInterval = setInterval(() => {
        tempoRestante--;
        tempoElemento.textContent = tempoRestante; 

        if (tempoRestante <= 0) {
            clearInterval(timerInterval);
            limparHistorico(); 
        }
    }, 1000);
}


function limparHistorico() {
    const historicoUl = document.getElementById('historico');
    historicoUl.innerHTML = ''; 
    historicoTransacoes = []; 
    document.getElementById('tempo-restante').textContent = '60'; 
    alert('Histórico limpo automaticamente.');
}
