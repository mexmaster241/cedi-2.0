interface Transaction {
    title: string;
    amount: number;
    date: string;
  }
  
  export function RecentTransactions({ transactions }: { transactions: Transaction[] }) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          Recent Transactions
        </h2>
        <div className="space-y-4">
          {transactions.map((transaction, index) => (
            <div key={index} className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="text-gray-900 dark:text-white">{transaction.title}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
              <span
                className={`font-semibold ${
                  transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                }`}
              >
                ${Math.abs(transaction.amount).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }