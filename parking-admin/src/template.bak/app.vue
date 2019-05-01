<template>
	<div>
		<div class="clf top_column">
			<div class="fl">
				<h6>管理系统</h6>
			</div>
			<div class="fr">
				<a href="javascript:"><span>admin</span>欢迎您！</a>
				<a href="javascript:">刷新页面</a>
				<a href="javascript:">安全退出</a>
			</div>
		</div>
		<div class="k_main">
			<div class="left_column">
				<ul id="ul">
					<li class='current'>
						<div class="title">基础资料</div>
						<div class="menu">
							<router-link to="/">部门管理</router-link>
							<router-link to="/jczlCzrz">操作日志</router-link>
							<router-link to="/jczlSjzd">数据字典</router-link>
							<router-link to="/jczlXtpz">系统配置</router-link>
							<router-link to="/jczlYhgl">用户管理</router-link>
							<router-link to="/jczlZygl">资源管理</router-link>
						</div>
					</li>
					<li> 
						<div class="title">业务中心</div>
						<div class="menu">
							<router-link to="/ywzxCcqy">车场区域</router-link>
							<router-link to="/ywzxClsqKb">车辆授权</router-link>
							<router-link to="/ywzxFwgl">房屋管理</router-link>
							<router-link to="/ywzxSbglZk">设备管理展开</router-link>
							<router-link to="/ywzxSbgl">设备管理</router-link>
							<router-link to="/ywzxYkxf">月卡续费</router-link>
						</div>
					</li>
					<li>
						<div class="title">监控中心</div>
						<div class="menu">
							<router-link to="/jkzxSbjkKb">设备监控-拷贝</router-link>
							<router-link to="/jkzxSbjk">设备监控</router-link>
						</div>
					</li>
					<li>
						<div class="title">报表中心</div>
						<div class="menu">
							<router-link to="/bbzxGdclxxtjb">固定车辆信息统计表</router-link>
							<a>固定车辆信息统计表-1</a>
						</div>
					</li>
				</ul>
				<a href="javascript:" class="toggleBtn"></a>
			</div>
			<div class="right_column">
				<router-view/>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		mounted() {
			this.drowLine();
		},
		
		methods: {
			drowLine() {
				function change(id) {
					var li = document.getElementsByTagName(id)[0].getElementsByTagName('li');
					var dtp = false;
					for(var i=0; i<li.length; i++){
						li[i].children[0].onclick = function(){
							if(this.parentNode.classList.contains('current') == true){
								dtp = true;
							}
							for(var i=0; i<li.length; i++){
								li[i].className = '';
							}
							if(dtp){
								this.parentNode.className = '';
								dtp = false;
							}else{
								this.parentNode.className = 'current';
							}
						}
					}
				}
				change('ul'); //左边导航栏事件

			}
		}
	}
</script>

<style>
	.top_column{width:100%;height:60px;padding-right:5%;line-height:60px;
	    background: -webkit-linear-gradient(left, #34313e , #213853 , #3a3d4a); /* Safari 5.1 - 6.0 */
	    background: -o-linear-gradient(right, #34313e, #213853 , #3a3d4a); /* Opera 11.1 - 12.0 */
	    background: -moz-linear-gradient(right, #34313e, #213853 , #3a3d4a); /* Firefox 3.6 - 15 */
	    background: linear-gradient(to right, #34313e , #213853 , #3a3d4a); /* 标准的语法 */
	}
	.top_column .fl{width:13%;text-align:center;}
	.top_column .fl h6{font-size:20px;color:#fff;}
	.top_column .fr a{float:left;margin-left:50px;display:block;height:100%;line-height:60px;font-size:16px;color:#fff;}
	.top_column .fr a:last-child:before{content:'';display:inline-block;width:14px;height:14px;background:url(../common/images/icon_close.png)no-repeat center/contain;margin-right:5px;}
	.top_column .fr a:nth-child(2):before{content:'';display:inline-block;width:14px;height:14px;background:url(../common/images/icon_refresh.png)no-repeat center/contain;margin-right:5px;}
	.k_main{height: 100%;height:calc(100% - 60px);display: flex;}
	.left_column{
	    width:15%;
	   height: 100%;
	    position: relative;
	    transition: all .3s;
	    background: -webkit-linear-gradient(#34313e, #2d6475); /* Safari 5.1 - 6.0 */
	    background: -o-linear-gradient(#34313e, #2d6475); /* Opera 11.1 - 12.0 */
	    background: -moz-linear-gradient(#34313e, #2d6475); /* Firefox 3.6 - 15 */
	    background: linear-gradient(#34313e, #2d6475); /* 标准的语法 */
	}
	.left_column.simplify{width: 85px;}
	.left_column ul li{height:auto;cursor:pointer;}
	.left_column ul li div:first-child{width:100%;height:80px;border-top:1px solid #575f74;line-height:79px;font-size:18px;color:#fff;border-left:6px solid transparent;padding-left: 25px;white-space:nowrap;}
	.left_column ul li:last-child .title{border-bottom:1px solid #575f74;}
	.left_column ul li .menu{display:none;border-top:1px solid #575f74;background:#29333f;}
	.left_column ul li .menu > a{display:block;width:100%;line-height:1.5;text-align:center;font-size:16px;color:#fff;padding: .8rem 0;transition: all .3s;overflow: hidden;}
	.left_column.simplify  ul li div:first-child{}
	.left_column.simplify  ul li .menu > a{font-size: .8rem;}
	.left_column ul li .menu > a:hover,
	.left_column ul li .menu > a.active{background:#535d67;}
	.left_column ul li.current .title{border-left-color:#1c7dfa;}
	.left_column ul li.current .menu{display:block;}
	.left_column ul li div:first-child:before{content:'';display:inline-block;width:22px;height:22px;vertical-align:middle;margin-right:40px;}
	.left_column ul li:nth-child(1) div:first-child:before{background:url(../common/images/icon_1.png)no-repeat center/contain;}
	.left_column ul li:nth-child(2) div:first-child:before{background:url(../common/images/icon_2.png)no-repeat center/contain;}
	.left_column ul li:nth-child(3) div:first-child:before{background:url(../common/images/icon_3.png)no-repeat center/contain;}
	.left_column ul li:nth-child(4) div:first-child:before{background:url(../common/images/icon_4.png)no-repeat center/contain;}
	.left_column .toggleBtn{position: absolute;top: 50%;left: 100%;background: linear-gradient(#34313e, #2d6475);width: .8rem;height: 5rem;transform: translateY(-50%);z-index: 99;border-radius: 0 5px 5px 0;}

	.right_column{height: 100%;width:100px;flex: 1;position: relative;}
	.box{width:100%;height:100%;background:#eaedf1;transition: all .3s;position: absolute;top: 0;left: 0;}
	.box.simplify{left: 85px;}

	.router-link-active{background-color: #535d67;}
	
</style>