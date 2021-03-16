/*
 * @Date: 2021-01-25 10:43:45
 * @LastEditors: dongfb
 * @LastEditTime: 2021-03-16 17:33:38
 */

function dsButtonCLick() {
   console.log('点击事件');
}


window.onload = () => {
   console.log(ds)
   ds.axios.get('http://localhost:10000/ds_public0.0.1/eventCenter/getAll').then(v => {
      console.log(v.data)
   });

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

   const a = 'a["v"].c[0].d[2]'
   const aa = {
      a: {
         v: {
            c: [
               {
                  d: [23, 2, 2]
               }
            ]
         }
      }
   }

   const aaStore = new ds.store(aa);

   aaStore.on(a, (value) => {
      console.log(value, '=========================');
   })

   aa.a.v.c[0].d[2] = 11;
   aaStore.store.state.a = {...aa.a};
}