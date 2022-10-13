<template>
  <div v-cloak>
	<div class="div1">{{someData}}</div>
	<div class="div2">{{helloWorld}}</div>
  </div>
</template>

<script>
	export default {
	  name: "first-component",
	  data: function () {
		return {
		  someData: "Just some data from the first component!",
		  helloWorld: "Hello World!!!",
		};
	  }
	};
</script>

<style scoped>
	[v-cloak] {
	  display: none;
	}

	div {
		margin-top:10px;
	}

	.div1 {
		border:1px solid red;
	}

	.div2 {
		border:1px solid green;
	}

</style>