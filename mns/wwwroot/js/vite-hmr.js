import RefreshRuntime from 'http://localhost:3000/@react-refresh';
import 'http://localhost:3000/@vite/client';

RefreshRuntime.injectIntoGlobalHook(window)
window.$RefreshReg$ = () => {}
window.$RefreshSig$ = () => (type) => type
window.__vite_plugin_react_preamble_installed__ = true