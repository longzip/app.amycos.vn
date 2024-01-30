"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[56],{2056:(e,t,a)=>{a.r(t),a.d(t,{default:()=>X});var n=a(9835),o=a(6970);const i={class:"q-pa-md"},l=["src"],r=(0,n._)("span",{class:"text-caption q-px-sm"},"x",-1),u=["src"],s=(0,n._)("div",{class:"text-h6"},"THÔNG TIN NHẬN HÀNG",-1);function d(e,t,a,d,c,m){const p=(0,n.up)("q-btn"),h=(0,n.up)("q-banner"),g=(0,n.up)("q-item-label"),w=(0,n.up)("q-item-section"),f=(0,n.up)("q-badge"),k=(0,n.up)("q-icon"),y=(0,n.up)("q-item"),b=(0,n.up)("q-separator"),T=(0,n.up)("q-list"),_=(0,n.up)("q-space"),I=(0,n.up)("q-tooltip"),W=(0,n.up)("q-bar"),v=(0,n.up)("q-card-section"),Z=(0,n.up)("q-input"),x=(0,n.up)("q-form"),C=(0,n.up)("q-card"),U=(0,n.up)("q-dialog"),q=(0,n.Q2)("close-popup");return(0,n.wg)(),(0,n.iD)("div",i,[e.checkoutSave?.redirect?((0,n.wg)(),(0,n.j4)(h,{key:0,class:"bg-primary text-white"},{action:(0,n.w5)((()=>[(0,n.Wm)(p,{onClick:t[0]||(t[0]=t=>e.printOrder()),flat:"",color:"white",label:"In đơn hàng"}),(0,n.Wm)(p,{onClick:t[1]||(t[1]=t=>e.viewOrder()),flat:"",color:"white",label:"Xem đơn hàng"})])),default:(0,n.w5)((()=>[(0,n.Uk)(" Đơn hàng đã được đặt thành công. Số đơn hàng: "+(0,o.zw)(e.checkoutSave.order.orderNumber)+" ",1)])),_:1})):(0,n.kq)("",!0),e.cart?.contents?.nodes.length?((0,n.wg)(),(0,n.j4)(T,{key:1,bordered:"",padding:""},{default:(0,n.w5)((()=>[(0,n.Wm)(g,{header:""},{default:(0,n.w5)((()=>[(0,n.Uk)("GIỎ HÀNG")])),_:1}),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.cart.contents.nodes,(t=>((0,n.wg)(),(0,n.iD)("div",{key:t.key},[(0,n.Wm)(y,null,{default:(0,n.w5)((()=>[(0,n.Wm)(w,{top:"",thumbnail:"",class:"q-ml-none"},{default:(0,n.w5)((()=>[(0,n._)("img",{src:t.product.node.featuredImage.node.sourceUrl},null,8,l)])),_:2},1024),(0,n.Wm)(w,null,{default:(0,n.w5)((()=>[(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(t.product.node.name)+" ",1),r,(0,n.Wm)(f,{outline:"",color:"primary",onClick:a=>e.confirmupdateItemQuantities(t.key,t.product.node.name,t.quantity)},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(t.quantity),1)])),_:2},1032,["onClick"])])),_:2},1024),(0,n.Wm)(g,{caption:""},{default:(0,n.w5)((()=>[(0,n.Uk)("Số tiền: "+(0,o.zw)(t.total),1)])),_:2},1024)])),_:2},1024),(0,n.Wm)(w,{side:"",top:""},{default:(0,n.w5)((()=>[(0,n.Wm)(k,{name:"clear",size:"xs",onClick:a=>e.confirmRemoveItemFromCart(t.key)},null,8,["onClick"])])),_:2},1024)])),_:2},1024),(0,n.Wm)(b,{spaced:""})])))),128)),(0,n.Wm)(y,null,{default:(0,n.w5)((()=>[(0,n.Wm)(w,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Tạm tính")])),_:1}),(0,n.Wm)(w,{side:"",top:""},{default:(0,n.w5)((()=>[(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(e.cart.subtotal),1)])),_:1})])),_:1})])),_:1}),(0,n.Wm)(y,null,{default:(0,n.w5)((()=>[(0,n.Wm)(w,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Phí vận chuyển")])),_:1}),(0,n.Wm)(w,{side:"",top:""},{default:(0,n.w5)((()=>[(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(e.cart.shippingTotal),1)])),_:1})])),_:1})])),_:1}),(0,n.Wm)(y,null,{default:(0,n.w5)((()=>[(0,n.Wm)(w,null,{default:(0,n.w5)((()=>[(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Giảm giá")])),_:1}),(0,n.Wm)(g,{caption:""},{default:(0,n.w5)((()=>[(0,n.Uk)("Áp dụng mã giảm giá")])),_:1})])),_:1}),(0,n.Wm)(w,{side:"",top:""},{default:(0,n.w5)((()=>[(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(e.cart.discountTotal),1)])),_:1})])),_:1})])),_:1}),(0,n.Wm)(b,{spaced:"",inset:"item"}),(0,n.Wm)(y,null,{default:(0,n.w5)((()=>[(0,n.Wm)(w,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Tổng")])),_:1}),(0,n.Wm)(w,{side:"",top:""},{default:(0,n.w5)((()=>[(0,n.Wm)(g,{class:"text-bold"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(e.cart.total),1)])),_:1})])),_:1})])),_:1}),(0,n.Wm)(y,null,{default:(0,n.w5)((()=>[(0,n.Wm)(w,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,{outline:"",label:"THANH TOÁN",onClick:t[2]||(t[2]=t=>e.dialog=!0),type:"submit",color:"primary"})])),_:1})])),_:1})])),_:1})):(0,n.kq)("",!0),(0,n.Wm)(T,{bordered:"",padding:""},{default:(0,n.w5)((()=>[(0,n.Wm)(g,{header:""},{default:(0,n.w5)((()=>[(0,n.Uk)("SẢN PHẨM")])),_:1}),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.products,(t=>((0,n.wg)(),(0,n.iD)("div",{key:t.productId},[(0,n.Wm)(y,null,{default:(0,n.w5)((()=>[(0,n.Wm)(w,{top:"",thumbnail:"",class:"q-ml-none"},{default:(0,n.w5)((()=>[(0,n._)("img",{src:t?.featuredImage.node.sourceUrl},null,8,u)])),_:2},1024),(0,n.Wm)(w,null,{default:(0,n.w5)((()=>[(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(t.name),1)])),_:2},1024),(0,n.Wm)(g,{caption:""},{default:(0,n.w5)((()=>[(0,n.Uk)("Giá: "+(0,o.zw)(t.price),1)])),_:2},1024)])),_:2},1024),(0,n.Wm)(w,{side:"",top:""},{default:(0,n.w5)((()=>[(0,n.Wm)(g,{caption:""},{default:(0,n.w5)((()=>[(0,n.Uk)("Thêm")])),_:1}),(0,n.Wm)(k,{name:"add_shopping_cart",onClick:a=>e.confirmAddToCart(t.productId)},null,8,["onClick"])])),_:2},1024)])),_:2},1024),(0,n.Wm)(b,{spaced:""})])))),128))])),_:1}),(0,n.Wm)(U,{modelValue:e.dialog,"onUpdate:modelValue":t[7]||(t[7]=t=>e.dialog=t),persistent:"",maximized:"","transition-show":"slide-up","transition-hide":"slide-down"},{default:(0,n.w5)((()=>[(0,n.Wm)(C,null,{default:(0,n.w5)((()=>[(0,n.Wm)(W,null,{default:(0,n.w5)((()=>[(0,n.Wm)(_),(0,n.wy)(((0,n.wg)(),(0,n.j4)(p,{dense:"",flat:"",icon:"close"},{default:(0,n.w5)((()=>[(0,n.Wm)(I,{class:"bg-white text-primary"},{default:(0,n.w5)((()=>[(0,n.Uk)("Đóng")])),_:1})])),_:1})),[[q]])])),_:1}),(0,n.Wm)(v,null,{default:(0,n.w5)((()=>[s])),_:1}),(0,n.Wm)(v,{class:"q-pt-none"},{default:(0,n.w5)((()=>[(0,n.Wm)(x,{onSubmit:e.checkOut,class:"q-gutter-md"},{default:(0,n.w5)((()=>[(0,n.Wm)(Z,{filled:"",modelValue:e.checkOutData.billing.firstName,"onUpdate:modelValue":t[3]||(t[3]=t=>e.checkOutData.billing.firstName=t),label:"Họ và tên *",hint:"Tên người nhận","lazy-rules":"",rules:[e=>e&&e.length>0||"Vui lòng nhập tên của bạn"]},null,8,["modelValue","rules"]),(0,n.Wm)(Z,{filled:"",type:"tel",modelValue:e.checkOutData.billing.phone,"onUpdate:modelValue":t[4]||(t[4]=t=>e.checkOutData.billing.phone=t),label:"Số điện thoại *",hint:"Số điện thoại nhận hàng","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Vui lòng nhập số điện thoại"]},null,8,["modelValue","rules"]),(0,n.Wm)(Z,{modelValue:e.checkOutData.billing.email,"onUpdate:modelValue":t[5]||(t[5]=t=>e.checkOutData.billing.email=t),filled:"",type:"email",label:"Email *",hint:"Địa chỉ email nhận thông tin đơn hàng","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Vui lòng nhập địa chỉ email"]},null,8,["modelValue","rules"]),(0,n.Wm)(Z,{filled:"",modelValue:e.checkOutData.billing.address1,"onUpdate:modelValue":t[6]||(t[6]=t=>e.checkOutData.billing.address1=t),label:"Địa chỉ *",hint:"Địa chỉ nhận hàng","lazy-rules":"",rules:[e=>e&&e.length>0||"Vui lòng nhập địa chỉ nhận hàng."]},null,8,["modelValue","rules"]),(0,n._)("div",null,[(0,n.Wm)(p,{class:"full-width",outline:"",type:"submit",color:"primary","icon-right":"send"},{default:(0,n.w5)((()=>[(0,n.Uk)("ĐẶT HÀNG "+(0,o.zw)(e.cart?.total),1)])),_:1})])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}a(9635),a(1254),a(1389);var c=a(1926),m=a(2274),p=a(5039),h=a(631);const g="siE2Tnd2dwjgMPdkd8331BB7PpCPhvDp",w=(0,c.L)({uri:`https://store.amycos.vn/wordpress/${g}`}),f=new m.h,k=new p.i(((e,t)=>{const a=localStorage.getItem("woo-session");return a&&e.setContext((({headers:e={}})=>({headers:{"woocommerce-session":`Session ${a}`}}))),t(e)})),y=new p.i(((e,t)=>t(e).map((t=>{const a=e.getContext(),{response:{headers:n}}=a,o=n.get("woocommerce-session");return o&&("false"===o?localStorage.removeItem("woo-session"):localStorage.getItem("woo-session")!==o&&localStorage.setItem("woo-session",n.get("woocommerce-session"))),t})))),b=new h.f({link:k.concat(y.concat(w)),cache:f}),T=b;var _=a(7873),I=a(6950),W=a(3703),v=a(8359),Z=a(4328),x=a(796);const C=(0,n.aZ)({name:"IndexPage",data(){return{products:[],cart:{},checkoutSave:{},dialog:!1,checkOutData:{paymentMethod:"bacs",billing:{address1:"",email:"",phone:"",firstName:""}}}},methods:{printOrder(){const e=document.createElement("a");e.target="_blank",e.href=`https://store.amycos.vn/wordpress/wp-admin/admin-ajax.php?action=generate_wpo_wcpdf&document_type=invoice&order_ids=${this.checkoutSave.order.orderNumber}&order_key=${new URL(this.checkoutSave.redirect).searchParams.get("key")}`,e.click()},viewOrder(){const e=document.createElement("a");e.target="_blank",e.href=this.checkoutSave.redirect,e.click()},async checkOut(){I.Z.show({spinner:v.Z,spinnerSize:"100px"});try{const{data:e}=await T.mutate({mutation:_.ZP`
            mutation CHECKOUT_MUTATION($input: CheckoutInput!) {
              checkout(input: $input) {
                clientMutationId
                order {
                  id
                  orderKey
                  orderNumber
                  status
                  refunds {
                    nodes {
                      amount
                    }
                  }
                }
                result
                redirect
              }
            }
          `,variables:{input:this.checkOutData}});I.Z.hide(),this.checkoutSave=e.checkout,W.Z.set("checkout",e.checkout),W.Z.set("checkOutData",this.checkOutData),this.cart={},this.dialog=!1,Z.Z.create({type:"positive",message:"Đã tạo đơn hàng thành công!"})}catch(e){I.Z.hide(),Z.Z.create({type:"negative",message:"Có lỗi khi tạo đơn hàng!"})}},confirmAddToCart(e){this.$q.dialog({title:"Thêm vào giỏ hàng",message:"Số lượng",prompt:{model:1,type:"text"},cancel:!0,persistent:!0}).onOk((t=>{this.addToCart({productId:e,quantity:parseInt(t)})}))},confirmupdateItemQuantities(e,t,a){this.$q.dialog({title:"Cập nhật số lượng",message:t,prompt:{model:a,type:"text"},cancel:!0,persistent:!0}).onOk((t=>{this.updateItemQuantities({key:e,quantity:parseInt(t)})}))},async addToCart({productId:e,quantity:t=1}){I.Z.show();try{const{data:a}=await T.mutate({mutation:_.ZP`
            mutation ($input: AddToCartInput!) {
              addToCart(input: $input) {
                cart {
                  appliedCoupons {
                    code
                  }
                  contents {
                    nodes {
                      key
                      product {
                        node {
                          id
                          databaseId
                          name
                          type
                          featuredImage {
                            node {
                              id
                              sourceUrl
                            }
                          }
                        }
                      }
                      variation {
                        node {
                          id
                          databaseId
                          name
                          description
                          type
                          onSale
                          price
                          regularPrice
                          salePrice
                          featuredImage {
                            node {
                              id
                              sourceUrl
                            }
                          }
                          attributes {
                            nodes {
                              id
                              name
                              value
                            }
                          }
                        }
                      }
                      quantity
                      total
                      subtotal
                      subtotalTax
                    }
                  }
                  subtotal
                  subtotalTax
                  shippingTax
                  shippingTotal
                  total
                  totalTax
                  feeTax
                  feeTotal
                  discountTax
                  discountTotal
                }
              }
            }
          `,variables:{input:{productId:parseInt(e),quantity:t}}});I.Z.hide(),this.cart=a.addToCart.cart,Z.Z.create({type:"positive",message:"Đã thêm vào giỏ hàng!"})}catch(a){Z.Z.create({type:"negative",message:"Không thể thêm sản phẩm hết hàng!"})}},confirmRemoveItemFromCart(e,t="Bạn muốn xóa sản phẩm khỏi giỏ hàng?"){this.$q.dialog({title:"Xóa sản phẩm giỏ hàng",message:t,ok:{push:!0},cancel:{color:"negative"},persistent:!0}).onOk((()=>{this.removeItemsFromCart(e)}))},async removeItemsFromCart(e){I.Z.show({spinner:v.Z,spinnerSize:"100px"});try{const{data:t}=await T.mutate({mutation:_.ZP`
            mutation CLEAR_CART_MUTATION($input: RemoveItemsFromCartInput!) {
              removeItemsFromCart(input: $input) {
                cart {
                  appliedCoupons {
                    code
                  }
                  contents {
                    nodes {
                      key
                      product {
                        node {
                          id
                          databaseId
                          name
                          type
                          featuredImage {
                            node {
                              id
                              sourceUrl
                            }
                          }
                        }
                      }
                      variation {
                        node {
                          id
                          databaseId
                          name
                          description
                          type
                          onSale
                          price
                          regularPrice
                          salePrice
                          featuredImage {
                            node {
                              id
                              sourceUrl
                            }
                          }
                          attributes {
                            nodes {
                              id
                              name
                              value
                            }
                          }
                        }
                      }
                      quantity
                      total
                      subtotal
                      subtotalTax
                    }
                  }
                  subtotal
                  subtotalTax
                  shippingTax
                  shippingTotal
                  total
                  totalTax
                  feeTax
                  feeTotal
                  discountTax
                  discountTotal
                }
              }
            }
          `,variables:{input:{keys:e}}});I.Z.hide(),this.cart=t.removeItemsFromCart.cart,Z.Z.create({type:"positive",message:"Đã xóa sản phẩm giỏ hàng!"})}catch(t){I.Z.hide(),Z.Z.create({type:"negative",message:"Không thể xóa sản phẩm giỏ hàng!"})}},async updateItemQuantities(e,t){I.Z.show({spinner:v.Z,spinnerSize:"100px"});try{const{data:a}=await T.mutate({mutation:_.ZP`
            mutation UPDATE_CART_ITEM_MUTATION(
              $input: UpdateItemQuantitiesInput!
            ) {
              updateItemQuantities(input: $input) {
                cart {
                  appliedCoupons {
                    code
                  }
                  contents {
                    nodes {
                      key
                      product {
                        node {
                          id
                          databaseId
                          name
                          type
                          featuredImage {
                            node {
                              id
                              sourceUrl
                            }
                          }
                        }
                      }
                      variation {
                        node {
                          id
                          databaseId
                          name
                          description
                          type
                          onSale
                          price
                          regularPrice
                          salePrice
                          featuredImage {
                            node {
                              id
                              sourceUrl
                            }
                          }
                          attributes {
                            nodes {
                              id
                              name
                              value
                            }
                          }
                        }
                      }
                      quantity
                      total
                      subtotal
                      subtotalTax
                    }
                  }
                  subtotal
                  subtotalTax
                  shippingTax
                  shippingTotal
                  total
                  totalTax
                  feeTax
                  feeTotal
                  discountTax
                  discountTotal
                }
              }
            }
          `,variables:{input:{clientMutationId:(0,x.Z)(),items:{key:e,quantity:t}}}});I.Z.hide(),this.cart=a.updateItemQuantities.cart,Z.Z.create({type:"positive",message:"Hoàn thành cập nhật giỏ hàng!"})}catch(a){I.Z.hide(),Z.Z.create({type:"negative",message:"Có lỗi khi cập nhật số lượng!"})}},async loadProducts(){const{data:e}=await T.query({query:_.ZP`
          query (
            $first: Int
            $after: String
            $where: RootQueryToProductConnectionWhereArgs
          ) {
            cart {
              contents {
                nodes {
                  key
                  product {
                    node {
                      id
                      databaseId
                      name
                      type
                      featuredImage {
                        node {
                          id
                          sourceUrl
                        }
                      }
                    }
                  }
                  variation {
                    node {
                      id
                      databaseId
                      name
                      description
                      type
                      onSale
                      price
                      regularPrice
                      salePrice
                      featuredImage {
                        node {
                          id
                          sourceUrl
                        }
                      }
                      attributes {
                        nodes {
                          id
                          name
                          value
                        }
                      }
                    }
                  }
                  quantity
                  total
                  subtotal
                  subtotalTax
                }
              }
              subtotal
              subtotalTax
              shippingTax
              shippingTotal
              total
              totalTax
              feeTax
              feeTotal
              discountTax
              discountTotal
            }
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
        `});this.cart=e.cart,this.products=e.products.nodes}},mounted(){this.checkoutSave=W.Z.getItem("checkout");const e=W.Z.getItem("checkOutData");e&&(this.checkOutData=e),this.loadProducts()}});var U=a(1639),q=a(7128),S=a(963),P=a(3246),O=a(3115),Q=a(490),D=a(6749),z=a(990),$=a(2857),N=a(926),V=a(7831),H=a(4458),A=a(4526),M=a(136),E=a(7048),R=a(3190),B=a(8326),F=a(6891),G=a(2146),j=a(9984),K=a.n(j);const L=(0,U.Z)(C,[["render",d]]),X=L;K()(C,"components",{QBanner:q.Z,QBtn:S.Z,QList:P.Z,QItemLabel:O.Z,QItem:Q.Z,QItemSection:D.Z,QBadge:z.Z,QIcon:$.Z,QSeparator:N.Z,QDialog:V.Z,QCard:H.Z,QBar:A.Z,QSpace:M.Z,QTooltip:E.Z,QCardSection:R.Z,QForm:B.Z,QInput:F.Z}),K()(C,"directives",{ClosePopup:G.Z})}}]);