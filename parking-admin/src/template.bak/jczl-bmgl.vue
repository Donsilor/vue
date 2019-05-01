<template>
	<div>
		<div class="box">
			<div class="position">
				<a href="javascript:">首页</a> > <span>房屋管理</span></div>
			<div class="content">
				<div class="search ">
					<div class="clf top toggleDiv">
						<div class="add">
							<a href="javascript:">+新增</a>
						</div>
						<div class="condition">
							<span>搜索条件：</span>
							<div>
								<input type="text" placeholder="请输入">
								<input type="submit" value="">
							</div>
						</div>
					</div>
					<div class="clf bottom">
						<div class="fl">
							<a href="javascript:">请选择 <img src="" alt=""></a>
							<a href="javascript:">批量删除</a>
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
					<div class="selected">已选 <span>5</span> 项数据</div>
					<div class="tab">
						<table>
							<tr>
								<th><input type="checkbox" name="checkbox"></th>
								<th>编号</th>
								<th>名称</th>
								<th>备注</th>
								<th>操作</th>
							</tr>
							<tr>
								<td><input type="checkbox"></td>
								<td>L0678</td>
								<td>部门A</td>
								<td>备注1</td>
								<td>
									<a href="javascript:">编辑</a>
									<a href="javascript:">删除</a>
								</td>
							</tr>
							<tr>
								<td><input type="checkbox"></td>
								<td>L0678</td>
								<td>部门A</td>
								<td>备注1</td>
								<td>
									<a href="javascript:">编辑</a>
									<a href="javascript:">删除</a>
								</td>
							</tr>
							<tr>
								<td><input type="checkbox"></td>
								<td>L0678</td>
								<td>部门A</td>
								<td>备注1</td>
								<td>
									<a href="javascript:">编辑</a>
									<a href="javascript:">删除</a>
								</td>
							</tr>
							<tr>
								<td><input type="checkbox"></td>
								<td>L0678</td>
								<td>部门A</td>
								<td>备注1</td>
								<td>
									<a href="javascript:">编辑</a>
									<a href="javascript:">删除</a>
								</td>
							</tr>
							<tr>
								<td><input type="checkbox"></td>
								<td>L0678</td>
								<td>部门A</td>
								<td>备注1</td>
								<td>
									<a href="javascript:">编辑</a>
									<a href="javascript:">删除</a>
								</td>
							</tr>
							<tr>
								<td><input type="checkbox"></td>
								<td>L0678</td>
								<td>部门A</td>
								<td>备注1</td>
								<td>
									<a href="javascript:">编辑</a>
									<a href="javascript:">删除</a>
								</td>
							</tr>
							<tr>
								<td><input type="checkbox"></td>
								<td>L0678</td>
								<td>部门A</td>
								<td>备注1</td>
								<td>
									<a href="javascript:">编辑</a>
									<a href="javascript:">删除</a>
								</td>
							</tr>
							<tr>
								<td><input type="checkbox"></td>
								<td>L0678</td>
								<td>部门A</td>
								<td>备注1</td>
								<td>
									<a href="javascript:">编辑</a>
									<a href="javascript:">删除</a>
								</td>
							</tr>
							<tr>
								<td><input type="checkbox"></td>
								<td>L0678</td>
								<td>部门A</td>
								<td>备注1</td>
								<td>
									<a href="javascript:">编辑</a>
									<a href="javascript:">删除</a>
								</td>
							</tr>
						</table>
					</div>
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
		<div class="main">
			<div class="depwd">
				<div class="top-nav">
					<p class="t-text fl">部门信息</p>
					<p class="close fr">x</p>
				</div>
				<div class="bot">
					<div class="cet">
						<div class="clf">
							<p class="red"><i class="iconfont icon-jian-tianchong"></i>错误提示的文案</p>
							<p class="num"><i class="iconfont icon-xingxing"></i><span>编号：</span><input type="text" placeholder="请输入编号，必填"></p>
							<p class="name"><i class="iconfont icon-xingxing"></i><span>名称：</span><input type="text" placeholder="请输入名称，必填"></p>
							<p class="bz"><i class="iconfont icon-xingxing"></i><span>备注：</span><input type="text" placeholder="请输入备注" id="inp"></p>
						</div>
						<div class="button clf">
							<a class="qr fr">确定</a>
							<a class="qx fr">取消</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		mounted() {
			var box = document.getElementsByClassName('box')[0];
			var w = localStorage.getItem('width');
//			console.log(w)
//			if(w == 85){
//				box.style.left = 85 + 'px';		
//			}else{
//				box.style.left = '';
//			}
			
		},
		methods() {
			$(document).ready(function() {
				$('.add').click(function() {
					$(".main").show();
					$('.depwd').draggable({
						handle: "div.top-nav"
					}, {
						containment: "parent"
					});
				});
				$(".close").click(function() {
					$(".main").hide();
				});
				$(".qx").click(function() {
					$(".main").hide();
				});
				
				
			});
		}
	}
</script>

<style scoped>
	@import url("../common/css/bmgl.css");
	@import url("../common/css/bmgl-tc.css");
</style>