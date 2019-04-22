<template>
  <v-app id='app'>
    <v-container>

      <v-data-table id='data-table' :headers='$props.headers' :items='$props.items'>
        <template v-slot:items='items'>
          <tr>
            <td v-for='(val, key) in items.item' :key='key'>{{val}}</td>
          </tr>
        </template>
      </v-data-table>

      <v-expansion-panel id='expansion-panel'>
        <v-expansion-panel-content v-for='item in $props.items' :key='item.name'>
          <template v-slot:header>
            <div>{{item.name}}</div>
          </template>
          <v-card>
            <div v-for='(val, key) in item' :key='val'>
              <v-card-text v-if='key != "name"'>
                <div>
                  <strong>{{key}}: </strong>
                  <span>{{val}}</span>
                </div>
              </v-card-text>
            </div>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>

    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'responsive-data-table',
  props: {
    headers: Array,
    items: Array,
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
  @media screen and (max-width: 680px) {
    #data-table {
      display: none;
    }

    #expansion-panel {
      display: block;
    }
  }

  @media screen and (min-width: 681px) {
    #data-table {
      display: block;
    }

    #expansion-panel {
      display: none;
    }
  }
</style>