// BudgetBuddy App

// Get elements from the DOM
const incomeAmount = document.getElementById('income-amount');
const expenseAmount = document.getElementById('expense-amount');
const balanceAmount = document.getElementById('balance-amount');
const transactionForm = document.getElementById('transaction-form');
const transactionList = document.getElementById('transaction-list');

let income = 0;
let expenses = 0;
let balance = 0;
let transactions = [];

// Update the UI to reflect income, expenses, and balance
function updateUI() {
    incomeAmount.textContent = `$${income.toFixed(2)}`;
    expenseAmount.textContent = `$${expenses.toFixed(2)}`;
    balanceAmount.textContent = `$${balance.toFixed(2)}`;
}

// Add a new transaction
function addTransaction(description, amount, type) {
    const transaction = {
        id: Date.now(),
        description,
        amount: parseFloat(amount),
        type
    };

    transactions.push(transaction);
    updateBudget(transaction);
    renderTransaction(transaction);
}

// Update budget values based on transaction type
function updateBudget(transaction) {
    if (transaction.type === 'income') {
        income += transaction.amount;
    } else if (transaction.type === 'expense') {
        expenses += transaction.amount;
    }

    balance = income - expenses;
    updateUI();
}

// Render the transaction to the transaction list
function renderTransaction(transaction) {
    const transactionItem = document.createElement('li');
    transactionItem.classList.add(transaction.type);
    transactionItem.innerHTML = `
        ${transaction.description}
        <span>$${transaction.amount.toFixed(2)}</span>
        <button class="delete-btn" onclick="deleteTransaction(${transaction.id})">X</button>
    `;

    transactionList.appendChild(transactionItem);
}

// Delete a transaction
function deleteTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
    recalculateBudget();
    renderTransactionList();
}

// Recalculate budget after deleting a transaction
function recalculateBudget() {
    income = 0;
    expenses = 0;
    transactions.forEach(transaction => {
        if (transaction.type === 'income') {
            income += transaction.amount;
        } else if (transaction.type === 'expense') {
            expenses += transaction.amount;
        }
    });
    balance = income - expenses;
    updateUI();
}

// Render the entire transaction list
function renderTransactionList() {
    transactionList.innerHTML = '';
    transactions.forEach(transaction => {
        renderTransaction(transaction);
    });
}

// Event listener for form submission
transactionForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const description = document.getElementById('description').value;
    const amount = document.getElementById('amount').value;
    const type = document.getElementById('type').value;

    if (description.trim() !== '' && amount.trim() !== '' && !isNaN(amount) && parseFloat(amount) > 0) {
        addTransaction(description, amount, type);
        transactionForm.reset();
    } else {
        alert('Please enter a valid description and amount.');
    }
});

// Initialize the app
updateUI();
