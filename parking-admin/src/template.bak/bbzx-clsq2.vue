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

			<div class="info">
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
					<span><i><img src="../common/images/icon_t_arrow.png" alt=""></i>收起搜索</span>
				</div>
			</div>

		</div>

		<div class="bottom">
			<div id="flowDistribution"></div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		mounted() {
			this.drowLine();
		},
		methods: {
			drowLine() {
				var flowDistribution = this.$echarts.init(document.getElementById('flowDistribution'));
				var flowDistributionOption = {
					title: {
						text: '流量分布',
						left: '0px',
						textStyle: {
							fontSize: 20,
							fontWeight: 'normal'
						}
					},
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['临停', '固定'],
						right: 0
					},
					grid: {
						left: '0',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14']
					},
					yAxis: {
						type: 'value'
					},
					series: [{
							name: '临停',
							type: 'line',
							stack: '总量',
							data: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210]
						},
						{
							name: '固定',
							type: 'line',
							stack: '总量',
							data: [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310]
						}
					],
					color: ['#1c7dfa', '#53d769']
				};
				flowDistribution.setOption(flowDistributionOption);

			}
		}
	}
</script>

<style scoped>
	@import url("../common/css/bbzx_clsq.css");
</style>