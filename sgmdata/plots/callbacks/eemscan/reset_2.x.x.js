const d2 = xrf.data;
const d3 = xas.data;
const rect = sel.data;
const peak = fluo.data;

rect['x'] = [];
rect['y'] = [];
rect['width'] = [];
rect['height'] = [];
d2['proj_x'] = d2['proj_x_tot'];
d2['emission'] = d2['emission_tot'];
d3['en'] = d3['en_tot'];
d3['proj_y'] = d3['proj_y_tot'];
peak['x'] = [];
peak['y'] = [];
peak['width'] = [];
peak['height'] = [];

fluo.change.emit();
sel.change.emit();
xas.change.emit();
xrf.change.emit();
det.active = [0];
alter.active = 2;