import { checkBalance,deposit,withdraw,showTransactions } from "./bank.js"
deposit(1, 1500);
checkBalance(1);
deposit(1, 1000);
checkBalance(1);
withdraw(1,20000)
checkBalance(1);
showTransactions(1)