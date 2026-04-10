import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  menuOpen = false;
  scrolled = false;
  activeSection = 'inicio';

  navItems = [
    ['inicio', 'Inicio'],
    ['nosotros', 'Nosotros'],
    ['eventos', 'Eventos'],
    ['galeria', 'Galería'],
    ['unete', 'Únete']
  ];

  events = [
    {
      date: '26 ABR',
      title: 'Rodada Nocturna',
      description: 'Salida grupal por las carreteras del norte. Punto de encuentro: Plaza Central.',
      km: '120 KM',
      icon: '🌙'
    },
    {
      date: '10 MAY',
      title: 'Encuentro Regional',
      description: 'Gran concentración de clubes de la región. Música en vivo, exposición de motos y más.',
      km: '50 KM',
      icon: '🔥'
    },
    {
      date: '01 JUN',
      title: 'Tour de las Montañas',
      description: 'Ruta épica por las montañas. Paisajes impresionantes y adrenalina garantizada.',
      km: '300 KM',
      icon: '⛰️'
    }
  ];

  stats = [
    { value: '120+', label: 'Miembros' },
    { value: '8', label: 'Años de historia' },
    { value: '50+', label: 'Rodadas al año' },
    { value: '15K+', label: 'KM recorridos' }
  ];

  gallery = [
    { img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', alt: 'Rodada grupal' },
    { img: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&q=80', alt: 'Moto en carretera' },
    { img: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&q=80', alt: 'Encuentro de club' },
    { img: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&q=80', alt: 'Moto custom' },
    { img: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&q=80', alt: 'Carretera libre' },
    { img: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80', alt: 'Moto clásica' }
  ];

  particles = Array.from({ length: 12 }, (_, i) => i + 1);

  ngOnInit() {}

  @HostListener('window:scroll', [])
  onScroll() {
    this.scrolled = window.scrollY > 60;
    const sections = ['inicio', 'nosotros', 'eventos', 'galeria', 'unete'];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection = id;
        }
      }
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollTo(id: string) {
    this.menuOpen = false;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
