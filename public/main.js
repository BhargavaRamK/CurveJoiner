var line_no = []
var mx1, mx2, my1, my2;
var count = 0;
var p1 = [];
var p2 = [];
var p3 = [];
var p4 = [];


function setup() {
	createCanvas(800,800);
	background(0);
}

function draw() {

}


function midpoint(x1, y1, x2, y2)
{
	var mid = [];
	mid.push((x1 + x2)/2);
	mid.push((y1 + y2)/2);
	return mid;
}

function vectordirection(s1, e1, dist)
{
	var b_pt = [];

	var se1 = s1[0] - e1[0];
	var se2 = s1[1] - e1[1];

	var se_vec = Math.sqrt(Math.pow(se1, 2) + Math.pow(se2, 2))

	var x = e1[0] + ((e1[0] - s1[0])/se_vec*dist) 
	var y = e1[1] + ((e1[1] - s1[1])/se_vec*dist) 
	
	b_pt.push(x);
	b_pt.push(y);

	strokeWeight(10);
	point(x, y)

	strokeWeight(4);

	return b_pt;
}


function curve_creator(p1, p2, p3, p4)
{
	stroke(255);
	strokeWeight(4);
	noFill();
	
	var sp1 = [p1[0], p1[1]];
	var ep1 = [p2[0], p2[1]];
	var ep2 = [p3[0], p3[1]];
	var sp2 = [p4[0], p4[1]];

	console.log(p1, p2, p3, p4)

	point(sp1[0], sp1[1]);
	point(ep1[0], ep1[1]);
	point(ep2[0], ep2[1]);
	point(sp2[0], sp2[1]);

	var mid_point = midpoint(ep1[0], ep1[1], ep2[0], ep2[1])
	point(mid_point[0], mid_point[1]);


	var dist_1 = abs(dist(mid_point[0], mid_point[1], ep1[0], ep1[1]));
	var dist_2 = abs(dist(mid_point[0], mid_point[1], ep2[0], ep2[1]))
	
	var bez_pt1 = vectordirection(sp1, ep1, dist_1);


	var bez_pt2 = vectordirection(sp2, ep2, dist_2);

	bezier(ep1[0], ep1[1], bez_pt1[0], bez_pt1[1], bez_pt2[0], bez_pt2[1], ep2[0], ep2[1]);
	p1 = [];
	p2 = [];
	p3 = [];
	p4 = [];

}

function mousePressed()
{
	if(count == 1)
	{
		stroke(255);
		strokeWeight(4);
		noFill();
		line(mx1, my1, mouseX, mouseY)
		p1.push(mx1);
		p1.push(my1);
		p2.push(mouseX);
		p2.push(mouseY);

	}

	if(count == 3)
	{
		stroke(255);
		strokeWeight(4);
		noFill();
		line(mx1, my1, mouseX, mouseY)
		p3.push(mx1);
		p3.push(my1);
		p4.push(mouseX);
		p4.push(mouseY);

		curve_creator(p1, p2, p3, p4)

	}

	
	count++;

	


}
function mouseReleased()
{
	if(count > 5)
	{
		background(0);
		count = 0;

	}
	mx1 = mouseX;
	my1 = mouseY;
}
