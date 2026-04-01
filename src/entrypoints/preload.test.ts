import { expect, test } from 'bun:test';
import { fileURLToPath } from 'node:url';

test('preload exposes the source version for --version', () => {
  const repoRoot = fileURLToPath(new URL('../../', import.meta.url));
  const result = Bun.spawnSync({
    cmd: [
      process.execPath,
      'run',
      '-r',
      './src/entrypoints/preload.js',
      './src/entrypoints/cli.tsx',
      '--version',
    ],
    cwd: repoRoot,
    stdout: 'pipe',
    stderr: 'pipe',
    env: process.env,
  });

  expect(result.exitCode).toBe(0);
  expect(Buffer.from(result.stderr).toString()).toBe('');
  expect(Buffer.from(result.stdout).toString().trim()).toBe('2.1.88 (Claude Code)');
});
