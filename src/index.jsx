import * as serviceWorker from './serviceWorker';

import state from './redux/store';
import reRenderEntireTree from './render';

reRenderEntireTree(state);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
