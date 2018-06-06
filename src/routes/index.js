import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initializeDb from '../db';
import restaurant from '../controllers/restaurant';

const router = express();

// connect to db
initializeDb(db => {
  // internal middleware
  router.use(middleware({ config, db }));

  // api routes v1 (/v1)
  router.use('/restaurants', restaurant({ config, db }));
});

export default router;
