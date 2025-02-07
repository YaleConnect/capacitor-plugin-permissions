export type PermissionStatus = 'granted' | 'denied' | 'notDetermined' | 'prompt'

export type Permission = 'microphone'

export interface PermissionsPlugin {
  query(permission: { name: Permission }): Promise<{ status: PermissionStatus }>;
  request(permission: { name: Permission }): Promise<{ status: Extract<PermissionStatus, 'granted' | 'denied'> }>;
}