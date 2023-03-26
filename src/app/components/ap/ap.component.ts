import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ap',
  templateUrl: './ap.component.html',
  styleUrls: ['./ap.component.css']
})
export class APComponent implements OnInit{

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


login(){
  this.router.navigate(['/login'])
}

}
