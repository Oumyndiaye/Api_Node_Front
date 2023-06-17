import { Injectable } from '@angular/core';
import { Chicken } from '../models/chicken';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ChickenService {

  constructor(private http: HttpClient) { }

  addChicken(chicken: Chicken): Observable<any> {
    return this.http.post<any>(`${environment.api_url}`,chicken);
  }
  getChickens(): Observable<any> {
    return this.http.get<any>(`${environment.api_url}`);
  }
  getChicken(id:string ): Observable<any> {
    return this.http.get<any>(`${environment.api_url}/${id}`);
  }
  modifyChicken(id:string ,idChicken:string): Observable<any> {
    return this.http.put<any>(`${environment.api_url}/${id}`,{
      "idChicken":idChicken
    });
  }
  deleteChicken(id :number):Observable<any>{
    return this.http.delete<any>(`${environment.api_url}/${id}`,{}
    );
  }

}
