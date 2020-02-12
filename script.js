

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
            this.height = parseInt(height);
        }

        render() {
            let $divDraw = $('#divDraw');
            let $triangle = $(`<span class="Triangle" data-value1=${this.height} data-value1-desc='height'></span>`);

            $triangle.css({
                width: 0,
                height: 0,
                left: this.x + 200,
                top: this.y + 250,
                //this is so sneeky
                borderTop: this.height + 'px solid transparent',
                borderLeft: this.height + 'px solid yellow',
                borderRight: this.height + 'px solid transparent',
                borderBottom: this.height + 'px solid yellow',
                position: 'absolute'
            });

            $triangle.dblclick(function () {
                this.remove();
            });

            $triangle.click(function () {
                describe(this);
            });

            $divDraw.append($triangle);
        }
    }

    class Rectangle extends Shape {
        constructor(height, width) {
            super();
            this.height = height;
            this.width = width;
        }

        render() {
            let $divDraw = $('#divDraw');
            let $rect = $(`<span class="Rectangle" data-value1=${this.width} data-value2=${this.height} data-value1-desc='width' data-value2-desc='height'></span>`);

            $rect.css({
                width: this.width,
                height: this.height,
                left: this.x + 200,
                top: this.y + 250,
                border: '2px solid green',
                backgroundColor: 'green',
                position: 'absolute'
            });

            $rect.dblclick(function () {
                this.remove();
            });

            $rect.click(function () {
                describe(this);
            });

            $divDraw.append($rect);
        }
    }

    class Square extends Shape {
        constructor(leg) {
            super();
            this.leg = leg;
        }

        render() {
            let $divDraw = $('#divDraw');
            let $square = $(`<span class="Square" data-value1=${this.leg} data-value1-desc='side length'></span>`);

            $square.css({
                width: this.leg,
                height: this.leg,
                left: this.x + 200,
                top: this.y + 250,
                border: '2px solid red',
                backgroundColor: 'red',
                position: 'absolute'
            });

            $square.dblclick(function () {
                this.remove();
            });

            $square.click(function () {
                describe(this);
            });

            $divDraw.append($square);
        }
    }

    class Circle extends Shape {
        constructor(radius) {
            super();
            this.radius = radius;
        }

        render() {
            let $divDraw = $('#divDraw');
            let $circle = $(`<span class="Circle" data-value1=${this.radius} data-value1-desc='radius'></span>`);

            $circle.css({
                borderRadius: '50%',
                left: this.x + 200,
                top: this.y + 250,
                width: this.radius * 2,
                height: this.radius * 2,
                border: '2px solid purple',
                backgroundColor: 'purple',
                position: 'absolute'
            });

            $circle.dblclick(function () {
                this.remove();
            });

            $circle.click(function () {
                describe(this);
            });

            $divDraw.append($circle);
        }
    }

    function describe(e) {
        $('#divSidebar ul').remove();
        let c = e.getAttribute("class");
        let v = e.getAttribute("data-value1");
        let d = e.getAttribute("data-value1-desc");

        let v2 = e.getAttribute("data-value2");
        let d2 = e.getAttribute("data-value2-desc");

        let $div = $('#divSidebar');
        let p = $(e).position();
        let $ul = $(`<ul>${c}</ul>`);
        $ul.append($(`<li>x: ${p.left}   y: ${p.top}</li>`));
        $ul.append($(`<li>${d}: ${v}</li>`));
        if (c == 'Rectangle') {
            $ul.append($(`<li>${d2}: ${v2}</li>`));
        }
        $div.append($ul);
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


