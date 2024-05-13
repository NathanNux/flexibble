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

// Path: grafbase.config.ts


// import { graph , config, auth } from '@grafbase/sdk';

// const g = graph.Standalone()

// // @ts-ignore
// const User = g.model('User', {
//   name: g.string().length({ min: 2, max: 100 }),
//   email: g.string().unique(),
//   avatarUrl: g.url(),
//   description: g.string().length({ min: 2, max: 1000 }).optional(),
//   githubUrl: g.url().optional(),
//   linkedinUrl: g.url().optional(), 
//   projects: g.relation(() => Project).list().optional(),
// }).auth((rules) => {
//   rules.public().read()
// })

// // @ts-ignore
// const Project = g.model('Project', {
//   title: g.string().length({ min: 3 }),
//   description: g.string(), 
//   image: g.url(),
//   liveSiteUrl: g.url(), 
//   githubUrl: g.url(), 
//   category: g.string().search(),
//   createdBy: g.relation(() => User),
// }).auth((rules) => {
//   rules.public().read()
//   rules.private().create().delete().update()
// })

// const jwt = auth.JWT({
//   issuer: 'grafbase',
//   secret:  g.env('NEXTAUTH_SECRET')
// })

// export default config({
//   schema: g,
//   auth: {
//     providers: [jwt],
//     rules: (rules) => rules.private()
//   },
// })

