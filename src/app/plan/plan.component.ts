import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-plan',
  imports: [RouterModule],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.less'
})
export class PlanComponent {

  constructor(public router:ActivatedRoute) {
    this.router.params.subscribe((params) => {
      console.log(params)
    })
  }
}
