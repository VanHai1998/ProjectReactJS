import http from 'src/Utils/http'
import { category } from 'src/types/category.type'
import { SuccessResponse } from 'src/types/utils.type'

const URL = 'categories'

const categoryApi = {
  getCategories() {
    return http.get<SuccessResponse<category[]>>(URL)
  }
}
export default categoryApi
