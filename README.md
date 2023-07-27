
## bearer-rules

bearer-rules is the default rules repository for [Bearer](https://github.com/Bearer/bearer). Here you'll find all the rules that Bearer runs during a scan.

[Bearer Documentation](https://docs.bearer.com) - [Report a Bug](https://github.com/Bearer/bearer-rules/issues/new/choose) - [Discord Community][discord]

[![GitHub Release][release-img]][release]
[![Test][test-img]][test]
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)
[![Discord](https://img.shields.io/discord/1042147477765242973?label=discord)][discord]

## :question: FAQs

### How can I update an existing Bearer rule?

If you'd like to suggest an improvement or expansion to an existing rule in this repo, that's great news! Local setup instructions can be found in the [contribution guide](CONTRIBUTING.md), and you can also check out [our guide here](https://docs.bearer.com/guides/custom-rule/#the-rule-configuration-file) for further context on the understanding rule syntax and accepted YAML attributes.

Be sure to add some testdata for your change!

### How can I run my own version of these rules with Bearer?

Simple! Fork this repository, and, when running Bearer, disable default rules and instead pull your forked rules from an external directory.

```bash
  bearer scan my-project \
  --disable-default-rules \
  --external-rule-dir=bearer-rules/rules
```

## :handshake: Contributing

Interested in contributing? We're here for it! For details on how to contribute, setting up your development environment, and our processes, review the [contribution guide](CONTRIBUTING.md).

## :rotating_light: Code of conduct

Everyone interacting with this project is expected to follow the guidelines of our [code of conduct](CODE_OF_CONDUCT.md).

## :shield: Security

To report a vulnerability or suspected vulnerability, [see our security policy](https://github.com/Bearer/bearer-rules/security/policy). For any questions, concerns or other security matters, feel free to [open an issue](https://github.com/Bearer/bearer-rules/issues/new/choose) or join the [Discord Community][discord].

## :mortar_board: License

Bearer code is licensed under the terms of the [Elastic License 2.0](LICENSE.txt) (ELv2), which means you can use it freely inside your organization to protect your applications without any commercial requirements.

You are not allowed to provide Bearer to third parties as a hosted or managed service without the explicit approval of Bearer Inc.

---

[discord]: https://discord.gg/eaHZBJUXRF
[test]: https://github.com/Bearer/bearer-rules/actions/workflows/integration_tests.yml
[test-img]: https://github.com/Bearer/bearer-rules/actions/workflows/integration_tests.yml/badge.svg
[release]: https://github.com/Bearer/bearer-rules/releases
[release-img]: https://img.shields.io/github/release/Bearer/bearer-rules.svg?logo=github
