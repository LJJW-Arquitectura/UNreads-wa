import { Injectable } from '@angular/core';  
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';

import { Apollo } from 'apollo-angular';  
import gql from 'graphql-tag';

const queryAllUsers = gql`  
  query allUsers {
    allUsers {
      username
      email
    }
  }
`;

const queryUserByUsernameAndPassword = gql`  
  query($username:String!, $password:String!) {
  	userByUsernameAndPassword(username: $username, password: $password){
      username
      password
      email
      id
    }
  }
`;


const mutationCreateUser = gql`  
  mutation($username: String, $password: String, $email: String) {
    createUser( user: {
      username: $username
      password: $password
      email: $email
    }){
    	username
    	email
    }
  }
`;

const queryuserById = gql`  
  query($user_id: Int!) {
  	userById(user_id: $user_id){
      username
      email
    }
  }
`;
/*
  Generated class for the BooksProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(private apollo: Apollo) {
  }


  getAllUsers(): Observable<any> {
    const queryWatcher = this.apollo.watchQuery<any>({
      query: queryAllUsers
    });

    return queryWatcher.valueChanges
      .map(result => result.data.allUsers);;
  }

  createUser(Username: string, Password: string, Email: string): void {  
	  this.apollo.mutate({
	    mutation: mutationCreateUser,
	    variables: {
	      username: Username,
	      password: Password,
	      email: Email
	    }
	  })
	  .subscribe(response => console.log(response.data),
	             error => console.log('Mutation Error:', error));
  }
  
	getUserByUsernameAndPassword(Username: string, Password: string): Observable<any> {
    const queryWatcher = this.apollo.watchQuery<any>({
      query: queryUserByUsernameAndPassword,
      variables: {
      	username: Username,
      	password: Password
      },
      fetchPolicy: 'network-only'
    });
    return queryWatcher.valueChanges
			.map(result => result.data.userByUsernameAndPassword)
  }

  getUserById(id: number): Observable<any> {
    const queryWatcher = this.apollo.watchQuery<any>({
      query: queryuserById,
      variables: {
      	user_id: id
      },
      fetchPolicy: 'network-only'
    });
    return queryWatcher.valueChanges
			.map(result => result.data.userById)
  }

}
