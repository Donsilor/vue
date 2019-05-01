<template>
	<div class="box clf">
		<div class="nav clf">
			<ul>
				<li>首页</li>
				<li>房屋管理</li>
				<li>月卡续费</li>
				<li>车辆授权</li>
			</ul>
		</div>
		<div class="wrap clf">
			<div class="but clf top toggleDiv">
				<button class="but-l fl">新增</button>
			</div>
			<div class="bot clf">
				<div class="fl"><span>车场区域：</span><input class="inp" type="text" value="请输入"></div>
				<div class="fr">
					<a class="search fl">搜索</a>
					<a class="clear fl">清除</a>
					<a class="ss fl" href="javascript:">
						<i><img src="../common/images/icon_t_arrow2.png" alt=""></i>
						<span>收起搜索</span>
					</a>
				</div>
			</div>
		</div>
		<div class="list">
			<table>
				<tr>
					<th class="ckb"><input class="chk" type="checkbox"></th>
					<th>车牌号码</th>
					<th>住户姓名</th>
					<th>房号</th>
					<th>电话号码</th>
					<th>车辆颜色</th>
					<th>车辆品牌</th>
					<th>车辆型号</th>
					<th>状态</th>
					<th>创建时间</th>
					<th>更新时间</th>
					<th>操作员</th>
					<th>是否授权</th>
					<th class="de">操作</th>
				</tr>
				<tr>
					<td class="ckb"><input class="rad" type="radio" id="deo1" name="radio" value="1"><label for="deo1"></label></td>
					<td>粤b123456</td>
					<td>李大亮</td>
					<td>碧海苑2栋1单元1609</td>
					<td>13056874952</td>
					<td><span class="col black"></span></td>
					<td>宝马</td>
					<td>530</td>
					<td>正常</td>
					<td>2018-08-21</td>
					<td>2018-08-21</td>
					<td>admin</td>
					<td>
						<a href="">未授权</a>
					</td>
					<td class="de detext"><i style="margin-right: 1rem;margin-left: 1rem;" class="iconfont icon-edit fl"></i><i class="iconfont icon-shanchu fl"></i></td>
				</tr>
				<tr>
					<td class="ckb"><input class="rad" type="radio" id="deo2" name="radio" value="1"><label for="deo2"></label></td>
					<td>粤b123456</td>
					<td>李大亮</td>
					<td>碧海苑2栋1单元1609</td>
					<td>13056874952</td>
					<td><span class="col green"></span></td>
					<td>宝马</td>
					<td>530</td>
					<td>正常</td>
					<td>2018-08-21</td>
					<td>2018-08-21</td>
					<td>admin</td>
					<td>
						<a href="">未授权</a>
					</td>
					<td class="de detext"><i style="margin-right: 1rem;margin-left: 1rem;" class="iconfont icon-edit fl"></i><i class="iconfont icon-shanchu fl"></i></td>
				</tr>
				<tr>
					<td class="ckb"><input class="rad" type="radio" id="deo3" name="radio" value="1"><label for="deo3"></label></td>
					<td>粤b123456</td>
					<td>李大亮</td>
					<td>碧海苑2栋1单元1609</td>
					<td>13056874952</td>
					<td><span class="col blue"></span></td>
					<td>宝马</td>
					<td>530</td>
					<td>正常</td>
					<td>2018-08-21</td>
					<td>2018-08-21</td>
					<td>admin</td>
					<td>
						<a href="">未授权</a>
					</td>
					<td class="de detext"><i style="margin-right: 1rem;margin-left: 1rem;" class="iconfont icon-edit fl"></i><i class="iconfont icon-shanchu fl"></i></td>
				</tr>
				<tr>
					<td class="ckb"><input class="rad" type="radio" id="deo4" name="radio" value="1"><label for="deo4"></label></td>
					<td>粤b123456</td>
					<td>李大亮</td>
					<td>碧海苑2栋1单元1609</td>
					<td>13056874952</td>
					<td><span class="col rd"></span></td>
					<td>宝马</td>
					<td>530</td>
					<td>正常</td>
					<td>2018-08-21</td>
					<td>2018-08-21</td>
					<td>admin</td>
					<td>
						<a href="">未授权</a>
					</td>
					<td class="de detext"><i style="margin-right: 1rem;margin-left: 1rem;" class="iconfont icon-edit fl"></i><i class="iconfont icon-shanchu fl"></i></td>
				</tr>
				<tr>
					<td class="ckb"><input class="rad" type="radio" id="deo5" name="radio" value="1"><label for="deo5"></label></td>
					<td>粤b123456</td>
					<td>李大亮</td>
					<td>碧海苑2栋1单元1609</td>
					<td>13056874952</td>
					<td><span class="col brown"></span></td>
					<td>宝马</td>
					<td>530</td>
					<td>正常</td>
					<td>2018-08-21</td>
					<td>2018-08-21</td>
					<td>admin</td>
					<td>
						<a href="">未授权</a>
					</td>
					<td class="de detext"><i style="margin-right: 1rem;margin-left: 1rem;" class="iconfont icon-edit fl"></i><i class="iconfont icon-shanchu fl"></i></td>
				</tr>
				<tr>
					<td class="ckb"><input class="rad" type="radio" id="deo6" name="radio" value="1"><label for="deo6"></label></td>
					<td>粤b123456</td>
					<td>李大亮</td>
					<td>碧海苑2栋1单元1609</td>
					<td>13056874952</td>
					<td><span class="col brown"></span></td>
					<td>宝马</td>
					<td>530</td>
					<td>正常</td>
					<td>2018-08-21</td>
					<td>2018-08-21</td>
					<td>admin</td>
					<td>
						<a href="">未授权</a>
					</td>
					<td class="de detext"><i style="margin-right: 1rem;margin-left: 1rem;" class="iconfont icon-edit fl"></i><i class="iconfont icon-shanchu fl"></i></td>
				</tr>
			</table>
			<div class="bott clf">
				<p class="prr fr"><span style="margin-right: 0.5rem;" class="fl">跳至</span><input class="fl" type="text"><span style="margin-left: 0.5rem;" class="fl">页</span></p>
				<p class="prl fr"><span>10条/页</span></p>
				<ul>
					<li><span>上一页</span></li>
					<li>1</li>
					<li>2</li>
					<li>3</li>
					<li>4</li>
					<li>5</li>
					<li>6</li>
					<li>7</li>
					<li>8</li>
					<li>9</li>
					<li><span>下一页</span></li>
				</ul>
			</div>

		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	@import url("../common/css/clsq.css");
</style>