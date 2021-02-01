<template>
  <q-page>
    <div class="row q-px-md q-py-md">
      <div class="col-2 col-md-2 col-sm-12 col-lg-2 col-xs-12"></div>
      <div class="col-8 col-md-8 col-sm-12 col-lg-6 col-xs-12">
        <h5 class="text-bold q-pt-none q-pl-md">Products</h5>
        <q-list bordered padding class="rounded-borders" separator>
          <Product
            v-for="(product, index) in products"
            :key="index"
            :product="product"
            :id="index"
          ></Product>
        </q-list>
      </div>
      <div class="col-2 col-md-2 col-sm-12 col-lg-2 col-xs-12"></div>
    </div>
    <div class="row justify-start q-ml-md q-mt-xl">
      <div class="col-12 col-md-12">
        <q-btn
          round
          color="primary"
          @click="prompt = true"
          icon="add"
          size="lg"
        />
      </div>
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
