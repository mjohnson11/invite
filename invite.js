var existing_lines = ['0.32973925299506696,0.2757544224765869 0.32973925299506696,0.2851196670135276 0.32973925299506696,0.3059313215400624 0.32973925299506696,0.3225806451612903 0.3304439746300212,0.34027055150884494 0.32903453136011274,0.3548387096774194 0.3269203664552502,0.3673257023933403',
'0.33114869626497534,0.32049947970863685 0.3389006342494715,0.3215400624349636 0.351585623678647,0.32362122788761705 0.3621564482029599,0.32362122788761705 0.3699083861874559,0.3215400624349636',
'0.3677942212825934,0.2778355879292404 0.36708949964763915,0.29136316337148804 0.3656800563777308,0.30801248699271594 0.36497533474277666,0.32362122788761705 0.36286116983791405,0.34027055150884494 0.36286116983791405,0.3558792924037461 0.3621564482029599,0.36524453694068676',
'0.3917547568710359,0.32362122788761705 0.3832980972515856,0.3298647242455775 0.3804792107117688,0.3433922996878252 0.3875264270613108,0.3548387096774194 0.39668780831571526,0.34963579604578565 0.39880197322057787,0.3340270551508845 0.39034531360112756,0.32570239334027057',
'0.40584918957011984,0.32362122788761705 0.40514446793516556,0.3381893860561915 0.41007751937984493,0.3517169614984391 0.41642001409443274,0.34027055150884494 0.4178294573643411,0.32466181061394384 0.4171247357293869,0.3381893860561915 0.4171247357293869,0.3548387096774194 0.4171247357293869,0.3558792924037461',
'0.4389711064129669,0.3225806451612903 0.42910500352360814,0.3225806451612903 0.4234672304439746,0.33610822060353795 0.4319238900634249,0.3433922996878252 0.428400281888654,0.35691987513007284 0.42064834390415784,0.3558792924037461',
'0.4446088794926004,0.32362122788761705 0.44390415785764625,0.33610822060353795 0.44390415785764625,0.3537981269510926 0.4530655391120507,0.35796045785639957 0.45870331219168425,0.3558792924037461',
'0.44601832276250886,0.34027055150884494 0.4558844256518675,0.3392299687825182 0.46081747709654686,0.3392299687825182',
'0.4446088794926004,0.32570239334027057 0.45447498238195916,0.32570239334027057 0.45940803382663853,0.32466181061394384',
'0.46927413671599716,0.3225806451612903 0.4727977448907682,0.33610822060353795 0.4749119097956307,0.3506763787721124 0.4812544045102185,0.3413111342351717 0.4875968992248062,0.32778355879292403 0.4939393939393939,0.33714880332986474 0.49746300211416494,0.3506763787721124 0.5009866102889359,0.3381893860561915 0.5038054968287526,0.3225806451612903 0.5059196617336152,0.3142559833506764',
'0.5228329809725158,0.3173777315296566 0.5164904862579281,0.3267429760665973 0.508738548273432,0.34235171696149846 0.5045102184637068,0.35691987513007284 0.5045102184637068,0.35796045785639957',
'0.5221282593375617,0.3194588969823101 0.5242424242424243,0.331945889698231 0.5263565891472868,0.34755463059313213 0.527061310782241,0.3537981269510926',
'0.5122621564482029,0.3392299687825182 0.5221282593375617,0.33714880332986474 0.52353770260747,0.3381893860561915',
'0.5383368569415081,0.31321540062434966 0.5390415785764623,0.32570239334027057 0.5404510218463707,0.3433922996878252 0.5397463002114165,0.35275754422476585',
'0.5390415785764623,0.3173777315296566 0.5482029598308669,0.31321540062434966 0.552431289640592,0.32778355879292403 0.5425651867512332,0.33298647242455776 0.5404510218463707,0.33298647242455776',
'0.5397463002114165,0.3340270551508845 0.5460887949260043,0.34443288241415193 0.5503171247357294,0.3517169614984391',
'0.5580690627202255,0.34963579604578565 0.5566596194503172,0.3350676378772112 0.5566596194503172,0.3173777315296566 0.5630021141649049,0.32570239334027057 0.5728682170542636,0.32882414151925077 0.5820295983086681,0.3184183142559833 0.5834390415785765,0.3309053069719043 0.5827343199436222,0.34755463059313213 0.5827343199436222,0.34963579604578565',
'0.5982381959126145,0.3215400624349636 0.5989429175475687,0.3340270551508845 0.5982381959126145,0.3517169614984391 0.5982381959126145,0.3558792924037461',
'0.5904862579281184,0.3225806451612903 0.5989429175475687,0.3225806451612903 0.6059901338971106,0.3225806451612903',
'0.5911909795630725,0.35275754422476585 0.6003523608174771,0.3517169614984391 0.6123326286116983,0.35275754422476585',
'0.6236081747709654,0.3610822060353798 0.6236081747709654,0.34755463059313213 0.6243128964059197,0.3267429760665973 0.63276955602537,0.32778355879292403 0.6391120507399577,0.34235171696149846 0.6454545454545454,0.35691987513007284 0.647568710359408,0.34443288241415193 0.647568710359408,0.32570239334027057 0.6482734319943622,0.31633714880332986',
'0.6785764622973925,0.3142559833506764 0.669415081042988,0.3194588969823101 0.6644820295983086,0.3309053069719043 0.6637773079633544,0.34755463059313213 0.6701198026779422,0.3590010405827263 0.680690627202255,0.3610822060353798 0.6842142353770261,0.34755463059313213 0.6750528541226215,0.34027055150884494 0.6722339675828047,0.34027055150884494',
'0.7300211416490486,0.2736732570239334 0.7272022551092319,0.2809573361082206 0.7229739252995067,0.29552549427679503 0.7173361522198731,0.3142559833506764 0.7109936575052854,0.331945889698231 0.706060606060606,0.34755463059313213 0.7011275546159267,0.3610822060353798 0.694785059901339,0.3756503642039542 0.6933756166314305,0.3798126951092612',
'0.3677942212825934,0.40582726326742974 0.36708949964763915,0.4162330905306972 0.3642706131078224,0.43184183142559834 0.3614517265680056,0.44849115504682624 0.3600422832980973,0.46618106139438087 0.359337561663143,0.48074921956295524',
'0.36286116983791405,0.45161290322580644 0.36920366455250175,0.449531737773153 0.3832980972515856,0.44849115504682624 0.39105003523608173,0.4474505723204995',
'0.39316420014094433,0.4120707596253902 0.39245947850599017,0.42039542143600417 0.3889358703312191,0.4380853277835588 0.38682170542635663,0.4578563995837669 0.38611698379140236,0.4755463059313215 0.38611698379140236,0.47658688865764826',
'0.40725863284002817,0.4432882414151925 0.4002114164904863,0.45161290322580644 0.4002114164904863,0.4672216441207076 0.41219168428470754,0.4703433922996878 0.421353065539112,0.4588969823100936 0.4150105708245243,0.4464099895941727 0.40514446793516556,0.4464099895941727',
'0.4255813953488372,0.44016649323621226 0.4241719520789289,0.4505723204994797 0.421353065539112,0.46826222684703434 0.43121916842847074,0.47346514047866806 0.4340380549682875,0.4578563995837669 0.43544749823819595,0.44016649323621226 0.4347427766032417,0.45369406867845996 0.43544749823819595,0.46930280957336107 0.43544749823819595,0.4724245577523413',
'0.4551797040169133,0.441207075962539 0.44813248766737135,0.44432882414151925 0.44813248766737135,0.4578563995837669 0.45658914728682176,0.4672216441207076 0.4509513742071881,0.4797086368366285 0.44178999295278365,0.4797086368366285',
'0.46504580690627206,0.445369406867846 0.4636363636363636,0.4578563995837669 0.4664552501761804,0.4745057232049948 0.47632135306553913,0.4724245577523413',
'0.46504580690627206,0.45681581685744016 0.47420718816067653,0.4578563995837669',
'0.4664552501761804,0.4474505723204995 0.47632135306553913,0.445369406867846 0.47773079633544746,0.445369406867846',
'0.4875968992248062,0.4422476586888658 0.4875968992248062,0.4557752341311134 0.4861874559548979,0.47346514047866806 0.49534883720930234,0.46930280957336107 0.49112050739957713,0.45681581685744016 0.48689217758985204,0.4547346514047867',
'0.48900634249471464,0.45681581685744016 0.49746300211416494,0.4505723204994797 0.49041578576462297,0.4422476586888658 0.4875968992248062,0.4422476586888658',
'0.5094432699083862,0.44849115504682624 0.5101479915433403,0.4630593132154006 0.5094432699083862,0.4755463059313215',
'0.50169133192389,0.4474505723204995 0.5115574348132488,0.449531737773153 0.5178999295278365,0.449531737773153',
'0.5023960535588443,0.4745057232049948 0.5122621564482029,0.47346514047866806 0.5214235377026075,0.4724245577523413',
'0.5256518675123326,0.4505723204994797 0.5263565891472868,0.46409989594172735 0.527061310782241,0.47762747138397504',
'0.52353770260747,0.4505723204994797 0.5326990838618746,0.4464099895941727 0.5291754756871035,0.4588969823100936 0.5256518675123326,0.4588969823100936',
'0.5263565891472868,0.4588969823100936 0.5326990838618746,0.4672216441207076 0.537632135306554,0.4724245577523413',
'0.5460887949260043,0.44432882414151925 0.5467935165609584,0.4578563995837669 0.5460887949260043,0.47762747138397504',
'0.5390415785764623,0.4474505723204995 0.5482029598308669,0.4464099895941727 0.5594785059901339,0.4464099895941727',
'0.5658210007047216,0.44432882414151925 0.5651162790697675,0.4547346514047867 0.5644115574348133,0.4745057232049948',
'0.563706835799859,0.4620187304890739 0.5728682170542636,0.4578563995837669 0.5770965468639887,0.4557752341311134',
'0.5785059901338971,0.44432882414151925 0.5785059901338971,0.4588969823100936 0.5785059901338971,0.4713839750260146',
'0.5897815362931642,0.44016649323621226 0.5897815362931642,0.4547346514047867 0.5897815362931642,0.47762747138397504',
'0.5897815362931642,0.44016649323621226 0.5918957011980268,0.441207075962539 0.6116279069767442,0.4380853277835588 0.6165609584214236,0.4505723204994797 0.6137420718816068,0.46514047866805414 0.6052854122621564,0.4755463059313215 0.5947145877378436,0.47762747138397504 0.5911909795630725,0.4786680541103018',
'0.6334742776603242,0.4328824141519251 0.6306553911205074,0.44432882414151925 0.6264270613107822,0.4630593132154006 0.6243128964059197,0.4713839750260146',
'0.6348837209302325,0.43496357960457854 0.6405214940098661,0.44432882414151925 0.6447498238195912,0.4620187304890739 0.6468639887244538,0.4724245577523413',
'0.6285412262156448,0.4578563995837669 0.6384073291050035,0.45681581685744016 0.6433403805496829,0.4557752341311134',
'0.6567300916138126,0.4474505723204995 0.6574348132487667,0.46097814776274715 0.6588442565186751,0.46930280957336107',
'0.6581395348837209,0.449531737773153 0.6630725863284003,0.4380853277835588 0.6701198026779422,0.42351716961498437 0.6722339675828047,0.4183142559833507',
'0.6574348132487667,0.4505723204994797 0.6525017618040874,0.44016649323621226 0.6454545454545454,0.42767950052029136 0.6433403805496829,0.42455775234131116',
'0.4192389006342495,0.514047866805411 0.41853417899929524,0.5286160249739854 0.41853417899929524,0.5442247658688866 0.41642001409443274,0.562955254942768 0.41571529245947847,0.5712799167533819',
'0.4199436222692037,0.5161290322580645 0.428400281888654,0.5119667013527576 0.4403805496828753,0.5130072840790842 0.44178999295278365,0.5286160249739854 0.4319238900634249,0.5390218522372529 0.421353065539112,0.5400624349635796 0.4192389006342495,0.5421436004162331',
'0.4530655391120507,0.5431841831425598 0.4474277660324172,0.5515088449531738 0.43967582804792105,0.5660770031217481 0.4361522198731501,0.5744016649323621',
'0.4530655391120507,0.5400624349635796 0.4558844256518675,0.5504682622268471 0.45940803382663853,0.5671175858480749 0.4622269203664553,0.578563995837669',
'0.44390415785764625,0.5639958376690947 0.45024665257223395,0.5608740894901144 0.4622269203664553,0.5598335067637877 0.4664552501761804,0.5608740894901144',
'0.4720930232558139,0.5390218522372529 0.47138830162085976,0.5504682622268471 0.46997885835095143,0.5671175858480749 0.46997885835095143,0.5796045785639958',
'0.47138830162085976,0.5359001040582726 0.47984496124031006,0.5390218522372529 0.48195912614517267,0.5556711758584808 0.4720930232558139,0.5598335067637877 0.47138830162085976,0.5598335067637877',
'0.46927413671599716,0.558792924037461 0.47773079633544746,0.5660770031217481 0.483368569415081,0.5733610822060354',
'0.49323467230443974,0.5338189386056191 0.4960535588442565,0.5473465140478668 0.49746300211416494,0.562955254942768 0.49746300211416494,0.5681581685744017',
'0.48477801268498943,0.5390218522372529 0.4918252290345314,0.5359001040582726 0.508738548273432,0.5338189386056191 0.5122621564482029,0.5327783558792925',
'0.5277660324171952,0.54630593132154 0.5277660324171952,0.558792924037461 0.5277660324171952,0.5744016649323621',
'0.5291754756871035,0.5442247658688866 0.5369274136715997,0.5359001040582726 0.541860465116279,0.5275754422476587',
'0.5277660324171952,0.5442247658688866 0.5221282593375617,0.5369406867845994 0.5115574348132488,0.5254942767950052 0.508738548273432,0.5234131113423517',
'0.15990133897110642,0.368366285119667 0.15990133897110642,0.368366285119667'];

