<template>
	<div class="canvas">
		<AppHeader />
		<slot />
		<AppFooter />
	</div>
</template>

<style lang="css" scoped>
.canvas {
	@apply mx-auto mt-4 w-2/3 rounded-xl bg-white p-8 shadow-lg;
}
</style>
