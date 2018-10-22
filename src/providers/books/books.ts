import { Injectable } from '@angular/core';  
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';

import { Apollo } from 'apollo-angular';  
import gql from 'graphql-tag';

const queryAllBooks = gql`  
query allBooks {
  allBooks {
    id
    title
    authors
    numPages
    plot
  }
}
`;

const queryBookById = gql`  
query($id: Int!){
  bookById(book_id: $id) {
    id
    title
    publisher
    numPages
    isbn
    plot
    authors
    genres
    cover {
      fileName
      fileType
      fileDownloadUri
      size
    }
  }
}
`;

const queryBookReviewsByCode = gql`  
query($id: Int!){
  bookReviewsByCode(code: $id) {
    results {
      review_id
      book_id
      user_id
      creationdate
      review
      grade
    }
  }
}
`;

const queryBookSuggestionsByCode = gql`  
query($id: Int!){
  bookSuggestionsByCode(code: $id) {
    results {
      suggestion_id
      user_id
      book_id1
      book_id2
      reason
    }
  }
}
`;

const queryUserReviewsByCode = gql`  
query($id: Int!){
  userReviewsByCode(code: $id) {
    results {
      review_id
      book_id
      user_id
      creationdate
      review
      grade
    }
  }
}
`;

const queryUserSuggestionsByCode = gql`  
query($id: Int!){
  userSuggestionsByCode(code: $id) {
    results {
      suggestion_id
      user_id
      book_id1
      book_id2
      reason
    }
  }
}
`;

const queryAllBooklist = gql`  
query allBooklist{
  allBooklist{
    name
    user
    user_id
    date_update
    date_creation
    books
  }
}
`;


const querybooklistsByUser = gql`  
query booklistsByUser($id: Int!){
  booklistsByUser(user_id: $id){
    name
    user
    user_id
    date_update
    date_creation
    books
  }
}
`;

const mutationCreateBooklist = gql`  
mutation($user: String!, $name: String!,$user_id: Int!,$books: [Int]!) {
  createBooklist(booklist:{
    name: $name ,
    user: $user,
    user_id: $user_id,
    books: $books
  }){
    name
  }
}
`;

const mutationAddBookToReadlist = gql`  
mutation($user_id: Int!,$book_id: Int!) {
  addBookToReadlist(user_id:$user_id,book:$book_id)
}
`;

const queryReadbooks = gql`  
query readbooks($id: Int!){
  readbooks(user_id:$id){
    books
  }
}
`;

const mutationCreateBook= gql`  
  mutation($title: String!, $publisher: String, $numPages: Int, $isbn: String, $plot: String, $authors: [String], $genres: [String]) {
    createBook(book: {
      title: $title,
      publisher: $publisher,
      numPages: $numPages,
      isbn: $isbn,
      plot:  $plot,
      authors: $authors,
      genres: $genres
    }){
      id
    }
  }
`;

const mutationCreateReview= gql`  
  mutation($book_id: Int!, $user_id: Int!, $review: String!, $grade: Int!) {
    createReview(review: {
      book_id: $book_id, 
      user_id: $user_id, 
      review: $review, 
      grade: $grade
    }){
      message
    } 
  }
`;

