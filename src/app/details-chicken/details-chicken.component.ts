import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChickenService } from '../service/chicken.service';
import { Location } from '@angular/common';
import { Chicken } from '../models/chicken';

@Component({
  selector: 'app-details-chicken',
  templateUrl: './details-chicken.component.html',
  styleUrls: ['./details-chicken.component.css']
})
export class DetailsChickenComponent implements OnInit {
  identifiant !: string;
  chicken : Chicken []  | any;
  constructor(private location:Location,private route : ActivatedRoute,private chickenService:ChickenService,  private router: Router) { }

  ngOnInit(): void {
    this.identifiant = this.route.snapshot.params['id'];    
    this.chickenService.getChicken(this.identifiant).subscribe(data=>{
    this.chicken = data;     
     
    });
  }
  back(): void {
    this.location.back();
  }

  deleteChicken(identifiant: string |any) {
    this.chickenService.deleteChicken(identifiant).subscribe(()=>{
      this.router.navigate(['']); // Redirige vers la liste des chickens après la suppression
    });  

  }
    
}
