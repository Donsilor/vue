<template>
	<div class="box">
		<div class="content">
			<div class="left">
				<div class="add">
					<a href="javascript:">+新增</a>
				</div>
				<div class="clf btns">
					<div class="btn_1">
						<i class="iconfont icon-shixiangyoujiantou-"></i>
						<input type="checkbox">
						<span class="b_title">系统管理员</span>
					</div>
					<ul>
						<li>
							<input type="checkbox">
							<span class="b_title">资源管理</span>
						</li>
						<li>
							<input type="checkbox">
							<span class="b_title">角色管理</span>
						</li>
						<li>
							<input type="checkbox">
							<span class="b_title">用户管理</span>
						</li>
						<li>
							<input type="checkbox">
							<span class="b_title">系统配置</span>
						</li>
						<li>
							<input type="checkbox">
							<span class="b_title">操作日志</span>
						</li>
					</ul>
					<div class="nav">
						<i class="iconfont icon-shixiangyoujiantou-"></i>
						<input type="checkbox">
						<span class="b_title">业务中心</span>
					</div>
					<div class="nav">
						<i class="iconfont icon-shixiangyoujiantou-"></i>
						<input type="checkbox">
						<span>监控中心</span>
					</div>
					<div class="nav">
						<i class="iconfont icon-shixiangyoujiantou-"></i>
						<input type="checkbox">
						<span class="b_title">报表中心</span>
					</div>
				</div>

			</div>

			<div class="right">
				<div class="nav-top">
					<ul class="clf">
						<li>首页</li>
						<li>房屋管理</li>
						<li>月卡续费</li>
						<li>车辆授权</li>
					</ul>
				</div>
				<div>
					<div class="name">父级：</div>
					<div class="role"><input type="text" placeholder="请选择"></div>
				</div>
				<div>
					<div class="name">编号：</div>
					<div class="role"><input type="text" placeholder="请输入"></div>
				</div>
				<div>
					<div class="name">名称：</div>
					<div class="role"><input type="text" placeholder="请输入"></div>
				</div>
				<div>
					<div class="name">类型：</div>
					<div class="role">
						<label for="1"><input type="radio" id="1" name="radio">菜单</label>
						<label for="2"><input type="radio" id="2" name="radio">按钮</label>
					</div>
				</div>
				<div>
					<div class="name">链接：</div>
					<div class="role"><input type="text" placeholder="请输入"></div>
				</div>
				<div>
					<div class="name">是否显示：</div>
					<div class="role">
						<label for="3"><input type="radio" id="3" name="radio1">菜单</label>
						<label for="4"><input type="radio" id="4" name="radio1">按钮</label>
					</div>
				</div>

				<div>
					<div class="name">图标：</div>
					<div class="role-icon">
						<a href="javascript:">选择图标</a>
					</div>
				</div>

				<div>
					<div class="name">排序：</div>
					<div class="role">
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
					<a href="javascript:">删除</a>
				</div>

			</div>
		</div>
	</div>

</template>

<script>
</script>

<style scoped>
	@import url("../common/css/zygl.css");
</style>