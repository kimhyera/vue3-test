<template>
  <div align="center">
    <h2>상품 목록</h2>
    <router-link :to="{ name: 'ItemRegisterPage' }">새로만들기</router-link>
    <item-list :items="items"/>

    {{items}}
  </div>
</template>

<script>
import ItemList from '../components/ItemList.vue'
import { axios } from '@bundled-es-modules/axios'
import { ref, onMounted } from 'vue'

export default {
  name: 'ItemListPage',
  components: { ItemList },
  setup() {
    const items = ref([
   
])

    onMounted (() => {
  

        axios
			.get('http://localhost:4000/list')
			.then((res) => {
				console.log(res.data);

        items.value = res.data
			})
			.catch((error) => console.error(error.response.data.msg));
    })

    return {
      items,
    }
  },
}
</script>
