<template>
	<div>
		<div class="clf top_column">
		<div class="fl"><h6>管理系统</h6></div>
		<div class="fr">
			<a href="javascript:"><span>admin</span>欢迎您！</a>
			<a href="javascript:">刷新页面</a>
			<a href="javascript:">安全退出</a>
		</div>
		</div>
		<div class="left_column">
		<ul id="ul">
			<li class='current'>
			<div class="title">基础资料</div>
			<div class="menu">
				<a href="/#/admin_zygl">资源管理</a>
				<a href="/#/admin_bmgl">角色管理</a>
				<a href="/#/admin_bmgl">部门管理</a>
				<a href="admin-yhgl.html">用户管理</a>
				<a href="admin-sjzd.html">数据字典</a>
				<a href="admin-xmgl.html">项目管理</a>
				<a href="admin-sqgl.html">授权管理</a>
				<a href="/#/admin_czrz">操作日志</a>
			</div>
			</li>
			<li>
			<div class="title">业务中心</div>
			<div class="menu">
				<a href="ywzx-ccqy.html">车场区域</a>
				<a href="ywzx-clsq-kb.html">车辆授权</a>
				<a href="ywzx-fwgl.html">房屋管理</a>
				<a href="ywzx-sbgl-zk.html">设备管理展开</a>
				<a href="ywzx-sbgl.html">设备管理</a>
				<a href="ywzx-ykxf.html">月卡续费</a>
			</div>
			</li>
			<li>
			<div class="title">监控中心</div>
			<div class="menu">
				<a href="jkzx-sbjk-kb.html">设备监控-拷贝</a>
				<a href="jkzx-sbjk.html">设备监控</a>
			</div>
			</li>
			<li>
			<div class="title">报表中心</div>
			<div class="menu">
				<a href="bbzx_gdclxxtjb.html">固定车辆信息统计表</a>
				<a href="javascript:">固定车辆信息统计表-1</a>
			</div>
			</li>
		</ul>
		<a href="javascript:" class="toggleBtn"></a>
		</div>
		<div class="box">
			<router-view/>
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

<style scoped>
	@import url("../common/css/common.css");
</style>