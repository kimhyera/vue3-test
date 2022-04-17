<template>
  <form @submit.prevent="fireAddPost">
    <table>
			<tr>
				<td>상품명</td>
				<td><input type="text" v-model="title"></td>
			</tr>
			<tr>
				<td>상품가격</td>
				<td><input type="text" v-model="price">&nbsp;원</td>
			</tr>
			<tr>
				<td>상품파일</td>
				<td><input type="file" @change="changeFile($event)" /></td>
				<td></td>
			</tr>
			<tr>
				<td>상품설명</td>
				<td><textarea v-model="description" rows="5"></textarea></td>
			</tr>
		</table>

    <div>
      <button type="submit">등록</button>
      <router-link :to="{ name: 'ItemListPage' }">취소</router-link>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ItemRegisterForm',
  emits: ['add-post'],
  setup(props, context) {
    const title = ref('')
    const price = ref('')
    const description = ref('')
    const file = ref('')

    const fireAddPost = () => {
      context.emit('add-post', {
        title: title.value,
        price: price.value,
        description: description.value,
        file: file.value
      })
    }

    const changeFile = (evt) => {
      // file.value = evt.target.files[0]

       file.value = `90x90.png?text=img`

    }

    return {
      title,
      price,
      description,
      file,
      fireAddPost,
      changeFile,
    }
  },
}
</script>
