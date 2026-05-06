import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

interface ClubMemberBirthday {
  name: string;
  role: string;
  ride: string;
  birthYear: number;
  birthMonth: number;
  birthDay: number;
}

interface BirthdayCard {
  name: string;
  role: string;
  ride: string;
  age: number;
  nextBirthday: Date;
  nextBirthdayLabel: string;
  daysUntilBirthday: number;
  isToday: boolean;
}

type RoutePointKind = 'start' | 'stop' | 'finish';

interface RouteWaypoint {
  kind: RoutePointKind;
  label: string;
  place: string;
  time: string;
  x: number;
  y: number;
}

interface ClubEvent {
  date: string;
  title: string;
  description: string;
  km: string;
  icon: string;
  meetingPoint: string;
  meetingTime: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  difficulty: string;
  terrain: string;
  routeSummary: string;
  leader: string;
  contact: string;
  notes: string;
  highlights: string[];
  essentials: string[];
  waypoints: RouteWaypoint[];
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  menuOpen = false;
  scrolled = false;
  activeSection = 'inicio';

  navItems = [
    ['inicio', 'Inicio'],
    ['nosotros', 'Nosotros'],
    ['cumpleanos', 'Cumpleaños'],
    ['eventos', 'Eventos'],
    ['galeria', 'Galería'],
    ['unete', 'Únete']
  ];

  events: ClubEvent[] = [
    {
      date: '26 ABR',
      title: 'Rodada Nocturna',
      description: 'Salida grupal por las carreteras del norte. Punto de encuentro: Plaza Central.',
      km: '120 KM',
      icon: '🌙',
      meetingPoint: 'Plaza Central, frente a la fuente principal',
      meetingTime: '6:00 p. m.',
      departureTime: '6:30 p. m.',
      arrivalTime: '9:40 p. m.',
      duration: '3 h 15 min',
      difficulty: 'Media',
      terrain: 'Carretera abierta con tramos iluminados y curvas suaves',
      routeSummary: 'Plaza Central → Estación Norte → Mirador del Valle → Casa Club',
      leader: 'Alex Ramírez',
      contact: '300 555 0123',
      notes: 'Rodada en caravana. No se adelanta al líder y se mantiene distancia segura en curvas.',
      highlights: ['Punto de encuentro', 'Parada técnica', 'Vista nocturna'],
      essentials: ['Casco cerrado', 'Chaleco reflectivo', 'Documentos', 'Combustible al 80%', 'Chaqueta ligera'],
      waypoints: [
        { kind: 'start', label: 'Salida', place: 'Plaza Central', time: '6:00 p. m.', x: 84, y: 228 },
        { kind: 'stop', label: 'Control', place: 'Estación Norte', time: '6:40 p. m.', x: 262, y: 178 },
        { kind: 'stop', label: 'Pausa', place: 'Mirador del Valle', time: '7:40 p. m.', x: 438, y: 132 },
        { kind: 'finish', label: 'Meta', place: 'Casa Club', time: '9:40 p. m.', x: 662, y: 98 }
      ]
    },
    {
      date: '10 MAY',
      title: 'Encuentro Regional',
      description: 'Gran concentración de clubes de la región. Música en vivo, exposición de motos y más.',
      km: '50 KM',
      icon: '🔥',
      meetingPoint: 'Estacionamiento del Club, Av. Libertad 124',
      meetingTime: '8:00 a. m.',
      departureTime: '8:30 a. m.',
      arrivalTime: '9:15 a. m.',
      duration: '1 h 20 min',
      difficulty: 'Baja',
      terrain: 'Recorrido corto por vía principal y acceso urbano',
      routeSummary: 'Casa Club → Avenida Libertad → Peaje Norte → Recinto Regional',
      leader: 'Laura Gómez',
      contact: '311 420 8891',
      notes: 'Ideal para llevar la bandera del club y hacer fotos en la llegada.',
      highlights: ['Entrada grupal', 'Foto oficial', 'Encuentro regional'],
      essentials: ['Cámara o celular', 'Credencial del club', 'Casco', 'Agua'],
      waypoints: [
        { kind: 'start', label: 'Salida', place: 'Casa Club', time: '8:00 a. m.', x: 88, y: 220 },
        { kind: 'stop', label: 'Punto medio', place: 'Avenida Libertad', time: '8:45 a. m.', x: 248, y: 192 },
        { kind: 'stop', label: 'Acceso', place: 'Peaje Norte', time: '9:00 a. m.', x: 408, y: 150 },
        { kind: 'finish', label: 'Meta', place: 'Recinto Regional', time: '9:15 a. m.', x: 648, y: 112 }
      ]
    },
    {
      date: '01 JUN',
      title: 'Tour de las Montañas',
      description: 'Ruta épica por las montañas. Paisajes impresionantes y adrenalina garantizada.',
      km: '300 KM',
      icon: '⛰️',
      meetingPoint: 'Punto Sur, sobre la autopista principal',
      meetingTime: '4:30 a. m.',
      departureTime: '5:00 a. m.',
      arrivalTime: '9:30 a. m.',
      duration: '4 h 40 min',
      difficulty: 'Alta',
      terrain: 'Ascenso de montaña con curvas cerradas y clima cambiante',
      routeSummary: 'Punto Sur → Curva La Mina → Mirador Alto → Refugio 8 → Cumbre',
      leader: 'Camilo Torres',
      contact: '312 808 7721',
      notes: 'Llevar tanque lleno, revisar frenos y llevar impermeable por si cambia el clima.',
      highlights: ['Ruta larga', 'Curvas cerradas', 'Paisaje de altura'],
      essentials: ['Impermeable', 'Guantes', 'Kit de herramientas', 'Tanque lleno', 'Luz auxiliar'],
      waypoints: [
        { kind: 'start', label: 'Salida', place: 'Punto Sur', time: '4:30 a. m.', x: 78, y: 246 },
        { kind: 'stop', label: 'Curva', place: 'Curva La Mina', time: '5:35 a. m.', x: 220, y: 202 },
        { kind: 'stop', label: 'Vista', place: 'Mirador Alto', time: '6:40 a. m.', x: 366, y: 144 },
        { kind: 'stop', label: 'Descanso', place: 'Refugio 8', time: '7:40 a. m.', x: 532, y: 108 },
        { kind: 'finish', label: 'Meta', place: 'Cumbre', time: '9:30 a. m.', x: 686, y: 70 }
      ]
    }
  ];

