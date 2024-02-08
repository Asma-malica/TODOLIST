const mongoose = require('mongoose');

// Use environment variables for better flexibility (optional)
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/todolist';


mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('DB connection established');
    })
    .catch((err) => {
        console.error(`Error in DB connection: ${err}`);
    });

// Export the connected mongoose instance for use in other modules (optional)
module.exports = mongoose;






// const mongoose = require('mongoose');

// const MONGODB_HOST = 'mongodb://localhost/'
// const MONGODB_DB = 'usuarios'

// mongoose.connect(MONGODB_HOST,{
//     useUnifiedTopology: true,
//     useNewUrlParser: true

// })
//     .then(db => console.log('Db connection established'))
//     .catch(err => console.log(err))




// const mongoose = require('mongoose')

// module.exports = mongoose.connect('mongodb://127.0.0.1',{
//     useUnifiedTopology : true,
//     useNewUrlParser : true,
//     useFindAndModify : false
// },err => {
//     if(err)console.log('Error in Database Connection $(err)')
//     console.log('MongoDB connection succeeded ')
// })