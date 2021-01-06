import { Component, OnInit } from '@angular/core';
import ConfigTable from '../../config/ConfigTable';
import { ModuleTableService } from '../../services/modules/module-table.service';

@Component({
  selector: 'app-atom-table-see-row',
  template: `
    <section class="d-flex align-items-center">
      <p>{{seeTotalRegistryLabel[0]}}</p>
      <div atom-input-select
           class="mx-2"
           [identifierInput]="'total-registry'"
           [activateLabel]="false"
           [optionsData]="seeTotalRegistry"
           [valueInput]="howManyRegistryCanWeSee"
           (valueInputChange)="setValueInput($event)"
      ></div>
      <p>{{seeTotalRegistryLabel[1]}}</p>
    </section>
  `,
  styles: [],
})
export class AtomTableSeeRowComponent implements OnInit {

  seeTotalRegistry: number[];
  seeTotalRegistryLabel: string[];
  howManyRegistryCanWeSee: number;

  constructor(private moduleTableService: ModuleTableService) {
    this.seeTotalRegistry = ConfigTable.seeTotalRegistry;
    this.seeTotalRegistryLabel = ConfigTable.seeTotalRegistryLabel.split('@');
    this.howManyRegistryCanWeSee = moduleTableService.howManyRegistryCanWeSee;
  }

  ngOnInit(): void {
  }

  setValueInput(valueInput: number): void {
    this.howManyRegistryCanWeSee = valueInput;
    this.moduleTableService.howManyRegistryCanWeSee = this.howManyRegistryCanWeSee;
  }
}
