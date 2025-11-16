## GitHub Copilot Chat

- Extension: 0.33.1 (prod)
- VS Code: 1.106.0 (ac4cbdf48759c7d8c3eb91ffe6bb04316e263c57)
- OS: win32 10.0.26200 x64
- GitHub Account: thevineetdixit

## Network

User Settings:

```json
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": false,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.github.com:

- DNS ipv4 Lookup: 20.207.73.85 (36 ms)
- DNS ipv6 Lookup: Error (27 ms): getaddrinfo ENOTFOUND api.github.com
- Proxy URL: None (1 ms)
- Electron fetch (configured): HTTP 200 (244 ms)
- Node.js https: HTTP 200 (251 ms)
- Node.js fetch: HTTP 200 (655 ms)

Connecting to https://api.individual.githubcopilot.com/_ping:

- DNS ipv4 Lookup: 140.82.114.22 (24 ms)
- DNS ipv6 Lookup: Error (33 ms): getaddrinfo ENOTFOUND api.individual.githubcopilot.com
- Proxy URL: None (16 ms)
- Electron fetch (configured): HTTP 200 (1047 ms)
- Node.js https: HTTP 200 (1014 ms)
- Node.js fetch: HTTP 200 (1006 ms)

Connecting to https://proxy.individual.githubcopilot.com/_ping:

- DNS ipv4 Lookup: 20.250.119.64 (13 ms)
- DNS ipv6 Lookup: Error (7 ms): getaddrinfo ENOTFOUND proxy.individual.githubcopilot.com
- Proxy URL: None (5 ms)
- Electron fetch (configured): HTTP 200 (630 ms)
- Node.js https: HTTP 200 (1489 ms)
- Node.js fetch: HTTP 200 (585 ms)

Connecting to https://github.com: HTTP 200 (274 ms)
Connecting to https://telemetry.individual.githubcopilot.com/_ping: HTTP 200 (1162 ms)

Number of system certificates: 46

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).
