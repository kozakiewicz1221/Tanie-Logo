const MongoClient = require("mongodb").MongoClient;

exports.findAll = (req, res) => {
  // SAVE ORDER TO DB
  const uri =
    "mongodb+srv://emir1221:!Loleq123@cluster0-xwshn.mongodb.net/TanieLogo?retryWrites=true&w=majority";

  MongoClient.connect(uri, { useUnifiedTopology: true }, (error, client) => {
    if (error) console.log(error);
    const db = client.db("TanieLogo");
    db.collection("orders").insertOne({ name: "john" }, (err, result) => {
      if (err) console.log(err);
      console.log("Added order to db");
      res.status(200).send(result);
    });
  });
};
