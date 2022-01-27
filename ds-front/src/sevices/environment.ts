const environment = ['web'];
let extensionApi: any = null;

const explorer = navigator.userAgent;
if (explorer.indexOf('Chrome') >= 0 && explorer.indexOf('Safari') >= 0) {
    // 在chrome环境
    environment.push('chrome-extension');
}
if (explorer.indexOf('Firefox') >= 0) {
    // 在火狐环境中
    environment.push('firefox-extension');
}
if (location.protocol === 'vscode-webview:') {
    environment.push('vscode-extension');
}

if (
    environment.includes('chrome-extension') &&
    !environment.includes('vscode-extension')
) {
    extensionApi = (window as any).chrome;
}

if (environment.includes('firefox-extension')) {
    extensionApi = (window as any).browser;
}

export function isVsCode() {
    return environment.includes('vscode-extension');
}

export function isChrome() {
    return (
        environment.includes('chrome-extension')
    );
}

export function isFirefox() {
    return (
        environment.includes('firefox-extension')
    );
}

export function isBrowserExtebsion() {
    return (
        environment.includes('firefox-extension') ||
        environment.includes('chrome-extension')
    );
}

export function getExtensionApi() {
    return extensionApi;
}
