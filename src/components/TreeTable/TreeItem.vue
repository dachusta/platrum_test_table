<template>
  <div class="wrap">
    <div class="data" >
      <span :style="{ paddingLeft: 10 * nesting + 'px' }">{{ name }}</span>
      <span>{{ phone }}</span>
    </div>

    <TreeItem
      v-for="child in children"
      :key="child.id"
      :name="child.name"
      :phone="child.phone"
      :children="child.children"
      :nesting="nesting + 1"
    />
  </div>
</template>

<script>
export default {
  name: 'TreeItem',
  props: ['name', 'phone', 'children', 'nesting'],
  data () {
    return {}
  },
  methods: {
  }
}
</script>

<style scoped>
.wrap {
  display: contents;
}
.data {
  display: flex;
  gap: 10px;
}
span {
  flex: 1 1 100px;
}
.data span:not(:first-child) {
  padding-left: 5px;
  border-left: 1px solid black;
}
</style>
