(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4769c8f8"],{"99af":function(e,t,a){"use strict";var n=a("23e7"),r=a("da84"),l=a("d039"),d=a("e8b5"),i=a("861d"),o=a("7b0b"),s=a("07fa"),c=a("8418"),u=a("65f0"),h=a("1dde"),g=a("b622"),m=a("2d00"),p=g("isConcatSpreadable"),f=9007199254740991,b="Maximum allowed index exceeded",v=r.TypeError,x=m>=51||!l((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),R=h("concat"),E=function(e){if(!i(e))return!1;var t=e[p];return void 0!==t?!!t:d(e)},T=!x||!R;n({target:"Array",proto:!0,forced:T},{concat:function(e){var t,a,n,r,l,d=o(this),i=u(d,0),h=0;for(t=-1,n=arguments.length;t<n;t++)if(l=-1===t?d:arguments[t],E(l)){if(r=s(l),h+r>f)throw v(b);for(a=0;a<r;a++,h++)a in l&&c(i,h,l[a])}else{if(h>=f)throw v(b);c(i,h++,l)}return i.length=h,i}})},b899:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),a("vxe-grid",{ref:"xGrid",attrs:{border:"","show-overflow":"","keep-source":"",height:"460",loading:e.loading,data:e.tableData,columns:e.tableColumn,"toolbar-config":e.tableToolbar,"edit-config":{trigger:"click",mode:"row"}},on:{"checkbox-change":e.checkboxChangeEvent,"checkbox-all":e.checkboxChangeEvent},scopedSlots:e._u([{key:"top",fn:function(){return[a("el-alert",{attrs:{type:"warning",title:"已选择 "+e.selectRecords.length+" 项",closable:!1,"show-icon":""}})]},proxy:!0},{key:"toolbar_buttons",fn:function(){return[a("el-button",{on:{click:e.insertEvent}},[e._v("新增")]),a("el-button",{on:{click:e.saveEvent}},[e._v("保存")])]},proxy:!0}])}),a("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),a("pre",[e._v("    "),a("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),a("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"tip"},[e._v(" 具体兼容请查看 "),a("a",{staticClass:"link",attrs:{href:"https://github.com/x-extends/vxe-table-plugin-element/tree/v2",target:"_blank"}},[e._v("vxe-table-plugin-element")]),e._v(" 插件的 API"),a("br"),a("span",{staticClass:"red"},[e._v("（注：该示例仅供参考，具体逻辑请自行实现）")])])}],l=(a("99af"),a("4de4"),a("d3b7"),a("b0c0"),{data:function(){return{loading:!1,tableData:[],selectRecords:[],tableColumn:[{type:"checkbox",width:60},{type:"seq",title:"Number",width:80},{field:"name",title:"ElInput",minWidth:140,editRender:{name:"ElInput"}},{field:"role",title:"ElAutocomplete",width:160,editRender:{name:"ElAutocomplete",props:{fetchSuggestions:this.roleFetchSuggestions}}},{field:"age",title:"ElInputNumber",width:160,editRender:{name:"ElInputNumber",props:{max:35,min:18}}},{field:"sex",title:"ElSelect",width:140,editRender:{name:"ElSelect",options:[]}},{field:"sex1",title:"ElSelect（不建议放在单元格）",width:260,editRender:{name:"ElSelect",options:[],props:{multiple:!0,clearable:!0}}},{field:"sex2",title:"ElSelect",width:140,editRender:{name:"ElSelect",optionGroups:[],props:{clearable:!0}}},{field:"region",title:"ElCascader",width:200,editRender:{name:"ElCascader",props:{options:[]}}},{field:"date",title:"ElDatePicker",width:200,editRender:{name:"ElDatePicker",props:{type:"date",format:"yyyy/MM/dd"}}},{field:"date1",title:"DateTimePicker",width:220,editRender:{name:"ElDatePicker",props:{type:"datetime",format:"yyyy-MM-dd HH:mm:ss"}}},{field:"date5",title:"ElTimeSelect",width:200,editRender:{name:"ElTimeSelect",props:{pickerOptions:{start:"08:30",step:"00:15",end:"18:30"}}}},{field:"flag",title:"ElSwitch",width:100,cellRender:{name:"ElSwitch"}},{field:"rate",title:"ElRate",width:200,cellRender:{name:"ElRate"}}],sexList:[{label:"",value:""},{label:"男",value:"1"},{label:"女",value:"0"}],regionList:[{label:"北京",value:1,children:[{value:3,label:"东城区"},{value:4,label:"西城区"}]},{label:"上海",value:21,children:[{value:23,label:"黄浦区"},{value:24,label:"卢湾区"}]},{label:"广东",value:42,children:[{value:43,label:"广州市"},{value:67,label:"深圳市"}]}],tableToolbar:{slots:{buttons:"toolbar_buttons"}},restaurants:[{value:"前端",name:"前端"},{value:"后端",name:"后端"},{value:"开发",name:"开发"},{value:"测试",name:"测试"}],demoCodes:['\n        <vxe-grid\n          border\n          show-overflow\n          keep-source\n          ref="xGrid"\n          height="460"\n          :loading="loading"\n          :data="tableData"\n          :columns="tableColumn"\n          :toolbar-config="tableToolbar"\n          :edit-config="{trigger: \'click\', mode: \'row\'}"\n          @checkbox-change="checkboxChangeEvent"\n          @checkbox-all="checkboxChangeEvent">\n          <template #top>\n            <el-alert type="warning" :title="`已选择 ${selectRecords.length} 项`" :closable="false" show-icon></el-alert>\n          </template>\n          <template #toolbar_buttons>\n            <el-button @click="insertEvent">新增</el-button>\n            <el-button @click="saveEvent">保存</el-button>\n          </template>\n        </vxe-grid>\n        ',"\n        export default {\n          data () {\n            return {\n              loading: false,\n              tableData: [],\n              selectRecords: [],\n              tableColumn: [\n                { type: 'checkbox', width: 60 },\n                { type: 'seq', title: 'Number', width: 80 },\n                { field: 'name', title: 'ElInput', minWidth: 140, editRender: { name: 'ElInput' } },\n                { field: 'role', title: 'ElAutocomplete', width: 160, editRender: { name: 'ElAutocomplete', props: { fetchSuggestions: this.roleFetchSuggestions } } },\n                { field: 'age', title: 'ElInputNumber', width: 160, editRender: { name: 'ElInputNumber', props: { max: 35, min: 18 } } },\n                { field: 'sex', title: 'ElSelect', width: 140, editRender: { name: 'ElSelect', options: [] } },\n                { field: 'sex1', title: 'ElSelect（不建议放在单元格）', width: 260, editRender: { name: 'ElSelect', options: [], props: { multiple: true, clearable: true } } },\n                { field: 'sex2', title: 'ElSelect', width: 140, editRender: { name: 'ElSelect', optionGroups: [], props: { clearable: true } } },\n                { field: 'region', title: 'ElCascader', width: 200, editRender: { name: 'ElCascader', props: { options: [] } } },\n                { field: 'date', title: 'ElDatePicker', width: 200, editRender: { name: 'ElDatePicker', props: { type: 'date', format: 'yyyy/MM/dd' } } },\n                { field: 'date1', title: 'DateTimePicker', width: 220, editRender: { name: 'ElDatePicker', props: { type: 'datetime', format: 'yyyy-MM-dd HH:mm:ss' } } },\n                { field: 'date5', title: 'ElTimeSelect', width: 200, editRender: { name: 'ElTimeSelect', props: { pickerOptions: { start: '08:30', step: '00:15', end: '18:30' } } } },\n                { field: 'flag', title: 'ElSwitch', width: 100, cellRender: { name: 'ElSwitch' } },\n                { field: 'rate', title: 'ElRate', width: 200, cellRender: { name: 'ElRate' } }\n              ],\n              sexList: [\n                { label: '', value: '' },\n                { label: '男', value: '1' },\n                { label: '女', value: '0' }\n              ],\n              regionList: [\n                {\n                  label: '北京',\n                  value: 1,\n                  children: [\n                    { value: 3, label: '东城区' },\n                    { value: 4, label: '西城区' }\n                  ]\n                },\n                {\n                  label: '上海',\n                  value: 21,\n                  children: [\n                    { value: 23, label: '黄浦区' },\n                    { value: 24, label: '卢湾区' }\n                  ]\n                },\n                {\n                  label: '广东',\n                  value: 42,\n                  children: [\n                    { value: 43, label: '广州市' },\n                    { value: 67, label: '深圳市' }\n                  ]\n                }\n              ],\n              tableToolbar: {\n                slots: {\n                  buttons: 'toolbar_buttons'\n                }\n              },\n              restaurants: [\n                { value: '前端', name: '前端' },\n                { value: '后端', name: '后端' },\n                { value: '开发', name: '开发' },\n                { value: '测试', name: '测试' }\n              ]\n            }\n          },\n          created () {\n            this.loading = true\n            setTimeout(() => {\n              this.tableData = [\n                { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex1: [], region: [], age: 28, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 5, rate1: 59, flag: false, address: 'Shenzhen' },\n                { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: '1', sex1: [], region: [], age: 22, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 2, rate1: 22, flag: false, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: '0', sex1: [], region: [], age: 32, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 3, rate1: 12, flag: false, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '0', sex1: ['1', '0'], region: [], age: 23, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', color1: '', tree1: '', tree2: [], date7: '', rate: 33, rate1: 4, flag: true, address: 'Shenzhen' },\n                { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: '0', sex1: ['1', '0'], region: [], age: 30, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', color1: '', tree1: '', tree2: [], date7: '', rate: 0, rate1: 15, flag: true, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: '0', sex1: [], region: [], age: 21, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 3, rate1: 73, flag: false, address: 'Shenzhen' },\n                { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: '1', sex1: ['1'], region: [], age: 29, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 0, rate1: 0, flag: true, address: 'Guangzhou' },\n                { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: '1', sex1: [], region: [], age: 35, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 2, rate1: 14, flag: false, address: 'Shenzhen' },\n                { id: 10009, name: 'Test9', nickname: 'T9', role: 'Test', sex: '1', sex1: ['0'], region: [], age: 24, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 3, rate1: 52, flag: false, address: 'Shenzhen' },\n                { id: 100010, name: 'Test10', nickname: 'T10', role: 'Develop', sex: '1', sex1: [], region: [], age: 20, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 4, rate1: 83, flag: false, address: 'Guangzhou' }\n              ]\n              this.loading = false\n            }, 500)\n            this.tableColumn[5].editRender.options = this.sexList\n            this.tableColumn[6].editRender.options = this.sexList\n            this.tableColumn[8].editRender.props.options = this.regionList\n            this.findSexGroupList()\n          },\n          methods: {\n            findSexGroupList () {\n              const sexGroupList = [\n                {\n                  label: '分组1',\n                  options: [\n                    {\n                      label: '男',\n                      value: '1'\n                    }\n                  ]\n                },\n                {\n                  label: '分组2',\n                  options: [\n                    {\n                      label: '女',\n                      value: '0'\n                    }\n                  ]\n                }\n              ]\n              this.tableColumn[7].editRender.optionGroups = sexGroupList\n            },\n            insertEvent () {\n              const xGrid = this.$refs.xGrid\n              const record = {\n                role: '',\n                age: 18,\n                sex1: [],\n                region: [],\n                flag: false,\n                rate: 2\n              }\n              xGrid.insert(record).then(({ row }) => xGrid.setEditRow(row))\n            },\n            saveEvent () {\n              const { insertRecords, removeRecords, updateRecords } = this.$refs.xGrid.getRecordset()\n              if (insertRecords.length || removeRecords.length || updateRecords.length) {\n                this.$alert(`insertRecords=${insertRecords.length}; removeRecords=${removeRecords.length}; updateRecords=${updateRecords.length}`)\n              } else {\n                this.$alert('数据未改动！')\n              }\n            },\n            roleFetchSuggestions (queryString, cb) {\n              const restaurants = this.restaurants\n              const results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants\n              clearTimeout(this.timeout)\n              this.timeout = setTimeout(() => {\n                cb(results)\n              }, 1000 * Math.random())\n            },\n            createStateFilter (queryString) {\n              return (state) => {\n                return (state.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0)\n              }\n            },\n            checkboxChangeEvent () {\n              this.selectRecords = this.$refs.xGrid.getCheckboxRecords()\n            }\n          }\n        }\n        "]}},created:function(){var e=this;this.loading=!0,setTimeout((function(){e.tableData=[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"0",sex1:[],region:[],age:28,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:5,rate1:59,flag:!1,address:"Shenzhen"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"1",sex1:[],region:[],age:22,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:2,rate1:22,flag:!1,address:"Guangzhou"},{id:10003,name:"Test3",nickname:"T3",role:"PM",sex:"0",sex1:[],region:[],age:32,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:3,rate1:12,flag:!1,address:"Shanghai"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"0",sex1:["1","0"],region:[],age:23,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",color1:"",tree1:"",tree2:[],date7:"",rate:33,rate1:4,flag:!0,address:"Shenzhen"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"0",sex1:["1","0"],region:[],age:30,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",color1:"",tree1:"",tree2:[],date7:"",rate:0,rate1:15,flag:!0,address:"Shanghai"},{id:10006,name:"Test6",nickname:"T6",role:"Designer",sex:"0",sex1:[],region:[],age:21,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:3,rate1:73,flag:!1,address:"Shenzhen"},{id:10007,name:"Test7",nickname:"T7",role:"Test",sex:"1",sex1:["1"],region:[],age:29,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:0,rate1:0,flag:!0,address:"Guangzhou"},{id:10008,name:"Test8",nickname:"T8",role:"Develop",sex:"1",sex1:[],region:[],age:35,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:2,rate1:14,flag:!1,address:"Shenzhen"},{id:10009,name:"Test9",nickname:"T9",role:"Test",sex:"1",sex1:["0"],region:[],age:24,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:3,rate1:52,flag:!1,address:"Shenzhen"},{id:100010,name:"Test10",nickname:"T10",role:"Develop",sex:"1",sex1:[],region:[],age:20,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:4,rate1:83,flag:!1,address:"Guangzhou"}],e.loading=!1}),500),this.tableColumn[5].editRender.options=this.sexList,this.tableColumn[6].editRender.options=this.sexList,this.tableColumn[8].editRender.props.options=this.regionList,this.findSexGroupList()},methods:{findSexGroupList:function(){var e=[{label:"分组1",options:[{label:"男",value:"1"}]},{label:"分组2",options:[{label:"女",value:"0"}]}];this.tableColumn[7].editRender.optionGroups=e},insertEvent:function(){var e=this.$refs.xGrid,t={role:"",age:18,sex1:[],region:[],flag:!1,rate:2};e.insert(t).then((function(t){var a=t.row;return e.setEditRow(a)}))},saveEvent:function(){var e=this.$refs.xGrid.getRecordset(),t=e.insertRecords,a=e.removeRecords,n=e.updateRecords;t.length||a.length||n.length?this.$alert("insertRecords=".concat(t.length,"; removeRecords=").concat(a.length,"; updateRecords=").concat(n.length)):this.$alert("数据未改动！")},roleFetchSuggestions:function(e,t){var a=this.restaurants,n=e?a.filter(this.createStateFilter(e)):a;clearTimeout(this.timeout),this.timeout=setTimeout((function(){t(n)}),1e3*Math.random())},createStateFilter:function(e){return function(t){return 0===t.name.toLowerCase().indexOf(e.toLowerCase())}},checkboxChangeEvent:function(){this.selectRecords=this.$refs.xGrid.getCheckboxRecords()}}}),d=l,i=a("2877"),o=Object(i["a"])(d,n,r,!1,null,null,null);t["default"]=o.exports}}]);