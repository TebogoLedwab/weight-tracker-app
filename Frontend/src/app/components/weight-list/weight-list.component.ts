import { Component, OnInit } from '@angular/core';
import { WeightService } from '../../services/weight.service';

@Component({
  selector: 'app-weight-list',
  templateUrl: './weight-list.component.html',
  styleUrls: ['./weight-list.component.scss'],
})
export class WeightListComponent implements OnInit {
  public weights:any = [];
  
  constructor(private weightService: WeightService) {}

  getWeights(): void {
    this.weightService
      .getWeight()
      .subscribe(weights => (this.weights = weights));
  }
  ngOnInit(): void {
    this.getWeights();
  }
}
