require('dotenv').config();
const PORT = process.env.PORT || 3004
const app = require('./app');


// App Listen
app.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})
