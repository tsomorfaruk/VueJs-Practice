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
//Events

new Vue({
    el: '#root',
    data: {
        age: '25',
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
        }
    }
});

