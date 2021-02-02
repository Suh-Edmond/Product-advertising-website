<template>
  <q-page>
    <div class="row">
      <div class="col-3 col-md-3 col-sm-3 col-lg-3"></div>
      <div class="col-6 col-md-6 col-sm-12 col-lg-6 col-xs-12 q-pt-lg">
        <form @submit="onSubmit">
          <q-card class="my-card">
            <q-card-section>
              <div class="text-h5 text-center text-bolder">Register</div>
            </q-card-section>
            <q-card-section
              ><q-input
                outlined
                v-model="user.name"
                label="Name"
                dense
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || 'Please enter your name'
                ]"
              />
              <q-input
                outlined
                v-model="user.email"
                label="Email"
                dense
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || 'Please enter your email'
                ]"
              />
              <q-input
                outlined
                v-model="user.telephone"
                label="Telephone"
                dense
                lazy-rules
                :rules="[
                  val =>
                    (val && val.length > 0) || 'Please enter your telephone'
                ]"
              />
              <q-input
                outlined
                v-model="user.password"
                label="Password"
                dense
                type="password"
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || 'Please enter your password'
                ]"
              />
            </q-card-section>

            <q-card-actions class="flex flex-center q-pb-md">
              <div>
                <q-btn
                  label="Register"
                  type="submit"
                  color="primary"
                  no-caps
                  style="width: 150px"
                />
              </div>
            </q-card-actions>
          </q-card>
        </form>
      </div>
      <div class="col-3 col-md-3 col-sm-3 col-lg-3"></div>
    </div>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: null,
        email: null,
        telephone: null,
        password: null
      }
    };
  },

  methods: {
    onSubmit() {}
  }
};
</script>
