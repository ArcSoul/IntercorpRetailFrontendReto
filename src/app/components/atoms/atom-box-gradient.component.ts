import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-atom-box-gradient',
  template: `
    <section
      [ngStyle]="setGradient()"
      class="p-3 rounded-lg"
    >
      <ng-content></ng-content>
    </section>
  `,
  styles: [],
})
export class AtomBoxGradientComponent implements OnInit {

  @Input() rgbaGradientSuperior!: number[];
  @Input() rgbaGradientInferior!: number[];

  rgbaSuperiorComplete!: string;
  rgbaInferiorComplete!: string;

  constructor() {
  }

  ngOnInit(): void {
    this.rgbaSuperiorComplete = this.rgbaGradientSuperior[0] + ',' +
      this.rgbaGradientSuperior[1] + ',' +
      this.rgbaGradientSuperior[2] + ',' +
      this.rgbaGradientSuperior[3];
    this.rgbaInferiorComplete = this.rgbaGradientInferior[0] + ',' +
      this.rgbaGradientInferior[1] + ',' +
      this.rgbaGradientInferior[2] + ',' +
      this.rgbaGradientInferior[3];
  }

  setGradient(): object {
    return {
      background: `linear-gradient(0deg, rgba(${this.rgbaInferiorComplete}) 0%, rgba(${this.rgbaSuperiorComplete}) 100%)`
    };
  }
}
