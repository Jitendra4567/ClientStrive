"use strict";(self.webpackChunkClientStrive=self.webpackChunkClientStrive||[]).push([[200],{9200:(b,a,p)=>{p.r(a),p.d(a,{EmployeeProjectsModule:()=>P});var m=p(9808),n=p(459),d=p(1446),e=p(1223),u=p(4416),y=p(3225),i=p(2382),j=p(520);let Z=(()=>{class o{constructor(t){this.http=t}addEmployeeToProject(t){return this.http.post("https://freeapi.miniprojectideas.com/api/ClientStrive/AddEmployeeToProject",t)}getAllProjectsEmployees(){return this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllProjectsEmployees")}deleteEmployeeFromProject(t){return this.http.delete("https://freeapi.miniprojectideas.com/api/ClientStrive/DeleteEmployeeFromProject?projectEmpId="+t)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(j.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const g=["modalElement"];function f(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.ALo(7,"date"),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.ALo(10,"date"),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA(),e.TgZ(17,"td"),e._uU(18),e.qZA(),e.TgZ(19,"td"),e._uU(20),e.ALo(21,"date"),e.qZA(),e.TgZ(22,"td")(23,"button",34),e.NdJ("click",function(){const c=e.CHM(t).$implicit;return e.oxw().removeEmployeeProjects(c.projectEmpId)}),e._UZ(24,"i",35),e.qZA()()()}if(2&o){const t=l.$implicit;e.xp6(2),e.Oqu(t.projectEmpId),e.xp6(2),e.Oqu(t.projectName),e.xp6(2),e.Oqu(e.xi3(7,9,t.startDate,"yyyy-MM-dd HH:mm:ss")),e.xp6(3),e.Oqu(e.xi3(10,12,t.expectedEndDate,"yyyy-MM-dd HH:mm:ss")),e.xp6(3),e.Oqu(t.clientName),e.xp6(2),e.Oqu(t.empName),e.xp6(2),e.Oqu(t.empEmailId),e.xp6(2),e.Oqu(t.empDesignation),e.xp6(2),e.Oqu(e.xi3(21,15,t.addedDate,"yyyy-MM-dd HH:mm:ss"))}}function h(o,l){if(1&o&&(e.TgZ(0,"option",36),e._uU(1),e.qZA()),2&o){const t=l.$implicit;e.Q6J("value",t.empId),e.xp6(1),e.Oqu(t.empName)}}function E(o,l){if(1&o&&(e.TgZ(0,"option",36),e._uU(1),e.qZA()),2&o){const t=l.$implicit;e.Q6J("value",t.clientProjectId),e.xp6(1),e.hij("",t.projectName," ")}}const A=[{path:"",component:(()=>{class o{constructor(t,r,s,c){this.employeeService=t,this.projectService=r,this.fb=s,this.employeeProjectService=c}ngOnInit(){this.getAllEmployee(),this.getAllClientProjects(),this.getAllProjectsEmployees(),this.employeeProjectForm=this.fb.group({projectEmpId:0,employeeId:0,projectId:0,addedDate:0})}ngAfterViewInit(){this.modalInstance=new d.u_(this.exampleModalRef.nativeElement)}openModal(){this.modalInstance.show()}closeModal(){this.modalInstance.hide()}getAllEmployee(){this.employeeService.getAllEmployee().subscribe(t=>{this.allEmployee=t.data})}getAllClientProjects(){this.projectService.getAllClientProjects().subscribe(t=>{this.allProjects=t.data})}save(){this.employeeProjectService.addEmployeeToProject(this.employeeProjectForm.value).subscribe(r=>{this.employeeProjectForm.reset(),this.closeModal(),this.getAllProjectsEmployees()})}getAllProjectsEmployees(){this.employeeProjectService.getAllProjectsEmployees().subscribe(t=>{this.allEmployeeProjects=t.data})}removeEmployeeProjects(t){this.employeeProjectService.deleteEmployeeFromProject(t).subscribe(r=>{this.getAllProjectsEmployees()})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(u.G),e.Y36(y.m),e.Y36(i.qu),e.Y36(Z))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-employee-projects"]],viewQuery:function(t,r){if(1&t&&e.Gf(g,5),2&t){let s;e.iGM(s=e.CRH())&&(r.exampleModalRef=s.first)}},decls:72,vars:4,consts:[[1,"mb-3"],[1,"btn","btn-primary",3,"click"],[1,"fa-solid","fa-plus","align-middle","me-1"],[1,"card"],[1,"card-body"],[1,"d-flex","flex-wrap","align-items-center","justify-content-between"],[1,"m-0"],[1,"input-group"],[1,"input-group-prepend"],[1,"input-group-text","h-100"],[1,"fas","fa-search"],["type","text","placeholder","Search projects",1,"form-control"],[1,"table-responsive"],[1,"table","align-middle","text-nowrap"],["scope","col"],[4,"ngFor","ngForOf"],["id","exampleModal","data-bs-backdrop","static","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],["modalElement",""],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[3,"formGroup"],[1,"form-label"],["formControlName","employeeId",1,"form-select"],[3,"value",4,"ngFor","ngForOf"],["formControlName","projectId",1,"form-select"],["type","datetime-local","formControlName","addedDate",1,"form-control"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],[1,"fa-solid","fa-xmark","me-1"],[1,"fa-regular","fa-floppy-disk","me-1"],[1,"btn","btn-primary","btn-sm",3,"click"],[1,"fa-solid","fa-trash"],[3,"value"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"button",1),e.NdJ("click",function(){return r.openModal()}),e._UZ(2,"i",2),e._uU(3," Add employee project "),e.qZA()(),e.TgZ(4,"div",3)(5,"div",4)(6,"div",5)(7,"h5",6),e._uU(8,"Employee projects"),e.qZA(),e.TgZ(9,"div")(10,"div",7)(11,"div",8)(12,"div",9),e._UZ(13,"i",10),e.qZA()(),e._UZ(14,"input",11),e.qZA()()(),e.TgZ(15,"div",12)(16,"table",13)(17,"thead")(18,"tr")(19,"th",14),e._uU(20,"Project EmpId"),e.qZA(),e.TgZ(21,"th",14),e._uU(22,"Project Name"),e.qZA(),e.TgZ(23,"th",14),e._uU(24,"Start Date"),e.qZA(),e.TgZ(25,"th",14),e._uU(26,"Expected End Date"),e.qZA(),e.TgZ(27,"th",14),e._uU(28,"Client Name"),e.qZA(),e.TgZ(29,"th",14),e._uU(30,"Emp Name"),e.qZA(),e.TgZ(31,"th",14),e._uU(32,"Emp EmailId"),e.qZA(),e.TgZ(33,"th",14),e._uU(34,"Emp Designation"),e.qZA(),e.TgZ(35,"th",14),e._uU(36,"Added Date"),e.qZA(),e.TgZ(37,"th",14),e._uU(38,"Action"),e.qZA()()(),e.TgZ(39,"tbody"),e.YNc(40,f,25,18,"tr",15),e.qZA()()()()(),e.TgZ(41,"div",16,17)(43,"div",18)(44,"div",19)(45,"div",20)(46,"h5",21),e._uU(47,"Add employee project"),e.qZA(),e._UZ(48,"button",22),e.qZA(),e.TgZ(49,"div",23)(50,"form",24)(51,"div",0)(52,"label",25),e._uU(53,"Employee"),e.qZA(),e.TgZ(54,"select",26),e.YNc(55,h,2,2,"option",27),e.qZA()(),e.TgZ(56,"div",0)(57,"label",25),e._uU(58,"Projects"),e.qZA(),e.TgZ(59,"select",28),e.YNc(60,E,2,2,"option",27),e.qZA()(),e.TgZ(61,"div",0)(62,"label",25),e._uU(63,"Added date"),e.qZA(),e._UZ(64,"input",29),e.qZA()()(),e.TgZ(65,"div",30)(66,"button",31),e._UZ(67,"i",32),e._uU(68," Close "),e.qZA(),e.TgZ(69,"button",1),e.NdJ("click",function(){return r.save()}),e._UZ(70,"i",33),e._uU(71," Save "),e.qZA()()()()()),2&t&&(e.xp6(40),e.Q6J("ngForOf",r.allEmployeeProjects),e.xp6(10),e.Q6J("formGroup",r.employeeProjectForm),e.xp6(5),e.Q6J("ngForOf",r.allEmployee),e.xp6(5),e.Q6J("ngForOf",r.allProjects))},directives:[m.sg,i._Y,i.JL,i.sg,i.EJ,i.JJ,i.u,i.YN,i.Kr,i.Fj],pipes:[m.uU],styles:[""]}),o})()}];let v=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[n.Bz.forChild(A)],n.Bz]}),o})(),P=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[m.ez,v,i.UX]]}),o})()}}]);