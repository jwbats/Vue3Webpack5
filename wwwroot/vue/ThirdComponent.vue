<template>
  <div>
    <div>{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: "third-component",
  props: {
    name: String,
  },
};
</script>