uniform float uTime;
uniform vec2 pixels;
uniform float uDisplacement;
uniform float uDistortion;
uniform float uRep;
uniform float uSpeed;
uniform vec3 uPriColor;
uniform vec3 uSecColor;
uniform vec3 uTerColor;
uniform vec3 uBgColor;


varying vec2 vUv;
varying vec3 vPosition;
varying float vNoise;



float PI = 3.141592653589793238;

// Line
float line(vec2 uv, float offset){
	// return abs(sin(uv.x * 5.0));

	return smoothstep(
		0.0, 0.5 + offset * 0.5,
		0.5 * abs((sin(uv.x * 30.0) + offset * 2.0))
	);
}

// Matrix
mat2 rotate2D(float angle){
	return mat2(
		cos(angle), -sin(angle),
		sin(angle), cos(angle)
	);
}

void main()	{
	vec3 finalNoise =  vec3(clamp(0., 1., 2. * sin(vNoise)));
	vec2 newUv = rotate2D(finalNoise.x) * vPosition.xy * 0.1;
	float line1 = line(newUv, 0.8);
	float line2 = line(newUv, 0.5);
	// float line3 = line(newUv, 0.3);

	vec3 mixedColor = mix(uPriColor, uSecColor, line1);
	mixedColor = mix(mixedColor,uTerColor,line2);
	// mixedColor = mix(mixedColor,uBgColor,line3);
	gl_FragColor = vec4(mixedColor,1.);
}