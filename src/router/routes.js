import ItemListPage from '../pages/ItemListPage.vue'
import ItemRegisterPage from '../pages/ItemRegisterPage.vue'
import ItemModifyPage from '../pages/ItemModifyPage.vue'
import ItemReadPage from '../pages/ItemReadPage.vue'

const routes = [
  {
    path: '/',
    name: 'ItemListPage',
    components: {
      default: ItemListPage
    }
  },
  {
    path: '/item/register',
    name: 'ItemRegisterPage',
    components: {
      default: ItemRegisterPage
    }
  },
  {
    path: '/item/:id',
    name: 'ItemReadPage',
    components: {
      default: ItemReadPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/item/:id/modify',
    name: 'ItemModifyPage',
    components: {
      default: ItemModifyPage
    },
    props: {
      default: true
    }
  }
]

export default routes
