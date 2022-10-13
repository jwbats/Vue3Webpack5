<template>
  <div>
    <div>{{ someData }}</div>
    <third-component :name="helloWorld"></third-component>
  </div>
</template>

<script>
import ThirdComponent from "./third-component.vue";
export default {
  name: "second-component",
  components: {
    ThirdComponent,
  },
  data: function () {
    return {
      someData: "Just some data!",
      helloWorld: "Hello World!",
    };
  },
};
</script>