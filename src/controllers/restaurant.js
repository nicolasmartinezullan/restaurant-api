import mongoose from 'mongoose';
import { Router } from 'express';
import Restaurant from '../models/restaurant';

export default ({ config, db }) => {
  const api = Router();

  // CRUD - Create Read Update Delete

  // POST '/v1/restaurants' - Create
  api.post('/', (req, res) => {
    const newRestaurant = new Restaurant();

    newRestaurant.name = req.body.name;

    newRestaurant.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Restaurant saved successfully' });
    });
  });

  // GET '/v1/restaurants' - Read
  api.get('/', (req, res) => {
    Restaurant.find({}, (err, restaurants) => {
      if (err) {
        res.send(err);
      }
      res.json(restaurants);
    });
  });

  // GET '/v1/restaurants/:id' - Read 1
  api.get('/:id', (req, res) => {
    Restaurant.findById(req.params.id, (err, restaurant) => {
      if (err) {
        res.send(err);
      }
      res.json(restaurant);
    });
  });

  // PUT '/v1/restaurants/:id' - Update 1
  api.put('/:id', (req, res) => {
    Restaurant.findById(req.params.id, (err, restaurant) => {
      if (err) {
        res.send(err);
      }

      restaurant.name = req.body.name;

      restaurant.save(err => {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'Restaurant info updated' });
      });
    });
  });

  // DELETE '/v1/restaurants/:id' - Delete 1
  api.delete('/:id', (req, res) => {
    Restaurant.remove({ _id: req.params.id }, err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Restaurant deleted successfully' });
    });
  });

  return api;
};
