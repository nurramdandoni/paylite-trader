const express = require("express");

const app = express();
const port = 4000;

// Middleware untuk parsing body permintaan
app.use(express.json());

const traderAccountController = require("./controllers/traderAccount");

app.get('/', (req, res) => {
    console.log(req);
    res.status(200).json({ status: 'Sukses', message:"API Paylite Trader Server Berjalan Baik CI/CD With Jenkins Docker Container!"});
  });

app.get("/validasi/:validasi_account",traderAccountController.findTraderAccountById);

// Menjalankan server
const server = app.listen(port, "0.0.0.0", () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Server berjalan pada host ${host} dan port ${port}`);
  });
  