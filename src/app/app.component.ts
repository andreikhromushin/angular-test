import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <button (click)="switchView()">Переключить отображение</button>
    <ng-container *ngIf="listView">
    <h3>Отображение в виде списка</h3>
      <ul>
        <li *ngFor="let item of data">
          {{ item.name }}
        </li>
      </ul>
    </ng-container>
    <ng-container *ngIf="!listView">
    <h3>Отображение в виде дерева</h3>
      <ul>
        <li *ngFor="let item of rootData">
          {{ item.name }}
          <app-tree [data]="data" [parentId]="item.id"></app-tree>
        </li>
      </ul>
    </ng-container>
  `,
})
export class AppComponent {
  data = [
    {
      name: "Test 1",
      id: 1,
      parentId: null
    },
    {
      name: "Test 2.1",
      id: 2,
      parentId: 1
    },
    {
      name: "Test 3.1",
      id: 3,
      parentId: 1
    },
    {
      name: "Test 4",
      id: 4,
      parentId: null
    },
    {
      name: "Test 5.4",
      id: 5,
      parentId: 4
    },
    {
      name: "Test 6.5",
      id: 6,
      parentId: 4
    },
    {
      name: "Test 7.4",
      id: 7,
      parentId: 4
    },
    {
      name: "Test 8",
      id: 8,
      parentId: null
    },
    {
      name: "Test 9.7",
      id: 9,
      parentId: 7
    },
    {
      name: "Test 10.7",
      id: 10,
      parentId: 7
    }
  ];
  listView = true

  get rootData() {
    return this.data.filter(item => !item.parentId)
  }

  switchView() {
    this.listView = !this.listView
  }
}