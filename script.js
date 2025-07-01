// Datos de cada alojamiento, ordenados según el data-index de las cards
const alojamientos = [
  {
    titulo: "Machu Picchu, Perú",
    imagen: "peru.jpg",
    descripcion: "Hermoso destino histórico y arqueológico en Perú.",
    precio: "$70.000 ARS"
  },
  {
    titulo: "Cataratas del Iguazú, Argentina/Brasil",
    imagen: "iguazu.jpg",
    descripcion: "Maravilla natural de cascadas imponentes en la frontera.",
    precio: "$45.000 ARS"
  },
  {
    titulo: "Gran Cañón, EE.UU. (Arizona)",
    imagen: "cañon.jpg",
    descripcion: "Paisajes espectaculares del cañón natural más famoso de EE.UU.",
    precio: "$50.000 ARS"
  },
  {
    titulo: "Río de Janeiro, Brasil",
    imagen: "janeiro.jpg",
    descripcion: "Ciudad vibrante con playas icónicas y Carnaval mundialmente famoso.",
    precio: "$60.000 ARS"
  },
  {
    titulo: "Niágara Falls, Canadá/EE.UU.",
    imagen: "ñiagara.jpg",
    descripcion: "Cataratas impresionantes en la frontera entre Canadá y EE.UU.",
    precio: "$55.000 ARS"
  },
  {
    titulo: "Patagonia – El Calafate y Glaciar Perito Moreno, Argentina",
    imagen: "patagonia.jpg",
    descripcion: "Paisajes glaciares únicos y naturaleza virgen en la Patagonia.",
    precio: "$65.000 ARS"
  },
  {
    titulo: "París, Francia",
    imagen: "paris.avif",
    descripcion: "La ciudad del amor, con la Torre Eiffel y cultura sin igual.",
    precio: "€120 por noche"
  },
  {
    titulo: "Santorini, Grecia",
    imagen: "grecia.jpg",
    descripcion: "Isla con casas blancas y vistas espectaculares al mar Egeo.",
    precio: "€90 por noche"
  },
  {
    titulo: "Roma, Italia",
    imagen: "noche2.jpg",
    descripcion: "Historia milenaria, ruinas y gastronomía exquisita.",
    precio: "€100 por noche"
  },
  {
    titulo: "Barcelona, España",
    imagen: "barcelona.jpg",
    descripcion: "Playas, arquitectura de Gaudí y vida cultural intensa.",
    precio: "€95 por noche"
  },
  {
    titulo: "Ámsterdam, Países Bajos",
    imagen: "amsterdam.jpg",
    descripcion: "Canales pintorescos, museos y ambiente cosmopolita.",
    precio: "€110 por noche"
  },
  {
    titulo: "Edimburgo, Escocia",
    imagen: "escocia.jpg",
    descripcion: "Castillos históricos y paisajes impresionantes.",
    precio: "£80 por noche"
  },
  {
    titulo: "Tokio, Japón",
    imagen: "tokio.jpg",
    descripcion: "Ciudad ultramoderna con tradiciones ancestrales.",
    precio: "¥15,000 por noche"
  },
  {
    titulo: "Bali, Indonesia",
    imagen: "bali.jpg",
    descripcion: "Paraíso tropical con playas y templos únicos.",
    precio: "$50 por noche"
  },
  {
    titulo: "Bangkok, Tailandia",
    imagen: "tailandia.jpg",
    descripcion: "Capital vibrante con mercados y cultura tailandesa.",
    precio: "$45 por noche"
  },
  {
    titulo: "Delhi / Agra (Taj Mahal), India",
    imagen: "noche2.jpg",
    descripcion: "Monumentos históricos y patrimonio cultural.",
    precio: "$40 por noche"
  },
  {
    titulo: "Seúl, Corea del Sur",
    imagen: "seul.jpg",
    descripcion: "Ciudad moderna con rica historia y gastronomía.",
    precio: "₩70,000 por noche"
  },
  {
    titulo: "Dubái, EAU",
    imagen: "dubai.jpg",
    descripcion: "Rascacielos impresionantes y lujo en el desierto.",
    precio: "AED 300 por noche"
  },
  {
    titulo: "Ciudad del Cabo, Sudáfrica",
    imagen: "cabo.jpg",
    descripcion: "Belleza natural y cultura diversa.",
    precio: "$80 por noche"
  },
  {
    titulo: "Marrakech, Marruecos",
    imagen: "dia.jpg",
    descripcion: "Mercados coloridos y arquitectura única.",
    precio: "$70 por noche"
  },
  {
    titulo: "Safaris en Kenia (Masai Mara / Amboseli)",
    imagen: "marruecos.jpg",
    descripcion: "Experiencias de vida salvaje inolvidables.",
    precio: "$150 por noche"
  },
  {
    titulo: "Zanzíbar, Tanzania",
    imagen: "zanzibar.jpg",
    descripcion: "Playas paradisíacas y cultura swahili.",
    precio: "$90 por noche"
  },
  {
    titulo: "Victoria Falls, Zimbabue/Zambia",
    imagen: "victoria_falss.jpg",
    descripcion: "Cataratas majestuosas en la frontera de Zimbabwe y Zambia.",
    precio: "$100 por noche"
  },
  {
    titulo: "Leptis Magna, Libia",
    imagen: "libia.jpg",
    descripcion: "Cataratas majestuosas en la frontera de Zimbabwe y Zambia.",
    precio: "$100 por noche"
  }

  
];



