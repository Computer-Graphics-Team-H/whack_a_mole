/**
 * The variable x represents the absolute progress of the animation
 * in the bounds of start (beginning of the animation) and end (end of animation).
 */
export function easeOutElastic(start, end, value) {
  end -= start;

  const d = 1.0;
  const p = d * 0.3;
  var s;
  var a = 0;

  if (value == 0) return start;

  if ((value /= d) == 1) return start + end;

  if (a == 0.0 || a < Math.abs(end)) {
    a = end;
    s = p * 0.25;
  } else {
    s = (p / (2 * Math.PI)) * Math.asin(end / a);
  }

  return (
    a *
      Math.pow(2, -10 * value) *
      Math.sin(((value * d - s) * (2 * Math.PI)) / p) +
    end +
    start
  );
}

export function easeOutElastic2(x) {
  const c4 = (2 * Math.PI) / 3;

  return x === 0
    ? 0
    : x === 1
    ? 1
    : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
}

/*
Returns a random point of a sphere, evenly distributed over the sphere.
The sphere is centered at (x0,y0,z0) with the passed in radius.
The returned point is returned as a three element array [x,y,z]. 
*/
export function randomSpherePoint(x0, y0, z0, radius) {
  var u = Math.random();
  var v = Math.random();
  var theta = 2 * Math.PI * u;
  var phi = Math.acos(2 * v - 1);
  var x = x0 + radius * Math.sin(phi) * Math.cos(theta);
  var y = y0 + radius * Math.sin(phi) * Math.sin(theta);
  var z = z0 + radius * Math.cos(phi);
  return [x, y, z];
}
