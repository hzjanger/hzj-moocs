export class User {
  userid: number;
  userrealname: string;
  userpassword: string;
  usereducationlevel: string;
  userpicture: string;
  usersex: string;
  userphone: string;
  usernickname: string;
  usersignature: string;
  useremail: string;
  useruniversity: string;
  usercity: string;
  userjob: string;
  userstate: number;
  useraddress: string;
  studylength: number;
  attentionnum: number;
  fansnum: number;
  admissiontime: number;


  constructor(userid: number, userrealname: string, userpassword: string, usereducationlevel: string, userpicture: string, usersex: string, userphone: string, usernickname: string, usersignature: string, useremail: string, useruniversity: string, usercity: string, userjob: string, userstate: number, useraddress: string, studylength: number, attentionnum: number, fansnum: number, admissiontime: number) {
    this.userid = userid;
    this.userrealname = userrealname;
    this.userpassword = userpassword;
    this.usereducationlevel = usereducationlevel;
    this.userpicture = userpicture;
    this.usersex = usersex;
    this.userphone = userphone;
    this.usernickname = usernickname;
    this.usersignature = usersignature;
    this.useremail = useremail;
    this.useruniversity = useruniversity;
    this.usercity = usercity;
    this.userjob = userjob;
    this.userstate = userstate;
    this.useraddress = useraddress;
    this.studylength = studylength;
    this.attentionnum = attentionnum;
    this.fansnum = fansnum;
    this.admissiontime = admissiontime;
  }
}
