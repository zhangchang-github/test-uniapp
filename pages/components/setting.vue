<template>
	<view style="background-color: #ffffff;">
		<!-- navbar -->
		<u-navbar title="设置" :autoBack="true"></u-navbar>

		<!-- notice-bar -->
		<u-notice-bar :text="noticeText"></u-notice-bar>

		<!-- form -->
		<view style="padding: 0 24px;">
			<u--form labelPosition="left" labelWidth="auto" :labelStyle="{'margin-right': '8px'}" :model="model1" :rules="rules" ref="form1">
				<u-form-item label="姓名" prop="userInfo.name" borderBottom ref="item1">
					<u--input v-model="model1.userInfo.name" placeholder="请输入姓名" border="none"></u--input>
				</u-form-item>
				
				<u-form-item label="性别" prop="userInfo.sex" borderBottom @click="showSex = true;" ref="item1">
					<u--input v-model="model1.userInfo.sex" disabled disabledColor="#ffffff" placeholder="请选择性别" border="none"></u--input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>

				<u-form-item label="水果" prop="userInfo.radio" borderBottom>
					<u-radio-group v-model="model1.userInfo.radio">
						<u-radio v-for="(item, index) in radiolist" :key="index" :label="item.name" :name="item.name" style="margin-right: 16px;"></u-radio>
					</u-radio-group>
				</u-form-item>
				
				<u-form-item label="兴趣" prop="userInfo.box" borderBottom>
					<u-checkbox-group v-model="model1.userInfo.box">
						<u-checkbox v-for="(item, index) in checkboxList" :key="index" :label="item.name" :name="item.name" style="margin-right: 16px;"></u-checkbox>
					</u-checkbox-group>
				</u-form-item>
				
				<u-form-item label="简介" prop="userInfo.desc" borderBottom>
					<u--textarea v-model="model1.userInfo.desc" placeholder="请输入内容" count></u--textarea>
				</u-form-item>
				
				<u-form-item label="日历" prop="userInfo.calendar" borderBottom @click="showCalendar = true;">
					<u--input v-model="model1.userInfo.calendar" disabled disabledColor="#ffffff" placeholder="请选择日历" border="none"></u--input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
				
				<u-form-item label="时间" prop="userInfo.datetime" borderBottom @click="showDatetime = true;">
					<u--input v-model="model1.userInfo.datetime" disabled disabledColor="#ffffff" placeholder="请选择时间" border="none"></u--input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
				
				<u-form-item label="键盘" prop="userInfo.keyboard" borderBottom @click="showKeyboard = true;">
					<u--input v-model="model1.userInfo.keyboard" disabled disabledColor="#ffffff" placeholder="请选择" border="none"></u--input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
				
				<u-form-item label="验证码" prop="userInfo.code" borderBottom>
					<u--input v-model="model1.userInfo.code" placeholder="请输入验证码" border="none"></u--input>
					<u-button slot="right" @tap="getCode" type="success" size="small">{{ tips }}</u-button>
				</u-form-item>
				
				<u-form-item label="头像组" prop="userInfo.urls" borderBottom>
					<u-avatar-group :urls="model1.userInfo.urls" size="35" gap="0.4"></u-avatar-group>
				</u-form-item>
				
				<u-form-item label="上传图片" prop="userInfo.upload" borderBottom>
					<u-upload :fileList="model1.userInfo.upload" name="1" multiple :maxCount="10"></u-upload>
				</u-form-item>
			</u--form>
			
			<!-- action-sheet -->
			<u-action-sheet :show="showSex" :actions="actions" title="请选择性别" @close="showSex = false" @select="sexSelect"></u-action-sheet>
			<!-- calendar -->
			<u-calendar :show="showCalendar" title="请选择日历" closeOnClickOverlay @close="showCalendar = false" @confirm="calendarConfirm"></u-calendar>
			<!-- datetime-picker -->
			<u-datetime-picker :show="showDatetime" v-model="datetimeValue" title="请选择时间" closeOnClickOverlay @close="showDatetime = false" @cancel="showDatetime = false" @confirm="datetimeConfirm"></u-datetime-picker>
			<!-- keyboard -->
			<u-keyboard :show="showKeyboard" title="请选择" mode="number" @close="showKeyboard = false" @cancel="showKeyboard = false" @confirm="showKeyboard = false" @change="keyboardChange" @backspace="keyboardBackspace"></u-keyboard>
			<!-- code -->
			<u-code :seconds="seconds" ref="uCode" @change="codeChange"></u-code>
		</view>

		<!-- button -->
		<view style="padding: 24px;">
			<u-button :loading="loading" @click="submit" type="primary" text="提交"></u-button>
			<navigator url="/pages/login/login" style="margin-top: 8px;">
				<u-button type="error" text="退出"></u-button>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				noticeText: 'uView UI众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用',
				datetimeValue: Number(new Date()),
				model1: {
					userInfo: {
						name: '',
						sex: '',
						radio: '苹果',
						box: ['香蕉'],
						desc: '',
						calendar: '',
						datetime: '',
						keyboard: '',
						code: '',
						urls: [
							'https://cdn.uviewui.com/uview/album/1.jpg',
							'https://cdn.uviewui.com/uview/album/2.jpg',
							'https://cdn.uviewui.com/uview/album/3.jpg',
							'https://cdn.uviewui.com/uview/album/4.jpg',
							'https://cdn.uviewui.com/uview/album/7.jpg',
							'https://cdn.uviewui.com/uview/album/6.jpg',
							'https://cdn.uviewui.com/uview/album/5.jpg'
						],
						upload: []
					}
				},
				rules: {
					'userInfo.name': {
						type: 'string',
						required: true,
						message: '请填写姓名',
						trigger: ['blur', 'change']
					},
					'userInfo.sex': {
						type: 'string',
						max: 1,
						required: true,
						message: '请选择性别',
						trigger: ['blur', 'change']
					},
					'userInfo.calendar': {
						type: 'string',
						required: true,
						message: '请选择日历',
						trigger: ['blur', 'change']
					},
					'userInfo.datetime': {
						type: 'string',
						required: true,
						message: '请选择时间',
						trigger: ['blur', 'change']
					}
				},
				actions: [
					{ name: '男' },
					{ name: '女' }
				],
				radiolist: [
					{ name: '苹果', disabled: false },
					{ name: '香蕉', disabled: false },
					{ name: '橙子', disabled: false }
				],
				checkboxList: [
					{ name: '苹果', disabled: false },
					{ name: '香蕉', disabled: false },
					{ name: '橙子', disabled: false }
				],
				showSex: false,
				showCalendar: false,
				showDatetime: false,
				showKeyboard: false,
				listKeyboard: [],
				tips: '获取验证码',
				seconds: 10,
				loading: false
			}
		},
		methods: {
			sexSelect (e) {
				console.log(e)
				this.model1.userInfo.sex = e.name
				this.$refs.form1.validateField('userInfo.sex')
			},
			calendarConfirm (e) {
				console.log(e)
				this.model1.userInfo.calendar = e[0]
				this.$refs.form1.validateField('userInfo.calendar')
				this.showCalendar = false
			},
			datetimeConfirm (e) {
				console.log(e)
				let n = new Date(e.value)
				let Y = n.getFullYear()
				let M = n.getMonth() + 1
				let D = n.getDate()
				let h = n.getHours()
				let m = n.getMinutes()
				let s = n.getSeconds()
				function fn (v) {
					return v < 10 ? `0${v}` : `${v}`
				}
				this.model1.userInfo.datetime = `${Y}-${fn(M)}-${fn(D)} ${fn(h)}:${fn(m)}:${fn(s)}`
				this.$refs.form1.validateField('userInfo.datetime')
				this.showDatetime = false
			},
			keyboardChange (e) {
				this.listKeyboard.push(e)
				console.log(this.listKeyboard)
				this.model1.userInfo.keyboard = this.listKeyboard.join('')
				this.$refs.form1.validateField('userInfo.keyboard')
			},
			keyboardBackspace (e) {
				this.listKeyboard.pop()
				console.log(this.listKeyboard)
				this.model1.userInfo.keyboard = this.listKeyboard.join('')
				this.$refs.form1.validateField('userInfo.keyboard')
			},
			codeChange (text) {
				this.tips = text;
			},
			getCode () {
				if (this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					setTimeout(() => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						uni.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 2000);
				} else {
					uni.$u.toast('倒计时结束后再发送');
				}
			},
			submit () {
				this.loading = true
				setTimeout(() => {
					console.log(this.model1.userInfo)
					this.loading = false
				}, 3000)
			}
		}
	}
</script>

<style>

</style>