/** Client side script */

//line drawing from https://bl.ocks.org/mbostock/f705fc55e6f26df29354
//audio processing modified from https://hackernoon.com/how-to-build-an-audio-processor-in-your-browser-302cb7aa502a and associated github

var the_svg;
var drawn = [];
var data = new Array(1024);
var data_len = data.length;
var audioSource, audioContext, analyser, sound_analyser;
var sound = document.getElementById('sound');

var pts_sound;

var ac = 0;

var aud_obj;

var not_playing = true;
var not_dropped = true;
var not_dropped_wavy = true;
var squirrel_time = 90;
var dog_time = 44.8;
var wavy_time = 30.3;
//wavy_time = 0;

var drawing = 'wavy';
var current_freq_scale = 'radial';
var color_method = 'cycle_auto';
var freq_scale_global = false;
var scaling_enhancement = 0;
var global_amp_adjuster = 0.2;
var afactor = 2;

var w = document.getElementById("svg_div").clientWidth;
var h = document.getElementById("svg_div").clientHeight;
var corner_dist = Math.sqrt(0.5);

var drag_func;

fonts = ["Alfa Slab One", "Architects Daughter", "Pacifico", "Piedra", "Sansita Swashed", "Staatliches", "Comic Sans MS", "Courier New"];
font_colors = ["red", "aqua", "blue", "black", "purple", "pink", "Tomato", "Orange", "MediumSeaGreen", "SlateBlue", "Gold", "DarkCyan"];
font_drops = [true, true, true, true, true, true, true];
font_drop_times = [37.5, 41, 50, 58, 64, 72, 80, 88];
//font_drop_times = [1,1,1,1,1,1,1,1,1,1,1,1];
text_drops = ["OCTOBER 20TH", "454 41st ST", "A HOUSEWARMING PARTY",  "A BIRTHDAY PARTY",  "HOPE YOU'RE HAVING A LOVELY DAY", "bring the chipmunkfunk", "SAVE THAT MF DATE"];
text_sizes = [3.5, 2.8, 2, 1.9, 2.1, 3, 1];
text_offsets = [0, 0, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1];
rotate_steps = [0, 0, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3];
text_ypos = [0.32, 0.8, Math.random()*0.8+0.1, Math.random()*0.8+0.1, Math.random()*0.8+0.1, Math.random()*0.8+0.1, Math.random()*0.8+0.1, Math.random()*0.8+0.1, Math.random()*0.8+0.1];

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

