const config = {
    branches: ['main'],
    plugins: [
        ['@semantic-release/commit-analyzer', {
            preset: 'conventionalcommits',
            parserOpts: {
                noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
            },
            releaseRules: [
                { type: 'BREAKING_CHANGE', release: 'major' },
                { type: 'BREAKING_CHANGES', release: 'major' },
            ],
        }],
        '@semantic-release/release-notes-generator',
        ["@semantic-release/git", {
            "assets": ["dist/*.js", "dist/*.js.map", "changelog.md"],
            "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
        }],
        '@semantic-release/github'
    ]
};

module.exports = config;
