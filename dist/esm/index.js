import { registerPlugin } from '@capacitor/core';
const Permissions = registerPlugin('Permissions', {
    web: () => import('./web').then((m) => new m.PermissionsWeb()),
});
export * from './definitions';
export { Permissions };
//# sourceMappingURL=index.js.map