//this should allow shortcuts even when an input field is in focus
Mousetrap.stopCallback = function () {
     return false;
}

Mousetrap.bind('c', function() { update_drawing('circle'); });
Mousetrap.bind('w', function() { update_drawing('wavy'); });
Mousetrap.bind('z', function() { update_drawing('zipper'); });
Mousetrap.bind('r', function() { current_col = getRandomColor(); });
Mousetrap.bind(['command+z', 'ctrl+z'], undo);
Mousetrap.bind(['command+e', 'ctrl+e'], erase);

function undo() {
  if (drawn.length > 0) {
    drawn[drawn.length-1].el.remove();
    drawn = drawn.slice(0, drawn.length-1);
  }
}

function erase() {
  drawn = [];
  the_svg.html(null);  
}

function update_drawing(s) {
  drawing = s;
}

// awesome d3 line interpolation demo: http://bl.ocks.org/d3indepth/b6d4845973089bc1012dec1674d3aff8
var straight_line = d3.line()
    .curve(d3.curveLinear);
var line = d3.line()
    .curve(d3.curveBasis);
var milo_line = d3.line()
    .curve(d3.curveCardinal);

function make_fake_amp_data() {
  fake_amp_data = [];
  for (var i = 0; i < data_len; i++) fake_amp_data.push(panel_amp);
}

