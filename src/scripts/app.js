
const flip = require('./modules/flip');
const mainMenu = require('./modules/main_menu');
const initMap = require('./modules/map');
 
if (document.getElementsByClassName('authorisation').length > 0)
{ flip(); }

if (document.getElementsByClassName('hamburger').length > 0)
 { mainMenu(); }

 initMap(); 

