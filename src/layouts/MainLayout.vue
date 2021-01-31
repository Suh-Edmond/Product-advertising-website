<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />
        <q-toolbar-title>
          Product Advertising Site
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="left" side="left" behavior="mobile">
      <!-- drawer content -->
      <div class="row q-mt-lg q-mb-md">
        <div
          class="col-12 col-md-12 col-lg-12 col-xs-12 col-sm-12 q-py-xl justify-center"
        >
          <q-item exact active-class="text-grey-10">
            <q-item-section>Edmond</q-item-section>
          </q-item>
        </div>
      </div>
      <q-list class="text-light-blue-10" v-for="item in navs" :key="item.label">
        <q-item
          clickable
          v-ripple
          exact
          :to="item.to"
          active-class="text-grey-10"
        >
          <q-item-section avatar>
            <q-icon name="item.icon"></q-icon>
          </q-item-section>
          <q-item-section>{{ item.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div class="text-center">
            Copyright &copy; 2021. All rights reserved.
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      left: false,
      navs: [
        {
          label: "Home",
          icon: "home",
          to: "/home"
        },
        {
          label: "Products",
          icon: "book",
          to: "/home/user/products"
        },
        {
          label: " Add Products",
          icon: "book",
          to: "/home/user/products/add"
        },
        {
          label: "Update Product",
          icon: "lock",
          to: "/home/user/products/update"
        },

        {
          label: "Profile",
          icon: "portrait",
          to: "/home/profile"
        }
      ]
    };
  }
};
</script>
