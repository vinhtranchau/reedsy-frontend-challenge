(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{bDat:function(t,o,e){"use strict";e.r(o),e.d(o,"BookDetailsModule",(function(){return v}));var n=e("ofXK"),b=e("3Pt+"),c=e("tyNb"),r=e("fXoL");function i(t,o){if(1&t&&(r.Zb(0,"div",20),r.Zb(1,"div",21),r.Jc(2),r.Yb(),r.Zb(3,"div",22),r.Jc(4),r.oc(5,"date"),r.Yb(),r.Zb(6,"div",22),r.Jc(7),r.Yb(),r.Yb()),2&t){const t=o.$implicit;r.Hb(2),r.Kc(t.content),r.Hb(2),r.Lc("commented ",r.pc(5,3,t.date,"MMM dd yyyy"),""),r.Hb(3),r.Kc(t.author||"Anonymous")}}function s(t,o){if(1&t&&(r.Zb(0,"div",18),r.Hc(1,i,8,6,"div",19),r.Yb()),2&t){const t=r.nc();r.Hb(1),r.sc("ngForOf",t.book.comments)}}let m=(()=>{class t{constructor(t,o){this.route=t,this.fb=o,this.book=this.route.snapshot.data.book,this.commentForm=this.fb.group({comment:["",b.l.required]})}ngOnInit(){}toggleVote(){this.book.upvoted=!this.book.upvoted,this.book.upvoted?this.book.upvotes+=1:this.book.upvotes-=1}addComment(t){t.preventDefault();const o=this.commentForm.value.comment;this.commentForm.reset();const e={date:new Date,content:o};this.book.comments.push(e)}}return t.\u0275fac=function(o){return new(o||t)(r.Ub(c.a),r.Ub(b.b))},t.\u0275cmp=r.Ob({type:t,selectors:[["reedsy-book-details"]],decls:30,vars:17,consts:[[1,"container"],[1,"row"],[1,"col-lg-6","col-md-8","col-sm-12","mx-auto","bg-white","p-4","book-details"],[1,"d-flex","flex-wrap","align-items-center"],[1,"text-primary","text-center","font-24","font-weight-bold"],[1,"d-flex","flex-grow-1","justify-content-end","align-items-center"],[1,"mr-3"],[1,"btn","btn-primary","btn-sm","text-white",3,"click"],[1,"font-italic"],[1,"text-center","my-4","d-flex","justify-content-center"],[1,"book-cover-wrapper","overflow-hidden"],[1,"w-100",3,"src","alt"],[1,"pt-30"],["class","comment-list",4,"ngIf"],[3,"formGroup","submit"],[1,"w-100"],["formControlName","comment","rows","4","placeholder","comment",1,"form-control"],["type","submit",1,"btn","btn-primary","btn-small","text-white",3,"disabled"],[1,"comment-list"],["class","comment pb-4 font-12",4,"ngFor","ngForOf"],[1,"comment","pb-4","font-12"],[1,"content","font-italic"],[1,"text-right"]],template:function(t,o){1&t&&(r.Zb(0,"div",0),r.Zb(1,"div",1),r.Zb(2,"div",2),r.Zb(3,"div",3),r.Zb(4,"h1",4),r.Jc(5),r.Yb(),r.Zb(6,"div",5),r.Zb(7,"span",6),r.Jc(8),r.Yb(),r.Zb(9,"button",7),r.lc("click",(function(){return o.toggleVote()})),r.Jc(10),r.Yb(),r.Yb(),r.Yb(),r.Zb(11,"div",8),r.Jc(12),r.Yb(),r.Zb(13,"div",9),r.Zb(14,"div",10),r.Vb(15,"img",11),r.Yb(),r.Yb(),r.Zb(16,"h2"),r.Jc(17,"Synopsis"),r.Yb(),r.Zb(18,"p"),r.Jc(19),r.Yb(),r.Zb(20,"div"),r.Jc(21),r.Yb(),r.Zb(22,"h2",12),r.Jc(23,"Comments"),r.Yb(),r.Hc(24,s,2,1,"div",13),r.Zb(25,"form",14),r.lc("submit",(function(t){return o.addComment(t)})),r.Zb(26,"label",15),r.Vb(27,"textarea",16),r.Yb(),r.Zb(28,"button",17),r.Jc(29,"Add Comment"),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb()),2&t&&(r.Hb(5),r.Kc(o.book.title),r.Hb(3),r.Lc("Upvoted ",o.book.upvotes," times"),r.Hb(1),r.Mb("btn-outline-primary",o.book.upvoted)("bg-white",o.book.upvoted)("text-primary",o.book.upvoted),r.Hb(1),r.Kc(o.book.upvoted?"Upvoted":"Upvote"),r.Hb(2),r.Kc(o.book.author),r.Hb(3),r.sc("src",o.book.cover,r.Cc)("alt",o.book.title),r.Hb(4),r.Kc(o.book.synopsis),r.Hb(2),r.Lc("Rating: ",o.book.rating,"/10"),r.Hb(3),r.sc("ngIf",o.book.comments&&o.book.comments.length),r.Hb(1),r.sc("formGroup",o.commentForm),r.Hb(3),r.sc("disabled",!o.commentForm.valid))},directives:[n.l,b.n,b.i,b.d,b.a,b.h,b.c,n.k],pipes:[n.d],styles:[".book-cover-wrapper[_ngcontent-%COMP%]{border-radius:12px;width:70%}.book-details[_ngcontent-%COMP%]{box-shadow:0 0 10px #a0a0a0}"]}),t})();var a=e("z6cu"),d=e("JIr8"),l=e("5eHb"),p=e("Qo73");const u=[{path:"",component:m,resolve:{book:(()=>{class t{constructor(t,o){this.toastr=t,this.booksService=o}resolve(t,o){return this.booksService.bookDetail(t.params.slug).pipe(Object(d.a)(t=>(this.toastr.error("Error","Failed to load book detail."),Object(a.a)(t))))}}return t.\u0275fac=function(o){return new(o||t)(r.hc(l.b),r.hc(p.a))},t.\u0275prov=r.Qb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}];let f=(()=>{class t{}return t.\u0275mod=r.Sb({type:t}),t.\u0275inj=r.Rb({factory:function(o){return new(o||t)},imports:[[c.d.forChild(u)],c.d]}),t})(),v=(()=>{class t{}return t.\u0275mod=r.Sb({type:t}),t.\u0275inj=r.Rb({factory:function(o){return new(o||t)},imports:[[n.b,b.k,f]]}),t})()}}]);