<template>
  <v-app>

    <v-navigation-drawer app clipped :value="drawer" mobile-break-point=960 disable-resize-watcher>
      <h2>Navigation</h2>
      <v-list>
        <v-list-tile v-for="route in routes" :key="route.name" :to='route.path'>
          <v-list-tile-content>
            <v-list-tile-title tag='span' :to='route.path'>{{ route.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar class='primary' app fixed clipped-left>
      <v-toolbar-side-icon class='hidden-md-and-up' @click='drawer = !drawer'></v-toolbar-side-icon>
      <v-toolbar-title class="headline">
        <h1>Lottery Web App</h1>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class='hidden-sm-and-down'>
      <v-btn flat large tag='span' v-for='route in routes' :key='route.name' :to='route.path'>
        {{route.name}}
      </v-btn>
      </div>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: false,
      routes: this.$router.options.routes
    }
  }
}
</script>