import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.less'
})
export class LayoutComponent {
  version:string = '0.0.1'

  @ViewChild('ref')
  ref!:TemplateRef<any>

  @ViewChild('ref', {read:ViewContainerRef})
  refContainer!:ViewContainerRef

  ngAfterViewInit(){
    const view = this.ref.createEmbeddedView(null)
    this.refContainer.insert(view)
  }
}