function string_mid_points(points) {
  //formats points into strings
  //the first and last points are just normal, the others are all the midpoints (between points 1&2, 2&3, etc.)
  let s_list = [String(points[0][0]) + " " + String(points[0][1])];
  for (let i=0; i<points.length-1; i++) {
    s_list.push(String((points[i][0] + points[i+1][0])/2) + " " + String((points[i][1]+points[i+1][1])/2))
  }
  s_list.push(String(points[points.length-1][0]) + " " + String(points[points.length-1][1]))
  return s_list.join(",");
}

const DrawingObj = {
  circle: {
    name: 'circle',
    onclick: function(coordinates) {
        var tmp = the_svg.append('circle')
          .attr('cx', coordinates[0])
          .attr('cy', coordinates[1])
          .attr('r', 5)
          .attr('fill', current_col)
          .attr('opacity', 0.4);
        drawn.push({el: tmp, type: 'circle', atr: 'r', factor: 0.5*afactor/10, r: radial_dist(coordinates[0], coordinates[1])*data_len, x: coordinates[0], y: coordinates[1], scaling_direction:  current_freq_scale});
        if (color_method == 'cycle_auto') current_col = getRandomColor();
      },
    ondrag: function () {
        var x1, y1;
        d3.event.on("drag", function() {
          x1 = d3.event.x;
          y1 = d3.event.y;

          var tmp = the_svg.append('circle')
                .attr('cx', x1)
                .attr('cy', y1)
                .attr('r', 5)
                .attr('fill', current_col)
                .attr('opacity', 0.4);
          drawn.push({el: tmp, type: 'circle', atr: 'r', factor: 0.5*afactor/10, r: radial_dist(x1, y1)*data_len, x: x1, y: y1, scaling_direction: current_freq_scale});
        });
      },
    animate: function(rec, fake_amp=false) {
      let amp = get_amplitude(rec.scaling_direction, rec.factor, rec.x, rec.y, rec.r, fake_amp);
      if (amp < 0) amp = 0;
      rec.el.attr(rec.atr, amp);
    }
  },
  star: {
    onclick: null,
    name: 'star',
    make_one: function() {
      let cx0 = (Math.random()*0.4)*(Math.floor(Math.random()/0.5)-0.5)
      let cy0 = (Math.random()*0.4)*(Math.floor(Math.random()/0.5)-0.5)
      var tmp = the_svg.append('circle')
        .attr('cx', (cx0+1)*(w/2))
        .attr('cy', (cy0+1)*(h/2))
        .attr('r', 2)
        .attr('fill', current_col)
        .attr('class', 'star')
        .attr('opacity', 1);
      drawn.push({el: tmp, type: 'star', atr: 'r', factor: 0.5*afactor/10, r: radial_dist((cx0+1)*(w/2), (cy0+1)*(h/2))*data_len, x0: cx0, y0: cy0, t0: (pts_sound._ctx.currentTime-start_time), scaling_direction:  current_freq_scale, exists: true});
      if (color_method == 'cycle_auto') current_col = getRandomColor();
    },
    animate: function(rec, fake_amp=false) {
      if (rec.exists) {
        let amp = get_amplitude(rec.scaling_direction, rec.factor, rec.x, rec.y, rec.r, fake_amp)/3;
        if (amp < 1) amp = 1;
        if ((Math.abs(rec.x0*amp*(ac-rec.ac0)/100)>(w/2)) || (Math.abs(rec.y0*amp*(ac-rec.ac0)/100)>(h/2))) {
          rec.el.node.remove();
          rec.exists = false;
        } else {
          let t = ((pts_sound._ctx.currentTime-start_time) - rec.t0)/10;
          rec.el.attr("cx", (rec.x0*amp*(1+t)+1)*(w/2));
          rec.el.attr("cy", (rec.y0*amp*(1+t)+1)*(h/2));
        }
      }
    }
  },
  squirrel: {
    onclick: null,
    name: 'squirrel',
    make_one: function() {
      let cx0 = Math.random()
      let cy0 = Math.random()
      var tmp = the_svg.append('image')
        .attr('href', 'squirrel.png')
        .attr('width', w/5)
        .attr('x', cx0*w-w/10)
        .attr('y', cy0*h-h/10)
      drawn.push({el: tmp, type: 'squirrel', x: cx0, y: cy0, x_dir: (Math.floor(Math.random()/0.5)-0.5)*2, y_dir: (Math.floor(Math.random()/0.5)-0.5)*2, factor: 0.5*afactor/10, r: 10, scaling_direction: 'radial'});
    },
    animate: function(rec, fake_amp=false) {
      let amp = get_amplitude(rec.scaling_direction, rec.factor, rec.x, rec.y, rec.r, fake_amp)/10;
      if (amp < 0) amp = 0;
      rec.x = rec.x+amp*rec.x_dir/100;
      rec.y = rec.y+amp*rec.y_dir/100;
      if (rec.x>0.9) rec.x_dir=-1;
      if (rec.x<0.1) rec.x_dir=1;
      if (rec.y>0.9) rec.y_dir=-1;
      if (rec.y<0.1) rec.y_dir=1;
      rec.el.attr('x', rec.x*w-w/10);
      rec.el.attr('y', rec.y*h-h/10);
    }
  },
  dog: {
    onclick: null,
    name: 'dog',
    make_one: function() {
      let cx0 = Math.random()
      let cy0 = Math.random()
      var tmp = the_svg.append('image')
        .attr('href', 'dog.png')
        .attr('width', w/5)
        .attr('x', cx0*w-w/10)
        .attr('y', cy0*h-h/10)
      drawn.push({el: tmp, type: 'squirrel', x: cx0, y: cy0, x_dir: (Math.floor(Math.random()/0.5)-0.5)*2, y_dir: (Math.floor(Math.random()/0.5)-0.5)*2, factor: 0.5*afactor/10, r: 10, scaling_direction: 'radial'});
    },
    animate: function(rec, fake_amp=false) {
      let amp = get_amplitude(rec.scaling_direction, rec.factor, rec.x, rec.y, rec.r, fake_amp)/10;
      if (amp < 0) amp = 0;
      rec.x = rec.x+amp*rec.x_dir/100;
      rec.y = rec.y+amp*rec.y_dir/100;
      if (rec.x>0.9) rec.x_dir=-1;
      if (rec.x<0.1) rec.x_dir=1;
      if (rec.y>0.9) rec.y_dir=-1;
      if (rec.y<0.1) rec.y_dir=1;
      rec.el.attr('x', rec.x*w-w/10);
      rec.el.attr('y', rec.y*h-h/10);
    }
  },
  text: {
    onclick: null,
    name: 'text',
    make_one: function(text, fontsize_base, font_offset, rotate_step, text_y) {
      let cx0 = 0.5;
      let cy0 = text_y;
      var tmp = the_svg.append('text')
        .html(text)
        .attr('x', cx0*w+w*font_offset)
        .attr('y', cy0*h-h/10)
        .style('font-size', fontsize_base*w/50)
        .style('font-family', fonts[Math.floor(Math.random()*fonts.length)])
        .style('fill', font_colors[Math.floor(Math.random()*font_colors.length)])
        .style('text-anchor', 'middle')
      drawn.push({el: tmp, type: 'text', x: cx0, y: cy0, x_dir: (Math.floor(Math.random()/0.5)-0.5), y_dir: (Math.floor(Math.random()/0.5)-0.5), factor: 0.5*afactor/10, r: 30, scaling_direction: 'radial', rotate: 0, fsb: fontsize_base, rs: rotate_step});
    },
    animate: function(rec, fake_amp=false) {
      let amp = get_amplitude(rec.scaling_direction, rec.factor, rec.x, rec.y, rec.r, fake_amp)/10;
      if (amp < 0) amp = 0;
      rec.el.style('font-size', (1+amp/3)*rec.fsb*w/50)
      rec.rotate += rec.rs;
      rec.el.attr('transform', "rotate(" + String(rec.rotate) + "," + String(w/2) + "," + String(h/2) + ")")
    }
  },
  wavy: {
    name: 'wavy',
    onclick: null,
    ondrag: function() {
        var d = d3.event.subject;
        var active = the_svg.append("path").datum(d);
        var x0 = d3.event.x;
        var y0 = d3.event.y;
        var slopes = []
        var r_dists = [];
        var spots = [String(x0/w)+','+String(y0/h)];
        active
          .attr('stroke', current_col)
          .style('fill', 'none')
          .attr('stroke-width', function() { return 2; })
          .attr('base_slopes', 'not_yet');
        var x1, y1;
        d3.event.on("drag", function() {
          x1 = d3.event.x;
          y1 = d3.event.y,
          dx = x1 - x0,
          dy = y1 - y0;
          if (dx * dx + dy * dy > 200) {
            d.push([x0 = x1, y0 = y1]);
            spots.push(String(x1/w)+','+String(y1/h));
            if (dx == 0) {
              slopes.push("100");
            } else if (dy == 0) {
              slopes.push("0.01");
            } else {
              slopes.push(String(dy/dx));
            }
            r_dists.push(String(radial_dist(x1, y1)*data_len));
            active.attr("base_path", function() { return string_mid_points(d); });
            active.attr("base_slopes", function() { return slopes.join(' '); });
            active.attr("base_rdists", function() { return r_dists.join(' '); });
            active.attr("base_spots", function() { return spots.join(' '); });
          } else {
            d[d.length - 1] = [x1, y1];
          }
          if (not_playing) active.attr("d", line);
        });
        drawn.push({el: active, type: 'wavy', atr: 'wavy', factor: afactor/10, scaling_direction:  current_freq_scale});
    },
    make_from_rec: function(base_spots_str) {
      var active = the_svg.append("path");
      var slopes = []
      var r_dists = [];
      active
        .attr('stroke', current_col)
        .style('fill', 'none')
        .attr('stroke-width', 5)
        .attr('base_slopes', 'not_yet');
      var x0 = parseFloat(base_spots_str.split(" ")[0].split(",")[0]*w);
      var y0 = parseFloat(base_spots_str.split(" ")[0].split(",")[1]*h);
      var d = [[x0, y0]];
      for (let i of base_spots_str.split(" ").slice(1,base_spots_str.split(" ").length)) {
        x1 = parseFloat(i.split(",")[0]*w);
        y1 = parseFloat(i.split(",")[1]*h);
        dx = x1 - x0,
        dy = y1 - y0;
        if (dx * dx + dy * dy > 100) {
          d.push([x0 = x1, y0 = y1]);
          if (dx == 0) {
            slopes.push("100");
          } else if (dy == 0) {
            slopes.push("0.01");
          } else {
            slopes.push(String(dy/dx));
          }
          r_dists.push(String(radial_dist(x1, y1)*data_len));
          active.attr("base_path", function() { return string_mid_points(d); });
          active.attr("base_slopes", function() { return slopes.join(' '); });
          active.attr("base_rdists", function() { return r_dists.join(' '); });
          active.attr("base_spots", base_spots_str);
        } else {
          d[d.length - 1] = [x1, y1];
        }
      }
      drawn.push({el: active, type: 'wavy', atr: 'wavy', factor: afactor/10, scaling_direction:  current_freq_scale});
  },
    animate: function(rec, fake_amp=false) {
      let slopes = rec.el.attr('base_slopes').split(" ");
      if (slopes[0] != 'not_yet') {
        let rdists = rec.el.attr('base_rdists').split(" ");
        let points = rec.el.attr('base_path').split(",");
        let new_points = [points[0].split(" ")];
        for (let j=0; j<slopes.length; j++) {
          let dir = ((j % 2) - 0.5) * 2; //alternating directions
          let rd = parseFloat(rdists[j]);
          let s = parseFloat(slopes[j]);
          let coords = points[j+1].split(" ");
          let x = parseFloat(coords[0]);
          let y = parseFloat(coords[1]);
          let amp = get_amplitude(rec.scaling_direction, rec.factor, x, y, rd, fake_amp)/4;
          if (amp < 0) amp = 0;
          new_points.push([x + dir*s*amp/Math.sqrt(1 + s*s), y - dir*amp/Math.sqrt(1 + s*s)]);
        }
        new_points.push(points[points.length-1].split(" "));
        rec.el.attr("d", milo_line(new_points));
      }
    }
  },

  zipper: {
    name: 'zipper',
    onclick: null,
    ondrag: function () {
        var d = d3.event.subject;
        var active = the_svg.append("path").datum(d);
        var x0 = d3.event.x;
        var y0 = d3.event.y;
        active
          .attr('stroke', current_col)
          .attr('fill', current_col)
          .attr('stroke-width', function() { return 2; })
          .attr('base_slope', 'not_yet');
        var x1, y1;
        d3.event.on("drag", function() {
          x1 = d3.event.x;
          y1 = d3.event.y,
          dx = x1 - x0,
          dy = y1 - y0;
          if (dx * dx + dy * dy > 200) {
            d[d.length - 1] = [x1, y1];
            if (dx == 0) {
              active.attr("base_slope", "100");
            } else if (dy == 0) {
              active.attr("base_slope", "0.01");
            } else {
              active.attr("base_slope", function() { return String(dy/dx); });
            }
            active.attr("base_path", function() { return string_mid_points(d); });
            active.attr("base_rdist", function() { return String(radial_dist((x1+x0)/2, (y1+y0)/2)*data_len); });
            active.attr("base_dx", function() { return String(dx); });
            active.attr("base_dy", function() { return String(dy); });
          }
          if (not_playing) active.attr("d", straight_line);
        });
        drawn.push({el: active, type: 'zipper', atr: 'zipper', factor: afactor/10, scaling_direction: current_freq_scale});
      },
    animate: function(rec, fake_amp=false) {
      let slope = rec.el.attr('base_slope');
      if (slope != 'not_yet') {
        let s = parseFloat(slope);
        let rd = parseFloat(rec.el.attr('base_rdist'));
        let bezier_x = parseFloat(rec.el.attr('base_dx'))/4;
        let bezier_y = parseFloat(rec.el.attr('base_dy'))/4;
        let points = rec.el.attr('base_path').split(",");
        let path = 'M ' + points[0];
        let coords_start = points[0].split(" "); //start
        let coords_mid = points[1].split(" "); //midpoint
        let coords_end = points[2].split(" "); //start
        let x = parseFloat(coords_mid[0]);
        let y = parseFloat(coords_mid[1]);
        let amp = get_amplitude(rec.scaling_direction, rec.factor, x, y, rd, fake_amp);
        if (amp < 0) amp = 0;
        apex1 = [x + s*amp/Math.sqrt(1 + s*s), y - amp/Math.sqrt(1 + s*s)];
        apex2 = [x - s*amp/Math.sqrt(1 + s*s), y + amp/Math.sqrt(1 + s*s)];
        path += ' C ' + String(parseFloat(coords_start[0])+bezier_x) + " " + String(parseFloat(coords_start[1])+bezier_y) + " " 
        path += String(apex1[0]-bezier_x) + " " + String(apex1[1]-bezier_y) + " ";  
        path += String(apex1[0]) + " " + String(apex1[1]);
        path += ' C ' + String(apex1[0]+bezier_x) + " " + String(apex1[1]+bezier_y) + " " 
        path += String(parseFloat(coords_end[0])-bezier_x) + " " + String(parseFloat(coords_end[1])-bezier_y) + " " + points[2];  
        path += ' C ' + String(parseFloat(coords_end[0])-bezier_x) + " " + String(parseFloat(coords_end[1])-bezier_y) + " " 
        path += String(apex2[0]+bezier_x) + " " + String(apex2[1]+bezier_y) + " ";  
        path += String(apex2[0]) + " " + String(apex2[1]);
        path += ' C ' + String(apex2[0]-bezier_x) + " " + String(apex2[1]-bezier_y) + " " 
        path += String(parseFloat(coords_start[0])+bezier_x) + " " + String(parseFloat(coords_start[1])+bezier_y) + " " + points[0];
        rec.el.attr("d", path + " z");
      }
    }
  }
};

