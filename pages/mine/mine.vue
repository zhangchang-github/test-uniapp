<template>
	<view>
		<!-- 轮播 -->
		<u-swiper :list="list" keyName="image" :autoplay="true" circular></u-swiper>
		
		<!-- 折叠 -->
		<u-collapse>
			<u-collapse-item v-for="(item, index) in collapseList" :key="index" :title="item.title" :name="item.name">
				<text class="u-collapse-content" style="background-color: #ffffff;">{{ item.content }}</text>
			</u-collapse-item>
		</u-collapse>
		
		<!-- 导航 -->
		<navigator v-for="(item, index) in navigatorList" :key="index" :url="item.url" class="u-border-bottom">
			<view style="display: flex; align-items: center; justify-content: space-between; height: 40px; padding: 0 12px; background-color: #fff;">
				<!-- text -->
				<view style="display: flex; align-items: center;">
					<u-icon :name="item.icon" :size="18" :color="item.color"></u-icon>
					<text style="margin-left: 8px;">{{ item.text }}</text>
				</view>
				<!-- icon -->
				<u-icon name="arrow-right" :size="18" color="#aaa"></u-icon>
			</view>
		</navigator>
		
		<!-- 滑动 -->
		<u-swipe-action>
			<u-swipe-action-item :options="options">
				<view class="swipe-action u-border-bottom">
					<view class="swipe-action__content">
						<text class="swipe-action__content__text">滑动</text>
					</view>
				</view>
			</u-swipe-action-item>
		</u-swipe-action>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{ image: 'https://cdn.uviewui.com/uview/swiper/swiper3.png' }
				],
				options: [
					{ text: '收藏', style: { backgroundColor: '#3c9cff' } },
					{ text: '删除', style: { backgroundColor: '#f56c6c' } }
				],
				collapseList: [
					{
						name: 'Docs guide',
						title: '文档指南',
						content: '涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川'
					},
					{
						name: 'Variety components',
						title: '组件全面',
						content: '众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用'
					},
					{
						name: 'Numerous tools',
						title: '众多利器',
						content: '众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨'
					}
				],
				navigatorList: [
					{
						url: '/pages/components/collection',
						icon: 'star-fill',
						text: '收藏',
						color: '#ffb908'
					},
					{
						url: '/pages/components/location',
						icon: 'map-fill',
						text: '定位',
						color: '#ff0000'
					},
					{
						url: '/pages/components/setting',
						icon: 'setting-fill',
						text: '设置',
						color: '#16c19f'
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.u-demo-block__title {
		padding: 10px 0 2px 15px;
	}

	.swipe-action {
		&__content {
			 padding: 25rpx 0;
	
			&__text {
				 font-size: 15px;
				 color: $u-main-color;
				 padding-left: 30rpx;
			 }
		}
	}
</style>
