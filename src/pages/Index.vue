<template>
  <q-page>
    <div class="row flex flex-center q-pt-md q-pb-md">
      <div class="col-8 col-md-8 col-sm-12">
        <q-item-label class="text-h6 q-py-md">Products in Store</q-item-label>
        <q-list bordered padding class="rounded-borders" separator>
          <Product
            v-for="(product, index) in products"
            :key="index"
            :product="product"
            :id="index"
          ></Product>
        </q-list>
      </div>
    </div>
    <div class="flex flex-center q-my-md q-px-md">
      <q-btn
        round
        color="primary"
        size="lg"
        icon="add"
        @click="prompt = true"
      />
    </div>
    <q-dialog v-model="prompt">
      <Form></Form>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      prompt: false,
      show_dialog_edit: false,
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
    Product: require("components/Products.vue").default,
    Form: require("components/Form.vue").default
  }
};
</script>
