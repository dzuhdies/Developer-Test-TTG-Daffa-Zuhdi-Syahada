function* permuteUnique(arr) {
  const nums = arr.slice().sort((a,b)=>a-b);
  const used = Array(nums.length).fill(false);
  const cur = [];
  function* backtrack() {
    if (cur.length === nums.length) { yield cur.slice(); return; }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      if (i > 0 && nums[i] === nums[i-1] && !used[i-1]) continue;
      used[i] = true;
      cur.push(nums[i]);
      yield* backtrack();
      cur.pop();
      used[i] = false;
    }
  }
  yield* backtrack();
}

function allExprValues(nums) {
  const n = nums.length;
  const memo = new Map();
  const key = (i,j) => `${i},${j}`;

  function solve(i,j) {
    const k = key(i,j);
    if (memo.has(k)) return memo.get(k);
    const res = new Map();
    if (i === j) {
      const v = nums[i];
      res.set(v, new Set([String(v)]));
      memo.set(k,res);
      return res;
    }
    for (let m = i; m < j; m++) {
      const L = solve(i,m), R = solve(m+1,j);
      for (const [lv, lexprs] of L) {
        for (const [rv, rexprs] of R) {
          for (const le of lexprs) for (const re of rexprs) {
            const v1 = lv + rv;
            res.has(v1) ? res.get(v1).add(`(${le}+${re})`) : res.set(v1, new Set([`(${le}+${re})`]));
            const v2 = lv - rv;
            res.has(v2) ? res.get(v2).add(`(${le}-${re})`) : res.set(v2, new Set([`(${le}-${re})`]));
            const v3 = lv * rv;
            res.has(v3) ? res.get(v3).add(`(${le}*${re})`) : res.set(v3, new Set([`(${le}*${re})`]));
          }
        }
      }
    }
    memo.set(k,res);
    return res;
  }
  return solve(0, n-1);
}

const target = 35;
const base = [1,2,9,8];
let found = null;

for (const perm of permuteUnique(base)) {
  const table = allExprValues(perm);
  if (table.has(target)) {
    found = { perm, exprs: [...table.get(target)].slice(0,5) };
    break;
  }
}

if (found) {
  console.log("ada solusi ");
  console.log("urutan yang dipakai:", found.perm.join(","));
  console.log("contoh ekspresi:");
  for (const e of found.exprs) console.log("  ", e);
} else {
  console.log("tidak ada solusi untuk", base, "→", target);
}
