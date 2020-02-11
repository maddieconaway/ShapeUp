

document.addEventListener('DOMContentLoaded', function () {

    let arrShapes = [];

    class Shape {
        constructor() {
            this.x = Math.floor(Math.random() * 600);
            this.y = Math.floor(Math.random() * 600);
            this.startx = 0;
            this.starty = 0;
            this.endx = 0;
            this.endy = 0;
        }
    }

    class Triangle extends Shape {
        constructor(height) {
            super();
            this.height = parseInt(height);
        }

        render() {
            let ctx = document.getElementById('canvasDraw').getContext("2d");
            let xh = parseInt(this.x) - parseInt(this.height);
            let yh = parseInt(this.y) + parseInt(this.height);
            ctx.fillStyle = 'yellow';
            ctx.beginPath();
            ctx.moveTo(this.y, this.x);
            ctx.lineTo(this.y, xh);
            ctx.lineTo(yh, this.x);
            ctx.lineTo(this.y, this.x);
            ctx.closePath();
            ctx.fill();
            //parent class properties
            this.startx = this.x;
            this.starty = this.y - this.height;
            this.endx = this.x + this.height;
            this.endy = this.y;
        }
    }

    class Rectangle extends Shape {
        constructor(height, width) {
            super();
            this.height = height;
            this.width = width;
        }

        render() {
            let ctx = document.getElementById('canvasDraw').getContext("2d");
            ctx.fillStyle = 'green';
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.fill();
            //parent class properties
            this.startx = parseInt(this.x);
            this.starty = parseInt(this.y) - parseInt(this.height);
            this.endx = parseInt(this.x) + parseInt(this.width);
            this.endy = parseInt(this.y);
        }
    }

    class Square extends Shape {
        constructor(leg) {
            super();
            this.leg = leg;
        }

        render() {
            let ctx = document.getElementById('canvasDraw').getContext("2d");
            ctx.fillStyle = 'red';
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.leg, this.leg);
            ctx.fill();
            //parent class properties
            this.startx = parseInt(this.x);
            this.starty = parseInt(this.y) - parseInt(this.leg);
            this.endx = parseInt(this.x) + parseInt(this.leg);
            this.endy = parseInt(this.y);
        }
    }

    class Circle extends Shape {
        constructor(radius) {
            super();
            this.radius = radius;
        }

        render() {
            let ctx = document.getElementById('canvasDraw').getContext("2d");
            //ctx.strokeStyle= 'purple';
            ctx.fillStyle = 'purple';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            ctx.fill();
        }
    }

    $('#btnRectangle').on('click', function () {
        let rectangle = new Rectangle($('#txtRectangleHeight').val(), $('#txtRectangleWidth').val());
        rectangle.render();
        arrShapes.push(rectangle);
    });

    $('#btnCircle').on('click', function () {
        let circle = new Circle($('#txtRadius').val());
        circle.render();
        arrShapes.push(circle);
    });

    $('#btnSquare').on('click', function () {
        let square = new Square($('#txtSquare').val());
        square.render();
        arrShapes.push(square);
    });

    $('#btnTriangle').on('click', function () {
        let triangle = new Triangle($('#txtTriangle').val());
        triangle.render();
        arrShapes.push(triangle);
    });

    $('#canvasDraw').on('click', function (e) {
        let c = document.getElementById('canvasDraw')
        var rect = c.getBoundingClientRect();
        let  x =  e.clientX - rect.left;
        let  y = e.clientY - rect.top;
        for (i = 0; i < arrShapes.length; i++) {
            let a = arrShapes[i];
            console.log('x:' + x + 'y:' + y);
            console.log(x >= a.startx && x <= a.endx);
            console.log('a.starty:' + a.starty);
            console.log('a.endy:' + a.endy);
            console.log(y >= a.starty && y <= a.endy);
            if ((x >= a.startx && x <= a.endx) && (y >= a.starty && y <= a.endy)) {
                console.log('found a shape');
                break;
            }
        }
    });
});


