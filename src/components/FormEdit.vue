<template>
  <div class="row">
    <div class="col-7 col-md-7 col-xs-12 col-sm-12 stepper">
      <q-card>
        <q-card-section class="row bg-primary">
          <div class="text-h5  text-white">Update Product</div>
          <q-space />
          <q-btn dense flat icon="close" class="text-white" v-close-popup>
          </q-btn>
        </q-card-section>
      </q-card>
      <form @submit="editProduct">
        <q-stepper v-model="step">
          <q-step :name="1" :done="done1" title="">
            <div class="text-h6">Product Name*</div>
            <q-input dense v-model="updated_product.product_name" outlined />
            <div class="text-h6">Price*</div>
            <q-input
              dense
              v-model="updated_product.price"
              outlined
              type="number"
            />
            <div class="text-h6">Quantity*</div>
            <q-input
              dense
              v-model="updated_product.quantity"
              outlined
              type="number"
            />
            <div class="text-h6">Description*</div>
            <q-input
              v-model="updated_product.description"
              outlined
              type="textarea"
              placeholder="Please give a description of the product"
            />
            <q-stepper-navigation>
              <q-btn
                @click="
                  () => {
                    done1 = true;
                    step = 2;
                  }
                "
                icon-right="arrow_forward_ios"
                no-caps
                flat
                color="primary"
                label="Next"
              />
            </q-stepper-navigation>
          </q-step>

          <q-step :name="2" title="">
            <div class="text-h6">Condition*</div>
            <q-select
              outlined
              v-model="updated_product.condition"
              :options="options"
              dense
            />
            <div class="text-h6 q-pt-sm">
              A Service ?
              <span> <q-toggle v-model="updated_product.service"/></span>
            </div>
            <div class="text-h6">
              Published ?
              <span> <q-toggle v-model="updated_product.published"/></span>
            </div>
            <div class="text-h6">
              In Stocked ?
              <span><q-toggle v-model="updated_product.in_stock"/></span>
            </div>
            <div class="text-h6">
              On Discount ?<span>
                <q-toggle v-model="updated_product.discount"
              /></span>
            </div>
            <q-stepper-navigation>
              <q-btn
                flat
                @click="step = 1"
                color="primary"
                label="Back"
                icon="arrow_back_ios"
                no-caps
                class="q-ml-sm"
              />
              <div class="flex flex-center">
                <q-btn
                  style="width:150px"
                  v-close-popup
                  color="primary"
                  no-caps
                  rounded
                  label="Save Product"
                  type="submit"
                />
              </div>
            </q-stepper-navigation>
          </q-step>
        </q-stepper>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["updatedProduct", "id"],
  data() {
    return {
      step: 1,
      done1: false,
      updated_product: {},
      options: ["Good", "Best", "Normal", "Natural", "Great"]
    };
  },
  methods: {
    editProduct() {
      this.$store.dispatch("products/updateProduct", {
        updated: this.updated_product,
        id: this.id
      });
    }
  },
  mounted() {
    this.updated_product = Object.assign({}, this.updatedProduct);
  }
};
</script>
<style scoped>
.stepper {
  width: 800px;
}
</style>
