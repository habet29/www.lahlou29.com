
require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
app.get('/api/status',(req,res)=>res.json({ok:true,name:'RL Réparation API'}));
app.listen(process.env.PORT||4000,()=>console.log('listening'));
