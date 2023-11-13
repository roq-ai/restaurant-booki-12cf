interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Restaurant Manager'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View restaurant information', 'View menu', 'Create reservations', 'Create orders'],
  ownerAbilities: ['Manage restaurant information', 'Manage menus', 'Manage reservations', 'Manage orders'],
  getQuoteUrl: 'https://app.roq.ai/proposal/4c2ca643-aa31-492c-b6c3-5fd5be068b21',
};
