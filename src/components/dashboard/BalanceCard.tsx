export function BalanceCard({ balance }: { balance: number }) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-sm text-gray-600 dark:text-gray-400">Total Balance</h2>
        <p className="text-3xl font-bold text-gray-900 dark:text-white">
          ${balance.toFixed(2)}
        </p>
      </div>
    );
  }