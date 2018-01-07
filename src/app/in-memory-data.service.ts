import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = [
      {id: 1, title: 'Hansel and Gretel'},
      {id: 2, title: 'Little Red Riding Hood'},
      {id: 3, title: 'Jack and the Beanstalk'},
      {id: 4, title: 'The Little Engine that Could'}
      {id: 5, title: 'Moby Dick'},
      {id: 6, title: 'Little Women'},
      {id: 7, title: "Charlotte's Web"},
      {id: 8, title: 'Jungle Book'},
      {id: 9, title: 'Where the Wild Things Are'},
      {id: 10, title: 'The Lion, the Witch, and the Wardrobe'}
    ];
    return {books};
  }
}
