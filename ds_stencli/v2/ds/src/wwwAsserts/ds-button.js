/*
 * @Date: 2021-01-25 10:43:45
 * @LastEditors: dongfb
 * @LastEditTime: 2021-03-26 16:11:09
 */

function dsButtonCLick() {
   console.log('点击事件');
}


window.onload = () => {
   // console.log(ds)
   // ds.axios.get('http://localhost:10000/ds_public0.0.1/eventCenter/getAll').then(v => {
   //    console.log(v.data)
   // });

   // const store = new ds.store({ a: 1, b: { a: 1 } }).store;
   // const aChange = store.onChange('a', (a, b, c) => {
   //    console.log(a, b, c)
   // })
   // const bChange = store.onChange('b', (a, b, c) => {
   //    console.log(a, b, c)
   // })
   // const aSet = store.on('set', (a, b, c) => {
   //    console.log(a, b, c);
   // })
   // store.on('get', (a, b, c) => {
   //    console.log(a, b, c);
   // })
   // store.use({
   //    set: (a, b, c, d) => {
   //       console.log('使用use的set监听', a, b, c, d)
   //    },
   //    get: (a, b, c, d) => {
   //       console.log('使用use的get监听', a, b, c, d)
   //    },
   // })
   // store.state.a = 3
   // store.state.b = { a: 6 }
   // console.log(store.state.b)
   // console.log(store, aSet, aChange, bChange);

   // const a = 'a["v"].c[0].d[2]'
   // const aa = {
   //    a: {
   //       v: {
   //          c: [
   //             {
   //                d: [23, 2, 2]
   //             }
   //          ]
   //       }
   //    }
   // }

   // const aaStore = new ds.store(aa);

   // aaStore.on(a, (value) => {
   //    console.log(value, '=========================');
   // })

   // aa.a.v.c[0].d[2] = 11;
   // aaStore.store.state.a = {...aa.a};

   // aaStore.storeSet('a.v.c[0].d[2]', 22)


   // const ds_for = document.getElementById('fs_for_test');
   // ds_for.dsValue = [1,2,3]



   // vue

   // ds.vue.init('#fs_vue_test', {a: 123})


   // ds-tree
   // const dsTreeA = document.getElementById('ds-tree-a');
   // if(dsTreeA) {
   //    const data = [
   //       {
   //          name: '测试1',
   //          childrens: [
   //             {
   //                name: '测试11'
   //             }
   //          ]
   //       },
   //       {
   //          name: 'jasgdjsad'
   //       },
   //    ];
   //    dsTreeA.data = data;

   // }

   // ds-breadcrumb
   const dsBreadcrumbA = document.getElementById('ds-breadcrumb-a')
   if(dsBreadcrumbA) {
      dsBreadcrumbA.dsData = [
         {
            name: "第一层",
            type: "disabled"
         },
         {
            name: "第二层",
            type: "disabled"
         },
         {
            name: "第三层",
            type: "disabled",
            onClick: function(a,b,c){
               console.log(a,b,c, this)
            }
         },
         {
            name: "第四层",
            type: "link",
            onClick: (a,b,c) => {
               console.log(a,b,c, this)
            }
         },
      ]
   }

}