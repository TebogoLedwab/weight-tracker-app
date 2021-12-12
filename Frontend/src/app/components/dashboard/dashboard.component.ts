import { Component, OnInit } from '@angular/core';
import { WeightService } from '../../services/weight.service';
import { WeightEntry } from '../../models/weight';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { AlertService } from 'src/app/services/alert.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  faPlus = faPlus;
  weightEntry: WeightEntry = new WeightEntry();


  constructor( private weightService: WeightService,
    public alert: AlertService) { }


  save(f: NgForm): void {
      if(!this.weightEntry.weight || this.weightEntry.date) {
        this.alert.info('You need to enter a weight and a date')
        return;
      } else if (this.weightEntry.weight <= 0) {
        this.alert.info('The weight must be a positive number');
        return;
      }

      this.weightService.addWeight(this.weightEntry).subscribe((server_data) => {
        //if saving weight failed
        if ( server_data.message ==  "Failed to save weight") {
          this.alert.error(server_data.message);
          return;
        }
        
          //If weight saves successfully
          if(server_data.message ==  "Weight sucessfulyy saved") {
            this.alert.success(server_data.message);
            this.weightEntry = new WeightEntry();
          }
      })
  }

  
  ngOnInit(): void {
  }
}
