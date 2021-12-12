import { Component, Input, OnInit } from '@angular/core';
import { WeightEntry } from './../../models/weight';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { WeightService } from '../../services/weight.service';
import * as moment from 'moment';

@Component({
  selector: 'app-weight-item',
  templateUrl: './weight-item.component.html',
  styleUrls: ['./weight-item.component.scss']
})
export class WeightItemComponent implements OnInit {
  faEdit = faEdit;
  showEdit = false;
  myValue = 1;
  weightChanges = new Map();

  @Input()
  weight!: WeightEntry;

  constructor(private weightService: WeightService) { }

  ngOnInit(): void {
  }

 formatDate(date: any) {
    return moment(date).format('DD/MM/YYYY');
  }

  toggleEdit() {
    this.showEdit = !this.showEdit;
  }

  prepareWeightChanges(newValue: any, key: any) {
    this.weightChanges.set(key, newValue);
  }

  updateWeight() {
    if (!this.weightChanges.size) {
      this.showEdit = false;
      return;
    }

    this.weightService.updateWeight(this.weight.id, this.weightChanges)
    .subscribe(() => {
      this.showEdit = false;
    })
  }
}
