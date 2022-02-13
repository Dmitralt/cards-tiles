// this file needed to populate process.env before other imports executes
// https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

import { createRequire } from 'module'

const require = createRequire(import.meta.url)

try {
  require('dotenv/config')
} catch {} // ignore errors in environment without dotenv package
