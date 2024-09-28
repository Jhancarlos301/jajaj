        
// INICIO BUSCADOR

const searchIcon = document.getElementById('searchIcon');
const searchModal = document.getElementById('searchModal');
const closeModal = document.getElementById('closeModal');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const noResults = document.getElementById('noResults');
const spinner = document.getElementById('spinner');

const opciones = [
    { id: 1, titulo: 'Delimonster', descripcion: 'Comidas rapidas', imagen: './assets/img/dalimos.webp', url: './lugares/delimosnter.html' },
    { id: 2, titulo: 'Las hamburguesas del pueblo', descripcion: 'Comidas rapidas', imagen: './assets/img/lashamburguesas.webp', url: '#' },
    { id: 3, titulo: 'El barril de troy', descripcion: 'Comidas', imagen: './assets/img/elbarril.webp', url: '#' },
    { id: 4, titulo: 'Los chorizuos del pueblo', descripcion: 'Comidas rapidas', imagen: './assets/img/los-chorizuos-del-pueblo.webp', url: '#' },
    { id: 4, titulo: 'Sabor callejero - Food', descripcion: 'Comidas rapida', imagen: './assets/img/saborcallejero.webp', url: '#' },
    { id: 5, titulo: 'Wabi', descripcion: 'Comidas', imagen: './assets/img/wabi-logo.webp', url: '#' },
    { id: 6, titulo: 'Delicias el sarko viral', descripcion: 'Comidas rapidas', imagen: './assets/img/sarkoviral.webp', url: '#' },
    { id: 7, titulo: 'Salchipapas el caleño', descripcion: 'Comidas rapidas', imagen: './assets/img/elbarril.webp', url: '#' },
    { id: 8, titulo: 'Cakareos', descripcion: 'Comidas rapidas', imagen: './assets/img/cakareos-logo (1).webp', url: '#' },
    { id: 9, titulo: 'Callejero', descripcion: 'Comidas rapidas', imagen: './assets/img/callejero-log.webp', url: '#' },
    { id: 10, titulo: 'Bocados', descripcion: 'Comidas rapidas', imagen: './assets/img/bocados-logo.webp', url: '#' },
    // { id: 11, titulo: 'El barril de troy', descripcion: 'Comidas', imagen: './assets/img/elbarril.webp', url: '#' },
    // { id: 12, titulo: 'El barril de troy', descripcion: 'Comidas', imagen: './assets/img/elbarril.webp', url: '#' },
    // { id: 13, titulo: 'El barril de troy', descripcion: 'Comidas', imagen: './assets/img/elbarril.webp', url: '#' },
    // { id: 14, titulo: 'El barril de troy', descripcion: 'Comidas', imagen: './assets/img/elbarril.webp', url: '#' },
    // { id: 15, titulo: 'El barril de troy', descripcion: 'Comidas', imagen: './assets/img/elbarril.webp', url: '#' },
    // { id: 16, titulo: 'El barril de troy', descripcion: 'Comidas', imagen: './assets/img/elbarril.webp', url: '#' },
    // { id: 17, titulo: 'El barril de troy', descripcion: 'Comidas', imagen: './assets/img/elbarril.webp', url: '#' },
    // { id: 18, titulo: 'El barril de troy', descripcion: 'Comidas', imagen: './assets/img/elbarril.webp', url: '#' },
    // { id: 19, titulo: 'El barril de troy', descripcion: 'Comidas', imagen: './assets/img/elbarril.webp', url: '#' },
    // { id: 20, titulo: 'El barril de troy', descripcion: 'Comidas', imagen: './assets/img/elbarril.webp', url: '#' },
    // { id: 21, titulo: 'El barril de troy', descripcion: 'Comidas', imagen: './assets/img/elbarril.webp', url: '#' },
    // { id: 22, titulo: 'El barril de troy', descripcion: 'Comidas', imagen: './assets/img/elbarril.webp', url: '#' },
    // { id: 23, titulo: 'El barril de troy', descripcion: 'Comidas', imagen: './assets/img/elbarril.webp', url: '#' },
    // { id: 24, titulo: 'El barril de troy', descripcion: 'Comidas', imagen: './assets/img/elbarril.webp', url: '#' },
    // { id: 25, titulo: 'El barril de troy', descripcion: 'Comidas', imagen: './assets/img/elbarril.webp', url: '#' },
    // { id: 26, titulo: 'El barril de troy', descripcion: 'Comidas', imagen: './assets/img/elbarril.webp', url: '#' },
    // { id: 27, titulo: 'El barril de troy', descripcion: 'Comidas', imagen: './assets/img/elbarril.webp', url: '#' },
    // { id: 28, titulo: 'El barril de troy', descripcion: 'Comidas', imagen: './assets/img/elbarril.webp', url: '#' },
    // { id: 29, titulo: 'El barril de troy', descripcion: 'Comidas', imagen: './assets/img/elbarril.webp', url: '#' },
    // { id: 30, titulo: 'El barril de troy', descripcion: 'Comidas', imagen: './assets/img/elbarril.webp', url: '#' },
    // { id: 31, titulo: 'El barril de troy', descripcion: 'Comidas', imagen: './assets/img/elbarril.webp', url: '#' },
    // { id: 32, titulo: 'El barril de troy', descripcion: 'Comidas', imagen: './assets/img/elbarril.webp', url: '#' },
    // { id: 33, titulo: 'El barril de troy', descripcion: 'Comidas', imagen: './assets/img/elbarril.webp', url: '#' },
    // Añade más opciones aquí
];

