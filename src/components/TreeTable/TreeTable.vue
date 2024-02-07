<template>
  <div class="table">
    <div class="header">
      <span @click="$emit('sortBy', 'name')">Имя</span>
      <span @click="$emit('sortBy', 'phone')">Телефон</span>
    </div>

    <TreeItem
      v-for="item in tree"
      :key="item.id"
      :name="item.name"
      :phone="item.phone"
      :children="item.children"
      :nesting="0"
    />

    <p  class="no-data" v-if="!tree.length">Нет данных</p>
  </div>
</template>

<script>
import TreeItem from './TreeItem.vue'
export default {
  name: 'TreeTable',
  components: {
    TreeItem
  },
  props: ['tree'],
  data () {
    return {}
  },
  methods: {
  }
}
</script>

<style scoped>
.table {
  margin: 10px;
  padding: 5px;
  background: #b1fcef;
  border-radius: 5px;
  border: 1px solid black;
}
.header {
  display: flex;
  gap: 10px;
  border-bottom: 1px solid black;
  font-weight: 600;
}
.header span:not(:first-child) {
  padding-left: 5px;
  border-left: 1px solid black;
}
.header span {
  flex: 1 1 100px;
}
.no-data {
  margin: 5px auto auto;
  text-align: center;
}
</style>
