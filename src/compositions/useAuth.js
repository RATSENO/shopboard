import { computed, reactive } from 'vue'
import client from '/@modules/client.js'

export const useAuth = () => {
    const state = reactive({
        accessToken: '',
        myinfo: null
    })
    //computed 속성으로 정의
    const myinfo = computed(() => state.myinfo)

    //로그인 여부 확인
    const isAuthorized = computed(() => {
        return state.accessToken.length > 0 && !!state.myinfo
    })

    //관리자 여부 확인
    const isAdmin = computed(() => {
        if (!state.myinfo || !state.myinfo.authList) {
            return false
        }

        return isAuthorized && state.myinfo.authList[0].auth === 'ROLE_ADMIN'
    })

    //회원 여부 확인
    const isMember = computed(() => {
        if (!state.myinfo || !state.myinfo.authList) {
            return false
        }

        return isAuthorized && state.myinfo.authList[0].auth === 'ROLE_MEMBER'
    })

    const SET_ACCESS_TOKEN = (accessToken) => {
        if (accessToken) {
            state.accessToken = accessToken
            //HTTP 헤더 토큰을 설정
            client.default.headers.common.Authorization = `Bearer ${accessToken}`
        }
    }

    //상태 변경 합수 정의
    const SET_MY_INFO = (myinfo) => {
        if (myinfo) {
            state.myinfo = myinfo
        }
    }

    const signin = (payload) => {
        return client.post(`/api/authenticate?username=${payload.userId}&password=${payload.password}`, {
            username: payload.userId,
            password: payload.password
        }).then(res => {
            const { authorization } = res.headers
            const accessToken = authorization.substring(7)
            SET_ACCESS_TOKEN(accessToken)

            //사용자 정보 요청
            return client.get('/users/myinfo')
        }).then(res => {
            //스토어 상태에 저장
            SET_MY_INFO(res.data)
        })
    }

    return {
        myinfo,
        isAuthorized,
        isAdmin,
        isMember,
        signin
    }
}