var current_col = getRandomColor();

function radial_dist(x, y) {
  var xr = (w/2 - x)/w;
  var yr = (h/2 - y)/h;
  return Math.sqrt(xr*xr + yr*yr)/corner_dist;
}

function draw_one() {
  DrawingObj[drawing].onclick(d3.mouse(this));
}

function dragended() {
  if (color_method == 'cycle_auto') current_col = getRandomColor();
}

function dragstarted() {
  DrawingObj[drawing].ondrag();
}

function get_amplitude(direction_method, factor, x, y, r, fake_amp) {
  if (freq_scale_global) {
    direction_method = current_freq_scale;
  }
  let use_data = data;
  if (fake_amp) {
    use_data = fake_amp_data;
  }
  var val;
  switch(direction_method) {
    case 'radial':
      val = use_data[Math.floor(r)]*factor
      return (val + val*(data_len-r)*scaling_enhancement)*global_amp_adjuster;
    case 'reverse_radial':
      val = use_data[data_len-Math.floor(r)]*factor
      return (val + val*r*scaling_enhancement)*global_amp_adjuster;
    case 'x_to_right':
      val = use_data[Math.floor((x/w)*data_len)]*factor
      return (val +  val*(data_len - Math.floor((x/w)*data_len))*scaling_enhancement)*global_amp_adjuster;
    case 'x_to_left':
      val = use_data[data_len - Math.floor((x/w)*data_len)]*factor
      return (val + val*(x/w)*data_len*scaling_enhancement)*global_amp_adjuster;
    case 'y_to_bottom':
      val = use_data[Math.floor((y/h)*data_len)]*factor
      return (val + val*(data_len - Math.floor((y/h)*data_len))*scaling_enhancement)*global_amp_adjuster;
    case 'y_to_top':
      val = use_data[data_len - Math.floor((y/h)*data_len)]*factor
      return (val + val*(y/h)*data_len*scaling_enhancement)*global_amp_adjuster;
    case 'average':
      let s = 0
      for (let i=0; i<data_len; i++) {
        s += use_data[i];
      }
      return s*factor/data_len;
  }
}

