# Pre Requirements:
**Starport**
Install the Latest Version of Starport
To install the latest stable version, run the following command:
curl https://get.starport.network/starport! | bash

**Golang**
Min golang version: 1.17

Please set the GOROOT and GOPATH. Details here:
https://golang.org/doc/gopath_code#GOPATH
https://pkg.go.dev/cmd/go#hdr-GOPATH_environment_variable
https://golangdocs.com/gopath-and-goroot-in-go-programming


**NodeJS**
Min NodeJS version: 12.14.0

## Get started

# voter
**voter** is a blockchain built using Cosmos SDK and Tendermint and created with Starport.

```
cd helloworld/voter
starport chain serve
```

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

### (not necessary on this step) Configure

Your blockchain in development can be configured with `config.yml`. To learn more, see the [Starport docs](https://docs.starport.network).

### (not necessary at this stage) Launch

To launch your blockchain live on multiple nodes, use `starport network` commands. Learn more about [Starport Network](https://github.com/tendermint/spn).

### Web Frontend 

Starport has scaffolded a Vue.js-based web app in the `vue` directory. Run the following commands to install dependencies and start the app:

```
cd vue
npm install
npm run serve
```

Open the browser: http://localhost:8080/

The frontend app is built using the `@starport/vue` and `@starport/vuex` packages. For details, see the [monorepo for Starport front-end development](https://github.com/tendermint/vue).


## Learn more

- [Starport](https://github.com/tendermint/starport)
- [Starport Docs](https://docs.starport.network)
- [Cosmos SDK documentation](https://docs.cosmos.network)
- [Cosmos SDK Tutorials](https://tutorials.cosmos.network)
- [Discord](https://discord.gg/W8trcGV)


## Modify the CLI Transaction
A poll app end user can also interact with your application by using a command line interface.
The CLI definition is available at x/voter/client/cli/tx_poll.go and at x/voter/client/cli/tx_vote.go.

**Example:**
voterd tx voter create-poll "Text editors" "Emacs" "Vim" --from alice

Other commands:
voterd tx voter update-poll [id] [title] [options]
voterd tx voter delete-poll [id]

Where:
* [id] is the pool ID 
* [title] is the pool title
* [options] is an array of pool options

From x/voter/client/cli/tx_vote.go
voterd tx voter create-vote [pollID] [option]
voterd tx voter update-vote [id] [pollID] [option]
voterd tx voter delete-vote [id]

Where:
* [id] is the vote ID
* [pollID] is the pool ID
* [option] is teh option text