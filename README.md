# Playwright sync smoke test

This repository contains one Chromium test that opens the Google homepage.

## Run locally

```sh
npm ci
npx playwright install chromium
npm test
```

## Sync into Katalon True

1. Connect this private repository through a GitHub integration with read access.
2. In the Katalon True project, open **Settings → Integrations** and add a repository configuration for the root of the `main` branch.
3. Set **Test Framework** to **Playwright** and click **Proceed**.
4. In **Tests → Test Cases**, expand the repository and look for `opens the Google homepage`. The API reports the synced case as `PLAYWRIGHT_TEST_CASE`.

See the [Playwright integration guide](https://docs.katalon.com/katalon-platform/integrations/testing-framework/playwright-integration).
