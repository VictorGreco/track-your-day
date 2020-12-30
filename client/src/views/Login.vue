<template>
	<div class="d-flex flex-column align-items-center login">
		<header>
			<img class="" src="@/assets/logo.svg" height="75" width="75">
			<h1 class="logo-caption">Track Your Day</h1>
		</header>

		<main>
			<button class="col-sm-6 btn btn-register">Register</button>
			<button class="col-sm-6 btn btn-login">Login</button>
		</main>


	</div>
</template>

<style scoped>
	header, main {
		margin-top: 100px;
	}
	.login {
		height: 100vh;
	}
	.btn-login {
		background-color: var(--white);
	}
</style>

<script>

export default {
	name: "login",
	components: {},
};
</script>
