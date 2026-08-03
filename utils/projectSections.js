// Single source of truth for which optional detail-page sections a project renders.
// components/Project.jsx (what actually renders) and pages/projects/[url].js
// (the in-page nav list) MUST both derive from these same predicates — see
// design decision 12: a nav entry whose DOM id doesn't exist makes
// DynamicIndex's handleIndexClick dereference null.
export function hasTechnicalDecisions (project) {
  return Boolean(project?.technicalDecisions?.length)
}

export function hasChallenges (project) {
  return Boolean(project?.challenges?.length)
}

export function hasStatus (project) {
  return Boolean(project?.status)
}

export function getProjectSectionIds (project) {
  return [
    'introduction',
    'technologies',
    'process',
    ...(hasTechnicalDecisions(project) ? ['technicalDecisions'] : []),
    ...(hasChallenges(project) ? ['challenges'] : []),
    ...(hasStatus(project) ? ['status'] : []),
    'conclusion'
  ]
}