  selectedEvent: ClubEvent = this.events[0];

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

  birthdayToday: BirthdayCard[] = [];
  birthdayUpcoming: BirthdayCard[] = [];
  birthdayThisMonthCount = 0;
  birthdayBannerLabel = '';
  birthdayBannerTitle = '';
  birthdayBannerSubtitle = '';
  birthdayNextHighlight = '';

  private birthdayRefreshHandle: ReturnType<typeof setTimeout> | null = null;

  // Datos de ejemplo: reemplaza esta lista por los miembros reales del club.
  private readonly birthdayMembers: ClubMemberBirthday[] = [
    {
      name: 'Alex Ramírez',
      role: 'Presidente',
      ride: 'Harley-Davidson Road Glide',
      birthYear: 1988,
      birthMonth: 5,
      birthDay: 6
    },
    {
      name: 'Jorge Medina',
      role: 'Tesorero',
      ride: 'Yamaha Bolt',
      birthYear: 1991,
      birthMonth: 5,
      birthDay: 14
    },
    {
      name: 'Laura Gómez',
      role: 'Logística',
      ride: 'Kawasaki Vulcan',
      birthYear: 1994,
      birthMonth: 5,
      birthDay: 22
    },
    {
      name: 'Camilo Torres',
      role: 'Rutas',
      ride: 'BMW GS',
      birthYear: 1987,
      birthMonth: 6,
      birthDay: 3
    },
    {
      name: 'Esteban Pineda',
      role: 'Eventos',
      ride: 'Suzuki Intruder',
      birthYear: 1990,
      birthMonth: 6,
      birthDay: 18
    },
    {
      name: 'Sofía Herrera',
      role: 'Comunicaciones',
      ride: 'Royal Enfield Meteor',
      birthYear: 1996,
      birthMonth: 7,
      birthDay: 8
    }
  ];

  ngOnInit() {
    this.refreshBirthdayState();
    this.scheduleBirthdayRefresh();
  }

