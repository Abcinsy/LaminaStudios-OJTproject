import { Modal, Datepicker, Input, initTE, Carousel, Dropdown } from "tw-elements";

import './bootstrap';
import '../css/app.css';
import '../../public/css/style.css';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import { render } from 'react-dom';

initTE({ Modal, Datepicker, Input, Carousel, Dropdown });

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
  title: (title) => `${title} / ${appName}`,
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    return pages[`./Pages/${name}.jsx`]
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
});
