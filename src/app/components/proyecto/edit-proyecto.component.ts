import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  expLab: Proyectos = new Proyectos("","");
  
    constructor(private sExperiencia: ProyectosService,
       private activatedRouter: ActivatedRoute,
        private router: Router) {}
  
    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.sExperiencia.detail(id).subscribe(data => {
        this.expLab = data;
      }, err => {
        alert("error al modificar Experiencia");
        this.router.navigate(['']);
      }
      )
    }
  
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.sExperiencia.update(id, this.expLab).subscribe(
        data => {
          this.router.navigate(['']);
        }, err =>{
          alert("Error al modificar exp");
          this.router.navigate(['']);
        }
      )
    }
  }
  
