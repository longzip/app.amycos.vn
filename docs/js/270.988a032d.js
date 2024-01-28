"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[270],{8270:(e,t,o)=>{o.r(t),o.d(t,{default:()=>x});var r=o(9835),a=o(6970);const s={class:"q-pa-md"},n=["src"];function c(e,t,o,c,d,i){const u=(0,r.up)("q-item-section"),l=(0,r.up)("q-item-label"),p=(0,r.up)("q-icon"),m=(0,r.up)("q-item"),g=(0,r.up)("q-separator"),w=(0,r.up)("q-list");return(0,r.wg)(),(0,r.iD)("div",s,[(0,r.Wm)(w,{bordered:"",padding:""},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.products,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t.productId},[(0,r.Wm)(m,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u,{top:"",thumbnail:"",class:"q-ml-none"},{default:(0,r.w5)((()=>[(0,r._)("img",{src:t?.featuredImage.node.sourceUrl},null,8,n)])),_:2},1024),(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[(0,r.Wm)(l,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(t.name),1)])),_:2},1024),(0,r.Wm)(l,{caption:""},{default:(0,r.w5)((()=>[(0,r.Uk)("Giá: "+(0,a.zw)(t.price),1)])),_:2},1024)])),_:2},1024),(0,r.Wm)(u,{side:"",top:""},{default:(0,r.w5)((()=>[(0,r.Wm)(l,{caption:""},{default:(0,r.w5)((()=>[(0,r.Uk)("Thêm")])),_:1}),(0,r.Wm)(p,{name:"add_shopping_cart",onClick:o=>e.confirmAddToCart(t.productId)},null,8,["onClick"])])),_:2},1024)])),_:2},1024),(0,r.Wm)(g,{spaced:""})])))),128))])),_:1})])}var d=o(1926),i=o(2274),u=o(5039),l=o(631);const p="siE2Tnd2dwjgMPdkd8331BB7PpCPhvDp",m=(0,d.L)({uri:`https://store.amycos.vn/wordpress/${p}`}),g=new i.h,w=new u.i(((e,t)=>{const o=localStorage.getItem("woo-session");return o&&e.setContext((({headers:e={}})=>({headers:{"woocommerce-session":`Session ${o}`}}))),t(e)})),h=new u.i(((e,t)=>t(e).map((t=>{const o=e.getContext(),{response:{headers:r}}=o,a=r.get("woocommerce-session");return a&&("false"===a?localStorage.removeItem("woo-session"):localStorage.getItem("woo-session")!==a&&localStorage.setItem("woo-session",r.get("woocommerce-session"))),t})))),f=new l.f({link:w.concat(h.concat(m)),cache:g}),I=f;var P=o(7873);const k=(0,r.aZ)({name:"IndexPage",data(){return{products:[]}},methods:{confirmAddToCart(e){this.$q.dialog({title:"Thêm vào giỏ hàng",message:"Số lượng",prompt:{model:1,type:"text"},cancel:!0,persistent:!0}).onOk((t=>{this.addToCart({productId:e,quantity:parseInt(t)})}))},async loadProducts(){const{data:e}=await I.query({query:P.ZP`
          query (
            $first: Int
            $after: String
            $where: RootQueryToProductConnectionWhereArgs
          ) {
            products(first: $first, after: $after, where: $where) {
              nodes {
                id
                productId: databaseId
                averageRating
                slug
                sku
                featuredImage {
                  node {
                    id
                    altText
                    sourceUrl(size: WOOCOMMERCE_THUMBNAIL)
                  }
                }
                name
                ... on SimpleProduct {
                  price
                  regularPrice
                  stockQuantity
                  id
                }
                ... on VariableProduct {
                  price
                  stockQuantity
                  id
                  regularPrice
                }
                ... on ExternalProduct {
                  price
                  id
                  externalUrl
                  regularPrice
                }
                ... on GroupProduct {
                  id
                  products {
                    nodes {
                      ... on SimpleProduct {
                        id
                        price
                        regularPrice
                      }
                    }
                  }
                }
              }
            }
          }
        `});this.products=e.products.nodes}},mounted(){this.loadProducts()}});var q=o(1639),_=o(3246),C=o(490),W=o(6749),v=o(3115),y=o(2857),Q=o(7467),S=o(963),T=o(926),Z=o(9984),b=o.n(Z);const $=(0,q.Z)(k,[["render",c]]),x=$;b()(k,"components",{QList:_.Z,QItem:C.Z,QItemSection:W.Z,QItemLabel:v.Z,QIcon:y.Z,QInput:Q.Z,QBtn:S.Z,QSeparator:T.Z})}}]);