package com.assaabloy.plugins.permissions;

import android.Manifest;

import com.getcapacitor.JSObject;
import com.getcapacitor.PermissionState;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;
import com.getcapacitor.annotation.PermissionCallback;

@CapacitorPlugin(
    name = "Permissions",
    permissions = {
        @Permission(alias = "microphone", strings = { Manifest.permission.RECORD_AUDIO })
    }
)
public class PermissionsPlugin extends Plugin {

    @PluginMethod
    public void query(PluginCall call) {
        String permission = call.getString("name");

        if (permission == null) {
            call.reject("Permission name is required");
            return;
        }

        switch (permission) {
            case "microphone":
                checkMicrophone(call);
                break;
            default:
                call.reject("Unknown permission");
        }
    }

    @PluginMethod
    public void request(PluginCall call) {
        String permission = call.getString("name");

        if (permission == null) {
            call.reject("Permission name is required");
            return;
        }

        switch (permission) {
            case "microphone":
                requestMicrophone(call);
                break;
            default:
                call.reject("Unknown permission");
        }
    }

    private void checkMicrophone(PluginCall call) {
        PermissionState state = getPermissionState("microphone");

        if (state == PermissionState.GRANTED) {
            call.resolve(createResult(PermissionState.GRANTED));
        } else if (state == PermissionState.PROMPT) {
            call.resolve(createResult(PermissionState.PROMPT));
        } else {
            call.resolve(createResult(PermissionState.DENIED));
        }
    }

    private void requestMicrophone(PluginCall call) {
        if (getPermissionState("microphone") == PermissionState.GRANTED) {
            call.resolve(createResult(PermissionState.GRANTED));
        } else {
            requestPermissionForAlias("microphone", call, "microphonePermissionCallback");
        }
    }

    @PermissionCallback
    private void microphonePermissionCallback(PluginCall call) {
        PermissionState state = getPermissionState("microphone");

        if (state == PermissionState.GRANTED) {
            call.resolve(createResult(PermissionState.GRANTED));
        } else {
            call.resolve(createResult(PermissionState.DENIED));
        }
    }

    private JSObject createResult(PermissionState state) {
        JSObject result = new JSObject();
        result.put("status", state.toString().toLowerCase());
        return result;
    }
}
