"use strict";
// Copyright 2021 Google LLC
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
exports.Dart = void 0;
const release_pr_1 = require("../release-pr");
// Generic
const changelog_1 = require("../updaters/changelog");
const yaml = require("js-yaml");
// pubspec
const pubspec_yaml_1 = require("../updaters/pubspec-yaml");
class Dart extends release_pr_1.ReleasePR {
    async buildUpdates(changelogEntry, candidate, packageName) {
        const updates = [];
        updates.push(new changelog_1.Changelog({
            path: this.addPath(this.changelogPath),
            changelogEntry,
            version: candidate.version,
            packageName: packageName.name,
        }));
        updates.push(new pubspec_yaml_1.PubspecYaml({
            path: this.addPath('pubspec.yaml'),
            changelogEntry,
            version: candidate.version,
            packageName: packageName.name,
        }));
        return updates;
    }
    async getPackageName() {
        var _a;
        if (this._packageName === undefined) {
            const pubspecYmlContents = await this.getPubspecYmlContents();
            const pubspec = yaml.load(pubspecYmlContents.parsedContent, { json: true });
            if (typeof pubspec === 'object') {
                this.packageName = this._packageName = (_a = pubspec.name) !== null && _a !== void 0 ? _a : this.packageName;
            }
            else {
                this._packageName = this.packageName;
            }
        }
        return {
            name: this.packageName,
            getComponent: () => this.packageName,
        };
    }
    async getPubspecYmlContents() {
        if (!this.pubspecYmlContents) {
            this.pubspecYmlContents = await this.gh.getFileContents(this.addPath('pubspec.yaml'));
        }
        return this.pubspecYmlContents;
    }
}
exports.Dart = Dart;
//# sourceMappingURL=dart.js.map