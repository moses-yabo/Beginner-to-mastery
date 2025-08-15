class Wallet {
  #balance = 0;
  #transactions = [];
  deposit(amount) {
    this.#proccessDeposit(amount);
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this._balance) {
      console.log('Not enough funds');
      return;
    }
    this.#proccessWithDrawal(amount);
    this.#balance -= amount;
  }

  get balance() {
    return this.#balance;
  }
  get transactions() {
    return this.#transactions;
  }

  #proccessDeposit(amount) {
    console.log(`Depositing ${amount}`);
    this.#transactions.push({
      type: 'deposit',
      amount,
    });
  }
  #proccessWithDrawal(amount) {
    console.log(`WithDraw ${amount}`);
    this.#transactions.push({
      type: 'withdraw',
      amount,
    });
  }
}

const wallet = new Wallet();
wallet.deposit(300);
wallet.withdraw(150);
console.log(wallet.transactions);
console.log(wallet.balance);
