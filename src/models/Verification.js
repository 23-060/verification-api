import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Verification = sequelize.define(
  "Verification",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },

    report_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },

    claimant_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },

    admin_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },

    proof: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    status: {
      type: DataTypes.ENUM("pending", "approved", "rejected"),
      defaultValue: "pending",
    },
  },
  {
    tableName: "verifications",  // sesuaikan dengan nama tabel kamu
    timestamps: true,            // pakai created_at & updated_at
    underscored: true            // INI YANG BIKIN Sequelize TIDAK PAKAI createdAt
  }
);

export default Verification;
