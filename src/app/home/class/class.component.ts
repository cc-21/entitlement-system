import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface classInfo{
  name?:string,
  type?:string
}

@Component({
  selector: 'app-class',
  imports: [],
  templateUrl: './class.component.html',
  styleUrl: './class.component.less'
})
export class ClassComponent {

  constructor(public router:ActivatedRoute) {
    this.router.queryParams.subscribe((params:classInfo) => {
      console.log(params)
    })
  }
}
