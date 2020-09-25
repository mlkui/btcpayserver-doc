(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{339:function(a,t,e){a.exports=e.p+"assets/img/RPI4Terminal4.eb61f8f2.png"},475:function(a,t,e){a.exports=e.p+"assets/img/RPI4Components.fda5f527.jpeg"},476:function(a,t,e){a.exports=e.p+"assets/img/RPI4Linux.bbede569.png"},477:function(a,t,e){a.exports=e.p+"assets/img/RPI4Terminal5.2c8380f5.png"},628:function(a,t,e){"use strict";e.r(t);var s=e(26),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"raspberry-pi-4-deployment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#raspberry-pi-4-deployment"}},[a._v("#")]),a._v(" Raspberry Pi 4 Deployment")]),a._v(" "),s("p",[a._v("This document guides you step by step on how to run BTCPay Server on a Raspberry Pi 4. See here the "),s("RouterLink",{attrs:{to:"/RPi3/"}},[a._v("Raspberry Pi 3 instructions")])],1),a._v(" "),s("p",[a._v("The newly released Raspberry Pi 4 is currently the best low-cost single-board computer available. You can use a Raspberry Pi 4 to run your BTCPay Server at home for around $150 worth of parts, described below.")]),a._v(" "),s("h2",{attrs:{id:"required-hardware"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#required-hardware"}},[a._v("#")]),a._v(" Required Hardware")]),a._v(" "),s("h3",{attrs:{id:"raspberry-pi-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#raspberry-pi-4"}},[a._v("#")]),a._v(" Raspberry Pi 4")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.canakit.com/raspberry-pi-4-4gb.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Raspberry Pi 4 with "),s("strong",[a._v("4GB RAM")]),s("OutboundLink")],1),a._v(" ($55)")]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.amazon.com/dp/B073K14CVB/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Sandisk 16GB SD Card"),s("OutboundLink")],1),a._v(" ($5)")])]),a._v(" "),s("p",[a._v("Don’t settle for only 1GB or 2GB of RAM. The "),s("strong",[a._v("4GB RAM")]),a._v(" version is harder to find than the other versions, but you absolutely want that "),s("strong",[a._v("4GB of RAM")]),a._v(" for a few extra bucks, and it’s totally worth spending a few extra minutes searching on the Internet to find a vendor that has the 4GB RAM version in stock. You’ll also need an "),s("strong",[a._v("SD card reader")]),a._v(" if you don’t already have one.")]),a._v(" "),s("h3",{attrs:{id:"power-adapters-and-usb-c-cable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#power-adapters-and-usb-c-cable"}},[a._v("#")]),a._v(" Power Adapters and USB-C Cable")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://shop.pimoroni.com/products/raspberry-pi-official-usb-c-power-supply-us?variant=29391144648787",target:"_blank",rel:"noopener noreferrer"}},[a._v("Official Raspberry Pi 4 USB-C Power Adapter 5.1V/3A for US"),s("OutboundLink")],1),a._v(" ($10)")]),a._v(" "),s("li",[s("a",{attrs:{href:"https://shop.pimoroni.com/products/raspberry-pi-official-usb-c-power-supply-eu?variant=29391130624083",target:"_blank",rel:"noopener noreferrer"}},[a._v("Official Raspberry Pi 4 USB-C Power Adapter 5.1V/3A for EU"),s("OutboundLink")],1),a._v(" ($10)")]),a._v(" "),s("li",[s("a",{attrs:{href:"https://shop.pimoroni.com/products/raspberry-pi-official-usb-c-power-supply-au?variant=29391160737875",target:"_blank",rel:"noopener noreferrer"}},[a._v("Official Raspberry Pi 4 USB-C Power Adapter 5.1V/3A for AU"),s("OutboundLink")],1),a._v(" ($10)")])]),a._v(" "),s("p",[a._v("Don’t waste your time with random Chinese power adapters from Amazon, or expect that the existing ones you have at home are going to work fine. The Raspberry Pi 4 has issues with unofficial adapters, and for only $10 it’s better to just "),s("strong",[a._v("get an official adapter")]),a._v(" instead of learning this the hard way.")]),a._v(" "),s("h3",{attrs:{id:"cooling-options-passive-vs-active-vs-passiveactive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cooling-options-passive-vs-active-vs-passiveactive"}},[a._v("#")]),a._v(" Cooling options: Passive vs Active vs Passive+Active")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://shop.pimoroni.com/products/fan-shim",target:"_blank",rel:"noopener noreferrer"}},[a._v("Pimoroni Fan Shim"),s("OutboundLink")],1),a._v(" ($10)")])]),a._v(" "),s("p",[a._v("Strictly speaking, you don’t actually "),s("strong",[a._v("need")]),a._v(" a cooling solution, but you certainly "),s("strong",[a._v("want")]),a._v(" a cooling solution, because once the Raspberry PI core temperature reaches 70C, it will throttle the CPU down to avoid burning itself up.")]),a._v(" "),s("h3",{attrs:{id:"case-options-naked-vs-protection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#case-options-naked-vs-protection"}},[a._v("#")]),a._v(" Case options: Naked vs. Protection")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://flirc.tv/more/raspberry-pi-4-case",target:"_blank",rel:"noopener noreferrer"}},[a._v("Flirc Heatsink Case"),s("OutboundLink")],1),a._v(" ($12)")]),a._v(" "),s("li",[s("a",{attrs:{href:"https://shop.pimoroni.com/products/pibow-coupe-4?variant=29210100105299",target:"_blank",rel:"noopener noreferrer"}},[a._v("Pimoroni Pibow Coupé 4"),s("OutboundLink")],1),a._v(" ($9)")])]),a._v(" "),s("p",[a._v("Of course, using a case is totally optional, but we recommend one to protect your Raspberry Pi over the long-term and prevent random dust from shorting out the pins.")]),a._v(" "),s("h3",{attrs:{id:"data-storage-options-ssd-vs-usb-memory-vs-sd-card"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-storage-options-ssd-vs-usb-memory-vs-sd-card"}},[a._v("#")]),a._v(" Data storage options: SSD vs USB memory vs SD card")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.amazon.com/dp/B073GZBT36/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Samsung 500GB SSD"),s("OutboundLink")],1),a._v(" ($75)")])]),a._v(" "),s("p",[a._v("The 500GB SSD allows you to keep a full copy of the Bitcoin blockchain, until it grows past 500GB sometime in 2022. At that time, you’ll either have to enable pruning on your Bitcoin node, or upgrade to a 1TB SSD, which will presumably be cheaper then, probably even less than $75. You can also use BTCPay without a full copy of the Bitcoin blockchain.")]),a._v(" "),s("h3",{attrs:{id:"display-options-display-or-headless"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#display-options-display-or-headless"}},[a._v("#")]),a._v(" Display options: Display or Headless")]),a._v(" "),s("ul",[s("li",[a._v("Display ($100)")])]),a._v(" "),s("h2",{attrs:{id:"assembling-the-raspberry-pi-4-components"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#assembling-the-raspberry-pi-4-components"}},[a._v("#")]),a._v(" Assembling the Raspberry Pi 4 components")]),a._v(" "),s("ul",[s("li",[a._v("Important: Attach a heatsink to the CPU! 🔥🔥🔥")]),a._v(" "),s("li",[a._v("Connect the SSD to one of the blue colored USB 3 ports")]),a._v(" "),s("li",[a._v("Prepare the USB Power Adapter but don’t plug it in yet")])]),a._v(" "),s("figure",[s("img",{attrs:{src:e(475),alt:"RPI4 Components"}})]),a._v(" "),s("h2",{attrs:{id:"install-linux-on-the-raspberry-pi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-linux-on-the-raspberry-pi"}},[a._v("#")]),a._v(" Install Linux on the Raspberry Pi")]),a._v(" "),s("p",[a._v("Start by downloading "),s("a",{attrs:{href:"https://www.raspberrypi.org/downloads/raspbian/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Raspbian Linux"),s("OutboundLink")],1),a._v(" to your existing computer. The “Lite” distribution is fine for BTCPay setup, but if you want to use your Raspberry Pi for other things, you might want the full image.")]),a._v(" "),s("figure",[s("img",{attrs:{src:e(476),alt:"RPI4 Linux Installation"}})]),a._v(" "),s("h3",{attrs:{id:"flash-your-sd-card-with-raspbian-linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flash-your-sd-card-with-raspbian-linux"}},[a._v("#")]),a._v(" Flash your SD card with Raspbian Linux")]),a._v(" "),s("ul",[s("li",[a._v("Extract the downloaded Raspbian Linux zip file")]),a._v(" "),s("li",[a._v("Download the latest version of "),s("a",{attrs:{href:"https://www.balena.io/etcher/",target:"_blank",rel:"noopener noreferrer"}},[a._v("balenaEtcher"),s("OutboundLink")],1),a._v(" and install it.")]),a._v(" "),s("li",[a._v("Connect an SD card reader with the SD card inside.")]),a._v(" "),s("li",[a._v("Open balenaEtcher and select from your hard drive the Raspberry Pi .img from the extracted zip file you wish to write to the SD card.")]),a._v(" "),s("li",[a._v("Select the SD card you wish to write your image to.")]),a._v(" "),s("li",[a._v("Review your selections and click 'Flash!' to begin writing data to the SD card.")])]),a._v(" "),s("p",[a._v("You can find a more in-depth instruction guide to flashing to your SD card at the "),s("a",{attrs:{href:"https://www.raspberrypi.org/documentation/installation/installing-images",target:"_blank",rel:"noopener noreferrer"}},[a._v("official Raspberry Pi  website"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("p",[a._v("If you used balenaEtcher to flash, the SD card will already have been ejected. Simply take the SD card out and put it back in. The SD card should now be labelled as "),s("code",[a._v("boot")]),a._v(". Next, enable SSH at bootup so you can remotely login by creating an empty file in the SD card root folder called "),s("code",[a._v("ssh")]),a._v(". Eject the SD card through your OS before taking it out of the SD card reader.")]),a._v(" "),s("figure",[s("img",{attrs:{src:e(339),alt:"RPI4 Console"}})]),a._v(" "),s("h2",{attrs:{id:"booting-up-the-raspberry-pi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#booting-up-the-raspberry-pi"}},[a._v("#")]),a._v(" Booting up the Raspberry Pi")]),a._v(" "),s("p",[a._v("After inserting the SD card into the Raspberry Pi, go ahead and connect the power and ethernet, and optionally the display and keyboard if you have those. It should boot up and get an IP address using DHCP. You can try searching for it with "),s("code",[a._v("ping raspberrypi.local")]),a._v(" on your desktop PC, but if that doesn’t work you will need to login to your router to find its IP address.")]),a._v(" "),s("p",[a._v("The IP address that my Raspberry Pi got was 192.168.1.5 so I SSH’d to that:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ssh")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".1.5 -l pi\n")])])]),s("p",[a._v("The default password for the “pi” user is “raspberry”. After SSH’ing in, the first thing I want to do is check the device’s CPU temperature to make sure the cooling system are working correctly. Press Ctrl-c to stop monitoring:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("watch")]),a._v(" -n1 vcgencmd measure_temp\n")])])]),s("p",[a._v("Next, let’s change the password for the “pi” user:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("passwd")]),a._v(" pi\n")])])]),s("figure",[s("img",{attrs:{src:e(339),alt:"RPI4 Console"}})]),a._v(" "),s("p",[a._v("After that, switch to the "),s("code",[a._v("root")]),a._v(" user, which we will use for the remaining part of the tutorial:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("su")]),a._v(" -\n")])])]),s("h2",{attrs:{id:"configuring-the-storage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-storage"}},[a._v("#")]),a._v(" Configuring the storage")]),a._v(" "),s("p",[a._v("We recommend to disable swap to prevent burning out your SD card:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("dphys-swapfile swapoff\ndphys-swapfile uninstall\nupdate-rc.d dphys-swapfile remove\nsystemctl disable dphys-swapfile\n")])])]),s("figure",[s("img",{attrs:{src:e(477),alt:"RPI4 Console"}})]),a._v(" "),s("p",[a._v("Partition your SSD:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("fdisk")]),a._v(" /dev/sda\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# type 'p' to list existing partitions")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# type 'd' to delete currently selected partitions")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# type 'n' to create a new partition")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# type 'w' to write the new partition table and exit fdisk")]),a._v("\n")])])]),s("p",[a._v("Format the new partition on your SSD:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("mkfs.ext4 /dev/sda1\n")])])]),s("p",[a._v("Configure the SSD partition to auto-mount at bootup:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("mkfs.ext4 /dev/sda1\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" /mnt/usb\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("UUID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" blkid -s UUID -o value /dev/sda1"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"UUID='),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$UUID")]),a._v(' /mnt/usb ext4 defaults,noatime,nofail 0 0"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tee")]),a._v(" -a /etc/fstab\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mount")]),a._v(" -a\n")])])]),s("p",[a._v("While you’re editing "),s("code",[a._v("/etc/fstab")]),a._v(" add a RAM filesystem for logs (optional).\nThis is also to prevent burning out your SD card too quickly:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'none /var/log tmpfs size=10M,noatime 0 0'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" /etc/fstab\n")])])]),s("p",[a._v("Mount the SSD partition and create a symlink for docker to use the SSD:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" /mnt/usb/docker\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ln")]),a._v(" -s /mnt/usb/docker /var/lib/docker\n")])])]),s("h2",{attrs:{id:"configuring-the-firewall"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-firewall"}},[a._v("#")]),a._v(" Configuring the firewall")]),a._v(" "),s("p",[a._v("Upgrade your OS packages to latest:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" update "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" upgrade -y "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" autoremove\n")])])]),s("p",[a._v("Install a firewall and allow SSH, HTTP, HTTPS, Bitcoin, and Lightning:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y ufw\nufw default deny incoming\nufw default allow outgoing\n")])])]),s("p",[a._v("UFW needs default iptables changes and a reboot for the firewall to work:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" update-alternatives --set iptables /usr/sbin/iptables-legacy\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("reboot")]),a._v("\n")])])]),s("p",[a._v("This command allows SSH connections from internal networks only:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("ufw allow from "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.0")]),a._v(".0.0/8 to any port "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),a._v(" proto tcp\nufw allow from "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("172.16")]),a._v(".0.0/12 to any port "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),a._v(" proto tcp\nufw allow from "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".0.0/16 to any port "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),a._v(" proto tcp\nufw allow from "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("169.254")]),a._v(".0.0/16 to any port "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),a._v(" proto tcp\nufw allow from fc00::/7 to any port "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),a._v(" proto tcp\nufw allow from fe80::/10 to any port "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),a._v(" proto tcp\nufw allow from ff00::/8 to any port "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),a._v(" proto tcp\n")])])]),s("p",[a._v("These ports need to be accessible from anywhere (The default subnet is 'any' unless you specify one):")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("ufw allow "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v("/tcp\nufw allow "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("443")]),a._v("/tcp\nufw allow "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8333")]),a._v("/tcp\nufw allow "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9735")]),a._v("/tcp\n")])])]),s("p",[a._v("Verify your configuration:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("ufw status\n")])])]),s("p",[a._v("Enable your firewall:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("ufw "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v("\n")])])]),s("h2",{attrs:{id:"setup-btcpay-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-btcpay-server"}},[a._v("#")]),a._v(" Setup BTCPay Server")]),a._v(" "),s("p",[a._v("Download BTCPay Server from GitHub:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ensure we are in root home")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y fail2ban "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/btcpayserver/btcpayserver-docker\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" btcpayserver-docker\n")])])]),s("p",[a._v("Configure BTCPay by setting some "),s("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker#environment-variables",target:"_blank",rel:"noopener noreferrer"}},[a._v("environment variables"),s("OutboundLink")],1),a._v(":")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BTCPAY_HOST")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"raspberrypi.local"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("REVERSEPROXY_DEFAULT_HOST")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$BTCPAY_HOST")]),a._v('"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("NBITCOIN_NETWORK")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"mainnet"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BTCPAYGEN_CRYPTO1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"btc"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BTCPAYGEN_LIGHTNING")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"lnd"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BTCPAYGEN_REVERSEPROXY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"nginx"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BTCPAYGEN_ADDITIONAL_FRAGMENTS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"opt-more-memory"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BTCPAY_ENABLE_SSH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true\n")])])]),s("p",[a._v("If you want to use multiple hostnames, add them via the optional "),s("code",[a._v("BTCPAY_ADDITIONAL_HOSTS")]),a._v(" variable:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BTCPAY_ADDITIONAL_HOSTS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"btcpay.YourDomain.com,btcpay.local"')]),a._v("\n")])])]),s("p",[a._v("In case you want to restrict access to your local network only, please note that you need to use a "),s("code",[a._v(".local")]),a._v(" domain.")]),a._v(" "),s("p",[a._v("Run the BTCPay installation:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" ./btcpay-setup.sh -i\n")])])]),s("p",[a._v("It should be up and running within a few minutes. Try opening http://raspberrypi.local in your web browser. If everything is correct, you will see BTCPay Server front page.")]),a._v(" "),s("p",[a._v("Now, you just need to wait a day or so for the Bitcoin blockchain to "),s("RouterLink",{attrs:{to:"/FAQ/FAQ-Synchronization/"}},[a._v("sync and full verify")]),a._v(". The bottom of the BTCPay Server web GUI will show a pop-up dialog box to monitor the progress.")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);