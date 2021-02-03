<template>
  <q-page class="q-px-sm">
    <div class="row q-pt-sm q-pb-md">
      <q-item-label class="text-h6 q-py-md q-pl-md"
        >Products in Store</q-item-label
      >
    </div>
    <div class="row">
      <Product
        class="  q-mb-md  "
        v-for="(product, index) in products"
        :key="index"
        :product="product"
        :id="index"
      >
      </Product>
    </div>
    <div class="fixed-bottom-right q-my-md q-px-md">
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
  methods: {
    test() {
      console.log(this.products);
    }
  },
  components: {
    Form: require("components/Form.vue").default,
    Product: require("components/Product.vue").default
  }
};
</script>
