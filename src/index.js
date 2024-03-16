const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
//const {sendBasicEmail} = require('./services/email-service');
 
const TicketController =  require('./controllers/ticket-controller')
const jobs =  require('./utils/job');

const setUpAndStartServer = ( ) => {  
  const app = express(); 
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));
  app.post('/api/v1/tickets',TicketController.create);
  
  app.listen(PORT,()=>{ 
    console.log(`server started at ${PORT}`);
    jobs();
    // sendBasicEmail(
    //   'airlinebooking004@gmail.com',
    //   'algudesiddhi@gmail.com',
    //   'this is a testing email ',
    //   'Hey  how are you ? be happy you are going to be rich soon there are lot of opportunities for youu! take care in timing bbyee'
    // );
   
 });
}
  
setUpAndStartServer();