import test from 'node:test';
import assert from 'node:assert/strict';
import {sceneProgress,itemMotion} from '../src/scripts/home-scroll-state.js';
test('section progress clamps and handles missing geometry',()=>{
assert.equal(sceneProgress(1200,800,900),0);assert.equal(sceneProgress(-1000,800,900),1);assert.equal(sceneProgress(NaN,800,900),1);
});
test('cards fan symmetrically and finish at rest',()=>{
const left=itemMotion('specialists',0,0,3),right=itemMotion('specialists',0,2,3);assert.equal(left.x,-right.x);assert.equal(left.angle,-right.angle);
for(const kind of ['specialists','foundations','cta'])for(let i=0;i<3;i++){const m=itemMotion(kind,1,i,3);assert.equal(m.x,0);assert.equal(m.y,0);assert.equal(m.angle,0);assert.equal(m.scale,1);assert.equal(m.opacity,1)}
});
test('motion stays finite and text is never hidden',()=>{for(let p=0;p<=1;p+=.01){const m=itemMotion('cta',p,0,1);assert.ok(m.opacity>=.8&&m.opacity<=1);assert.ok(m.scale>=.9&&m.scale<=1);assert.ok(Object.values(m).every(Number.isFinite))}});
