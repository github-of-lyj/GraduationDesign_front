import VueRouter from 'vue-router'
import indexContent from "../pages/index/indexContent"
import messageContent from "../pages/message/messageContent"
import forumContent from "../pages/forum/forumContent"
import forumIndex from "../pages/forum/forumIndex"
import forumBlockPage from "../pages/forum/forumBlockPage"
import forumBlockPost from "../pages/forum/forumBlockPost"
import userContent from "../pages/user/userContent"
import searchContent from "../pages/search/searchContent"
import searchUserContent from "../pages/search/searchUserContent"
import searchPostContent from "../pages/search/searchPostContent"
import searchInformationContent from "../pages/search/searchInformationContent"
import informationContent from "../pages/information/informationContent"
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
        },
        {
            name: 'Information',
            path: '/information',
            component: informationContent,
            children:[
                {
                    name: 'SearchInformation',
                    path: 'search/:searchname',
                    component: searchInformationContent
                }
            ]
        }
    ]

})