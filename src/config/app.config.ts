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
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner'],
  tenantName: 'Organization',
  applicationName: 'HRManagementApplication',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage users',
    'Manage organizations',
    "Create, edit and delete user's avatar",
    "Create, edit and delete organization's image",
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/3ed4521b-65fa-48f1-9a79-c16d05606a91',
};
