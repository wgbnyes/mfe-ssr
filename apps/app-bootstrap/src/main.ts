// import('./bootstrap').catch((err) => console.error(err));
import { setRemoteDefinitions } from '@nrwl/angular/mfe';

console.log('# main browser');
fetch('/assets/module-federation.manifest.json')
  .then((res) => res.json())
  .then(res => { console.log(res); return res })
  .then((definitions: any) => setRemoteDefinitions(definitions))
  .then(() => import('./bootstrap').catch((err) => console.error(err)));
