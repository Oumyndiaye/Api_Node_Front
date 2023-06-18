import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChickenService } from '../service/chicken.service';
import { Chicken } from '../models/chicken';
import { FormBuilder, FormControl, FormGroup ,Validators} from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  chicken!: Chicken []|any;
  newChicken!: Chicken []|any;
  editForm!: FormGroup [] | any;
  ChickenForm !: FormGroup | any;

  constructor(
    private route: ActivatedRoute,
    private chickenService: ChickenService,
    private router: Router,
    private location:Location,
    private formBuilder: FormBuilder
  ) {}

ngOnInit() { 
const id = this.route.snapshot.params['id']; 
this.chickenService.getChicken(id).subscribe(data=>{
  this.chicken = data;       

this.editForm = this.formBuilder.group({
  name: [this.chicken.name],
  birthday: [this.chicken.birthday],
  weight: [this.chicken.weight]
      });
});
const newChicken = new Chicken(
  this.ChickenForm.value.name,
  this.ChickenForm.value.birthday,
  this.ChickenForm.value.weight
);  
      console.log(newChicken);
      
}


saveChanges() {
    const id = this.route.snapshot.params['id']; 
    // Call modifyChicken to update the chicken
    this.chickenService.modifyChicken(id, this.chicken).subscribe(()=>{
      this.router.navigate(['']);
    })  
  }
  onSubmit() {
    const id = this.route.snapshot.params['id']; 
    console.log(id);
      this.chickenService.modifyChicken(id,this.chicken._id).subscribe(() => {
      this.router.navigate([''])
      });
  }
  onUpdateData(id: string, newData: any) {
    //const id = this.route.snapshot.params['id']; 

    this.chickenService.modifyChicken(id, newData)
      .subscribe(
        response => {
          // Traitement de la réponse de l'API
          console.log('Données mises à jour avec succès :', response);
          this.router.navigate([''])
          
        },
        error => {
          // Gestion des erreurs
          console.error('Erreur lors de la mise à jour des données :', error);
        }
      );
  }
  
   
cancel() { 
  // Annulation des modifications et redirection vers la vue de détail du chicken 
  this.back();
  
}

back(): void {
  this.location.back();
}

}
