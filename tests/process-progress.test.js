import test from 'node:test';
import assert from 'node:assert/strict';
import { processProgress, processState } from '../src/scripts/process-progress.js';

test('progress clamps at both edges and maps midpoint', () => {
  assert.equal(processProgress(100, 2400, 800), 0);
  assert.equal(processProgress(-800, 2400, 800), 0.5);
  assert.equal(processProgress(-2000, 2400, 800), 1);
});
test('short or invalid geometry never produces NaN or infinity', () => {
  for (const args of [[0,800,800], [0,500,800], [NaN,2400,800], [0,Infinity,800]]) assert.equal(processProgress(...args), 0);
});
test('stages cover all scroll positions including the last pixel', () => {
  assert.equal(processState(0).stage, 0);
  assert.equal(processState(0.4).stage, 1);
  assert.equal(processState(0.8).stage, 2);
  assert.equal(processState(1).stage, 2);
  assert.equal(processState(NaN).stage, 0);
});
test('assembly is bounded and monotonic', () => {
  let last = 0;
  for (let i = 0; i <= 100; i++) {
    const state = processState(i / 100);
    assert.ok(state.assembly >= last && state.assembly <= 1);
    last = state.assembly;
  }
  assert.equal(processState(1).assembly, 1);
});
