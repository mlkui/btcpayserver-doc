(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{442:function(e,o,t){e.exports=t.p+"assets/img/gcloud-yaml.e5e65164.png"},608:function(e,o,t){"use strict";t.r(o);var r=t(26),s=Object(r.a)({},(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"google-cloud-deployment"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#google-cloud-deployment"}},[e._v("#")]),e._v(" Google Cloud Deployment")]),e._v(" "),r("p",[e._v("This setup is similar to the "),r("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Deployment"),r("OutboundLink")],1),e._v(", except that the "),r("code",[e._v("docker-compose")]),e._v(" is hosted by Google Cloud.")]),e._v(" "),r("h2",{attrs:{id:"google-cloud-shell-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#google-cloud-shell-setup"}},[e._v("#")]),e._v(" Google Cloud shell setup")]),e._v(" "),r("p",[e._v("Google Cloud is alternative way to set up BTCPayServer.")]),e._v(" "),r("p",[e._v("Start by clicking the following button:")]),e._v(" "),r("figure",[r("a",{attrs:{href:"https://console.cloud.google.com/cloudshell/open?git_repo=https%3A%2F%2Fgithub.com%2Fbtcpayserver%2Fbtcpayserver-googlecloud&page=editor",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"http://gstatic.com/cloudssh/images/open-btn.svg",alt:"Open in Cloud Shell"}}),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("You can log into "),r("a",{attrs:{href:"https://console.cloud.google.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Cloud Console"),r("OutboundLink")],1),e._v(" with your Google account.")]),e._v(" "),r("p",[e._v("Final installation steps:")]),e._v(" "),r("ul",[r("li",[e._v("On Google cloud shell, Set the default project and zone where to deploy instance")]),e._v(" "),r("li",[e._v("Change yaml file to configure VM instance and BTCPay server: "),r("img",{attrs:{src:t(442),alt:"GCE and BTCPay Config"}})]),e._v(" "),r("li",[e._v("Change mode 755 for shell scripts  and run 'deploy.sh <any deployname>' to start depolyment")]),e._v(" "),r("li",[e._v("(Wait for Google Cloud deployment for a minute)")]),e._v(" "),r("li",[e._v("A static IP is shown on the Google cloud shell")]),e._v(" "),r("li",[e._v("Go to your DNS service and map it with your domain name, say EXAMPLE.MYSITE.com")]),e._v(" "),r("li",[e._v("ssh to the vm  from Google cloud console's VM instances list")]),e._v(" "),r("li",[e._v("on ssh, Go to /btcpayserver-docker directry and run 'changedomain.sh EXAMPLE.MYSITE.com'")]),e._v(" "),r("li",[e._v("Access to https://EXAMPLE.MYSITE.com by browser")]),e._v(" "),r("li",[e._v("Click 'Register' and create an account - This will be your "),r("strong",[e._v("admin")]),e._v(" account!")]),e._v(" "),r("li",[r("strong",[e._v("Done!")]),e._v(" Visit "),r("code",[e._v("https://EXAMPLE.MYSITE.com/stores")]),e._v(" to create your store and begin invoicing.")])]),e._v(" "),r("p",[e._v("For advanced users, you can connect via SSH with the information on "),r("code",[e._v("https://EXAMPLE.MYSITE.com/server/services/ssh")]),e._v(", and:")]),e._v(" "),r("ul",[r("li",[e._v("Run "),r("code",[e._v("docker ps")]),e._v(" and "),r("code",[e._v("docker logs xxx")]),e._v(" to view running processes")]),e._v(" "),r("li",[e._v("Run "),r("code",[e._v("btcpay-down.sh")]),e._v(" and "),r("code",[e._v("btcpay-up.sh")]),e._v(" to stop and start the BTCPayServer")])]),e._v(" "),r("p",[e._v("Approximate Cost : "),r("strong",[e._v("70 USD per month")])]),e._v(" "),r("p",[e._v("Learn more: "),r("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-googlecloud",target:"_blank",rel:"noopener noreferrer"}},[e._v("btcpayserver/btcpayserver-googlecloud"),r("OutboundLink")],1)])])}),[],!1,null,null,null);o.default=s.exports}}]);