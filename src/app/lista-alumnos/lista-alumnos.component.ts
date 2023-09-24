import { Component } from '@angular/core';

interface Alumno{
  nombre: string;
  apellido: string
  fechaInscripcion: Date;
  aprobado: boolean;
}

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent {
alumnos: Alumno[] = [
  {
    nombre: 'Cristian ',
    apellido: 'Aguero',
    fechaInscripcion: new Date(),
    aprobado: true,
  },
  {
    nombre: 'Sebastian ',
    apellido: 'Molina',
    fechaInscripcion: new Date(),
    aprobado: false,
  },
  {
    nombre: 'Lucas',
    apellido: 'Romero',
    fechaInscripcion: new Date(),
    aprobado: false,
  },
  {
    nombre: 'Jesica',
    apellido: 'Rulli',
    fechaInscripcion: new Date(),
    aprobado:true,
  }

]
}
