import { Photon } from '@generated/photon'
import { name } from 'faker'

main()

async function main() {
  const photon = new Photon()
  const author = await photon.users.create({
    data: {
      name: name.firstName(),
      blog: {},
      rating: 0.5,
      role: 'AUTHOR',
      posts: {
        create: [
          {
            status: 'DRAFT',
            title: 'A drafty Post title',
            tags: {
              set: ['Tag1'],
            },
          },
          {
            status: 'PUBLISHED',
            title: 'A production Post title',
          },
        ],
      },
    },
  })
  const blog = await photon.blogs.create({
    data: {
      name: name.title(),
      authors: {
        connect: {
          id: author.id,
        },
      },
    },
  })
  console.log('added author:\n', author)
  console.log('added blog:\n', blog)
  await photon.disconnect()
}
