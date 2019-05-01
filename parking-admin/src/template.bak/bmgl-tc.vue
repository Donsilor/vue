<template>
	<div class="box">
		<div class="depwd">
			<div class="top-nav">
				<p class="t-text fl">部门信息</p>
				<p class="close fr">x</p>
			</div>
			<div class="bot">
				<div class="cet">
					<div class="clf">
						<p class="red"><i class="iconfont icon-jian-tianchong"></i>错误提示的文案</p>
						<p class="num"><i class="iconfont icon-xingxing"></i><span>编号：</span><input type="text" value="请输入编号，必填"></p>
						<p class="name"><i class="iconfont icon-xingxing"></i><span>名称：</span><input type="text" value="请输入名称，必填"></p>
						<p class="bz"><i class="iconfont icon-xingxing"></i><span>备注：</span><input type="text" value="请输入备注" id="inp">
						</p>
					</div>
					<div class="button clf">
						<a class="qr fr">确定</a>
						<a class="qx fr">取消</a>
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
			this.drowLine();
		},
		methods: {
			drowLine() {
				$(document).ready(function() {
					$(".close").click(function() {
						$(".depwd").hide();
					});
					$(".qx").click(function() {
						$(".depwd").hide();
					});

				});
			}
		}
	}
</script>

<style scoped>
	@import url("../common/css/bmgl-tc.css");
</style>