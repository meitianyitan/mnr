#!/usr/bin/env node

import { execSync } from 'child_process'
import * as path from 'path'
import * as commander from 'commander'
import { getProjectConfig } from './utils/webpack-runtime-helper'
import { findPath } from './utils/package-finder'

import init from './commanders/init'

const cliPackageJson = require('../package.json')
const projectCwd = process.cwd()
const cliCwd = path.join(__dirname, '..')

const webpackPath = findPath('webpack')
const concurrentlyPath = findPath('concurrently')
const avaPath = findPath('ava')

const webpackDevServerPath = path.join(__dirname, 'webpack-dev-server.js')
const webpackDllPath = path.join(__dirname, 'webpack.dll.config.js')
const serverPath = path.join(__dirname, 'server.js')
const webpackProdConfigPath = path.join(__dirname, 'webpack.prod.config.js')

commander.version(cliPackageJson.version)
