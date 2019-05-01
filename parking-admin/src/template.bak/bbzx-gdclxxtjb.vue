<template>
	<div class="box">
		<div class="top">
			<div class="clf tabs">
				<a href="javascript:" class="current">首页</a>
				<a href="javascript:">固定车辆信息统计表</a>
			</div>
			<div class="clf btns">
				<a href="javascript:">登记车辆</a>
				<a href="javascript:">导入授权</a>
				<a href="javascript:">导出 TXT</a>
			</div>

			<div class="info toggleDiv">
				<form action="">
					<ul class="clf">
						<li>
							<span>电话号码：</span>
							<div>
								<input type="text" placeholder="请输入">
							</div>
						</li>
						<li>
							<span>用户姓名：</span>
							<div>
								<select name="" id="1">
									<option value="" disabled selected>请选择</option>
									<option value="">123</option>
									<option value="">234</option>
									<option value="">345</option>
								</select>
							</div>

						</li>
						<li>
							<span>房号：</span>
							<div>
								<select name="" id="2">
									<option value="" disabled selected>请选择</option>
									<option value="">123</option>
									<option value="">234</option>
									<option value="">345</option>
								</select>
							</div>

						</li>
						<li>
							<span>搜索名称：</span>
							<div>
								<input type="text" placeholder="请输入">
							</div>

						</li>
						<li>
							<span>创建时间：</span>
							<div>
								<input type="text" placeholder="请输入">
							</div>

						</li>
					</ul>
				</form>
			</div>

			<div class="clf search">
				<div class="fl"><span>批量删除</span>共搜索到 <span>922</span> 条数据</div>
				<div class="fr">
					<input type="submit" value="搜索">
					<input type="submit" value="清除">
					<a class="ss" href="javascript:">
						<i><img src="../common/images/icon_t_arrow2.png" alt=""></i>
						<span>收起搜索</span>
					</a>
				</div>
			</div>

		</div>

		<div class="bottom">
			<div class="remind">已选择 <span>5</span> 项数据。</div>
			<div class="content">
				<table>
					<tr>
						<th><input type="checkbox"></th>
						<th>代码</th>
						<th>名称</th>
						<th>类型</th>
						<th>创建日期</th>
						<th>创建者</th>
						<th>状态</th>
						<th>最后操作日期</th>
						<th>最后操作者</th>
					</tr>
					<tr>
						<td><input type="checkbox"></td>
						<td>L0678</td>
						<td>币种</td>
						<td>离散条件</td>
						<td>2015-09-26 08:50:08</td>
						<td>正常</td>
						<td>已配置，待生效</td>
						<td>2015-09-26 08:50:08</td>
						<td>李大昌</td>
					</tr>
					<tr>
						<td><input type="checkbox"></td>
						<td>L0678</td>
						<td>币种</td>
						<td>离散条件</td>
						<td>2015-09-26 08:50:08</td>
						<td>正常</td>
						<td>已配置，待生效</td>
						<td>2015-09-26 08:50:08</td>
						<td>李大昌</td>
					</tr>
					<tr>
						<td><input type="checkbox"></td>
						<td>L0678</td>
						<td>币种</td>
						<td>离散条件</td>
						<td>2015-09-26 08:50:08</td>
						<td>正常</td>
						<td>已配置，待生效</td>
						<td>2015-09-26 08:50:08</td>
						<td>李大昌</td>
					</tr>
					<tr>
						<td><input type="checkbox"></td>
						<td>L0678</td>
						<td>币种</td>
						<td>离散条件</td>
						<td>2015-09-26 08:50:08</td>
						<td>正常</td>
						<td>已配置，待生效</td>
						<td>2015-09-26 08:50:08</td>
						<td>李大昌</td>
					</tr>
					<tr>
						<td><input type="checkbox"></td>
						<td>L0678</td>
						<td>币种</td>
						<td>离散条件</td>
						<td>2015-09-26 08:50:08</td>
						<td>正常</td>
						<td>已配置，待生效</td>
						<td>2015-09-26 08:50:08</td>
						<td>李大昌</td>
					</tr>
				</table>
			</div>

			<div class="clf page">
				<a href="javascript:">上一页</a>
				<a href="javascript:">1</a>
				<a href="javascript:">2</a>
				<a href="javascript:">3</a>
				<a href="javascript:">4</a>
				<a href="javascript:">5</a>
				<a href="javascript:">6</a>
				<a href="javascript:">7</a>
				<a href="javascript:">8</a>
				<a href="javascript:">9</a>
				<a href="javascript:">下一页</a>
				<a href="javascript:">10条/页</a>
				<div>跳至 <input type="text"> 页</div>
			</div>

		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	@import url("../common/css/bbzx_clsq.css");
</style>