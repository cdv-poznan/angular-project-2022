import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/interface/response.interface';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './usersfile.component.html',
  styleUrls: ['./usersfile.component.css']
})
export class UsersfileComponent implements OnInit {
  response: Response;

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.userService.getRandomUsers(15).subscribe(
      (results: Response) => {
        console.log(results);
        this.response = results;
      }
    );
  }

}
