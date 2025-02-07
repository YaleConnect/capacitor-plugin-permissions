import { WebPlugin } from '@capacitor/core';
export class PermissionsWeb extends WebPlugin {
    async query(permission) {
        switch (permission.name) {
            case 'microphone':
                return navigator.mediaDevices.getUserMedia({ audio: true }).then(() => ({ status: 'granted' }), () => ({ status: 'denied' }));
            default:
                throw new Error('Unknown permission');
        }
    }
    async request(permission) {
        switch (permission.name) {
            case 'microphone':
                return navigator.mediaDevices.getUserMedia({ audio: true }).then(() => ({ status: 'granted' }), () => ({ status: 'denied' }));
            default:
                throw new Error('Unknown permission');
        }
    }
}
//# sourceMappingURL=web.js.map