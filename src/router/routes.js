import { HomeRouters } from '/@router/home.js'
import { AuthRouters } from '/@router/auth.js'

const routes = [
    ...HomeRouters,
    ...AuthRouters
]

export default routes