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
const samples_package_json_1 = require("../../src/updaters/samples-package-json");
const fixturesPath = './test/updaters/fixtures';
mocha_1.describe('SamplesPackageJson', () => {
    mocha_1.describe('updateContent', () => {
        mocha_1.it('updates package version in dependencies', async () => {
            const oldContent = fs_1.readFileSync(path_1.resolve(fixturesPath, './samples-package.json'), 'utf8');
            const samplesPackageJson = new samples_package_json_1.SamplesPackageJson({
                path: 'samples/package.json',
                changelogEntry: '',
                version: '14.0.0',
                packageName: '@google-cloud/firestore',
            });
            const newContent = samplesPackageJson.updateContent(oldContent);
            snapshot(newContent.replace(/\r\n/g, '\n'));
        });
        mocha_1.it('does not fail when top level package does not exist in dependencies', async () => {
            const oldContent = fs_1.readFileSync(path_1.resolve(fixturesPath, './samples-package-json-no-dep.json'), 'utf8').replace(/\r\n/g, '\n');
            const samplesPackageJson = new samples_package_json_1.SamplesPackageJson({
                path: 'samples/package.json',
                changelogEntry: '',
                version: '14.0.0',
                packageName: '@google-cloud/firestore',
            });
            const newContent = samplesPackageJson.updateContent(oldContent);
            snapshot(newContent.replace(/\r\n/g, '\n'));
        });
    });
});
//# sourceMappingURL=samples-package-json.js.map