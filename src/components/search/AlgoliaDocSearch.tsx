import { DocSearch } from '@docsearch/react'
import { laravelCompanySearchClient } from './localSearchClient'

import '@docsearch/css'
import './AlgoliaDocSearch.css'

// The popup keeps the DocSearch UI (and its theme overrides), but searches
// laravelcompany's own corpus via the /api/search Pages Function instead of
// a third-party Algolia index. appId/apiKey are placeholders: the Algolia
// client is constructed but replaced by our client before any query.
function AlgoliaDocSearch() {
    return (
        <DocSearch
            appId="laravelcompany"
            indexName="laravelcompany-blog"
            apiKey="local-search"
            transformSearchClient={() => laravelCompanySearchClient as never}
        />
    )
}

export default AlgoliaDocSearch
