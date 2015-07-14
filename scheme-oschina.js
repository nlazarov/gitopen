/* global module */
module.exports = {
  'base': '{protocol}://{hostname}/{username}/{reponame}',
  'home': '',
  'issues': '/issues',
  'issues/id': '/issues/{issue-id}',
  'issues/new': '/issues/new',
  'issues/new?title': '/issues/new?title={title}',
  'wiki': '/wikis/home',
  'network': '/network',
  'tree': '/tree/{hash}',
  'blob': '/blob/{hash}',
  'commits': '/commits/master',
  'commits-with-branch': '/commits/{branch-name}',
  'milestones': '/milestones',
  'tags': '/tags',
  'releases': '/releases',
  'releases/new': '/releases/new',
  'releases/new-with-tag': '/releases/new?tag={tag}',
  'releases/edit/tag-id': '/releases/edit/{tag}',
  'pulls': '/pulls',
  'pulls/new': '/compare',
  'pulls/new-with-branch': '/compare/{branch-A}...{branch-B}',
};
