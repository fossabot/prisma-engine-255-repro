# Reproduction for https://github.com/prisma/prisma-engine/issues/151
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FOBITOONDEADO1MZ%2Fprisma-engine-255-repro.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FOBITOONDEADO1MZ%2Fprisma-engine-255-repro?ref=badge_shield)


## Steps

```bash
# 1. Clone Repo

# 2. Install deps
yarn

# 4. Seed data <- here incorrect data can be inserted
# runs prisma/fake-data.ts
yarn seed

# 5. Query the data
# runs prisma/scrip.ts
yarn start
```


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FOBITOONDEADO1MZ%2Fprisma-engine-255-repro.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FOBITOONDEADO1MZ%2Fprisma-engine-255-repro?ref=badge_large)