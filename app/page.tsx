'use client';

import React, { useState } from 'react';
import { 
  Utensils, 
  MapPin, 
  Phone, 
  Star, 
  CheckCircle2,
  Menu as MenuIcon, 
  X,
  Quote,
  ExternalLink,
  Navigation
} from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedMealType, setSelectedMealType] = useState('13:30 (Comida - Menú del Día)');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleMenuBooking = () => {
    setSelectedMealType('13:30 (Comida - Menú del Día)');
    const element = document.getElementById('reservas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleCartaBooking = () => {
    setSelectedMealType('14:30 (Comida - Carta)');
    const element = document.getElementById('reservas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const centerIds = ['menu', 'especialidades', 'resenas', 'horarios', 'reservas'];
      const blockPosition = centerIds.includes(id) ? 'center' : 'start';
      element.scrollIntoView({ behavior: 'smooth', block: blockPosition });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* BARRA SUPERIOR DE ANUNCIO */}
      <div className="bg-emerald-600 text-white text-xs sm:text-sm py-2 px-4 text-center font-medium">
        🎉 ¡Menú diario disponible! · Reserva tu mesa al <span className="underline font-bold">965 555 123</span>
      </div>

      {/* HEADER / NAVEGACIÓN */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a 
            href="#" 
            onClick={handleLogoClick}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          >
            <div className="bg-emerald-600 text-white p-2.5 rounded-xl shadow-md group-hover:bg-emerald-700 transition">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-slate-900 group-hover:text-emerald-600 transition block leading-none">POLIDEPORTIVO</span>
              <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase">Restaurante · Ibi</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <a href="#especialidades" onClick={(e) => handleNavClick(e, 'especialidades')} className="hover:text-emerald-600 transition">Especialidades</a>
            <a href="#menu" onClick={(e) => handleNavClick(e, 'menu')} className="hover:text-emerald-600 transition">Carta y Menús</a>
            <a href="#resenas" onClick={(e) => handleNavClick(e, 'resenas')} className="hover:text-emerald-600 transition">Reseñas</a>
            <a href="#horarios" onClick={(e) => handleNavClick(e, 'horarios')} className="hover:text-emerald-600 transition">Horarios y Reservas</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#reservas" 
              onClick={(e) => handleNavClick(e, 'reservas')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-600/20 transition transform hover:-translate-y-0.5"
            >
              Reservar Mesa
            </a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-700 p-2 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Menú móvil */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-6 py-4 space-y-3 font-medium">
            <a href="#especialidades" onClick={(e) => { handleNavClick(e, 'especialidades'); setMobileMenuOpen(false); }} className="block py-2 text-slate-700">Especialidades</a>
            <a href="#menu" onClick={(e) => { handleNavClick(e, 'menu'); setMobileMenuOpen(false); }} className="block py-2 text-slate-700">Carta y Menús</a>
            <a href="#resenas" onClick={(e) => { handleNavClick(e, 'resenas'); setMobileMenuOpen(false); }} className="block py-2 text-slate-700">Reseñas</a>
            <a href="#horarios" onClick={(e) => { handleNavClick(e, 'horarios'); setMobileMenuOpen(false); }} className="block py-2 text-slate-700">Horarios y Reservas</a>
            <a href="#reservas" onClick={(e) => { handleNavClick(e, 'reservas'); setMobileMenuOpen(false); }} className="block w-full text-center bg-emerald-600 text-white py-3 rounded-xl shadow">Reservar Mesa</a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 z-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('/PLATO2.jpg')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 px-3.5 py-1.5 rounded-full text-sm font-semibold backdrop-blur-md">
              <Star className="w-4 h-4 fill-emerald-400" /> 4.4 / 5 en Google Reviews (+900 valoraciones)
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              Bon material, bon preu, bon servei. ¡Un lloc excepcional!
            </h1>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              Disfruta de nuestra nueva gestión con novedades en platos, almuerzos populares y carnes a la brasa junto a las instalaciones deportivas de Ibi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#reservas" 
                onClick={(e) => handleNavClick(e, 'reservas')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-center font-bold px-8 py-4 rounded-xl shadow-xl shadow-emerald-600/30 transition transform hover:-translate-y-0.5 text-lg"
              >
                Reservar una Mesa
              </a>
              <a 
                href="#menu" 
                onClick={(e) => handleNavClick(e, 'menu')}
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-center font-bold px-8 py-4 rounded-xl backdrop-blur-md transition text-lg"
              >
                Ver Carta y Menú
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800 text-slate-300 text-sm">
              <div>
                <span className="block font-bold text-white text-xl">100%</span> Casero
              </div>
              <div>
                <span className="block font-bold text-white text-xl">Terraza</span> Soleada
              </div>
              <div>
                <span className="block font-bold text-white text-xl">Parking</span> Fácil
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE ESPECIALIDADES */}
      <section id="especialidades" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-emerald-600 font-bold uppercase tracking-wider text-sm">Nuestra Cocina</h2>
            <p className="text-3xl sm:text-4xl font-black text-slate-900">Especialidades que conquistan</p>
            <p className="text-slate-600">Novedades en platos, raciones y especialidades de la casa elaboradas con el mejor producto.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition group">
              <div className="h-56 bg-cover bg-center group-hover:scale-105 transition duration-500" style={{ backgroundImage: "url('/PLATO1.jpg')" }}></div>
              <div className="p-6 space-y-3">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider bg-emerald-100 px-2.5 py-1 rounded-md">Tradición & Brasa</span>
                <h3 className="text-xl font-bold text-slate-900">Carnes Asadas y Platos Estrella</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Cortes excelentes y especialidades preparadas al horno y brasa con guarnición casera.</p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition group">
              <div className="h-56 bg-cover bg-center group-hover:scale-105 transition duration-500" style={{ backgroundImage: "url('/PLATO2.jpg')" }}></div>
              <div className="p-6 space-y-3">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider bg-emerald-100 px-2.5 py-1 rounded-md">Delicatessen</span>
                <h3 className="text-xl font-bold text-slate-900">Puntilla y Tapas del Territorio</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Exquisitos platos principales y raciones con productos frescos ideales para compartir.</p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition group">
              <div className="h-56 bg-cover bg-center group-hover:scale-105 transition duration-500" style={{ backgroundImage: "url('/PLATO3.jpg')" }}></div>
              <div className="p-6 space-y-3">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider bg-emerald-100 px-2.5 py-1 rounded-md">Repostería</span>
                <h3 className="text-xl font-bold text-slate-900">Postres Caseros y Artesanales</h3>
                <p className="text-slate-600 text-sm leading-relaxed">El broche de oro perfecto para tus comidas con nuestros postres de obrador y toques dulces.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MENÚ DIARIO Y CARTA COMPLETA */}
      <section id="menu" className="py-20 bg-slate-900 text-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-emerald-400 font-bold uppercase tracking-wider text-sm">Gastronomía</h2>
            <p className="text-3xl sm:text-4xl font-black">Menú Diario y Carta</p>
            <p className="text-slate-400">Opciones equilibradas, abundantes y adaptadas tanto para deportistas como para familias.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* COLUMNA 1: MENÚ DEL DÍA */}
            <div className="bg-slate-800/80 border border-slate-700/60 p-8 rounded-3xl space-y-6 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center border-b border-slate-700 pb-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-emerald-400">Menú del Día</h3>
                    <p className="text-xs text-slate-400 mt-1">Actualizado diariamente por el restaurante</p>
                  </div>
                  <span className="bg-emerald-500 text-slate-950 font-black px-4 py-2 rounded-2xl text-xl shadow-lg">14,50 €</span>
                </div>

                <div className="space-y-5 text-slate-300">
                  <div className="border-b border-slate-700/60 pb-4">
                    <span className="text-sky-400 font-bold block mb-2 text-sm uppercase tracking-wide">Primeros Platos (A elegir):</span>
                    <ul className="space-y-1.5 text-sm list-disc list-inside text-slate-200">
                      <li>Crema suave de calabaza con picatostes caseros</li>
                      <li>Ensalada mediterránea de atún y aguacate</li>
                      <li>Macarrones gratinados a la boloñesa</li>
                    </ul>
                  </div>

                  <div className="border-b border-slate-700/60 pb-4">
                    <span className="text-sky-400 font-bold block mb-2 text-sm uppercase tracking-wide">Segundos Platos (A elegir):</span>
                    <ul className="space-y-1.5 text-sm list-disc list-inside text-slate-200">
                      <li>Entrecot de ternera a la brasa con guarnición</li>
                      <li>Salmón fresco a la plancha con verduras al wok</li>
                      <li>Pechuga de pollo marinada con patatas caseras</li>
                    </ul>
                  </div>

                  <div>
                    <span className="text-sky-400 font-bold block mb-1 text-sm uppercase tracking-wide">Bebida, Pan y Postre o Café:</span>
                    <p className="text-sm text-slate-300">Incluye agua, refresco, cerveza o copa de vino, pan y postre casero (tarta de la abuela o fruta del tiempo) o café.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button 
                  onClick={handleMenuBooking}
                  className="block text-center w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl transition shadow-md cursor-pointer"
                >
                  Reservar este Menú
                </button>
              </div>
            </div>

            {/* COLUMNA 2: LA CARTA COMPLETA */}
            <div className="bg-slate-800/80 border border-slate-700/60 p-8 rounded-3xl space-y-6 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center border-b border-slate-700 pb-4 mb-6">
                  <h3 className="text-2xl font-bold text-emerald-400">Nuestra Carta</h3>
                  <span className="text-xs bg-slate-700 text-slate-300 px-3 py-1 rounded-full font-bold">Variedad y Calidad</span>
                </div>

                <div className="space-y-5 text-slate-300">
                  <div className="border-b border-slate-700/60 pb-3">
                    <span className="text-sky-400 font-bold block mb-2 text-sm uppercase tracking-wide">🥩 Carnes a la Brasa</span>
                    <div className="flex justify-between text-sm py-1">
                      <span>Chuletón de Vaca Vieja (apx. 1kg)</span>
                      <span className="text-emerald-400 font-semibold">28,00 €</span>
                    </div>
                    <div className="flex justify-between text-sm py-1">
                      <span>Picaña de Ternera Estilo Ibi</span>
                      <span className="text-emerald-400 font-semibold">16,50 €</span>
                    </div>
                  </div>

                  <div className="border-b border-slate-700/60 pb-3">
                    <span className="text-sky-400 font-bold block mb-2 text-sm uppercase tracking-wide">🐟 Pescados Frescos</span>
                    <div className="flex justify-between text-sm py-1">
                      <span>Lomo de Bacalao al Horno con patatas</span>
                      <span className="text-emerald-400 font-semibold">15,00 €</span>
                    </div>
                    <div className="flex justify-between text-sm py-1">
                      <span>Puntillitas de Andalucía crujientes</span>
                      <span className="text-emerald-400 font-semibold">12,00 €</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-sky-400 font-bold block mb-2 text-sm uppercase tracking-wide">🥗 Entrantes y Picoteo</span>
                    <div className="flex justify-between text-sm py-1">
                      <span>Jamón Ibérico de Bellota con pan con tomate</span>
                      <span className="text-emerald-400 font-semibold">18,50 €</span>
                    </div>
                    <div className="flex justify-between text-sm py-1">
                      <span>Bravas de la Casa (salsa secreta)</span>
                      <span className="text-emerald-400 font-semibold">6,50 €</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button 
                  onClick={handleCartaBooking}
                  className="block text-center w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-3.5 rounded-xl transition shadow-md cursor-pointer"
                >
                  Consultar Toda la Carta
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECCIÓN DE RESEÑAS */}
      <section id="resenas" className="py-20 bg-slate-50 border-y border-slate-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-sm font-bold">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" /> Reseñas Verificadas de Google (+900 opiniones)
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Lo que opinan nuestros clientes</h2>
            <p className="text-slate-600">La confianza y satisfacción de quienes nos visitan cada semana es nuestra mejor carta de presentación.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative flex flex-col justify-between">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-100" />
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-amber-400" />))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "La nueva gestión ofrece oferta con novedades de platos y entrepans. ¡Muy recomendable!"
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900 text-sm">Alfredo Guarner Coll</p>
                  <p className="text-xs text-emerald-600 font-medium">Local Guide · Google Reviews</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative flex flex-col justify-between">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-100" />
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-amber-400" />))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "Vaig sempre q puc. Molt bo sempre i Jose Luis de lo millor."
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900 text-sm">Rosa Maria Vila Tapia</p>
                  <p className="text-xs text-emerald-600 font-medium">Local Guide · Google Reviews</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative flex flex-col justify-between">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-100" />
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-amber-400" />))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "Bon material, bon preu, bon servei. És un bon bon bon lloc!!!"
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900 text-sm">Carlos Vilaplana Gilabert</p>
                  <p className="text-xs text-emerald-600 font-medium">Local Guide · Google Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE HORARIOS Y RESERVAS */}
      <section id="horarios" className="py-20 bg-emerald-900 text-white relative overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="bg-emerald-800 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Planifica tu visita</span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight">Horarios y Ubicación</h2>
              <p className="text-emerald-100 text-lg">
                Ven a disfrutar de nuestro espacio junto al polideportivo municipal. Consulta nuestros horarios oficiales:
              </p>

              {/* LISTA DE HORARIOS ACTUALIZADOS */}
              <div className="bg-emerald-950/60 p-6 rounded-2xl border border-emerald-800/60 space-y-3 text-sm">
                <div className="flex justify-between py-1.5 border-b border-emerald-800/40">
                  <span className="font-semibold text-emerald-200">Dimarts / Martes</span>
                  <span className="font-mono text-white">9:00 – 20:00</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-emerald-800/40">
                  <span className="font-semibold text-emerald-200">Dimecres / Miércoles</span>
                  <span className="font-mono text-white">9:00 – 20:00</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-emerald-800/40">
                  <span className="font-semibold text-emerald-200">Dijous / Jueves</span>
                  <span className="font-mono text-white">9:00 – 20:00</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-emerald-800/40">
                  <span className="font-semibold text-emerald-200">Divendres / Viernes</span>
                  <span className="font-mono text-white">9:00 – 23:00</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-emerald-800/40">
                  <span className="font-semibold text-emerald-200">Dissabte / Sábado</span>
                  <span className="font-mono text-white">9:00 – 23:00</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-emerald-800/40">
                  <span className="font-semibold text-emerald-200">Diumenge / Domingo</span>
                  <span className="font-mono text-white">10:00 – 17:00</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="font-semibold text-emerald-200">Dilluns / Lunes</span>
                  <span className="font-mono text-rose-300 font-bold">Tancat / Cerrado</span>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-emerald-100">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-emerald-300 shrink-0" />
                  <span className="text-sm">Zona Polideportivo Municipal, Ibi (Alicante)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-300 shrink-0" />
                  <span className="text-sm">Teléfono de Reservas: 965 555 123</span>
                </div>
              </div>

              {/* BLOQUE DE MAPA Y ENLACE A GOOGLE MAPS */}
              <a 
                href="https://maps.google.com/?q=Polideportivo+Municipal+Ibi+Alicante" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block bg-emerald-950/80 hover:bg-emerald-950 border border-emerald-700/60 p-4 rounded-2xl transition shadow-lg mt-4 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-600 text-white p-3 rounded-xl group-hover:scale-110 transition">
                      <Navigation className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">Cómo llegar en Google Maps</h4>
                      <p className="text-emerald-300 text-xs">Pulsa para abrir la ubicación y obtener indicaciones</p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 transition" />
                </div>
              </a>

            </div>

            {/* FORMULARIO DE RESERVA */}
            <div id="reservas" className="bg-white text-slate-800 p-8 sm:p-10 rounded-3xl shadow-2xl scroll-mt-28">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="bg-emerald-100 text-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">¡Reserva enviada con éxito!</h3>
                  <p className="text-slate-600">Nos pondremos en contacto contigo en breve para confirmarla. ¡Gracias!</p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 bg-emerald-600 text-white px-6 py-2.5 rounded-xl font-medium cursor-pointer"
                  >
                    Hacer otra reserva
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-2xl font-black text-slate-900 mb-6">Reserva Online</h3>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Tu Nombre</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="Ej. Juan Pérez" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600 bg-slate-50"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Teléfono</label>
                      <input 
                        required 
                        type="tel" 
                        placeholder="600 000 000" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600 bg-slate-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Comensales</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600 bg-slate-50">
                        <option>1 persona</option>
                        <option>2 personas</option>
                        <option>4 personas</option>
                        <option>6+ personas (Grupo)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Fecha</label>
                      <input 
                        required 
                        type="date" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600 bg-slate-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Hora y Opción</label>
                      <select 
                        value={selectedMealType}
                        onChange={(e) => setSelectedMealType(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600 bg-slate-50 text-sm font-medium text-slate-900"
                      >
                        <option>09:30 (Almuerzo Popular)</option>
                        <option>10:30 (Almuerzo Popular)</option>
                        <option>13:30 (Comida - Menú del Día)</option>
                        <option>14:30 (Comida - Carta)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Observaciones (Opcional)</label>
                    <textarea 
                      rows={3} 
                      placeholder="Alergias, trona para bebé, etc." 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600 bg-slate-50"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-600/30 transition text-lg cursor-pointer"
                  >
                    Confirmar Reserva
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-600 text-white p-2 rounded-lg">
              <Utensils className="w-5 h-5" />
            </div>
            <span className="text-white font-bold tracking-tight">Restaurante Polideportivo Ibi</span>
          </div>

          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Todos los derechos reservados. Creado para impulsar tu negocio local.
          </p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">Aviso Legal</a>
            <a href="#" className="hover:text-white transition">Privacidad</a>
          </div>
        </div>
      </footer>

    </div>
  );
}