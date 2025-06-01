import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
    navigationRef.current?.navigate(name, params);
}

export function resetToAuth() {
    navigationRef.current?.reset({
        index: 0,
        routes: [{ name: 'AuthStack' }],  // Make sure this matches your root Stack.Screen name for auth stack
    });
}
