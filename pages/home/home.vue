<template>
	<view>
		<!-- 搜索 -->
		<uni-nav-bar :fixed="false" statusBar color="#333333" background-color="#FFFFFF" right-icon="scan">
			<view class="input-view">
				<uni-icons class="input-uni-icon" type="search" size="22" color="#666666" />
				<input confirm-type="search" class="nav-bar-input" type="text" placeholder="输入搜索关键词">
			</view>
		</uni-nav-bar>

		<!-- 轮播 -->
		<u-swiper :list="swiperList" keyName="image" :autoplay="true" circular></u-swiper>

		<!-- 宫格 -->
		<view>
			<u-grid border @click="gridClick" col="3">
				<u-grid-item v-for="(item, index) in gridList" :key="index">
					<u-icon :customStyle="{ paddingTop: 20+'rpx' }" :name="item.name" :size="22"></u-icon>
					<text class="grid-text">{{ item.title }}</text>
				</u-grid-item>
			</u-grid>
			<u-toast ref="uToast"/>
		</view>

		<!-- 标签 -->
		<u-sticky bgColor="#fff">
			<u-tabs :list="tabsList"></u-tabs>
		</u-sticky>

		<!-- 滚动 -->
		<u-scroll-list style="margin: 16px 0;" :indicator="true" indicatorColor="#fff0f0" indicatorActiveColor="#f56c6c">
			<view v-for="(item, index) in scrollList" :key="index">
				<image :src="item.thumb" style="height: 80px; width: 80px;"></image>
			</view>
		</u-scroll-list>

		<!-- 弹出 -->
		<u-popup :show="showPopup" mode="left" @close="showPopup = false" @open="showPopup = true">
			<view style="display: flex; justify-content: center; align-items: center; width: 230px; height: 100%;">
				<u-button @click="showPopup = false" style="width: 100px;" type="success">点我关闭</u-button>
			</view>
		</u-popup>

		<!-- 模态框 -->
		<u-modal :show="showModal" :title="title" :content="content" showCancelButton @cancel="showModal = false" @confirm="showModal = false"></u-modal>

		<!-- 按钮 -->
		<view style="display: flex; justify-content: center; align-items: center; background-color: #fff; padding: 8px;">
			<u-button @click="showPopup = true" type="success" size="small" shape="circle" text="弹出" style="width: 100px;"></u-button>
			<u-button @click="showModal = true" type="primary" size="small" shape="circle" text="打开" style="width: 100px;"></u-button>
		</view>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'

	export default {
		components: {
			uniIcons,
			uniNavBar
		},
		data() {
			return {
				swiperList: [
					{ image: 'https://cdn.uviewui.com/uview/swiper/swiper2.png' },
					{ image: 'https://cdn.uviewui.com/uview/swiper/swiper1.png' },
					{ image: 'https://cdn.uviewui.com/uview/swiper/swiper3.png' }
				],
				gridList: [
					{ name: 'photo', title: '图片' },
					{ name: 'lock', title: '锁头' },
					{ name: 'star', title: '星星' },
					{ name: 'hourglass', title: '沙漏' },
					{ name: 'home', title: '首页' },
					{ name: 'star', title: '音量' }
				],
				tabsList: [
					{ name: '关注' }, 
					{ name: '推荐' },
					{ name: '电影' },
					{ name: '科技' },
					{ name: '音乐' },
					{ name: '美食' },
					{ name: '文化' },
					{ name: '财经' },
					{ name: '手工' }
				],
				scrollList: [
					{ thumb: "https://cdn.uviewui.com/uview/goods/1.jpg" },
					{ thumb: "https://cdn.uviewui.com/uview/goods/2.jpg" }, 
					{ thumb: "https://cdn.uviewui.com/uview/goods/3.jpg" },
					{ thumb: "https://cdn.uviewui.com/uview/goods/4.jpg" },
					{ thumb: "https://cdn.uviewui.com/uview/goods/5.jpg" }
				],
				showPopup: false,
				showModal: false,
				title: '标题',
				content: 'uView的目标是成为uni-app生态最优秀的UI框架'
			}
		},
		methods: {
			gridClick (name) {
				this.$refs.uToast.success(`点击了第${name + 1}个`)
			}
		}
	}
</script>

<style lang="scss">
	.u-page {
		padding: 0;
	}

	.grid-text {
		font-size: 14px;
		color: #909399;
		padding: 20rpx 0 20rpx 0rpx;
		/* #ifndef APP-PLUS */
		box-sizing: border-box;
		/* #endif */
	}

	.example-body {
		flex-direction: column;
		padding: 15px;
		background-color: #ffffff;
	}

	.word-btn-white {
		font-size: 18px;
		color: #FFFFFF;
	}

	.word-btn {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		border-radius: 6px;
		height: 48px;
		margin: 15px;
		background-color: #007AFF;
	}

	.word-btn--hover {
		background-color: #4ca2ff;
	}

	.uni-nav-bar-text {
		font-size: 28rpx;
	}

	.input-view {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		/* width: 500rpx;
 */
		flex: 1;
		background-color: #f8f8f8;
		height: 30px;
		border-radius: 15px;
		padding: 0 15px;
		flex-wrap: nowrap;
		margin: 7px 0;
		line-height: 30px;
	}

	.input-uni-icon {
		line-height: 30px;
	}

	.nav-bar-input {
		height: 30px;
		line-height: 30px;
		/* #ifdef APP-PLUS-NVUE */
		width: 370rpx;
		/* #endif */
		padding: 0 5px;
		font-size: 28rpx;
		background-color: #f8f8f8;
	}

	.example-body {
		padding: 0;
	}
</style>
