/**
* Article.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    title:'string',
    content:'string',
    preview:'string',
    category: {
      model:'ArticleCategory'
    },
    author:'string',
    published:'date',
    cover:'string',
    tags:'string'
  }
};

