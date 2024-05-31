import express from 'express';
import cors from 'cors';

import config from './config.js';
import stationRoute from './routes/stationRoute.js';
import userRoute from './routes/userRoute.js';

const app = express();

app.use(cors());
app.use(express.json());

//routes
app.use('/stations', stationRoute);
app.use('/users', userRoute);

app.listen(config.port, () =>
  console.log(`Server is live @ ${config.hostUrl}`),
);