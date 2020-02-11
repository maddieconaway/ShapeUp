

document.addEventListener('DOMContentLoaded', function () {
    class Shape {
        constructor() {
            this.x = Math.floor(Math.random() * 600);
            this.y = Math.floor(Math.random() * 600);
        }
    }

    class Triangle extends Shape {
        constructor(height) {
            super();
            this.height = height;
        }

        render() {
            let ctx = document.getElementById('canvasDraw').getContext("2d");
            let xh = parseInt(this.x) - parseInt(this.height);
            let yh = parseInt(this.y) + parseInt(this.height);
            ctx.beginPath();
            ctx.moveTo(this.y, this.x);
            ctx.lineTo(this.y, xh);
            ctx.lineTo(yh, this.x);
            ctx.lineTo(this.y, this.x);
            ctx.closePath();
            ctx.stroke();
            let $ol=$('#matrixList');
            let $li=$('<li>Triangle</li>');
            let $ul=$('<ul style="padding-left: 0px;"></ul>');
            $ul.append($(`<ul><li>x: ${this.x} y: ${this.y}</li></ul>`));
            $ul.append($(`<ul><li>Height: ${this.height}</li></ul>`));
            $li.append($ul);
            $ol.append($li);
        }

        matrix() {
            
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
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
            let $ol=$('#matrixList');
            let $li=$('<li>Rectangle</li>');
            let $ul=$('<ul style="padding-left: 0px;"></ul>');
            $ul.append($(`<ul><li>x: ${this.x} y: ${this.y}</li></ul>`));
            $ul.append($(`<ul><li>height: ${this.height}</li></ul>`));
            $ul.append($(`<ul><li>width: ${this.width}</li></ul>`));
            $li.append($ul);
            $ol.append($li);
        }
    }

    class Square extends Shape {
        constructor(leg) {
            super();
            this.leg = leg;
        }

        render() {
            let ctx = document.getElementById('canvasDraw').getContext("2d");
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.leg, this.leg);
            ctx.stroke();
            let $ol=$('#matrixList');
            let $li=$('<li>Square</li>');
            let $ul=$('<ul style="padding-left: 0px;"></ul>');
            $ul.append($(`<ul><li>x: ${this.x} y: ${this.y}</li></ul>`));
            $ul.append($(`<ul><li>Side Length: ${this.leg}</li></ul>`));
            $li.append($ul);
            $ol.append($li);
        }
    }

    class Circle extends Shape {
        constructor(radius) {
            super();
            this.radius = radius;
        }

        render() {
            let ctx = document.getElementById('canvasDraw').getContext("2d");
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            ctx.stroke();
            let $ol=$('#matrixList');
            let $li=$('<li>Circle</li>');
            let $ul=$('<ul style="padding-left: 0px;"></ul>');
            $ul.append($(`<ul><li>x: ${this.x} y: ${this.y}</li></ul>`));
            $ul.append($(`<ul><li>Radius: ${this.radius}</li></ul>`));
            $li.append($ul);
            $ol.append($li);
        }
    }

    $('#btnRectangle').on('click', function () {
        let rectangle = new Rectangle($('#txtRectangleHeight').val(), $('#txtRectangleWidth').val());
        rectangle.render();
    });

    $('#btnCircle').on('click', function () {
        let circle = new Circle($('#txtRadius').val());
        circle.render();
    });

    $('#btnSquare').on('click', function () {
        let square = new Square($('#txtSquare').val());
        square.render();
    });

    $('#btnTriangle').on('click', function () {
        let triangle = new Triangle($('#txtTriangle').val());
        triangle.render();
    });
});


