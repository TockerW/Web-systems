function greetUser(name: string, repeatCount: number = 1): void {
  for (let i = 0; i < repeatCount; i++) {
    console.log(`Привіт ${name}! (повідомлення #${i + 1})`);
  }
}

greetUser("Юрій", 2);
