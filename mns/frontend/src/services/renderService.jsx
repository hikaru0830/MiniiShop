import { StrictMode } from 'react';

export default function RenderController(view) {
    const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(import.meta.env.DEV);
    if (import.meta.env.DEV) {
      root.render(<StrictMode>{view}</StrictMode>);
    } else {
      root.render(view);
    }
}