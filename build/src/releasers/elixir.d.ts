import { ReleasePR, ReleaseCandidate, PackageName } from '../release-pr';
import { Update } from '../updaters/update';
export declare class Elixir extends ReleasePR {
    protected buildUpdates(changelogEntry: string, candidate: ReleaseCandidate, packageName: PackageName): Promise<Update[]>;
}
