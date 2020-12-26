new Vue({
    el: '#app', //dentro de este id se trabajara con vue
    data: {
        valorA: 0,
        valorB: 0
    },
    methods:{
        suma:function(){

            return (this.valorA+this.valorB);
        },
        descuento:function(){

            return (this.valorA * 0.04 );
        },
        descuento2:function(){

            return ((this.valorA * 0.04) * 2 );
        }
    },
})