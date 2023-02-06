import express from 'express';
const app = express();
import UserRoutes from './src/routers/users.routes.js';
const PORT = 3000;
app.use(express.json());
app.use(UserRoutes);
app.listen(PORT, () => {
    console.log(`Serving on port ${PORT}`);
});
