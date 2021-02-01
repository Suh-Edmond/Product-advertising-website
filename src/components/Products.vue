<template>
  <q-item clickable v-ripple>
    <q-item-section avatar top>
      <q-avatar icon="folder" color="primary" text-color="white" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1">{{ product.product_name }}</q-item-label>
      <q-item-label caption>{{ product.price }} CFA</q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-btn
        color="info"
        icon="info"
        no-caps
        flat
        dense
        @click="showProduct(id)"
      >
        <q-tooltip>See more </q-tooltip>
      </q-btn>
    </q-item-section>
    <q-item-section side>
      <q-btn
        color="primary"
        icon="edit"
        no-caps
        flat
        dense
        @click="prompt = true"
      >
        <q-tooltip>Edit Product</q-tooltip>
      </q-btn>
    </q-item-section>
    <q-item-section side>
      <q-btn
        color="negative"
        icon="delete"
        no-caps
        flat
        dense
        @click="deleteProduct(id)"
      >
        <q-tooltip>Delete Product</q-tooltip>
      </q-btn>
    </q-item-section>
    <!-- slot for edit product details -->
    <q-dialog v-model="prompt">
      <FormEdit :updatedProduct="product" :id="id"></FormEdit>
    </q-dialog>
  </q-item>
</template>

<script>
export default {
  props: ["product", "id"],
  data() {
    return {
      filter: null,
      prompt: false
    };
  },

  methods: {
    //show product
    showProduct(prod_id) {
      console.log(prod_id);
      $this.$router.push("/home/user/product/".prod_id);
    },

    //delete a selected item
    deleteProduct(id) {
      this.$q
        .dialog({
          message: "Do yoou want to delete this product?",
          cancel: true,
          persistent: true
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
<style></style>
