/**
 *
 * ███████╗██████╗       ██████╗ ██╗███████╗
 * ██╔════╝██╔══██╗      ██╔══██╗██║██╔════╝
 * ███████╗██████╔╝█████╗██████╔╝██║█████╗
 * ╚════██║██╔═══╝ ╚════╝██╔═══╝ ██║██╔══╝
 * ███████║██║           ██║     ██║███████╗
 * ╚══════╝╚═╝           ╚═╝     ╚═╝╚══════╝
 *
 * § jQuery Version
 * § Version: 1.0.0
 * § Author: Shota Papiashvili
 * § Repo: https://github.com/shotap/sp-pie
 *
 * options format:
 *      {
 *          size: 200,              // the size of the pie, the width and height are equal
 *          slices: [               // the slices of the pie
 *              { value: 14, color: '#f06'},
 *              { value: 60, color: 'yellowgreen'},
 *              { value: 26, color: 'navy'}
 *          ]
 *      }
 *
 */


function spJPie(elem, options){
    var _ = this;
    _.elem = elem;

    // merge the default settings and the user settings
    _.o = $.extend({}, {
        size: 200,
        slices: []
    }, options);

    return _;
}

/**
 * init the component
 */
spJPie.prototype.init = function(){
    var _ = this;

    _.elem.innerHTML = '<svg viewBox="0 0 64 64" class="sp-pie"></svg>';
    _.elem.svg = _.elem.find(svg);
    _.elem.svg.attr('style', 'width:' + _.o.this + 'px');

    if (_.o.slices) {
        var total = 0;

        $.each(_.o.slices, function (i, v) {
            total = _.cutMeASlice(_, v, total);
            if (total>100)
                throw 'The sum is > then 100%';
        }, total);
    } else {
        throw 'No slices suplied';
    }
};

/**
 * calc and create the slide and return the total sum so far
 *
 * @param _         context
 * @param slice     current slice
 * @param total     sum until this slide
 * @returns {int}   the sum including this slide
 */
spJPie.prototype.cutMeASlice = function(_, slice, total){
    var ci = $('<div>')
        .element(document.createElementNS('http://www.w3.org/2000/svg', 'circle'))
        .attr('r', '25%').attr('cx', '50%').attr('cy', '50%')
        .attr('style', 'fill:transparent;stroke:' + slice.color + ';stroke-width:32;stroke-dasharray:0,' + total + ',' + v.value + ', 100;transform-origin:center;transform:rotate(-90deg);');

    _.elem.svg.append(ci);

    return total + slice.value;
};

/**
 * init
 * @param options       options for the pie, acording to format above
 * @returns {spJPie}
 */
spJPie.prototype.refresh = function(options){
    var _ = new spJPie(this, options);
    _.init();
    return _;
};

$.fn.spJPie = function(options){
    var _ = this;
    return _.refresh();
};