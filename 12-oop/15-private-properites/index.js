class Wallet {
  constructor() {
    this._balance = 0;
    this._transtaction = [];
  }
  deposit(amount) {
    this._proccessDeposit(amount);
    this._balance += amount;
  }

  withdraw(amount) {
    if (amount > this._balance) {
      console.log('Not enough funds');
      return;
    }
    this._proccessWithDrawal(amount);
    this._balance -= amount;
  }

  get balance() {
    return this._balance;
  }
  get transactions() {
    return this._transtaction;
  }

  _proccessDeposit(amount) {
    console.log(`Depositing ${amount}`);
    this._transtaction.push({
      type: 'deposit',
      amount,
    });
  }
  _proccessWithDrawal(amount) {
    console.log(`WithDraw ${amount}`);
    this._transtaction.push({
      type: 'withdraw',
      amount,
    });
  }
}

const wallet = new Wallet();
wallet.deposit(300);
wallet.withdraw(150);
console.log(wallet.balance);
console.log(wallet.transactions);
