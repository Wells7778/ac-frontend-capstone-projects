import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';
import './styles.scss';

// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min';

if (import.meta.env.DEV) {
  const { worker } = await import('./mocks/browser');
  worker.start();
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const Renderer = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// dev 環境時，StrictMode 會導致 App render 兩次
// https://vitejs.dev/guide/env-and-mode.html
root.render(
  import.meta.env.DEV ? (
    <Renderer />
  ) : (
    <StrictMode>
      <Renderer />
    </StrictMode>
  )
);
