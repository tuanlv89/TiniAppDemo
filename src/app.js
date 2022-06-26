import { setProvider } from 'redux-miniprogram-bindings';

import store from '@/store';

setProvider({
  component2: true,
  store,
  namespace: '',
});

App({});