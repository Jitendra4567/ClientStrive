"use strict";(self.webpackChunkClientStrive=self.webpackChunkClientStrive||[]).push([[448],{5448:(q,a,i)=>{i.r(a),i.d(a,{EmployeeModule:()=>U});var n=i(2382),d=i(9808),p=i(459),e=i(1223),s=i(4416);function c(t,l){if(1&t){const o=e.EpF();e.TgZ(0,"button",35),e.NdJ("click",function(){return e.CHM(o),e.oxw(2).addSkill()}),e._UZ(1,"i",45),e.qZA()}}function u(t,l){if(1&t){const o=e.EpF();e.TgZ(0,"button",35),e.NdJ("click",function(){e.CHM(o);const m=e.oxw().index;return e.oxw().removeSkill(m)}),e._UZ(1,"i",46),e.qZA()}}function Z(t,l){if(1&t&&(e.TgZ(0,"div")(1,"div",37)(2,"div",38)(3,"div",0)(4,"label",9),e._uU(5,"Skill"),e.qZA(),e._UZ(6,"input",39),e.qZA()(),e.TgZ(7,"div",38)(8,"div",0)(9,"label",9),e._uU(10,"Experinace"),e.qZA(),e._UZ(11,"input",40),e.qZA()(),e.TgZ(12,"div",38)(13,"div",0)(14,"label",9),e._uU(15,"Last version used"),e.qZA(),e.TgZ(16,"select",41)(17,"option",42),e._uU(18,"Yes"),e.qZA(),e.TgZ(19,"option",43),e._uU(20,"No"),e.qZA()()()(),e.TgZ(21,"div",38)(22,"div",0),e.YNc(23,c,2,0,"button",44),e.YNc(24,u,2,0,"button",44),e.qZA()()()()),2&t){const o=l.index;e.xp6(1),e.Q6J("formGroupName",o),e.xp6(22),e.Q6J("ngIf",0==o),e.xp6(1),e.Q6J("ngIf",0!=o)}}function _(t,l){if(1&t){const o=e.EpF();e.TgZ(0,"button",35),e.NdJ("click",function(){return e.CHM(o),e.oxw(2).addExperiences()}),e._UZ(1,"i",53),e._uU(2,"More Experiences"),e.qZA()}}function y(t,l){if(1&t){const o=e.EpF();e.TgZ(0,"button",35),e.NdJ("click",function(){e.CHM(o);const m=e.oxw().index;return e.oxw().removeExperiences(m)}),e._UZ(1,"i",54),e._uU(2,"Remove Experiences"),e.qZA()}}function f(t,l){if(1&t&&(e.TgZ(0,"div")(1,"div",47)(2,"div",5)(3,"div",7)(4,"div",38)(5,"div",0)(6,"label",9),e._uU(7,"Company Name"),e.qZA(),e._UZ(8,"input",48),e.qZA()(),e.TgZ(9,"div",38)(10,"div",0)(11,"label",9),e._uU(12,"Start Date"),e.qZA(),e._UZ(13,"input",49),e.qZA()(),e.TgZ(14,"div",38)(15,"div",0)(16,"label",9),e._uU(17,"End Date"),e.qZA(),e._UZ(18,"input",50),e.qZA()(),e.TgZ(19,"div",38)(20,"div",0)(21,"label",9),e._uU(22,"Designation"),e.qZA(),e._UZ(23,"input",51),e.qZA()(),e.TgZ(24,"div",28)(25,"div",0)(26,"label",9),e._uU(27,"Projects Worked On"),e.qZA(),e._UZ(28,"textarea",52),e.qZA()(),e.TgZ(29,"div",28)(30,"div",34),e.YNc(31,_,3,0,"button",44),e.YNc(32,y,3,0,"button",44),e.qZA()()()()()()),2&t){const o=l.index;e.xp6(1),e.Q6J("formGroupName",o),e.xp6(30),e.Q6J("ngIf",0==o),e.xp6(1),e.Q6J("ngIf",0!=o)}}let v=(()=>{class t{constructor(o,r,m){this.fb=o,this.route=r,this.employeeService=m}ngOnInit(){this.employeeForm=this.fb.group({roleId:0,userName:[""],empCode:[""],empId:0,empName:[""],empEmailId:[""],empDesignationId:0,empContactNo:[""],empAltContactNo:[""],empPersonalEmailId:[""],empExpTotalYear:0,empExpTotalMonth:0,empCity:[""],empState:[""],empPinCode:[""],empAddress:[""],empPerCity:[""],empPerState:[""],empPerPinCode:[""],empPerAddress:[""],password:[""],ErpEmployeeSkills:this.fb.array([this.fb.group({empSkillId:0,empId:0,skill:[""],totalYearExp:0,lastVersionUsed:[""]})]),ErmEmpExperiences:this.fb.array([this.fb.group({empExpId:0,empId:0,companyName:[""],startDate:[""],endDate:[""],designation:[""],projectsWorkedOn:[""]})])}),this.ErpEmployeeSkillsArray=this.employeeForm.get("ErpEmployeeSkills"),this.ErmEmpExperiencesArray=this.employeeForm.get("ErmEmpExperiences")}addSkill(){this.ErpEmployeeSkillsArray.push(this.fb.group({empSkillId:0,empId:0,skill:[""],totalYearExp:0,lastVersionUsed:[""]}))}removeSkill(o){this.ErpEmployeeSkillsArray.removeAt(o)}addExperiences(){this.ErmEmpExperiencesArray.push(this.fb.group({empExpId:0,empId:0,companyName:[""],startDate:[""],endDate:[""],designation:[""],projectsWorkedOn:[""]}))}removeExperiences(o){this.ErpEmployeeSkillsArray.removeAt(o)}saveEmployee(){let o=this.employeeForm.value;console.log(o,"data"),this.employeeService.createNewEmployee(o).subscribe(r=>{console.log(r,"res"),this.employeeForm.reset(),this.route.navigate(["/admin/employee"])})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(n.qu),e.Y36(p.F0),e.Y36(s.G))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-add-employee"]],decls:122,vars:3,consts:[[1,"mb-3"],["routerLink","/admin/employee",1,"btn","btn-primary"],[1,"fa-solid","fa-angle-left","me-1"],[1,"card"],[1,"card-header"],[1,"card-body"],[3,"formGroup"],[1,"row"],[1,"col-sm-4"],[1,"form-label"],["type","text","formControlName","userName",1,"form-control"],["type","text","formControlName","empCode",1,"form-control"],["type","text","formControlName","empName",1,"form-control"],["type","text","formControlName","empEmailId",1,"form-control"],["type","text","formControlName","empContactNo",1,"form-control"],["type","text","formControlName","empAltContactNo",1,"form-control"],["type","text","formControlName","empPersonalEmailId",1,"form-control"],["type","text","formControlName","empExpTotalYear",1,"form-control"],["type","text","formControlName","empExpTotalMonth",1,"form-control"],["type","text","formControlName","empCity",1,"form-control"],["type","text","formControlName","empState",1,"form-control"],["type","text","formControlName","empPinCode",1,"form-control"],["type","text","formControlName","empAddress",1,"form-control"],["type","text","formControlName","empPerCity",1,"form-control"],["type","text","formControlName","empPerState",1,"form-control"],["type","text","formControlName","empPerPinCode",1,"form-control"],["type","text","formControlName","empPerAddress",1,"form-control"],["type","text","formControlName","password",1,"form-control"],[1,"col-sm-12"],[1,"fw-bold","m-0","f-18"],["formArrayName","ErpEmployeeSkills"],[4,"ngFor","ngForOf"],["formArrayName","ErmEmpExperiences"],[1,"card-footer"],[1,"text-end"],[1,"btn","btn-primary",3,"click"],[1,"fa-regular","fa-floppy-disk","me-1"],[1,"row","align-items-end",3,"formGroupName"],[1,"col-sm-3"],["type","text","formControlName","skill",1,"form-control"],["type","text","formControlName","totalYearExp",1,"form-control"],["formControlName","lastVersionUsed",1,"form-select"],["value","yes"],["value","no"],["class","btn btn-primary",3,"click",4,"ngIf"],[1,"fa-solid","fa-plus"],[1,"fa-solid","fa-minus"],[1,"card","mb-3",3,"formGroupName"],["type","text","formControlName","companyName",1,"form-control"],["type","date","formControlName","startDate",1,"form-control"],["type","date","formControlName","endDate",1,"form-control"],["type","text","formControlName","designation",1,"form-control"],["rows","3","formControlName","projectsWorkedOn",1,"form-control"],[1,"fa-solid","fa-plus","me-1"],[1,"fa-solid","fa-minus","me-1"]],template:function(o,r){1&o&&(e.TgZ(0,"div",0)(1,"button",1),e._UZ(2,"i",2),e._uU(3," Back "),e.qZA()(),e.TgZ(4,"div",3)(5,"div",4)(6,"h5"),e._uU(7,"Add Employee"),e.qZA()(),e.TgZ(8,"div",5)(9,"form",6)(10,"div",7)(11,"div",8)(12,"div",0)(13,"label",9),e._uU(14,"User Name"),e.qZA(),e._UZ(15,"input",10),e.qZA()(),e.TgZ(16,"div",8)(17,"div",0)(18,"label",9),e._uU(19,"Employee Code"),e.qZA(),e._UZ(20,"input",11),e.qZA()(),e.TgZ(21,"div",8)(22,"div",0)(23,"label",9),e._uU(24,"Employee Name"),e.qZA(),e._UZ(25,"input",12),e.qZA()(),e.TgZ(26,"div",8)(27,"div",0)(28,"label",9),e._uU(29,"Employee EmailId"),e.qZA(),e._UZ(30,"input",13),e.qZA()(),e.TgZ(31,"div",8)(32,"div",0)(33,"label",9),e._uU(34,"Employee ContactNo"),e.qZA(),e._UZ(35,"input",14),e.qZA()(),e.TgZ(36,"div",8)(37,"div",0)(38,"label",9),e._uU(39,"Employee Alt ContactNo"),e.qZA(),e._UZ(40,"input",15),e.qZA()(),e.TgZ(41,"div",8)(42,"div",0)(43,"label",9),e._uU(44,"Employee Personal EmailId"),e.qZA(),e._UZ(45,"input",16),e.qZA()(),e.TgZ(46,"div",8)(47,"div",0)(48,"label",9),e._uU(49,"Employee Exp Total Year"),e.qZA(),e._UZ(50,"input",17),e.qZA()(),e.TgZ(51,"div",8)(52,"div",0)(53,"label",9),e._uU(54,"Employee Exp Total Month"),e.qZA(),e._UZ(55,"input",18),e.qZA()(),e.TgZ(56,"div",8)(57,"div",0)(58,"label",9),e._uU(59,"Employee City"),e.qZA(),e._UZ(60,"input",19),e.qZA()(),e.TgZ(61,"div",8)(62,"div",0)(63,"label",9),e._uU(64,"Employee State"),e.qZA(),e._UZ(65,"input",20),e.qZA()(),e.TgZ(66,"div",8)(67,"div",0)(68,"label",9),e._uU(69,"Employee PinCode"),e.qZA(),e._UZ(70,"input",21),e.qZA()(),e.TgZ(71,"div",8)(72,"div",0)(73,"label",9),e._uU(74,"Employee Address"),e.qZA(),e._UZ(75,"input",22),e.qZA()(),e.TgZ(76,"div",8)(77,"div",0)(78,"label",9),e._uU(79,"Employee Per City"),e.qZA(),e._UZ(80,"input",23),e.qZA()(),e.TgZ(81,"div",8)(82,"div",0)(83,"label",9),e._uU(84,"Employee Per State"),e.qZA(),e._UZ(85,"input",24),e.qZA()(),e.TgZ(86,"div",8)(87,"div",0)(88,"label",9),e._uU(89,"Employee Per Pin Code"),e.qZA(),e._UZ(90,"input",25),e.qZA()(),e.TgZ(91,"div",8)(92,"div",0)(93,"label",9),e._uU(94,"Employee Per Address"),e.qZA(),e._UZ(95,"input",26),e.qZA()(),e.TgZ(96,"div",8)(97,"div",0)(98,"label",9),e._uU(99,"Password"),e.qZA(),e._UZ(100,"input",27),e.qZA()()(),e._UZ(101,"hr"),e.TgZ(102,"div",7)(103,"div",28)(104,"div",0)(105,"h6",29),e._uU(106,"Employee Skills"),e.qZA()()()(),e.TgZ(107,"div",30),e.YNc(108,Z,25,3,"div",31),e.qZA(),e._UZ(109,"hr"),e.TgZ(110,"div",7)(111,"div",28)(112,"div",0)(113,"h6",29),e._uU(114,"Employee Experiences"),e.qZA()()()(),e.TgZ(115,"div",32),e.YNc(116,f,33,3,"div",31),e.qZA()()(),e.TgZ(117,"div",33)(118,"div",34)(119,"button",35),e.NdJ("click",function(){return r.saveEmployee()}),e._UZ(120,"i",36),e._uU(121," Save "),e.qZA()()()()),2&o&&(e.xp6(9),e.Q6J("formGroup",r.employeeForm),e.xp6(99),e.Q6J("ngForOf",r.ErpEmployeeSkillsArray.controls),e.xp6(8),e.Q6J("ngForOf",r.ErmEmpExperiencesArray.controls))},directives:[p.rH,n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,n.CE,d.sg,n.x0,n.EJ,n.YN,n.Kr,d.O5],styles:[".f-18[_ngcontent-%COMP%]{font-size:18px}"]}),t})();function A(t,l){if(1&t&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA()()),2&t){const o=l.$implicit;e.xp6(2),e.Oqu(o.empId),e.xp6(2),e.Oqu(o.empCode),e.xp6(2),e.Oqu(o.empDesignation),e.xp6(2),e.Oqu(o.empEmailId),e.xp6(2),e.Oqu(o.empName),e.xp6(2),e.Oqu(o.role)}}const E=[{path:"",component:(()=>{class t{constructor(o){this.employeeService=o}ngOnInit(){this.getAllEmployee()}getAllEmployee(){this.employeeService.getAllEmployee().subscribe(o=>{console.log(o.data,"res"),this.allEmployee=o.data})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(s.G))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-employee"]],decls:33,vars:1,consts:[[1,"mb-3"],["routerLink","add",1,"btn","btn-primary"],[1,"fa-solid","fa-plus","align-middle","me-1"],[1,"card"],[1,"card-body"],[1,"d-flex","flex-wrap","align-items-center","justify-content-between"],[1,"m-0"],[1,"input-group"],[1,"input-group-prepend"],[1,"input-group-text","h-100"],[1,"fas","fa-search"],["type","text","placeholder","Search Employee",1,"form-control"],[1,"table","align-middle"],["scope","col"],[4,"ngFor","ngForOf"]],template:function(o,r){1&o&&(e.TgZ(0,"div",0)(1,"button",1),e._UZ(2,"i",2),e._uU(3," Add Employee "),e.qZA()(),e.TgZ(4,"div",3)(5,"div",4)(6,"div",5)(7,"h5",6),e._uU(8,"Employee"),e.qZA(),e.TgZ(9,"div")(10,"div",7)(11,"div",8)(12,"div",9),e._UZ(13,"i",10),e.qZA()(),e._UZ(14,"input",11),e.qZA()()(),e.TgZ(15,"div")(16,"table",12)(17,"thead")(18,"tr")(19,"th",13),e._uU(20,"Id"),e.qZA(),e.TgZ(21,"th",13),e._uU(22,"Code"),e.qZA(),e.TgZ(23,"th",13),e._uU(24,"Designation"),e.qZA(),e.TgZ(25,"th",13),e._uU(26,"EmailId"),e.qZA(),e.TgZ(27,"th",13),e._uU(28,"Name"),e.qZA(),e.TgZ(29,"th",13),e._uU(30,"Role"),e.qZA()()(),e.TgZ(31,"tbody"),e.YNc(32,A,13,6,"tr",14),e.qZA()()()()()),2&o&&(e.xp6(32),e.Q6J("ngForOf",r.allEmployee))},directives:[p.rH,d.sg],styles:[""]}),t})()},{path:"add",component:v}];let g=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[p.Bz.forChild(E)],p.Bz]}),t})(),U=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[d.ez,g,n.UX]]}),t})()}}]);