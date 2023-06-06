const config = {
    branches: ['main'],
    plugins: [
        ['@semantic-release/commit-analyzer', {
            preset: 'conventional-changelog',
        }],
        ['@semantic-release/release-notes-generator', {
            preset: 'conventional-changelog',
        }],
        ["@semantic-release/git", {
            "assets": ["dist/*.js", "dist/*.js.map", "changelog.md"],
            "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
        }],
        '@semantic-release/github'
    ]
};

module.exports = config;
