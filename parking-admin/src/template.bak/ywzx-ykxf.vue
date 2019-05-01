<template>
	<div class="box">
		<div class="position">
			<a href="javascript:">首页</a> > <span>房屋管理</span></div>
		<div class="content">
			<div class="search ">
				<div class="clf">
					<div class="add clf">
						<a href="javascript:"><i class="iconfont icon-daoru"></i>导入续费</a>
					</div>
					<div class="inf">
						<ul class="clf toggleDiv">
							<li><span>车牌号码：</span><input type="text" placeholder="请输入"></li>
							<li><span style="padding-left: 14px;">住户：</span>
								<select>
									<option>-请选择-</option>
									<option>1111111</option>
									<option>1212</option>
									<option>123131</option>
								</select>
							</li>
							<li><span>状态：</span>
								<select>
									<option>-请选择-</option>
									<option>1111111</option>
									<option>1212</option>
									<option>123131</option>
								</select>
							</li>
							<li><span style="padding-left:28px;">车位：</span><input type="text" placeholder="请输入"></li>
							<li><span>有限期：</span><input class="time" type="datetime-local" value="2015-09-24T13:59:59"></li>
						</ul>
					</div>
				</div>
				<div class="clf bottom">
					<div class="fl">
						<!--<a href="javascript:">请选择 <img src="" alt=""></a>
          <a href="javascript:">批量删除</a>
          <a href="javascript:">配置车场收费标准</a>-->
						<div>共搜索到 <span>922</span> 条数据</div>
					</div>
					<div class="fr">
						<a href="javascript:">搜索</a>
						<a href="javascript:">清除</a>
						<a class="ss" href="javascript:">
							<i><img src="../common/images/icon_t_arrow2.png" alt=""></i>
							<span>收起搜索</span>
						</a>
					</div>
				</div>
			</div>
			<div class="result">
				<div class="selected">已选 <span>5</span>项数据</div>
				<div class="tab clf">
					<table>
						<tr>
							<th></th>
							<th>车牌号码</th>
							<th>住户</th>
							<th>房号</th>
							<th>电话号码</th>
							<th>车辆类型</th>
							<th>车位</th>
							<th>有效期至</th>
							<th>状态</th>
							<th>最后延期时间</th>
							<th>操作员</th>
							<th>操作</th>
						</tr>
						<tr>
							<td><input type="checkbox"></td>
							<td>粤B123456</td>
							<td>李大昌</td>
							<td>普碧海苑2栋1单元1609</td>
							<td>13048598745</td>
							<td>月卡A</td>
							<td>地下地库A10001</td>
							<td>
								<p>2015-09-26</p>08:50:08</td>
							<td>正常</td>
							<td>
								<p>2015-09-26</p>08:50:08</td>
							<td>admin</td>
							<td>
								<a href="javascript:">延期续费</a>
							</td>
						</tr>
						<tr>
							<td><input type="checkbox"></td>
							<td>粤B123456</td>
							<td>李大昌</td>
							<td>普碧海苑2栋1单元1609</td>
							<td>13048598745</td>
							<td>月卡A</td>
							<td>地下地库A10001</td>
							<td>
								<p>2015-09-26</p>08:50:08</td>
							<td>正常</td>
							<td>
								<p>2015-09-26</p>08:50:08</td>
							<td>admin</td>
							<td>
								<a href="javascript:">延期续费</a>
							</td>
						</tr>
						<tr>
							<td><input type="checkbox"></td>
							<td>粤B123456</td>
							<td>李大昌</td>
							<td>普碧海苑2栋1单元1609</td>
							<td>13048598745</td>
							<td>月卡A</td>
							<td>地下地库A10001</td>
							<td>
								<p>2015-09-26</p>08:50:08</td>
							<td>正常</td>
							<td>
								<p>2015-09-26</p>08:50:08</td>
							<td>admin</td>
							<td>
								<a href="javascript:">延期续费</a>
							</td>
						</tr>

						<tr>
							<td><input type="checkbox"></td>
							<td>粤B123456</td>
							<td>李大昌</td>
							<td>普碧海苑2栋1单元1609</td>
							<td>13048598745</td>
							<td>月卡A</td>
							<td>地下地库A10001</td>
							<td>
								<p>2015-09-26</p>08:50:08</td>
							<td>正常</td>
							<td>
								<p>2015-09-26</p>08:50:08</td>
							<td>admin</td>
							<td>
								<a href="javascript:">延期续费</a>
							</td>
						</tr>
						<tr>
							<td><input type="checkbox"></td>
							<td>粤B123456</td>
							<td>李大昌</td>
							<td>普碧海苑2栋1单元1609</td>
							<td>13048598745</td>
							<td>月卡A</td>
							<td>地下地库A10001</td>
							<td>
								<p>2015-09-26</p>08:50:08</td>
							<td>正常</td>
							<td>
								<p>2015-09-26</p>08:50:08</td>
							<td>admin</td>
							<td>
								<a href="javascript:">延期续费</a>
							</td>
						</tr>
						<tr>
							<td><input type="checkbox"></td>
							<td>粤B123456</td>
							<td>李大昌</td>
							<td>普碧海苑2栋1单元1609</td>
							<td>13048598745</td>
							<td>月卡A</td>
							<td>地下地库A10001</td>
							<td>
								<p>2015-09-26</p>08:50:08</td>
							<td>正常</td>
							<td>
								<p>2015-09-26</p>08:50:08</td>
							<td>admin</td>
							<td>
								<a href="javascript:">延期续费</a>
							</td>
						</tr>
						<tr>
							<td><input type="checkbox"></td>
							<td>粤B123456</td>
							<td>李大昌</td>
							<td>普碧海苑2栋1单元1609</td>
							<td>13048598745</td>
							<td>月卡A</td>
							<td>地下地库A10001</td>
							<td>
								<p>2015-09-26</p>08:50:08</td>
							<td>正常</td>
							<td>
								<p>2015-09-26</p>08:50:08</td>
							<td>admin</td>
							<td>
								<a href="javascript:">延期续费</a>
							</td>
						</tr>
					</table>
				</div>
				<div class="selected fl">已选 <span>5</span>项数据</div>
				<div class="page">
					<a href="javascript:"><img src="../common/images/icon_l_arrow.png" alt=""></a>
					<a href="javascript:">1</a>
					<a href="javascript:">2</a>
					<a href="javascript:">3</a>
					<a href="javascript:">4</a>
					<a href="javascript:">5</a>
					<a href="javascript:">6</a>
					<a href="javascript:">7</a>
					<a href="javascript:">8</a>
					<a href="javascript:">9</a>
					<a href="javascript:"><img src="../common/images/icon_r_arrow.png" alt=""></a>
					<span>10条/页</span>
					<span>跳至<input type="text">页</span>
				</div>

			</div>

		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	@import url("../common/css/ccqy.css");
</style>