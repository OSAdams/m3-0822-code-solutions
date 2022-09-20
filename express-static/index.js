const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const publicPath = path.join(__dirname, 'public');
const staticMiddleware = express.static(publicPath);

app.use(staticMiddleware);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
