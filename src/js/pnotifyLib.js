///////https://sciactive.com/pnotify/
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';

import { alert, error, defaults, Stack } from '@pnotify/core';

defaults.styling = 'material';
defaults.icons = 'material';

const myStack = new Stack({
  dir1: 'down',
  dir2: 'left',
  firstpos1: 25,
  firstpos2: 25,
//spacing1: 40,
//spacing2: 40,
  push: 'bottom',
  context: document.body,
});

//нотификация

//PNotify.notice({
//  title: 'Regular Notice',
//  text: 'Check me out! I\'m a notice.'});

//PNotify.error({
//  title: 'Oh No!',
//  text: 'Something terrible happened.'});

const notices = {
  errorEmptyInput() {
    error({
      title: 'Error',
      text: 'Enter country name',
      stack: myStack,
      delay: 1000,
    });
  },

  alertTooManyMatches() {
    alert({
      title: 'Attention',
      text:
        'Please select the appropriate query or enter a more specific  query ',
      stack: myStack,
      delay: 2000,
    });
  },
};

export default notices;

//Если бекенд вернул больше чем 10 стран подошедших под критерий введенный пользователем, в интерфейсе отображается нотификация о том, что необходимо сделать запрос более специфичным.