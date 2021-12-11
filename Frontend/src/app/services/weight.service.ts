import { Injectable } from '@angular/core';
import { Weight } from '../models/weight';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeightService {
  SERVER_URL = environment.SERVER_URL;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  weight: any;

  constructor(private httpClient: HttpClient) {}

  //save new weight entry
  weightEntry(weight: Weight): Observable<any> {
    return this.httpClient.post(
      `${this.SERVER_URL}/weight/weight_entry`,
      weight
    );
  }

  //get all weight entries
  public getWeight(weight: any): Observable<any> {
    return this.httpClient.get<Weight>(
      `${this.SERVER_URL}/weight//get_all_weight`,
      weight
    );
  }

  //update weight entry
  updateWeight(id: any, data: any) {
    return this.httpClient.patch(
      `${this.SERVER_URL}/weight/update_weight/${id}`,
      data
    );
  }
}
