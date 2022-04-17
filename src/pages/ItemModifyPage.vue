<template>
  <div align="center">
    <h2>상품 수정</h2>
    <item-modify-form v-if="item"
        :item="item"
        :id="id"
        @modify-post="modifyPost" />
    <p v-else>loading...</p>
  </div>
</template>

<script>
import ItemModifyForm from '../components/ItemModifyForm.vue'
import client from '../modules/client.js'
import { router } from '../router/router.js'
import { ref } from 'vue'

export default {
  name: 'ItemModifyPage',    
  components: { ItemModifyForm },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const item = ref({})

    client.get(`/items/${props.id}`)
      .then(res => {
        item.value = res.data
      })
      .catch(err => {
        alert(err.response.data.message)
        router.back()
      })

    const modifyPost = (payload) => {
      const { title, price, description, file } = payload

      const itemObject = {
        id : props.id,
        title : title,
        price : price,
        description : description
      }

      const formData = new FormData()
		  formData.append("file", file)
		  formData.append("item", JSON.stringify(itemObject))

      client.put('/items', 
          formData,
          {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          }
        )
        .then(res => {
          alert('수정되었습니다.')
          router.push({
            name: 'ItemReadPage',
            params: { id: res.data.id.toString() }
          })
        })
        .catch(err => {
          alert(err.response.data.msg)
        })
    }

    return {
      item,
      modifyPost,
    }
  },
}
</script>
