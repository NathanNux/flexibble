import { config, graph, auth } from '@grafbase/sdk';

const g = graph.Standalone()

const User = g.type('User', {
  name: g.string(),
  email: g.string(),
  avatarUrl: g.string(),
  description: g.string().optional(),
  githubUrl: g.string().optional(),
  linkedinUrl: g.string().optional(),
  projects: g.ref('Project').list().optional(),
})

const Project = g.type('Project', {
  title: g.string(),
  description: g.string(),
  image: g.string(),
  liveSiteUrl: g.string(),
  githubUrl: g.string(),
  category: g.string(),
  createdBy: g.ref('User'),
})

const jwt = auth.JWT({
  issuer: 'grafbase',
  secret:  g.env('NEXTAUTH_SECRET')
})

export default config({
  graph: g,
  auth: {
    providers: [jwt],
    rules: (rules) => rules.public().read().create().delete().update()
  },
})

