# 🐙 [api.github.ajla.ng](https://api.github.ajla.ng]) [![CircleCI](https://circleci.com/gh/aaronjameslang/api.github.ajla.ng.svg?style=svg)](https://circleci.com/gh/aaronjameslang/api.github.ajla.ng)

## Usage

API closely models the [GitHub API](https://developer.github.com/v3/)

## Development

See the code on [GitHub](https://github.com/aaronjameslang/api.github.ajla.ng)

```shell
make venv && source venv/bin/activate
make test
aws configure # auth if required
make deploy
```

## Design Decisions

- Explicitly list allowed endpoints
  + It is technically possible to simply proxy all GET requests onto the upstream API. The benefit of this would be allowing clients access to all current endpoints and those implemented in the future, facilitating use cases not predicted by this API. However it would also bypass any human validation that such an endpoint is appropriate to expose. Listing all endpoints explicitly also allows me to familiarise myself with swagger documentation and code generation, and allows the production of the client sdk.

## Roadmap

- Map urls in response bodies to `api.github.ajla.ng`
- Generate and publish swagger docs
- Generate and publish swagger client sdk
- Allow other users to authenticate - requires code