// Modo oscuro / claro
const toggleBtn = document.getElementById("toggleMode");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Modal abrir con datos según índice
function openModal(index) {
  const modal = document.getElementById("modal");
  const modalImg = modal.querySelector(".modal-img");
  const modalTitulo = modal.querySelector(".modal-info h2");
  const modalDescripcion = modal.querySelector(".modal-info p");
  const modalPrecio = modal.querySelector(".modal-info p + p");

  const data = alojamientos[index];

  modalImg.src = data.imagen;
  modalImg.alt = data.titulo;
  modalTitulo.textContent = data.titulo;
  modalDescripcion.textContent = data.descripcion;
  modalPrecio.innerHTML = `<strong>Precio por noche:</strong> ${data.precio}`;

  modal.style.display = "flex";
}

// Eventos carrusel
document.querySelectorAll(".carousel-container").forEach(container => {
  const carousel = container.querySelector(".carousel");
  const next = container.querySelector(".next");
  const prev = container.querySelector(".prev");

  next.addEventListener("click", () => {
    carousel.scrollBy({ left: 280, behavior: 'smooth' }); // 260 + margin
  });

  prev.addEventListener("click", () => {
    carousel.scrollBy({ left: -280, behavior: 'smooth' });
  });
});

// Asignar evento click a cada card según su data-index para abrir modal
document.querySelectorAll(".card").forEach(card => {
  const index = parseInt(card.dataset.index, 10);
  card.addEventListener("click", () => {
    openModal(index);
  });
});

const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");

// Cerrar modal
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => {
  if (e.target == modal) modal.style.display = "none";
};

// Mostrar animación al hacer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2,
});

document.querySelectorAll('.carousel-container').forEach(container => {
  observer.observe(container);
});

// Animación de confirmación reserva
document.querySelectorAll('.btn-reservar').forEach(boton => {
  boton.addEventListener('click', () => {
    const confirmacion = document.getElementById('reservaConfirmacion');
    confirmacion.classList.add('show');
    setTimeout(() => {
      confirmacion.classList.remove('show');
    }, 3000);
  });
});

// Simular que el usuario quedó logueado después del registro:
localStorage.setItem("usuario_logueado", "true");
localStorage.removeItem("usuario_logueado");


// Guardar reserva en carrito
// Validar reserva solo si el usuario está logueado
document.querySelectorAll('.btn-reservar').forEach(boton => {
  boton.addEventListener('click', () => {
    const usuarioLogueado = localStorage.getItem("usuario_logueado");

    if (!usuarioLogueado) {
      alert("Debes registrarte o iniciar sesión para reservar.");
      window.location.href = "registro.html"; // Redirige al registro
      return;
    }

    const modal = document.getElementById('modal');
    const titulo = modal.querySelector(".modal-info h2").textContent;
    const precio = modal.querySelector(".modal-info p + p").textContent.replace("Precio por noche:", "").trim();

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push({ titulo, precio });
    localStorage.setItem("carrito", JSON.stringify(carrito));

    const confirmacion = document.getElementById('reservaConfirmacion');
    confirmacion.classList.add('show');
    setTimeout(() => {
      confirmacion.classList.remove('show');
    }, 3000);
  });
});


