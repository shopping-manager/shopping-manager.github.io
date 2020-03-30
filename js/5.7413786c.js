(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"48a1":function(e,t,o){"use strict";var s=o("5456"),a=o.n(s);a.a},"4a11":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-page",{staticClass:"page-col"},[o("h2",[e._v("Report problem in a store")]),e.reportDone?e._e():[o("p",[e._v("For which reason would you like to report a problem about this store?")]),o("q-list",{attrs:{bordered:"",padding:""}},e._l(e.listItems,(function(t,s){return o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:s,attrs:{tag:"label"}},[o("q-item-section",{attrs:{avatar:""}},[o("q-radio",{attrs:{val:t.val},model:{value:e.chosenReason,callback:function(t){e.chosenReason=t},expression:"chosenReason"}})],1),o("q-item-section",[o("q-item-label",[e._v(e._s(t.name))]),o("q-item-label",{attrs:{caption:""}},[e._v(e._s(t.desc))])],1)],1)})),1),o("q-btn",{staticClass:"q-mt-md",attrs:{color:"accent",icon:"o_send",rounded:"",label:"Submit report"},on:{click:e.submitReport}})],e.reportDone?[o("q-icon",{staticStyle:{"font-size":"6rem"},attrs:{name:"o_sentiment_satisfied_alt",color:"primary"}}),o("h4",[e._v("Thank you!")]),o("p",[e._v("We will treat your report soon. We appreciate your efforts helping the community. Because we're all in this together!")])]:e._e()],2)},a=[],n={name:"ReportStoreProblem",data:function(){return{reportDone:!1,chosenReason:"cleanliness",listItems:[{name:"Closed",val:"closed",desc:"Store has ceased business for the duration of the crisis, although is is shown open on this service."},{name:"Severely short on supplies",val:"routine_shortage",desc:"Store has shortages of essential items in many sections."},{name:"Unhygienic",val:"hygiene",desc:"Cleanliness is not treated seriously. "},{name:"Bad service",val:"bad_service",desc:"Store associates do not offer good service to guests. They are rude or deny some help when it is needed. The current times are difficult for everybody; a little bit of good service makes the day better for everyone."},{name:"Overly crowded",val:"no_social_distancing",desc:"Patrons do not respect the social distancing measures. Store employees do not take care of enforcing them. Crowding is excessive"},{name:"Price hike / speculation",val:"speculation",desc:"Essential items are priced much higher than usual (beyond normal cost increases due to more challenging supply). Shop owner may take advantage of the situation."}]}},methods:{submitReport:function(){this.reportDone=!0}}},i=n,r=(o("48a1"),o("2877")),c=o("eebe"),l=o.n(c),d=o("9989"),m=o("1c1c"),u=o("66e5"),p=o("4074"),h=o("3786"),v=o("0170"),f=o("9c40"),b=o("0016"),y=o("714f"),g=Object(r["a"])(i,s,a,!1,null,null,null);t["default"]=g.exports;l()(g,"components",{QPage:d["a"],QList:m["a"],QItem:u["a"],QItemSection:p["a"],QRadio:h["a"],QItemLabel:v["a"],QBtn:f["a"],QIcon:b["a"]}),l()(g,"directives",{Ripple:y["a"]})},5456:function(e,t,o){}}]);