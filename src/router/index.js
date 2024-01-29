import VueRouter from 'vue-router'
import indexContent from "../components/pages/indexContent"
import messageContent from "../components/pages/messageContent"
export default new VueRouter({
    routes:[
        {
            name: 'Index',
            path: '/',
            component: indexContent
        },
        {
            name: 'Message',
            path: '/message',
            component: messageContent,
        }
    ]

})