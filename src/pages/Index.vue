<template>
  <q-page class="flex flex-center">
    <Product :products="products"></Product>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  computed: {
    products() {
      return this.$store.getters["products/products"];
    }
  },
  components: {
    Product: require("components/Products.vue").default
  }
};
</script>
