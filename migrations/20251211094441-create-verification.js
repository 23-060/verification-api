'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('verifications', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      report_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false
      },
      claimant_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false
      },
      admin_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: true
      },
      proof: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      status: {
        type: Sequelize.ENUM('pending', 'approved', 'rejected'),
        allowNull: false,
        defaultValue: 'pending'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });    
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Verifications');
  }
};