import { InputModel } from '../models/input-model';

class AnalystClientModel {
  title!: string;
  input!: InputModel[];
}

export const ConfigAnalystClient: AnalystClientModel = {
  title: `Análisis del cliente`,
  input: [
    {
      id: `promedio-edad`,
      label: `Promedio de edad de los clientes`,
      placeHolder: ``,
      type: `number`,
      column: `50`,
      value: 0
    }, {
      id: `desviacion-estandar-edad`,
      label: `Desviación estándar de la edad de los clientes`,
      placeHolder: ``,
      type: `number`,
      column: `50`,
      value: 0
    }
  ]
};
