<template>
  <q-page class="q-pt-lg">
    <div class="row q-pt-xl">
      <div class="col-3 col-md-3 col-sm-12 col-xs-12 col-lg-3"></div>
      <div class="q-pa-md col-6 col-sm-12 col-md-6 col-xs-12 col-lg-6">
        <div class="q-gutter-y-md">
          <q-card>
            <q-tabs
              v-model="tab"
              dense
              class="text-grey"
              active-color="primary"
              indicator-color="primary"
              align="justify"
              narrow-indicator
            >
              <q-tab name="Login" label="LOGIN" />
              <q-tab name="Register" label="REGISTER" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="Login">
                <Auth :tabs="tab"></Auth>
              </q-tab-panel>

              <q-tab-panel name="Register">
                <Auth :tabs="tab"></Auth>
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </div>
      </div>
      <div class="col-3 col-md-3 col-sm-12 col-xs-12 col-lg-3"></div>
    </div>
  </q-page>
</template>
<script>
import Auth from "components/auth.vue";
export default {
  data() {
    return {
      user: {
        name: null,
        email: null,
        telephone: null,
        password: null
      },
      tab: "Login"
    };
  },

  methods: {
    register() {},
    login() {}
  },
  components: {
    Auth
  }
};
</script>
