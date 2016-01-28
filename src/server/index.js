import express from 'express';
import {Schema} from './data/schema';
import graphQLHTTP from 'express-graphql';

const app = express();
app.use('/', graphQLHTTP({ schema: Schema, pretty: true, graphiql: true}));
app.listen(8081, (err) => {
  if (err)
    return console.error(err);
  console.log('GraphQL Server is now running on localhost:8081');
});
//
// const app2 = express();
// app2.use('/graphql', graphQLHTTP({ schema: Schema, pretty: true, graphiql: true }));
// app2.listen(8081, (err) => {
//   if (err)
//     return console.error(err);
//   console.log('Graph i QL Server is now running on localhost:8081/graphql');
// });
