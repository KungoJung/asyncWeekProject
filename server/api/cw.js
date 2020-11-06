const router = require("express").Router();
const axios = require("axios");

// Route for the current info for a single Commonwealth
router.get("/:cw", async (req, res, next) => {
  try {
    const cw = req.params.cw;
    const {data} = await axios.get(`https://api.covidtracking.com/v1/states/${cw}/current.json`);
    if (!data) return res.sendStatus(404);
    res.send(data)
  } catch (err) {
    next (err);
  }
})

module.exports = router
