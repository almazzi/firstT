/**
 * AdminController
 *
 * @description :: Server-side logic for managing Admins
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  list: function (req, res) {
    Article.find().exec(function(err, result){
      if(err) return res.sendError(err);
      return res.view({
        articles: result
      });
    });
  }

}

