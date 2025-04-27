document.addEventListener('DOMContentLoaded', () => {
    const botoesAdicionar = document.querySelectorAll('.btn-adicionar');
  
    botoesAdicionar.forEach((botao) => {
      botao.addEventListener('click', () => {
        const produtoNome = botao.parentElement.querySelector('.produto-nome').textContent;
        alert(`O produto "${produtoNome}" foi adicionado ao carrinho!`);
      });
    });
  });