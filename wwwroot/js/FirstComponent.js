import cmpFirst from '../vue/FirstComponent.vue';

window.FirstComponent = (function(){
	const myComp = Vue.createApp(cmpFirst, {});
	return myComp.mount('#first-component');
})();