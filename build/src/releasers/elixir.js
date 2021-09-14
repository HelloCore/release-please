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
exports.Elixir = void 0;
const release_pr_1 = require("../release-pr");
// Generic
const changelog_1 = require("../updaters/changelog");
// mix.exs support
const elixir_mix_exs_1 = require("../updaters/elixir-mix-exs");
class Elixir extends release_pr_1.ReleasePR {
    async buildUpdates(changelogEntry, candidate, packageName) {
        const updates = [];
        updates.push(new changelog_1.Changelog({
            path: this.addPath(this.changelogPath),
            changelogEntry,
            version: candidate.version,
            packageName: packageName.name,
        }));
        updates.push(new elixir_mix_exs_1.ElixirMixExs({
            path: this.addPath('mix.exs'),
            changelogEntry,
            version: candidate.version,
            packageName: packageName.name,
        }));
        return updates;
    }
}
exports.Elixir = Elixir;
//# sourceMappingURL=elixir.js.map