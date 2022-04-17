<template>
  <div align="center">
    <h2>상품 등록</h2>
    <item-register-form @add-post="addPost"/>
  </div>
</template>

<script>
import ItemRegisterForm from '../components/ItemRegisterForm.vue'

import { axios } from '@bundled-es-modules/axios'
import { router } from '../router/router.js'

export default {
  name: 'ItemRegisterPage',
  components: { ItemRegisterForm },
  setup() {
    const addPost = (payload) => {
      const { title, price, description, file } = payload

      const itemObject = {
        title : title,
        price : price,
        description : description
     
      }

      const formData = new FormData()


		  formData.append("file", file)

      console.log(file);

      
		  formData.append("item", JSON.stringify(itemObject))


      // axios.post('http://localhost:4000/list', 
      //     formData,
      //     {
      //       headers: {
      //           'Content-Type': 'multipart/form-data'
      //       }
      //     })
      //   .then(res => {
      //     alert('등록되었습니다.')
      //     router.push({
      //       name: 'ItemReadPage',
      //       params: { id: res.data.id }
      //     })
      //   })
      //   .catch(err => {
      //     alert(err.response.data.msg)
      //   })
   


			axios
				.post(`http://localhost:4000/list`, itemObject)
				.then((res) => {
			
                    alert('등록되었습니다.')
          router.push({
            name: 'ItemReadPage',
            params: { id: res.data.id }
          })
				})
				.catch((error) => console.error(error));

    }

    return {
      addPost,
    }
  },
}
</script>
