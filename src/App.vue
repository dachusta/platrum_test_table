<template>
  <div id="app">

    <div class="content">
      <button
        class="btn-add"
        @click="showModal"
      >Добавить</button>

      <TreeTable
        :tree="getSortedTree"
        @sortBy="setSortBy"
      />
    </div>

    <VModal
      v-if="isModal"
      :list="getListOfElements"
      @close="closeModal"
      @save="addUser"
    />
  </div>
</template>

<script>
import VModal from './components/VModal'
import TreeTable from './components/TreeTable'

export default {
  name: 'App',
  components: {
    VModal,
    TreeTable
  },
  data () {
    return {
      isModal: false,
      sortBy: 'name',
      sortByAscending: true,
      tree: []
    }
  },
  methods: {
    showModal () {
      this.isModal = true
    },
    closeModal () {
      this.isModal = false
    },
    addUser (e) {
      this.closeModal()

      if (!e.parent) {
        this.tree.push({
          id: Date.now(),
          name: e.name,
          phone: e.phone,
          children: []
        })
        return
      }

      for (let elem of this.tree) {
        helper(elem)
      }

      function helper (node) {
        if (node.id === e.parent) {
          node.children.push({
            id: Date.now(),
            name: e.name,
            phone: e.phone,
            children: []
          })
          return
        }

        if (node.children) {
          for (let child of node.children) {
            helper(child)
          }
        }
      }
    },
    setSortBy (val) {
      if (this.sortBy !== val) {
        this.sortBy = val
        this.sortByAscending = true
      } else {
        this.sortByAscending = !this.sortByAscending
      }
    }
  },
  computed: {
    getSortedTree () {
      if (!this.sortBy) {
        return this.tree
      }

      const tree = JSON.parse(JSON.stringify(this.tree))
      const sortBy = this.sortBy
      const sortByAscending = this.sortByAscending

      helper(tree)

      function helper (list) {
        list.sort((a, b) => {
          if (sortByAscending) {
            return a[sortBy] < b[sortBy] ? -1 : 1
          } else {
            return a[sortBy] > b[sortBy] ? -1 : 1
          }
        })

        for (let node of list) {
          if (node.children.length) {
            helper(node.children)
          }
        }
      }

      return tree
    },
    getListOfElements () {
      let result = []

      for (let elem of this.tree) {
        helper(elem)
      }

      function helper (node) {
        result.push({
          id: node.id,
          name: node.name,
          phone: node.phone
        })

        if (node.children) {
          for (let child of node.children) {
            helper(child)
          }
        }
      }

      return result
    }
  },
  watch: {
    tree (tree) {
      localStorage.setItem('tree', JSON.stringify(tree))
    }
  },
  mounted () {
    if (localStorage.getItem('tree')) {
      this.tree = JSON.parse(localStorage.getItem('tree'))
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
#app {
  display: flex;
  position: relative;
  height: 100dvh;
  width: 100dvw;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #dfeff5;
}
.content {
  display: flex;
  flex-direction: column;
  min-width: 350px;
  min-height: auto;
  margin: 100px auto auto;
  border-radius: 10px;
  background: #fff;
}
.btn-add {
  margin: 10px 10px 0px auto;
}
</style>
