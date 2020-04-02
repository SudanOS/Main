module.exports = app => {
  const bodyParser = require("body-parser");
  const db = require("./database");
  const Member = require("./database").Member;

  // Routes for the API
  app.get("/api/members", async (req, res) => {
    let data = await Member.find();
    data = await res.json(data);
  });

  // Routes for a single Member
  app.get("/api/members/:id", async (req, res) => {
    const id = req.params.id;
    let data = await Member.findById(id);
    res.json(data);
  });

  //Routes for adding a new member
  app.post("/api/members/add", async (req, res) => {
    let name = req.body.name;
    let dep = req.body.dep;
    let data = new Member({
      name,
      dep
    });
    let status = await data.save();
    res.json({
      message: "success!",
      statuz: status
    });
  });

  //Routes for deleting a member
  app.delete("/api/members/:id", async (req, res) => {
    let id = req.params.id;
    let data = await Member.findByIdAndDelete(id, (err, results) => {
      if (err) console.log(err);
      res.json(results);
    });
  });

  //Routes for Updating a Member
  app.put("/api/members/:id", async (req, res) => {
    let name = req.body.name;
    let dep = req.body.dep;
    let id = req.params.id;

    let data = await Member.findByIdAndUpdate(
      id,
      {
        name,
        dep
      },
      (err, results) => {
        if (err) console.log(err);
        res.json(results);
      }
    );
  });
};
