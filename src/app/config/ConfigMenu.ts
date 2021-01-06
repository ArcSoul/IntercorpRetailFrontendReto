class MenuModel {
  id!: string;
  title!: string;
  icon!: string;
  type!: string;
  url!: string;
}

const ConfigMenu: MenuModel[] = [
  {
    id: `home`,
    title: `Inicio`,
    icon: `fa-home`,
    type: `item`,
    url: `/`,
  },
  {
    id: `create-client`,
    title: `Crear cliente`,
    icon: `fa-plus`,
    type: `item`,
    url: `/create-client`,
  },
  {
    id: `list-client`,
    title: `Lista de clientes`,
    icon: `fa-list-alt`,
    type: `item`,
    url: `/list-client`,
  },
  {
    id: `analyst-client`,
    title: `Análisis de clientes`,
    icon: `fa-chart-bar`,
    type: `item`,
    url: `/analyst-client`,
  },
];

export { ConfigMenu, MenuModel };
