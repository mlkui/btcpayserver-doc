(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{324:function(t,e,i){},360:function(t,e,i){"use strict";var n=i(324);i.n(n).a},558:function(t,e,i){"use strict";i(99),i(29),i(68);var n=i(338),a=i.n(n),s=i(314),o={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=a()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,i=e.repo,n=e.docsDir,s=void 0===n?"":n,o=e.docsBranch,d=void 0===o?"master":o,r=e.docsRepo,c=void 0===r?i:r;return t&&c&&this.$page.relativePath?this.createEditLink(i,c,s,d,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"},notSatisfiedLink:function(){var t=a()(this.$page.frontmatter.notSatisfiedLink)?this.$site.themeConfig.notSatisfiedLinks:this.$page.frontmatter.notSatisfiedLink,e=this.$site.themeConfig,i=e.repo,n=e.docsDir,s=void 0===n?"":n,o=e.docsBranch,d=void 0===o?"master":o,r=e.docsRepo,c=void 0===r?i:r;return t&&c&&this.$page.relativePath?this.createNotSatisfiedLink(i,c,s,d,this.$page.relativePath):null},notSatisfiedLinkText:function(){return this.$themeLocaleConfig.notSatisfiedLinkText||this.$site.themeConfig.notSatisfiedLinkText||"Didn't find an answer?"}},methods:{createEditLink:function(t,e,i,n,a){return(s.i.test(e)?e:"https://github.com/".concat(e)).replace(s.a,"")+"/edit"+"/".concat(n,"/")+(i?i.replace(s.a,"")+"/":"")+a},createNotSatisfiedLink:function(t,e,i,n,a){var o=encodeURIComponent("Improve ".concat(this.$page.title)),d=encodeURIComponent('I could not find the information I was looking for on the "'.concat(this.$page.title,'" page (`').concat(this.$page.path,"`).\n\n[PLEASE DESCRIBE HOW THE PAGE CAN BE IMPROVED]"));return(s.i.test(e)?e:"https://github.com/".concat(e)).replace(s.a,"")+"/issues/new?title=".concat(o,"&body=").concat(d,"&labels=question")}}},d=(i(360),i(26)),r=Object(d.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{staticClass:"page-edit"},[t.editLink?i("div",{staticClass:"edit-link"},[i("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),i("OutboundLink")],1):t._e(),t._v(" "),t.notSatisfiedLink?i("div",{staticClass:"edit-link"},[i("a",{attrs:{href:t.notSatisfiedLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.notSatisfiedLinkText))]),t._v(" "),i("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?i("div",{staticClass:"last-updated"},[i("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),i("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null);e.a=r.exports}}]);