const express = require('express');
const app = express();
const UserRoutes = require('./src/routers/users.routes');
const PORT = 3000;

app.use(express.json());

app.use(UserRoutes);

app.listen(PORT, () => {
  console.log(`Serving on port ${PORT}`);
});