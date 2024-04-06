import './font.css'
import './main.css'
import './crt.css'
import App from './App.svelte'

import cursor from './assets/images/cursor.png';

import favicon from './assets/favicon.png';

document.documentElement.style.setProperty('--cursor-default', `url(${cursor}), auto`);

document.getElementById("favicon")!.setAttribute("href", favicon)

const app = new App({
	target: document.getElementById('app')!
})

export default app
