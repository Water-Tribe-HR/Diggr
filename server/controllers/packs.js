const axios = require('axios');
require('dotenv').config();

const { addToPack, getPacks, createPackAndAdd } = require('../db');

const addUserToPack = (req, res) => {
  const { user_id, pack_id } = req.params;
  return addToPack(user_id, pack_id)
    .then(() => {
      res.status(201).send('Added to pack');
    })
    .catch(() => {
      res.status(404).send('Error adding to pack');
    });
};

const createNewPackAndAdd = (req, res) => {
  let { pack_name, users } = req.body;
  users = JSON.parse(users);
  return createPackAndAdd(pack_name, users)
    .then(() => {
      res.status(201).send('Pack created');
    })
    .catch(() => {
      res.status(404).send('Error creating pack');
    });
};

const getUserPacks = (req, res) => {
  const { userId } = req.query;

  return getPacks(userId)
    .then((data) => {
      // console.log(data.rows[0]);
      res.send(data.rows[0].json_agg);
    })
    .catch(() => {
      res.status(404).send('unable to get packs');
    });
};

module.exports = {
  addUserToPack: addUserToPack,
  getUserPacks: getUserPacks,
  createNewPackAndAdd: createNewPackAndAdd
};
