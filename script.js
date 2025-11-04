// Selecciona todos los botones con la clase 'toggle-button'
document.querySelectorAll('.toggle-button').forEach(button => {
    // Agrega un evento 'click' a cada botón
    button.addEventListener('click', () => {
        // Selecciona el siguiente elemento hermano (el contenido extra)
        const content = button.nextElementSibling;

        // Alterna la clase 'show' para mostrar/ocultar el contenido
        content.classList.toggle('show');

        // Cambia el texto del botón dependiendo del estado del contenido
        button.textContent = content.classList.contains('show') ? 'Ver menos' : 'Ver más';
    });
});