function animatron () {
  ac += 1;
  //if (ac % (Math.floor(ac/10)+1) == 0) {
  if (d3.selectAll(".star")["_groups"][0].length < 1000) {
    DrawingObj['star'].make_one();
  }
  if (((pts_sound._ctx.currentTime-start_time) > 15.3) && not_dropped) {
    document.getElementById("pigeon1").style.display="block";
    document.getElementById("pigeon2").style.display="block";
    not_dropped = false;
  }
  if (((pts_sound._ctx.currentTime-start_time) > wavy_time) && not_dropped_wavy) {
    for (let el of existing_lines) {
      DrawingObj['wavy'].make_from_rec(el);
      current_col = getRandomColor();
    }
    not_dropped_wavy=false;
  }
  if ((pts_sound._ctx.currentTime-start_time) > squirrel_time) {
    squirrel_time += 64;
    DrawingObj['squirrel'].make_one();
  }
  if ((pts_sound._ctx.currentTime-start_time) > dog_time) {
    dog_time += 128;
    DrawingObj['dog'].make_one();
  }
  for (let i=0; i<font_drop_times.length; i++) {
    if (((pts_sound._ctx.currentTime-start_time)>font_drop_times[i]) && font_drops[i]) {
      font_drops[i] = false;
      DrawingObj['text'].make_one(text_drops[i], text_sizes[i], text_offsets[i], rotate_steps[i], text_ypos[i]);
    }
  }
  data = pts_sound.freqDomain(); 
  for (var i = 0; i < drawn.length; i++) {
    DrawingObj[drawn[i].type].animate(drawn[i])
  }
}
Pts.quickStart( "#pt", "#eae6ef" );
var bufferLoaded = false;
Sound.loadAsBuffer("PartyRockAnthem.mp3" ).then( s => {
  pts_sound = s;
  bufferLoaded = true;
  pts_sound.analyze(2048); // recreate buffer again
  data = new Uint8Array(1024);
  data_len = data.length;
  document.getElementById("HOLDING").style.display="none";
  document.getElementById("GO_BUTTON").style.display="flex";
}).catch( e => console.error(e) );

