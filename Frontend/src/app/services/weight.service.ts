import { Injectable } from '@angular/core';
import { WeightEntry } from '../models/weight';
import { map } from 'rxjs/operators';
import { WEIGHTS } from '../models/mock_weights';
import {
  HttpClient,
  HttpHeaders, 
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders().set('Content-Type', 'application/json')
}

@Injectable({
  providedIn: 'root',
})
export class WeightService {
  SERVER_URL = environment.SERVER_URL;
  weights = WEIGHTS;
  idCounter = WEIGHTS.length;

  constructor(private httpClient: HttpClient) {}

  //save new weight entry
  addWeight(weightEntry: WeightEntry): Observable<any> {
    this.idCounter++;
    weightEntry.id = this.idCounter;

    return this.httpClient.post<WeightEntry>(
      `${this.SERVER_URL}/weight/weight_entry`,
      weightEntry, httpOptions
    )
  }

  //get all weight entries
  getWeight(): Observable<WeightEntry[]> {
    return this.httpClient.get<WeightEntry[]>(
      `${this.SERVER_URL}/weight//get_all_weight`)
  }

  //update weight entry
  updateWeight(id: any, data: any) {
    return this.httpClient.patch(
      `${this.SERVER_URL}/weight/update_weight/${id}`,
      data, httpOptions
      )
  }
}
