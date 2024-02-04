import VueRouter from 'vue-router'
import indexContent from "../components/pages/index/indexContent"
import messageContent from "../components/pages/message/messageContent"
import forumContent from "../components/pages/forum/forumContent"
import forumIndex from "../components/pages/forum/forumIndex"
import forumBlockPage from "../components/pages/forum/forumBlockPage"
import forumBlockPost from "../components/pages/forum/forumBlockPost"
import userContent from "../components/pages/user/userContent"
import searchContent from "../components/pages/search/searchContent"
import searchUserContent from "../components/pages/search/searchUserContent"
import searchPostContent from "../components/pages/search/searchPostContent"
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
                    component: forumIndex    
                },
                {
                    name: 'ForumBlockPage',
                    path: 'block/:blockid',
                    component: forumBlockPage,
                },
                {
                    name: 'ForumBlockPost',
                    path: 'post/:postid',
                    component: forumBlockPost
                }
            ]
        },
        {
            name: 'User',
            path: '/user/:userid',
            component: userContent
        },
        {
            name: 'Search',
            path: '/search',
            component: searchContent,
            children:[
                {
                    name: 'SearchUser',
                    path: 'user/:searchname',
                    component: searchUserContent

                },
                {
                    name: 'SearchPost',
                    path: 'post/:searchname',
                    component: searchPostContent
                }
            ]
        }
    ]

})