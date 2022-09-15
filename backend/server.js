const app = require('/app');

const dotenv =require('dotenv');

//setting up config file

dotenv.config({path:'backend/config/config.env'})

app.listen(process.env.Port,()=>{
    console.log('Server started on PORT: ${process.env.PORT}')
})