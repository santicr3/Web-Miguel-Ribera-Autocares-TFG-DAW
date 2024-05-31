import express from 'express';

import {
  createStation,
  getStation,
  getStations,
  updateStation,
  deleteStation,
} from '../controllers/stationController.js';

const router = express.Router();

router.get('/', getStations);
// router.post('/new', createStation);
router.get('/:id', getStation);
// router.put('/update/:id', updateStation);
// router.delete('/delete/:id', deleteStation);

export default router;