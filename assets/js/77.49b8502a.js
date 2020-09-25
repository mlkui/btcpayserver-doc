(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{617:function(e,t,s){"use strict";s.r(t);var a=s(26),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"local-development"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#local-development"}},[e._v("#")]),e._v(" Local development")]),e._v(" "),s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),s("p",[e._v("For the development environment you need to install these tools:")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://dotnet.microsoft.com/download",target:"_blank",rel:"noopener noreferrer"}},[e._v(".NET Core 3.1 SDK"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("Docker: "),s("a",{attrs:{href:"https://docs.docker.com/docker-for-windows/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows"),s("OutboundLink")],1),e._v(" | "),s("a",{attrs:{href:"https://docs.docker.com/docker-for-mac/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mac OS"),s("OutboundLink")],1),e._v(" | "),s("a",{attrs:{href:"https://docs.docker.com/install/linux/docker-ce/ubuntu/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Linux"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[e._v("#")]),e._v(" Dependencies")]),e._v(" "),s("p",[e._v("To execute tests and run the project for debugging, you need to run a number of dependencies.")]),e._v(" "),s("p",[e._v("We wrapped all our dependencies in a docker-compose file that you can use to bootstrap the development environment:\nThe file "),s("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/blob/master/BTCPayServer.Tests/docker-compose.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("BTCPayServer.Tests/docker-compose.yml"),s("OutboundLink")],1),e._v(" can be used to spin everything up:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/btcpayserver/btcpayserver.git\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" btcpayserver/BTCPayServer.Tests\ndocker-compose up dev\n")])])]),s("h2",{attrs:{id:"which-ide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#which-ide"}},[e._v("#")]),e._v(" Which IDE?")]),e._v(" "),s("p",[e._v("We recommend using Visual Studio Code (cross platform) or Visual Studio 2019 (Windows Only) or Rider (cross platform).\nYou can of course use VIM if you are hardcore, .NET Core is command-line environment friendly.")]),e._v(" "),s("p",[e._v("Visual Studio Code, Visual Studio and Rider will run the launch profile "),s("code",[e._v("Bitcoin")]),e._v(".\nThis will run a BTCPayServer instance connecting to the services in your Docker service, so you can easily debug and step through the code.")]),e._v(" "),s("h2",{attrs:{id:"build-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-configuration"}},[e._v("#")]),e._v(" Build configuration")]),e._v(" "),s("p",[e._v("A build configuration defines how to build BTCPay Server. For example, whether to include some source files, whether to optimize for debugging or performance.")]),e._v(" "),s("p",[e._v("There are several build configurations:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Debug")])]),e._v(" "),s("li",[s("code",[e._v("Release")])]),e._v(" "),s("li",[s("code",[e._v("Altcoins-Debug")])]),e._v(" "),s("li",[s("code",[e._v("Altcoins-Release")])])]),e._v(" "),s("p",[e._v("How to use a different one during your local development depends on your IDE.\nBy default "),s("code",[e._v("Debug")]),e._v(" is used, this is a Bitcoin only build excluding any altcoin dependencies. How to use a different one during your local development depends on your IDE.")]),e._v(" "),s("p",[e._v("You can select which build to use via the "),s("code",[e._v("-c")]),e._v(" switch in "),s("code",[e._v("dotnet")]),e._v(" command line. If you use command line and want to run a Release build:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("dotnet run -c Release\n")])])]),s("h2",{attrs:{id:"launch-profiles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#launch-profiles"}},[e._v("#")]),e._v(" Launch profiles")]),e._v(" "),s("p",[e._v("When you start BTCPay Server locally for local development, it needs the right parameter so it can connect to the development time dependencies in the docker-compose file.")]),e._v(" "),s("p",[e._v("Those parameters are wrapped into the dotnet concept of "),s("code",[e._v("launch profile")]),e._v(".")]),e._v(" "),s("p",[e._v("The launch profiles are specified in the "),s("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/blob/master/BTCPayServer/Properties/launchSettings.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("launchSettings.json"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("There are currently three launch profiles:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Bitcoin")])]),e._v(" "),s("li",[s("code",[e._v("Bitcoin-HTTPS")])]),e._v(" "),s("li",[s("code",[e._v("Altcoins-HTTPS")])])]),e._v(" "),s("p",[e._v("By default, "),s("code",[e._v("Bitcoin")]),e._v(" is used. How to use a different one during your local development depends on your IDE.")]),e._v(" "),s("p",[e._v("If you use command line, "),s("code",[e._v("dotnet run")]),e._v(" allows you to select the launch profile of your choice:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("dotnet run --launch-profile Bitcoin\n")])])]),s("h2",{attrs:{id:"running-tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-tests"}},[e._v("#")]),e._v(" Running tests")]),e._v(" "),s("p",[e._v("Running tests is functioning in the exact same way as running the development time BTCPay Server.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" BTCPayServer.Tests\ndotnet "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v("\n")])])]),s("p",[e._v("The concept of "),s("code",[e._v("launch profile")]),e._v(" does not apply for tests, but the concept of build configuration does. For example, if I want to run tests on the Release build:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("dotnet "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v(" -c Release\n")])])]),s("p",[e._v("The tests are already configured to use the development time dependencies in the docker-compose presented earlier.")]),e._v(" "),s("p",[e._v("You can use the "),s("code",[e._v("--f")]),e._v(" (filter) switch to run a specific test.")]),e._v(" "),s("p",[e._v("If you use an IDE, consult your IDE documentation to run tests or switch to different configurations.")]),e._v(" "),s("h2",{attrs:{id:"altcoin-support-development"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#altcoin-support-development"}},[e._v("#")]),e._v(" Altcoin support development")]),e._v(" "),s("p",[e._v("By default, your IDE or simple "),s("code",[e._v("dotnet run")]),e._v(" will use "),s("code",[e._v("Bitcoin")]),e._v(" launch profile on "),s("code",[e._v("Debug")]),e._v(" build.")]),e._v(" "),s("ul",[s("li",[e._v("This means that BTCPay Server will be hosted on a local HTTP port, building without altcoin support,")]),e._v(" "),s("li",[e._v("Run BTCPay Server to connect to Bitcoin only dependencies specified in "),s("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/blob/master/BTCPayServer.Tests/docker-compose.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("BTCPayServer.Tests/docker-compose.yml"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("p",[e._v("If you want to develop with altcoins support you need to use the "),s("code",[e._v("Altcoins-HTTPS")]),e._v(" launch profile, on the "),s("code",[e._v("Altcoins-Debug")]),e._v(" build, and run the "),s("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/blob/master/BTCPayServer.Tests/docker-compose.altcoins.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("BTCPayServer.Tests/docker-compose.altcoins.yml"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("If using command line:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" BTCPayServer.Tests\ndocker-compose -f docker-compose.altcoins.yml up dev\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/BTCPayServer\ndotnet run -c Altcoins-Debug --launch-profile Altcoins-HTTPS\n")])])]),s("p",[e._v("For tests")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" BTCPayServer.Tests\ndotnet "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v(" -c Altcoins-Debug\n")])])]),s("h2",{attrs:{id:"https-support-for-local-development"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#https-support-for-local-development"}},[e._v("#")]),e._v(" HTTPS support for local development")]),e._v(" "),s("p",[e._v("Some browser security features may require that you use HTTPS to be properly tested.")]),e._v(" "),s("p",[e._v("In this case, use "),s("code",[e._v("Bitcoin-HTTPS")]),e._v(" (or "),s("code",[e._v("Altcoin-HTTPS")]),e._v(") launch profile. This will create a self signed certificate for your development purpose.")]),e._v(" "),s("p",[e._v("However, your browser will not trust it, making it difficult to debug.")]),e._v(" "),s("p",[e._v("You can instruct your OS to trust this development time certificate by running:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("dotnet dev-certs https --trust\n")])])]),s("h2",{attrs:{id:"videos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#videos"}},[e._v("#")]),e._v(" Videos")]),e._v(" "),s("p",[e._v("For more information check out these videos:")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://youtube.com/watch?v=ZePbMPSIvHM",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to contribute to BTCPay Server Development (Windows)"),s("OutboundLink")],1),e._v(" by Nicolas Dorier")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://youtube.com/watch?v=j486T_Rk-yw",target:"_blank",rel:"noopener noreferrer"}},[e._v("Setting up BTCPayServer development environment on Linux (Ubuntu)"),s("OutboundLink")],1),e._v(" by RockStarDev")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://youtube.com/watch?v=GWR_CcMsEV0",target:"_blank",rel:"noopener noreferrer"}},[e._v("BTCPay Server Development - Testing pull request, payments (MacOS)"),s("OutboundLink")],1),e._v(" by Pavlenex")])]),e._v(" "),s("p",[e._v("and these notes:")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/blob/master/BTCPayServer.Tests/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to get started with development"),s("OutboundLink")],1),e._v(" by Nicolas Dorier (covering relevant docker commands, paying regtest invoices)")])]),e._v(" "),s("h2",{attrs:{id:"how-to-manually-test-payments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-manually-test-payments"}},[e._v("#")]),e._v(" How to manually test payments")]),e._v(" "),s("h3",{attrs:{id:"using-the-test-bitcoin-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-the-test-bitcoin-cli"}},[e._v("#")]),e._v(" Using the test bitcoin-cli")]),e._v(" "),s("p",[e._v("You can call bitcoin-cli inside the container with "),s("code",[e._v("docker exec")]),e._v(".\nFor example, if you want to send "),s("code",[e._v("0.23111090")]),e._v(" to "),s("code",[e._v("mohu16LH66ptoWGEL1GtP6KHTBJYXMWhEf")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("./docker-bitcoin-cli.sh sendtoaddress "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"mohu16LH66ptoWGEL1GtP6KHTBJYXMWhEf"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.23111090")]),e._v("\n")])])]),s("p",[e._v("If you are using Powershell:")]),e._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\\docker"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("bitcoin"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cli")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("ps1 sendtoaddress "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"mohu16LH66ptoWGEL1GtP6KHTBJYXMWhEf"')]),e._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("23111090\n")])])]),s("p",[e._v("You can also generate blocks:")]),e._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\\docker"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("bitcoin"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("generate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("ps1 3\n")])])]),s("h3",{attrs:{id:"using-the-test-litecoin-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-the-test-litecoin-cli"}},[e._v("#")]),e._v(" Using the test litecoin-cli")]),e._v(" "),s("p",[e._v("Same as bitcoin-cli, but with "),s("code",[e._v(".\\docker-litecoin-cli.ps1")]),e._v(" and "),s("code",[e._v(".\\docker-litecoin-cli.sh")]),e._v(" instead.")]),e._v(" "),s("h3",{attrs:{id:"using-the-test-lightning-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-the-test-lightning-cli"}},[e._v("#")]),e._v(" Using the test lightning-cli")]),e._v(" "),s("p",[e._v("If you are using Linux:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("./docker-customer-lightning-cli.sh pay lnbcrt100u1pd2e6uspp5ajnadvhazjrz55twd5k6yeg9u87wpw0q2fdr7g960yl5asv5fmnqdq9d3hkccqpxmedyrk0ehw5ueqx5e0r4qrrv74cewddfcvsxaawqz7634cmjj39sqwy5tvhz0hasktkk6t9pqfdh3edmf3z09zst5y7khv3rvxh8ctqqw6mwhh\n")])])]),s("p",[e._v("If you are using Powershell:")]),e._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\\docker"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("customer"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("lightning"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cli")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("ps1 pay lnbcrt100u1pd2e6uspp5ajnadvhazjrz55twd5k6yeg9u87wpw0q2fdr7g960yl5asv5fmnqdq9d3hkccqpxmedyrk0ehw5ueqx5e0r4qrrv74cewddfcvsxaawqz7634cmjj39sqwy5tvhz0hasktkk6t9pqfdh3edmf3z09zst5y7khv3rvxh8ctqqw6mwhh\n")])])]),s("p",[e._v("If you get this message:")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"code"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("205")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"message"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Could not find a route"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"data"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"getroute_tries"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"sendpay_tries"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("Please, run the test "),s("code",[e._v("CanSetLightningServer")]),e._v(", this will establish a channel between the customer and the merchant, then, retry.")]),e._v(" "),s("p",[e._v("Alternatively you can run the "),s("code",[e._v("./docker-lightning-channel-setup.sh")]),e._v(" script to establish the channel connection.\nThe "),s("code",[e._v("./docker-lightning-channel-teardown.sh")]),e._v(" script closes any existing lightning channels.")]),e._v(" "),s("h2",{attrs:{id:"faq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),s("p",[s("code",[e._v("docker-compose up dev")]),e._v(" failed or tests are not passing, what should I do?")]),e._v(" "),s("ol",[s("li",[e._v("Run "),s("code",[e._v("docker-compose down --v")]),e._v(" (this will reset your test environment)")]),e._v(" "),s("li",[e._v("Run "),s("code",[e._v("docker-compose pull")]),e._v(" (this will ensure you have the lastest images)")]),e._v(" "),s("li",[e._v("Run again with "),s("code",[e._v("docker-compose up dev")])])]),e._v(" "),s("p",[e._v("If you still have issues, try to restart docker.")])])}),[],!1,null,null,null);t.default=r.exports}}]);