<template>
  <q-page>
    <Product :products="products"></Product>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      prompt: false,
      bar: false,
      product: {
        product_name: null,
        price: null,
        quantity: null,
        description: null,
        condition: null,
        service: false,
        in_stock: false,
        published: false,
        discount: false
      },
      options: ["Good", "Best", "Normal", "Natural", "Great"]
    };
  },
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
