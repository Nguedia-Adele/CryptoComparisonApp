import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {

	@Input() coin;
 	@Input() fiat;

  constructor() { }

  ngOnInit() {
  }
}
