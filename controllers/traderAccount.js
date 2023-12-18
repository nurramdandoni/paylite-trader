const { findTraderAccountById } = require('../models/accountTraderModel'); // Account Trader Model

const response500 = {
    status:"Error",
    message:"Internal Server Error!",
    data:""
  }

// get data prodi by id
exports.findTraderAccountById = async (req, res) => {
    const account_number = req.params.validasi_account;

    try{

      const dataAccount = await findTraderAccountById(account_number);
  
      if (dataAccount.status == "Sukses") {
        const response = {
          status:dataAccount.status,
          message:dataAccount.message,
          data:dataAccount.data
        }
        res.json(response);
      } else {
        const response = {
          status:dataAccount.status,
          message:dataAccount.message,
          data:dataAccount.data
        }
        res.status(404).json(response);
      }

    }catch(error){
      res.status(500).json(response500);
    }
  };