const readline = require("readline");
function buildExpressionAnyParen(nums, target) {
  const memo = new Map();
  const key = (i, j) => `${i},${j}`;

  function solve(i, j) {
    const k = key(i, j);
    if (memo.has(k)) return memo.get(k);

    const res = new Map();
    if (i === j) {
      res.set(nums[i], String(nums[i]));
      memo.set(k, res);
      return res;
    }

    for (let mid = i; mid < j; mid++) {
      const L = solve(i, mid);
      const R = solve(mid + 1, j);
      for (const [lv, le] of L) {
        for (const [rv, re] of R) {
          const v1 = lv + rv; if (!res.has(v1)) res.set(v1, `(${le}+${re})`);
          const v2 = lv - rv; if (!res.has(v2)) res.set(v2, `(${le}-${re})`);
          const v3 = lv * rv; if (!res.has(v3)) res.set(v3, `(${le}*${re})`);
        }
      }
    }
    memo.set(k, res);
    return res;
  }

  const table = solve(0, nums.length - 1);
  return table.get(target) || null;
}

function* permuteUnique(arr) {
  const nums = arr.slice().sort((a, b) => a - b);
  const used = Array(nums.length).fill(false);
  const cur = [];

  function* backtrack() {
    if (cur.length === nums.length) { yield cur.slice(); return; }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
      used[i] = true;
      cur.push(nums[i]);
      yield* backtrack();
      cur.pop();
      used[i] = false;
    }
  }
  yield* backtrack();
}

function buildExpressionWithPermute(nums, target) {
  for (const perm of permuteUnique(nums)) {
    const expr = buildExpressionAnyParen(perm, target);
    if (expr) return { expr, order: perm };
  }
  return null;
}

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Masukkan angka (pisahkan dengan koma): ", (numsLine) => {
  rl.question("Masukkan target: ", (targetLine) => {
    const nums = numsLine.split(",").map(s => Number(s.trim())).filter(x => !Number.isNaN(x));
    const target = Number(targetLine.trim());
    if (!nums.length || Number.isNaN(target)) {
      console.log("Input tidak valid");
      rl.close();
      return;
    }

    const res = buildExpressionWithPermute(nums, target);
    console.log("\nOutput:");
    if (res) {
      console.log(res.expr);
    } else {
      console.log("Tidak ada ekspresi yang memenuhi.");
    }
    rl.close();
  });
});
