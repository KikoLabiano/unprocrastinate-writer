import { atom } from 'recoil';

import { messages } from 'conf/messages';

export const messagesAtom = atom({
  key: 'messagesState',
  default: messages
});

export const languagesAtom = atom({
  key: 'languagesState',
  default: 'es'
});
