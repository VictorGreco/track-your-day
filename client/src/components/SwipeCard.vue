<template>
	<div id="SwipeCard" class="resizable">
		<div class="resizers" 
			@mousedown="mousedown"
			@touchstart="mousedown"
			@mousemove="start"
			@touchmove="start"
			>
			<ul>
				<li v-for="(meeting, i) in meetings" :key="i">
					<h3>{{meeting.title}}</h3>
					<span>{{meeting.schedule}}</span>
					<p>{{meeting.description}}</p>
				</li>
			</ul>
			<button class="btn"></button>
			

			</div>
	</div>
</template>

<script>
export default {
	name: "SwipeCard",
	props: {
		timestamp: {
			type: Number
		}, 
		meetings: {
			type: Array
		}
	},
	created: function() {
		this.MIN_SIZE = 200;
		this.MAX_SIZE = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
	},
	data() {
		return  {
			originalHeight: 0,
			originalY: 0,
			originalMouseY: 0
		}
	},
	methods: {
		mousedown(e) {
			const element = document.querySelector('.resizable'),
				mobileTouch = e.changedTouches;


			this.originalHeight = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
			this.originalY = element.getBoundingClientRect().top;
			this.originalMouseY = !!mobileTouch && mobileTouch[0].pageY || e.pageY;
		},
		start(e) {
			const element = document.querySelector('.resizable'),
				mobileTouch = e.changedTouches,
				pageY = !!mobileTouch && mobileTouch[0].pageY || e.pageY,
				pageYScroll = (pageY - this.originalMouseY),
				height = this.originalHeight - pageYScroll,
				isHeighInRange = height > this.MIN_SIZE && height < this.MAX_SIZE,
				styles = `height: ${height}px; top: ${this.originalY + pageYScroll}px;`;

				isHeighInRange && (element.style.cssText = styles);
		}
	}
};
</script>

<style scoped>
.resizable .resizers {
	overflow: hidden;
	width: 100%;
	height: 100%;
}

.resizable {
	z-index: 1000;
	background: white;
	width: 100%;
	height: 400px;
	position: absolute;
	bottom: 0;
	left: 0;
	border-radius: 20px 20px 0 0;
	-moz-box-shadow: 0px -27px 39px -34px rgba(0, 0, 0, 0.64);
	box-shadow: 0px -27px 39px -34px rgba(0, 0, 0, 0.64);
}
</style>
