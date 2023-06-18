import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Chicken } from '../models/chicken';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChickenService } from '../service/chicken.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-chicken',
  templateUrl: './add-chicken.component.html',
  styleUrls: ['./add-chicken.component.css']
})
export class AddChickenComponent implements OnInit {
  ChickenForm !: FormGroup | any;


  constructor(private chickenService:ChickenService,private formBuilder: FormBuilder,private router:Router,private location:Location) {}

  ngOnInit() {
    this.ChickenForm = this.formBuilder.group({
      name: ['', Validators.required],
      birthday: [''],
      weight: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.ChickenForm.valid) {

      const newChicken = new Chicken(
        this.ChickenForm.value.name,
        this.ChickenForm.value.birthday,
        this.ChickenForm.value.weight
      );  
      this.chickenService.addChicken(newChicken).subscribe(() => {
        console.log('Chicken added successfully.');
        this.router.navigate([''])
      });
    }
  }
  
  back(): void {
    this.location.back();
  }


}

