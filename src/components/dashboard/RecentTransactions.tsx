interface Transaction {
  producto: string;
  tipo: string;
  estatus: string;
  monto: number;
  date: string;
}

export function RecentTransactions({ transactions }: { transactions: Transaction[] }) {
  return (
    <div className="bg-cedi-light-gray dark:bg-gray-800 rounded-lg shadow-md p-6 mt-4">
      <h2 className="text-lg font-clash-display font-semibold mb-4 text-gray-900 dark:text-white">
        Transacciones Recientes
      </h2>
      <div className="space-y-4">
        {transactions.map((transaction, index) => (
          <div 
            key={index} 
            className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2 hover:bg-cedi-dark-gray group transition-all rounded-lg p-2 cursor-pointer"
          >
            <div className="grid grid-cols-4 gap-4 flex-grow mr-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Producto</p>
                <p className="text-gray-900 dark:text-white group-hover:text-white font-clash-display">
                  {transaction.producto}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Tipo</p>
                <p className="text-gray-900 dark:text-white group-hover:text-white font-clash-display">
                  {transaction.tipo}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Estatus</p>
                <p className="text-gray-900 dark:text-white group-hover:text-white font-clash-display">
                  {transaction.estatus}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Fecha</p>
                <p className="text-gray-900 dark:text-white group-hover:text-white font-clash-display">
                  {transaction.date}
                </p>
              </div>
            </div>
            <span
              className={`font-clash-display whitespace-nowrap ${
                transaction.monto > 0 
                  ? 'text-green-600 group-hover:text-green-400' 
                  : 'text-red-600 group-hover:text-red-400'
              }`}
            >
              ${Math.abs(transaction.monto).toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
