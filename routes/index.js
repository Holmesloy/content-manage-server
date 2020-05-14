var express = require('express');
var router = express.Router();

/* GET home page. */
//获取左侧菜单
//获取左侧菜单
router.get('/', function(req, res, next) {
	var data={
		code:0,
		data:{name:'aqqqqqaa',pwd:'123'},
		isSuccess:true,
		msg:"请求成功"
	}
	res.json(data);
});

module.exports = router;
