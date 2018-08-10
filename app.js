/* Data Binding
new Vue({
    el:"#root",
    data: {
        name: "omor",
        job: 'student',
        website: 'https://www.google.com',
        websiteTag: '<a href=https://www.google.com>Omor faruk</a>'
    }
});*/
/*Mouse Events

new Vue({
    el: '#root',
    data: {
        age: 25,
        x: '0',
        y: '0'
    },
    methods: {
        add: function(inc) {
            this.age += inc;
        },
        minus: function(dec) {
            this.age -= dec;
        },
        updateXY: function (event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function () {
            alert("are u click???");
        }
    }
});*/

/*Keyboard Events
new Vue({
    el:'#root',
    data: {

    },
    methods: {
        logName: function () {
            console.log("Entered Your Name");
        },
        logAge: function () {
            console.log("Entered Your Age");
        },
    }
});
//Two way Data Binding
new Vue({
    el: '#root',
    data: {
        name: '',
        age: '',
    },
});*/
// Computed Properties
new Vue({
    el: '#root',
    data: {
        age: 20,
        a: 0,
        b:0
    },
    methods: {
        /*addToA: function () {
            console.log("Your age A");
            return this.a + this.age;
        },
        addToB: function () {
            console.log("your age b");
            return this.b + this.age;
        },*/
    },
    computed: {
        addToA: function () {
            console.log("Your age A");
            return this.a + this.age;
        },
        addToB: function () {
            console.log("your age b");
            return this.b + this.age;
        }
    }
});