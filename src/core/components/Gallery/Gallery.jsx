import React, { useState } from 'react';

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(3);

  const projects = [
    { id: 1, title: 'Campana #1', description: 'Descripción detallada del proyecto Campana #1 que muestra la innovación y creatividad.', imageUrl: '/src/assets/img/campana_1.jpg' },
    { id: 2, title: 'Campana #2', description: 'Descripción detallada del proyecto Campana #2 con todos los detalles importantes.', imageUrl: '/src/assets/img/campana_2.jpg' },
    { id: 3, title: 'Campana #3', description: 'Descripción detallada del proyecto Campana #3 resaltando sus características únicas.', imageUrl: '/src/assets/img/campana_3.jpg' },
    { id: 4, title: 'Campana #4', description: 'Descripción detallada del proyecto Campana #4 mostrando su impacto y valor.', imageUrl: '/src/assets/img/campana_2.jpg' },
    { id: 5, title: 'Campana #5', description: 'Descripción detallada del proyecto Campana #5 con su enfoque innovador.', imageUrl: '/src/assets/img/campana_1.jpg' },
    { id: 6, title: 'Campana #6', description: 'Descripción detallada del proyecto Campana #6 y sus logros principales.', imageUrl: '/src/assets/img/campana_2.jpg' },
    { id: 7, title: 'Campana #7', description: 'Descripción detallada del proyecto Campana #7 revelando su potencial.', imageUrl: '/src/assets/img/campana_3.jpg' }
  ];

  const handleNext = () => setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  const handlePrev = () => setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  const getVisibleProjects = () => {
    const visibleCount = 7;
    const half = Math.floor(visibleCount / 2);
    let items = [];
    for (let i = -half; i <= half; i++) {
      let index = activeIndex + i;
      if (index < 0) index = projects.length + index;
      if (index >= projects.length) index = index - projects.length;
      items.push({ project: projects[index], position: i });
    }
    return items;
  };

  const getProjectStyles = (position) => {
    const baseStyles = {
      position: 'absolute',
      transition: 'all 0.5s ease-in-out',
      borderRadius: '3rem',
      backgroundColor: '#FFFFFF',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
    };

    switch (position) {
      case 0: // Centro
        return {
          ...baseStyles,
          width: '300px',
          height: '470px',
          zIndex: 30,
          transform: 'scale(1) translateX(0)',
          opacity: 1,
          left: 'calc(50% - 150px)',
        };
      case -1: // Izquierda cercano
      case 1: // Derecha cercano
        return {
          ...baseStyles,
          width: '300px',
          height: '470px',
          zIndex: 20,
          transform: `scale(0.9) translateX(${position < 0 ? '-' : ''}10%)`,
          opacity: 0.9,
          left: position < 0 
            ? 'calc(50% - 270px)' 
            : 'calc(50% + 70px)',
        };
      case -2: // Izquierda lejano
      case 2: // Derecha lejano
        return {
          ...baseStyles,
          width: '300px',
          height: '470px',
          zIndex: 10,
          transform: `scale(0.8) translateX(${position < 0 ? '-' : ''}20%)`,
          opacity: 0.8,
          left: position < 0 
            ? 'calc(50% - 390px)' 
            : 'calc(50% + 190px)',
        };
      case -3: // Extremo izquierdo
      case 3: // Extremo derecho
        return {
          ...baseStyles,
          width: '300px',
          height: '470px',
          zIndex: 5,
          transform: `scale(0.7) translateX(${position < 0 ? '-' : ''}30%)`,
          opacity: 0.7,
          left: position < 0 
            ? 'calc(50% - 510px)' 
            : 'calc(50% + 310px)',
        };
      default:
        return {
          display: 'none',
        };
    }
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3rem 1rem',
      position: 'relative', // Added to ensure proper positioning
      overflow: 'hidden', // Prevent any overflow
    },
    header: {
      textAlign: 'center',
      marginBottom: '2rem',
    },
    title: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '0.5rem',
    },
    subtitle: {
      fontSize: '1rem',
      color: 'white',
    },
    navigationContainer: {
      position: 'relative', 
      width: '100%', 
      maxWidth: '1400px', // Increased max-width
      height: '500px', 
      overflow: 'visible', // Changed from hidden to visible
    },
    button: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(184, 115, 51, 0.7)',
    border: 'none',
    color: 'white',
    fontSize: '1.5rem', // Ajuste de tamaño para móviles
    width: '60px', // Botones más grandes
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    zIndex: 40,
  },
  buttonLeft: {
    left: '10px', // Más cerca del borde para móviles
  },
  buttonRight: {
    right: '10px',
  },
  };

  return (
    <div className="flex-grow bg-[url('/img/backgroundProducts.jpg')] bg-cover sm:bg-center sm:bg-no-repeat" style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>PROYECTOS QUE HABLAN POR SÍ MISMOS</h1>
        <p style={styles.subtitle}>
          Explora nuestra colección de proyectos innovadores y creativos
        </p>
      </div>
      
      <div style={styles.navigationContainer}>
        {getVisibleProjects().map(({ project, position }) => (
          <div 
            key={project.id}
            style={getProjectStyles(position)}
          >
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ flex: 1, padding: '1rem' }}>
                <div style={{ width: '100%', height: '100%', borderRadius: '3rem', overflow: 'hidden' }}>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div style={{ flex: 1, padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#78350F', marginBottom: '0.5rem' }}>{project.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#4A5568', overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3 }}>{project.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Botones de Navegación */}
        <button
          onClick={handlePrev}
          style={{ ...styles.button, ...styles.buttonLeft }}
          aria-label="Anterior"
          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(184, 115, 51, 1)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(184, 115, 51, 0.7)'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m11 17l-5-5l5-5m7 10l-5-5l5-5"/>
          </svg>
        </button>
        <button
          onClick={handleNext}
          style={{ ...styles.button, ...styles.buttonRight }}
          aria-label="Siguiente"
          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(184, 115, 51, 1)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(184, 115, 51, 0.7)'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 -scale-x-100" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m11 17l-5-5l5-5m7 10l-5-5l5-5"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Gallery;