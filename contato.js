document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-contato');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensagem = document.getElementById('mensagem').value.trim();
  
      if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        return;
      }
  
      // Simula o envio do formulário
      alert('Mensagem enviada com sucesso!');
      form.reset();
    });
  });