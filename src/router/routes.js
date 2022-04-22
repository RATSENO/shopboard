import { HomeRouters } from '/@router/home.js'
import { AuthRouters } from '/@router/auth.js'
import { MemberRouters } from '/@router/member.js'

const routes = [
    ...HomeRouters,
    ...AuthRouters,
    ...MemberRouters
]

export default routes