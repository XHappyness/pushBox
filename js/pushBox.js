/*定义初始化函数*/
$(function(){
	Game.exe(0);//执行游戏对象的执行函数
});


/*定义游戏对象*/
var Game = {
	
	//执行
	exe : function(index){
		if(index==7){
			$(".btn").html("通关成功！");
			return;
		}
		this.map(index);//画第index关地图
		$(".btn").click($.proxy(function(){//重玩第index关
			this.map(index);
		},this));
	},
	
	//关卡数据
	gk : [
		//第一关数据
		{
			//地图元素
			map:[
				0,0,1,1,1,1,0,0,
				0,0,1,3,3,1,0,0,
				0,1,1,2,3,1,1,0,
				0,1,2,2,2,3,1,0,
				1,1,2,2,2,2,1,1,
				1,2,2,1,2,2,2,1,
				1,2,2,2,2,2,2,1,
				1,1,1,1,1,1,1,1
			],
			//盒子宽高
			size:[8,8],
			//箱子坐标
			box:[
				{x:3,y:4},
				{x:4,y:3},
				{x:4,y:5},
				{x:5,y:5}
			],
			//乌龟坐标
			person:[3,6]
		},
		
		//第二关数据
		{
			//地图元素
			map:[
				0,1,1,1,1,1,1,1,1,
				0,1,2,2,2,2,2,2,1,
				0,1,2,2,2,2,2,2,1,
			    1,1,2,2,2,2,2,3,1,
				1,2,2,2,1,2,3,3,1,
				1,2,2,2,1,2,2,2,1,
				1,2,2,2,1,2,2,2,1,
				1,1,1,1,1,1,1,1,1
			],
			//盒子宽高
			size:[9,8],
			//箱子坐标
			box:[
				{x:2,y:4},
				{x:3,y:3},
				{x:5,y:4}
			],
			//乌龟坐标
			person:[4,2]
		},
		//第3关
				{
					//布局
					map:[
						0,1,1,1,1,1,1,1,0,
						0,1,2,2,3,3,3,1,0,
						0,1,2,2,2,1,1,1,1,
						1,1,1,2,2,2,2,2,1,
						1,2,2,2,1,2,1,2,1,
						1,2,2,2,1,2,2,2,1,
						1,2,2,2,1,1,1,1,1,
						1,1,1,1,1,0,0,0,0
					],
					//地图宽高
					size:[9,8],
					//箱子坐标
					box:[
						{x:3,y:3},
						{x:2,y:5},
						{x:5,y:4},
					],
					//人物坐标
					person:[3,1],
				},

				//第4关
				{
					//布局
					map:[
						1,1,1,1,1,1,1,1,0,
						1,2,2,2,3,3,3,1,0,
						1,2,2,2,2,1,1,1,1,
						1,1,2,1,2,2,2,2,1,
						1,2,2,1,1,2,1,2,1,
						1,2,2,2,2,2,2,2,1,
						1,2,2,2,1,1,1,1,1,
						1,1,1,1,1,0,0,0,0
					],
					//地图宽高
					size:[9,8],
					//箱子坐标
					box:[
						{x:2,y:3},
						{x:2,y:5},
						{x:5,y:4},
					],
					//人物坐标
					person:[3,1],
				},

				//第5关
				{
					//布局
					map:[
						1,1,1,1,1,0,0,0,0,
						1,2,2,2,1,0,0,0,0,
						1,2,2,2,1,0,1,1,1,
						1,2,2,2,1,0,1,3,1,
						1,1,1,2,1,1,1,3,1,
						0,1,1,2,2,2,2,3,1,
						0,1,2,2,2,1,2,2,1,
						0,1,2,2,2,1,1,1,1,
						0,1,1,1,1,1,0,0,0
					],
					//地图宽高
					size:[9,9],
					//箱子坐标
					box:[
						{x:2,y:2},
						{x:2,y:3},
						{x:3,y:2},
					],
					//人物坐标
					person:[1,1],
				},

				//第6关
				{	
					//布局
					map:[
						0,0,1,1,1,1,0,0,
						0,0,1,3,3,1,0,0,
						0,1,1,2,3,1,1,0,
						0,1,2,2,2,3,1,0,
						1,1,2,2,2,2,1,1,
						1,2,2,1,2,2,2,1,
						1,2,2,2,2,2,2,1,
						1,1,1,1,1,1,1,1
					],
					//地图宽高
					size:[8,8],
					//箱子坐标
					box:[
						{x:4,y:3},
						{x:3,y:4},
						{x:4,y:5},
						{x:5,y:5},
					],
					//人物坐标
					person:[3,6],
				},

				//第7关
				{	
					//布局
					map:[
						0,0,0,0,1,1,1,1,1,1,1,0,
						0,0,0,0,1,2,2,1,2,2,1,0,
						0,0,0,0,1,2,2,2,2,2,1,0,
						1,1,1,1,1,2,2,1,2,2,1,0,
						3,3,3,1,1,1,2,1,2,2,1,1,
						3,2,2,1,2,2,2,2,1,2,2,1,
						3,2,2,2,2,2,2,2,2,2,2,1,
						3,2,2,1,2,2,2,2,1,2,2,1,
						3,3,3,1,1,1,2,1,2,2,1,1,
						1,1,1,1,1,2,2,2,2,2,1,0,
						0,0,0,0,1,2,2,1,2,2,1,0,
						0,0,0,0,1,1,1,1,1,1,1,0
					],
					//地图宽高
					size:[12,12],
					//箱子坐标
					box:[
						{x : 5 , y : 6},
						{x : 6 , y : 3},
						{x : 6 , y : 5},
						{x : 6 , y : 7},
						{x : 6 , y : 9},
						{x : 7 , y : 2},
						{x : 8 , y : 2},
						{x : 9 , y : 6},
						{x : 1 , y : 5}
					],
					//人物坐标
					person:[5,9],
				}
	],
	
	//创建地图
	map : function(index){
		$("#wrap").empty();//绘制下一关的图片时，要把上一关的清空掉
		//设置#wrap的宽高
		var w = this.gk[index].size[0]*50+"px";
		var h = this.gk[index].size[1]*50+"px";
		$("#wrap").css({
			width:w,
			height:h
		});
		
		//画背景图片
		for(var i=0; i<this.gk[index].map.length; i++){
			$("#wrap").append('<div class="map'+this.gk[index].map[i]+'"></div>');
		}
		
		//画箱子
		for(var i=0; i<this.gk[index].box.length; i++){
			var $box = $('<div class="box"></div>');
			$("#wrap").append($box);
			$box.css({
				left:this.gk[index].box[i].x*50+"px",
				top:this.gk[index].box[i].y*50+"px"
			});
		}
		
		//画乌龟
		var $person = $('<div class="person"></div>');
			$("#wrap").append($person);
			$person.css({
				left:this.gk[index].person[0]*50+"px",
				top:this.gk[index].person[1]*50+"px"
			});
		//保存数据，便于调用movePerson()时可以获取改变乌龟信息
		$person.data("x",this.gk[index].person[0]);
		$person.data("y",this.gk[index].person[1]);
		this.controlPerson($person,index,this);//创建完地图以后激发移动操作
	},
	
	//控制人物
	controlPerson : function($person,index,This){
		//设置This形参是为了解决this指向问题，不然此处的this不再指向Game，而是指向document。
		$(document).unbind("keydown");//防止玩其他关卡的时候，之前关卡的绑定还在，这样就会为页面绑定多个事件，代码执行多次，导致速度变慢
		$(document).bind("keydown",function(e){
			switch(e.which){//e.which表示获取按键值
				case 37://左
					$person.css('backgroundPosition','-150px 0px');
					This.movePerson({x:-1},$person,index,This);
					/*var position = $person.data("y")*This.gk[index].size[0]+$person.data("x")-1;//算出乌龟移动后所在位置在map中对应的索引值
					if(This.gk[index].map[position] != 1){//表示移动后乌龟没撞墙
						$person.data("x",$person.data("x")-1);//将原来的位置左移一块
						$person.css({
							left:$person.data("x")*50+"px"
						});	
					}*/
				break;
				case 38://上
					$person.css('backgroundPosition','0px 0px');
					var position = ($person.data("y")-1)*This.gk[index].size[0]+$person.data("x");//算出乌龟所在位置在map中对应的索引值
					This.movePerson({y:-1},$person,index,This);
				break;
				case 39://右
					$person.css('backgroundPosition','-50px 0px');
					This.movePerson({x:1},$person,index,This);
				break;
				case 40://下
					$person.css('backgroundPosition','-100px 0px');
					This.movePerson({y:1},$person,index,This);
				break;
			}
		});
	},
	//移动人物
	movePerson : function(mJson,$person,index,This){
		var mx = mJson.x || 0;//运动方向
		var my = mJson.y || 0;
		var position = ($person.data("y")+my)*this.gk[index].size[0]+$person.data("x")+mx;//算出乌龟移动后所在位置在map中对应的索引值
		if(this.gk[index].map[position] != 1){//表示移动后乌龟没撞墙
			$person.data("x",$person.data("x")+mx);//移动后的位置保存成乌龟的新位置
			$person.data("y",$person.data("y")+my);
			$person.css({
				left:$person.data("x")*50+"px",
				top:$person.data("y")*50+"px"
			});	
		}
		$(".box").each(function(i){//为每一个箱子检测是否碰撞
			if( This.pz($person,$(this)) ){//碰上了
				if(This.gk[index].map[($person.data("y")+my)*This.gk[index].size[0]+$person.data("x")+mx] != 1){//如果箱子前面不是墙
					$(this).css({//箱子朝着乌龟移动方向前进一步
						left:($person.data("x")+mx)*50+"px",
						top:($person.data("y")+my)*50+"px"
					});
					$(".box").each(function(j){
						if(This.pz($(".box").eq(i),$(".box").eq(j)) && i!=j){//当前箱子与除了本身之外的箱子碰撞
							//乌龟移动后被弹回
							$person.data("x",$person.data("x")-mx);//移动后的位置保存成乌龟的新位置
							$person.data("y",$person.data("y")-my);
							$person.css({
								left:$person.data("x")*50+"px",
								top:$person.data("y")*50+"px"
							});	
							//箱子仍在乌龟的前一个
							$(this).css({//箱子朝着乌龟移动方向前进一步
								left:($person.data("x")+mx)*50+"px",
								top:($person.data("y")+my)*50+"px"
							});
						}
					});
				}else{//如果箱子前面是墙，乌龟运动后被弹回
					$person.data("x",$person.data("x")-mx);//移动后的位置保存成乌龟的新位置
					$person.data("y",$person.data("y")-my);
					$person.css({
						left:$person.data("x")*50+"px",
						top:$person.data("y")*50+"px"
					});	
				}
			}
		});
		This.pass(This,index);
		This.changeColor(This,index);
	},
	//碰撞检测
	pz : function(obj1,obj2){
		//obj1乌龟
		//obj2箱子
		var top1 = obj1.position().top;
		var left1 = obj1.position().left;
		var top2 = obj2.position().top;
		var left2 = obj2.position().left;
		if(Math.abs(top1-top2)>=50 || Math.abs(left1-left2)>=50){
			return false;
		}else{
			return true;
		}
	},
	//过关检测
	pass : function(This,index){
		var number=0;
		$(".map3").each(function(i){
			$(".box").each(function(j){
				if( This.pz($(".map3").eq(i),$(".box").eq(j)) ){
					number++;
				}
			});
		});
		if(number == $(".map3").size() ){
					index++;
					switch (index)
					{
						case 1:
							alert('恭喜通过第一关！')
							break;
						case 2:
							alert('恭喜通过第二关！！…')
							break;
						case 3:
							alert('居然能过第三关>.<')
							break;
						case 4:
							alert('难道？？？你就是传说中的推箱子之王？！')
							break;
						case 5:
							alert('好吧！我被你的智慧折服了~')
							break;
						case 6:
							alert('噗————我自己都没通过啊！你是怎么做到的！');
							break;
						case 7:
							alert('.....恭喜你通过最后一关！吃饭去吧')
							break;
					
					}
					This.exe(index);
		}
	},
	//改变盒子颜色
	changeColor : function(This,index){
		$(".box").each(function(i){
			var xx = $(".box").eq(i).position().left/50;
			var yy = $(".box").eq(i).position().top/50;
			var position = yy*This.gk[index].size[0]+xx;
			if(This.gk[index].map[position] == 3){
				$(".box").eq(i).css({
						background:'url("img/box2.png")'
				});
			}else{
				$(".box").eq(i).css({
						background:'url("img/box.png")'
				});
			}
		});
	}
};
