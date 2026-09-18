interface LibraryItem {
  title: string;
  author: string;
  isBorrowed: boolean;
  borrow(): void;
}

class Book implements LibraryItem {
  public isBorrowed: boolean = false;

  constructor(
    public title: string,
    public author: string,
    public pages: number
  ) {}

  borrow(): void {
    this.isBorrowed = true;
  }
}

class Magazine implements LibraryItem {
  public isBorrowed: boolean = false;

  constructor(
    public title: string,
    public author: string,
    public issueNumber: number
  ) {}

  borrow(): void {
    this.isBorrowed = true;
  }
}

class DVD implements LibraryItem {
  public isBorrowed: boolean = false;

  constructor(
    public title: string,
    public author: string,
    public durationMinutes: number
  ) {}

  borrow(): void {
    this.isBorrowed = true;
  }
}

class Library {
  private items: LibraryItem[] = [];

  addItem(item: LibraryItem): void {
    this.items.push(item);
  }

  findItemByName(name: string): LibraryItem | undefined {
    return this.items.find(item => item.title.toLowerCase() === name.toLowerCase());
  }

  listAvailableItems(): void {
    const available = this.items.filter(item => !item.isBorrowed);
    console.log("Доступні матеріали в бібліотеці:");
    available.forEach(item => {
      console.log(`- "${item.title}" автора/режисера ${item.author}`);
    });
  }
}

const library = new Library();

const book1 = new Book("Кобзар", "Тарас Шевченко", 400);
const mag1 = new Magazine("National Geographic", "Редакція NG", 202);
const dvd1 = new DVD("Інтерстеллар", "Крістофер Нолан", 169);

library.addItem(book1);
library.addItem(mag1);
library.addItem(dvd1);

library.listAvailableItems();

const foundItem = library.findItemByName("Кобзар");
if (foundItem) {
  foundItem.borrow();
  console.log(`\nПредмет "${foundItem.title}" успішно видано читачу.`);
}

console.log("");
library.listAvailableItems();