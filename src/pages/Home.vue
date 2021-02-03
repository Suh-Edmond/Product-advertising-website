<template>
  <q-page>
    <div class="row flex flex-center q-pt-md q-pb-md">
      <div class="col-8 col-md-8 col-sm-12">
        <q-item-label class="text-h6 q-py-md">Products in Store</q-item-label>
        <q-list
          bordered
          separator
          v-for="(product, index) in products"
          :key="index"
        >
          <q-item clickable v-ripple>
            <q-item-section avatar top>
              <q-avatar icon="folder" color="primary" text-color="white" />
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">{{ product.product_name }}</q-item-label>
              <q-item-label caption>{{ product.price }} CFA</q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-btn color="dark" icon="more_vert" no-caps flat dense>
                <q-menu>
                  <q-list>
                    <div class="   text-center">
                      <q-item clickable>
                        <q-item-section>
                          <q-item-label>
                            <q-icon name="info" size="sm" color="info" />
                            <span class="q-pl-md">Show product</span>
                          </q-item-label>
                        </q-item-section>
                      </q-item>
                    </div>
                    <div class="   text-center">
                      <q-item clickable>
                        <q-item-section>
                          <q-item-label @click="prompt = true">
                            <q-icon name="edit" size="sm" color="primary" />
                            <span class="q-pl-md">Edit product</span>
                          </q-item-label>
                        </q-item-section>
                      </q-item>
                    </div>
                    <div class="   text-center">
                      <q-item clickable>
                        <q-item-section>
                          <q-item-label @click="deleteProduct(id)">
                            <q-icon name="delete" size="sm" color="negative" />
                            <span class="q-pl-md">Delete product</span>
                          </q-item-label>
                        </q-item-section>
                      </q-item>
                    </div>
                  </q-list>
                </q-menu>
              </q-btn>
            </q-item-section>

            <!-- slot for edit product details -->
            <q-dialog v-model="prompt"> </q-dialog>
          </q-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      filter: "",
      prompt: false,
      columns: [
        {
          name: "product_name",
          required: true,
          label: "Product Name",
          align: "left",
          field: "product_name",
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "price",
          align: "center",
          label: "Price",
          field: "price",
          sortable: true
        },
        {
          name: "quantity",
          label: "Quantity",
          field: "quantity",
          sortable: true
        },
        { name: "description", label: "Description", field: "description" },
        { name: "condition", label: "Condition", field: "condition" },
        { name: "discount", label: "On Discount?", field: "discount" },
        { name: "service", label: "A Service?", field: "service" },
        { name: "in_stock", label: "In Stocked?", field: "in_stock" }
      ]
    };
  },
  computed: {
    products() {
      return this.$store.getters["products/products"];
    }
  }
};
</script>
<style scoped></style>
