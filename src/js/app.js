App = {
     web3Provider: null,
     contracts: {},
     account: 0x0,
     init: function() {
      // load articleRow
      // var articlesRow = $('#articlesRow');
      // var articleTemplate = $('#articleTemplate');

      // articleTemplate.find('.panel-title').text('สินค้าชิ้นที่่ 1');
      // articleTemplate.find('.article-description').text('รายละเอียดสินค้า ชิ้นที่ 1');
      // articleTemplate.find('.article-price').text('10.24');
      // articleTemplate.find('.article-seller').text('ชื่อผู้ขาย');

      // articlesRow.append(articleTemplate.html());

      return App.initWeb3();
 },

 initWeb3: function() {
      App.web3Provider  = new Web3.providers.HttpProvider('http://localhost:7545');
     

       web3 = new Web3(App.web3Provider);

       App.displayAccountInfo();

       return App.initContract();
},

displayAccountInfo: function() {
	web3.eth.getCoinbase(function(err, balance){
		if(err === null){
			App.account = account;
			$('#account').text(account);
			
			web3.eth.getBalance(account, function(err, balance) {
              if(err === null) {
                $('#accountBalance').text(web3.fromWei(balance, "ether") + " ETH");
              }
            })
		}
	})


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
