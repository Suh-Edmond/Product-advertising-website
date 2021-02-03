<template>
  <q-card class="my-card">
    <q-card>
      <q-card-section class="row items-center">
        Do you want to delete this product "{{ deleted.product_name }} " ?
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" v-close-popup />
        <q-btn
          flat
          label="Delete"
          color="negative"
          v-close-popup
          @click="deleteProduct(id)"
        />
      </q-card-actions>
    </q-card>
  </q-card>
</template>

<script>
export default {
  props: ["deleted", "id"],
  data() {
    return {
      errorsProductName: [], //array to hold errors for name
      errorsQuantity: [], //array to hold errors for quantity
      errorsPrice: [], //array to hold errors for price
      errorsDescription: [], //array to hold errors for description,
      errorsCondition: []
    };
  },
  methods: {
    deleteProduct(id) {
      this.$store.dispatch("products/delete", id);
    }
  }
};
</script>
<style scoped>
.my-card {
  width: 300px;
}
</style>