  ngOnDestroy() {
    if (this.birthdayRefreshHandle !== null) {
      clearTimeout(this.birthdayRefreshHandle);
      this.birthdayRefreshHandle = null;
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.scrolled = window.scrollY > 60;
    const sections = ['inicio', 'nosotros', 'cumpleanos', 'eventos', 'galeria', 'unete'];
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
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  selectEvent(event: ClubEvent) {
    this.selectedEvent = event;
    this.scrollTo('detalle-evento');
  }

  getInitials(name: string) {
    return name
      .split(' ')
      .filter(Boolean)
      .map((part) => part[0] ?? '')
      .slice(0, 2)
      .join('')
      .toUpperCase();
  }

  getRoutePoints(event: ClubEvent) {
    return event.waypoints.map((waypoint) => `${waypoint.x},${waypoint.y}`).join(' ');
  }

  getMapsUrl(event: ClubEvent) {
    const origin = event.waypoints[0]?.place ?? event.meetingPoint;
    const destination = event.waypoints[event.waypoints.length - 1]?.place ?? event.meetingPoint;
    const stops = event.waypoints.slice(1, -1).map((waypoint) => waypoint.place).join('|');
    const params = new URLSearchParams({
      api: '1',
      origin,
      destination,
      travelmode: 'driving'
    });

    if (stops) {
      params.set('waypoints', stops);
    }

    return `https://www.google.com/maps/dir/?${params.toString()}`;
  }

  private refreshBirthdayState(referenceDate = new Date()) {
    const today = this.startOfDay(referenceDate);
    const cards = this.birthdayMembers
      .map((member) => this.createBirthdayCard(member, today))
      .sort((a, b) => a.daysUntilBirthday - b.daysUntilBirthday || a.name.localeCompare(b.name));

    this.birthdayToday = cards.filter((card) => card.isToday);
    this.birthdayUpcoming = cards.filter((card) => card.daysUntilBirthday > 0 && card.daysUntilBirthday <= 30);
    this.birthdayThisMonthCount = this.birthdayMembers.filter((member) => member.birthMonth === today.getMonth() + 1).length;

    if (this.birthdayToday.length > 0) {
      this.birthdayNextHighlight = `${this.birthdayToday.length} celebraci${this.birthdayToday.length === 1 ? 'ón' : 'ones'} hoy`;
      const names = this.joinNames(this.birthdayToday.map((card) => card.name));
      this.birthdayBannerLabel = 'Hoy celebramos';
      this.birthdayBannerTitle =
        this.birthdayToday.length === 1
          ? `${this.birthdayToday[0].name} está de cumpleaños`
          : `${names} están de cumpleaños`;
      this.birthdayBannerSubtitle =
        this.birthdayToday.length === 1
          ? `${this.birthdayToday[0].name} cumple ${this.birthdayToday[0].age} años hoy.`
          : `Hoy celebran ${this.birthdayToday.length} miembros del club.`;
      return;
    }

    if (this.birthdayUpcoming.length > 0) {
      const next = this.birthdayUpcoming[0];
      this.birthdayNextHighlight = `${next.name} en ${next.daysUntilBirthday} días`;
      this.birthdayBannerLabel = 'Próximo cumpleaños';
      this.birthdayBannerTitle = `${next.name} cumple en ${next.daysUntilBirthday} días`;
      this.birthdayBannerSubtitle = `${this.birthdayUpcoming.length} miembros celebran dentro de los próximos 30 días.`;
      return;
    }

    this.birthdayNextHighlight = 'Sin datos';
    this.birthdayBannerLabel = 'Calendario activo';
    this.birthdayBannerTitle = 'Agrega cumpleaños para activar las alertas';
    this.birthdayBannerSubtitle = 'La estructura ya está lista para conectarse con los datos reales del club.';
  }

  private scheduleBirthdayRefresh() {
    const now = new Date();
    const nextRefresh = new Date(now);
    nextRefresh.setDate(now.getDate() + 1);
    nextRefresh.setHours(0, 5, 0, 0);

    const delay = Math.max(nextRefresh.getTime() - now.getTime(), 60_000);
    this.birthdayRefreshHandle = setTimeout(() => {
      this.refreshBirthdayState();
      this.scheduleBirthdayRefresh();
    }, delay);
  }

  private createBirthdayCard(member: ClubMemberBirthday, today: Date): BirthdayCard {
    const nextBirthday = this.getNextBirthday(member, today);
    const daysUntilBirthday = this.daysBetween(today, nextBirthday);

    return {
      name: member.name,
      role: member.role,
      ride: member.ride,
      age: nextBirthday.getFullYear() - member.birthYear,
      nextBirthday,
      nextBirthdayLabel: this.formatBirthdayDate(nextBirthday),
      daysUntilBirthday,
      isToday: daysUntilBirthday === 0
    };
  }

  private getNextBirthday(member: ClubMemberBirthday, today: Date) {
    const thisYearBirthday = new Date(today.getFullYear(), member.birthMonth - 1, member.birthDay);
    return this.dayKey(thisYearBirthday) < this.dayKey(today)
      ? new Date(today.getFullYear() + 1, member.birthMonth - 1, member.birthDay)
      : thisYearBirthday;
  }

  private startOfDay(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  private dayKey(date: Date) {
    return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  }

  private daysBetween(start: Date, end: Date) {
    return Math.round((this.dayKey(end) - this.dayKey(start)) / 86_400_000);
  }

  private formatBirthdayDate(date: Date) {
    return new Intl.DateTimeFormat('es-CO', {
      day: 'numeric',
      month: 'short'
    }).format(date);
  }

  private joinNames(names: string[]) {
    if (names.length === 0) {
      return '';
    }

    if (names.length === 1) {
      return names[0];
    }

    if (names.length === 2) {
      return `${names[0]} y ${names[1]}`;
    }

    return `${names.slice(0, -1).join(', ')} y ${names[names.length - 1]}`;
  }
}
