export default {
    singular:true,
    plugins:[
        ['umi-plugin-react',{
            antd:true,
            dva:true
        }]
    ],
    routes:[{
        path:'/',
        component:'../layout',
        routes:[
            {path:'/',component:'./HelloWorld'},
            {path:'/helloworld',component:'./HelloWorld'},
            {path:'/puzzlecards',component:'./puzzlecards'},
            {
                path:'/dashboard',
                routes:[
                    {path:'/dashboard/analysis',component:'../Dashboard/Analysis'},
                    {path:'/dashboard/monitor',component:'../Dashboard/Monitor'},
                    {path:'/dashboard/workplace',component:'../Dashboard/Workplace'}
                ]
            },
            {
                path:'/complex',
                routes:[
                    {path:'/complex/table',component:'../Complex/Table'},
                    {path:'/complex/form',component:'../Complex/Form'},
                    {path:'/complex/chart',component:'../Complex/Chart'}
                ]
            }
        ]
    }],
    proxy: {
        '/dev':{
            target:'http://jsonplaceholder.typicode.com',
            changeOrigin: true,
            pathRewrite: { "^/dev": "" } // 把 dev 重写掉
        }
    }
};
/**
     * component: 表示page下的文件名， 是一个字符串，它是相对于 page 目录的相对路径。
     * path: 表示访问路径。
     * 
     * 在上面的配置中我们将路由的路径配置成为了 /，
     * 这样你访问 http://localhost:8000/ 直接加载Layout和helloworld了。
     *
     * 如果写成 path: 'helloworld',
     * 访问的路径应该加上 helloword  
     * 即url为：http://localhost:8000/helloworld
     *
     * 
     * 关于路由配置的一些发现：
     * 1.path: '/',
     *     component: '../Layout',
     *   映射到 Layout 目录，默认加载 index.js 文件
     * 
     * 2.path: '/helloworld',
     *      component: 'HelloWorld'
     *   映射到 page 目录，加载 helloworld.js 文件
     * 
     * 3.component 目录----大小写要求
     *             文件----大小写忽略
     * 
     */

     /*
     配置代理：
     去往本地服务器 localhost:8000 的 ajax 调用中，如果是以 /dev 开头的，
     那么就转发到远端的 https://08ad1pao69.execute-api.us-east-1.amazonaws.com 服务器当中，
     /dev 也会保留在转发地址中。
     比如：
    /dev/random_joke 就会被转发到 https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke。
    所以 end point URI 也需更改为：const endPointURI = '/dev/random_joke';
     */