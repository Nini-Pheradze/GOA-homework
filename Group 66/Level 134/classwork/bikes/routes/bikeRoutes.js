const express = require('express');
const router = express.Router();
const bikeController = require('../controllers/bikecontrollers');

router.get('/', bikeController.getAllBikes);
router.post('/', bikeController.createBike);
router.put('/:id', bikeController.updateBike);
router.delete('/:id', bikeController.deleteBike);

module.exports = router;