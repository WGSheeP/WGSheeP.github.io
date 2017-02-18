var orderData= {
	dish:[
	{	id:1,
		name:'鱼香肉丝',
		price:'30元',
		unit:'份',
		picture:'',
		types:'热菜',
		detail:'肉类',
		introduce:'猪肉、甜口',
		putaway:'已上架'
	},	{
		id:2,
		name:'小葱拌豆腐',
		price:'10元',
		unit:'份',
		picture:'',
		types:'冷菜',
		detail:'蔬菜',
		introduce:'蔬菜、豆制品',
		putaway:'已上架'
	},	{
		id:3,
		name:'清蒸鲈鱼',
		price:'30元',
		unit:'份',
		picture:'',
		types:'清蒸',
		detail:'肉类',
		introduce:'鱼肉、清淡',
		putaway:'已上架'
	},	{
		id:4,
		name:'烧茄子',
		price:'15元',
		unit:'份',
		picture:'',
		types:'烧菜',
		detail:'蔬菜',
		introduce:'多油、外焦里嫩',
		putaway:'已上架'
	},	{
		id:5,
		name:'铁板鱿鱼',
		price:'30元',
		unit:'份',
		picture:'',
		types:'铁板',
		detail:'海鲜',
		introduce:'鱿鱼、爽口',
		putaway:'已上架'
	},	{
		id:6,
		name:'小鸡炖蘑菇',
		price:'35元',
		unit:'份',
		picture:'',
		types:'锅类',
		detail:'肉类',
		introduce:'鸡肉、浓香',
		putaway:'已上架'
	},	{
		id:7,
		name:'羊肉汤',
		price:'20元',
		unit:'份',
		picture:'',
		types:'汤类',
		detail:'羊肉',
		introduce:'清汤、滋补',
		putaway:'已上架'
	},{	
		id:8,
		name:'米饭',
		price:'2元',
		unit:'份',
		picture:'',
		types:'主食',
		detail:'大米',
		introduce:'东北大米',
		putaway:'已上架'		
	},{
		id:9,
		name:'啤酒',
		price:'8元',
		unit:'瓶',
		picture:'',
		types:'酒水',
		detail:'天涯啤酒',
		introduce:'青岛纯酿',
		putaway:'已上架'		
	}
	
	],
	member:[
	{
		VipNum:'0001',
		username:'张三',
		userLever:'普通会员',
		balance:'1000.00',
		expense:'800.00',
		Num:'12',
		status:'正常',
		cardType:'身份证',
		cardNum:'41011111111'
		
	},
	{
		VipNum:'0002',
		username:'李四',
		userLever:'普通会员',
		balance:'1000.00',
		expense:'800.00',
		Num:'12',
		status:'正常',
		cardType:'身份证',
		cardNum:'41011111112'
		
	}
	
	
	
	],
	desk:[
	{
		deskName:'大厅1号',
		deskNum:'1'
	},	{
		deskName:'大厅2号',
		deskNum:'2'
	},	{
		deskName:'大厅3号',
		deskNum:'3'
	},	{
		deskName:'大厅4号',
		deskNum:'4'
	},	{
		deskName:'大厅5号',
		deskNum:'5'
	},	{
		deskName:'大厅6号',
		deskNum:'6'
	},	{
		deskName:'大厅7号',
		deskNum:'7'
	},	{
		deskName:'大厅8号',
		deskNum:'8'
	}
	],
   orderMassage:[{
   		orderID:'0001',
        deskNum:'1',
        currentDate:'2016/11/25',
        startTime:0 ,
        durationTime:100 ,
        ordering:[
            {
                dishName:'糖醋排骨',
                price:30
            },
            {
                dishName:'地三鲜',
                price:10
            },
            {
                dishName:'清蒸鲈鱼',
                price:30
            },
            {
                dishName:'凉拌牛肉',
                price:25
            }

        ],
        deskStatus:true,
        manager:'admin'
    },{
   		orderID:'0002',
        deskNum:'2',
        currentDate:'2016/11/25',
        startTime:0 ,
        durationTime:100 ,
        ordering:[
            {
                dishName:'红烧狮子头',
                price:30
            },
            {
                dishName:'家常豆腐',
                price:10
            }
        ],
        deskStatus:true,
        manager:'admin'
    },{
   		orderID:'0003',
        deskNum:'3',
        currentDate:'2016/11/25',
        startTime:0 ,
        durationTime:100 ,
        ordering:[
            {
                dishName:'宫保鸡丁',
                price:25
            },
            {
                dishName:'酸辣土豆丝',
                price:10
            }
        ],
        deskStatus:true,
        manager:'admin'
    },{
   		orderID:'0004',
        deskNum:'1',
        currentDate:'2016/11/25',
        startTime:0 ,
        durationTime:100 ,
        ordering:[
            {
                dishName:'土豆炖排骨',
                price:30
            },
            {
                dishName:'鱼香茄子',
                price:18
            }
        ],
        deskStatus:false,
        manager:'admin'
    }

    ]
}
var musicData={
	items:[{   
    "title":"every thing i do,i do it for you",
    "artist":"bryan adams",
    "cover":"https://img3.doubanio.com\/spic\/s11185741.jpg",
	"album_title":"For Your Entertainment"
	},
	{
    "title":"Cry On My Shoulder",
    "artist":"Deutschland Sucht Den Superstar",
    "cover":"https://img3.doubanio.com\/spic\/s11185741.jpg",
	"album_title":" "
	},
	{
    "title":"Big Big World",
    "artist":"Emilia",
    "cover":"https://img3.doubanio.com\/spic\/s11185741.jpg",
	"album_title":" "
	},
	{
    "title":"More Than Words",
    "artist":"extreme",
    "cover":"https://img3.doubanio.com\/spic\/s11185741.jpg",
	"album_title":" "
	},
	{
    "title":"Far Away from Home",
    "artist":"Groove Coverage",
    "cover":"https://img3.doubanio.com\/spic\/s11185741.jpg",
	"album_title":"For Your Entertainment"
	},
	{
    "title":"Seasons In The Sun",
    "artist":"Hit Crew Masters",
    "cover":"https://img3.doubanio.com\/spic\/s11185741.jpg",
	"album_title":"For Your Entertainment"
	}
	  
	]
}