function LOAD_IT(){

  the_svg = d3.select('#svg_div')
    .append('svg')
      .attr('width', w)
      .attr('height', h)
      .attr('id', 'svg_element')
      //.on('mousedown', mousedown) //OLD - apparently mousemove doesn't work if we're recording the drag 
      //.on('mouseup', mouseup);

  document.getElementById("svg_element").style.display="none";

  var dummy_svg = d3.select('#svg_div')
    .append('svg')
      .attr('width', w)
      .attr('height', h)
      .attr('id', 'dummy_svg_element')
      .on('click', draw_one);

  document.getElementById("dummy_svg_element").style.display="none";

  drag_func = d3.drag()
    .container(function() { return this })
    .subject(function() { var p = [d3.event.x, d3.event.y]; return [p, p]; })
    .on("start", dragstarted)
    .on("end", dragended);

  dummy_svg.call(drag_func);

}

function DO_IT() {
    document.getElementById("GO_BUTTON").style.display="none";
    document.getElementById("svg_element").style.display="block";
    document.getElementById("dummy_svg_element").style.display="block";
    pts_sound.start();
    start_time = pts_sound._ctx.currentTime;
    not_playing = false;
    console.log('here');
    intervalhandle = setInterval(function(){animatron()}, 1);
}


function get_paths() {
  let existing_lines = [];
  for (let ob of drawn) {
    if (ob.type=="wavy") {
      existing_lines.push(ob.el.attr("base_spots"));
      
    }
  }
  console.log(existing_lines);
}

