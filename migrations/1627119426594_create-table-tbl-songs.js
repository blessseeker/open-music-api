/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('tbl_songs', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    title: {
      type: 'TEXT',
      notNUll: true,
    },
    year: {
      type: 'INTEGER',
      notNUll: true,
    },
    performer: {
      type: 'TEXT',
      notNUll: true,
    },
    genre: {
      type: 'TEXT',
      notNUll: true,
    },
    duration: {
      type: 'INTEGER',
      notNUll: true,
    },
    created_at: {
      type: 'TEXT',
      notNUll: true,
    },
    updated_at: {
      type: 'TEXT',
      notNUll: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('tbl_songs');
};
