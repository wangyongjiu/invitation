var express = require('express');
var bodyParser =require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// 允许所有的请求形式
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// 对网站首页的访问返回 "Hello World!" 字样
app.get('/', function (req, res) {
  res.send('Hello World!');
});
 
// login页面
app.post('/login', function (req, res) {
    console.log(req.body['username']);
    if(req.body.username != ''){
        res.send({
            "message":"登录成功",
            "user":req.body
        });
    }
});
// search页面
app.post('/search',function(req,res){
    if(req.body.search_select){
        res.send([
            {"data_city":"美国","data_list":"正交所(日)"},
            {"data_city":"美国","data_list":"正交所(日)"},
            {"data_city":"美国","data_list":"正交所(日)"},
            {"data_city":"美国","data_list":"正交所(日)"},
            {"data_city":"美国","data_list":"正交所(日)"},
            {"data_city":"美国","data_list":"正交所(日)"},
            {"data_city":"美国","data_list":"正交所(日)"},
            {"data_city":"美国","data_list":"正交所(日)"},
        ]);
    }
})

// industry页面
app.post('/industry',function(req,res){
    // console.log(req.body);
    res.send([
        {"img":"./images/presentation.png","title":"2017年水泥行业研究报告","money":"2000"},
        {"img":"./images/presentation.png","title":"2016年水泥行业研究报告","money":"2400"},
        {"img":"./images/presentation.png","title":"2015年水泥行业研究报告","money":"2500"},
        {"img":"./images/presentation.png","title":"2014年水泥行业研究报告","money":"2200"},
        {"img":"./images/presentation.png","title":"2017年石子行业研究报告","money":"3000"},
        {"img":"./images/presentation.png","title":"2017年钢筋行业研究报告","money":"2000"},
        {"img":"./images/presentation.png","title":"2017年金融行业研究报告","money":"2200"},
        {"img":"./images/presentation.png","title":"2017年科技行业研究报告","money":"2500"},
        {"img":"./images/presentation.png","title":"2017年教育行业研究报告","money":"2800"},
        {"img":"./images/presentation.png","title":"2017年医疗行业研究报告","money":"2600"},
        {"img":"./images/presentation.png","title":"2017年医疗行业研究报告","money":"2600"},
        {"img":"./images/presentation.png","title":"2017年医疗行业研究报告","money":"2600"},
        {"img":"./images/presentation.png","title":"2017年医疗行业研究报告","money":"2600"},
        {"img":"./images/presentation.png","title":"2017年医疗行业研究报告","money":"2600"},
        {"img":"./images/presentation.png","title":"2017年医疗行业研究报告","money":"2600"},
        {"img":"./images/presentation.png","title":"2017年医疗行业研究报告","money":"2600"},
        {"img":"./images/presentation.png","title":"2017年医疗行业研究报告","money":"2600"},
        {"img":"./images/presentation.png","title":"2017年医疗行业研究报告","money":"2600"},
    ]);
});

// center页面
app.post('/center',function(req,res){
    res.send(
        {"ordinary":"晴天","senior":"100","vip":"普通会员",
        "list":[
            {"img":"./images/usa.png","title":"美国移民礼包"},
            {"img":"./images/presentation.png","title":"美国移民礼包"},
            {"img":"./images/usa.png","title":"美国移民礼包"},
            {"img":"./images/presentation.png","title":"美国移民礼包"},
            {"img":"./images/usa.png","title":"美国移民礼包"},
            {"img":"./images/presentation.png","title":"美国移民礼包"},
            {"img":"./images/usa.png","title":"美国移民礼包"},
            {"img":"./images/presentation.png","title":"美国移民礼包"},
            {"img":"./images/presentation.png","title":"美国移民礼包"},
            {"img":"./images/usa.png","title":"美国移民礼包"},
            {"img":"./images/presentation.png","title":"美国移民礼包"},
        ]}
    );
});

//industrydata页面
app.post('/industrydata',function(req,res){
    res.send([
        {"img":"./images/steel.png","title":"钢铁行业数据礼包","money":"2000"},
        {"img":"./images/free.png","title":"美国移民数据礼包","money":"2400"},
        {"img":"./images/gift.png","title":"水泥行业数据礼包","money":"2500"},
        {"img":"./images/gift.png","title":"化工行业数据礼包","money":"2200"},
        {"img":"./images/gift.png","title":"石油行业数据礼包","money":"3000"},
        {"img":"./images/gift.png","title":"水泥行业数据礼包","money":"2500"},
        {"img":"./images/gift.png","title":"化工行业数据礼包","money":"2200"},
        {"img":"./images/gift.png","title":"石油行业数据礼包","money":"3000"},
        {"img":"./images/gift.png","title":"水泥行业数据礼包","money":"2500"},
        {"img":"./images/gift.png","title":"化工行业数据礼包","money":"2200"},
        {"img":"./images/gift.png","title":"石油行业数据礼包","money":"3000"},
        {"img":"./images/gift.png","title":"水泥行业数据礼包","money":"2500"},
        {"img":"./images/gift.png","title":"化工行业数据礼包","money":"2200"},
        {"img":"./images/gift.png","title":"石油行业数据礼包","money":"3000"},
        {"img":"./images/gift.png","title":"水泥行业数据礼包","money":"2500"},
        {"img":"./images/gift.png","title":"化工行业数据礼包","money":"2200"},
        {"img":"./images/gift.png","title":"石油行业数据礼包","money":"3000"},
        {"img":"./images/gift.png","title":"水泥行业数据礼包","money":"2500"},
        {"img":"./images/gift.png","title":"化工行业数据礼包","money":"2200"},
        {"img":"./images/gift.png","title":"石油行业数据礼包","money":"3000"},
    ]);
});







