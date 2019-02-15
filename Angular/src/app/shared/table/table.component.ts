import { Component, OnInit, Input, Output } from '@angular/core';
import BasisBeheerOverzicht from '../../basisBeheerOverzicht';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'mg-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit
{
  @Input() headers: [];
  @Input() data: BasisBeheerOverzicht;
  @Output() selected = new EventEmitter<number>();
  @Output() verwijder = new EventEmitter<BasisBeheerOverzicht>();

  constructor()
  {

  }

  ngOnInit()
  {

  }

  getValue(item: BasisBeheerOverzicht, header: string): any
  {
    return item.getValue(header);
  }

  onSelect(item: BasisBeheerOverzicht): void
  {
    this.selected.emit(item.getValue("Id"));
  }

  onDelete(item: BasisBeheerOverzicht): void
  {
    this.verwijder.emit(item);
  }
}
