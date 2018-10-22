import { NgModule } from '@angular/core';  
import { HttpClientModule } from '@angular/common/http';  
import { ApolloModule, Apollo } from 'apollo-angular';  
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';  
import { InMemoryCache } from 'apollo-cache-inmemory';

const simpleAPI = 'http://192.168.0.10:5000/graphql';

@NgModule({
  exports: [
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ]
})
export class GraphQLModule {  
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      link: httpLink.create({ uri: simpleAPI }),
      cache: new InMemoryCache()
    });
  }
}