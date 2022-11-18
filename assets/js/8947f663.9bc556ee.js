"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[905],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||s;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6280:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const s={},i="UI Walkthrough",o={unversionedId:"getting-started/ui-walkthrough",id:"getting-started/ui-walkthrough",title:"UI Walkthrough",description:'This page is intended to answer the question "What am I looking at?" for new Rancher UI developers who are navigating Rancher.',source:"@site/docs/getting-started/ui-walkthrough.md",sourceDirName:"getting-started",slug:"/getting-started/ui-walkthrough",permalink:"/dashboard/getting-started/ui-walkthrough",draft:!1,tags:[],version:"current",lastUpdatedAt:1668785205,formattedLastUpdatedAt:"Nov 18, 2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Development Environment",permalink:"/dashboard/getting-started/development_environment"},next:{title:"Building an Image for Container Registries",permalink:"/dashboard/guide/build-for-container-registry"}},l={},c=[{value:"1. Home Page",id:"1-home-page",level:2},{value:"2. Navigation",id:"2-navigation",level:2},{value:"2.1 Cluster Management",id:"21-cluster-management",level:3},{value:"2.2 Cluster Explorer",id:"22-cluster-explorer",level:3},{value:"3. Cluster Provisioning",id:"3-cluster-provisioning",level:2},{value:"4. Kubernetes Configuration",id:"4-kubernetes-configuration",level:2},{value:"5. Users, Permissions and Authentication",id:"5-users-permissions-and-authentication",level:2},{value:"5. Helm Chart Applications",id:"5-helm-chart-applications",level:2},{value:"6. Rancher Plugins",id:"6-rancher-plugins",level:2},{value:"7. Node Templates",id:"7-node-templates",level:2}],h={toc:c};function u(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ui-walkthrough"},"UI Walkthrough"),(0,r.kt)("p",null,'This page is intended to answer the question "What am I looking at?" for new Rancher UI developers who are navigating Rancher.'),(0,r.kt)("p",null,"This is not an exhaustive guide to Rancher. For more details, see the docs ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/"},"https://rancher.com/docs/rancher/v2.6/en/")," or the other pages of these developer docs."),(0,r.kt)("h2",{id:"1-home-page"},"1. Home Page"),(0,r.kt)("p",null,"Rancher is basically a command-and-control center for centralizing management of Kubernetes clusters. After logging in, the first thing you see is the Home page, which gives you a brief summary of the clusters managed by Rancher and their status:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rancher home page",src:a(8327).Z,width:"2774",height:"1654"})),(0,r.kt)("h2",{id:"2-navigation"},"2. Navigation"),(0,r.kt)("p",null,"There are two main areas of Rancher: Cluster Management and Cluster Explorer."),(0,r.kt)("h3",{id:"21-cluster-management"},"2.1 Cluster Management"),(0,r.kt)("p",null,"Cluster Management is intended primarily to be used by admins. It is the command-and-control center for someone who wishes to manage many Kubernetes clusters, such as by configuring an external authentication provider that will allow someone's GitHub or Amazon credentials to give users access to multiple clusters managed by Rancher. This is also the area where you can perform Kubernetes admin operations such as upgrading Kubernetes itself."),(0,r.kt)("p",null,"To get to Cluster Management, go to the upper left corner and click ",(0,r.kt)("strong",{parentName:"p"},"\u2261 > Cluster Management.")," The main page is a list of all the downstream clusters managed by Rancher, plus the special ",(0,r.kt)("inlineCode",{parentName:"p"},"local")," cluster that Rancher itself is installed on."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Cluster list in cluster management",src:a(1176).Z,width:"2786",height:"1046"})),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"local")," cluster is where all the data for managing downstream clusters is stored. It contains all the data for Rancher at a global (multi-cluster) scope, such as permission definitions and a spec for the desired state of all downstream clusters."),(0,r.kt)("p",null,"Note that the list of clusters in Cluster Management leads to two different cluster detail views. The first is accessed by clicking the name of the cluster in the list of clusters. This detail page contains information about the cluster that is outside the scope of Kubernetes itself, but still of interest to an admin. For example, it contains a list of machines with shortcuts to let you SSH into each of them, and the ",(0,r.kt)("strong",{parentName:"p"},"Snapshots")," tab gives you a list of snapshots that an admin can use to restore the Kubernetes cluster from backup:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Cluster detail page in cluster management",src:a(369).Z,width:"3052",height:"1274"})),(0,r.kt)("p",null,"The other cluster detail page is Cluster Explorer, explained below."),(0,r.kt)("h3",{id:"22-cluster-explorer"},"2.2 Cluster Explorer"),(0,r.kt)("p",null,"The other cluster detail view is reached by clicking the ",(0,r.kt)("strong",{parentName:"p"},"Explore")," button in the list of clusters in Cluster Management. This leads to what we call Cluster Explorer, and it is the other main area of the core Rancher product:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Cluster explorer main dashboard",src:a(6565).Z,width:"2760",height:"1640"})),(0,r.kt)("p",null,"Unlike Cluster Management, Cluster Explorer is primarily intended to be used by standard Kubernetes users, or users who are interested in installing applications on an individual cluster."),(0,r.kt)("p",null,"The scope of what you can manage with Cluster Explorer is the same as the scope of what you can manage with the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," command line tool for upstream Kubernetes. Cluster Explorer provides forms that make it easier to create, edit and delete the same Kubernetes resources that you can manage with ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),". You can deploy and expose applications with ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," or with forms in Cluster Explorer, whichever is easier."),(0,r.kt)("p",null,"Similar to how ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," works, your view in Cluster Explorer can be filtered by namespaces. When you list resources in ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),", the results are limited to a (configurable) default namespace if not otherwise specified."),(0,r.kt)("p",null,"Through the top nav, Cluster Explorer also directly gives you ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," command line access for convenience:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kubectl access through Cluster Explorer",src:a(9342).Z,width:"1448",height:"272"})),(0,r.kt)("p",null,"In addition to letting you filter Kubernetes resources by namespace, the top nav of Cluster Explorer also lets you filter by project:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Namespace filtering in Cluster Explorer",src:a(9514).Z,width:"2742",height:"1200"})),(0,r.kt)("p",null,"So if you are ever looking for something in Cluster Explorer and you don't see it, you may need to change the namespace filtering in the top nav."),(0,r.kt)("p",null,'A project is a group of namespaces. Projects are a Rancher-created feature that did not have an equivalent in upstream Kubernetes at the time Rancher introduced them. Newer Kubernetes versions have a feature called "hierarchical namespaces" which provide the same concept of a group of namespaces, and projects may be re-implemented to take advantage of hierarchical namespaces in a later Rancher version.'),(0,r.kt)("p",null,"The purpose of a project is mainly to make it easier for admins to give users permission to access an entire group of namespaces at once. They are also used for multi-tenancy clusters, in which admins want to fence off a group of namespaces for users who will never have access to the entire cluster. Sometimes they are used for organizational purposes."),(0,r.kt)("h2",{id:"3-cluster-provisioning"},"3. Cluster Provisioning"),(0,r.kt)("p",null,"One of the core features of Rancher is cluster provisioning. Rancher offers a lot of flexibility in how you can install or set up a Kubernetes cluster through the Rancher UI. There are more details in the documentation (",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/"},"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/"),") which are too complicated to explain here, because there are many types of clusters that Rancher can manage, and Rancher can manage clusters that integrate with different technology stacks."),(0,r.kt)("p",null,"In a typical use case, Rancher will take your credentials for a cloud infrastructure provider, such as AWS EC2 or Digital Ocean, and it will integrate with the API of that cloud infrastructure provider. Rancher can add new Linux servers in the cloud for you, and the cost of the resources that it provisions will be billed to the user's account associated with the cloud credentials that Rancher is using. Then Rancher installs Kubernetes on those nodes and provide a UI to add users to the cluster through Rancher, or deploy applications on the cluster, along with any other operation supported by upstream Kubernetes."),(0,r.kt)("p",null,"Usually, the first step to cluster provisioning is to get cloud credentials and give them to Rancher. Cloud credentials are listed in Cluster Management:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Cloud credentials",src:a(8139).Z,width:"2790",height:"1134"})),(0,r.kt)("p",null,"Rancher lets you create numerous different types of cloud credentials. These choices allow companies a large amount of flexibility, while providing a unified UI to manage clusters consistently:\n",(0,r.kt)("img",{alt:"Cloud credential creation",src:a(3299).Z,width:"2776",height:"1290"})),(0,r.kt)("p",null,"Using those credentials, Rancher can then set up Kubernetes clusters using the cloud provider that corresponds to their cloud credentials. There are also multiple options for the Kubernetes distribution that is used (RKE1, K3s or RKE2):"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Cluster provisioning overview",src:a(9413).Z,width:"2782",height:"1648"})),(0,r.kt)("p",null,"The below screenshot shows an example of creating an RKE2 cluster in Digital Ocean. Note that an existing cloud credential for Digital Ocean is selected at the top:\n",(0,r.kt)("img",{alt:"Cluster provisioning - Example of creating an RKE2 cluster in Digital Ocean",src:a(230).Z,width:"2774",height:"1652"})),(0,r.kt)("h2",{id:"4-kubernetes-configuration"},"4. Kubernetes Configuration"),(0,r.kt)("p",null,"From the list of clusters in Cluster Management, the context menu in each row exposes forms that let you configure any Kubernetes option from basic to advanced:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Editing a cluster from cluster management",src:a(5696).Z,width:"2778",height:"1160"})),(0,r.kt)("p",null,"Note that if you try to go to Edit Config for the special ",(0,r.kt)("inlineCode",{parentName:"p"},"local")," cluster that runs Rancher itself, the edit form is heavily restricted for security reasons:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Editing local cluster - restricted view",src:a(6550).Z,width:"2782",height:"1212"})),(0,r.kt)("p",null,"Whereas for downstream Kubernetes clusters, many more options are exposed:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Editing a downstream RKE2 cluster",src:a(8239).Z,width:"2768",height:"1638"})),(0,r.kt)("p",null,"When editing a Rancher-provisioned downstream RKE2 cluster, you can edit who can access the cluster, the CPU/memory and disk size of the nodes in the cluster, and all other options:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"More options for editing downstream RKE2 clusters",src:a(6029).Z,width:"2804",height:"1638"})),(0,r.kt)("p",null,"For documentation on these options, you would refer to the docs that correspond to the Kubernetes distribution you are using. For example, since an RKE2 cluster is being provisioned in this example, you would refer to the RKE2 documentation as the ultimate source of truth for information about those options: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rke2.io/"},"https://docs.rke2.io/")),(0,r.kt)("h2",{id:"5-users-permissions-and-authentication"},"5. Users, Permissions and Authentication"),(0,r.kt)("p",null,"Rancher's ",(0,r.kt)("strong",{parentName:"p"},"Users & Authentication")," section allows admins to manage all Rancher users who access to any of the clusters managed by Rancher:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Centralized user management",src:a(1491).Z,width:"2776",height:"1066"})),(0,r.kt)("p",null,"However, you can't assign someone to a cluster directly from the user list or detail views. To give a user access to a cluster, you have to navigate to a downstream cluster. You can add them from Edit Config for a cluster from the Cluster Management area, or you can add them from Cluster Explorer under ",(0,r.kt)("strong",{parentName:"p"},"Cluster > Cluster Members")," in the side nav.\n",(0,r.kt)("img",{alt:"Adding users to downstream cluster",src:a(1002).Z,width:"2810",height:"1650"})),(0,r.kt)("p",null,"Rancher integrates with multiple authentication providers, and provides forms to let you configure several auth providers from within Rancher:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Integrations with auth providers",src:a(8025).Z,width:"2766",height:"1400"})),(0,r.kt)("p",null,"It is considered a best practice to use a third-party auth provider to keep track of the identity of Rancher users."),(0,r.kt)("h2",{id:"5-helm-chart-applications"},"5. Helm Chart Applications"),(0,r.kt)("p",null,"Helm is Rancher's preferred tool for installing applications on Kubernetes. Cluster Explorer has a section designed to make it easier to install Helm chart apps by providing a catalog of apps to choose from:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Installing apps through cluster explorer",src:a(8338).Z,width:"2772",height:"1622"})),(0,r.kt)("p",null,"If you click an app in the catalog, you can then directly install the Helm chart app through Cluster Explorer. This example shows what it looks like to install the monitoring application:\n",(0,r.kt)("img",{alt:"Installing Helm chart app example",src:a(3341).Z,width:"2776",height:"1288"})),(0,r.kt)("p",null,"After installing a Helm chart app, you will then see all the Kubernetes resources installed by that app show up in Cluster Explorer. For example, after installing the monitoring app, if you go to Deployments in Cluster Explorer, you will see the Deployments that the monitoring Helm chart app has installed.\n",(0,r.kt)("img",{alt:"Results of installing a Helm chart app",src:a(1617).Z,width:"3048",height:"1234"})),(0,r.kt)("p",null,"It is not recommended to manually edit resources that are managed by a Helm chart; it is better to upgrade to a new version of the chart instead, because that will update the desired state of the app's resources for you. If you manually edit a resource managed by a Helm chart app, the change could be reverted the next time the Helm chart app is edited or upgraded."),(0,r.kt)("p",null,"Some official Rancher apps extend the functionality of Cluster Explorer when installed. For example, when the monitoring application is installed, a new ",(0,r.kt)("strong",{parentName:"p"},"Monitoring")," nav item is added to the side nav:\n",(0,r.kt)("img",{alt:"Monitoring integration",src:a(7621).Z,width:"2774",height:"1552"})),(0,r.kt)("p",null,"You can uninstall Helm chart apps by selecting the charts installed by the app and deleting them:\n",(0,r.kt)("img",{alt:"Uninstalling a Helm chart app",src:a(3018).Z,width:"1698",height:"1164"})),(0,r.kt)("p",null,"Many users extend the catalog of apps to choose from by adding Git repositories in Cluster Explorer:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Adding a Helm chart repository",src:a(1819).Z,width:"2774",height:"1040"})),(0,r.kt)("p",null,"After you add a Git repository, Rancher searches the repo for Helm chart apps and adds them to the catalog of available apps to install, which are available under ",(0,r.kt)("strong",{parentName:"p"},"Charts")," in the side nav. From there, you can install and upgrade the apps on your cluster through Cluster Explorer."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Adding sources for more third-party apps",src:a(572).Z,width:"2784",height:"1038"})),(0,r.kt)("h2",{id:"6-rancher-plugins"},"6. Rancher Plugins"),(0,r.kt)("p",null,'If you click the top left corner of Rancher, you get a menu that includes some plugins. "Plugins" is a term we use to describe a project that is developed separately from Rancher. But although the project is maintained in a separate GitHub repository, it can also extend and enhance the Rancher UI.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Third-party Rancher plugins",src:a(5997).Z,width:"696",height:"1224"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Continuous Delivery")," part of Rancher is a user interface for Fleet, a separate project that you can use even if you don't use Rancher. Fleet lets you define the desired state of up to a million clusters, and Rancher uses it under the hood to define the desired state of Rancher managed clusters. The docs on the Fleet project are here: ",(0,r.kt)("a",{parentName:"p",href:"https://fleet.rancher.io/"},"https://fleet.rancher.io/")," Fleet is not for basic use cases; it is intended to be used primarily by users managing large numbers of identical Kubernetes clusters."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Virtualization Management")," section is also a plugin. The source for that functionality is the Harvester project, which lets you manage Linux servers that may be on-premises. The docs for the Harvester project are here: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.0/"},"https://docs.harvesterhci.io/v1.0/")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example of a Rancher plugin - Harvester",src:a(5405).Z,width:"2786",height:"1294"})),(0,r.kt)("h2",{id:"7-node-templates"},"7. Node Templates"),(0,r.kt)("p",null,"You may notice that in Cluster Management, there is a section for RKE1 node templates. Node templates provide a way to capture details of machines, such as CPU, memory, and disk size. In V1 cluster provisioning, you must select a node template for each node pool in the RKE1 cluster."),(0,r.kt)("p",null,"Node templates make it more convenient to define node pools so that you don't have to fill in details of machine configuration repetitively. Admins can assign users permission to see them, and it can be convenient to give someone access to a node template without giving them access to the underlying cloud credentials, which could give them access to more cloud resources than necessary."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"RKE1 node templates",src:a(1479).Z,width:"3008",height:"898"})),(0,r.kt)("p",null,"For technical reasons that are better explained in the section on ",(0,r.kt)("a",{parentName:"p",href:"/dashboard/code-base-works/cluster-management-resources"},"cluster management resources,")," node templates are not a planned feature for V2 cluster provisioning. For V2 provinioning, you have to fill in the machine configuration details when you create or edit the Kubernetes cluster through Rancher."))}u.isMDXComponent=!0},1819:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/adding-a-helm-chart-repository-1b01917249f074d9d89895ec0cb632a9.png"},572:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/adding-sources-for-more-third-party-apps-ede689d37f9d59f58f3ab741ba977b40.png"},1002:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/adding-users-to-downstream-cluster-8f67ea08044e7381687bca0b34d529f2.png"},1491:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/centralized-user-management-a7be24d1209d62c074e34262a2ae123d.png"},3299:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cloud-credential-creation-3e715b1d47573f8b1b91b1d0301164fe.png"},8139:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cloud-credentials-98e4d6c48da0309453ae8ae3502d49d6.png"},369:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cluster-detail-page-in-cluster-management-6a04becc319fee89121dc3f0aa85c020.png"},6565:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cluster-explorer-main-dashboard-4ff9ac877c464efeb5e940f7d3a1585c.png"},1176:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cluster-management-cluster-list-235fa5b55ecf8a887c5c45d6831944ba.png"},9413:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cluster-provisioning-overview-fde8e0cff80818ecd4bd3c9d5a395e62.png"},230:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cluster-provisioning-rke2-digital-ocean-example-e6d50b895ab33b1b5df83339c620d2d5.png"},5696:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/editing-cluster-in-cluster-management-bb5d2ac06634d8f3c9ef94326577afd3.png"},8239:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/editing-downstream-rke2-k8s-cluster-8a5c4bad92619264b3b4589e20c067e7.png"},6550:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/editing-local-cluster-restricted-b3daf83ff421d7d606b5be8e0634f00c.png"},8327:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/home-c72db7b0cfd3d9281b4b773dee6d7d90.png"},8338:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/installing-apps-through-cluster-explorer-79fa3eb44b95dc2f122b0badf5968540.png"},3341:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/installing-helm-chart-app-example-fc619a6f95fa3aea3969acf50504d39b.png"},8025:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/integrations-with-auth-providers-539cc0bed91e4e2efe523e13f788f4db.png"},9342:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kubectl-access-through-cluster-explorer-bdc0ef095f113b0ef6f70ed1550c799e.png"},7621:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/monitoring-integration-753996385c91c6111891ccd19ff853ce.png"},6029:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/more-options-for-editing-downstream-rke2-cluster-708eac544bc3949c8138af144bf5c26f.png"},9514:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/namespace-filtering-in-cluster-explorer-5202705adceea5079fc8d1e6fc8d463c.png"},5405:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/plugin-example-harvester-006e4a0694c7b11a9635aea1b16c744a.png"},1617:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/results-of-installing-a-helm-chart-app-ffe86785d722819761a656181094d542.png"},1479:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rke1-node-templates-a3934dee883aa719636bb35a5ef319e2.png"},5997:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/third-party-rancher-plugins-0186679dbb3cfc8044d4e46e1b1b5cfb.png"},3018:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/uninstalling-a-helm-chart-app-01b5043f66cc784481015319b642ca77.png"}}]);