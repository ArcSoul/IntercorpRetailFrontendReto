import {ButtonModel} from '../models/button-model';

class DocumentosModel {
  title!: string;
  columns!: string[];
}

const ConfigListClient: DocumentosModel = {
  title: `Lista de clientes`,
  columns: [`Nombres`, `Apellidos`, `Edad`, `Fecha de nacimiento`, `Fecha probable de muerte`],
};

export default ConfigListClient;
