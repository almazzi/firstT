/**
* Article.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  title:'STRING',
  content:'STRING',
    preview:'STRING',
    category: {
      collection:'articleCategory'
    },
    author:'STRING',
    published:'DATE',
    cover:'STRING',
    tags:'STRING'
  }
};

