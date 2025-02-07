import { WebPlugin } from '@capacitor/core';
import type { Permission, PermissionsPlugin, PermissionStatus } from './definitions';
export declare class PermissionsWeb extends WebPlugin implements PermissionsPlugin {
    query(permission: {
        name: Permission;
    }): Promise<{
        status: PermissionStatus;
    }>;
    request(permission: {
        name: Permission;
    }): Promise<{
        status: Extract<PermissionStatus, 'granted' | 'denied'>;
    }>;
}
