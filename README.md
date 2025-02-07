# capacitor-plugin-permissions

...

## Install

```bash
npm install capacitor-plugin-permissions
npx cap sync
```

## API

<docgen-index>

* [`query(...)`](#query)
* [`request(...)`](#request)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### query(...)

```typescript
query(permission: { name: Permission; }) => Promise<{ status: PermissionStatus; }>
```

| Param            | Type                                 |
| ---------------- | ------------------------------------ |
| **`permission`** | <code>{ name: 'microphone'; }</code> |

**Returns:** <code>Promise&lt;{ status: <a href="#permissionstatus">PermissionStatus</a>; }&gt;</code>

--------------------


### request(...)

```typescript
request(permission: { name: Permission; }) => Promise<{ status: Extract<PermissionStatus, 'granted' | 'denied'>; }>
```

| Param            | Type                                 |
| ---------------- | ------------------------------------ |
| **`permission`** | <code>{ name: 'microphone'; }</code> |

**Returns:** <code>Promise&lt;{ status: 'granted' | 'denied'; }&gt;</code>

--------------------


### Type Aliases


#### PermissionStatus

<code>'granted' | 'denied' | 'notDetermined' | 'prompt'</code>


#### Permission

<code>'microphone'</code>


#### Extract

<a href="#extract">Extract</a> from T those types that are assignable to U

<code>T extends U ? T : never</code>

</docgen-api>
