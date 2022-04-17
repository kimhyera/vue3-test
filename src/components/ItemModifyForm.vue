<template>
	<!--
	<div>
    <h3>상품 수정 폼</h3>
    <button type="submit">수정</button>
    <router-link :to="{ name: 'ItemReadPage', params: { id: 100 } }">취소</router-link>
  </div>
	-->
  <form @submit.prevent="fireModifyPost">
    <table>
      <tr>
				<td>상품번호</td>
				<td><input :value="item.id" type="text" disabled></td>
			</tr>
			<tr>
				<td>상품명</td>
				<td><input type="text" v-model="item.title"></td>
			</tr>
			<tr>
				<td>상품가격</td>
				<td><input type="text" v-model="item.price">&nbsp;원</td>
			</tr>
			<tr>
				<td>상품파일</td>
				<td><input type="file" @change="changeFile($event)" /></td>
			</tr>
			<tr>
				<td>미리보기</td>
				<td><img v-bind:src="pictureUrl()" width="200"></td>
			</tr>
			<tr>
				<td>상품설명</td>
				<td><textarea v-model="item.description" rows="5"></textarea></td>
			</tr>
		</table>

    <div>
      <button type="submit">수정</button>
      <router-link :to="{ name: 'ItemReadPage', params: { id: id } }">취소</router-link>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ItemModifyForm',
  props: {
    item: {
      type: Object,
      required: true
    },
    id: {
      type: String,
      required: true
    },
  },
  emits: ['modify-post'],
  setup(props, context) {
    const file = ref('')

    const fireModifyPost = () => {
      context.emit('modify-post', {
        title: props.item.title,
        price: props.item.price,
        description: props.item.description,
        file: file.value
      })
    }

    const changeFile = (evt) => {
      file.value = evt.target.files[0]
    }

    const pictureUrl = () => {
      return 'http://localhost:8080/items/display?id=' + props.id + "&timestamp=" + new Date().getTime()
    }

    return {
      fireModifyPost,
      changeFile,
      pictureUrl,
    }
  },
}
</script>
