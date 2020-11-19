const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

const uri = `mongodb+srv://musaibdbuser:musaibdb@321@cluster0.ej0zh.mongodb.net/bookshelfdb?retryWrites=true&w=majority`
const options = { useNewUrlParser: true, useUnifiedTopology: true }

// mongoose.connect(`mongodb+srv://musaibdbuser:musaibdb@321@cluster0.ej0zh.mongodb.net/bookshelfdb?retryWrites=true&w=majority`, {useNewUrlParser: true}, {useUnifiedTopology: true})

mongoose
  .connect(uri, options)
  .then(() => (console.log("Server is running with database")))
  .catch(error => {
    throw error
  }) 

app.listen(4000, () => {
    console.log('listerning to port 4000')
})