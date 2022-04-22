import MainHeader from '/@components/common/MainHeader.vue'
import Footer from '/@components/common/Footer.vue'
import MenuBar from '/@components/common/MenuBar.vue'
import AdminSetupPage from '/@pages/member/AdminSetupPage.vue'

export const MemberRouters = [
    {
        path: '/user/setup',
        name: 'AdmingSetupPage',
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: AdminSetupPage,
            footer: Footer
        }
    }
]