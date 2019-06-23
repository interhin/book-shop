(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n(47)},39:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),c=n.n(o),l=n(7),i=n(9),u=n(8),s=(n(39),Object(l.b)(function(e){return{numItems:e.orderItems,total:e.orderTotal}})(function(e){var t=e.numItems,n=e.total;return r.a.createElement("header",{className:"shop-header row"},r.a.createElement(i.b,{to:"/book-shop"},r.a.createElement("div",{className:"logo text-dark",href:"#"},"ReStore")),r.a.createElement(i.b,{to:"/cart"},r.a.createElement("div",{className:"shopping-cart"},r.a.createElement("i",{className:"cart-icon fa fa-shopping-cart"}),t," items ($",n,")")))})),m=n(10),d=n(11),E=n(20),f=n(19),b=n(21),p=(n(41),function(e){var t=e.book,n=e.onAddedToCart,a=t.title,o=t.author,c=t.price,l=t.coverImage;return r.a.createElement("div",{className:"book-list-item"},r.a.createElement("div",{className:"book-cover"},r.a.createElement("img",{src:l,alt:"cover"})),r.a.createElement("div",{className:"book-details"},r.a.createElement("span",{className:"book-title"},a),r.a.createElement("div",{className:"book-author"},o),r.a.createElement("div",{className:"book-price"},"$",c),r.a.createElement("button",{onClick:n,className:"btn btn-info add-to-cart"},"Add to cart")))}),h=(n(42),function(){return r.a.createElement("div",null,"loading...")}),O=(n(43),function(){return r.a.createElement("div",null,"Error!")}),v=r.a.createContext(),g=v.Provider,k=v.Consumer,y=function(){return function(e){return function(t){return r.a.createElement(k,null,function(n){return r.a.createElement(e,Object.assign({},t,{bookstoreService:n}))})}}},j=function(e){return{type:"BOOK_ADDED_TO_CART",payload:e}},D=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},I=(n(44),function(e){function t(){return Object(m.a)(this,t),Object(E.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.bookstoreService,n=e.booksLoaded,a=e.booksRequested,r=e.booksError;a(),t.getBooks().then(function(e){n(e)}).catch(function(e){r(e)})}},{key:"render",value:function(){var e=this.props,t=e.books,n=e.loading,a=e.error,o=e.onAddedToCart;return n?r.a.createElement(h,null):a?r.a.createElement(O,null):r.a.createElement("ul",{className:"book-list"},t.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(p,{book:e,onAddedToCart:function(){o(e.id)}}))}))}}]),t}(a.Component)),_={booksLoaded:function(e){return{type:"BOOKS_LOADED",payload:e}},booksRequested:function(){return{type:"BOOKS_REQUESTED"}},booksError:function(e){return{type:"BOOKS_ERROR",payload:e}},onAddedToCart:j},N=D(y(),Object(l.b)(function(e){return{books:e.books,loading:e.loading,error:e.error}},_))(I),T=(n(45),Object(l.b)(function(e){return{items:e.cartItems,total:e.orderTotal}},function(e){return{onDeleted:function(t){e({type:"DELETED_ALL_BOOKS",payload:t})},onDecreased:function(t){e({type:"DELETED_BOOK",payload:t})},onIncreased:function(t){e(j(t))}}})(function(e){var t=e.items,n=e.total,a=e.onDeleted,o=e.onIncreased,c=e.onDecreased;return r.a.createElement("div",{className:"shopping-cart-table"},r.a.createElement("h2",null,"Your Order"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Item"),r.a.createElement("th",null,"Count"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,t.map(function(e,t){var n=e.id,l=e.total,i=e.count,u=e.title;return r.a.createElement("tr",{key:n},r.a.createElement("td",null,t+1),r.a.createElement("td",null,u),r.a.createElement("td",null,i),r.a.createElement("td",null,"$",l),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){a(n)},className:"btn btn-outline-danger btn-sm float-right"},r.a.createElement("i",{className:"fa fa-trash-o"})),r.a.createElement("button",{onClick:function(){o(n)},className:"btn btn-outline-success btn-sm float-right"},r.a.createElement("i",{className:"fa fa-plus-circle"})),r.a.createElement("button",{onClick:function(){c(n)},className:"btn btn-outline-warning btn-sm float-right"},r.a.createElement("i",{className:"fa fa-minus-circle"}))))}))),r.a.createElement("div",{className:"total"},"Total: $",n))})),C=function(){return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement(T,null))},B=function(){return r.a.createElement("div",null,"Cart Page")},R=(n(46),function(){return r.a.createElement("main",{role:"main",className:"container"},r.a.createElement(s,{numItems:5,total:210}),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/book-shop",component:C,exact:!0}),r.a.createElement(u.a,{path:"/cart",component:B})))}),S=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(E.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(O,null):this.props.children}}]),t}(a.Component),A=function(){function e(){Object(m.a)(this,e),this.data=[{id:1,title:"Production-Ready Microservices",author:"Susan J. Fowler",price:32,coverImage:"https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg"},{id:2,title:"Release It!",author:"Michael T. Nygard",price:45,coverImage:"https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg"}]}return Object(d.a)(e,[{key:"getBooks",value:function(){var e=this;return new Promise(function(t,n){setTimeout(function(){t(e.data)},700)})}}]),e}(),w=n(18),L=n(15),K=n(13),x={books:[],loading:!0,error:null,cartItems:[],orderTotal:0,orderItems:0},P=function(e,t,n){return 0===t.count?[].concat(Object(K.a)(e.slice(0,n)),Object(K.a)(e.slice(n+1))):-1===n?[].concat(Object(K.a)(e),[t]):[].concat(Object(K.a)(e.slice(0,n)),[t],Object(K.a)(e.slice(n+1)))},J=function(e,t,n,a){var r=e.books.find(function(e){return e.id===t}),o=e.cartItems.findIndex(function(e){return e.id===r.id}),c=e.cartItems[o],l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=t.id,r=void 0===a?e.id:a,o=t.title,c=void 0===o?e.title:o,l=t.total,i=void 0===l?0:l,u=t.count,s=void 0===u?0:u;return{id:r,title:c,total:i+n*e.price,count:s+n}}(r,c,n);return Object(L.a)({},e,{cartItems:P(e.cartItems,l,o),orderTotal:e.orderTotal+r.price*a,orderItems:e.orderItems+n})},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BOOKS_REQUESTED":return Object(L.a)({},e,{books:[],loading:!0,error:null});case"BOOKS_LOADED":return Object(L.a)({},e,{books:t.payload,loading:!1,error:null});case"BOOKS_ERROR":return Object(L.a)({},e,{books:[],loading:!1,error:t.payload});case"BOOK_ADDED_TO_CART":return J(e,t.payload,1,1);case"DELETED_BOOK":return J(e,t.payload,-1,-1);case"DELETED_ALL_BOOKS":var n=e.cartItems.find(function(e){return e.id===t.payload});return J(e,t.payload,-n.count,-n.count);default:return e}},M=Object(w.b)($),q=new A;c.a.render(r.a.createElement(l.a,{store:M},r.a.createElement(S,null,r.a.createElement(g,{value:q},r.a.createElement(i.a,null,r.a.createElement(R,null))))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.20f79bb8.chunk.js.map