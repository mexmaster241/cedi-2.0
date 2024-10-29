export function BalanceCard({ balance }: { balance: number }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-6 w-full max-w-md">
      <h2 className="text-sm font-clash-display text-gray-600 dark:text-gray-400">Balance</h2>
      <p className="text-3xl font-bold font-clash-display text-gray-900 dark:text-white">
        ${balance.toFixed(2)}
      </p>
    </div>
  );
}
