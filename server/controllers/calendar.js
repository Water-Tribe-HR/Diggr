const { getAllPlaydates, createPlaydate } = require('../db');

const getPlaydates = (req, res) => {
  const { userId } = req.query;

  return getAllPlaydates(userId)
    .then((data) => {
      res.send(data.rows[0].pack_playdates);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send('unable to get playdates');
    });
};

const AddPlaydate = (req, res) => {
  const { packId, userId, playdateBody, startTime, endTime } = req.body;
  const playdateInfo = {
    packId: packId,
    userId: userId,
    playdateBody: playdateBody,
    startTime: startTime,
    endTime: endTime
  };

  return createPlaydate(playdateInfo)
    .then(() => res.send('playdate added'))
    .catch((err) => {
      console.log(err);
      res.status(404).send('unable to create playdate');
    });
};

module.exports = {
  getPlaydates: getPlaydates,
  AddPlaydate: AddPlaydate
};
