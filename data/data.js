var gg = this;
gg.mytags=[
	{ name:"深度学习",children: [{name:"人体相关的算法"}]},
	{ name:"三维相关",children: []},
	{ name:"前端",children: [{name:"jquery"},{name:"vue"},{name:"angular"}]},
	{ name:"游戏相关",children: [{name:"cocos"},{name:"H5",children:[{name:"Egret"},{name:"H5小游戏"}]},{name:"Unity"}]},
];
gg.myprojects = [{
		tag: ["深度学习", "人体相关的算法"],
		name: "personlab",
		detail: '一个人体姿态算法<br/>' +
			'https://medium.com/tensorflow/move-mirror-an-ai-experiment-with-pose-estimation-in-the-browser-using-tensorflow-js-2f7b769f9b23<br/>' +
			'https://medium.com/tensorflow/real-time-human-pose-estimation-in-the-browser-with-tensorflow-js-7dd0bc881cd5<br/>' +
			'https://github.com/sydsim/personlab-tf<br/>' +
			'https://github.com/octiapp/KerasPersonLab<br/>'

	},

	{
		tag: ["人体相关的算法"],
		name: "bodynet",
		detail: '利用二维RGB生成三维模型的ECCV2018\
https://github.com/gulvarol/bodynet'

	},
	{
		tag: ["人体相关的算法"],
		name: "SURREAL",
		detail: '利用惯导系统和三维系统生成的，人体虚拟数据集合，目测背景是二维的\
CVPR 2017\
https://github.com/gulvarol/surreal'

	},
	{
		tag: ["三维相关"],
		name: "potree",
		detail: 'web三维点云展示\
这个可以展示扫描模型，目测可以展示十几万点的没什么问题\
'
	},
	{
		tag: ["三维相关"],
		name: "potree",
		detail: 'web三维点云展示\
这个可以展示扫描模型，目测可以展示十几万点的没什么问题\
'
    },
    
    {
		tag: ["前端"],
		name: "antv-g6",
		detail: '一个画图的库，可以漂亮的关系图画图<br/>https://antv.alipay.com/zh-cn/g6/1.x/demo/gallery/gallery-tree-compact-box.html'
    },
    {
		tag: ["游戏相关"],
		name: "GameEngineFromScratch",
        detail: '一个NB的大佬搞得，从0开始写游戏引擎，里面好多东西值得学习\
        比如底层c/c++工具链的使用\
        https://github.com/netwarm007/GameEngineFromScratch'
    },

  

];