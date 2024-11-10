"use strict";(self.webpackChunkClientStrive=self.webpackChunkClientStrive||[]).push([[434],{5434:(_,d,l)=>{l.r(d),l.d(d,{PaymentModule:()=>A});var r=l(2382),m=l(9808),p=l(459),c=l(1446),t=l(1223),u=l(520);let y=(()=>{class n{constructor(e){this.http=e}getAllPayments(){return this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllPayments")}deletePaymentByPaymentId(e){return this.http.delete("https://freeapi.miniprojectideas.com/api/ClientStrive/DeletePaymentByPaymentId?paymentId="+e)}addUpdatePayment(e){return this.http.post("https://freeapi.miniprojectideas.com/api/ClientStrive/AddUpdatePayment",e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(u.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var Z=l(3225);const f=["modalElement"];function h(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"date"),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td")(13,"button",43),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw().editPayment(s)}),t._UZ(14,"i",44),t.qZA(),t.TgZ(15,"button",45),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw().deletePayments(s.projectPaymentId)}),t._UZ(16,"i",46),t.qZA()()()}if(2&n){const e=o.$implicit;t.xp6(2),t.Oqu(e.projectName),t.xp6(2),t.Oqu(e.amount),t.xp6(2),t.Oqu(e.paymentMode),t.xp6(2),t.Oqu(t.xi3(9,5,e.paymentDate,"yyyy-MM-dd HH:mm:ss")),t.xp6(3),t.Oqu(e.companyName)}}function g(n,o){if(1&n&&(t.TgZ(0,"option",47),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.Q6J("value",e.clientProjectId),t.xp6(1),t.Oqu(e.projectName)}}const v=[{path:"",component:(()=>{class n{constructor(e,a,i){this.paymentService=e,this.projectService=a,this.fb=i}ngOnInit(){this.getAllPayments(),this.getAllClientProjects(),this.paymentForm=this.fb.group({projectPaymentId:0,projectId:0,paymentDate:[],paymentMode:[],amount:0,naration:[]})}save(){this.paymentService.addUpdatePayment(this.paymentForm.value).subscribe(a=>{this.closeModal(),this.paymentForm.reset(),this.getAllPayments()})}getAllPayments(){this.paymentService.getAllPayments().subscribe(e=>{this.payments=e.data})}deletePayments(e){this.paymentService.deletePaymentByPaymentId(e).subscribe(a=>{this.getAllPayments()})}ngAfterViewInit(){this.modalInstance=new c.u_(this.exampleModalRef.nativeElement)}openModal(){this.modalInstance.show()}closeModal(){this.modalInstance.hide()}getAllClientProjects(){this.projectService.getAllClientProjects().subscribe(e=>{this.allProjects=e.data})}editPayment(e){this.openModal(),Object.keys(this.paymentForm.controls).forEach(a=>{var i;null===(i=this.paymentForm.get(a))||void 0===i||i.setValue(e[a])})}update(){this.paymentService.addUpdatePayment(this.paymentForm.value).subscribe(a=>{this.closeModal(),this.paymentForm.reset(),this.getAllPayments()})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(y),t.Y36(Z.m),t.Y36(r.qu))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-payment"]],viewQuery:function(e,a){if(1&e&&t.Gf(f,5),2&e){let i;t.iGM(i=t.CRH())&&(a.exampleModalRef=i.first)}},decls:88,vars:3,consts:[[1,"mb-3"],[1,"btn","btn-primary",3,"click"],[1,"fa-solid","fa-plus","align-middle","me-1"],[1,"card"],[1,"card-body"],[1,"d-flex","flex-wrap","align-items-center","justify-content-between"],[1,"m-0"],[1,"input-group"],[1,"input-group-prepend"],[1,"input-group-text","h-100"],[1,"fas","fa-search"],["type","text","placeholder","Search payment",1,"form-control"],[1,"table-responsive"],[1,"table","align-middle","text-nowrap"],["scope","col"],[4,"ngFor","ngForOf"],["id","exampleModal","data-bs-backdrop","static","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],["modalElement",""],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[3,"formGroup"],[1,"form-label"],["formControlName","projectId",1,"form-select"],[3,"value",4,"ngFor","ngForOf"],["type","datetime-local","formControlName","paymentDate",1,"form-control"],["formControlName","paymentMode",1,"form-select"],["value","Credit Cards"],["value","Debit Cards"],["value","Cash"],["value","Paper Checks"],["value","eChecks"],["value","Digital Payments"],["value","Money Orders"],["type","text","formControlName","amount",1,"form-control"],["type","text","formControlName","naration",1,"form-control"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],[1,"fa-solid","fa-xmark","me-1"],[1,"fa-regular","fa-floppy-disk","me-1"],[1,"btn","btn-primary","btn-sm","me-2",3,"click"],[1,"fa-solid","fa-pen"],[1,"btn","btn-primary","btn-sm",3,"click"],[1,"fa-solid","fa-trash"],[3,"value"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){return a.openModal()}),t._UZ(2,"i",2),t._uU(3," Add Payment "),t.qZA()(),t.TgZ(4,"div",3)(5,"div",4)(6,"div",5)(7,"h5",6),t._uU(8,"Payment"),t.qZA(),t.TgZ(9,"div")(10,"div",7)(11,"div",8)(12,"div",9),t._UZ(13,"i",10),t.qZA()(),t._UZ(14,"input",11),t.qZA()()(),t.TgZ(15,"div",12)(16,"table",13)(17,"thead")(18,"tr")(19,"th",14),t._uU(20,"Project Name"),t.qZA(),t.TgZ(21,"th",14),t._uU(22,"Amount"),t.qZA(),t.TgZ(23,"th",14),t._uU(24,"Payment Mode"),t.qZA(),t.TgZ(25,"th",14),t._uU(26,"Payment Date"),t.qZA(),t.TgZ(27,"th",14),t._uU(28,"Company Name"),t.qZA(),t.TgZ(29,"th",14),t._uU(30,"Action"),t.qZA()()(),t.TgZ(31,"tbody"),t.YNc(32,h,17,8,"tr",15),t.qZA()()()()(),t.TgZ(33,"div",16,17)(35,"div",18)(36,"div",19)(37,"div",20)(38,"h5",21),t._uU(39,"Add Payment"),t.qZA(),t._UZ(40,"button",22),t.qZA(),t.TgZ(41,"div",23)(42,"form",24)(43,"div",0)(44,"label",25),t._uU(45,"Project"),t.qZA(),t.TgZ(46,"select",26),t.YNc(47,g,2,2,"option",27),t.qZA()(),t.TgZ(48,"div",0)(49,"label",25),t._uU(50,"Payment Date"),t.qZA(),t._UZ(51,"input",28),t.qZA(),t.TgZ(52,"div",0)(53,"label",25),t._uU(54,"Payment Mode"),t.qZA(),t.TgZ(55,"select",29)(56,"option",30),t._uU(57,"Credit Cards"),t.qZA(),t.TgZ(58,"option",31),t._uU(59,"Debit Cards"),t.qZA(),t.TgZ(60,"option",32),t._uU(61,"Cash"),t.qZA(),t.TgZ(62,"option",33),t._uU(63,"Paper Checks"),t.qZA(),t.TgZ(64,"option",34),t._uU(65,"eChecks"),t.qZA(),t.TgZ(66,"option",35),t._uU(67,"Digital Payments"),t.qZA(),t.TgZ(68,"option",36),t._uU(69,"Money Orders"),t.qZA()()(),t.TgZ(70,"div",0)(71,"label",25),t._uU(72,"Amount"),t.qZA(),t._UZ(73,"input",37),t.qZA(),t.TgZ(74,"div",0)(75,"label",25),t._uU(76,"Naration"),t.qZA(),t._UZ(77,"input",38),t.qZA()()(),t.TgZ(78,"div",39)(79,"button",40),t._UZ(80,"i",41),t._uU(81," Close "),t.qZA(),t.TgZ(82,"button",1),t.NdJ("click",function(){return a.save()}),t._UZ(83,"i",42),t._uU(84," Save "),t.qZA(),t.TgZ(85,"button",1),t.NdJ("click",function(){return a.update()}),t._UZ(86,"i",42),t._uU(87," Update "),t.qZA()()()()()),2&e&&(t.xp6(32),t.Q6J("ngForOf",a.payments),t.xp6(10),t.Q6J("formGroup",a.paymentForm),t.xp6(5),t.Q6J("ngForOf",a.allProjects))},directives:[m.sg,r._Y,r.JL,r.sg,r.EJ,r.JJ,r.u,r.YN,r.Kr,r.Fj],pipes:[m.uU],styles:[""]}),n})()}];let P=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[p.Bz.forChild(v)],p.Bz]}),n})(),A=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.ez,P,r.u5,r.UX]]}),n})()}}]);