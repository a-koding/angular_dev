import { Component, OnInit } from '@angular/core';
import { userRegistrationService } from '../../shared/register.service';
@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css'],
  providers:[userRegistrationService]
})
export class GroupFormComponent implements OnInit {


  public add_new  = [];
  public userlist = [];
  constructor(private user:userRegistrationService) { }
  public group_name :string;
  public status:string;
  public save_data=[];
  ngOnInit() {

  this.user.getuserList().subscribe((res) => {
   for(let i=0;i<res[0].length;i++)
   {
    this.userlist[i]={'name':res[i].name,'email':res[i].email};
   }
  });

  }
  new_row()
  {
    this.add_new.push({'name':'','email':''});
}
save_group()
{
  console.log({"group_name":this.group_name,"status":this.status,"group_object":this.add_new});
}
remove_row(i)
{
  console.log(i);
  this.add_new.splice(i,i+1);
}
get_groupname(event)
{
  this.group_name = event.target.value;
}
change_status(event)
{
  this.status = event.target.value;
}
select_name(event,root)
{
  const index = event.target.value;
  this.add_new[root].email=this.userlist[index].email;
  this.add_new[root].name=this.userlist[index].name;
}
}