const mutationsCreateSuggestion= gql`
mutation($user_id: Int!, $book_id1: Int!, $book_id2: Int!, $reason: String!) {
  createSuggestion(suggestion: {
    user_id: $user_id,
    book_id1: $book_id1, 
    book_id2: $book_id2, 
    reason: $reason
  }){
    message
  } 
}
`;
/*
  Generated class for the BooksProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
@Injectable()
export class BooksProvider {

  constructor(private apollo: Apollo) { }

  getAllBooks(): Observable<any> {
    const queryWatcher = this.apollo.watchQuery<any>({
      query: queryAllBooks,
      fetchPolicy: 'network-only'
    });

    return queryWatcher.valueChanges
    .map(result => result.data.allBooks);
  }

  getBookById(book_id: number): Observable<any> {
    const queryWatcher = this.apollo.watchQuery<any>({
      query: queryBookById,
      variables: {
        id: book_id
      },
      fetchPolicy: 'network-only'
    });

    return queryWatcher.valueChanges
    .map(result => result.data.bookById);
  }

  getAllBooklist(): Observable<any> {
    const queryWatcher = this.apollo.watchQuery<any>({
      query: queryAllBooklist,
      fetchPolicy: 'network-only'
    });

    return queryWatcher.valueChanges
    .map(result => result.data.allBooklist);
  }

  getReadbooks(User_id:number): Observable<any> {
    const queryWatcher = this.apollo.watchQuery<any>({
      query: queryReadbooks,
      variables:{
        id: User_id
      },
      fetchPolicy: 'network-only'
    });

    return queryWatcher.valueChanges
    .map(result => result.data.readbooks);
  }

  createBooklist(Name: string, User: string, User_id: number, Books: any[]): void {  
    this.apollo.mutate({
      mutation: mutationCreateBooklist,
      variables: {
        name: Name ,
        user: User,
        user_id: User_id,
        books: Books
      }
    })
    .subscribe(response => console.log(response.data),
      error => console.log('Mutation Error:', error));
  }

  addBookToReadlist( User_id: number, Book: number): void {  
    this.apollo.mutate({
      mutation: mutationAddBookToReadlist,
      variables: {
        user_id: User_id,
        book_id: Book
      }
    })
    .subscribe(response => console.log(response.data),
      error => console.log('Mutation Error:', error));
  }
  
  createReview(book_id: number, user_id: number, review: string, grade: number): Observable<any> {  
    return this.apollo.mutate({
      mutation: mutationCreateReview,
      variables: {
        book_id: book_id, 
        user_id: user_id, 
        review: review, 
        grade: grade
      }
    })
  }

  createBook(title: string, publisher: string, numPages: number, isbn: string, plot: string, authors: Array<string>, genres:  Array<string>): Observable<any> {  
    return this.apollo.mutate({
      mutation: mutationCreateBook,
      variables: {
        title: title,
        publisher: publisher,
        numPages: numPages,
        isbn: isbn,
        plot: plot,
        authors: authors,
        genres: genres
      }
    })
  }

  createSuggestion(user_id: number, book_id1: number, book_id2: number, reason: string): Observable<any> {  
    return this.apollo.mutate({
      mutation: mutationsCreateSuggestion,
      variables: {
        user_id: user_id,
        book_id1: book_id1,
        book_id2: book_id2,
        reason: reason
      }
    })
  }

  getBooklistByuser(userid: number): Observable<any> {
    const queryWatcher = this.apollo.watchQuery<any>({
      query: querybooklistsByUser,
      variables: {
        id: userid
      },
      fetchPolicy: 'network-only'
    });

    return queryWatcher.valueChanges
    .map(result => result.data.booklistsByUser);
  }
  getBookReviewsByCode(code: number): Observable<any> {
    const queryWatcher = this.apollo.watchQuery<any>({
      query: queryBookReviewsByCode,
      variables: {
        id: code
      },
      fetchPolicy: 'network-only'
    });

    return queryWatcher.valueChanges
    .map(result => result.data.bookReviewsByCode.results);
  }

  getBookSuggestionsByCode(code: number): Observable<any> {
    const queryWatcher = this.apollo.watchQuery<any>({
      query: queryBookSuggestionsByCode,
      variables: {
        id: code
      },
      fetchPolicy: 'network-only'
    });

    return queryWatcher.valueChanges
    .map(result => result.data.bookSuggestionsByCode.results);
  }

  getUserReviewsByCode(code: number): Observable<any> {
    const queryWatcher = this.apollo.watchQuery<any>({
      query: queryUserReviewsByCode,
      variables: {
        id: code
      },
      fetchPolicy: 'network-only'
    });

    return queryWatcher.valueChanges
    .map(result => result.data.bookReviewsByCode.results);
  }

  getUserSuggestionsByCode(code: number): Observable<any> {
    const queryWatcher = this.apollo.watchQuery<any>({
      query: queryUserSuggestionsByCode,
      variables: {
        id: code
      },
      fetchPolicy: 'network-only'
    });

    return queryWatcher.valueChanges
    .map(result => result.data.bookSuggestionsByCode.results);
  }

}
