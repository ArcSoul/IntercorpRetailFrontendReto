import {Injectable} from '@angular/core';

@Injectable()
export class ModuleTableService {

  private _valorDeLaSeleccion: number;
  private _howManyRegistryCanWeSee: number;

  get valorDeLaSeleccion(): number {
    return this._valorDeLaSeleccion;
  }

  set valorDeLaSeleccion(value: number) {
    this._valorDeLaSeleccion = value;
  }

  get howManyRegistryCanWeSee(): number {
    return this._howManyRegistryCanWeSee;
  }

  set howManyRegistryCanWeSee(value: number) {
    this._howManyRegistryCanWeSee = value;
  }

  constructor() {
    this._howManyRegistryCanWeSee = 10;
    this._valorDeLaSeleccion = 10;
  }
}
