<template>
	<main>
		<div class="goods">
			<div class="menu-wrapper" ref="wrapper">
				<ul class="menu-content" ref="content">
					<li :class="{active: index == currentIndex}" @click="menuclick(index,item)" v-for="(item,index) in data.goods">		<span>{{item.name}}</span>
					</li>		
				</ul>
			</div>
			<div class="foods-wrapper" ref="foodswrapper">
				<ul>
					<li class="item" v-for="(item,index) in data.goods">
						<h1>{{item.name}}</h1>
						<ul>
							<li class="food-item" v-for="(food,index1) in item.foods">
								<div class="icon">
									<img :src="food.image" alt="" width="100" height="100">
								</div>
								<div class="content">
									<h2>{{food.name}}</h2>
									<p>{{food.description}}</p>
									<div class="extra">
										<span class="count">月售{{food.sellCount}}</span>
										<span>好评率:{{food.rating}}%</span>
									</div>
									<div class="price">￥{{food.price}}</div>
									<div class="add">+</div>
								</div>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		<div class="bottom">
			<div class="left">
				<div class="shop_box">
					<img class="shopping_car" src="../../static/image/gouwuche (2).png" height="48" width="48" alt="">					
				</div>
				<div class="text">
					<span class="amount">￥230</span>
					<span class="delivery">配送费￥5</span>
				</div>
			</div>
			<div class="right">去结算</div>
		</div>
	</main>
</template>

<script>
import Data from "../../data.json";
import BScroll from 'better-scroll';

export default {
	name: 'goods',
	data() {
		return{
			data:Data,
			listHeight:[],
			scrollY: 0,		//实时获取当前y轴的高度
			foodscroll:null,
			scroll:null,
			active_index:0,
		}
	},
	components: {

	},
	methods:{
		//左侧item点击事件
		menuclick(index,item){
			console.log('menu');
			console.log(index);
			console.log(item)
			//左边点击事件
			let rightItem = this.$refs.foodswrapper.getElementsByClassName('item');
			let el = rightItem[index];
			this.foodscroll.scrollToElement(el,300);
			this.active_index = index;
		},
		//右侧滚动事件
		rightscroll(e){
			// console.log('rightscroll',e.y)
			this.scrollY = Math.abs(Math.round(e.y));
			console.log(this.scrollY)
		},
		//  获取右边每一项的高度数组
		getHeight() {
			let rightItem = this.$refs.foodswrapper.getElementsByClassName('item');
			// let rightItem = document.getElementsByClassName('item')
			let height = 0;
			console.log(rightItem[0].offsetHeight)
			this.listHeight.push(height);
			for(let i = 0; i< rightItem.length; i++){
				let item = rightItem[i];
				var sitem = rightItem[i]; 
				console.log(item)
				// console.log(item.offsetHeight)
				height += (item.clientHeight);
				this.listHeight.push(height);
			}
		},
		//初始化BScroll
		initscroll(){
			this.scroll = new BScroll('.menu-wrapper',{
				click: true,
			});
			// console.log(this.$refs.foodswrapper);
			this.foodscroll = new BScroll(this.$refs.foodswrapper,{
				probeType: 3,
			});
			//
			this.foodscroll.on('scroll',this.rightscroll)
		},

	},
	mounted(){
		this.$nextTick(()=>{
			this.initscroll();
			this.getHeight();
		})
	},
	computed: {
		currentIndex (){
			for(let i = 0; i < this.listHeight.length; i++){
				let height = this.listHeight[i];
				let height2 = this.listHeight[i+1];

				if(!height2 || (this.scrollY >= height && this.scrollY<height2)){
					return i;
				}
				
			}
		}
	}
};

</script>

<style lang="less" scoped>
main{
	.goods{
		width: 100%;
		height: 100%;
		overflow: hidden;
		display: flex;
		flex: 1;
		.menu-wrapper{
			width: 80px;
			// border:1px solid black;
			background-color:#f3f5f7;
			li{
				// border:1px solid #eee;
				border-top: 1px solid #eee;
				border-bottom:1px solid #eee;
				// width: 56px;
				height: 60px;
				padding: 0 10px;
				display:flex;
				justify-content: center;
				align-items: center;
				margin:0 0;
			}
			.active{
				background-color:#fff;
			}

		}
		.foods-wrapper{
			flex:1;
			// border: 1px solid red;
			ul{
				.item{
					h1{
						height: 25px;
						line-height: 25px;
						padding-left:20px;
						background-color:#eee;
					}
					.food-item{
						margin:15px;
						display:flex;
						padding-bottom:15px;
						border-bottom:1px solid #eee;
						.content{
							width: 100%;
							padding-left:15px;
							position:relative;
							h2{
								font-size:15px;
							}
							p{
								padding:5px 0;
								color:#777;
							}
							.extra{
								color:#777;
								span{
									padding-right:20px;
								}
							}
							.price{
								color:#f40;
								font-size:15px;
							}
							.add{
								position:absolute;
								bottom:0;
								right:0px;
								width: 20px;
								height: 20px;
								font-size:16px;
								text-align: center;
								line-height:20px;
								color:#fff;
								border-radius:10px;
								background-color:#00a0dc;
							}
						}
					}
				}
			}
		}
	}
	.bottom{
		display:flex;
		width: 100%;
		height:50px;
		color:#999;
		.left{
			position:relative;
			flex: 2;
			display:flex;
			align-items:center;
			background-color:#262829;
			.shop_box{
				top: -20px;
				left:10px;
				position:absolute;
				background-color: #222;
				border-radius:50%;
				padding:10px;
			}
			.shopping_car{
				
				width: 20px;
				height:20px;
				padding:10px;
				border-radius:50%;
				// background-color:#00BFFF;
				background-color:#777;
			}
			.text{
				height:100%;
				font-size:15px;
				justify-content: space-around;
				display:flex;
				flex-direction: column;
				margin-left: 90px;
				.amount{
					color:#fff;
				}
				.delivery{
					font-size:12px;
				}
			}
		}
		.right{
			flex: 1;
			display:flex;
			justify-content: center;
			align-items:center;
			background-color:#333;
			
		}
	}

	.active{
		background-color:#fff;
	}
}
</style>