"use strict";
// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const snapshot = require("snap-shot-it");
const mocha_1 = require("mocha");
const setup_py_1 = require("../../src/updaters/python/setup-py");
const fixturesPath = './test/updaters/fixtures';
mocha_1.describe('setup.py', () => {
    mocha_1.describe('updateContent', () => {
        mocha_1.it('updates version in setup.py', async () => {
            const oldContent = fs_1.readFileSync(path_1.resolve(fixturesPath, './setup.py'), 'utf8').replace(/\r\n/g, '\n');
            const version = new setup_py_1.SetupPy({
                path: 'setup.py',
                changelogEntry: '',
                version: '0.6.0',
                packageName: '',
            });
            const newContent = version.updateContent(oldContent);
            snapshot(newContent);
        });
    });
});
//# sourceMappingURL=setup-py.js.map