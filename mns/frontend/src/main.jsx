import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//DEMO========================================
import './index.css'
import App from './app/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
//============================================
// const mainScript = document.getElementById('mainScript');
// const path = mainScript.dataset.path + '.jsx';
// const mode = mainScript.dataset.mode;
// const pages = import.meta.glob('./pages/**/*.jsx');

// if (pages[path]) {
//     pages[path]().then(module => {
//         const Component = module.GetView;
//         createRoot(document.getElementById('root')).render(GetNode(Component))
//     });
// }

// function GetNode(Component) {
//   switch (mode.toUpperCase()) {
//     case 'DEVELOPMENT':
//       return (
//         <StrictMode>
//           <Component />
//         </StrictMode>
//       );
//     case 'PRODUCTION':
//     default:
//       return <Component />
//   }
// }