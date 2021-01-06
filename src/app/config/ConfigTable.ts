class ConfigTableModel {
  seeLabel!: string;
  registryLabel!: string;
  searchLabel!: string;
  seeRegistryTableLabel!: string;
  seeTotalRegistryLabel!: string;
  seeTotalRegistry!: number[];
}

const ConfigTable: ConfigTableModel = {
  seeLabel: `Mostrar`,
  registryLabel: `Registros`,
  searchLabel: `Ingrese texto a Buscar`,
  seeRegistryTableLabel: `Mostrando registros @ de @ de un total de @`,
  seeTotalRegistryLabel: `Mostrar @ Registros`,
  seeTotalRegistry: [5, 10, 25, 50]
};

export default ConfigTable;
