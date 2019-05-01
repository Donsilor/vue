<template>
	<div class="box">
		<div class="position">
			<a href="javascript:">首页</a> > <span>房屋管理</span></div>
		<div class="content">
			<div class="left">
				<div class="add">
					<a href="javascript:">+新增</a>
				</div>
				<div class="clf btns">
					<div class="selectDiv">
						<div class="btn_1">
							<span class="icon toggleBtn"><img src="../common/images/icon_b_arrow.png" alt="" style="transform: rotate(-90deg);"></span>
							<input type="checkbox">
							<span class="b_title">系统管理员</span>
							<a href="javascript:"><img src="../common/images/icon_10.png" alt=""></a>
							<a href="javascript:"><img src="../common/images/icon_11.png" alt=""></a>
						</div>
						<ul>
							<li>
								<input type="checkbox">
								<span class="b_title">运营</span>
								<a href="javascript:"><img src="../common/images/icon_10.png" alt=""></a>
								<a href="javascript:"><img src="../common/images/icon_11.png" alt=""></a>
							</li>
							<li>
								<input type="checkbox">
								<span class="b_title">管理</span>
								<a href="javascript:"><img src="../common/images/icon_10.png" alt=""></a>
								<a href="javascript:"><img src="../common/images/icon_11.png" alt=""></a>
							</li>
							<li>
								<input type="checkbox">
								<span class="b_title">资料员</span>
								<a href="javascript:"><img src="../common/images/icon_10.png" alt=""></a>
								<a href="javascript:"><img src="../common/images/icon_11.png" alt=""></a>
							</li>
						</ul>
					</div>
					<div class="selectDiv show">
						<div class="btn_1">
							<span class="icon toggleBtn"><img src="../common/images/icon_b_arrow.png" alt=""></span>
							<input type="checkbox">
							<span class="b_title">系统管理员</span>
							<a href="javascript:"><img src="../common/images/icon_10.png" alt=""></a>
							<a href="javascript:"><img src="../common/images/icon_11.png" alt=""></a>
						</div>
						<ul style="display: block;">
							<li>
								<input type="checkbox">
								<span class="b_title">运营</span>
								<a href="javascript:"><img src="../common/images/icon_10.png" alt=""></a>
								<a href="javascript:"><img src="../common/images/icon_11.png" alt=""></a>
							</li>
							<li>
								<input type="checkbox">
								<span class="b_title">管理</span>
								<a href="javascript:"><img src="../common/images/icon_10.png" alt=""></a>
								<a href="javascript:"><img src="../common/images/icon_11.png" alt=""></a>
							</li>
							<li>
								<input type="checkbox">
								<span class="b_title">资料员</span>
								<a href="javascript:"><img src="../common/images/icon_10.png" alt=""></a>
								<a href="javascript:"><img src="../common/images/icon_11.png" alt=""></a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="right">
				<div>
					<div class="name">父级：</div>
					<div class="role"><input type="text" placeholder="请选择"></div>
				</div>
				<div>
					<div class="name">角色标识：</div>
					<div class="role"><input type="text" placeholder="请输入"></div>
				</div>
				<div>
					<div class="name">角色名称：</div>
					<div class="role"><input type="text" placeholder="请输入"></div>
				</div>
				<div>
					<div class="name">是否显示：</div>
					<div class="role">
						<label for="1"><input type="radio" id="1" name="radio">菜单</label>
						<label for="2"><input type="radio" id="2" name="radio">按钮</label>
					</div>
				</div>
				<div>
					<div class="name">排序：</div>
					<div class="role">
						<div class="range" id="range1"></div>
						<div class="bottom_line">
							<span class="left_line"></span>
							<span class="top_line"><i></i></span>
							<span class="right_line"></span>
						</div>
					</div>
				</div>
				<div>
					<div class="name">备注：</div>
					<div class="role">
						<textarea name="" id="" cols="30" rows="10" placeholder="请输入备注"></textarea>
					</div>
				</div>

				<div class="clf btn">
					<a href="javascript:">修改</a>
					<a href="javascript:">配置资源</a>
					<a href="javascript:">删除</a>
				</div>

			</div>
		</div>

	</div>
</template>

<script>
//	import range from '../../static/range.js'
	
	export default {
		data() {
			return {}
		},
		mounted() {
			this.drowLine();
		},
		methods: {
			drowLine() {
				var input1 = document.getElementById("input1");
				new range("#range1", {
					min: 0,
					max: 100,
					value: 40,
					steps: 1,
					onChange: function(status) {
						input1.value = status.value;
					}
				});
			}
		}
	}
</script>

<style scoped>
	@import url("../common/css/zygl.css");
</style>