import { Component, Input, OnInit } from '@angular/core';
import { ChickenService } from '../service/chicken.service';
import { Chicken } from '../models/chicken';

@Component({
  selector: 'app-list-chicken',
  templateUrl: './list-chicken.component.html',
  styleUrls: ['./list-chicken.component.css']
})
export class ListChickenComponent implements OnInit {
 chickens !:any;
@Input() chicken:any
  constructor(private chickenService:ChickenService) { }

  ngOnInit(): void {
    this.chickenService.getChickens().subscribe((data) => {
      this.chickens = data
     // console.log(this.chickens);
    });
  }

}
