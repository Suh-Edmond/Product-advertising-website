<template>
  <div class="row">
    <div class="col-6 col-md-6 col-xs-12 col-sm-12 stepper">
      <q-card>
        <q-card-section class="row bg-primary">
          <div class="text-h5  text-white">Add New Product</div>
          <q-space />
          <q-btn dense flat icon="close" class="text-white" v-close-popup>
          </q-btn>
        </q-card-section>
      </q-card>
      <form @submit="addProduct">
        <q-stepper v-model="step">
          <q-step :name="1" :done="done1" title="">
            <div class="text-h6">Product Name*</div>
            <q-input dense v-model="product.product_name" outlined />
            <div
              v-if="errorsProductName.length > 0"
              class="text-orange-10 text-sm"
            >
              <p v-for="(error, index) in errorsProductName" :key="index">
                {{ error }}
              </p>
            </div>
            <div class="text-h6">Price*</div>
            <q-input dense v-model="product.price" outlined type="number" />
            <div v-if="errorsPrice.length > 0" class="text-orange-10 text-sm">
              <p v-for="(error, index) in errorsPrice" :key="index">
                {{ error }}
              </p>
            </div>
            <div class="text-h6">Quantity*</div>
            <q-input dense v-model="product.quantity" outlined type="number" />
            <div
              v-if="errorsQuantity.length > 0"
              class="text-orange-10 text-sm"
            >
              <p v-for="(error, index) in errorsQuantity" :key="index">
                {{ error }}
              </p>
            </div>
            <div class="text-h6">Description*</div>
            <q-input
              v-model="product.description"
              outlined
              type="textarea"
              placeholder="Please give a description of the product"
            />
            <div
              v-if="errorsDescription.length > 0"
              class="text-orange-10 text-sm"
            >
              <p v-for="(error, index) in errorsDescription" :key="index">
                {{ error }}
              </p>
            </div>
            <q-stepper-navigation>
              <q-btn
                @click="Next()"
                icon-right="arrow_forward_ios"
                no-caps
                flat
                type="submit"
                color="primary"
                label="Next"
              />
            </q-stepper-navigation>
          </q-step>

          <q-step :name="2" title="">
            <div class="text-h6">Condition*</div>
            <q-select
              outlined
              v-model="product.condition"
              :options="options"
              dense
              option-value="Good"
            />

            <div class="text-h6 q-pt-sm">
              A Service ? <span> <q-toggle v-model="product.service"/></span>
            </div>
            <div class="text-h6">
              Published ? <span> <q-toggle v-model="product.published"/></span>
            </div>
            <div class="text-h6">
              In Stocked ? <span><q-toggle v-model="product.in_stock"/></span>
            </div>
            <div class="text-h6">
              On Discount ?<span> <q-toggle v-model="product.discount"/></span>
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
                  color="primary"
                  no-caps
                  rounded
                  label="Add Product"
                  type="submit"
                  v-close-popup
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
  data() {
    return {
      step: 1,
      done1: false,
      product: {
        product_name: null,
        price: null,
        quantity: null,
        description: null,
        condition: "Good",
        service: false,
        in_stock: false,
        published: false,
        discount: false
      },
      options: ["Good", "Best", "Normal", "Natural", "Great"],
      errorsProductName: [], //array to hold errors for name
      errorsQuantity: [], //array to hold errors for quantity
      errorsPrice: [], //array to hold errors for price
      errorsDescription: [], //array to hold errors for description,
      errorsCondition: []
    };
  },
  methods: {
    addProduct() {
      console.log(this.product);
      this.$store.dispatch("products/addProduct", this.product);
    },

    Next() {
      this.errorsProductName = [];
      this.errorsQuantity = [];
      this.errorsPrice = [];
      this.errorsDescription = [];

      if (!this.product.product_name) {
        this.errorsProductName.push("Please enter Product Name");
      } else if (!this.product.price) {
        this.errorsPrice.push("Please product price");
      } else if (!this.product.quantity) {
        this.errorsQuantity.push("Please enter Quantity");
      } else if (!this.product.description) {
        this.errorsDescription.push("Please product description");
      } else {
        this.done1 = true;
        this.step = 2;
      }
    }
  }
};
</script>
<style scoped>
.stepper {
  width: 800px;
}
</style>
