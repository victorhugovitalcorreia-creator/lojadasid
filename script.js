// Função para enviar mensagem personalizada para o WhatsApp
function comprarProduto(nomeProduto, preco) {
    const numeroWhatsapp = "5561996835697"; // COLOQUE O NÚMERO DA SIDNEIA AQUI (com DDD)
    const mensagem = `Olá Sidneia! Tenho interesse no produto: *${nomeProduto}* que vi no site (Valor: ${preco}).`;
    
    // Codifica a mensagem para o link do navegador
    const link = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`;
    
    // Abre o WhatsApp em uma nova aba
    window.open(link, '_blank');
}

// Seleciona todos os botões de comprar
document.querySelectorAll('.buy-btn').forEach((botao, index) => {
    botao.addEventListener('click', () => {
        // Pega o nome e o preço do card de produto onde o botão foi clicado
        const card = botao.parentElement;
        const nome = card.querySelector('h3').innerText;
        const preco = card.querySelector('.price').innerText;
        
        comprarProduto(nome, preco);
    });
});

// Efeito de mudar a cor do cabeçalho ao rolar a página
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#311b92'; // Roxo mais escuro ao descer
        header.style.transition = '0.5s';
    } else {
        header.style.backgroundColor = '#4a148c';
    }
});