import VueRouter from 'vue-router'
import indexContent from "../pages/index/indexContent"
import messageContent from "../pages/message/messageContent"
import forumContent from "../pages/forum/forumContent"
import forumIndex from "../pages/forum/forumIndex"
import forumBlockPage from "../pages/forum/forumBlockPage"
import forumBlockPost from "../pages/forum/forumBlockPost"
import userContent from "../pages/user/userContent"
import currentUserContent from "../pages/user/currentUserContent"
import searchContent from "../pages/search/searchContent"
import searchUserContent from "../pages/search/searchUserContent"
import searchPostContent from "../pages/search/searchPostContent"
import informationContent from "../pages/information/informationContent"
import loginContent from "../pages/login/loginContent"
import administrateContent from "../pages/administrate/administrateContent"
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
            name: 'curUser',
            path: '/currentuser',
            component: currentUserContent

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
        },
        {
            name: 'Information',
            path: '/information',
            component: informationContent
        },
        {
            name: 'Login',
            path: '/login',
            component: loginContent
        },
        {
            name: 'Administrate',
            path: '/administrate',
            component: administrateContent
        }
    ]

})