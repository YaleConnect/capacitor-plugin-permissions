import { WebPlugin } from '@capacitor/core';

import type { Permission, PermissionsPlugin, PermissionStatus } from './definitions';

export class PermissionsWeb extends WebPlugin implements PermissionsPlugin {
  async query(permission: { name: Permission; }): Promise<{ status: PermissionStatus; }> {
    switch (permission.name) {
      case 'microphone':
        return navigator.mediaDevices.getUserMedia({ audio: true }).then(() => ({ status: 'granted' }), () => ({ status: 'denied' }));
      default:
        throw new Error('Unknown permission');
    }
  }
  async request(permission: { name: Permission; }): Promise<{ status: Extract<PermissionStatus, 'granted' | 'denied'>; }> {
    switch (permission.name) {
      case 'microphone':
        return navigator.mediaDevices.getUserMedia({ audio: true }).then(() => ({ status: 'granted' }), () => ({ status: 'denied' }));
      default:
        throw new Error('Unknown permission');
    }
  }  
}
