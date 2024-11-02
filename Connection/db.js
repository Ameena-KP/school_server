const mongoose=require('mongoose')

const connectionsString=process.env.DB_CONNECTION

mongoose.connect(connectionsString).then(res=>{
    console.log('server connected to mongoDB');
    
}).catch(err=>{
    console.log(err);
    
})