<template>
	<view>
		<view style="display: flex; align-items: center; justify-content: center; padding: 40px 0;">
			<u--image src="../../static/logo.png" width="80px" height="80px"></u--image>
		</view>
		
		<view style="padding: 0 24px;">
			<u--form labelPosition="left" labelWidth="auto" :labelStyle="{'margin-right': '8px'}" :model="model1">
				<u-form-item label="账号" prop="userInfo.username">
					<u--input v-model="model1.userInfo.username" border="surround" shape="circle" placeholder="请输入账号"></u--input>
				</u-form-item>
				
				<u-form-item label="密码" prop="userInfo.password">
					<u--input v-model="model1.userInfo.password" border="surround" shape="circle" placeholder="请输入密码"></u--input>
				</u-form-item>
			</u--form>
		</view>
		
		<view style="padding: 24px;">
			<navigator url="/pages/index/index">
				<u-button type="success" text="登录"></u-button>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				model1: {
					userInfo: {
						username: '',
						password: ''
					}
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