function toggleModal() {
    searchModal.classList.toggle('opacity-0');
    searchModal.classList.toggle('pointer-events-none');
    document.body.classList.toggle('overflow-hidden');
    searchModal.querySelector('div').classList.toggle('scale-95');
    searchModal.querySelector('div').classList.toggle('scale-100');
    if (!searchModal.classList.contains('opacity-0')) {
        searchInput.focus();
    }
}

searchIcon.addEventListener('click', toggleModal);
closeModal.addEventListener('click', toggleModal);

searchInput.addEventListener('input', debounce(handleSearch, 300));

function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        spinner.classList.remove('hidden');
        timeoutId = setTimeout(() => {
            func.apply(this, args);
            spinner.classList.add('hidden');
        }, delay);
    };
}

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredResults = opciones.filter(
        opcion =>
            opcion.titulo.toLowerCase().includes(searchTerm) ||
            opcion.descripcion.toLowerCase().includes(searchTerm)
    );

    displayResults(filteredResults);
}

function displayResults(results) {
    searchResults.innerHTML = '';
    if (results.length === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
        results.forEach(result => {
            const li = document.createElement('li');
            li.className = 'mb-2 animate-fade-in-down';
            li.innerHTML = `
                <a href="${result.url}" target="_blank" rel="noopener noreferrer" class="flex items-center p-2 hover:bg-gray-100 rounded-md transition-colors duration-200">
                    <img src="${result.imagen}" alt="${result.titulo}" class="w-12 h-12 object-cover rounded-md mr-4">
                    <div>
                        <h3 class="font-semibold text-emerald-600 ">${result.titulo}</h3>
                        <p class="text-sm text-gray-600">${result.descripcion}</p>
                    </div>
                </a>
            `;
            searchResults.appendChild(li);
        });
    }
}

// Cerrar el modal al hacer clic fuera de él
searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) {
        toggleModal();
    }
});

// Prevenir que el modal se cierre al hacer clic dentro de él
searchModal.querySelector('div').addEventListener('click', (e) => {
    e.stopPropagation();
});

// FINAL BUSCADOR




document.addEventListener('DOMContentLoaded', function() {
    var TrandingSlider = new Swiper('.tranding-slider', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  });



