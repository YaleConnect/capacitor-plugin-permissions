import Foundation
import Capacitor
import OSLog
import Network
import CoreLocation
import AVFoundation


@objc(PermissionsPlugin)
public class PermissionsPlugin: CAPPlugin, CAPBridgedPlugin, NetServiceDelegate {
    public var identifier = "PermissionsPlugin"
    public var jsName = "Permissions"
    public var pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "query", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "request", returnType: CAPPluginReturnPromise)
    ]

    @objc func query(_ call: CAPPluginCall) {
        let permission = call.getString("name")

        if permission == nil {
            call.reject("Permission name is required")
            return
        }
        
        switch permission {
        case "microphone":
            checkMicrophone(call)
        default:
            call.reject("Unknown permission")
        }
    }

    @objc func request(_ call: CAPPluginCall) {
        let permission = call.getString("name")

        if permission == nil {
            call.reject("Permission name is required")
            return
        }
        
        switch permission {
        case "microphone":
            requestMicrophone(call)
        default:
            call.reject("Unknown permission")
        }
    }
  
    @objc func checkMicrophone(_ call: CAPPluginCall) {
        let status = AVCaptureDevice.authorizationStatus(for: .audio)
        
        switch status {
        case .authorized:
            call.resolve(["status": "granted"])
        case .denied:
            call.resolve(["status": "denied"])
        case .notDetermined:
            call.resolve(["status": "notDetermined"])
        case .restricted:
            call.resolve(["status": "restricted"])
        @unknown default:
            call.resolve(["status": "unknown"])
        }
    }

    @objc func requestMicrophone(_ call: CAPPluginCall) {
        AVCaptureDevice.requestAccess(for: .audio) { granted in
            if granted {
                call.resolve(["status": "granted"])
            } else {
                call.resolve(["status": "denied"])
            }
        }
    }
}
