import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id:number;
  employee: Employee = new Employee();


  constructor(private employeeservice:EmployeeService,private rout: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id = this.rout.snapshot.params['id'];
     this.employeeservice.getEmployeeById(this.id).subscribe(data=> {
       this.employee=data;
     },
     error=> console.log(error));
  
  }
  saveEmployee(){
    this.employeeservice.createEmployee(this.employee).subscribe(data=>{
      console.log(data);
      this.gotoEmployeeList();
    },
    error=> console.log(error));
  }
  gotoEmployeeList(){
    this.router.navigate(['/employe']);
  }
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();

  }
   
 
}