app.get('/country',function(req,res){
    res.send([
        {"country":"美国","id":1,"show":true},
        {"country":"中国","id":2,"show":false},
        {"country":"日本","id":3,"show":false},
        {"country":"沙特阿拉伯","id":4,"show":false},
        {"country":"阿富汗","id":5,"show":false},
        {"country":"伊朗","id":6,"show":false},
        {"country":"法国","id":7,"show":false},
        {"country":"德国","id":8,"show":false},
        {"country":"印度","id":9,"show":false},
        {"country":"韩国","id":10,"show":false},
        {"country":"泰国","id":11,"show":false},
        {"country":"缅甸","id":12,"show":false},
        {"country":"新加坡","id":13,"show":false},
        {"country":"美国","id":1,"show":false},
        {"country":"中国","id":2,"show":false},
        {"country":"日本","id":3,"show":false},
        {"country":"沙特阿拉伯","id":4,"show":false},
        {"country":"阿富汗","id":5,"show":false},
        {"country":"伊朗","id":6,"show":false},
        {"country":"法国","id":7,"show":false},
        {"country":"德国","id":8,"show":false},
        {"country":"印度","id":9,"show":false},
        {"country":"韩国","id":10,"show":false},
        {"country":"泰国","id":11,"show":false},
        {"country":"缅甸","id":12,"show":false},
        {"country":"新加坡","id":13,"show":false},
        {"country":"美国","id":1,"show":false},
        {"country":"中国","id":2,"show":false},
        {"country":"日本","id":3,"show":false},
        {"country":"沙特阿拉伯","id":4,"show":false},
        {"country":"阿富汗","id":5,"show":false},
        {"country":"伊朗","id":6,"show":false},
        {"country":"法国","id":7,"show":false},
        {"country":"德国","id":8,"show":false},
        {"country":"印度","id":9,"show":false},
        {"country":"韩国","id":10,"show":false},
        {"country":"泰国","id":11,"show":false},
        {"country":"缅甸","id":12,"show":false},
        {"country":"新加坡","id":13,"show":false},
    ]);
});

app.get('/levelone',function(req,res){
    // console.log(req.body.id);
    // console.log(req);
    // console.log(req.query.id);
    if(req.query.id == 1){
        res.send([
            {"country":"经济贸易数据","id":"01","show":true},
            {"country":"营商环境数据","id":"02","show":false},
            {"country":"社会发展数据","id":"03","show":false},
            {"country":"生态环境数据","id":"04","show":false},
            {"country":"资源数据","id":"05","show":false},
            {"country":"行业数据","id":"06","show":false},
            {"country":"国防安全","id":"07","show":false},
            {"country":"国家政策与制度评估","id":"08","show":false},
            {"country":"世界灾难数据","id":"09","show":false},
        ]);
    }else if(req.query.id == 2){
        res.send([
            {"country":"生态环境数据","id":"04","show":true},
            {"country":"资源数据","id":"05","show":false},
            {"country":"行业数据","id":"06","show":false},
            {"country":"经济贸易数据","id":"01","show":false},
            {"country":"营商环境数据","id":"02","show":false},
            {"country":"社会发展数据","id":"03","show":false},
            {"country":"国防安全","id":"07","show":false},
            {"country":"国家政策与制度评估","id":"08","show":false},
            {"country":"世界灾难数据","id":"09","show":false},
        ]);
    }else if(req.query.id == 3){
        res.send([
            {"country":"国防安全","id":"07","show":true},
            {"country":"国家政策与制度评估","id":"08","show":false},
            {"country":"世界灾难数据","id":"09","show":false},
            {"country":"经济贸易数据","id":"01","show":false},
            {"country":"营商环境数据","id":"02","show":false},
            {"country":"社会发展数据","id":"03","show":false},
            {"country":"生态环境数据","id":"04","show":false},
            {"country":"资源数据","id":"05","show":false},
            {"country":"行业数据","id":"06","show":false},
        ]);
    }else if(req.query.id == 4){
        res.send([
            {"country":"行业数据","id":"06","show":true},
            {"country":"国防安全","id":"07","show":false},
            {"country":"国家政策与制度评估","id":"08","show":false},
            {"country":"世界灾难数据","id":"09","show":false},
            {"country":"经济贸易数据","id":"01","show":false},
            {"country":"营商环境数据","id":"02","show":false},
            {"country":"社会发展数据","id":"03","show":false},
            {"country":"生态环境数据","id":"04","show":false},
            {"country":"资源数据","id":"05","show":false},
        ]);
    }else{
        res.send([
            {"country":"经济贸易数据","id":"01","show":true},
            {"country":"营商环境数据","id":"02","show":false},
            {"country":"社会发展数据","id":"03","show":false},
            {"country":"生态环境数据","id":"04","show":false},
            {"country":"资源数据","id":"05","show":false},
            {"country":"行业数据","id":"06","show":false},
            {"country":"国防安全","id":"07","show":false},
            {"country":"国家政策与制度评估","id":"08","show":false},
            {"country":"世界灾难数据","id":"09","show":false},
        ]);
    }
  
});

app.post('/leveltwo',function(req,res){
    res.send([
        {"country":"经济贸易数据","id":"01","show":true},
        {"country":"营商环境数据","id":"02","show":false},
        {"country":"社会发展数据","id":"03","show":false},
        {"country":"生态环境数据","id":"04","show":false},
        {"country":"资源数据","id":"05","show":false},
        {"country":"行业数据","id":"06","show":false},
        {"country":"国防安全","id":"07","show":false},
        {"country":"国家政策与制度评估","id":"08","show":false},
        {"country":"世界灾难数据","id":"09","show":false},
    ]);
});













var server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
