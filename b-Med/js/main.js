/* Script para interação do Portal b-Med */

document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todos os elementos com a classe 'locked'
    const lockedElements = document.querySelectorAll('.locked');

    // Adiciona o evento de clique para mostrar o alerta
    lockedElements.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault(); // Impede o link de abrir

            // Simulação de Modal/Alerta de Login
            // Num sistema real, isso abriria o modal de autenticação
            alert("🔒 Acesso Restrito ao Observatório b-Med\n\nPor favor, faça Login ou Crie sua Conta para acessar as ferramentas e análises completas.");
        });
    });

});