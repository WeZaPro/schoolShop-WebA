<template>
  <h1>ReDirect Page</h1>
  <div id="reDirect">
   

    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      price: "",
    };
  },
  methods: {
    addProduct(e) {
      e.preventDefault(); // Prevent page from reloading.
      console.log("data===> ", this.name, this.price);
      // save data to google sheet
      // function req res
    },
  },
};
</script>
