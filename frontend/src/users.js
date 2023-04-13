const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  router.post('/user', (req, res, next) => {
    db.query(
      'INSERT INTO users (ID, name, email, phone, password) VALUES (?,?,?,?,?)',
      [req.body.id, req.body.name, req.body.email, "904-564-4549", req.body.password],
      (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.get('/user', function (req, res, next) {
    db.query(
      'SELECT ID, name, email, phone, password FROM users WHERE ID=?',
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  router.put('/user/:ID', function (req, res, next) {
    db.query(
      'UPDATE users SET name=?, email=?, WHERE ID=?',
      [req.body.name, req.body.description, new Date(req.body.date), req.params.id, owner],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.delete('/user/:ID', function (req, res, next) {
    db.query(
      'DELETE FROM users WHERE id=? AND email=?',
      [req.params.id, owner],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  return router;
}

module.exports = createRouter;
