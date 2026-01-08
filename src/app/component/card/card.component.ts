import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CountPipe } from '../pipe/count.pipe';

@Component({
  selector: 'app-card',
  imports: [NzCardModule,NzFlexModule,NzIconModule,NzGridModule,CountPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.less'
})
export class CardComponent {
  @Input() courseObj: any = {}
  @Output() messageEvent = new EventEmitter<any>()

  sendMessage() {
    this.messageEvent.emit('this is an output message')
  }
}
