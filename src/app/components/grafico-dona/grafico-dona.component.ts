import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename no-inferrable-types
  @Input() labels: string[];
  @Input() data: number[];
  @Input() type: string;
  @Input() leyenda: string;

  constructor() {
  }

  ngOnInit() {
  }

}
