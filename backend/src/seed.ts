import { Category } from "./entity/Category";
import { AppDataSource } from "./data-source";
import { Tag } from "./entity/Tag";
import { User } from "./entity/User";
import { Ad } from "./entity/Ad";

const seed = async () => {
  console.log("Data Source has been initialized!");

  try {
    AppDataSource.manager.clear(Ad);
    AppDataSource.manager.clear(Category);
    AppDataSource.manager.clear(Tag);
    AppDataSource.manager.clear(User);

    // Create category
    const category1 = new Category();
    category1.name = "Electronics";
    await AppDataSource.manager.save(category1);

    const category2 = new Category();
    category2.name = "Books";
    await AppDataSource.manager.save(category2);

    const category3 = new Category();
    category3.name = "Clothing";
    await AppDataSource.manager.save(category3);

    // Create tag
    const tag1 = new Tag();
    tag1.name = "Gadget";
    await AppDataSource.manager.save(tag1);

    const tag2 = new Tag();
    tag2.name = "Smartphone";
    await AppDataSource.manager.save(tag2);

    const tag3 = new Tag();
    tag3.name = "Apple";
    await AppDataSource.manager.save(tag3);

    const tag4 = new Tag();
    tag4.name = "Book";
    await AppDataSource.manager.save(tag4);

    const tag5 = new Tag();
    tag5.name = "Fiction";
    await AppDataSource.manager.save(tag5);

    const tag6 = new Tag();
    tag6.name = "fantasy";
    await AppDataSource.manager.save(tag6);

    // Create user
    const user1 = new User();
    user1.name = "John Doe";
    user1.email = "user@gg.com";
    await AppDataSource.manager.save(user1);

    const user2 = new User();
    user2.name = "Jane Doe";
    user2.email = "asasa@sss.com";
    await AppDataSource.manager.save(user2);

    const user3 = new User();
    user3.name = "John Smith";
    user3.email = "zdzd@zd.Com";
    await AppDataSource.manager.save(user3);

    // Create ad
    const ad1 = new Ad();
    ad1.title = "iPhone 13 for sale";
    ad1.description = "A brand new iPhone 13.";
    ad1.price = 999;
    ad1.image = "iphone13.jpg";
    ad1.user = user1;
    ad1.category = category1;
    ad1.tags = [tag1];
    await AppDataSource.manager.save(ad1);

    const ad2 = new Ad();
    ad2.title = "Harry Potter and the Philosopher's Stone";
    ad2.description = "A brand new Harry Potter book.";
    ad2.price = 15;
    ad2.image = "harrypotter.jpg";
    ad2.user = user2;
    ad2.category = category2;
    ad2.tags = [tag4, tag5];
    await AppDataSource.manager.save(ad2);

    const ad3 = new Ad();
    ad3.title = "Apple Watch Series 7";
    ad3.description = "A brand new Apple Watch Series 7.";
    ad3.price = 399;
    ad3.image = "applewatch.jpg";
    ad3.user = user3;
    ad3.category = category1;
    ad3.tags = [tag1, tag3];
    await AppDataSource.manager.save(ad3);

    const ad4 = new Ad();
    ad4.title = "The Hobbit";
    ad4.description = "A brand new The Hobbit book.";
    ad4.price = 20;
    ad4.image = "hobbit.jpg";
    ad4.user = user1;
    ad4.category = category2;
    ad4.tags = [tag4, tag6];
    await AppDataSource.manager.save(ad4);

    console.log("Initialization data created successfully.");
  } catch (error) {
    console.error("Error initializing data:", error);
    // Handle error as per your application's requirements
  }
};

export default seed;
