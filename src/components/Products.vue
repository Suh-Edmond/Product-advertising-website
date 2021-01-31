<template>
  <q-page>
    <div v-for="product in products" :key="product.id">
      <p>{{ product.product_name }}</p>
      <p>{{ product.price }}</p>
      <p>{{ product.quantity }}</p>
      <p>{{ product.descripiton }}</p>
      <p>{{ product.condition }}</p>
      <p>{{ product.discount }}</p>
      <p>{{ product.service }}</p>
      <p>{{ product.in_stocked }}</p>
      <p>{{ product.published }}</p>
    </div>
    <q-btn color="white" text-color="black" label="Standard" @click="work" />
  </q-page>
</template>

<script>
export default {
  props: ["products"],

  methods: {
    work() {}
  }
};
</script>

<style></style>
