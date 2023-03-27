import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent  implements OnInit {
  educacion: Educacion = new Educacion("","");
  
    constructor(private sEducacion: EducacionService,
       private activatedRouter: ActivatedRoute,
        private router: Router) {}
  
    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.sEducacion.detail(id).subscribe(data => {
        this.educacion = data;
      }, err => {
        alert("error al modificar Educacion");
        this.router.navigate(['']);
      }
      )
    }
  
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.sEducacion.update(id, this.educacion).subscribe(
        data => {
          this.router.navigate(['']);
        }, err =>{
          alert("Error al modificar exp");
          this.router.navigate(['']);
        }
      )
    }
  }