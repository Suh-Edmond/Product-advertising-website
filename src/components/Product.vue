<template>
  <q-card class="my-card  col-3 col-md-3 col-lg-3 col-xs-12 col-sm-12">
    <q-card-section>
      <div class="text-h6">{{ product.product_name }}</div>
      <div class="text-subtitle2">Price: {{ product.price }} CFA</div>
      <div class="text-subtitle2">Quantity :{{ product.quantity }}</div>
    </q-card-section>

    <q-card-section>
      <div class="text-h6">
        <q-item-label>Description</q-item-label>
      </div>
      {{ product.description }}
    </q-card-section>

    <q-separator dark />
    <q-card-section>
      <q-expansion-item expand-separator label="See more">
        <div class="   text-left">
          <q-item-label>
            <router-link :to="{ name: 'ProductDetails', params: { id: id } }">
              <span class="q-pl-md" style="text-decoration:none;"
                >Show product details</span
              >
            </router-link>
          </q-item-label>
        </div>
        <div class="row">
          <div>
            <q-btn flat @click="prompt = true" icon="edit" color="primary"
              ><q-tooltip>edit product</q-tooltip></q-btn
            >
          </div>
          <q-space />
          <q-btn flat @click="deleteProduct(id)" icon="delete" color="negative"
            ><q-tooltip>delete product</q-tooltip></q-btn
          >
        </div>
      </q-expansion-item>
    </q-card-section>
    <q-dialog v-model="prompt" class="scroll">
      <FormEdit :updatedProduct="product" :id="id"></FormEdit>
    </q-dialog>
  </q-card>
</template>

<script>
export default {
  props: ["product", "id"],
  data() {
    return {
      prompt: false
    };
  },
  methods: {
    //delete a selected item
    deleteProduct(id) {
      this.$q
        .dialog({
          message: "Do you want to delete this product?",
          cancel: true,
          persistent: true,
          size: "40px"
        })
        .onOk(() => {
          this.$store.dispatch("products/delete", id);
        })
        .onCancel(() => {
          // console.log('>>>> Cancel')
        });
    }
  },
  components: {
    FormEdit: require("components/FormEdit").default
  }
};
</script>
<style scoped>
span {
  text-decoration-color: none;
}
.scroll {
  overflow: hidden;
}
</style>
