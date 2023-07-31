import { getNodes, toggleClass } from '/lib/index.js';

const information = getNodes('#notificationBtn');

information.forEach(item => {
  item.addEventListener('click', () => {
    toggleClass(item, 'is--clicked')
  }) 
})

