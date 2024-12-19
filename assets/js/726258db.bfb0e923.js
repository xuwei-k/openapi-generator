"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2309],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),h=o,d=u["".concat(i,".").concat(h)]||u[h]||m[h]||r;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=h;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:o,l[1]=p;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4456:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),l=["components"],p={id:"installation",title:"CLI Installation"},i=void 0,s={unversionedId:"installation",id:"installation",title:"CLI Installation",description:"There are a number of ways to use OpenAPI Generator. This page documents how to install the CLI artifact.",source:"@site/../docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",draft:!1,editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/installation.md",tags:[],version:"current",lastUpdatedBy:"haruna",lastUpdatedAt:1734588756,formattedLastUpdatedAt:"Dec 19, 2024",frontMatter:{id:"installation",title:"CLI Installation"},sidebar:"docs",next:{title:"Plugins",permalink:"/docs/plugins"}},c={},u=[{value:"npm",id:"npm",level:2},{value:"Homebrew",id:"homebrew",level:2},{value:"Scoop",id:"scoop",level:2},{value:"PyPI",id:"pypi",level:2},{value:"Docker",id:"docker",level:2},{value:"JAR",id:"jar",level:2},{value:"Bash Launcher Script",id:"bash-launcher-script",level:2}],m={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There are a number of ways to use OpenAPI Generator. This page documents how to install the CLI artifact.\nInstalling OpenAPI Generator's CLI tool allows users to generate all available generators from the command line."),(0,r.kt)("p",null,"Some of the following are cross-platform options and some are not, these are called out where possible."),(0,r.kt)("h2",{id:"npm"},"npm"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Platform(s)"),": Linux, macOS, Windows")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openapitools/openapi-generator-cli"},"npm package wrapper")," is cross-platform wrapper around the .jar artifact. It works by providing a CLI wrapper atop the JAR's command line options. This gives a simple interface layer which normalizes usage of the command line across operating systems, removing some differences in how options or switches are passed to the tool (depending on OS).\n",(0,r.kt)("strong",{parentName:"p"},"Install")," the latest version of the tool globally, exposing the CLI on the command line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @openapitools/openapi-generator-cli -g\n")),(0,r.kt)("p",null,"To install a specific version of the tool, pass the version during installation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openapi-generator-cli version-manager set 7.9.0\n")),(0,r.kt)("p",null,"To install the tool as a dev dependency in your current project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @openapitools/openapi-generator-cli -D\n")),(0,r.kt)("p",null,"Then, ",(0,r.kt)("strong",{parentName:"p"},"generate")," a ruby client from a valid ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/3_0/petstore.yaml"},"petstore.yaml")," doc:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx @openapitools/openapi-generator-cli generate -i petstore.yaml -g ruby -o /tmp/test/\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"npx")," will execute a globally available ",(0,r.kt)("inlineCode",{parentName:"p"},"openapi-generator"),", and if not found it will fall back to project-local commands. The result is that the above command will work regardless of which installation method you've chosen.")),(0,r.kt)("h2",{id:"homebrew"},"Homebrew"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Platform(s)"),": macOS")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Install")," via ",(0,r.kt)("a",{parentName:"p",href:"https://brew.sh/"},"homebrew"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install openapi-generator\n")),(0,r.kt)("p",null,"Then, ",(0,r.kt)("strong",{parentName:"p"},"generate")," a ruby client from a valid ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/3_0/petstore.yaml"},"petstore.yaml")," doc:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openapi-generator generate -i petstore.yaml -g ruby -o /tmp/test/\n")),(0,r.kt)("h2",{id:"scoop"},"Scoop"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Platform(s)"),": Windows")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Install")," via ",(0,r.kt)("a",{parentName:"p",href:"https://scoop.sh/"},"scoop"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"scoop install openapi-generator-cli\n")),(0,r.kt)("p",null,"If you don't have java installed, you can also install it via ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ScoopInstaller/Java/"},"scoop java bucket"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"scoop bucket add java\nscoop install openjdk\n")),(0,r.kt)("p",null,"Then, ",(0,r.kt)("strong",{parentName:"p"},"generate")," a ruby client from a valid ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/3_0/petstore.yaml"},"petstore.yaml")," doc:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"openapi-generator-cli generate -i petstore.yaml -g ruby\n")),(0,r.kt)("h2",{id:"pypi"},"PyPI"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Platform(s)"),": Linux, macOS, Windows")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Install")," via ",(0,r.kt)("a",{parentName:"p",href:"https://pypi.org/"},"PyPI")," (",(0,r.kt)("inlineCode",{parentName:"p"},"java")," executable is needed to run):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pip install openapi-generator-cli\n")),(0,r.kt)("p",null,"You can also install with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/activeviam/jdk4py"},"jdk4py")," instead of java binary. (python>=3.10 is required)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pip install openapi-generator-cli[jdk4py]\n")),(0,r.kt)("h2",{id:"docker"},"Docker"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Platform(s)"),": Linux, macOS, Windows")),(0,r.kt)("p",null,"The OpenAPI Generator Docker image acts as a standalone executable. It can be used as an alternative to installing via homebrew, or for developers who are unable to install Java or upgrade the installed version."),(0,r.kt)("p",null,"To generate code from a valid ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/3_0/petstore.yaml"},"petstore.yaml")," doc with this image, you'll need to mount a local location as a volume.\nYou'll then need to output the generated code to this mapped volume. Everything else works the same as if you ran the command on your host machine."),(0,r.kt)("p",null,"Here's an example generating a Go client:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm \\\n  -v ${PWD}:/local openapitools/openapi-generator-cli generate \\\n  -i /local/petstore.yaml \\\n  -g go \\\n  -o /local/out/go\n")),(0,r.kt)("h2",{id:"jar"},"JAR"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Platform(s)"),": Linux, macOS, Windows")),(0,r.kt)("p",null,"If you're looking for the latest stable version, you can grab it directly from Maven.org (Java 11 runtime at a minimum):"),(0,r.kt)("p",null,"JAR location: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/7.9.0/openapi-generator-cli-7.9.0.jar")),(0,r.kt)("p",null,"For ",(0,r.kt)("strong",{parentName:"p"},"Mac/Linux")," users:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/7.9.0/openapi-generator-cli-7.9.0.jar -O openapi-generator-cli.jar\n")),(0,r.kt)("p",null,"For ",(0,r.kt)("strong",{parentName:"p"},"Windows")," users, you will need to install ",(0,r.kt)("a",{parentName:"p",href:"http://gnuwin32.sourceforge.net/packages/wget.htm"},"wget")," or you can use Invoke-WebRequest in PowerShell (3.0+), e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"Invoke-WebRequest -OutFile openapi-generator-cli.jar https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/7.9.0/openapi-generator-cli-7.9.0.jar\n")),(0,r.kt)("p",null,"After downloading the JAR, run ",(0,r.kt)("inlineCode",{parentName:"p"},"java -jar openapi-generator-cli.jar help")," to show the usage."),(0,r.kt)("p",null,"For Mac users, please make sure Java 11 is installed (Tips: run ",(0,r.kt)("inlineCode",{parentName:"p"},"java -version")," to check the version), and export ",(0,r.kt)("inlineCode",{parentName:"p"},"JAVA_HOME")," in order to use the supported Java version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export JAVA_HOME=`/usr/libexec/java_home -v 1.11`\nexport PATH=${JAVA_HOME}/bin:$PATH\n")),(0,r.kt)("h2",{id:"bash-launcher-script"},"Bash Launcher Script"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Platform(s)"),": Linux, macOS, Windows (variable)")),(0,r.kt)("p",null,"One downside to manual JAR downloads is that you don't keep up-to-date with the latest released version. We have a Bash launcher script at ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/OpenAPITools/openapi-generator/master/bin/utils/openapi-generator-cli.sh"},"bin/utils/openapi-generator-cli.sh")," which solves this problem."),(0,r.kt)("p",null,"To install the launcher script, copy the contents of the script to a location on your path and make the script executable."),(0,r.kt)("p",null,"An example of setting this up (NOTE: Always evaluate scripts curled from external systems before executing them)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/bin/openapitools\ncurl https://raw.githubusercontent.com/OpenAPITools/openapi-generator/master/bin/utils/openapi-generator-cli.sh > ~/bin/openapitools/openapi-generator-cli\nchmod u+x ~/bin/openapitools/openapi-generator-cli\nexport PATH=$PATH:~/bin/openapitools/\n")),(0,r.kt)("p",null,"Now, ",(0,r.kt)("inlineCode",{parentName:"p"},"openapi-generator-cli"),' is "installed". On invocation, it will query the GitHub repository for the most recently released version. If this matches the last downloaded jar,\nit will execute as normal. If a newer version is found, the script will download the latest release and execute it.'),(0,r.kt)("p",null,"If you need to invoke an older version of the generator, you can define the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"OPENAPI_GENERATOR_VERSION")," either ad hoc or globally. You can export this variable if you'd like to persist a specific release version."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Execute latest released openapi-generator-cli\nopenapi-generator-cli version\n\n# Execute version 3.1.0 for the current invocation, regardless of the latest released version\nOPENAPI_GENERATOR_VERSION=3.1.0 openapi-generator-cli version\n\n# Execute version 3.1.0-SNAPSHOT for the current invocation\nOPENAPI_GENERATOR_VERSION=3.1.0-SNAPSHOT openapi-generator-cli version\n\n# Execute version 3.0.2 for every invocation in the current shell session\nexport OPENAPI_GENERATOR_VERSION=3.0.2\nopenapi-generator-cli version # is 3.0.2\nopenapi-generator-cli version # is also 3.0.2\n\n# To "install" a specific version, set the variable in .bashrc/.bash_profile\necho "export OPENAPI_GENERATOR_VERSION=3.0.2" >> ~/.bashrc\nsource ~/.bashrc\nopenapi-generator-cli version # is always 3.0.2, unless any of the above overrides are done ad hoc\n')))}h.isMDXComponent=!0}}]);