<template>
	<view>
		<home v-if="tabbarValue == 0"></home>
		<photo v-if="tabbarValue == 1"></photo>
		<play v-if="tabbarValue == 2"></play>
		<mine v-if="tabbarValue == 3"></mine>
		
		<u-tabbar :value="tabbarValue" :fixed="true" :placeholder="true" :safeAreaInsetBottom="false">
			<u-tabbar-item text="首页" icon="home" @click="tabbarClick" ></u-tabbar-item>
			<u-tabbar-item text="放映厅" icon="photo" @click="tabbarClick" ></u-tabbar-item>
			<u-tabbar-item text="直播" icon="play-right" @click="tabbarClick" ></u-tabbar-item>
			<u-tabbar-item text="我的" icon="account" @click="tabbarClick" ></u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabbarValue: 0
			}
		},
		methods: {
			tabbarClick (e) {
				this.tabbarValue = e
			}
		}
	}
</script>

<style>

</style>
