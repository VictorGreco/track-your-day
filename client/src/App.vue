<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style>
:root {
	--main-color: #4c95af;
	--secondary-color: #6dd5fa;
	--third-color: #F0FAFE;
	--complementary: #6d8ffa;
	--white: rgb(255, 255, 255);
}

@font-face {
  font-family: "Nunito Sans";
  src: local("Nunito Sans"), url(./fonts/NunitoSans/NunitoSans-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Nunito";
  src: local("Nunito"), url(./fonts/Nunito/Nunito-Bold.ttf) format("truetype");
}

body {
		background: linear-gradient(60deg, var(--main-color), var(--secondary-color), var(--third-color));
}

#app {
	font-family: "Nunito Sans",sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	min-height: 100vh;
	background-color: rgba(0, 0, 0, 0.1);
}

.logo-caption {
	font-family: "Nunito",sans-serif;
	color: var(--white);
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
