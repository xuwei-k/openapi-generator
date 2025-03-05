/*! For license information please see c4f5d8e4.02cbee43.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[4195],{2187:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z}});var a=n(7462);function r(e,t){return t||(t=e.slice(0)),e.raw=t,e}var o,l,c=n(7294),s=n(4184),i=n.n(s),m=n(4774),u=n(9960),p=n(2263),g=n(4996),d=n(9578),h=n(452),E=[{title:c.createElement(c.Fragment,null,"Easy to Use"),imageUrl:"img/icons/plug.svg",description:c.createElement(c.Fragment,null,c.createElement("p",null,"With ",c.createElement("em",null,"50+")," client generators, you can easily generate code to interact with any server which exposes an OpenAPI document."),c.createElement("p",null,"Maintainers of APIs may also automatically generate and distribute clients as part of official SDKs."),c.createElement("p",null,"Each client supports different options and features, but all templates can be replaced with your own Mustache-based templates."),"See ",c.createElement("a",{href:"./docs/customization"},"Customization")," for details.")},{title:c.createElement(c.Fragment,null,"Servers"),imageUrl:"img/icons/exchange.svg",description:c.createElement(c.Fragment,null,c.createElement("p",null,"Getting started with server development can be tough, especially if you're evaluating technologies. We can reduce the burden when you bring your own OpenAPI document."),c.createElement("p",null,"Generate server stubs for 40+ different languages and technologies, including Java, Kotlin, Go, and PHP."),c.createElement("p",null,"Some generators support ",c.createElement("em",null,"Inversion of Control"),", allowing you to iterate on design via your OpenAPI document without worrying about blowing away your entire domain layer when you regenerate code."))},{title:c.createElement(c.Fragment,null,"Schemas/Configs"),imageUrl:"img/icons/pencil.svg",description:c.createElement(c.Fragment,null,c.createElement("p",null,"Ever wanted to iteratively design a MySQL database, but writing table declarations was too tedious?"),c.createElement("p",null,"OpenAPI Generator offers some special generators such as Apache2 Configuration, MySQL and GraphQL schema generators."),c.createElement("p",null,"You can easily extend these generators and their templates to create derivative generators!"))},{title:c.createElement(c.Fragment,null,"Documentation"),imageUrl:"img/icons/newspaper-o.svg",description:c.createElement(c.Fragment,null,c.createElement("p",null,"OpenAPI documents allow you to convert the metadata about your API into some other format."),c.createElement("p",null,"We include documentation formats such as HTML and Cwiki, which allow you to distribute static documentation to your consumers."),c.createElement("p",null,"We also support generating from OpenAPI 2.0 to newer JSON/YAML OpenAPI 3.x documents."))}];function f(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=e.reduce((function(e,t,a){return e+n[a-1]+t}));return r.replace(/\r?(\n)\s*\|/g,"$1")}var v=[{id:"learn",imageUrl:"img/color-logo.svg",title:c.createElement(c.Fragment,null,"Learn How"),content:c.createElement("div",null,c.createElement("span",null,c.createElement("p",null,"OpenAPI Generator supports many different integrations and use cases, including (but not limited to):"),c.createElement("ul",null,c.createElement("li",null,"Maven Plugin"),c.createElement("li",null,"Gradle Plugin"),c.createElement("li",null,"Bazel Plugin"),c.createElement("li",null,"SBT Plugin"),c.createElement("li",null,"Cake Plugin"),c.createElement("li",null,"CLI via Homebrew"),c.createElement("li",null,"CLI via Docker"),c.createElement("li",null,"CLI via npm"),c.createElement("li",null,"Generator SaaS")),c.createElement("p",null,"For details, see  ",c.createElement("a",{href:"/docs/integrations"},"Workflow Integrations")),c.createElement("p",null,"Generation also allows for easy customization via options, custom templates, or even custom generators on your classpath. See ",c.createElement("a",{href:"/docs/customization"},"Customization")," for details.")))},{id:"connectOnSlack",imageUrl:"img/tools/Slack_Mark-256x256-3a29a6b.png",title:c.createElement(c.Fragment,null,"Active Community"),content:c.createElement(c.Fragment,null,c.createElement("p",null,c.createElement("strong",null,"Connect")," with us on Slack!"),c.createElement("p",null,"We're a very community-oriented project. We have an active community of users, contributors, and core team members on Slack. Slack is often a good place to start if you're looking for guidance about where to begin contributing, if you have an idea you're not sure fits the project, or if you just want to ask a question or say hello."),c.createElement("p",null,"Slack is free to ",c.createElement("a",{href:"https://slack.com/downloads",className:"href"},"download"),", and our workspace is free to ",c.createElement("a",{href:"https://join.slack.com/t/openapi-generator/shared_invite/zt-2wmkn4s8g-n19PJ99Y6Vei74WMUIehQA",className:"href"},"sign up"),"."))},{id:"try",imageUrl:"img/tools/npm.svg",title:c.createElement(c.Fragment,null,"Try via npm"),content:c.createElement(c.Fragment,null,c.createElement("p",null,"The ",c.createElement("a",{href:"https://github.com/openapitools/openapi-generator-cli",className:"href"},"npm package wrapper")," is cross-platform wrapper around the .jar artifact."),c.createElement("p",null,c.createElement("strong",null,"Install")," globally, exposing the CLI on the command line:"),c.createElement("p",null,c.createElement(h.Z,{className:"bash"},f(o||(o=r(['\n                   |# install the latest version of "openapi-generator-cli"\n                   |npm install @openapitools/openapi-generator-cli -g\n                   |\n                   |# use a specific version of "openapi-generator-cli"\n                   |openapi-generator-cli version-manager set 7.12.0\n                   |\n                   |# Or install it as dev-dependency in your node.js projects\n                   |npm install @openapitools/openapi-generator-cli -D\n                ']))))),c.createElement("p",null,"Then, ",c.createElement("strong",null,"generate")," a ruby client from a valid ",c.createElement("a",{href:"https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/3_0/petstore.yaml",className:"href"},"petstore.yaml")," doc:"),c.createElement("p",null,c.createElement(h.Z,{className:"bash"},"\n                openapi-generator-cli generate -i petstore.yaml -g ruby -o /tmp/test/\n                ")))},{id:"tryHomebrew",imageUrl:"img/tools/homebrew-256x256.png",title:c.createElement(c.Fragment,null,"Try via Homebrew"),content:c.createElement(c.Fragment,null,c.createElement("p",null,c.createElement("strong",null,"Install")," via ",c.createElement("a",{href:"https://brew.sh/",className:"href"},"homebrew"),":"),c.createElement("p",null,c.createElement(h.Z,{className:"bash"},"brew install openapi-generator")),c.createElement("p",null,"Then, ",c.createElement("strong",null,"generate")," a ruby client from a valid ",c.createElement("a",{href:"https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/3_0/petstore.yaml",className:"href"},"petstore.yaml")," doc:"),c.createElement("p",null,c.createElement(h.Z,{className:"bash"},"openapi-generator generate -i petstore.yaml -g ruby -o /tmp/test/")))},{id:"tryDocker",imageUrl:"img/tools/docker.png",title:c.createElement(c.Fragment,null,"Try via Docker"),content:c.createElement(c.Fragment,null,c.createElement("p",null,"The OpenAPI Generator image acts as a standalone executable. It can be used as an alternative to installing via homebrew, or for developers who are unable to install Java or upgrade the installed version."),c.createElement("p",null,"To generate code from a valid ",c.createElement("a",{href:"https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/3_0/petstore.yaml"},"petstore.yaml")," doc with this image, you'll need to mount a local location as a volume."),c.createElement("p",null,c.createElement(h.Z,{className:"bash"},f(l||(l=r(["\n                |docker run --rm \\\n                |    -v $PWD:/local openapitools/openapi-generator-cli generate \\\n                |    -i /local/petstore.yaml \\\n                |    -g go \\\n                |    -o /local/out/go\n                "],["\n                |docker run --rm \\\\\n                |    -v $PWD:/local openapitools/openapi-generator-cli generate \\\\\n                |    -i /local/petstore.yaml \\\\\n                |    -g go \\\\\n                |    -o /local/out/go\n                "]))))),c.createElement("p",null,"For a full list of our docker images, check out ",c.createElement("a",{href:"https://hub.docker.com/u/openapitools"},"u/openapitools")," on Docker Hub."))}];function b(e){var t=e.id,n=e.title,a=e.imageUrl,r=e.content,o=(0,g.Z)(a),l=t+" logo";return c.createElement(c.Fragment,null,c.createElement("div",{id:t,className:i()("row",d.Z.calloutRow)},c.createElement("div",{className:i()("col col--3 blockImage")},c.createElement("img",{className:"image",src:o,alt:l})),c.createElement("div",{className:"col col--9"},c.createElement("h2",null,n),r)))}function y(e){var t=e.imageUrl,n=e.title,a=e.description,r=(0,g.Z)(t);return c.createElement("div",{className:i()("col col--6",d.Z.feature)},r&&c.createElement("div",{className:"text--center"},c.createElement("img",{className:d.Z.featureImage,src:r,alt:"logo"})),c.createElement("h3",null,n),c.createElement("div",null,a))}function w(e){var t=e.image,n=e.infoLink,a=e.caption,r=(0,g.Z)(t);return c.createElement("a",{href:n,key:n},c.createElement("img",{src:r,alt:a,title:a,className:d.Z.productShowcaseSectionLogo}))}function S(e){var t=e.users,n=(0,p.Z)().siteConfig,r=void 0===n?{}:n;return c.createElement(c.Fragment,null,c.createElement("h2",null,"Who is Using This?"),c.createElement("p",null,"Here are some users of OpenAPI Generator"),c.createElement("div",{className:"logos"},t.filter((function(e){return e.pinned})).map((function(e,t){return c.createElement(w,(0,a.Z)({key:t},e))}))),c.createElement("div",{className:"more-users"},c.createElement(u.Z,{className:i()("button button--outline button--primary button--lg",d.Z.productShowcaseSectionButton),to:(0,g.Z)("users")},"More ",r.title," Users")))}var Z=function(){var e=(0,p.Z)().siteConfig,t=void 0===e?{}:e,n=t.customFields,r=n.sponsors,o=void 0===r?{}:r,l=n.users,s=void 0===l?{}:l;return c.createElement(m.Z,{title:"Hello from "+t.title,description:"Description will go into a meta tag in <head />"},c.createElement("header",{className:i()("hero hero--primary",d.Z.heroBanner)},c.createElement("div",{className:"container"},c.createElement("h1",{className:"hero__title"},t.title),c.createElement("p",{className:"hero__subtitle"},t.tagline),c.createElement("div",{className:d.Z.buttons},c.createElement(u.Z,{className:i()("button button--outline button--secondary button--lg",d.Z.getStarted),to:(0,g.Z)("#try")},"Try It Out"),c.createElement(u.Z,{className:i()("button button--outline button--secondary button--lg",d.Z.getStarted),to:(0,g.Z)("docs/installation")},"Install")),c.createElement("div",{className:d.Z.buttons},c.createElement(u.Z,{className:i()("button button--outline button--secondary button--md",d.Z.getStarted),to:(0,g.Z)("docs/generators")},"Generators"),c.createElement(u.Z,{className:i()("button button--outline button--secondary button--md",d.Z.getStarted),to:(0,g.Z)("docs/customization")},"Customization"),c.createElement(u.Z,{className:i()("button button--outline button--secondary button--md",d.Z.getStarted),to:(0,g.Z)("docs/integrations")},"Integrations")))),c.createElement("div",{className:i()(d.Z.announcement,d.Z.announcementDark)},c.createElement("div",{className:d.Z.announcementInner},c.createElement("h2",null,c.createElement("b",null,"Sponsors")),c.createElement("p",null,"If you find OpenAPI Generator useful, please consider asking your company to ",c.createElement("a",{href:"https://opencollective.com/openapi_generator"},"become a sponsor"),"."),c.createElement("p",null,"You can also individually sponsor the project by ",c.createElement("a",{href:"https://opencollective.com/openapi_generator"},"becoming a backer"),"."),c.createElement("h3",null,"Thank you to our bronze sponsors!"),c.createElement("div",{className:i()("avatar",d.Z.bronzeSponsorAvatars)},o.filter((function(e){return e.bronze})).map((function(e){return c.createElement("a",{className:i()("avatar__photo-link bronze-sponsor"),href:e.infoLink,key:e.infoLink},c.createElement("img",{src:(0,g.Z)(e.image),alt:e.caption,title:e.caption,className:i()("avatar__photo avatar__photo--lg")}))}))))),c.createElement("main",null,E&&E.length&&c.createElement("section",{className:d.Z.features},c.createElement("div",{className:"features container"},c.createElement("div",{className:"row"},E.map((function(e,t){return c.createElement(y,(0,a.Z)({key:t},e))}))))),v&&v.length&&c.createElement("section",{className:d.Z.callout},c.createElement("div",{className:"callout container"},v.map((function(e,t){return c.createElement(b,(0,a.Z)({key:t},e))}))))),s&&s.length&&c.createElement("div",{className:i()(d.Z.announcement,d.Z.announcementLight)},c.createElement("div",{className:i()(d.Z.productShowcaseSection,d.Z.announcementInner)},c.createElement(S,{users:s}))),c.createElement("div",{className:i()(d.Z.announcement,d.Z.announcementDark)},'"OpenAPI Tools" and "OpenAPI Generator" are not affiliated with OpenAPI Initiative (OAI)'))}},4184:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var l=r.apply(null,n);l&&e.push(l)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},9578:function(e,t){"use strict";t.Z={heroBanner:"heroBanner_UJJx",announcement:"announcement_FsS0",announcementDark:"announcementDark_tzC4",announcementLight:"announcementLight_HMMK",announcementInner:"announcementInner_RsrQ",productShowcaseSection:"productShowcaseSection_hcFr",logos:"logos_NYVn",productShowcaseSectionLogo:"productShowcaseSectionLogo_B5I8",productShowcaseSectionButton:"productShowcaseSectionButton_UIEQ",bronzeSponsorAvatars:"bronzeSponsorAvatars_lQjW",buttons:"buttons_pzbO",features:"features_keug",callout:"callout_OSpz",calloutRow:"calloutRow_vO4K",featureImage:"featureImage_yA8i",mediaLink:"mediaLink_Ii43",indexCtasGitHubButtonWrapper:"indexCtasGitHubButtonWrapper_AOht",indexCtasGitHubButton:"indexCtasGitHubButton_sMIS"}}}]);