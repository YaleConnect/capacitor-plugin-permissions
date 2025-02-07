var capacitorPermissions = (function (exports, core) {
    'use strict';

    const Permissions = core.registerPlugin('Permissions', {
        web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.PermissionsWeb()),
    });

    class PermissionsWeb extends core.WebPlugin {
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

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        PermissionsWeb: PermissionsWeb
    });

    exports.Permissions = Permissions;

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
