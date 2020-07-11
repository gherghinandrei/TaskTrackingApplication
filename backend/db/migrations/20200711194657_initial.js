const tableNames = require('../../src/constants/tableNames');
const Knex = require('knex');

/**
 * 
 * @param {knex} knex 
 */

exports.up = async (knex) => {
  await knex.schema.createTable(tableNames.user, (table) => {
    // table.increments(); //creates id that is PK and has index
    table.increments().notNullable();
    table.string('email', 254).notNullable();
    table.string('name', 254).notNullable();
    table.string('password', 127).notNullable();
    table.datetime('last_login');
  })
  
};

exports.down = async (knex) => { 
  await knex.schema.dropTable(tableNames.user);
};
