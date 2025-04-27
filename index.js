document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const pontos = document.querySelectorAll('.ponto');
    const numero = document.querySelector('.numero');
    let currentIndex = 0;
    let interval;
  
    function updateItems() {
      items.forEach((item, index) => {
        item.classList.toggle('ativo', index === currentIndex);
      });
  
      pontos.forEach((ponto, index) => {
        ponto.classList.toggle('ativo', index === currentIndex);
      });
  
      numero.textContent = String(currentIndex + 1).padStart(2, '0');
    }
  
    function nextItem() {
      currentIndex = (currentIndex + 1) % items.length;
      updateItems();
    }
  
    function prevItem() {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateItems();
    }
  
    // animação funcional a cada 5 segundos
    function startAutoSlide() {
      interval = setInterval(nextItem, 5000); 
    }
  
    function stopAutoSlide() {
      clearInterval(interval);
    }
  
    prevBtn.addEventListener('click', () => {
      stopAutoSlide();
      prevItem();
      startAutoSlide();
    });
  
    nextBtn.addEventListener('click', () => {
      stopAutoSlide();
      nextItem();
      startAutoSlide();
    });
  
    // Pausar ao passar o mouse
    document.querySelector('.carousel').addEventListener('mouseenter', stopAutoSlide);
    document.querySelector('.carousel').addEventListener('mouseleave', startAutoSlide);
  
    updateItems();
    startAutoSlide();
  });