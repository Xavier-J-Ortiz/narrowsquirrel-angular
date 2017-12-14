import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = [
      {id: 1, title: 'Hansel and Gretel'},
      {id: 2, title: 'Little Red Riding Hood'},
      {id: 3, title: 'Jack and the Beanstalk'},
      {id: 4, title: 'The Little Engine that Could'}
    ];
    return {books};
  }
}
