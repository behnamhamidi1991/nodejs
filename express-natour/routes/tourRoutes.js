const express = require('express');
const router = express.Router();
const {
  getAllTours,
  getTour,
  updateTour,
  createTour,
  deleteTour,
  checkID,
  checkBody,
} = require('../controllers/tourController');

router.param('id', checkID);

// Create a checkBody middleware
// Check if the ody contains the name and price property
// If not, send back a 400 (bad request)
// Add it to the post handler stack

router.route('/').get(getAllTours).post(checkBody, createTour);

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
