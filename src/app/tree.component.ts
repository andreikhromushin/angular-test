import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-tree',
  template: `
    <ul>
      <ng-container *ngFor="let item of filteredData">
        <li>
          {{ item.name }}
          <app-tree [data]="data" [parentId]="item.id"></app-tree>
        </li>
      </ng-container>
    </ul>
  `,
})
export class TreeComponent {
  @Input() data: any[]
  @Input() parentId: number

  constructor() {
    this.data = []
    this.parentId = 0
  }

  get filteredData() {
    return this.data.filter(item => item.parentId === this.parentId)
  }
}
