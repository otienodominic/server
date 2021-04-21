
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.get('/', (req, res)=>{
  res.send('\u{1F441}\u{FE0F}\u{200D}\u{1F5E8}\u{FE0F} Welcome to the backend of the project! \u{1F468}\u{200D}\u{1F9B2}')
})
app.use('/posts', postRoutes);
app.use("/user", userRouter);

const MONGODB_URI = 'mongodb+srv://odongolera:Cj8nSmrdVPGfd6vX@cluster0.kha1r.mongodb.net/fileSystem3?retryWrites=true&w=majority';

const PORT = process.env.PORT|| 8080;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);