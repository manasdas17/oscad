$(document).ready(function () {
    var svgns = "http://www.w3.org/2000/svg"
    selectorVal = 0

    var gObj = document.getElementById('viewport');

    function cursor() {
        selectorVal = 0
    }

    function resistor() {
        selectorVal = 1
    }

    function wire() {
        selectorVal = 2
    }

    function inductor() {
        selectorVal = 3
    }

    function ground() {
        selectorVal = 4
    }

    function capacitor() {
        selectorVal = 5
    }

    $('.svg-main').click(function addComponent(event) {
        console.log(event)
        if (selectorVal == 1) addResistor(event);
        else if (selectorVal == 2) addWire(event);
        else if (selectorVal == 3) addinductor(event);
        else if (selectorVal == 4) addground(event);
        else if (selectorVal == 5) addcapacitor(event);
    });


    $('.resistor').click(function (event) {
        resistor()
    });
    $('.cursor').click(function (event) {
        selectorVal = 0 ;
    });
    function addWire(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getwire(ctX - 8, ctY - 58));
        testElement.setAttributeNS(null, 'style', "stroke: black; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        document.getElementById("viewport").appendChild(testElement);
    }

    function addResistor(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getresistor(ctX - 8, ctY - 58));
        testElement.setAttributeNS(null, 'style', "stroke: black; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        document.getElementById("viewport").appendChild(testElement);
    }

    function addinductor(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getinductor(ctX - 8, ctY - 58));
        testElement.setAttributeNS(null, 'style', "stroke: black; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        document.getElementById("viewport").appendChild(testElement);
    }

    function addcapacitor(event) {
        tfm = getTransform();
        ctX = event.pageX - tfm[0];
        ctY = event.pageY - tfm[1];
        testElement = document.createElementNS(svgns, 'path');
        testElement.setAttributeNS(null, 'd', getcapacitor(ctX - 8, ctY - 58));
        testElement.setAttributeNS(null, 'style', "stroke: black; stroke-width: 2px; stroke-linejoin:bevel; fill: none;");
        document.getElementById("viewport").appendChild(testElement);
    }



    function getresistor(ctX, ctY) {
        return "M" + ctX + " " + ctY + " l15 0 l2.5 -5 l5 10 l5 -10 l5 10 l5 -10 l5 10 l2.5 -5 l15 0";
    }

    function getwire(ctX, ctY) {
        return "M" + ctX + " " + ctY + "L 0 50";
    }

    function getinductor(ctX, ctY) {
        return "M" + ctX + " " + ctY + " M 0,16 L 11,16 C 11,16 11,11 16,11 C 21,11 21,16 21,16 C 21,16 21,11 26,11 C 31,11 31,16 31,16 C 31,16 31,11 36,11 C 41,11 41,16 41,16 C 41,16 41,11 46,11 C 51,11 51,16 51,16 L 64,16";
    }

    function getcapacitor(ctX, ctY) {
        return "M" + ctX + " " + ctY + " M 16,0 L 16,28  M 4,28 L 28,28 M 4,38 C 4,38 16,32 28,38 M 16,36 L 16,64";
    }

    function getTransform() {
        var t = [0, 0];
        try {
            tStr = gObj.getAttributeNS(null, "transform").slice(7, -1).split(',');
            t[0] = parseInt(tStr[4]);
            t[1] = parseInt(tStr[5]);
        } catch (err) {
            console.log(err);
        }
        return t;
    }
});
