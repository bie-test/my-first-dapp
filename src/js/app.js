App = {
     web3Provider: null,
     contracts: {},

     init: function() {
      // load articleRow
      var articlesRow = $('#articlesRow');
      var articleTemplate = $('#articleTemplate');

      articleTemplate.find('.panel-title').text('สินค้าชิ้นที่่ 1');
      articleTemplate.find('.article-description').text('รายละเอียดสินค้า ชิ้นที่ 1');
      articleTemplate.find('.article-price').text('10.24');
      articleTemplate.find('.article-seller').text('ชื่อผู้ขาย');

      articlesRow.append(articleTemplate.html());

      return App.initWeb3();
 },



     initWeb3: function() {
          /*
           * Replace me...
           */

          return App.initContract();
     },

     initContract: function() {
          /*
           * Replace me...
           */
     },
};

$(function() {
     $(window).load(function() {
          App.init();
     });
});
