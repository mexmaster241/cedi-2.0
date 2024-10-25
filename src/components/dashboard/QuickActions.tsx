const QUICK_ACTIONS = ['Send', 'Receive', 'Pay Bills', 'History'] as const;

export function QuickActions() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
      {QUICK_ACTIONS.map((action) => (
        <button
          key={action}
          className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <span className="block text-center text-gray-900 dark:text-white">
            {action}
          </span>
        </button>
      ))}
    </div>
  );
}