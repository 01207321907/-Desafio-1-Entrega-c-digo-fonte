const totalVagas = 30;
let vagasCadastradas = [];

function showCadastro() {
    document.getElementById('cadastro').style.display = 'block';
    document.getElementById('listar').style.display = 'none';
    document.getElementById('disponiveis').style.display = 'none';
}

function showListar() {
    document.getElementById('cadastro').style.display = 'none';
    document.getElementById('listar').style.display = 'block';
    document.getElementById('disponiveis').style.display = 'none';
}

function showDisponiveis() {
    document.getElementById('cadastro').style.display = 'none';
    document.getElementById('listar').style.display = 'none';
    document.getElementById('disponiveis').style.display = 'block';
    atualizarVagasDisponiveis();
}

document.getElementById('reservaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const placa = document.getElementById('placa').value;
    const proprietario = document.getElementById('proprietario').value;
    const apartamento = document.getElementById('apartamento').value;
    const bloco = document.getElementById('bloco').value;
    const modelo = document.getElementById('modelo').value;
    const cor = document.getElementById('cor').value;
    const vaga = parseInt(document.getElementById('vaga').value);

    vagasCadastradas.push(vaga);
    
    console.log({
        placa,
        proprietario,
        apartamento,
        bloco,
        modelo,
        cor,
        vaga
    });

    alert('Cadastro realizado com sucesso!');

    this.reset();

    const listaVagas = document.getElementById('listaVagas');
    const li = document.createElement('li');
    li.innerHTML = `Vaga: ${vaga}, Veículo: ${modelo} (${cor}), Proprietário: ${proprietario} 
                    <span class="delete-icon" onclick="deleteVaga(this, ${vaga})">🗑️</span>`;
    listaVagas.appendChild(li);
    
    atualizarVagasDisponiveis();
});

function deleteVaga(icon, vaga) {
    if (confirm('Tem certeza que deseja deletar esta vaga?')) {
        const vagaItem = icon.parentElement;
        vagaItem.remove();
        vagasCadastradas = vagasCadastradas.filter(v => v !== vaga);
        atualizarVagasDisponiveis();
    }
}

function atualizarVagasDisponiveis() {
    const vagasDisponiveis = document.getElementById('vagasDisponiveis');
    vagasDisponiveis.innerHTML = '';

    for (let i = 1; i <= totalVagas; i++) {
        if (!vagasCadastradas.includes(i)) {
            const li = document.createElement('li');
            li.textContent = `Vaga ${i} disponível`;
            vagasDisponiveis.appendChild(li);
        }
    }
}
