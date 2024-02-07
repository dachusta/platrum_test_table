<template>
  <div class="container" @click="$emit('close')">
    <form class="form" @submit.prevent="$emit('save', { name, phone, parent })" @click.stop>
      <div class="header">
        <h3>Добавление пользователя</h3>
        <button @click="$emit('close')">x</button>
      </div>

      <div class="form-item">
        <span>Имя</span>
        <input type="text" required v-model="name">
      </div>

      <div class="form-item">
        <span>Телефон</span>
        <input type="text" required v-model="phone">
      </div>

      <div class="form-item">
        <span>Начальник</span>
        <select v-model="parent">
          <option :value="null">---</option>
          <option
            v-for="item in list"
            :key="item.id"
            :value="item.id"
          >{{ item.name }}</option>
        </select>
      </div>

      <button type="submit">Сохранить</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'VModal',
  props: ['list'],
  data () {
    return {
      name: '',
      phone: '',
      parent: ''
    }
  }
}
</script>

<style scoped>
.container {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
}
.form {
  position: absolute;
  left: 50%;
  top: 200px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  border-radius: 5px;
  background: #fff;
  transform: translateX(-50%);
}
.form-item {
  display: flex;
  gap: 10px;
}
.form-item span {
  width: 100px;
}
.header {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
.header h3 {
  margin: 0;
}
</style>
