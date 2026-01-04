import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wx-aplan',
  imports: [],
  templateUrl: './wx-aplan.component.html',
  styleUrl: './wx-aplan.component.less'
})
export class WxAplanComponent {
  constructor(public router:ActivatedRoute) {
    this.router.queryParams.subscribe((params:any) => {
      console.log(params.name)
    })
  }
}
