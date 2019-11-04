# Reproduction for https://github.com/prisma/prisma-engine/issues/151

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
