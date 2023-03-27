import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombreP: string = '';
  descrip: string = '';

  constructor(private sProyectos: ProyectosService, private router: Router) { }

  ngOnInit() { }

  onCreate(): void {
    const expe = new Proyectos(this.nombreP, this.descrip);
    this.sProyectos.save(expe).subscribe(
      data => {
        alert("Proyectos añadida");
        this.router.navigate([''])
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}