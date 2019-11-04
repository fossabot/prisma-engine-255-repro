import { Photon } from '@generated/photon'

async function main() {
  const photon = new Photon({
    debug: {
      library: true,
    },
  })
  const x = await photon.posts.findMany({
    select: {
      id: true,
      title: true,
      tags: true,
      blog: true,
      status: true,
      user: true,
    },
    orderBy: {
      id: 'asc',
    },
    first: 100,
  })

  console.log(x)
}

main()
