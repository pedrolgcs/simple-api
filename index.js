const express = require('express');
const cors = require('cors');

// routes
const { routes } = require('./routes');

// inicialize
const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  })
);

// routes
app.use('/api', routes);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
