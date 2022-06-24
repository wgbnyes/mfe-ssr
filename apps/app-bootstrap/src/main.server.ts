import { setRemoteDefinitions } from '@nrwl/angular/mfe';
import fetch from 'node-fetch';

console.log('# main server');
fetch('https://firebasestorage.googleapis.com/v0/b/yes4eutests.appspot.com/o/_global%2Fjson%2Fmodule-federation.manifest.json?alt=media')
  .then((res) => res.json())
  .then(res => { console.log(res); return res })
  .then((definitions: any) => setRemoteDefinitions(definitions))
  .then(() => import('./bootstrap.server').catch((err) => console.error(err)))
  .catch(e => console.log(e.message));
