var vue = new Vue({
    el: '#vue',
    data: {
        title: 'to do list',
        counter: 0,
        input: '',
        name: [],
        date: 1
    },
    methods: {
        add: function (post) {
            if (post) {
                this.name.push({
                    title:post,
                    dt:new Date()
                })
                this.input = ''
                console.log(this.name);
            }
        },
        remove:function(ind,event){
            console.log(event);
           return this.name.splice(ind,1)
        },
        toUpper: function(item){
           return item.toUpperCase()
        }
    },
    computed: {
        count:function(){
            return this.name.length * 2
        }
    },
    watch: {
        input(value){
            if(value.length > 15){
                this.input = ''
            }
        }
    }    
})
