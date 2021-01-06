import { InputModel } from '../models/input-model';

export class CreateClientModel {
  title!: string;
  input!: InputModel[];
}

export const ConfigCreateClient: CreateClientModel = {
  title: `Crear cliente`,
  input: [
    {
      id: `nombres`,
      label: `Nombres`,
      placeHolder: `Nombres del cliente`,
      type: `text`,
      column: `50`,
      value: ``
    }, {
      id: `apellidos`,
      label: `Apellidos`,
      placeHolder: `Apellido del cliente`,
      type: `text`,
      column: `50`,
      value: ``
    }, {
      id: `edad`,
      label: `Edad`,
      placeHolder: `Edad del cliente`,
      type: `number`,
      column: `50`,
      value: 0
    }, {
      id: `fecha-de-nacimiento`,
      label: `Fecha de nacimiento`,
      placeHolder: `Edad del cliente`,
      type: `date`,
      column: `50`,
      value: ``
    }
  ]
};
