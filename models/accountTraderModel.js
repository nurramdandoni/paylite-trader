const { Sequelize } = require("sequelize");
const sequelize = require("../config/db_mysql");

// Definisikan model User
const TraderAccount = sequelize.define("trader_account", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    broker: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    account_number: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    },
    {
    tableName: "trader_account",
    });

    // Fungsi untuk menampilkan account trader by id
async function findTraderAccountById(account_number) {
    try {
      const account_number_LookUp = await TraderAccount.findOne({
        where: {
            account_number: account_number,
        },
      });
      if (account_number_LookUp != null) {
        return { status: "Sukses", message: "Data Ditemukan!", data: account_number_LookUp };
      } else {
        return {
          status: "Error",
          message: "Data Tidak Ditemukan!",
          data: account_number_LookUp,
        };
      }
    } catch (error) {
      console.error("error ", error);
      return {
        status: "Error",
        message: "Terjadi Kesalahan Saat Proses Data!",
        data: error.message,
      };
    }
  }

  module.exports = {findTraderAccountById};