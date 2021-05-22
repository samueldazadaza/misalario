new Vue({
    el: '#app', //dentro de este id se trabajara con vue
    data: {
        valorA: 908526,
        valorB: 0,
        transporte: 106000
    },
    methods:{
        suma:function(){

            return (this.valorA + this.valorB);
        },
        descuento:function(){

            return ((this.valorA + this.valorB) * 0.04);
        },
        descuentototal:function(){

            return ((this.valorA + this.valorB) * 0.08);
        },
        netoapagar:function(){
            return (((this.valorA + this.valorB) - ((this.valorA + this.valorB) * 0.08)));
        }
       
    },
})
