<template>
  <q-item clickable v-ripple>
    <q-item-section avatar top>
      <q-avatar icon="folder" color="primary" text-color="white" />
    </q-item-section>
    <q-item-section>
      <q-item-label lines="1">{{ product.product_name }}</q-item-label>
      <q-item-label caption>{{ product.price }}</q-item-label>
    </q-item-section>
    <q-item-section side>
      <q-btn color="dark" icon="more_vert" no-caps flat dense>
        <q-menu>
          <q-list>
            <div class="   text-center">
              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label>
                    <q-icon name="info" size="sm" color="info" />
                    <router-link
                      :to="{ name: 'ProductDetails', params: { id: id } }"
                    >
                      <span class="q-pl-md" style="text-decoration:none;"
                        >Show product</span
                      >
                    </router-link>
                  </q-item-label>
                </q-item-section>
              </q-item>
            </div>
            <div class="   text-center">
              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label @click="prompt = true">
                    <q-icon name="edit" size="sm" color="primary" />
                    <span class="q-pl-md">Edit product</span>
                  </q-item-label>
                </q-item-section>
              </q-item>
            </div>
            <div class="   text-center">
              <q-item clickable v-close-popup>
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
