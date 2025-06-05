import express from 'express';
import bodyParser from 'body-parser';
import todoRoutes from './routes/Todos.js';
import postRoutes from './routes/Posts.js';
import commentRoutes from './routes/Comments.js';
import userRoutes from './routes/Login.js'; 
import albumRoutes from './routes/Albums.js';
import photoRoutes from './routes/Photos.js';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors()); 
app.use(bodyParser.json());
app.use('/albums', albumRoutes);
app.use('/todos', todoRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);
app.use('/users', userRoutes);
app.use('/photos', photoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});