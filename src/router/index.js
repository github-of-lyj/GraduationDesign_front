import VueRouter from 'vue-router'
import indexContent from "../components/pages/indexContent"
import messageContent from "../components/pages/messageContent"
import forumContent from "../components/pages/forum/forumContent"
import forumIndex from "../components/pages/forum/forumIndex"
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
        },
        {
            name: 'Forum',
            path: '/forum',
            component: forumContent,
            children:[
                {
                    name: 'ForumIndex',
                    path: 'index',
                    component: forumIndex                }
            ]
        }
    ]

})